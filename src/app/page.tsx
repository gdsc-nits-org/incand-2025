"use client";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import LandingProgressBar from "~/components/LandingProgressBar";
const Hero = dynamic(() => import("~/components/Hero"), { ssr: false });
const Sponsors = dynamic(() => import("~/components/Sponsors"), { ssr: false });
const AboutUs = dynamic(() => import("~/components/AboutUs"), { ssr: false });
const AboutNits = dynamic(() => import("~/components/AboutNits"), {
  ssr: false,
});
import Footer from "../components/Footer/Footer";



export const runtime = "edge";

const FadeInSection = ({
  children,
  id,
  bgColor,
}: {
  children: React.ReactNode;
  id: string;
  bgColor: string;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      void controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`w-screen ${bgColor}`}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

const HomePage = () => {
  return (
    <div id="parentContainer" className="overflow-x-hidden bg-[#9747ff]" style={{transition: "background-color 0.5s ease-out"}}>
      <main className="container bg-transparent h-[400vh]">
        <LandingProgressBar />
        <section
          id="home"
          className="fixed h-screen w-screen overflow-hidden bg-[#9747ff]"
        >
          <Hero />
        </section>
        <section id="about" className="fixed h-screen w-screen bg-[#e23692]" style={{ opacity: 0 }}>
          <AboutUs />
        </section>
        <section id="about-nits" className="fixed h-screen w-screen bg-[#00e9f4]" style={{ opacity: 0 }}>
          <AboutNits />
        </section>
        <section
          id="sponsors"
          className="fixed h-screen w-screen overflow-hidden bg-[#b7dc68]"
          style={{ opacity: 0 }}>
          <Sponsors />
        </section>
        <section id="footer" className="fixed w-screen bg-[#000000] ipadpro:h-screen" style={{ opacity: 0 }}>
          <Footer />
        </section>  
      </main>
    </div>
  );
};

export default HomePage;
