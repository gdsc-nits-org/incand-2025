"use client";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import LandingProgressBar from "~/components/LandingProgressBar";
const Hero = dynamic(() => import("~/components/Hero"), { ssr: false });
const Sponsors = dynamic(() => import("~/components/Sponsors"), { ssr: false });
const AboutUs = dynamic(() => import("~/components/AboutUs"), { ssr: false });
import Footer from "../components/Footer/Footer";
import AboutUs2 from "~/components/AboutNITSILCHAR/about";

export const runtime = "edge";

const FadeInSection = ({ children, id, bgColor }: { children: React.ReactNode; id: string; bgColor: string }) => {
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
      className={`h-screen w-screen ${bgColor}`}
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
    <div className="overflow-x-hidden">
      <main className=" bg-black">
        <LandingProgressBar />
        <FadeInSection id="home" bgColor="bg-[#9747ff]">
          <Hero />
        </FadeInSection>
        <FadeInSection id="about" bgColor="bg-[#e23692]">
          <AboutUs />
        </FadeInSection>
        <FadeInSection id="about-nits" bgColor="bg-[#00e9f4]">
          <AboutUs2 />
        </FadeInSection>
        <FadeInSection id="sponsors" bgColor="bg-[#b7dc68]">
          <Sponsors />
        </FadeInSection>
        <FadeInSection id="footer" bgColor="bg-[#000000] ipadpro:h-screen">
          <Footer />
        </FadeInSection>
      </main>
    </div>
  );
};

export default HomePage;
