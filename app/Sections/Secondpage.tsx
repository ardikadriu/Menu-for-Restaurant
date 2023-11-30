import secondbackground from "@/public/Secondbackground.png";
import Drysweets from "../Secondcomponents/Drysweets";
import Bengalisweets from "../Secondcomponents/Bengalisweets";
import Mawasweets from "../Secondcomponents/Mawasweets";

const Secondpage = () => {
  return (
    <div
      className="mt-[20px] mb-[20px] "
      style={{
        backgroundImage: `url(${secondbackground.src})`,
        backgroundSize: "fit",
        backgroundRepeat: "no-repeat",
        width: "595px",
        height: "842px",
      }}
    >
      <Drysweets />
      <Bengalisweets />
      <Mawasweets />
    </div>
  );
};

export default Secondpage;
