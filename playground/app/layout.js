import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuickSign Playground",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-grid`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
