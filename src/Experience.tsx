import dev from "./images/JohnJosiah.jpeg";
import css from "./images/css.svg";
import html from "./images/html.svg";
import javascript from "./images/javascript.svg";
import react from "./images/react.svg";
import typescript from "./images/typescript.svg";
import sql from "./images/sql-server.png";
import c from "./images/C.svg";
import { useEffect } from "react";
import { ports } from "./types";
import downArrowBlack from "./images/downArrowBlack.png";
import downArrowGradient from "./images/downArrowGradient.png";
import ImageCard from "./components/experienceImage";

export default function Experience({
  portSize,
  setPortSize,
  scrollSize,
  setScrollSize,
  screenPercent,
  bgMode,
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

  const imageSize = () => {
    if (portSize.width < 600) {
      return "w-20 h-20";
    } else {
      return "w-24 h-24";
    }
  };

  const light =
    "w-screen h-screen flex flex-col justify-between bg-white sticky top-0 text-slate-900";

  const dark = () => {
    if (portSize.width > 600) {
      return "w-screen h-screen flex flex-col justify-between sticky top-0 bg-zinc-900 text-white font-noto";
    } else
      return "w-screen h-screen flex flex-col justify-between sticky top-0 bg-zinc-800 text-white font-noto";
  };

  const string1 = `I'm a veteran that is passionate about developing software. I possess strong problem-solving and communication skills.`;
  const stringOne = string1.split("");
  const string2 =
    " My focus is to create fast, flexible, full-stack web applications.";
  const stringTwo = string2.split("");
  const string3 =
    " I'm a Full-Stack Web Developer with a BS in Computer Science and experience with Microsoft";
  const stringThree = string3.split("");
  <div className="flex flex-row items-center">
    <img
      className={portSize.width < 600 ? "w-12 h-10" : "w-24 h-20"}
      src={sql}
    />
  </div>;
  const images = [typescript, javascript, react, css, html, sql, c];
  return (
    <body id="Experience" className={bgMode ? light : dark()}>
      <main className="mt-20 flex flex-col sm:flex-row items-center justify-center w-full h-1/3 text-sm">
        <section className="sm:w-1/2 md:w-1/3 h-3/4 flex flex-row justify-center sm:justify-start mt-3 ">
          <img
            className="w-48 h-48 sm:h-72 sm:w-72 rounded-xl shadow-lg"
            src={dev}
          />
        </section>{" "}
        <section className="w-3/4 sm:w-1/2 lg:w-1/3 h-3/4 sm:mt-0 mt-5  cursor-default space-y-5 text-md sm:text-lg ">
          <h1 className="font-noto font-semibold text-3xl sm:text-start text-center">
            About me
          </h1>

          <p className="space-y-5">
            {stringOne.map((char, index) => {
              return (
                <span
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="animate-fade-in-down hover:self-start focus:text-blue-400  sm:hover:text-xl hover:font-bold hover:text-blue-400 hover:outline-2 hover:shadow-lg hover:outline-white"
                >
                  {char}
                </span>
              );
            })}
          </p>

          <p className="space-y-5">
            {stringTwo.map((char, index) => {
              return (
                <span
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="animate-fade-in-down hover:self-start focus:text-blue-400  sm:hover:text-xl hover:font-bold hover:text-blue-400 hover:outline-2 hover:shadow-lg hover:outline-white"
                >
                  {char}
                </span>
              );
            })}
          </p>
          <p className="space-y-5">
            {stringThree.map((char, index) => {
              return (
                <span
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="animate-fade-in-down hover:self-start focus:text-blue-400  sm:hover:text-xl hover:font-bold hover:text-blue-400 hover:outline-2 hover:shadow-lg hover:outline-white"
                >
                  {char}
                </span>
              );
            })}
          </p>
        </section>
      </main>
      <footer className="mb-14 sm:mb-24 w-5/6 flex flex-col justify-center h-1/4 self-center">
        <h1 className="self-center mt-10">Skills</h1>
        <section className="flex flex-row justify-center w-full">
          {images.map((image, index) => {
            return <ImageCard key={index} image={image} />;
          })}
        </section>
        {screenPercent >= 1.0 ? (
          <section className="mt-7 w-full flex flex-row justify-center items-start animate-bounce">
            {bgMode ? (
              <a href="#Projects">
                <img
                  className="w-20 h-20 cursor-pointer"
                  src={downArrowBlack}
                />
              </a>
            ) : (
              <a href="#Projects">
                <img
                  className="w-14 h-14 cursor-pointer"
                  src={downArrowGradient}
                />
              </a>
            )}
          </section>
        ) : (
          <section className="text-transparent mb-3">
            This is a placer holder
          </section>
        )}
      </footer>
    </body>
  );
}
