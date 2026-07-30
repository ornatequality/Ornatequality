import React from "react";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconConsumerElectronics(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true" {...props}>
      <rect x="9" y="4" width="14" height="24" rx="3" {...stroke} />
      <path d="M13 24h6" {...stroke} />
      <circle cx="16" cy="8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconLedLighting(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true" {...props}>
      <path d="M16 5v3M10 8l2 2M22 8l-2 2M8 14h3M21 14h3" {...stroke} />
      <path d="M12 14a4 4 0 1 1 8 0c0 2.2-1.5 3.4-2 5h-4c-.5-1.6-2-2.8-2-5Z" {...stroke} />
      <path d="M13 23h6v2h-6v-2Z" {...stroke} />
    </svg>
  );
}

export function IconHomeAppliances(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true" {...props}>
      <rect x="7" y="5" width="18" height="22" rx="2" {...stroke} />
      <rect x="10" y="9" width="12" height="10" rx="1" {...stroke} />
      <circle cx="12" cy="23" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="23" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconItTelecom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true" {...props}>
      <path d="M16 26V14" {...stroke} />
      <path d="M10 26h12" {...stroke} />
      <path d="M12 14c0-2.2 1.8-4 4-4s4 1.8 4 4" {...stroke} />
      <path d="M8 10c0-4.4 3.6-8 8-8s8 3.6 8 8" {...stroke} />
      <path d="M5 6c0-6.1 4.9-11 11-11s11 4.9 11 11" {...stroke} />
    </svg>
  );
}

export function IconAutomotive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true" {...props}>
      <path d="M6 20h20l-2-7H8l-2 7Z" {...stroke} />
      <path d="M8 13l2-4h12l2 4" {...stroke} />
      <circle cx="10" cy="20" r="2" {...stroke} />
      <circle cx="22" cy="20" r="2" {...stroke} />
      <path d="M12 20h8" {...stroke} />
    </svg>
  );
}

export function IconToysGames(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true" {...props}>
      <circle cx="16" cy="16" r="9" {...stroke} />
      <circle cx="12" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 20c1.5 2 6.5 2 8 0" {...stroke} />
      <path d="M16 7v2M16 23v2M7 16h2M23 16h2" {...stroke} />
    </svg>
  );
}

export function IconMedicalDevices(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true" {...props}>
      <rect x="8" y="6" width="16" height="20" rx="3" {...stroke} />
      <path d="M16 11v10M11 16h10" {...stroke} strokeWidth="2" />
      <path d="M12 24h8" {...stroke} />
    </svg>
  );
}

export function IconPackaging(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true" {...props}>
      <path d="M16 4 6 9v14l10 5 10-5V9l-10-5Z" {...stroke} />
      <path d="M16 14v14M6 9l10 5 10-5" {...stroke} />
      <path d="M11 11.5 16 14l5-2.5" {...stroke} />
    </svg>
  );
}
