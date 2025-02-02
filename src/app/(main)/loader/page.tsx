// pages/index.tsx
"use client"

import { useState } from "react";
import LoadingScreen from "~/components/Loader/loader";

const HomePage: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white text-black text-4xl font-bold">
      Welcome to the Home Page!
    </div>
  );
};

const Home: React.FC = () => {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <div className="relative">
      {!loadingFinished && <LoadingScreen onFinish={() => setLoadingFinished(true)} />}
      {loadingFinished && <HomePage />}
    </div>
  );
};

export default Home;
