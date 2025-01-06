import dynamic from "next/dynamic";
import LandingProgressBar from "~/components/LandingProgressBar";
const Hero = dynamic(() => import("~/components/Hero"), { ssr: false });
const Sponsors = dynamic(() => import("~/components/Sponsors"), { ssr: false });
import Footer from "../components/Footer/Footer";

export const runtime = "edge";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <main className="container bg-white">
        <LandingProgressBar />
        <section
          id="home"
          className="h-screen w-screen overflow-hidden bg-[#9747ff]"
        >
          <Hero />
        </section>
        <section id="about" className="h-screen w-screen bg-[#e23692]">
          About Incand
        </section>
        <section id="about-nits" className="h-screen w-screen bg-[#00e9f4]">
          About NITS
        </section>
        <section
          id="sponsors"
          className="h-screen w-screen overflow-hidden bg-[#b7dc68]"
        >
          <Sponsors />
        </section>
        <section id="footer" className="h-screen w-screen bg-[#000000]">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
