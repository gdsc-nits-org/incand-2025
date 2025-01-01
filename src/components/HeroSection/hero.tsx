import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div
      className={
        "relative flex h-screen lg:w-screen md:w-screen w-screen items-center justify-center text-white " +
        styles.hero
      }
    >
      <div className="absolute inset-0 flex flex-col items-center bg-[url('/images/maze.png')] bg-cover bg-center bg-no-repeat">
        <div className="mt-3 flex items-start justify-center gap-3">
          <div className="mt-4 flex items-center justify-center gap-2">
            <p
              className="text-[5.677vw] font-normal  tracking-wide text-black transition-colors duration-200 hover:text-[#FAE00D]"
              style={{ fontFamily: "Ahsing" }}
            >
              I
            </p>
            <p
              className="text-[5.677vw] font-normal  tracking-wide text-black transition-colors duration-200 hover:text-[#FAE00D]"
              style={{ fontFamily: "Ahsing" }}
            >
              n
            </p>
            <p
              className="text-[5.677vw] font-normal  tracking-wide text-black transition-colors duration-200 hover:text-[#FAE00D]"
              style={{ fontFamily: "Ahsing" }}
            >
              c
            </p>
            <p
              className="text-[5.677vw] font-normal  tracking-wide text-black transition-colors duration-200 hover:text-[#FAE00D]"
              style={{ fontFamily: "Ahsing" }}
            >
              a
            </p>
            <p
              className="text-[5.677vw] font-normal  tracking-wide text-black transition-colors duration-200 hover:text-[#FAE00D]"
              style={{ fontFamily: "Ahsing" }}
            >
              n
            </p>
            <p
              className="text-[5.677vw] font-normal  tracking-wide text-black transition-colors duration-200 hover:text-[#FAE00D]"
              style={{ fontFamily: "Ahsing" }}
            >
              d
            </p>
            <p
              className="text-[5.677vw] font-normal  tracking-wide text-black transition-colors duration-200 hover:text-[#FAE00D]"
              style={{ fontFamily: "Ahsing" }}
            >
              e
            </p>
            <p
              className="text-[5.677vw] font-normal  tracking-wide text-black transition-colors duration-200 hover:text-[#FAE00D]"
              style={{ fontFamily: "Ahsing" }}
            >
              s
            </p>
            <p
              className="text-[5.677vw] font-normal  tracking-wide text-black transition-colors duration-200 hover:text-[#FAE00D]"
              style={{ fontFamily: "Ahsing" }}
            >
              c
            </p>
            <p
              className="text-[5.677vw] font-normal  tracking-wide text-black transition-colors duration-200 hover:text-[#FAE00D]"
              style={{ fontFamily: "Ahsing" }}
            >
              e
            </p>
            <p
              className="text-[5.677vw] font-normal  tracking-wide text-black transition-colors duration-200 hover:text-[#FAE00D]"
              style={{ fontFamily: "Ahsing" }}
            >
              n
            </p>
            <p
              className="text-[5.677vw] font-normal tracking-wide text-black transition-colors duration-200 hover:text-[#FAE00D]"
              style={{ fontFamily: "Ahsing" }}
            >
              c
            </p>
            <p
              className="text-[5.677vw] font-normal tracking-wide text-black transition-colors duration-200 hover:text-[#FAE00D]"
              style={{ fontFamily: "Ahsing" }}
            >
              e
            </p>
          </div>
          <div
            className={
              "z-10 mx-3 w-[9.671vw] h-[20vw] rounded-2xl border border-black bg-[#E1067B] " +
              styles.cardOne
            }
          >
            <div className="flex h-[2.368vw] w-full flex-row items-center gap-2 rounded-t-2xl border-b-2 border-t-2 border-black bg-white px-2">
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
            </div>
            <div className="mb-4 flex flex-col justify-center p-5 ">
              <p
                className="max-w-fit translate-y-[0.329vw] text-center text-8xl font-normal leading-none text-black transition-colors duration-200 hover:text-[#FAE00D]"
                style={{
                  fontFamily: "Ahsing",
                  marginBottom: "-3.289vw",
                  marginTop: "-0.987vw",
                }}
              >
                2
              </p>
              <p
                className="max-w-fit self-end text-8xl font-normal text-black transition-colors duration-200 hover:text-[#FAE00D]"
                style={{ fontFamily: "Ahsing", marginBottom: "-3.289vw" }}
              >
                0
              </p>
              <p
                className="max-w-fit text-8xl font-normal text-black transition-colors duration-200 hover:text-[#FAE00D]"
                style={{ fontFamily: "Ahsing", marginBottom: "-3.289vw" }}
              >
                2
              </p>
              <p
                className="max-w-fit self-end text-8xl font-normal text-black transition-colors duration-200 hover:text-[#FAE00D]"
                style={{ fontFamily: "Ahsing" }}
              >
                5
              </p>
            </div>
          </div>
          <img
            className="ms-7 h-[10.526vw] w-[10.526vw]"
            src="images\spark.png"
            alt="Spark"
          />
        </div>

        <div className="relative left-[1.645vw]">
          {/* Card 1 */}
          <div
            className={
              "absolute right-[37.171vw] top-[-7.237vw] h-[13.092vw] w-[8vw] rounded-2xl border border-black bg-[#E1067B] shadow-black " +
              styles.cardOne
            }
          >
            <div className="flex h-[2.368vw] w-full flex-row items-center gap-2 rounded-t-2xl border-b-2 border-t-2 border-black bg-white px-2">
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
            </div>
            <div className="flex h-[80%] items-center justify-center">
              <img
                className={"w-[5.592vw] h-[5.592vw] " + styles.brutalist}
                src="images/Brutalist.png"
                alt="Brutalist"
              />
            </div>
          </div>
          {/* Card 1 */}

          {/* Card 2 */}
          <div
            className={
              "absolute right-[20.724vw] top-[1.974vw] h-[18.75vw] w-[18.75vw] overflow-hidden rounded-2xl border border-black bg-[#008EFF] shadow-black " +
              styles.cardOne
            }
          >
            <div className="flex h-[2.368vw] w-full flex-row items-center gap-2 rounded-t-2xl border-b-2 border-t-2 border-black bg-white px-2">
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
            </div>
            <div className="flex h-[80%] flex-col justify-end">
              <div className="mx-4 flex w-full gap-4">
                <img
                  className={"relative w-[2.368vw] h-[2.368vw] " + styles.cardTwoSpark1}
                  src="images/spark.png"
                  alt="spark"
                />
                <img
                  className={"relative w-[2.368vw] h-[2.368vw] " + styles.cardTwoSpark2}
                  src="images/spark.png"
                  alt="spark"
                />
              </div>
              <div className="mx-4 flex w-full gap-4">
                <p
                  className="text-[3.158vw] font-normal leading-[3.158vw] tracking-wide text-black"
                  style={{ fontFamily: "Ahsing" }}
                >
                  Lucid Labyrinth
                </p>
              </div>
            </div>
            <p
              className={
                "absolute left-[2.368vw] top-[-9.211vw] text-[10.197vw] font-normal leading-[none] tracking-wide text-white " +
                styles.comingSoonBorders
              }
              style={{ fontFamily: "Ahsing" }}
            >
              C
            </p>
          </div>
          {/* Card 2 */}

          {/* Card 3 */}
          <div
            className={
              "absolute right-[10.855vw] top-[-11.184vw] z-30 h-[18.75vw] w-[23.026vw] overflow-hidden rounded-2xl border border-black bg-[#FAE00D] shadow-black " +
              styles.cardOne
            }
          >
            <div className="flex h-[2.368vw] w-full flex-row items-center gap-2 rounded-t-2xl border-b-2 border-t-2 border-black bg-white px-2">
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
            </div>
            <div className="relative h-[85%] w-full p-2">
            <img
                className={styles.cardThreeWireframe}
                src="images/Wireframe.png"
                alt="Brutalist"
              />
            </div>
            <p
              className={
                "absolute bottom-[-0.592vw] left-[-3.158vw] text-[10.197vw] font-normal leading-[none] tracking-wide text-white " +
                styles.comingSoonBorders
              }
              style={{ fontFamily: "Ahsing" }}
            >
              C
            </p>
            <p
              className={
                "absolute bottom-[-0.592vw] right-[1.316vw] text-[10.197vw] font-normal leading-[none] tracking-wide text-white " +
                styles.comingSoonBorders
              }
              style={{ fontFamily: "Ahsing" }}
            >
              M
            </p>
            
          </div>
          {/* Card 3 */}



          {/* Card 4 */}
          <div
            className={
              "group absolute right-[3.618vw] top-[0.658vw] h-[19.737vw] w-[11.513vw] overflow-hidden rounded-2xl border border-black  bg-[#E1067B] hover:bg-black shadow-black hover:shadow-[#E1067B] shadow-[0.526vw_0.526vw_0px_#000000] transition duration-300 " + styles.card4Container}
          >
            <div className="flex h-[2.368vw] w-full flex-row items-center gap-2 rounded-t-2xl border-b-2 border-t-2 border-black bg-white px-2">
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
            </div>
            <div className="relative h-[80%] w-full flex-col">

            <svg className={"absolute bottom-0 right-[0.263vw] w-[6.25vw] h-[6.25vw] text-black group-hover:text-white transition-all duration-300 " + styles.svgContainer} viewBox="0 0 120 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M120 0H85.0997C85.0997 13.876 73.8437 25.0997 60 25.0997C46.124 25.0997 34.9003 13.8437 34.9003 0H0C0 33.1536 26.8787 60 60 60C93.1213 60 120 33.1536 120 0Z" />
<path d="M60 60C26.8787 60 0 86.8464 0 120H34.8679C34.8679 106.124 46.124 94.9003 59.9677 94.9003C73.8437 94.9003 85.0674 106.156 85.0674 120H119.935C120 86.8464 93.1213 60 60 60Z"/>
</svg>

            </div>
              
            <p
              className={
                "absolute left-[1.316vw] top-[-11.513vw] text-[12.895vw] font-normal leading-[none] tracking-wide text-white " +
                styles.comingSoonBorders
              }
              style={{ fontFamily: "Ahsing" }}
            >
              C
            </p>
          </div>
          {/* Card 4 */}




          {/* Card 5 */}
          <div
            className={
              "group absolute left-[-5.921vw] top-[-7.566vw] z-10 h-[18.75vw] w-[14.474vw] overflow-hidden rounded-2xl border border-black bg-[#00FF88] hover:bg-black shadow-black hover:shadow-[#00FF88] shadow-[0.526vw_0.526vw_0px_#000000] transition duration-300"
            }
          >
            <div className="flex h-[2.368vw] w-full flex-row items-center gap-2 rounded-t-2xl border-b-2 border-t-2 border-black group-hover:border-white bg-white group-hover:bg-black transition-all duration-300 px-2">
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black group-hover:bg-white transition-[bg] duration-300"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black group-hover:bg-white transition-[bg] duration-300"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black group-hover:bg-white transition-[bg] duration-300"></div>
            </div>
            <div className="flex h-[80%] flex-col justify-end">
             
            </div>
          </div>
          {/* Card 5 */}

          {/* Card 6 */}
          <div
            className={
              "absolute left-[-1.316vw] top-[13.158vw] h-[11.842vw] w-[22.039vw] overflow-hidden rounded-2xl border border-black bg-[#B5FCFF] shadow-black " +
              styles.cardOne
            }
          >
            <div className="flex h-[2.368vw] w-full flex-row items-center gap-2 rounded-t-2xl border-b-2 border-t-2 border-black bg-white px-2">
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
            </div>
            <div className="flex h-[80%] w-full justify-center items-end gap-3 py-3 px-1">
              <img className={"h-[5.263vw] w-[5.263vw] " + styles.cardSixBrutalist}
                src="images/Brutalist_Two.png"
                alt="Brutalist_Two"
              />
              <img className={"h-[5.263vw] w-[5.263vw] " + styles.cardSixBrutalist}
                src="images/Brutalist_Two.png"
                alt="Brutalist_Two"
              />
              <img className={"h-[5.263vw] w-[5.263vw] " + styles.cardSixBrutalist}
                src="images/Brutalist_Two.png"
                alt="Brutalist_Two"
              />
               
            </div>
          </div>
          {/* Card 6 */}

          {/* Card 7 */}
          <div
            className={
              "absolute left-[7.237vw] top-[-1.974vw] h-[18.75vw] w-[29.276vw] rounded-2xl border border-black bg-[#FAE00D] shadow-black " +
              styles.cardOne
            }
          >
            <div className="flex h-[2.368vw] w-full flex-row items-center gap-2 rounded-t-2xl border-b-2 border-t-2 border-black bg-white px-2">
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black"></div>
            </div>
            <div className="relative h-[85%] w-full">
                <p
                  className="absolute text-[4.211vw] font-normal tracking-wide text-black bottom-0 left-[-1.316vw]"
                  style={{ fontFamily: "Ahsing" }}
                >
                 Cultural Fest
                </p>
            </div>
          </div>
          {/* Card 7 */}

          {/* Card 8 */}
          <div
            className={
              "group absolute left-[33.553vw] top-[8.224vw] h-[12.171vw] w-[7.237vw] overflow-hidden rounded-2xl border border-black  bg-[#00E9F4] hover:bg-black shadow-black hover:shadow-[#00E9F4] shadow-[0.329vw_0.329vw_0px_#000000] transition duration-300 " + styles.card8Container}
          >
            <div className="flex h-[2.368vw] w-full flex-row items-center gap-2 rounded-t-2xl border-b-2 border-t-2 border-black group-hover:border-white bg-white group-hover:bg-black px-2 transition-all duration-300">
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black group-hover:bg-white transition-all duration-300"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black group-hover:bg-white transition-all duration-300"></div>
              <div className="h-[1.053vw] w-[1.053vw] rounded-full bg-black group-hover:bg-white transition-all duration-300"></div>
            </div>
            <div className="relative h-[78%] w-full flex justify-center">
            <svg className={"absolute bottom-0 w-[6.316vw] text-black group-hover:text-[#00E9F4] transition-all duration-300 " + styles.svgIcon}  viewBox="0 0 120 148" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M59.9833 147.302C26.8338 147.302 0 120.434 0 87.3184H120C119.967 120.434 93.1328 147.302 59.9833 147.302Z" />
<path d="M59.9837 87.3182C32.8826 87.3182 10.9277 65.3633 10.9277 38.2622H109.073C109.04 65.3299 87.0848 87.3182 59.9837 87.3182Z"/>
<path d="M59.9828 38.2289C38.8633 38.2289 21.7539 21.1195 21.7539 0H98.2451C98.2117 21.1195 81.1023 38.2289 59.9828 38.2289Z"/>
</svg>

            </div>
          </div>
          {/* Card 8 */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
