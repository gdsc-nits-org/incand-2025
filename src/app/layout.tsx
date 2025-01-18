import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import dynamic from "next/dynamic";
import { GoogleAnalytics } from "@next/third-parties/google";

const OpenReplayNoSSR = dynamic(
  () => import("~/components/openreplay-tracker"),
  {
    ssr: false, //disables Server-side pre-rendering so window won't be undefined
  },
);

export const metadata: Metadata = {
  title: "Incandescence 2025",
  description: "The Official Website of Incandescence 2025",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
      {process.env.NODE_ENV === "production" && <OpenReplayNoSSR />}
      <GoogleAnalytics gaId="G-54V3WCPLRE" />
    </html>
  );
}
