import React from "react";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconExpertTeam(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true" {...props}>
      <circle cx="12" cy="11" r="3.5" {...stroke} />
      <path d="M6 24v-1.5c0-2.8 2.5-5 6-5s6 2.2 6 5V24" {...stroke} />
      <circle cx="22" cy="12" r="2.8" {...stroke} />
      <path d="M18 24v-1.2c0-2 1.8-3.6 4-3.6" {...stroke} />
    </svg>
  );
}

export function IconEndToEnd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true" {...props}>
      <path d="M16 4 8 7.5V15c0 4.8 3.2 9.2 8 10.5 4.8-1.3 8-5.7 8-10.5V7.5L16 4Z" {...stroke} />
      <path d="M12 16l2.5 2.5L20 13" {...stroke} strokeWidth="2" />
    </svg>
  );
}

export function IconTransparent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true" {...props}>
      <path d="M16 6C10 6 5.5 10 4 15c1.5 5 6 9 12 9s10.5-4 12-9c-1.5-5-6-9-12-9Z" {...stroke} />
      <circle cx="16" cy="15" r="3.5" {...stroke} />
      <circle cx="16" cy="15" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFastTurnaround(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true" {...props}>
      <path d="M18 4 8 18h8l-1 10 10-16h-8l1-8Z" {...stroke} />
    </svg>
  );
}

export function IconDedicatedSupport(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true" {...props}>
      <path d="M8 10c0-3.3 3.6-6 8-6s8 2.7 8 6-3.6 6-8 6-8-2.7-8-6Z" {...stroke} />
      <path d="M6 10v4c0 4.4 4.5 8 10 8s10-3.6 10-8v-4" {...stroke} />
      <path d="M16 22v4M12 26h8" {...stroke} />
    </svg>
  );
}
