import Image from "next/image";
import snacks from "@/public/image 9.png";

const Snacks = () => {
  return (
    <div className="text-white flex items-center justify-between">
      <div className="">
        <div className="text-center font-pmarker text-[27px]">
          <h1>Snacks</h1>
        </div>
        <div className="flex ml-[47px] ">
          <div>
            <h1>Panner Samosa</h1>
            <h1>Dal Kachori</h1>
            <h1>Pyaaz Kachori</h1>
            <h1>Mirchi Bada</h1>
            <h1>Bread Pakora</h1>
            <h1>Paneer Bread Pakoda</h1>
          </div>

          <div className="ml-[34px]">
            <h1>15</h1>
            <h1>15</h1>
            <h1>25</h1>
            <h1>20</h1>
            <h1>20</h1>
            <h1>30</h1>
          </div>
        </div>
      </div>
      <div className="h-[150px] border-t-2 border-b-2 border-l-2 border-dashed flex items-center pl-[9px] ">
        <Image src={snacks} width={148} height={137} alt="snack" />
      </div>
    </div>
  );
};

export default Snacks;
