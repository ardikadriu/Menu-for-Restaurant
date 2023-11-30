import Title from "../components/Title";
import Order from "../components/Order";
import backgroundImage from "@/public/Menu-image.png";
import Footer from "../components/Footer";
const Firstpage = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "595px",
        height: "932px",
      }}
    >
      <Title />
      <Order />
      <Footer />
    </div>
  );
};

export default Firstpage;
