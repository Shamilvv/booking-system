import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALNAS Transportation",
  description: "Official website for ALNAS Transportation - Moving Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
