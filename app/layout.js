// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Lenin Raghuvanshi | PVCHR",
  description: "Empowering marginalized communities through human rights initiatives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
