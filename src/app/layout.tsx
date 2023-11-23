import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://statsawrds.vercel.app"),
  title: {
    default: "Stats Awards",
    template: "%s — Stats Awards",
  },
  description: "Honoring the best in the stats community.",
  twitter: {
    card: "summary",
    creator: "@GraphifyStudios",
    creatorId: "1457885285241421824",
  },
  openGraph: {
    type: "website",
    url: "/",
    images: [
      {
        url: "https://yt3.googleusercontent.com/aMkBGsKW1euQedPggzVhFZyol47NG82GLfZCfiKSg1i3gdf6FIaaSz9OxuZTq346JOnjevlSw8g=s176-c-k-c0x00ffffff-no-rj",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAE965",
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
