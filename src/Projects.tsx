import { Carousel } from "@mantine/carousel";
import shop from "./images/shop.png";
import weather from "./images/weather.png";
import notes from "./images/notes.png";

export default function Projects() {
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
            <img className="h-96 w-56 shadow-lg" src={shop} />
          </Carousel.Slide>
          <Carousel.Slide className="flex flex-row justify-center">
            <img className=" shadow-lg h-96 w-56" src={weather} />
          </Carousel.Slide>
          <Carousel.Slide className="flex flex-row justify-center">
            <img className=" shadow-lg h-96 w-56" src={notes} />
          </Carousel.Slide>
        </Carousel>
      </section>
    </body>
  );
}
