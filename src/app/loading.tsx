import Image from "next/image";
const Loader: React.FC = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-black">
      <Image
        src="/assets/Loader/Loader.gif"
        className="scale-75 lg:scale-100"
        alt="loader"
        height={300}
        width={300}
        unoptimized
      />
    </div>
  );
};

export default Loader;
