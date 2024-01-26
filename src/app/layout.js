import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
        {children}
        <SpeedInsights />
        <script
          async
          defer
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
        <noscript>
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerpolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  );
}
