import React from "react";

const sizeClasses = {
  txtQuicksandRegular20Gray80004: "font-normal font-quicksand",
  txtQuicksandMedium20: "font-medium font-quicksand",
  txtManropeBold64: "font-bold font-manrope",
  txtQuicksandRegular16Black900: "font-normal font-quicksand",
  txtManropeExtraBold80: "font-extrabold font-manrope",
  txtInterBold26: "font-bold font-inter",
  txtQuicksandRegular36: "font-normal font-quicksand",
  txtQuicksandMedium26: "font-medium font-quicksand",
  txtManropeSemiBold32: "font-manrope font-semibold",
  txtInterBold22: "font-bold font-inter",
  txtManropeSemiBold50: "font-manrope font-semibold",
  txtManropeMedium42: "font-manrope font-medium",
  txtManropeExtraBold64: "font-extrabold font-manrope",
  txtManropeMedium22: "font-manrope font-medium",
  txtManropeSemiBold18: "font-manrope font-semibold",
  txtInterBold22WhiteA700: "font-bold font-inter",
  txtManropeBold36: "font-bold font-manrope",
  txtManropeBold14: "font-bold font-manrope",
  txtManropeSemiBold56: "font-manrope font-semibold",
  txtManropeSemiBold36: "font-manrope font-semibold",
  txtQuicksandRegular20Bluegray800: "font-normal font-quicksand",
  txtQuicksandRegular20Gray60001: "font-normal font-quicksand",
  txtManropeExtraBold54: "font-extrabold font-manrope",
  txtManropeExtraBold32: "font-extrabold font-manrope",
  txtManropeExtraBold33: "font-extrabold font-manrope",
  txtManropeSemiBold22Gray500: "font-manrope font-semibold",
  txtQuicksandMedium32: "font-medium font-quicksand",
  txtManropeSemiBold22Gray700: "font-manrope font-semibold",
  txtQuicksandSemiBold24: "font-quicksand font-semibold",
  txtQuicksandMedium36: "font-medium font-quicksand",
  txtQuicksandMedium16: "font-quicksand font-semibold",
  txtManropeSemiBold22: "font-manrope font-semibold",
  txtQuicksandRegular22: "font-normal font-quicksand",
  txtManropeExtraBold72: "font-extrabold font-manrope",
  txtManropeSemiBold22Bluegray90002: "font-manrope font-semibold",
  txtQuicksandRegular20: "font-normal font-quicksand",
  txtManropeSemiBold28: "font-manrope font-semibold",
  txtManropeMedium32: "font-manrope font-medium",
  txtQuicksandRegular20Black900: "font-medium font-quicksand",
  txtManropeRegular24: "font-manrope font-normal",
  txtManropeSemiBold18Bluegray90002: "font-manrope font-semibold",
  txtManropeBold26: "font-bold font-manrope",
  txtManropeBold48: "font-bold font-manrope",
  txtQuicksandRegular16: "font-medium font-quicksand",
  txtQuicksandSemiBold24Black900: "font-quicksand font-semibold",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
