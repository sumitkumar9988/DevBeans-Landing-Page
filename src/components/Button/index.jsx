import PropTypes from "prop-types";

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,

  ...restProps
}) => {
  return (
    <a
      href="https://forms.gle/toJwzgmAvoJAA6oo9"
      target="_blank"
      rel="noreferrer"
      className={`${className}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </a>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = { className: "" };
export { Button };
