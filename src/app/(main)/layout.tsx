"use client";

import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
