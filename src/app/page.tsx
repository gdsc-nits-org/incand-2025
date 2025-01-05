import HiddenQuest from "~/components/HiddenQuest/HiddenQuest";
import Button from "~/components/FooterButton/Button";
export const runtime = "edge";
const HomePage = () => {
  return (
    <main className="container mx-auto bg-white">
      <h1 className="text-black">Home Page</h1>
      <HiddenQuest />
      <Button />
    </main>
  );
};

export default HomePage;
