import Image from 'next/image';
import styles from './about.module.css';

const AboutUs = () => {
    return (
        <div className="lex items-center relative h-screen lg:w-screen md:w-screen w-screen justify-center">
            <div className="inset-0 flex flex-col items-center bg-[url('/assets/images/maze.png')] bg-cover bg-center bg-no-repeat absolute bg-[#FFA6F6]">
                <div className={`absolute w-[66.62%] h-[63%] justify-center rotate-[-4.21deg] rounded-[36px] border-black border-4 bg-[#FBFAF0] ${styles.box1}`}>
                    <div className="fixed flex w-[100%] bg-[#FFF59F] h-[11.23%] border-b-black border-b-2 rounded-tl-[36px] rounded-tr-[36px] items-center">
                        <div className="w-[2.07%] h-[34.7%] bg-[#FFA6F6] rounded-[50%] ml-3 mx-1 rotate-[-4.21deg] px-3 lg:ml-5 md:px-3 lg:mx-1 lg:px-3 "></div>
                        <div className="w-[2.07%] h-[34.7%] bg-[#FFA6F6] rounded-[50%] mx-1 rotate-[-4.21deg] px-3 md:px-3 lg:mx-1 lg:px-3 "></div>
                        <div className="w-[2.07%] h-[34.7%] bg-[#FFA6F6] rounded-[50%] mx-1 rotate-[-4.21deg] px-3 md:px-3 lg:mx-1 lg:px-3 "></div>
                        <Image
                            src="/assets/images/heart.png"
                            alt="Heart Icon"
                            className="rotate-[6deg] w-[20%] h-[130%] items-end ml-auto mr-2 mt-5"
                            width={80} 
                            height={100}
                        />
                    </div>
                    <div className="flex justify-center relative top-8">
                        <Image
                            src="/assets/images/about.png"
                            alt="About Us Image"
                            className="rotate-[4.21deg] h-[35.44%] w-[60%] mt-12 sm:h-[15.44%] sm:w-[42%] sm:rotate-[4.21deg] lg:h-[19.44%] lg:w-[45%] lg:rotate-[4.21deg] xl:h-[24.44%] xl:w-[50%]"
                            width={600} 
                            height={400}
                        />
                    </div>
                    <div className="relative top-14 flex justify-center align-middle w-[100%] h-[50%]">
                        <p className="font-tusker tracking-wider text-[15px] w-[100%] leading-[1.5rem] text-center">
                            NIT Silchar&apos;s cultural extravaganza,
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block w-[50%]"
                                height="22"
                                viewBox="0 0 300 100"
                            >
                                <text
                                    x="50%"
                                    y="50%"
                                    dominant-baseline="middle"
                                    text-anchor="middle"
                                    fill="#FFD23C"
                                    stroke="black"
                                    stroke-width="2.1"
                                    font-size="60px"
                                    font-family="tusker"
                                    style={{ letterSpacing: '1.2px' }}
                                >
                                    INCANDESCENCE
                                </text>
                            </svg>

                            <br /> invites you on a journey into
                            <Image
                                src="/assets/vectors/spidey.gif"
                                alt="animated gif"
                                className="inline-block w-[26.18px] h-[17.945px] rounded-[53.99px] mx-2"
                                width={26}  
                                height={18}
                            />
                            the <br />unkown. Experience a labyrinth of culture, <br />
                            <Image
                                src="/assets/vectors/dj.gif"
                                alt="animated gif"
                                className="inline-block w-[26.18px] h-[17.945px] rounded-[53.99px] mx-2"
                                width={26}  
                                height={18}
                            />
                            where brilliance shines.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
