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
      className={`z-50 bg-zinc-900 w-screen h-screen sticky top-0 left-0 overflow-none flex flex-col justify-center items-center ${
        timer <= 1
          ? `transfrom transition-opacity ease-in duration-1000 opacity-0`
          : ""
      }`}
    >
      {/* PLANE <div>
        <img className="w-1/6 animate-increase-width" src={plane} />
      </div> */}
      <h2>{count}%</h2>
      <div className="w-96 h-8 border border-white">
        <div className="bg-gray-50 text-center font-bold text-xl animate-increase-width h-full w-full "></div>
      </div>
    </div>
  );
};
export default Loader;
