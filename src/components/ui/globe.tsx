"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
  memo,
} from "react";
import { Color, Scene, Fog, PerspectiveCamera, type Group } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

// Extend Three.js elements for React Three Fiber
declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: ThreeElements["mesh"] & (new () => ThreeGlobe);
  }
}

extend({ ThreeGlobe });

// Constants for performance optimization
const RING_PROPAGATION_SPEED = 3;
const RING_UPDATE_INTERVAL = 2000;
const ASPECT_RATIO = 1.2;
const CAMERA_Z = 300;
const CAMERA_FOV = 50;
const CAMERA_NEAR = 180;
const CAMERA_FAR = 1800;
const ARC_STROKE_VALUES = [0.32, 0.28, 0.3] as const;

// Type definitions for enhanced type safety
export interface Position {
  readonly order: number;
  readonly startLat: number;
  readonly startLng: number;
  readonly endLat: number;
  readonly endLng: number;
  readonly arcAlt: number;
  readonly color: string;
}

export interface GlobePoint {
  readonly size: number;
  readonly order: number;
  readonly color: string;
  readonly lat: number;
  readonly lng: number;
}

export interface RingData {
  readonly lat: number;
  readonly lng: number;
  readonly color: string;
}

export interface RgbColor {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

export interface GlobeMaterial {
  color: Color;
  emissive: Color;
  emissiveIntensity: number;
  shininess: number;
}

export interface GlobeConfig {
  readonly pointSize?: number;
  readonly globeColor?: string;
  readonly showAtmosphere?: boolean;
  readonly atmosphereColor?: string;
  readonly atmosphereAltitude?: number;
  readonly emissive?: string;
  readonly emissiveIntensity?: number;
  readonly shininess?: number;
  readonly polygonColor?: string;
  readonly ambientLight?: string;
  readonly directionalLeftLight?: string;
  readonly directionalTopLight?: string;
  readonly pointLight?: string;
  readonly arcTime?: number;
  readonly arcLength?: number;
  readonly rings?: number;
  readonly maxRings?: number;
  readonly initialPosition?: {
    readonly lat: number;
    readonly lng: number;
  };
  readonly autoRotate?: boolean;
  readonly autoRotateSpeed?: number;
}

export interface WorldProps {
  readonly globeConfig: GlobeConfig;
  data: Position[];
}

interface DefaultGlobeProps {
  readonly pointSize: number;
  readonly atmosphereColor: string;
  readonly showAtmosphere: boolean;
  readonly atmosphereAltitude: number;
  readonly polygonColor: string;
  readonly globeColor: string;
  readonly emissive: string;
  readonly emissiveIntensity: number;
  readonly shininess: number;
  readonly arcTime: number;
  readonly arcLength: number;
  readonly rings: number;
  readonly maxRings: number;
}

/**
 * Utility function to convert hex color to RGB values
 */
export function hexToRgb(hex: string): RgbColor | null {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const normalizedHex = hex.replace(
    shorthandRegex,
    (_: string, r: string, g: string, b: string): string =>
      r + r + g + g + b + b,
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    normalizedHex,
  );

  if (!result) return null;

  return {
    r: Number.parseInt(result[1] ?? "0", 16),
    g: Number.parseInt(result[2] ?? "0", 16),
    b: Number.parseInt(result[3] ?? "0", 16),
  };
}

/**
 * Generate array of unique random numbers within range
 */
export function genRandomNumbers(
  min: number,
  max: number,
  count: number,
): number[] {
  if (count <= 0 || min >= max) return [];

  const maxPossible = max - min;
  const actualCount = Math.min(count, maxPossible);
  const numbers = new Set<number>();

  while (numbers.size < actualCount) {
    const randomNum = Math.floor(Math.random() * maxPossible) + min;
    numbers.add(randomNum);
  }

  return Array.from(numbers);
}

/**
 * Get random arc stroke value for performance optimization
 */
function getRandomArcStroke(): number {
  const randomIndex = Math.floor(Math.random() * ARC_STROKE_VALUES.length);
  return ARC_STROKE_VALUES[randomIndex] ?? 0.3;
}

/**
 * Custom hook to memoize globe configuration with defaults
 */
function useGlobeConfig(globeConfig: GlobeConfig): DefaultGlobeProps {
  return useMemo(
    (): DefaultGlobeProps => ({
      pointSize: 1,
      atmosphereColor: "#ffffff",
      showAtmosphere: true,
      atmosphereAltitude: 0.1,
      polygonColor: "rgba(255,255,255,0.7)",
      globeColor: "#1d072e",
      emissive: "#000000",
      emissiveIntensity: 0.1,
      shininess: 0.9,
      arcTime: 2000,
      arcLength: 0.9,
      rings: 1,
      maxRings: 3,
      ...globeConfig,
    }),
    [globeConfig],
  );
}

/**
 * Custom hook to process and memoize globe data
 */
function useGlobeData(data: readonly Position[], pointSize: number) {
  return useMemo(() => {
    if (!data?.length) return { points: [], filteredPoints: [] };

    // Generate points from arc data
    const points: GlobePoint[] = [];
    for (const arc of data) {
      points.push(
        {
          size: pointSize,
          order: arc.order,
          color: arc.color,
          lat: arc.startLat,
          lng: arc.startLng,
        },
        {
          size: pointSize,
          order: arc.order,
          color: arc.color,
          lat: arc.endLat,
          lng: arc.endLng,
        },
      );
    }

    // Remove duplicates based on lat/lng coordinates for performance
    const filteredPoints = points.filter(
      (point, index, array) =>
        array.findIndex((p) => p.lat === point.lat && p.lng === point.lng) ===
        index,
    );

    return { points, filteredPoints };
  }, [data, pointSize]);
}

/**
 * Optimized Globe component with improved performance and type safety
 * Eliminates drag animations and focuses on smooth rendering
 */
export const Globe = memo<WorldProps>(({ globeConfig, data }) => {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<Group | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const config = useGlobeConfig(globeConfig);
  const { filteredPoints } = useGlobeData(data, config.pointSize);

  /**
   * Initialize globe instance with error handling
   */
  const initializeGlobe = useCallback(() => {
    if (globeRef.current || !groupRef.current) return;

    try {
      globeRef.current = new ThreeGlobe();
      groupRef.current.add(globeRef.current);
      setIsInitialized(true);
    } catch (error) {
      console.error("Failed to initialize globe:", error);
    }
  }, []);

  /**
   * Update globe material properties with type safety
   */
  const updateGlobeMaterial = useCallback(() => {
    if (!globeRef.current || !isInitialized) return;

    try {
      const material =
        globeRef.current.globeMaterial() as unknown as GlobeMaterial;
      material.color = new Color(config.globeColor);
      material.emissive = new Color(config.emissive);
      material.emissiveIntensity = config.emissiveIntensity;
      material.shininess = config.shininess;
    } catch (error) {
      console.error("Failed to update globe material:", error);
    }
  }, [
    isInitialized,
    config.globeColor,
    config.emissive,
    config.emissiveIntensity,
    config.shininess,
  ]);

  /**
   * Configure globe data and appearance with optimized performance
   */
  const configureGlobeData = useCallback(() => {
    if (!globeRef.current || !isInitialized || !data?.length) return;

    try {
      const globe = globeRef.current;

      // Configure hexagon polygons (countries) with optimized settings
      globe
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(config.showAtmosphere)
        .atmosphereColor(config.atmosphereColor)
        .atmosphereAltitude(config.atmosphereAltitude)
        .hexPolygonColor(() => config.polygonColor);

      // Configure arcs with performance optimizations
      globe
        .arcsData(data)
        .arcStartLat((d) => (d as Position).startLat)
        .arcStartLng((d) => (d as Position).startLng)
        .arcEndLat((d) => (d as Position).endLat)
        .arcEndLng((d) => (d as Position).endLng)
        .arcColor((d: unknown) => (d as Position).color)
        .arcAltitude((d) => (d as Position).arcAlt)
        .arcStroke(getRandomArcStroke)
        .arcDashLength(config.arcLength)
        .arcDashInitialGap((d) => (d as Position).order)
        .arcDashGap(15)
        .arcDashAnimateTime(() => config.arcTime);

      // Configure points with merged rendering for performance
      globe
        .pointsData(filteredPoints)
        .pointColor((d) => (d as { color: string }).color)
        .pointsMerge(true)
        .pointAltitude(0.0)
        .pointRadius(2);

      // Configure rings with optimized animation
      globe
        .ringsData([])
        .ringColor(() => config.polygonColor)
        .ringMaxRadius(config.maxRings)
        .ringPropagationSpeed(RING_PROPAGATION_SPEED)
        .ringRepeatPeriod((config.arcTime * config.arcLength) / config.rings);
    } catch (error) {
      console.error("Failed to configure globe data:", error);
    }
  }, [
    isInitialized,
    data,
    filteredPoints,
    config.showAtmosphere,
    config.atmosphereColor,
    config.atmosphereAltitude,
    config.polygonColor,
    config.arcLength,
    config.arcTime,
    config.rings,
    config.maxRings,
  ]);

  /**
   * Start ring animation with proper cleanup and error handling
   */
  const startRingAnimation = useCallback(() => {
    if (!globeRef.current || !isInitialized || !data?.length) return;

    // Clear existing interval to prevent memory leaks
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (!globeRef.current || !data?.length) return;

      try {
        const randomIndices = genRandomNumbers(
          0,
          data.length,
          Math.floor((data.length * 4) / 5),
        );

        const ringsData: RingData[] = data
          .filter((_, index) => randomIndices.includes(index))
          .map((d) => ({
            lat: d.startLat,
            lng: d.startLng,
            color: d.color,
          }));

        globeRef.current.ringsData(ringsData);
      } catch (error) {
        console.error("Failed to update rings:", error);
      }
    }, RING_UPDATE_INTERVAL);
  }, [isInitialized, data]);

  // Initialize globe on mount
  useEffect(() => {
    initializeGlobe();
  }, [initializeGlobe]);

  // Update material when configuration changes
  useEffect(() => {
    updateGlobeMaterial();
  }, [updateGlobeMaterial]);

  // Configure data when globe or data changes
  useEffect(() => {
    configureGlobeData();
  }, [configureGlobeData]);

  // Start ring animation with cleanup
  useEffect(() => {
    startRingAnimation();

    // Cleanup interval on unmount to prevent memory leaks
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [startRingAnimation]);

  return <group ref={groupRef} />;
});

Globe.displayName = "Globe";

/**
 * Optimized WebGL renderer configuration component
 */
export function WebGLRendererConfig(): null {
  const { gl, size } = useThree();

  useEffect(() => {
    try {
      // Cap pixel ratio for better performance on high-DPI displays
      gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      gl.setSize(size.width, size.height);
      gl.setClearColor(0xffaaff, 0);
    } catch (error) {
      console.error("Failed to configure WebGL renderer:", error);
    }
  }, [gl, size.width, size.height]);

  return null;
}

/**
 * Optimized World component with performance improvements and no drag animations
 * Maintains all functionality while eliminating drag interactions for smoother experience
 */
export const World = React.memo<WorldProps>(({ globeConfig, data }) => {
  // Memoize scene creation for performance
  const scene = useMemo(() => {
    const newScene = new Scene();
    newScene.fog = new Fog(0xffffff, 400, 2000);
    return newScene;
  }, []);

  // Memoize camera creation for performance
  const camera = useMemo(
    () =>
      new PerspectiveCamera(CAMERA_FOV, ASPECT_RATIO, CAMERA_NEAR, CAMERA_FAR),
    [],
  );

  return (
    <Canvas scene={scene} camera={camera}>
      <WebGLRendererConfig />

      {/* Optimized lighting setup with disabled shadows for performance */}
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={[-400, 100, 400]}
        castShadow={false}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={[-200, 500, 200]}
        castShadow={false}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={[-200, 500, 200]}
        intensity={0.8}
        castShadow={false}
      />

      <Globe globeConfig={globeConfig} data={data} />

      {/* 
        Optimized OrbitControls with all drag animations disabled
        Maintains auto-rotation while eliminating manual interactions
      */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false} // Drag animations completely disabled
        enableDamping={false} // Disable damping for better performance
        minDistance={CAMERA_Z}
        maxDistance={CAMERA_Z}
        autoRotateSpeed={globeConfig.autoRotateSpeed ?? 1}
        autoRotate={globeConfig.autoRotate ?? true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
});

World.displayName = "World";
