import Image from "next/image";
import { Button } from "./Button";
import nexus from "@/public/NEXUS.png";
import nexus_2 from "@/public/2024.png";
import img from "@/public/apple_vision.png";
import img_2 from "@/public/Group 5.png";

const Header = () => {
  return (
    <header className="relative mt-[3.5rem] mb-[5rem]">
      <div className="flex justify-between items-end">
        <div className="max-w-[500px]">
          <Image src={nexus} alt="NEXUS" />
          <h3 className="pt-[4rem] pb-6 text-[1.15rem] text-white leading-[30px]">
            NEXUS is a project of NEXT (New Evolutionaries, Xplorers, and
            Thinkers), on innovative EdTech startup poised to transform the
            educational landscape, serving as a consult between industrial and
            intelligence ages.
          </h3>
          <Button />
        </div>
        <Image src={nexus_2} alt="2024" className="mb-[4rem]" />
      </div>
      <div className="absolute top-[7%] right-[29.5%]">
        <Image src={img} alt="2024" width={400} height={260} />
      </div>
      <div className="absolute top-[37%] right-[-3%]">
        <Image src={img_2} alt="2024" width={51} height={49} />
      </div>
    </header>
  );
};
export default Header;
