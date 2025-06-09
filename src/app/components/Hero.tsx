import { Poppins, Tomorrow } from "next/font/google";
import dynamic from "next/dynamic";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["700"], // Only use needed weights
  // font-display: swap is default in next/font
});

// Lazy load the animation to avoid blocking text render
const ElevenGlobe = dynamic(() => import("../animations/eleven-globe"), {
  loading: () => null,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative container mx-auto flex h-dvh w-full justify-center"
    >
      <div className="relative flex size-full flex-col items-center justify-start px-6 pt-24 pb-40 md:justify-center md:px-24 md:pt-8 md:pb-60">
        <span
          className={`text-center text-5xl leading-none font-semibold whitespace-pre-wrap text-white sm:text-7xl md:text-[8rem] xl:text-[14rem]`}
        >
          elevenhats
        </span>
        <span className={`w-full text-center font-light text-white`}>
          La prima boutique del software in Italia. <br />
          L&apos;alleato per uno sviluppo conveniente, rapido e di qualità.
        </span>
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center overflow-hidden">
          <ElevenGlobe />
        </div>
        <div className="absolute bottom-0 z-40 h-32 w-full bg-gradient-to-t from-black to-black/0"></div>
      </div>

      {/* Content Grid 
      <div className="pointer-events-none relative z-10 grid h-full grid-cols-1 content-end md:grid-cols-2">
        {/* Left Column - Main Title and Button *
        <div className="flex flex-col justify-end md:justify-end md:pb-12">
          <div className="space-y-8 md:space-y-12">
            <h1
              className={`text-4xl font-light text-white md:text-7xl ${tomorrow.className}`}
            >
              Il Partner che <br /> ti semplifica la vita
            </h1>
            <Button
              size={"wide"}
              variant={"outline"}
              className={`hover:bg-accent/20 pointer-events-auto w-full rounded-none border border-white/20 bg-transparent text-sm font-light text-white hover:cursor-pointer hover:text-white md:w-fit ${tomorrow.className}`}
            >
              Scopri di più
              <ArrowUpRight
                viewBox="4 4 16 16"
                strokeWidth={1}
                className="transition-colors duration-300"
              />
            </Button>
          </div>
        </div>

        {/* Right Column - Description 
        <div className="pointer-events-none flex h-min pt-12 pb-12 align-bottom md:h-full md:items-end md:justify-end md:pt-0">
          <div className="max-w-sm">
            <h2
              className={`border-l border-white/20 pl-4 text-sm font-light text-white md:text-base ${tomorrow.className}`}
            >
              La prima boutique del software in Italia. <br />
              L&apos;alleato per uno sviluppo conveniente, rapido e di qualità.
            </h2>
          </div>
        </div>
      </div>*/}
    </section>
  );
}
