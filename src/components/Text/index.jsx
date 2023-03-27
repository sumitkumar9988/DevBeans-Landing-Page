import React from "react";

const variantClasses = {
  h1: "font-extrabold sm:text-[48px] md:text-[48px] text-[74px]",
  h2: "font-extrabold sm:text-[48px] md:text-[48px] text-[69px]",
  h3: "sm:text-[48px] md:text-[48px] text-[68px]",
  h4: "font-black sm:text-[48px] md:text-[48px] text-[64px]",
  h5: "font-extrabold sm:text-[38px] md:text-[44px] text-[48px]",
  h6: "font-extrabold sm:text-[33px] md:text-[39px] text-[43px]",
  body1: "font-extrabold sm:text-[31px] md:text-[33px] text-[35px]",
  body2: "font-medium sm:text-[18px] md:text-[20px] text-[22px]",
  body3: "font-extrabold text-[20px]",
  body4: "text-[18px]",
  body5: "text-[16px]",
  body6: "font-medium text-[15px]",
  body7: "text-[14px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
