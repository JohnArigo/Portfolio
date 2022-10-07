import { ports } from "./types";
import { useEffect } from "react";
import downArrowBlack from "./images/downArrowBlack.png";
import downArrowGradient from "./images/downArrowGradient.png";

export default function Title({
  portSize,
  setPortSize,
  setScrollSize,
  scrollSize,
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

  const secCSSMore = "w-1/2 flex flex-col justify-center";
  const secCSSLess = "w-full flex flex-col justify-center items-center";
  const light =
    " w-screen h-screen flex flex-row flex-wrap  sticky top-0 bg-white text-slate-900 ";
  const dark =
    "w-screen h-screen flex flex-row flex-wrap  sticky top-0 bg-slate-900 text-white";
  return (
    <body id="Title" className={bgMode ? light : dark}>
      <section className="flex flex-row h-5/6 w-full">
        <main className={portSize.width > 600 ? secCSSMore : secCSSLess}>
          <h1 className="self-center">Hello, my name is John Arigo</h1>
          <h3 className="self-center text-center">
            I am an aspiring Software Engineer with passion to learn and
            innovate!
          </h3>
        </main>
        {portSize.width > 600 ? (
          <aside className="w-1/2 h-4/6 flex flex-col justify-center ">
            This is where the photo 5s going
          </aside>
        ) : null}
      </section>
      {screenPercent > 0.005 ? (
        <aside className=" w-full h-1/6 flex flex-row justify-center items-start animate-bounce">
          {bgMode ? (
            <a href="#Experience">
              <img className="w-20 h-20 cursor-pointer" src={downArrowBlack} />
            </a>
          ) : (
            <a href="#Experience">
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
