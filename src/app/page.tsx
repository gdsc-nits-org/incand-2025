<<<<<<< HEAD
import HiddenQuest from "~/components/HiddenQuest/HiddenQuest";
import Button from "~/components/FooterButton/Button";
export const runtime = "edge";
const HomePage = () => {
  return (
    <main className="container mx-auto bg-white">
      <h1 className="text-black">Home Page</h1>
      <HiddenQuest />
      <Button />
=======
import dynamic from "next/dynamic";
import LandingScrollBar from "~/components/LandingScrollBar";
const Sponsors = dynamic(() => import("~/components/Sponsors"), { ssr: false });

// export const runtime = "edge";

const HomePage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
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
        <Sponsors />
      </section>
      <section id="sponsors" className="h-screen w-screen bg-[#000000]">
        Sponsor
      </section>
>>>>>>> dcb75e20b8986572714281af05e07e5c20004227
    </main>
  );
};

export default HomePage;
