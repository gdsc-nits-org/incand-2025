import LandingScrollBar from "~/components/LandingScrollBar";
import About from "~/components/AboutNITSILCHAR/about";
export const runtime = "edge";
const HomePage = () => {
  return (
    <main className="container bg-white">
      <LandingScrollBar />
      <About/>
      <section id="home" className="h-screen w-screen bg-[#9747ff]">
        Home
      </section>
      <section id="about" className="h-screen w-screen bg-[#e23692]">
        About Incand
      </section>
      <section id="about" className="h-screen w-screen bg-[#00e9f4]">
        About NITS
      </section>
      <section id="sponsors" className="h-screen w-screen bg-[#b7dc68]">
        Sponsor
      </section>
      <section id="sponsors" className="h-screen w-screen bg-[#000000]">
        Sponsor
      </section>
    </main>
  );
};

export default HomePage;
