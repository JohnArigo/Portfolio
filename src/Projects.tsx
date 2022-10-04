import { Carousel } from "@mantine/carousel";
import shop from "./images/shop.png";
import weather from "./images/weather.png";
import notes from "./images/notes.png";
import { ports } from "./types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Projects({ portSize, setPortSize }: ports) {
  useEffect(() => {
    function handleResize() {
      setPortSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <body className="w-screen h-screen flex flex-col items-center justify-start sticky top-0 bg-gray-500">
      <h1 className="h-4/12 text-3xl mt-20 w-full text-center bg-red-50 self-start">
        Here are my latest projects
      </h1>
      <section className="w-full h-4/6 mt-5 flex flex-row justify-center items-center bg-red-100">
        <Carousel
          className="w-full"
          slideSize="75%"
          height={400}
          slideGap="xl"
          controlsOffset="lg"
          controlSize={30}
          loop
          withIndicators
        >
          <Carousel.Slide className="flex flex-row justify-center">
            <a href="https://raggedyragz.github.io/shopping-app/">
              <img className="h-96 w-56 shadow-lg" src={shop} />
            </a>
          </Carousel.Slide>
          <Carousel.Slide className="flex flex-row justify-center">
            <a href="https://raggedyragz.github.io/weather-app/">
              <img className=" shadow-lg h-96 w-56" src={weather} />
            </a>
          </Carousel.Slide>
          <Carousel.Slide className="flex flex-row justify-center">
            <a href="https://l5ot6e.csb.app/">
              <img className=" shadow-lg h-96 w-56" src={notes} />
            </a>
          </Carousel.Slide>
        </Carousel>
      </section>
    </body>
  );
}
