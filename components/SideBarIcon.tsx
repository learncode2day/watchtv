const SideBarIcon = ({ icon, text }: any) => (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip md:group-hover:scale-100">{text}</span>
    </div>
  );

  export default SideBarIcon;