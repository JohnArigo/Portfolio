import { ports } from "./types";
import { useEffect, useState } from "react";
import downArrowBlack from "./images/downArrowBlack.png";
import downArrowGradient from "./images/downArrowGradient.png";
import { Typewriter } from "react-simple-typewriter";
import Loader from "./components/loader";
export default function Title({
  portSize,
  setPortSize,
  setScrollSize,
  scrollSize,
  screenPercent,
  bgMode,
  loading,
  timer,
}: ports) {
  useEffect(() => {
    function handleResize() {
      setPortSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollSize?.(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const light =
    " w-screen h-screen flex flex-row flex-wrap  sticky top-0 bg-gray-50 text-slate-900 transform transition-all duration-500 ease-in-out text-opacity-100 ";
  const dark = () => {
    if (portSize.width > 600)
      return "w-screen h-screen flex flex-row flex-wrap  sticky top-0 bg-black text-white bg-Book bg-cover bg-no-repeat bg-center transform transition-all duration-500 ease-in-out text-opacity-100";
    else
      return "w-screen h-screen flex flex-row flex-wrap  sticky top-0 bg-zinc-900 text-white transform transition-all duration-500 ease-in-out text-opacity-100";
  };

  const textLight = () => {
    if (portSize.width > 600) {
      return "w-1/2 h-full flex flex-col justify-end items-center text-3xl font-noto font-bold mb-20";
    } else
      return "w-full h-full flex flex-col justify-center items-center text-xl font-noto font-bold ";
  };

  const textDark = () => {
    if (portSize.width > 600) {
      return "w-full h-1/2 flex flex-col justify-center items-center text-3xl font-noto font-medium ";
    } else {
      return "w-full h-full flex flex-col justify-center items-center text-xl font-noto font-bold ";
    }
  };

  const mainLight = "flex flex-row h-5/6 w-full justify-end items-end";
  const mainDark = "flex flex-row h-5/6 w-full items-start";

  return (
    <body id="home" className={bgMode ? light : dark()}>
      {loading ? <Loader timer={timer!} /> : null}
      {portSize.width > 600 && bgMode ? (
        <div className="bg-gray-50 w-1/2 flex justify-start px-16">
          <div className="relative max-w-lg">
            <div className="absolute top-16 left-8 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob mt-10"></div>
            <div className="absolute top-0 -right-64 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 mt-10"></div>
            <div className="absolute -top-0 left-28 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 mt-10"></div>
          </div>
        </div>
      ) : null}
      <section className={bgMode ? mainLight : mainDark}>
        <main className={bgMode ? textLight() : textDark()}>
          <h1 className="self-center text-center">
            Hello, my name is John Arigo
          </h1>
          <h3 className="self-center text-center text-lg mt-5">
            I am{" "}
            <Typewriter
              words={[
                "a Software Engineer",
                "a Veteran",
                "a Student",
                "an Innovator",
                "a Proud Dad",
              ]}
              cursor
              cursorColor="red"
              cursorStyle="_"
              loop={Infinity}
              typeSpeed={90}
              deleteSpeed={50}
            />
          </h3>
        </main>
      </section>
      {screenPercent >= 0 ? (
        <aside className=" w-full h-1/6 flex flex-row justify-center items-end animate-bounce">
          {bgMode ? (
            <a href="#Experience">
              <img className="w-20 h-20 cursor-pointer" src={downArrowBlack} />
            </a>
          ) : (
            <a className="self-start" href="#Experience">
              <img
                className="w-14 h-14 cursor-pointer"
                src={downArrowGradient}
              />
            </a>
          )}
        </aside>
      ) : null}
    </body>
  );
}
