import type { Metadata } from "next";
import { Inter, Slackey, Pangolin } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const pan = Pangolin({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pan.className}>{children}</body>
    </html>
  );
}
