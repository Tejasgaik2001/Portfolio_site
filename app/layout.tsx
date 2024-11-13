import "./globals.css";
import type { Metadata } from "next";
import ScrollProgress from "./components/ScrollProgress";

export const metadata: Metadata = {
  title: "Creative Portfolio | Developer & Designer",
  description: "Portfolio website showcasing creative development and design work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}