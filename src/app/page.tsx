import dynamic from "next/dynamic";
const Sponsors = dynamic(() => import("../components/Sponsors"), {
  ssr: false,
});
export const runtime = "edge";
const HomePage = () => {
  return <Sponsors />;
};

export default HomePage;
