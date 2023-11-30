import Image from "next/image";
import Indiansweets from "@/public/Indiansweets.png";

const Mawasweets = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-white ml-[60px]">
        <h1 className="text-[27px] font-cba font-pmarker">Mawa Sweets</h1>
        <div className="flex ">
          <div className="mr-[57px]">
            <h2>Plain Barfi</h2>
            <h2>Plain Barfi</h2>
            <h2>Kesar Barfi</h2>
            <h2>Mathura Peda </h2>
            <h2>Mathura Peda</h2>
            <h2>Safed Kalakand</h2>
            <h2>Milk cake</h2>
            <h2>Chocolate Fruit Roll </h2>
            <h2>Mawa Fruit Roll</h2>
            <h2> Mawa Glap Petha </h2>
            <h2>Chocolate Burfi </h2>
            <h2>Pineapple burfi</h2>
          </div>
          <div>
            <h2>380</h2>
            <h2>340</h2>
            <h2>420</h2>
            <h2>380</h2>
            <h2>380</h2>
            <h2>380</h2>
            <h2>380</h2>
            <h2>360</h2>
            <h2>360</h2>
            <h2>360</h2>
            <h2>360</h2>
            <h2>360</h2>
          </div>
        </div>
      </div>
      <div className="border-white border-dashed border-l-2 border-y-2 h-[189px] flex items-center">
        <Image
          className="pt-[4px] pl-2 "
          src={Indiansweets}
          width={223}
          height={160}
          alt="sweets"
        />
      </div>
    </div>
  );
};

export default Mawasweets;
