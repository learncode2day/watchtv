import Link from "next/link";

const SideBarIcon = ({ icon, text }: any) => (
    <div className="sidebar-icon group">
      <Link href='/'>
      {icon}
      </Link>
      <span className="sidebar-tooltip md:group-hover:scale-100">{text}</span>
    </div>
  );

  export default SideBarIcon;