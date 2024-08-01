import Image from "next/image";
import aboutImg from "@/public/aboutImg.png";

const About = () => {
  return (
    <section id="about">
      <h1 className="text-7xl text-white font-bold text-center uppercase py-4">
        About
      </h1>
      <p className="pb-8 text-white text-[1.2rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ea
        deserunt nemo a rem molestias asperiores vero? Voluptate repellat omnis
        nulla, minus voluptatibus ea necessitatibus illum praesentium! Est
        accusantium ad soluta, aperiam harum fuga libero ullam explicabo placeat
        temporibus cupiditate odio nulla. Placeat quibusdam, nemo illo soluta
        voluptates maxime numquam temporibus incidunt quis, dolore illum
        assumenda impedit? Animi, distinctio fugit?
      </p>
      <p className="text-white text-[1.2rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ea
        deserunt nemo a rem molestias asperiores vero? Voluptate repellat omnis
        nulla, minus voluptatibus ea necessitatibus illum praesentium! Est
        accusantium ad soluta, aperiam harum fuga libero ullam explicabo placeat
        temporibus cupiditate odio nulla. Placeat quibusdam, nemo illo soluta
        voluptates maxime numquam temporibus incidunt quis, dolore illum
        assumenda impedit? Animi, distinctio fugit?
      </p>
      <Image src={aboutImg} alt="about-img" className="h-[600px] py-12" />
    </section>
  );
};
export default About;
