import { useEffect, useRef } from "react";

/** Keeps the active TOC item visible inside the scrollable `.tocList` as the user scrolls. */
export function useActiveTocScroll(activeId: string) {
  const tocListRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    const list = tocListRef.current;
    if (!list) return;

    const activeLink = list.querySelector<HTMLButtonElement>(`[data-toc-id="${activeId}"]`);
    if (!activeLink) return;

    activeLink.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [activeId]);

  return tocListRef;
}
