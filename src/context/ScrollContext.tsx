// // context/ScrollContext.tsx
// "use client";

// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// type ScrollContextType = {
//   containerRef: React.RefObject<HTMLDivElement>;
//   scrollTo: (value: number) => void;
//   scrollPosition: number;
//   maxScroll: number;
// };

// const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

// export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [maxScroll, setMaxScroll] = useState(0);

//   useEffect(() => {
//     const updateMaxScroll = () => {
//       if (containerRef.current) {
//         setMaxScroll(containerRef.current.scrollHeight - window.innerHeight);
//       }
//     };

//     const handleScroll = () => {
//       if (containerRef.current) {
//         setScrollPosition(containerRef.current.scrollTop);
//       }
//     };

//     // Initialize max scroll and attach scroll listener
//     updateMaxScroll();
//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener("scroll", handleScroll);
//     }

//     window.addEventListener("resize", updateMaxScroll);

//     return () => {
//       if (container) container.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", updateMaxScroll);
//     };
//   }, []);

//   const scrollTo = (value: number) => {
//     if (containerRef.current) {
//       containerRef.current.scrollTo({ top: value, behavior: "smooth" });
//     }
//   };

//   return (
//     <ScrollContext.Provider
//       value={{ containerRef, scrollTo, scrollPosition, maxScroll }}
//     >
//       {children}
//     </ScrollContext.Provider>
//   );
// };

// export const useScroll = () => {
//   const context = useContext(ScrollContext);
//   if (!context) {
//     throw new Error("useScroll must be used within a ScrollProvider");
//   }
//   return context;
// };
