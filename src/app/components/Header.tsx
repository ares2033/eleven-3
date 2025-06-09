"use client";
import { useState, useEffect, useRef } from "react";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu } from "lucide-react";
import type { JSX } from "react/jsx-runtime";
import { Tomorrow } from "next/font/google";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function ResponsiveHeader(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    // Initial check
    setTimeout(handleScroll, 100);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const textColorClass = "text-white";
  const borderColorClass = "border-white/20";

  return (
    <header
      ref={headerRef}
      className={`fixed top-4 left-1/2 z-50 container mx-auto ${
        isScrolled ? "h-14" : "mt-8 h-20"
      } -translate-x-1/2 rounded-full border backdrop-blur transition-all duration-300 ${borderColorClass} ${tomorrow.className} max-w-[90%] xl:max-w-[75%]`}
      style={{ backgroundColor: "transparent" }}
    >
      <div className="flex h-full w-full items-center justify-between">
        {/* Logo - Left side */}
        <div className="flex items-center ps-4 sm:ps-8">
          <Link href="/" className="flex items-center space-x-2">
            <span
              className={`font-sans text-base font-bold transition-colors duration-300 sm:text-lg ${textColorClass} `}
            >
              elevenhats
            </span>
          </Link>
        </div>

        {/* Navigation - Right side */}
        <div className="flex h-full items-center">
          {/* Mobile menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-4 px-4 text-center hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
                onClick={() => setIsSheetOpen(true)}
              >
                <Menu
                  className={`h-5 w-5 transition-colors duration-300 ${textColorClass}`}
                />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 border-l border-white/20 bg-black p-0 [&>button]:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Header area with search */}
                <div className="border-b border-white/20 p-6">
                  <h2
                    className={`text-xl font-light text-white ${tomorrow.className}`}
                  >
                    Menu
                  </h2>
                </div>

                {/* Navigation links */}
                <div className="flex-1">
                  <Link
                    href="/solutions"
                    onClick={() => setIsSheetOpen(false)}
                    className={`group flex h-20 items-center justify-between border-b border-white/20 px-6 transition-colors ${
                      pathname === "/solutions"
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`text-lg font-light ${tomorrow.className}`}
                    >
                      Solutions
                    </span>
                    <ArrowUpRight
                      viewBox="4 4 16 16"
                      strokeWidth={1}
                      className={`h-5 w-5 transition-colors duration-300 ${
                        pathname === "/solutions" ? "text-black" : "text-white"
                      }`}
                    />
                  </Link>

                  <Link
                    href="/products"
                    onClick={() => setIsSheetOpen(false)}
                    className={`group flex h-20 items-center justify-between border-b border-white/20 px-6 transition-colors ${
                      pathname === "/products"
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`text-lg font-light ${tomorrow.className}`}
                    >
                      Products
                    </span>
                    <ArrowUpRight
                      viewBox="4 4 16 16"
                      strokeWidth={1}
                      className={`h-5 w-5 transition-colors duration-300 ${
                        pathname === "/products" ? "text-black" : "text-white"
                      }`}
                    />
                  </Link>

                  <Link
                    href="/chi-siamo"
                    onClick={() => setIsSheetOpen(false)}
                    className={`group flex h-20 items-center justify-between border-b border-white/20 px-6 transition-colors ${
                      pathname === "/chi-siamo"
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`text-lg font-light ${tomorrow.className}`}
                    >
                      Chi siamo
                    </span>
                    <ArrowUpRight
                      viewBox="4 4 16 16"
                      strokeWidth={1}
                      className={`h-5 w-5 transition-colors duration-300 ${
                        pathname === "/chi-siamo" ? "text-black" : "text-white"
                      }`}
                    />
                  </Link>

                  <Link
                    href="/contacts"
                    onClick={() => setIsSheetOpen(false)}
                    className={`group flex h-20 items-center justify-between border-b border-white/20 px-6 transition-colors ${
                      pathname === "/contacts"
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`text-lg font-light ${tomorrow.className}`}
                    >
                      Contacts
                    </span>
                    <ArrowUpRight
                      viewBox="4 4 16 16"
                      strokeWidth={1}
                      className={`h-5 w-5 transition-colors duration-300 ${
                        pathname === "/contacts" ? "text-black" : "text-white"
                      }`}
                    />
                  </Link>
                </div>

                {/* Footer area */}
                <div className="border-t border-white/20 p-6">
                  <p className={`text-sm text-white/70`}>elevenhats</p>
                  <p className={`text-xs text-white/50`}>
                    La prima boutique del software in Italia
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <nav className="hidden h-full lg:flex">
            <div className="flex h-full items-stretch">
              <Link
                onMouseEnter={() => setHoveredLink("solutions")}
                onMouseLeave={() => setHoveredLink(null)}
                href="/solutions"
                className={`group hover:bg-accent/20 inline-flex min-w-[80px] items-center justify-between border-s bg-transparent px-2 py-2 text-xs font-light transition-colors sm:min-w-[100px] sm:px-3 sm:text-sm md:min-w-[120px] lg:min-w-[140px] lg:px-4 xl:min-w-[180px] ${
                  pathname === "/solutions"
                    ? "bg-white text-black"
                    : `${textColorClass} hover:bg-accent/20`
                } ${borderColorClass}`}
              >
                <p className="truncate">
                  <span className="whitespace-nowrap">Solutions</span>
                </p>
                <motion.div
                  animate={{ rotate: hoveredLink === "solutions" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight
                    viewBox="4 4 16 16"
                    strokeWidth={1}
                    className={`h-3 w-3 transition-colors duration-300 sm:h-4 sm:w-4 lg:h-5 lg:w-5 ${
                      pathname === "/solutions" ? "text-black" : textColorClass
                    }`}
                  />
                </motion.div>
              </Link>
              <Link
                onMouseEnter={() => setHoveredLink("products")}
                onMouseLeave={() => setHoveredLink(null)}
                href="/products"
                className={`group hover:bg-accent/20 inline-flex min-w-[80px] items-center justify-between border-s bg-transparent px-2 py-2 text-xs font-light transition-colors focus:outline-none sm:min-w-[100px] sm:px-3 sm:text-sm md:min-w-[120px] lg:min-w-[140px] lg:px-4 xl:min-w-[180px] ${
                  pathname === "/products"
                    ? "bg-white text-black"
                    : `${textColorClass} hover:bg-accent/20`
                } ${borderColorClass}`}
              >
                <p className="truncate">
                  <span className="whitespace-nowrap">Products</span>
                </p>
                <motion.div
                  animate={{ rotate: hoveredLink === "products" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight
                    viewBox="4 4 16 16"
                    strokeWidth={1}
                    className={`h-3 w-3 transition-colors duration-300 sm:h-4 sm:w-4 lg:h-5 lg:w-5 ${
                      pathname === "/products" ? "text-black" : textColorClass
                    }`}
                  />
                </motion.div>
              </Link>
              <Link
                onMouseEnter={() => setHoveredLink("chi-siamo")}
                onMouseLeave={() => setHoveredLink(null)}
                href="/chi-siamo"
                className={`group hover:bg-accent/20 inline-flex min-w-[80px] items-center justify-between border-s bg-transparent px-2 py-2 text-xs font-light transition-colors focus:outline-none sm:min-w-[100px] sm:px-3 sm:text-sm md:min-w-[120px] lg:min-w-[140px] lg:px-4 xl:min-w-[180px] ${
                  pathname === "/chi-siamo"
                    ? "bg-white text-black"
                    : `${textColorClass} hover:bg-accent/20`
                } ${borderColorClass}`}
              >
                <p className="truncate">
                  <span className="whitespace-nowrap">Chi siamo</span>
                </p>
                <motion.div
                  animate={{ rotate: hoveredLink === "chi-siamo" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight
                    viewBox="4 4 16 16"
                    strokeWidth={1}
                    className={`h-3 w-3 transition-colors duration-300 sm:h-4 sm:w-4 lg:h-5 lg:w-5 ${
                      pathname === "/chi-siamo" ? "text-black" : textColorClass
                    }`}
                  />
                </motion.div>
              </Link>
              <Link
                onMouseEnter={() => setHoveredLink("contacts")}
                onMouseLeave={() => setHoveredLink(null)}
                href="/contacts"
                className={`group hover:bg-accent/20 inline-flex min-w-[80px] items-center justify-between rounded-e-full border-s bg-transparent px-2 py-2 text-xs font-light transition-colors focus:outline-none sm:min-w-[100px] sm:px-3 sm:text-sm md:min-w-[120px] lg:min-w-[140px] lg:px-4 xl:min-w-[180px] ${
                  pathname === "/contacts"
                    ? "bg-white text-black"
                    : `${textColorClass} hover:bg-accent/20`
                } ${borderColorClass}`}
              >
                <p className="truncate">
                  <span className="whitespace-nowrap">Contacts</span>
                </p>
                <motion.div
                  animate={{ rotate: hoveredLink === "contacts" ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight
                    viewBox="4 4 16 16"
                    strokeWidth={1}
                    className={`h-3 w-3 transition-colors duration-300 sm:h-4 sm:w-4 lg:h-5 lg:w-5 ${pathname === "/contacts" ? "text-black" : textColorClass}`}
                  />
                </motion.div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

// Add default export
export default ResponsiveHeader;
