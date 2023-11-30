import Image from "next/image";
import Deshighe from "@/public/Drysweets.png";

const Drysweets = () => {
  return (
    <div className="ml-[43px] flex justify-between">
      <div className="text-white mt-[9px]">
        <h1 className="text-[16px] h-[48px] font-pmarker">
          We Make All Sweets in Deshi Ghee
        </h1>
        <h1 className=" text-[27px] h-[42px] font-pmarker">Dry Fruit Sweets</h1>
        <h3 className="text-[15px]">
          Kaju Katili <span className="ml-[50px]">680</span>{" "}
        </h3>
        <h3 className="text-[15px]">
          {" "}
          Kaju Pista Roll <span className="ml-[22px]">740</span>
        </h3>
      </div>
      <div>
        <div className="border-dashed border-white border-t-2 border-l-2 border-b-2 mt-[8px] ">
          <Image
            className="pt-[9px] pl-[10px] pb-[3px]"
            src={Deshighe}
            height={147}
            width={161}
            alt="sweet"
          />
        </div>
      </div>
    </div>
  );
};

export default Drysweets;
