import Logo from "./logo/logo";
import Menu from "./menu";

const SideBar = () => {
  return (
    <aside className="w-[275px] min-h-screen px-2">
      <div className="">
        <Logo />
        <Menu />
      </div>
    </aside>
  );
};

export default SideBar;
