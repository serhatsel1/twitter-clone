import Account from "./account";
import Logo from "./logo/logo";
import Menu from "./menu";

const SideBar = () => {
  return (
    <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col ">
      <Logo />
      <Menu />
     <Account />
    </aside>
  );
};

export default SideBar;
