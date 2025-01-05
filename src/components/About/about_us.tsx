import Image from 'next/image';
import styles from './about.module.css';

const AboutUs = () => {
    return (
        <div className="flex items-center relative h-screen lg:w-screen md:w-screen w-screen justify-center">
            <div className="inset-0 flex items-center bg-[url('/assets/images/maze.png')] bg-cover bg-no-repeat absolute bg-[#FFA6F6]">
                <div className={`absolute w-[66.62%] h-[63%] justify-center sm:rotate-[-4.21deg] lg:rotate-[-4.21deg] rounded-[36px] border-black border-4 bg-[#FBFAF0] ${styles.box1}`}>
                    <div className="absolute flex w-[100%] bg-[#FFF59F] h-[11.23%] border-b-black border-b-2 rounded-tl-[36px] rounded-tr-[36px] items-center">
                        <div className="w-[2.07%] h-[34.7%] bg-[#FFA6F6] rounded-[50%] ml-3 mx-1 rotate-[-4.21deg] px-3 lg:ml-5 md:px-3 lg:mx-1 lg:px-3 "></div>
                        <div className="w-[2.07%] h-[34.7%] bg-[#FFA6F6] rounded-[50%] mx-1 rotate-[-4.21deg] px-3 md:px-3 lg:mx-1 lg:px-3 "></div>
                        <div className="w-[2.07%] h-[34.7%] bg-[#FFA6F6] rounded-[50%] mx-1 rotate-[-4.21deg] px-3 md:px-3 lg:mx-1 lg:px-3 "></div>
                        <Image
                            src="/assets/images/heart.png"
                            alt="Heart Icon"
                            className={` absolute rotate-[8deg] w-[24%] h-[135%] items-end sm:rotate-[5deg] xl:rotate-[4deg] ${styles.img1} `}
                            width={80} 
                            height={100}
                        />
                    </div>
                    <div className="flex justify-center relative top-[15%] xl:top-[12%] ">
                        <Image
                            src="/assets/images/about.png"
                            alt="About Us Image"
                            className="  rotate-[4.21deg] h-[40.44%] w-[84%]  sm:h-[15.44%] sm:w-[70%] md:h-[20.44%] md:w-[75%] sm:rotate-[4.21deg] lg:h-[19.44%] lg:w-[28%] lg:rotate-[4.21deg] xl:h-[24.44%] xl:w-[45%]  "
                            width={600} 
                            height={400}
                        />
                    </div>
                    <div className="relative top-[17%] flex justify-center align-middle xl:top-[12%] md:top-[14%] ">
                        <p className={`font-tusker tracking-normal text-[25px] w-[100%] leading-[2.4rem] sm:leading-[3.2rem] sm:text-[34px]  md:leading-[3.3rem] md:text-[34px] lg:text-[40px] lg:leading-[3.6rem] xl:leading-[4.8rem] xl:tracking-wide text-center ${styles.smallFont} `}>
                            NIT Silchar&apos;s cultural extravaganza, 
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block w-[80%] sm:w-[80%] sm:h-[50] lg:mt-2 xl:w-[25%]"
                                height="37"
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
                                    font-size="70px"
                                    font-family="tusker"
                                    font-Weight="600"
                                    style={{ letterSpacing: '1.2px' }}
                                    className="text-[70px] sm:text-[70px] md:text-[75px] lg:text-[89px] "
                                >
                                    INCANDESCENCE
                                </text>
                            </svg>

                            <br /> invites you on a journey into
                            <Image
                                src="/assets/vectors/spidey.gif"
                                alt="animated gif"
                                className={`inline-block w-[80.18px] h-[40.945px] rounded-[53.99px] sm:h-[57px] sm:w-[95px] mr-2 ml-2 lg:ml-3 lg:mr-3 lg:w-[120px] lg:h-[70px] ${styles.smallImage}`}
                                width={26}  
                                height={18}
                            />
                              the <br />unkown. Experience a labyrinth of culture, <br />
                            <Image
                                src="/assets/vectors/dj.gif"
                                alt="animated gif"
                                className={`inline-block w-[80.18px] h-[40.945px] rounded-[53.99px] sm:h-[57] sm:w-[95] mr-2 ml-2 lg:ml-3 lg:mr-3 xl:mt-2 lg:w-[120px] lg:h-[70px] ${styles.smallImage} `}
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
