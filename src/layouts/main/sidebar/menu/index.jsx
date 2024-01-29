import { NavLink } from "react-router-dom";
import classNames from "classnames";
import mainMenu from "../../../../utils/consts";
import More from "./more/more";
import New from "./new/new";
const Menu = () => {
  console.log(mainMenu);
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu, index) => (
        <div key={index}>
          <NavLink to={menu.path} className="block group size-max">
            {({ isActive }) => (
              <div
                className={classNames(
                  "p-3 rounded-full inline-flex items-center gap-5  group-hover:bg-[#eff3f41a] transition-colors",
                  {
                    "font-bold": isActive,
                  }
                )}
              >
                <div className="w-[26.25px] h-[26.25px] relative">
                  {menu?.notificaton && (
                    <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 items-center justify-center flex text-[11px]">
                      {menu?.notificaton}
                    </span>
                  )}
                  {!isActive && menu.icon.passive}

                  {isActive && menu.icon.active}
                </div>
                <div className="pr-4 text-xl">{menu.title}</div>
              </div>
            )}
          </NavLink>
        </div>
      ))}
      <More />
      <New />
    </nav>
  );
};

export default Menu;
