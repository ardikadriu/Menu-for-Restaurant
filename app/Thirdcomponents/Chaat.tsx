import Image from "next/image";
import chaat from "@/public/image 10.png";

const Chaat = () => {
  return (
    <div className="flex text-white items-center justify-between">
      <div className="h-[184px] border-dashed border-y-2 border-r-2 flex w-[201px] items-center ">
        <Image src={chaat} width={192} height={159} alt="sweet" />
      </div>
      <div className="text-[35px] font-pmarker ml-[10px] ">
        <h1>Chaat</h1>{" "}
      </div>
      <div className="flex justify-between  w-[250px]">
        <div>
          <h1>Tikiya Chole (Desi Ghee)</h1>
          <h1>Chole Bhature</h1>
          <h1>Paneer Chilla</h1>
          <h1>Cheese Paneer Chilla</h1>
          <h1>Bhelpuri</h1>
          <h1>Dahi Bhalla (Dahi Vada)</h1>
          <h1>Dahi Papdi Chaat</h1>

          <h1></h1>
        </div>
        <div>
          <h1>50</h1>
          <h1>20</h1>
          <h1>80</h1>
          <h1>60</h1>
          <h1>30</h1>
          <h1>60</h1>
          <h1>60</h1>
        </div>
      </div>
    </div>
  );
};

export default Chaat;
