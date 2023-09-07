import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import { Navbar } from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

// Font Objects to get classes to style with those fonts
// Next includes the fonts in our proyect and exposes them to the client 
const inter = Inter({ subsets: ["latin"] });
const font = Nunito({ subsets: ["latin"] });

// Reserved constant to control title,. description, etc
export const metadata: Metadata = {
  title: "Airdnd",
  description: "Look for tables near you",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* I can make calls to the database and the server session here, 
    because layout.tsx it's a server component */
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <RentModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
