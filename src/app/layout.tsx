import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/pt-serif";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "ICERCS.COM",
  description: "Karpagam Academy of Higher Education, Created by Anuj S",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
