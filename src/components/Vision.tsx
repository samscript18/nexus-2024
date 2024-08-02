import Image from "next/image";
import visionImg from "@/public/Image.svg";
import { Button } from "./Button";

const Vision = () => {
  return (
    <div className="py-8 px-[4rem]">
      <h1 className="text-5xl text-white font-extrabold text-center uppercase py-4">
        The Vision
      </h1>
      <div className="flex justify-between items-center mt-8 gap-[100px]">
        <Image src={visionImg} alt="about-img" width={492} height={400} />
        <p className="text-white text-[1.2rem] leading-[50px]">
          The pace of change in our world is unprecedented.{" "}
          <span className="ml-12"> Technological </span>
          advancements,<span className="mx-12">evolving</span> societal norms,
          and new ways of thinking are reshaping our reality. Change comes with
          uncertainty and with uncertainty, opportunity.  It is in these moments
          of transition that the seeds of greatness are sown.
        </p>
      </div>
      <div
        className="w-full flex flex-col justify-center
      items-center text-center mt-10"
      >
        <p className="text-white text-[1.2rem] leading-[50px] pb-6 max-w-[900px]">
          The future is a promise – a promise of progress, betterment and a
          brighter world. Each one of us has a role to play in shaping it. Let
          us not fear the future but welcome it with open arms. Let us be the
          pioneers, trailblazers and visionaries who turn potential into
          reality.
        </p>
        <Button />
      </div>
    </div>
  );
};
export default Vision;
