import { Carousel } from "@mantine/carousel";
import shop from "./images/shop.png";
import weather from "./images/weather.png";
import notes from "./images/notes.png";
import social from "./images/social.png";
import shoppingFull from "./images/shoppingFull.png";
import weatherFull from "./images/weatherFull.png";
import notesFull from "./images/notesFull.png";
import { ports } from "./types";
import { useEffect, useState } from "react";
import downArrowBlack from "./images/downArrowBlack.png";
import downArrowGradient from "./images/downArrowGradient.png";
import { Button, Drawer, Popover } from "@mantine/core";

export default function Projects({
  portSize,
  setPortSize,

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
    "w-screen h-screen flex flex-col items-center justify-start sticky top-0 bg-gray-50 text-slate-900 font-noto";

  const dark = () => {
    if (portSize.width > 600) {
      return "w-screen h-screen flex flex-col items-center justify-start sticky top-0 bg-zinc-800 text-white font-noto";
    } else
      return "w-screen h-screen flex flex-col items-center justify-start sticky top-0 bg-zinc-900 text-white font-noto";
  };

  const lightCarousel =
    "w-full h-4/6 mt-5 flex flex-row justify-center items-center bg-gray-50 ";
  const darkCarousel =
    "w-full h-4/6 mt-5 flex flex-row justify-center items-center ";

  const images = [
    {
      src: shop,
      image: "bg-shopping",
      text: "Object manipulation! This app was really challening. I had to conceptualize the essentials of an e-commerence app and translate it to how I can display it using react. I called the Fake Store API to display products in individualcards. Utilized filtering for user end sorting/filtering. It can be by categories, name or price. Creating a new object child to store quantity for the shopping cart to be checked out. I also created basic form validation and formatting. Lastly, I created a functional feedback form that sends an email to designated address using EmailJS. Utilized JS/React, HTML5, CSS3/Tailwind",
      tools:
        "JavaScript, React, Tailwind CSS, Mantine UI, Fake Store API, EmailJS",
      href: "https://johnarigo.github.io/shopping-app/",
    },
    {
      src: weather,
      image: "bg-weather",
      text: "This app was a challenge to create. I had to conceptualize the essentials of a weather app and translate it to how I can display it using react. I called the OpenWeather API to display the weather in a city. I also created a search bar that allows the user to search for a city. Lastly, I created a functional feedback form that sends an email to designated address using EmailJS. Utilized JS/React, HTML5, CSS3/Tailwind",
      tools:
        "JavaScript, React, Tailwind CSS, Mantine UI, OpenWeather API, EmailJS",
      href: "https://johnarigo.github.io/weather-app/",
    },
    {
      src: notes,
      image: "bg-notes",
      text: "My first app! It is made with JS/React, HTML5 and CSS3.  Practiced CRUD, state and data manipulation. Stores notes on local storage. Created in codesandbox. This project helped me visualize and understand how props and state can be passed throughout each component and how to edit, add and delete items within an array.",
      tools: "JavaScript, React, Tailwind CSS, Mantine UI, EmailJS",
      href: "https://l5ot6e.csb.app/",
    },
    {
      src: social,
      image: "bg-social",
      text: "Object manipulation! This app was really challening. I had to conceptualize the essentials of an e-commerence app and translate it to how I can display it using react. I called the Fake Store API to display products in individual cards. Utilized filtering for user end sorting/filtering. It can be by categories, name or price. Creating a new object child to store quantity for the shopping cart to be checked out. I also created basic form validation and formatting. Lastly, I created a functional feedback form that sends an email to designated address using EmailJS. Utilized JS/React, HTML5, CSS3/Tailwind",
      tools:
        " NextJS, TypeScript, React, NodeJS, Prisma, MySQL, PlanetScale, Tailwind CSS",
      href: "https://johnpauloarigo.com/",
    },
  ];
  return (
    <body id="Projects" className={bgMode ? light : dark()}>
      <h1 className="h-20 mt-5 text-xl sm:text-3xl w-full text-center font-bold self-start">
        Here are my latest projects
      </h1>
      <section className={bgMode ? lightCarousel : darkCarousel}>
        <Carousel
          className="w-full"
          slideSize="70%"
          height={475}
          slideGap="lg"
          controlsOffset="lg"
          controlSize={30}
          loop
          withIndicators
          styles={{
            indicator: {
              width: 12,
              height: 4,
              transition: "width 250ms ease",

              "&[data-active]": {
                width: 40,
              },
            },
          }}
        >
          {images.map((image) => {
            return (
              <Carousel.Slide className="flex flex-row justify-center">
                <a href={image.href}>
                  {portSize.width > 600 ? (
                    <div className="h-full w-full">
                      <h1 className="h-1/6">
                        Language, Tools, and Libraries: {image.tools}
                      </h1>
                      <div
                        className={`h-5/6 w-full shadow-xl flex justify-center items-center text-transparent hover:text-zinc-800 ${image.image} bg-cover bg-center`}
                      >
                        <h1 className="text-transparent">{image.src}</h1>
                      </div>
                    </div>
                  ) : (
                    <img className="h-96 w-56 shadow-lg" src={image.src} />
                  )}
                </a>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </section>
      {screenPercent >= 2.0 ? (
        <section className="mt-10 w-full h-1/6 flex flex-row justify-center items-center animate-bounce">
          {bgMode ? (
            <a href="#Contact">
              <img className=" w-20 h-20 cursor-pointer" src={downArrowBlack} />
            </a>
          ) : (
            <a href="#Contact">
              <img
                className="w-14 h-14 cursor-pointer"
                src={downArrowGradient}
              />
            </a>
          )}
        </section>
      ) : (
        <section className="text-transparent mb-10">
          This is a placeholder
        </section>
      )}
    </body>
  );
}
