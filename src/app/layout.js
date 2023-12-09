import { Inter } from "next/font/google";

import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Subscribely",
  description:
    "Curated subscription services for agencies, startups, and entrepreneurs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
      </style>

      <body className={inter.className}>
        {children} <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
