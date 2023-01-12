import { useState } from "react";
import sql from "../images/sql-server.png";

type ImageCardProps = {
  image: string;
  key: number;
};
const ImageCard = ({ image, key }: ImageCardProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`
       cursor-pointer ${
         image === sql ? `flex flex-row items-center bg-transparent` : ""
       }`}
    >
      <img
        onClick={() => setClicked(!clicked)}
        key={key}
        className={
          image === sql
            ? `${
                clicked
                  ? `bg-transparent w-24 sm:w-32 h-16 sm:h-28 transform rotate-180 transition-all duration-500 ease-in-out `
                  : `bg-transparent w-16 h-10 sm:w-24 sm:h-20 transform  transition-all duration-500 ease-in-out hover:scale-110  hover:outline-2  hover:z-10  hover:rotate-12`
              }`
            : `${
                clicked
                  ? `bg-transparent w-28 sm:w-32 h-24 sm:h-32 transform rotate-180 transition-all duration-500 ease-in-out `
                  : `bg-transparent w-20 h-20 sm:w-24 sm:h-24 transform  transition-all duration-500 ease-in-out hover:scale-110  hover:outline-2  hover:z-10  hover:rotate-12 `
              }
            `
        }
        src={image}
      />
    </div>
  );
};
export default ImageCard;
