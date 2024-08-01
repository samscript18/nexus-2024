import Image from "next/image";
import img from "@/public/dot_1.png";

const Hedge = () => {
  return (
    <div className="py-12 overflow-x-hidden">
      <div className="bg-[#262626] p-4 w-[100vw] h-[80px] rotate-[4deg]"></div>
      <div className="bg-[#00A99D] p-4 w-[100vw] rotate-[-4deg] -translate-y-20 flex justify-center items-center">
        <Image src={img} alt="dot" />
        <h1 className="text-[2.5rem] text-white text-center font-bold">
          NEXUS is starting with the Brown roof city of Ibadan
        </h1>
      </div>
    </div>
  );
};
export default Hedge;
