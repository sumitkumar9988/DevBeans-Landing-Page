const variantClasses = {
  h1: "font-extrabold text-[48px] md:text-[48px] lg:text-[74px]",
  h2: "font-extrabold text-[48px] md:text-[48px] lg:text-[69px]",
  h3: "text-[24px] md:text-[48px] lg:text-[68px]",
  h4: "font-black text-[48px] md:text-[48px] lg:text-[64px]",
  h5: "font-extrabold text-[38px] md:text-[44px] lg:text-[48px]",
  h6: "font-extrabold text-[33px] md:text-[39px] lg:text-[43px]",
  body1: "font-extrabold text-[31px] md:text-[33px] lg:text-[35px]",
  body2: "font-medium text-[18px] md:text-[20px] lg:text-[22px]",
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
