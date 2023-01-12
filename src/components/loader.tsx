import plane from "../images/plane.webp";
const Loader = () => {
  return (
    <div className="z-50 bg-white w-screen h-screen sticky top-0 left-0 overflow-none">
      <div>
        <img className="w-1/6 animate-increase-width" src={plane} />
      </div>
    </div>
  );
};
export default Loader;
