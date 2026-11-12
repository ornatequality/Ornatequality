"use client";

import { usePathname } from "next/navigation";
import TopBar from "@/components/common/Topbar";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import CookieConsent from "@/components/consent/CookieConsent";
import ConsultationPopupGate from "@/components/popup/ConsultationPopupGate";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <TopBar />
      <Header />
      <main className="site-main flex-1 w-full bg-white">{children}</main>
      <WhatsAppButton />
      <ConsultationPopupGate />
      <CookieConsent />
      <Footer />
    </>
  );
}
