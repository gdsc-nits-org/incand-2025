import dynamic from "next/dynamic";
import LandingScrollBar from "~/components/LandingScrollBar";
const Hero = dynamic(() => import("~/components/Hero"), { ssr: false });
const Sponsors = dynamic(() => import("~/components/Sponsors"), { ssr: false });
import Footer from "../components/Footer/Footer";
import AboutUs2 from "~/components/AboutNITSILCHAR/about";

export const runtime = "edge";

const HomePage = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <main className="container bg-white">
          <LandingScrollBar />
          <section id="home" className="w-screen bg-[#9747ff]">
            <Hero />
          </section>
          <section id="about" className="h-screen w-screen bg-[#e23692]">
            About Incand
          </section>
          <section id="about" className="h-screen w-screen bg-[#00e9f4]">
            <AboutUs2 />
          </section>
          <section id="sponsors" className="h-screen w-screen bg-[#b7dc68]">
            <Sponsors />
          </section>
          <section id="sponsors" className="w-screen bg-[#000000]">
            <Footer />
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;
