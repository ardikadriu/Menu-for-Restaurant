import background from "@/public/Secondbackground.png";
import Gheesweets from "../Thirdcomponents/Gheesweets";
import Snacks from "../Thirdcomponents/Snacks";
import Chaat from "../Thirdcomponents/Chaat";
import SouthIndian from "../Thirdcomponents/SouthIndian";

const Thirdpage = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "fit",
        backgroundRepeat: "no-repeat",
        width: "595px",
        height: "932px",
      }}
    >
      <Gheesweets />
      <Snacks />
      <Chaat />
      <SouthIndian />
    </div>
  );
};

export default Thirdpage;
