import { Carousel } from "@mantine/carousel";
import shop from "./images/shop.png";
import weather from "./images/weather.png";
import notes from "./images/notes.png";
import shoppingFull from "./images/shoppingFull.png";
import weatherFull from "./images/weatherFull.png";
import notesFull from "./images/notesFull.png";
import { ports } from "./types";
import { useEffect } from "react";

export default function Projects({
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
  const light =
    "w-screen h-screen flex flex-col items-center justify-start sticky top-0 bg-white text-slate-900 ";
  const dark =
    "w-screen h-screen flex flex-col items-center justify-start sticky top-0 dark:bg-slate-800 dark:text-white";
  return (
    <body id="Projects" className={bgMode ? light : dark}>
      <h1 className="h-1/6 text-3xl w-full text-center  self-start">
        Here are my latest projects
      </h1>
      <section className="w-full h-4/6 mt-5 flex flex-row justify-center items-center ">
        <Carousel
          className="w-full"
          slideSize="75%"
          height={400}
          slideGap="lg"
          controlsOffset="lg"
          controlSize={30}
          loop
          withIndicators
        >
          <Carousel.Slide className="flex flex-row justify-center">
            <a href="https://raggedyragz.github.io/shopping-app/">
              {portSize.width > 600 ? (
                <img className="" src={shoppingFull} />
              ) : (
                <img className="h-96 w-56 shadow-lg" src={shop} />
              )}
            </a>
          </Carousel.Slide>
          <Carousel.Slide className="flex flex-row justify-center">
            <a href="https://raggedyragz.github.io/weather-app/">
              {portSize.width > 600 ? (
                <img className="" src={weatherFull} />
              ) : (
                <img className=" shadow-lg h-96 w-56" src={weather} />
              )}
            </a>
          </Carousel.Slide>
          <Carousel.Slide className="flex flex-row justify-center">
            <a href="https://l5ot6e.csb.app/">
              {portSize.width > 600 ? (
                <img className="" src={notesFull} />
              ) : (
                <img className=" shadow-lg h-96 w-56" src={notes} />
              )}
            </a>
          </Carousel.Slide>
        </Carousel>
      </section>
      {screenPercent > 2.005 ? (
        <a href="#Contact">
          <section className="mb-8">Arrow Goes Here</section>
        </a>
      ) : (
        <section className="text-transparent mb-10">
          This is a placeholder
        </section>
      )}
    </body>
  );
}
