"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Navbar from "~/components/Navbar/Navbar";


const LazyLoadedPage = dynamic(() => import("../../components/LazyLoading"), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGalleryPage = pathname.startsWith("/gallery");

  return (
    <div>
      <Navbar />
      {isGalleryPage ? children : <LazyLoadedPage>{children}</LazyLoadedPage>}
    </div>
  );
}
