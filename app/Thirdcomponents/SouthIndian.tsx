import Image from "next/image";
import southindian from "@/public/Dosa.png";

const SouthIndian = () => {
  return (
    <div className="text-white ml-[59px] flex ">
      <div className="">
        <div className="text-[27px] font-pmarker   ">
          <h1>South Indian</h1>
        </div>
        <div className="flex ">
          <div className="mr-[71px]">
            <h1>Plain Dosa</h1>
            <h1>Masala Dosa</h1>
            <h1>Cheese Masala Dosa</h1>
            <h1>Paneer Masala Dosa</h1>
            <h1>Chilli Paneer Dosa</h1>
            <h1>Mysore Plain Dosa</h1>
            <h1>Mysore Masala Dosa</h1>
            <h1>Onion Dosa</h1>
            <h1>Onion Masala Dosa</h1>
            <h1>Rava Dosa</h1>
            <h1>Rava Masala Dosa</h1>
            <h1>Idli Shamber</h1>
          </div>
          <div>
            <h1>60</h1>
            <h1>80</h1>
            <h1>110</h1>
            <h1>120</h1>
            <h1>140</h1>
            <h1>70</h1>
            <h1>100</h1>
            <h1>70</h1>
            <h1>90</h1>
            <h1>80</h1>
            <h1>100</h1>
            <h1>60(3 Idli)</h1>
          </div>
        </div>
      </div>

      <div className="border-y-2 border-dashed border-l-2 h-[224px] flex items-center pl-[15px]  ml-[118px] mt-[49px] ">
        <Image src={southindian} width={155} height={202} alt="indian" />
      </div>
    </div>
  );
};

export default SouthIndian;
