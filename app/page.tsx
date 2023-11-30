import Firstpage from "./Sections/First-page";
import Secondpage from "./Sections/Secondpage";
import Thirdpage from "./Sections/Thirdpage";
export default function Home() {
  return (
    <main className=" w-full flex flex-col items-center ">
      <Firstpage />
      <Secondpage />
      <Thirdpage />
    </main>
  );
}
