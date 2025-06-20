"use client";

import { WordRotate } from "@/components/magicui/word-rotate";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function Mission() {
  return (
    <section className="container mx-auto grid h-full grid-cols-5 gap-8 px-8 py-16 md:gap-4">
      <div
        className={`col-span-5 flex flex-col items-start justify-center gap-2 px-4 text-7xl font-semibold text-white md:px-16 lg:col-span-3`}
      >
        <span className="flex items-center text-2xl font-semibold md:text-5xl">
          eleven
          <WordRotate
            words={["pay", "dash", "auth", `${"\u00A0"}times better!`, "hats"]}
          />
        </span>
        <span className="text-lg font-light md:text-4xl">
          Un ecosistema di Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Suspendisse molestie nisl ut augue dictum, vitae fringilla mi
          pharetra. Phasellus eu cursus ex. Fusce id elit ac ante sodales
          vehicula id eu lorem. Vivamus velit risus, eleifend sed aliquet eu,
          sollicitudin vitae nisl.{" "}
        </span>
      </div>
      <div className="col-span-5 flex items-center justify-center lg:col-span-2">
        <Terminal className="h-full w-full">
          <TypingAnimation duration={1} className="text-muted-foreground">
            &gt; pnpm dlx elevenhats@latest init
          </TypingAnimation>

          <AnimatedSpan delay={1000} className="text-green-500">
            <span>✔ Servizio.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-green-500">
            <span>✔ Servizio.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3000} className="text-green-500">
            <span>✔ Servizio.</span>
          </AnimatedSpan>

          <TypingAnimation
            delay={4000}
            duration={10}
            className="text-green-500"
          >
            █████████████████ 100% completed
          </TypingAnimation>

          <AnimatedSpan delay={5500} className="text-green-500">
            <span>✔ Servizio.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={6500} className="text-green-500">
            <span>✔ Servizio.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={7500} className="text-green-500">
            <span>✔ Servizio.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={8500} className="text-green-500">
            <span>✔ Servizio</span>
          </AnimatedSpan>

          <AnimatedSpan delay={9500} className="text-green-500">
            <span>✔ Servizio.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={10500} className="text-blue-500">
            <span>ℹ Updated 1 file:</span>
            <span className="pl-2">- lib/elevenhats.ts</span>
          </AnimatedSpan>

          <TypingAnimation
            delay={12500}
            duration={10}
            className="text-muted-foreground"
          >
            Project initialization completed.
          </TypingAnimation>

          <TypingAnimation
            delay={13500}
            duration={10}
            className="text-muted-foreground"
          >
            You may now contact us.
          </TypingAnimation>
        </Terminal>
      </div>
    </section>
  );
}

// Add default export
export default Mission;
