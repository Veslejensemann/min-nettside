import type { Metadata } from "next";
import BloggContent from "./BloggContent";

export const metadata: Metadata = {
  title: "Tanker",
};

export default function Blogg() {
  return <BloggContent />;
}
