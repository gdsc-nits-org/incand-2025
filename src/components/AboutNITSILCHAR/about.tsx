import Image from 'next/image';
import styles from './about.module.css';

const About = () => {
    return (
        <div className="flex items-center justify-center relative h-screen w-screen bg-[#B3EFFF]">
            {/* Background Maze */}
            <div className="absolute inset-0 bg-[url('/assets/images/maze.png')] bg-cover bg-no-repeat"></div>

            {/* Main Card */}
            <div
                className={`absolute w-[70%] h-[65%] rounded-[36px] border-black border-4 bg-[#FBFAF0] ${styles.box1}`}
            >
                {/* Header Section */}
                <div className="flex items-center bg-[#FFF59F] h-[12%] rounded-tl-[36px] rounded-tr-[36px] border-b-2 border-black">
                    {/* Colored Dots */}
                    <div className="w-[3%] h-[50%] bg-[#FFA6F6] rounded-full mx-2"></div>
                    <div className="w-[3%] h-[50%] bg-[#5DFFCF] rounded-full mx-2"></div>
                    <div className="w-[3%] h-[50%] bg-[#FFD23C] rounded-full mx-2"></div>

                    {/* Decorative Heart */}
                    <div className="ml-auto mr-4 relative">
                        <Image
                            src="/assets/images/heart.png"
                            alt="Heart Icon"
                            width={40}
                            height={40}
                            className="rotate-[15deg]"
                        />
                    </div>
                </div>

                {/* Title Section */}
                <div className="flex justify-center mt-8">
                    <h1 className="text-[#FFD23C] font-tusker text-5xl tracking-wider drop-shadow-[2px_2px_0px_black]">
                        ABOUT NIT SILCHAR
                    </h1>
                </div>

                {/* Content Section */}
                <div className="flex flex-col items-center mt-6 px-6 text-center">
                    <p className="text-black font-tusker text-xl leading-relaxed">
                        NIT Silchar&apos;s cultural extravaganza, <br />
                        <span className="text-[#FFD23C] font-bold">Incandescence</span>, invites you on a journey
                        <br />
                        <Image
                            src="/assets/vectors/spidey.gif"
                            alt="Spidey Animation"
                            width={60}
                            height={40}
                            className="inline-block mx-2"
                        />
                        into the unknown. Experience a labyrinth of culture,
                        <br />
                        <Image
                            src="/assets/vectors/dj.gif"
                            alt="DJ Animation"
                            width={60}
                            height={40}
                            className="inline-block mx-2"
                        />
                        where brilliance shines.
                    </p>
                </div>
            </div>

            {/* Side Decorative Icons */}
            <div className="absolute right-[5%] top-[40%] flex flex-col items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-[#FFA6F6] border-2 border-black"></div>
                <div className="w-4 h-4 rounded-full bg-[#FFD23C] border-2 border-black"></div>
                <div className="w-4 h-4 rounded-full bg-[#5DFFCF] border-2 border-black"></div>
            </div>
        </div>
    );
};

export default About;
