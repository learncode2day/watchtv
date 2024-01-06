import Link from "next/link";

const SideBarIcon = ({ icon, text }: any) => (
  <Link href="/">
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip md:group-hover:scale-100">{text}</span>
    </div>
  </Link>
);

export default SideBarIcon;
