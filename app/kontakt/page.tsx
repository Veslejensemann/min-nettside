import type { Metadata } from "next";
import KontaktContent from "./KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function Kontakt() {
  return <KontaktContent />;
}
