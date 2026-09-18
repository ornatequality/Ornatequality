import type { Metadata } from "next";
import { WpcBanner } from "./sections/WpcBanner";
import { WpcPageContent } from "./sections/WpcPageContent";

export const metadata: Metadata = {
  title: "WPC-ETA Approval Consultant in India | Ornate Quality Services",
  description:
    "Get your wireless product WPC-ETA approved. Equipment Type Approval for Wi-Fi, Bluetooth, RFID and RF devices — documentation, NABL RF testing, and Saral Sanchar filing by Ornate Quality Service Pvt Ltd.",
};

export default function WpcEtaApprovalPage() {
  return (
    <>
      <WpcBanner />
      <WpcPageContent />
    </>
  );
}
