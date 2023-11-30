import Image from "next/image";
import ghee from "@/public/Gheesweets.png";

const Gheesweets = () => {
  return (
    <div className="text-white flex ">
      <div className="mr-[65px]">
        <div className="border-t-2 border-r-2 border-b-2 border-dashed max-w-[162px] ml-1 h-[120px] flex items-center mt-3 ">
          <Image src={ghee} width={152} height={108} alt="gheesweets" />
        </div>
      </div>
      <div>
        <h1 className=" font-pmarker text-[27px]">Ghee Sweets</h1>
        <div className="flex">
          <div className="">
            {" "}
            <h1>Chowgani Laddu</h1>
            <h1>Kanpuri Laddu</h1>
            <h1>Besan Laddu</h1>
            <h1>Motichur Laddu</h1>
          </div>

          <div>
            {" "}
            <h1>380</h1>
            <h1>380</h1>
            <h1>380</h1>
            <h1>380</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gheesweets;
