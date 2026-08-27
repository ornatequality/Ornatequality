"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useEffect } from "react";

function shouldKeepHashScroll() {
  return Boolean(window.location.hash);
}

function resetWindowScroll() {
  if (shouldKeepHashScroll()) return;

  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  document.body.scrollTop = 0;
  html.style.scrollBehavior = previous;
}

export default function RouteScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    resetWindowScroll();
  }, [pathname]);

  useEffect(() => {
    resetWindowScroll();

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) resetWindowScroll();
    };

    window.addEventListener("pageshow", onPageShow);
    const frame = window.requestAnimationFrame(resetWindowScroll);
    const later = window.setTimeout(resetWindowScroll, 0);

    return () => {
      window.removeEventListener("pageshow", onPageShow);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(later);
    };
  }, [pathname]);

  return null;
}
