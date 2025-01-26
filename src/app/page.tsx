"use client";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Popup from "~/components/HiddenQuest/Popup";
import LandingProgressBar from "~/components/LandingProgressBar";
import Loader from "./loading";

const Merch = dynamic(() => import("~/components/Merch/Merch"), { ssr: false });
const Hero = dynamic(() => import("~/components/Hero"), { ssr: false });
const Sponsors = dynamic(() => import("~/components/Sponsors"), { ssr: false });
const AboutUs = dynamic(() => import("~/components/AboutUs"), { ssr: false });
const AboutNits = dynamic(() => import("~/components/AboutNits"), {
  ssr: false,
});
import Footer from "../components/Footer/Footer";
import Navbar from "~/components/Navbar/Navbar";

// export const runtime = "edge";

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
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = performance.now();

    const preloadComponents = async () => {
      await Promise.all([
        import("~/components/Hero"),
        import("~/components/Sponsors"),
        import("~/components/AboutUs"),
        import("~/components/AboutNits"),
        import("~/components/Merch/Merch"),
      ]);
    };

    void preloadComponents();
    const handleLoad = () => {
      const endTime = performance.now();
      const loadTime = Math.max(3000, endTime - startTime);
      setTimeout(() => setIsLoading(false), loadTime);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-black">
        <Loader />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden bg-white">
      <main className="container h-[100vh]">
        <Navbar />
      
        <Popup isVisible={isVisible} setIsVisible={setIsVisible} />
        <LandingProgressBar />
        <FadeInSection id="home" bgColor="bg-[#9747ff] h-screen">
          <Hero isVisible={isVisible} setIsVisible={setIsVisible} />
        </FadeInSection>
        <FadeInSection id="about" bgColor="bg-[#FFA6F6] h-screen">
          <AboutUs />
        </FadeInSection>
        <FadeInSection id="about-nits" bgColor="bg-[#c4f8fc] h-screen">
          <AboutNits />
        </FadeInSection>
        <FadeInSection id="sponsors" bgColor="bg-[#b7dc68]  h-fit">
          <Sponsors />
        </FadeInSection>
        <FadeInSection id="merch" bgColor="bg-[#3C0FD5]  min-h-screen ">
          <Merch />
        </FadeInSection>
        <FadeInSection
          id="footer"
          bgColor="bg-[#000000]  h-fit ipadpro:min-h-screen"
        >
          <Footer />
        </FadeInSection>
      </main>
    </div>
  );
};

export default HomePage;
