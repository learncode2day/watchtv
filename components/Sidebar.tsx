import {
  FaHouse,
  FaClapperboard,
  FaDisplay,
  FaCouch,
  FaGear,
} from "react-icons/fa6";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import SideBarIcon from "./SideBarIcon";
import Link from "next/link";
const SideBar = () => {
  return (
    <div
      className="sm:fixed sm:top-32 sm:gap-5 sm:left-2 sm:h-screen sm:w-16 flex sm:flex-col
                   shadow-lg fixed flex-row bottom-2 w-screen h-16 left-0 z-20 justify-center sm:justify-normal"
    >
      <Link href={"/"} className="mx-3 sm:mx-0">
        <SideBarIcon icon={<FaHouse size="16" />} text="Home" />
      </Link>
      <Link href={"/"} className="mx-3 sm:mx-0">
        <SideBarIcon icon={<FaClapperboard size="16" />} text="Movies" />
      </Link>
      <Link href={"/"} className="mx-3 sm:mx-0">
        <SideBarIcon icon={<FaDisplay size="16" />} text="Tv Series" />
      </Link>
      <Link href={"/"} className="mx-3 sm:mx-0">
        <SideBarIcon icon={<FaCouch size="16" />} text="Explore" />
      </Link>
      <Link href={"/"} className="mx-3 sm:mx-0">
        <SideBarIcon icon={<FaGear size="16" />} text="Settings" />
      </Link>
      <ThemeSwitcher />
    </div>
  );
};

export default SideBar;
