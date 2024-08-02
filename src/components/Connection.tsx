import Image from "next/image";
import img from "@/public/Balls.png";
import { Button } from "./Button";

const Connection = () => {
  return (
    <div className="py-8 px-[4rem]">
      <h1 className="text-5xl text-[#004080] font-bold text-center uppercase py-4">
        The Connection
      </h1>
      <div className="flex justify-between items-start mt-10">
        <Image src={img} alt="image" width={450} height={450} />
        <div className="max-w-[500px]">
          <p className="text-[1.5rem] mb-6 leading-[50px]">
            The fusion of possibilities that <span className="mx-12">can</span>
            birth extraordinary outcomes. It is{" "}
            <span className="mx-12">the</span> birthplace{" "}
            <span className="mx-12">of</span> creativity.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};
export default Connection;
