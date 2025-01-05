import dynamic from "next/dynamic";

const Sponsors = dynamic(() => import("~/components/Sponsors"), { ssr: false });

const HomePage = () => {
  return (
    <Sponsors />
  );
};

export default HomePage;

