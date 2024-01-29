import PropTypes from "prop-types";
import classNames from "classnames";
import { createElement } from "react";

const Button = ({ size, children }) => {
  return createElement(
    "button",
    {
      className: classNames(
        "bg-[#1d9bf0] rounded-full flex items-center font-bold hover:bg-[#1a8cd8] transition-colors justify-center",
        {
          "px-4 h-9": size === "normal",
          "px-4 h-[52px] w-full text-[17px]": size === "large",
        }
      ),
    },
    children
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["normal", "large"]),
};

Button.defaultProps = {
  size: "normal",
};