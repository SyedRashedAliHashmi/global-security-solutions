import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Security Solutions | CCTV Installation & Security Systems Telangana",

  description:
    "Global Security Solutions provides CCTV installation, DVR setup, WiFi camera installation, remote monitoring and surveillance systems across Telangana.",

  keywords: [
    "CCTV Installation Telangana",
    "CCTV Installation Hyderabad",
    "Security Camera Services",
    "WiFi Camera Setup",
    "DVR Installation",
    "NVR Installation",
    "Security Systems Telangana",
    "CCTV Godavarikhani",
    "CCTV Karimnagar",
    "Industrial Surveillance Telangana"
  ],

  authors: [{ name: "Global Security Solutions" }],

  openGraph: {
    title: "Global Security Solutions",
    description:
      "Professional CCTV installation and security systems across Telangana.",
    url: "https://yourwebsite.com",
    siteName: "Global Security Solutions",
    locale: "en_IN",
    type: "website",
  },
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