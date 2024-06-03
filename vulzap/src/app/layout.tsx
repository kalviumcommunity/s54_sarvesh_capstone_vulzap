import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";

const inter = Fira_Code({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "VulZap",
  description:
    "Empowering Students and Cybersecurity Researchers to Secure the Digital Realm",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
