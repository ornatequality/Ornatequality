"use client";

import { useEffect, useState } from "react";
import ConsultationPopup from "./ConsultationPopup";

export default function ConsultationPopupGate() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return <ConsultationPopup />;
}
