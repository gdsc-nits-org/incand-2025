import dynamic from "next/dynamic";

const PhotoGallery = dynamic(() => import("~/components/Gallery/Gallery"), {
  ssr: false,
});

const Page = () => {
  return <PhotoGallery />;
};

export default Page;
