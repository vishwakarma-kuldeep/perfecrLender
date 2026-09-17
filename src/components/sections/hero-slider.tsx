"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  heroSlides,
  heroSliderConfig,
  type HeroSlide,
} from "@/constants/slider";

const positionClasses = {
  "top-left": "items-start justify-start text-left",
  "top-center": "items-start justify-center text-center",
  "top-right": "items-start justify-end text-right",

  "center-left": "items-center justify-start text-left",
  center: "items-center justify-center text-center",
  "center-right": "items-center justify-end text-right",

  "bottom-left": "items-end justify-start text-left",
  "bottom-center": "items-end justify-center text-center",
  "bottom-right": "items-end justify-end text-right",
} as const;

const contentWidthClasses = {
  "top-left": "max-w-2xl",
  "top-center": "mx-auto max-w-2xl",
  "top-right": "ml-auto max-w-2xl",

  "center-left": "max-w-2xl",
  center: "mx-auto max-w-2xl",
  "center-right": "ml-auto max-w-2xl",

  "bottom-left": "max-w-2xl",
  "bottom-center": "mx-auto max-w-2xl",
  "bottom-right": "ml-auto max-w-2xl",
} as const;
const themeClasses = {
  light: {
    eyebrow: "text-foreground/80",
    title: "text-foreground",
    description: "text-muted-foreground",
    dotActive: "bg-foreground",
    dotInactive: "bg-foreground/30 group-hover:bg-foreground/50",
  },

  dark: {
    eyebrow: "text-white/80",
    title: "text-white",
    description: "text-white/80",
    dotActive: "bg-white",
    dotInactive: "bg-white/40 group-hover:bg-white/70",
  },

  primary: {
    eyebrow: "text-primary-foreground/80",
    title: "text-primary-foreground",
    description: "text-primary-foreground/80",
    dotActive: "bg-primary-foreground",
    dotInactive:
      "bg-primary-foreground/40 group-hover:bg-primary-foreground/70",
  },
} as const;

const backgroundClasses = {
  default: "bg-background",
  primary: "bg-primary",
  dark: "bg-foreground",
  light: "bg-card",
} as const;

const overlayClasses = {
  dark: "bg-black",
  light: "bg-white",
  primary: "bg-primary",
} as const;

function getTheme(slide: HeroSlide) {
  return slide.theme ?? "light";
}

type HeroMediaProps = {
  slide: HeroSlide;
  onError: () => void;
};

function HeroMedia({ slide, onError }: HeroMediaProps) {
  if (!slide.media || slide.type === "text") {
    return null;
  }

  if (slide.type === "video") {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={slide.media.src}
        poster={slide.media.poster}
        autoPlay={slide.media.autoplay ?? true}
        muted={slide.media.muted ?? true}
        loop={slide.media.loop ?? true}
        playsInline={slide.media.playsInline ?? true}
        onError={onError}
      />
    );
  }

  return (
    <picture className="absolute inset-0 block h-full w-full">
      {slide.media.mobileSrc && (
        <source media="(max-width: 639px)" srcSet={slide.media.mobileSrc} />
      )}

      <Image
        src={slide.media.src}
        alt={slide.media.alt ?? ""}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        onError={onError}
      />
    </picture>
  );
}

type HeroBackgroundProps = {
  slide: HeroSlide;
  mediaFailed: boolean;
};

function HeroBackground({ slide, mediaFailed }: HeroBackgroundProps) {
  const variant = slide.background?.variant ?? "default";

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 ${backgroundClasses[variant]}`}
    >
      {slide.type !== "text" && !mediaFailed && (
        <div className="absolute inset-0 bg-black/5" />
      )}
    </div>
  );
}

function HeroOverlay({
  slide,
  mediaFailed,
}: {
  slide: HeroSlide;
  mediaFailed: boolean;
}) {
  if (!slide.overlay?.enabled || slide.type === "text" || mediaFailed) {
    return null;
  }

  const variant = slide.overlay.variant ?? "dark";
  const opacity = slide.overlay.opacity ?? 0.4;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 ${overlayClasses[variant]}`}
      style={{ opacity }}
    />
  );
}

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mediaFailed, setMediaFailed] = useState(false);

  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === 0 ? heroSlides.length - 1 : current - 1,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === heroSlides.length - 1 ? 0 : current + 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  useEffect(() => {
    setMediaFailed(false);
  }, [activeIndex, activeSlide?.id]);

  useEffect(() => {
    if (!heroSliderConfig.autoplay || isPaused || heroSlides.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, heroSliderConfig.interval);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused]);

  const goToPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  };

  if (!activeSlide) {
    return null;
  }

  const theme = themeClasses[getTheme(activeSlide)];
  const position = activeSlide.content.position;

  return (
    <section
      aria-label="Featured financial solutions"
      className="relative isolate min-h-[620px] overflow-hidden sm:min-h-[680px] lg:min-h-[720px]"
      onMouseEnter={() => {
        if (heroSliderConfig.pauseOnHover) {
          setIsPaused(true);
        }
      }}
      onMouseLeave={() => {
        if (heroSliderConfig.pauseOnHover) {
          setIsPaused(false);
        }
      }}
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <HeroBackground slide={activeSlide} mediaFailed={mediaFailed} />

          {!mediaFailed && (
            <div
              className={`absolute inset-0 transition-opacity duration-200 ${
                mediaFailed ? "opacity-0" : "opacity-100"
              }`}
            >
              <HeroMedia
                slide={activeSlide}
                onError={() => setMediaFailed(true)}
              />
            </div>
          )}

          <HeroOverlay slide={activeSlide} mediaFailed={mediaFailed} />

          <div className="absolute inset-0">
            <div
              className={`mx-auto flex h-full max-w-7xl flex-col px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 ${positionClasses[position]}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={contentWidthClasses[position]}
              >
                {activeSlide.content.eyebrow && (
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.eyebrow}`}
                  >
                    {activeSlide.content.eyebrow}
                  </p>
                )}

                <h1
                  className={`mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl ${theme.title}`}
                >
                  {activeSlide.content.title}
                </h1>

                {activeSlide.content.description && (
                  <p
                    className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${theme.description}`}
                  >
                    {activeSlide.content.description}
                  </p>
                )}

                {activeSlide.content.cta && (
                  <div className="mt-8">
                    <Link
                      href={activeSlide.content.cta.href}
                      className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {activeSlide.content.cta.label}
                    </Link>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {heroSliderConfig.showArrows && heroSlides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous slide"
            // className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:left-6 lg:left-8"
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:left-6 lg:left-8"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-6 lg:right-8"
            // className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-6 lg:right-8"
          >
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </>
      )}

      {heroSliderConfig.showDots && heroSlides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20  flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
              className="group flex h-6 items-center justify-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? `w-7 ${theme.dotActive}`
                    : `w-1.5 ${theme.dotInactive}`
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
