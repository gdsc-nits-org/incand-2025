/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */

// if anything breaks you know what to blame ^

"use client";
import { useEffect } from "react";
import Tracker from "@openreplay/tracker";

const tracker = new Tracker({
  projectKey: process.env.NEXT_PUBLIC_OPENRELAY_PROJECT_KEY!,
  ingestPoint: "https://openreplay.incand.in/ingest",
});

const Openreplay = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      tracker.start();
    }
  }, []);

  return null;
};

export default Openreplay;
