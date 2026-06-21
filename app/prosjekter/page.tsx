import type { Metadata } from "next";
import ProsjekterContent from "./ProsjekterContent";

export const metadata: Metadata = {
  title: "Prosjekter",
};

export default function Prosjekter() {
  return <ProsjekterContent />;
}
