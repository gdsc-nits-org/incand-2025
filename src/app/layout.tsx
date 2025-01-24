import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";
import { type Metadata } from "next";
export const metadata: Metadata = {
  title: "Incandescence 2025",
  description: "The Official Website of Incandescence 2025",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
const toastOps = {
  classNames: {
    title: "text-md md:text-lg font-semibold",
    success: "toast-theme-blue",
    info: "toast-theme-blue",
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
