import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lenin Raghuvanshi - Human rights activist",
  description: "One day will get noble prize for peace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}