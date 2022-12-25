import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h2: "font-normal sm:text-[28px] md:text-[30px] text-[32px]",
  h3: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "font-normal text-[20px] sm:text-[14px]",
  h5: "font-normal text-[16px] sm:text-[12px]",
  h6: "text-[14px]",
  body1: "font-normal text-[10px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
