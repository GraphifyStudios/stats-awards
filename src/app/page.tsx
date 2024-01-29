import Countdown from "@/components/countdown";
import Date from "@/components/date";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { BsDiscord } from "react-icons/bs";

export default function Home() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-4 text-center">
      <div className="absolute -z-10 h-80 w-80 rounded-full bg-[radial-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#ffca00] via-[#ffca00] to-[#ff6b00] opacity-30 blur-3xl"></div>
      <div className="flex flex-col items-center justify-center gap-1.5 text-center">
        <h1 className="inline-block bg-gradient-to-b from-[#FAE965] to-[#F4B446] bg-clip-text text-5xl font-bold tracking-tighter text-transparent drop-shadow-lg [text-wrap:balance]">
          Stats Awards 2023
        </h1>
        <div className="flex items-center gap-1 drop-shadow-lg">
          <p className="text-xs font-semibold text-[#0094fe]">
            Presented by Graphify Studios
          </p>
          <Image
            src="/graphify.jpg"
            alt="Graphify Logo"
            width={16}
            height={16}
            className="rounded-full"
          />
          <p className="text-xs font-semibold">
            <Date />
          </p>
        </div>
      </div>
      <Countdown />
      <div className="flex flex-col items-center gap-3 md:flex-row">
        <a
          href="https://youtube.com/@graphifystatistics"
          target="_blank"
          className={buttonVariants({
            variant: "brand",
            size: "lg",
            className: "relative flex items-center gap-2 drop-shadow-lg",
          })}
        >
          Subscribe
        </a>
        <a
          href="https://discord.com/invite/NapeGNM6p6"
          target="_blank"
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "flex items-center gap-2 drop-shadow-lg",
          })}
        >
          <BsDiscord /> Join the Discord
        </a>
      </div>
    </div>
  );
}
