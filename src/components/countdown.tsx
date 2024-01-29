"use client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useEffect, useMemo, useState } from "react";

dayjs.extend(utc);

export default function Countdown() {
  const countdownDate = dayjs.utc("2024-02-03 01:00");
  const [countdown, setCountdown] = useState(
    countdownDate.toDate().getTime() - new Date().getTime(),
  );
  const { days, hours, minutes, seconds } = useMemo(() => {
    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }, [countdown]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdownDate.toDate().getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="text-8xl font-bold">{days.toString().padStart(2, "0")}</p>
        <p className="text-sm">DAYS</p>
      </div>
      <p className="text-4xl">:</p>
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="text-8xl font-bold">
          {hours.toString().padStart(2, "0")}
        </p>
        <p className="text-sm">HOURS</p>
      </div>
      <p className="text-4xl">:</p>
      <div className="flexflex-col items-center justify-center gap-1">
        <p className="text-8xl font-bold">
          {minutes.toString().padStart(2, "0")}
        </p>
        <p className="text-sm">MINUTES</p>
      </div>
      <p className="text-4xl">:</p>
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="text-8xl font-bold">
          {seconds.toString().padStart(2, "0")}
        </p>
        <p className="text-sm">SECONDS</p>
      </div>
    </div>
  );
}
