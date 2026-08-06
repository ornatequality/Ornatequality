"use client";

import dynamic from "next/dynamic";

const ConsultationPopup = dynamic(() => import("./ConsultationPopup"), {
  ssr: false,
});

export default function ConsultationPopupGate() {
  return <ConsultationPopup />;
}
