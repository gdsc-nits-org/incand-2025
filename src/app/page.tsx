import dynamic from "next/dynamic";

const About1 = dynamic(() => import("~/components/About1"), { ssr: false });


export const runtime = "edge";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <main className="container bg-white">
        
        <section id="about" className="h-screen w-screen bg-[#FFA6F6]">
          <About1 />
        </section>
       
      </main>
    </div>
  );
};

export default HomePage;
