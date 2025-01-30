import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";
import { type Metadata } from "next";
import dynamic from "next/dynamic";
import "~/styles/globals.css";

const OpenReplayNoSSR = dynamic(
  () => import("~/components/openreplay-tracker"),
  {
    ssr: false, //disables Server-side pre-rendering so window won't be undefined
  },
);

export const metadata: Metadata = {
  title: "Incandescence 2025",
  description: "The Official Website of Incandescence 2025",
  metadataBase: new URL("https://incand.in"),
  creator: "GDGC NITS",
  keywords: [
    "GDGC",
    "NITS",
    "Incandescence",
    "2025",
    "Incand",
    "Incand25",
    "NITS",
    "NIT",
    "Silchar",
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  robots: {
    index: true,
    nocache: true,
    noarchive: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://incand.in",
    images: "https://incand.in/opengraph-image.png",
  },
};
const toastOps = {
  classNames: {
    title: "text-md md:text-lg font-semibold",
    success: "toast-theme-pink",
    info: "toast-theme-pink",
    error: "toast-theme-red",
    warning: "toast-theme-red",
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
      </body>
    </html>
  );
}
