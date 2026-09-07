"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BloomButton } from "@/components/shared/BloomButton";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MobileNav } from "./MobileNav";
import { SignatureName } from "./SignatureName";

export function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <SignatureName name={siteConfig.name} className="text-xl text-foreground sm:text-2xl" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {siteConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.span
                key={item.href}
                className="relative inline-block"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.08, y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
                {isActive ? (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-primary shadow-[0_0_10px_2px_var(--primary)]"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 30 }
                    }
                  />
                ) : null}
              </motion.span>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <span className="hidden sm:inline-flex">
            <BloomButton>
              <Button asChild variant="outline" size="sm">
                <a href="/resume.pdf" download>
                  Resume
                </a>
              </Button>
            </BloomButton>
          </span>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
