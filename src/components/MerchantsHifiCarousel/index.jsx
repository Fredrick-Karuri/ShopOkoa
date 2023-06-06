import React from "react";

import { Button, Img, Text } from "components";

const MerchantsHifiCarousel = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gradient  flex flex-col items-center justify-end p-[11px] rounded-[12px] shadow-bs w-full">
          <Img
            className="h-[70px] md:h-auto mt-6 object-cover w-[88%] sm:w-full"
            src="images/img_goodlifepharmacy1.png"
            alt="goodlifepharmac"
          />
          <Text
            className="mt-[71px] text-black-900 text-xl w-[77%] sm:w-full"
            size="txtQuicksandRegular20"
          >
            {props?.userdescription}
          </Text>
          <Button className="bg-gradient  border border-black-900 border-solid cursor-pointer font-manrope font-semibold leading-[normal] min-w-[160px] mt-[38px] py-[7px] rounded-lg text-[22px] text-black-900 text-center sm:text-lg md:text-xl">
            {props?.uservisitsite}
          </Button>
        </div>
        <div className="bg-gradient1  flex flex-col items-center justify-start p-2.5 rounded-[12px] shadow-bs w-full">
          <Img
            className="h-[120px] md:h-auto object-cover w-[67%] sm:w-full"
            src="images/img_mamapesa1.png"
            alt="mamapesaOne"
          />
          <Text
            className="mt-[33px] text-black-900 text-xl w-[94%] sm:w-full"
            size="txtQuicksandMedium20"
          >
            {props?.mamapesadescription}
          </Text>
          <Button className="bg-gradient1  border border-black-900 border-solid cursor-pointer font-manrope font-semibold leading-[normal] min-w-[160px] mt-[26px] py-[7px] rounded-lg text-[22px] text-black-900 text-center sm:text-lg md:text-xl">
            {props?.mamapesavisitsite}
          </Button>
        </div>
        <div className="bg-gradient2  flex flex-col items-center justify-end p-[11px] rounded-[12px] shadow-bs w-full">
          <Img
            className="h-20 md:h-auto mt-[19px] object-cover w-[72%] sm:w-full"
            src="images/img_naivassupermarketlogo.png"
            alt="naivassupermark"
          />
          <Text
            className="mt-[66px] text-black-900 text-xl w-[86%] sm:w-full"
            size="txtQuicksandRegular20"
          >
            {props?.naivasdescription}
          </Text>
          <Button className="bg-gradient3  border border-black-900 border-solid cursor-pointer font-manrope font-semibold leading-[normal] min-w-[160px] mt-[38px] py-[7px] rounded-lg text-[22px] text-black-900 text-center sm:text-lg md:text-xl">
            {props?.naivasvisitsite}
          </Button>
        </div>
      </div>
    </>
  );
};

MerchantsHifiCarousel.defaultProps = {
  userdescription: (
    <>
      Your one-stop solution <br />
      for health and wellness
    </>
  ),
  uservisitsite: "Visit Site",
  mamapesadescription: (
    <>
      Empowering micro-
      <br />
      entrepreneurs with financial
      <br />
      solutions
    </>
  ),
  mamapesavisitsite: "Visit Site",
  naivasdescription: (
    <>
      Shop for all your grocery <br />
      needs with convenience
    </>
  ),
  naivasvisitsite: "Visit Site",
};

export default MerchantsHifiCarousel;
