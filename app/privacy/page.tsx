import type { Metadata } from "next";
import LegalContent from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "Terms & Privacy | stellarterm",
  description: "Terms of service and Privacy Policy for stellarterm.",
};

export default function PrivacyPage() {
  return <LegalContent defaultTab="privacy" />;
}
