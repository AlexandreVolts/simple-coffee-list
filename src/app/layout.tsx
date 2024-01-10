import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Coffee Page",
  description: "Simple Coffee Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
