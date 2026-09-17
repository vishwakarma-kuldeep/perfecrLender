import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function Card({
  children,
  className,
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-border bg-card shadow-sm",
        className,
      )}
    >
      {children}
    </Component>
  );
}

type CardHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn("p-6 pb-0", className)}>{children}</div>;
}

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

type CardFooterProps = {
  children: ReactNode;
  className?: string;
};

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}
