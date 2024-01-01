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
  
        <SideBarIcon icon={<FaHouse size="16" />} text="Home" />
  
        <SideBarIcon icon={<FaClapperboard size="16" />} text="Movies" />
  
    
        <SideBarIcon icon={<FaDisplay size="16" />} text="Tv Series" />
      
      
      <ThemeSwitcher />
    </div>
  );
};

export default SideBar;
