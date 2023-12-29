import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


export const CustomArrow = ({ className, onClick, style }: any) => {
  return <div className={className} onClick={onClick} style={{background:"black" ,borderRadius:"50%",margin:"0 0 20px 20px"}}></div>;
};

