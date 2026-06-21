import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import GalleriContent from "./GalleriContent";

export const metadata: Metadata = {
  title: "Galleri",
};

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];

function fileNameToCaption(file: string) {
  const base = file.replace(/\.[^/.]+$/, "");
  const withSpaces = base.replace(/[-_]+/g, " ").trim();
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}

function getGalleryImages() {
  const dir = path.join(process.cwd(), "public", "galleri");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) =>
      IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())
    )
    .sort()
    .map((file) => ({ file, caption: fileNameToCaption(file) }));
}

export default function Galleri() {
  const images = getGalleryImages();

  return <GalleriContent images={images} />;
}
