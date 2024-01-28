import PropTypes from "prop-types";
import SideBar from "./sidebar";
import RightBar from "./rightBar";

const MainLayout = ({ children }) => {
  return (
    <div className="w-[1282px] mx-auto flex">
      <SideBar />
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 flex  max-w-[600px] border-x border-[#2f3336]">
          {children}
        </main>
        <RightBar />
      </main>
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
