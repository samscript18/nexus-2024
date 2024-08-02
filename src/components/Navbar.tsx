import Image from "next/image";
import navLogo from "@/public/nav_logo.png";
import { Button } from "../components/Button";

const Navbar = () => {
  return (
    <nav
      id="home"
      className="flex justify-between items-center p-3 border-2 border-[#262626] "
    >
      <Image src={navLogo} width={80} height={80} alt="nexus-logo" />
      <ul className="flex justify-between items-center">
        <li className="bg-[#262626] py-3 px-6 mr-8 rounded-md">
          <a href="#home" className="text-white">
            Home
          </a>
        </li>
        <li className="mr-8">
          <a href="#about" className="text-white">
            About
          </a>
        </li>
        <li className="mr-8">
          <a href="#vision" className="text-white">
            The Vision
          </a>
        </li>
        <li className="mr-8">
          <a href="#home" className="text-white">
            What&#39;s in the Room
          </a>
        </li>
        <li className="">
          <a href="#home" className="text-white">
            Where and When
          </a>
        </li>
      </ul>
      <Button />
    </nav>
  );
};
export default Navbar;
