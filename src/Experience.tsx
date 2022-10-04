import dev from "./images/dev.png";
import css from "./images/css.svg";
import html from "./images/html.svg";
import javascript from "./images/javascript.svg";
import react from "./images/react.svg";
import typescript from "./images/typescript.svg";
import sql from "./images/sql-server.png";
import c from "./images/C.svg";
import { useEffect } from "react";
import { portType } from "./types";

export type ports = {
  portSize: portType;
  setPortSize: React.Dispatch<React.SetStateAction<portType>>;
};
export default function Experience({ portSize, setPortSize }: ports) {
  useEffect(() => {
    function handleResize() {
      setPortSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  }, []);

  const imageSize = () => {
    if (portSize.width < 600) {
      return "w-12 h-12";
    } else {
      return "w-24 h-24";
    }
  };
  return (
    <body className="w-screen h-screen flex flex-col justify-end bg-green-100 sticky top-0">
      <main className="flex flex-row-reverse w-full h-1/2">
        <section className="w-1/2 h-full">
          <h1>About me</h1>
          <p>
            I am U.S. Air Force veteran and react developer with strong
            problem-solving skills and a passion for learning.
          </p>
          <p>
            My focus is to learn and create fast, flexible, mobile-first
            applications.
          </p>
          <p>
            I am currently within the Microsoft Software Systems Academy
            learning about C#, transact-SQl and Azure Cloud Development
          </p>
        </section>
        <section className="w-1/2 h-full flex flex-row justify-center bg-red-50">
          <img className="w-40 h-40" src={dev} />
        </section>
      </main>
      <footer className="mb-10 w-full flex flex-col justify-start h-1/4 mt-5 bg-orange-50 self-center">
        <h1 className="self-center mt-5">Skills</h1>
        <section className="flex flex-row justify-center w-full">
          <div>
            <img className={imageSize()} src={typescript} />
          </div>
          <div>
            <img className={imageSize()} src={javascript} />
          </div>
          <div>
            <img className={imageSize()} src={react} />
          </div>
          <div>
            <img className={imageSize()} src={c} />
          </div>
          <div className="flex flex-row items-center">
            <img
              className={portSize.width < 600 ? "w-12 h-10" : "w-24 h-20"}
              src={sql}
            />
          </div>
          <div>
            <img className={imageSize()} src={html} />
          </div>
          <div>
            <img className={imageSize()} src={css} />
          </div>
        </section>
      </footer>
    </body>
  );
}
