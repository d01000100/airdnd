import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import { Navbar } from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

// Font Objects to get classes to style with those fonts
// Next includes the fonts in our proyect and exposes them to the client 
const inter = Inter({ subsets: ["latin"] });
const font = Nunito({ subsets: ["latin"] });

// Reserved constant to control title,. description, etc
export const metadata: Metadata = {
  title: "Airdnd",
  description: "Look for tables near you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal
          />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
