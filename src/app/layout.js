import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Subscribely",
  description:
    "Curated subscription services for agencies, startups, and entrepreneurs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={inter.style}>
      <body>
        {children} <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
