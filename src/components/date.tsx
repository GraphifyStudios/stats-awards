"use client";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

export default function Date() {
  const countdownDate = dayjs.utc("2024-02-03 01:00");
  return countdownDate.local().format("MMMM Do hA z");
}
