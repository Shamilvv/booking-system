import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALNAS TRANSPORTING W.L.L",
  description: "Official website for ALNAS TRANSPORTING W.L.L - Moving Excellence",
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
