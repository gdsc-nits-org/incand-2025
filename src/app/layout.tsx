import "~/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";
import { type Metadata } from "next";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";
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
const toastOps = {
  classNames: {
    title: "text-md md:text-lg font-semibold text-center",
    success: "toast-theme-pink flex items-center  justify-center",
    info: "toast-theme-pink flex items-center  justify-center",
    error: "toast-theme-red flex items-center  justify-center",
    warning: "toast-theme-red flex items-center  justify-center",
  },
};
const toastOps = {
  classNames: {
    title: "text-md md:text-lg font-semibold text-center",
    success: "toast-theme-pink flex items-center  justify-center",
    info: "toast-theme-pink flex items-center  justify-center",
    error: "toast-theme-red flex items-center  justify-center",
    warning: "toast-theme-red flex items-center  justify-center",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        {children}
        <Toaster
          toastOptions={toastOps}
          visibleToasts={1}
          position="bottom-center"
        />
        {process.env.NODE_ENV === "production" && <OpenReplayNoSSR />}
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-54V3WCPLRE" />
        )}
      </body>
    </html>
  );
}
