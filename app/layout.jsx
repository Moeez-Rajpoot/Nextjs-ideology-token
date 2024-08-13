import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar2";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ideology Token",
  description: "A Web3 Project by Ideology",
};

export default function RootLayout({ children }) {
  return (
    <html className="hide-scrollbar scroll-smooth" lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
