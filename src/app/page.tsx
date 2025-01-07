import dynamic from "next/dynamic";
import LandingProgressBar from "~/components/LandingProgressBar";
const Hero = dynamic(() => import("~/components/Hero"), { ssr: false });
const Sponsors = dynamic(() => import("~/components/Sponsors"), { ssr: false });
const AboutUs = dynamic(() => import("~/components/AboutUs"), { ssr: false });
import Footer from "../components/Footer/Footer";
import FooterButton from "../components/FooterButton";
import HiddenQuestMobile from "~/components/HiddenQuest/HiddenQuestMobile";
import HiddenQuest from "~/components/HiddenQuest/HiddenQuest";
import HiddenQuestDesktop from "~/components/HiddenQuest/HiddenQuestDesktop";

export const runtime = "edge";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <main>
        {/* <LandingProgressBar />
        <section
          id="home"
          className="h-screen w-screen overflow-hidden bg-[#9747ff]"
        >
          <Hero />
        </section>
        <section id="about" className="h-screen w-screen bg-[#e23692]">
          <AboutUs />
        </section>
        <section id="about-nits" className="h-screen w-screen bg-[#00e9f4]">
          About NITS
        </section>
        <section
          id="sponsors"
          className="h-screen w-screen overflow-hidden bg-[#b7dc68]"
        >
          <Sponsors />
        </section>*/}
        {/* <section id="footer" className="w-screen bg-[#000000] ipadpro:h-screen">
          <Footer />
        </section>  */}
        {/* <HiddenQuest /> */}
        {/* <HiddenQuestMobile/> */}
        <HiddenQuest />
        {/* <HiddenQuestDesktop/> */}
        {/* <FooterButton/> */}
      </main>
    </div>
  );
};

export default HomePage;
