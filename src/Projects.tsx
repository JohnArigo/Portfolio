import { Carousel } from "@mantine/carousel";
import shop from "./images/shop.png";
import weather from "./images/weather.png";
import notes from "./images/notes.png";
import social from "./images/social.png";
import shoppingFull from "./images/shoppingFull.png";
import weatherFull from "./images/weatherFull.png";
import notesFull from "./images/notesFull.png";
import { ports } from "./types";
import { useEffect } from "react";
import downArrowBlack from "./images/downArrowBlack.png";
import downArrowGradient from "./images/downArrowGradient.png";

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
  return (
    <body id="Projects" className={bgMode ? light : dark()}>
      <h1 className="h-1/6 mt-5 text-xl w-full text-center font-bold self-start">
        Here are my latest projects
      </h1>
      <section className={bgMode ? lightCarousel : darkCarousel}>
        <Carousel
          className="w-full"
          slideSize="70%"
          height={400}
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
          <Carousel.Slide className="flex flex-row justify-center">
            <a href="https://johnpauloarigo.com/">
              {portSize.width > 600 ? (
                <div className="h-full w-full flex justify-center items-center text-transparent hover:text-zinc-800 sm:bg-social-full bg-cover">
                  <div className="flex justify-center items-center text-sm h-full w-full hover:backdrop-blur-md">
                    {/* <h1>
                      Object manipulation! This app was really challening. I had
                      to conceptualize the essentials of an e-commerence app and
                      translate it to how I can display it using react. I called
                      the Fake Store API to display products in individual
                      cards. Utilized filtering for user end sorting/filtering.
                      It can be by categories, name or price. Creating a new
                      object child to store quantity for the shopping cart to be
                      checked out. I also created basic form validation and
                      formatting. Lastly, I created a functional feedback form
                      that sends an email to designated address using EmailJS.
                      Utilized JS/React, HTML5, CSS3/Tailwind
                    </h1> */}
                  </div>
                </div>
              ) : (
                <img className="h-96 w-56 shadow-lg" src={social} />
              )}
            </a>
          </Carousel.Slide>
          <Carousel.Slide className="flex flex-row justify-center">
            <a href="https://johnarigo.github.io/shopping-app/">
              {portSize.width > 600 ? (
                <div className="h-full w-full flex justify-center items-center text-transparent hover:text-zinc-800 sm:bg-shopping bg-cover">
                  <div className="flex justify-center items-center text-sm h-full w-full hover:backdrop-blur-md">
                    <h1>
                      Object manipulation! This app was really challening. I had
                      to conceptualize the essentials of an e-commerence app and
                      translate it to how I can display it using react. I called
                      the Fake Store API to display products in individual
                      cards. Utilized filtering for user end sorting/filtering.
                      It can be by categories, name or price. Creating a new
                      object child to store quantity for the shopping cart to be
                      checked out. I also created basic form validation and
                      formatting. Lastly, I created a functional feedback form
                      that sends an email to designated address using EmailJS.
                      Utilized JS/React, HTML5, CSS3/Tailwind
                    </h1>
                  </div>
                </div>
              ) : (
                <img className="h-96 w-56 shadow-lg" src={shop} />
              )}
            </a>
          </Carousel.Slide>
          <Carousel.Slide className="flex flex-row justify-center">
            <a href="https://johnarigo.github.io/weather-app/">
              {portSize.width > 600 ? (
                <div className="h-full w-full flex justify-center items-center text-transparent hover:text-zinc-800 sm:bg-weather bg-cover">
                  <div className="flex justify-center items-center text-sm h-full w-full hover:backdrop-blur-md">
                    <h1>
                      The app I learned typescript on. Using
                      Typescript/HTML5/CSS3/Tailwind This app helped me learn
                      the essentials of matching types and declaring them. I
                      really enjoyed the OpenWeather API for its ease of use and
                      great documentation. I learned a lot about styling cards
                      with this componenet and the functionality of flexbox and
                      tailwind API. This App displays current weather and future
                      weather up to 5 days! You can find each city by zipcode.
                    </h1>
                  </div>
                </div>
              ) : (
                <img className=" shadow-lg h-96 w-56" src={weather} />
              )}
            </a>
          </Carousel.Slide>
          <Carousel.Slide className="flex flex-row justify-center">
            <a href="https://l5ot6e.csb.app/">
              {portSize.width > 600 ? (
                <div className="h-full w-full flex justify-center items-center text-transparent hover:text-zinc-800 sm:bg-notes bg-cover">
                  <div className="flex justify-center items-center text-sm h-full w-full hover:backdrop-blur-md">
                    <h1>
                      My first app! It is made with JS/React, HTML5 and CSS3.
                      Practiced CRUD, state and data manipulation. Stores notes
                      on local storage. Created in codesandbox. This project
                      helped me visualize and understand how props and state can
                      be passed throughout each component and how to edit, add
                      and delete items within an array.
                    </h1>
                  </div>
                </div>
              ) : (
                <img className=" shadow-lg h-96 w-56" src={notes} />
              )}
            </a>
          </Carousel.Slide>
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
