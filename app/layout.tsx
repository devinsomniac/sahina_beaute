import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

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
    </html>
  );
}