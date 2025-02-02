"use client";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Popup from "~/components/HiddenQuest/Popup";
import LandingProgressBar from "~/components/LandingProgressBar";
import LoadingScreen from "~/components/Loader/loader";

const LuminisLookout = dynamic(() => import("~/components/LuminisLookout"), {
  ssr: false,
});
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
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) void controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`w-screen ${bgColor}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadingFinished, setLoadingFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingFinished(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden bg-black">
      {<LoadingScreen />}
      <motion.main
        initial={
          loadingFinished
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.95 }
        }
        animate={
          loadingFinished
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
        className="container"
      >
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
        <FadeInSection id="sponsors" bgColor="bg-[#b7dc68] h-fit">
          <Sponsors />
        </FadeInSection>

        <FadeInSection id="merch" bgColor="bg-[#3C0FD5] min-h-screen">
          <LuminisLookout />
        </FadeInSection>
        <FadeInSection
          id="footer"
          bgColor="bg-[#000000] h-fit ipadpro:min-h-screen"
        >
          <Footer />
        </FadeInSection>
      </motion.main>
    </div>
  );
};

export default HomePage;
