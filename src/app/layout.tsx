import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stats Awards",
  description: "Honoring the best in the stats community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("flex h-screen flex-col p-4", inter.className)}>
        <Providers>
          <Navbar />
          <main className="grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
