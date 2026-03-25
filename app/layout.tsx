import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileShell from "@/components/MobileShell";
import { CityProvider } from "@/context/CityContext";
import { ThemeProvider } from "@/context/ThemeContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "OrthoAggregator - India's #1 Orthopaedic Implant Marketplace",
  description:
    "Compare prices and brands for 100+ orthopaedic implants. Bone plates, screws, nails, hip & knee replacements, spine implants, and more.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "OrthoAggregator",
  },
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans bg-gray-50 dark:bg-[#030712] text-gray-900 dark:text-gray-100 antialiased transition-colors`}>
        <ThemeProvider>
          <CityProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <MobileShell />
          </CityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
