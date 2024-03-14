import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@styles/globals.css';
import Header from "@components/HeaderComponent";
import Footer from "@components/FooterComponent";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yagzan Manju",
  description: "Domain webiste of Yagzan Manjunaath ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
