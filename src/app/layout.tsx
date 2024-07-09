import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammed Mahmood Alam",
  description: "Senior full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-row items-start justify-between space-x-1 w-full">
          <LeftComponent />
          {children}
          <RightComponent />
        </main>
      </body>
    </html>
  );
}
