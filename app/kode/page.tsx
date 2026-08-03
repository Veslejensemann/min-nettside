import type { Metadata } from "next";
import BloggContent from "./BloggContent";

export const metadata: Metadata = {
  title: "Kode",
};

export default function Blogg() {
  return <BloggContent />;
}
