import Image from "next/image";
import sweetsfrombangali from "@/public/bangalisweets.png";

const Bengalisweets = () => {
  return (
    <div className="flex mt-[18px]">
      <div className="border-dashed border-white border-y-2 border-r-2 h-[242px] flex items-center">
        <Image
          className="py-[9px] pr-[8px]"
          src={sweetsfrombangali}
          width={237}
          height={224}
          alt="sweets from bangali"
        />
      </div>
      <div className="text-white text-[27px] ml-[60px]  ">
        <h1 className="font-pmarker">Bengali Sweets</h1>
        <div className="flex text-[15px] items-center w-[200px] justify-between leading-normal ">
          <div className="">
            <h2>Rasgulla</h2>
            <h2>Chamcham</h2>
            <h2>Bengali Mix</h2>
            <h2>Ras Malai</h2>
            <h2>Ras Malai</h2>
            <h2>Malai Rolls</h2>
            <h2>Malai Rolls</h2>
            <h2>Malpua</h2>
            <h2>Gulab Jamun</h2>
            <h2>Jalebi(Deshi Ghee)</h2>
            <h2>Mawa Kachori</h2>
          </div>

          <div>
            <h2>240</h2>
            <h2>240</h2>
            <h2>320</h2>
            <h2>320</h2>
            <h2>38Rs. Pc</h2>
            <h2>380</h2>
            <h2>380</h2>
            <h2>380</h2>
            <h2>320</h2>
            <h2>300</h2>
            <h2>30</h2>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Bengalisweets;
