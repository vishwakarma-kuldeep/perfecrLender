"use client";
import { useRef, useState, useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
// import { animationConfig } from "@/constants/animation";

const themes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  //   const [isTransitioning, setIsTransitioning] = useState(false);
  //   const [transitionColor, setTransitionColor] = useState("");

  //   const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-10 w-[122px] rounded-full border border-border bg-card"
      />
    );
  }

  const changeTheme = (nextTheme: (typeof themes)[number]["value"]) => {
    document.documentElement.classList.add("theme-changing");

    setTheme(nextTheme);

    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-changing");
    }, 1500);
  };

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm"
      role="group"
      aria-label="Theme selection"
    >
      {themes.map(({ value, label, icon: Icon }) => {
        const active = theme === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => changeTheme(value)}
            aria-label={`Use ${label} theme`}
            aria-pressed={active}
            title={label}
            className="relative flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {active && (
              <motion.span
                layoutId="theme-active-indicator"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{
                  duration: 0.32,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            )}

            <motion.span
              className="relative z-10 flex items-center justify-center"
              animate={{
                scale: active ? 1 : 0.92,
                rotate: active ? 0 : -4,
              }}
              transition={{
                duration: 0.18,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <Icon
                size={16}
                strokeWidth={2}
                className={
                  active ? "text-primary-foreground" : "text-muted-foreground"
                }
              />
            </motion.span>
          </button>
        );
      })}
    </div>
  );
}
/*
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionColor, setTransitionColor] = useState("");

  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-10 w-[122px] rounded-full border border-border bg-card"
      />
    );
  }

  const changeTheme = (nextTheme: (typeof themes)[number]["value"]) => {
    if (nextTheme === theme || isTransitioning) {
      return;
    }

    const currentBackground = getComputedStyle(document.body).backgroundColor;

    setTransitionColor(currentBackground);
    setIsTransitioning(true);

    setTheme(nextTheme);

    if (transitionTimeout.current) {
      clearTimeout(transitionTimeout.current);
    }

    transitionTimeout.current = setTimeout(() => {
      setIsTransitioning(false);
    }, animationConfig.theme.duration);
  };

  return (
    <>
      <ThemeTransition
        active={isTransitioning}
        color={transitionColor}
        onComplete={() => setIsTransitioning(false)}
      />

      <div
        className="flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm"
        role="group"
        aria-label="Theme selection"
      >
        {themes.map(({ value, label, icon: Icon }) => {
          const active = theme === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => changeTheme(value)}
              aria-label={`Use ${label} theme`}
              aria-pressed={active}
              title={label}
              className="relative flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {active && (
                <motion.span
                  layoutId="theme-active-indicator"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{
                    duration: animationConfig.indicator.theme / 1000,
                    ease: animationConfig.theme.easing,
                  }}
                />
              )}

              <motion.span
                className="relative z-10 flex items-center justify-center"
                animate={{
                  scale: active ? 1 : 0.92,
                  rotate: active ? 0 : -4,
                }}
                transition={{
                  duration: 0.18,
                  ease: animationConfig.theme.easing,
                }}
              >
                <Icon
                  size={16}
                  strokeWidth={2}
                  className={
                    active ? "text-primary-foreground" : "text-muted-foreground"
                  }
                />
              </motion.span>
            </button>
          );
        })}
      </div>
    </>
  );
}
*/
