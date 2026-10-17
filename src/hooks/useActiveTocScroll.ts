import { useEffect, useRef } from "react";

/** Keeps the active TOC item visible inside `.tocList` without moving the page. */
export function useActiveTocScroll(activeId: string) {
  const tocListRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    const list = tocListRef.current;
    if (!list || !activeId) return;

    const activeLink = list.querySelector<HTMLElement>(`[data-toc-id="${activeId}"]`);
    if (!activeLink) return;

    const listRect = list.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    if (list.scrollWidth > list.clientWidth + 1) {
      const overflowLeft = linkRect.left - listRect.left;
      const overflowRight = linkRect.right - listRect.right;
      if (overflowLeft < 0 || overflowRight > 0) {
        list.scrollBy({
          left: overflowLeft < 0 ? overflowLeft - 8 : overflowRight + 8,
          behavior: "smooth",
        });
      }
    }

    if (list.scrollHeight > list.clientHeight + 1) {
      const offset =
        activeLink.offsetTop - (list.clientHeight - activeLink.offsetHeight) / 2;
      list.scrollTo({ top: Math.max(0, offset), behavior: "smooth" });
    }
  }, [activeId]);

  return tocListRef;
}
