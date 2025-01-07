// import dynamic from "next/dynamic";
import HiddenQuest from "~/components/HiddenQuest/HiddenQuest";
// import LandingScrollBar from "~/components/LandingScrollBar";
// const Sponsors = dynamic(() => import("~/components/Sponsors"), { ssr: false });

// export const runtime = "edge";

const HomePage = () => {
  return (
    <main className="container mx-auto bg-white">
      <HiddenQuest />
      {/* <h1 className="text-black">Home Page</h1> */}
    </main>

    // <div>
    //    <HiddenQuest/>
    // </div>
    // <main className="min-h-screen overflow-x-hidden bg-white">
    //   <LandingScrollBar />
    //   <section id="home" className="h-screen w-screen bg-[#9747ff]">
    //     Home
    //   </section>
    //   <section id="about" className="h-screen w-screen bg-[#e23692]">
    //     About Incand
    //   </section>
    //   <section id="about" className="h-screen w-screen bg-[#00e9f4]">
    //     About NITS
    //   </section>
    //   <section id="sponsors" className="h-screen w-screen bg-[#b7dc68]">
    //     <Sponsors />
    //   </section>
    //   <section id="sponsors" className="h-screen w-screen bg-[#000000]">
    //     Sponsor
    //   </section>
    // </main>
  );
};

export default HomePage;
