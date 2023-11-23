"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mb-4 flex items-center justify-between rounded-full bg-muted px-4 py-3">
      <Link
        href="/"
        className="flex items-center gap-1 transition-all hover:opacity-80"
      >
        <Image src="/logo.png" alt="Stats Awards Logo" width={28} height={28} />
        <p className="inline-block bg-gradient-to-b from-[#FAE965] to-[#F4B446] bg-clip-text text-lg font-medium text-transparent">
          Stats Awards
        </p>
      </Link>
    </nav>
  );
}
