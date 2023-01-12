import plane from "../images/plane.webp";
import { useEffect, useState } from "react";

type LoaderProps = {
  timer: number;
};
const Loader = ({ timer }: LoaderProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      count !== 100 && setCount(count + 1);
    }, 25); // update the count every 40 milliseconds to reach 100 in 4 seconds
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      className={`z-50 bg-white w-screen h-screen sticky top-0 left-0 overflow-none flex justify-center items-center ${
        timer <= 2
          ? `transfrom transition-opacity ease-in duration-1000 opacity-0`
          : ""
      }`}
    >
      {/* PLANE <div>
        <img className="w-1/6 animate-increase-width" src={plane} />
      </div> */}
      <div className="w-96 h-10 border-2 border-black">
        <div className="bg-orange-400 animate-increase-width h-full w-full text-white">
          {count}%
        </div>
      </div>
    </div>
  );
};
export default Loader;
