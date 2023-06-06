import React from "react";

import { Button, Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-3.5 ml-[57px] mr-[66px] mt-[19px] w-[91%]">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[157px] w-[87%] md:w-full">
              <Img
                className="h-[41px] sm:h-auto md:mt-0 mt-[3px] object-cover w-[15%] md:w-full"
                src="images/img_asset14shopokoa.png"
                alt="asset14shopokoa_One"
              />
              <Text
                className="md:ml-[0] ml-[119px] md:mt-0 mt-0.5 text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22Bluegray90002"
              >
                Navigation
              </Text>
              <Text
                className="md:ml-[0] ml-[171px] text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22Bluegray90002"
              >
                Policies
              </Text>
              <Text
                className="md:ml-[0] ml-[235px] text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22Bluegray90002"
              >
                Get in touch
              </Text>
            </div>
            <ul className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[269px] w-[77%] md:w-full common-column-list">
              <li>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                  <Text
                    className="md:mt-0 mt-[3px] text-blue_gray-800 text-xl"
                    size="txtQuicksandRegular20Bluegray800"
                  >
                    Customers
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[185px] md:mt-0 mt-[3px] text-blue_gray-800 text-xl"
                    size="txtQuicksandRegular20Bluegray800"
                  >
                    Terms and conditions
                  </Text>
                  <Button className="bg-transparent cursor-pointer font-quicksand leading-[normal] mb-[3px] min-w-[284px] md:ml-[0] ml-[121px] text-blue_gray-800 text-center text-xl">
                    dukatechsolutions@gmail.com
                  </Button>
                </div>
              </li>
              <li>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                  <Text
                    className="md:mt-0 my-0.5 text-blue_gray-800 text-xl"
                    size="txtQuicksandRegular20Bluegray800"
                  >
                    Merchants
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[187px] md:mt-0 mt-[5px] text-blue_gray-800 text-xl"
                    size="txtQuicksandRegular20Bluegray800"
                  >
                    Privacy Policies
                  </Text>
                  <Button className="bg-transparent cursor-pointer font-quicksand leading-[normal] mb-[5px] min-w-[102px] md:ml-[0] ml-[177px] text-blue_gray-800 text-center text-xl">
                    Contact Us
                  </Button>
                </div>
              </li>
              <li>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                  <Text
                    className="md:mt-0 my-0.5 text-blue_gray-800 text-xl"
                    size="txtQuicksandRegular20Bluegray800"
                  >
                    About
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[229px] md:mt-0 mt-1 text-blue_gray-800 text-xl"
                    size="txtQuicksandRegular20Bluegray800"
                  >
                    FAQs
                  </Text>
                  <Text
                    className="mb-1 md:ml-[0] ml-[268px] text-blue_gray-800 text-xl"
                    size="txtQuicksandRegular20Bluegray800"
                  >
                    Partner with us
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[154px]">
                  <Text
                    className="sm:mt-0 mt-[18px] text-base text-black-900"
                    size="txtQuicksandRegular16Black900"
                  >
                    © 2023 ShopOkoa. All rights reserved
                  </Text>
                  <div className="flex flex-row items-center justify-between w-[37%] sm:w-full">
                    <Img
                      className="h-9 w-9"
                      src="images/img_facebooksquare.svg"
                      alt="facebooksquare"
                    />
                    <Img
                      className="h-[37px]"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                    <Img
                      className="h-[45px] w-[45px]"
                      src="images/img_linkedinsvgrepocom.svg"
                      alt="linkedinsvgrepo"
                    />
                    <Img
                      className="h-9 w-9"
                      src="images/img_instagram.svg"
                      alt="instagram"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
