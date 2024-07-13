import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import { GradientBackground } from "@/components/ui/backgroundgradient";
import { Toaster } from "@/components/ui/toaster";
import { isMobile } from "@/lib/utils";

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
  const userAgent = headers().get("user-agent") || "";
  const checkMobile = isMobile(userAgent);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-row items-start justify-between space-x-1 w-full">
          <GradientBackground />
          {!checkMobile && <LeftComponent />}
          {children}
          <RightComponent isMobile={checkMobile} />
          <Toaster />
        </main>
      </body>
    </html>
  );
}
