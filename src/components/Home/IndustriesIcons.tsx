import React from "react";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconMonitor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" {...props}>
      <rect x="4" y="6" width="24" height="16" rx="2" {...stroke} />
      <path d="M12 26h8M16 22v4" {...stroke} />
    </svg>
  );
}

export function IconAppliance(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" {...props}>
      <path d="M11 10h10v14H11V10Z" {...stroke} />
      <path d="M13 10V7h6v3" {...stroke} />
      <path d="M11 16h10" {...stroke} />
      <path d="M16 16v8" {...stroke} />
    </svg>
  );
}

export function IconBlocks(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" {...props}>
      <rect x="6" y="16" width="9" height="9" rx="1.2" {...stroke} />
      <rect x="17" y="16" width="9" height="9" rx="1.2" {...stroke} />
      <rect x="11.5" y="6" width="9" height="9" rx="1.2" {...stroke} />
    </svg>
  );
}

export function IconChair(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" {...props}>
      <path d="M9 14h14v4H9v-4Z" {...stroke} />
      <path d="M11 18v8M21 18v8" {...stroke} />
      <path d="M9 26h14" {...stroke} />
      <path d="M10 14V8c0-1.5 1.4-3 6-3s6 1.5 6 3v6" {...stroke} />
    </svg>
  );
}

export function IconBoot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" {...props}>
      <path d="M9 6h8v10h5l4 6H9V6Z" {...stroke} />
      <path d="M9 22h17" {...stroke} />
    </svg>
  );
}

export function IconWifi(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" {...props}>
      <path d="M6 13c5.5-5.2 14.5-5.2 20 0" {...stroke} />
      <path d="M10 17.5c3.4-3.2 8.6-3.2 12 0" {...stroke} />
      <path d="M13.5 21.5c1.5-1.4 3.5-1.4 5 0" {...stroke} />
      <circle cx="16" cy="25" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBeam(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" {...props}>
      <path d="M8 7h16v4H19v10h5v4H8v-4h5V11H8V7Z" {...stroke} />
    </svg>
  );
}

export function IconPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" {...props}>
      <circle cx="16" cy="16" r="10" {...stroke} />
      <path d="M16 11v10M11 16h10" {...stroke} />
    </svg>
  );
}

export function IconBox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" {...props}>
      <path d="M6 11 16 6l10 5-10 5L6 11Z" {...stroke} />
      <path d="M6 11v11l10 5 10-5V11" {...stroke} />
      <path d="M16 16v11" {...stroke} />
    </svg>
  );
}
