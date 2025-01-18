/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */

// if anything breaks you know what to blame ^

"use client";
import Tracker from "@openreplay/tracker";
import { useEffect } from "react";
import short from "short-uuid";

const tracker = new Tracker({
  projectKey: process.env.NEXT_PUBLIC_OPENRELAY_PROJECT_KEY!,
  ingestPoint: "https://openreplay.incand.in/ingest",
});

const Openreplay = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      tracker.start({
        userID: short.generate(),
      });
    }
  }, []);

  return null;
};

export default Openreplay;
