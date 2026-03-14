import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Sahina Beauté",
  description: "Salon de Beauté",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="cursor-none">
        <CustomCursor/>
        <Navbar />
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}