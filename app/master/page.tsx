import type { Metadata } from "next";
import MasterContent from "./MasterContent";

export const metadata: Metadata = {
  title: "Master",
};

export default function Master() {
  return <MasterContent />;
}
