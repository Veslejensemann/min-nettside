import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "Jens Anders Andresen",
    template: "%s · Jens Anders Andresen",
  },
  description:
    "Personlig nettside for Jens Anders Andresen — siviløkonom med MSc in Finance fra BI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased">
        <LanguageProvider>
          <NavBar />
          <div className="flex-1">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
