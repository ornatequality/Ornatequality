import type { Metadata } from "next";
import { WpcBanner } from "./sections/WpcBanner";
import { WpcPageContent } from "./sections/WpcPageContent";

const CANONICAL = "https://ornatequality.com/services/wpc-eta-approval";

export const metadata: Metadata = {
  title: {
    absolute: "WPC ETA Approval | Ornate Quality Services",
  },
  description:
    "Get your wireless product WPC-ETA approved. Equipment Type Approval for Wi-Fi, Bluetooth, RFID and RF devices — documentation, NABL RF testing, and Saral Sanchar filing by Ornate Quality Service Pvt Ltd.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "WPC ETA Approval | Ornate Quality Services",
    description:
      "Get your wireless product WPC-ETA approved. Equipment Type Approval for Wi-Fi, Bluetooth, RFID and RF devices — documentation, NABL RF testing, and Saral Sanchar filing by Ornate Quality Service Pvt Ltd.",
    url: CANONICAL,
  },
};

export default function WpcEtaApprovalPage() {
  return (
    <>
      <WpcBanner />
      <WpcPageContent />
    </>
  );
}
