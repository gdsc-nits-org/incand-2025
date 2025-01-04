"use client";
import dotsAnimation from "../../gdg-animation.json";
import dynamic from "next/dynamic";

const LottiePlayer=dynamic(()=>import("lottie-react"),{
    ssr:false,
});

const LottieAnimation=()=>{
    return(
        <LottiePlayer
        animationData={dotsAnimation}
        loop 
        className="h-[10vw] md:h-[5vw] lg:h-[5vw] w-[20vw] md:w-[8vw] lg:w-[8vw] left-0 right-[2.29vw] p-0 m-0" 
        />
    );
};

export default LottieAnimation;