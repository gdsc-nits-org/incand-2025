import LandingScrollBar from "~/components/LandingScrollBar";
// export const runtime = "edge";
import Footer from "../components/Footer/Footer";
const HomePage = () => {
  return (
   <div className="overflow-x-hidden">
       <LandingScrollBar />
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
      <section id="sponsors" className="w-screen bg-[#000000]">
       <Footer/>
      </section> 
     
    </div>
  );
};

export default HomePage;
