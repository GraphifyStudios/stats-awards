import { buttonVariants } from "@/components/ui/button";
import { BsDiscord } from "react-icons/bs";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
      <div className="flex flex-col items-center justify-center gap-1.5 text-center">
        <h1 className="text-5xl font-bold tracking-tighter [text-wrap:balance]">
          Honoring{" "}
          <div className="inline-block bg-gradient-to-b from-[#FAE965] to-[#F4B446] bg-clip-text text-transparent">
            the best
          </div>{" "}
          in the statistics community.
        </h1>
        <p className="text-sm [text-wrap:balance]">
          Every year, we host an event that showcases the best of the best from
          our community.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute -inset-2 rounded-lg bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#FAE965] to-[#F4B446] opacity-60 blur-2xl" />
          <a
            href="https://youtube.com/@StatsAwards?sub_confirmation=1"
            target="_blank"
            className={buttonVariants({
              variant: "brand",
              size: "lg",
              className: "relative",
            })}
          >
            Subscribe
          </a>
        </div>
        <a
          href="https://discord.com/invite/NapeGNM6p6"
          target="_blank"
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "flex items-center gap-2",
          })}
        >
          <BsDiscord /> Join the Discord
        </a>
      </div>
    </div>
  );
}
