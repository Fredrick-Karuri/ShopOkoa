import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const FAQsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <header className="bg-white-A700 border-b border-green-800 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            className="common-pointer sm:flex-1 h-11 md:h-auto mb-[7px] sm:ml-[0] ml-[42px] sm:mt-0 mt-[18px] object-cover w-[13%] sm:w-full"
            src="images/img_asset14shopokoa.png"
            alt="asset14shopokoa"
            onClick={() => navigate("/landing")}
          />
          <Text
            className="common-pointer mb-[17px] sm:ml-[0] ml-[346px] sm:mt-0 mt-[27px] text-blue_gray-900_02 text-lg"
            size="txtManropeSemiBold18Bluegray90002"
            onClick={() => navigate("/about")}
          >
            About
          </Text>
          <Text
            className="common-pointer mb-[17px] sm:ml-[0] ml-[41px] sm:mt-0 mt-[27px] text-blue_gray-900_02 text-lg"
            size="txtManropeSemiBold18Bluegray90002"
            onClick={() => navigate("/customers")}
          >
            Customers
          </Text>
          <Text
            className="common-pointer mb-[17px] sm:ml-[0] ml-[41px] sm:mt-0 mt-[27px] text-blue_gray-900_02 text-lg"
            size="txtManropeSemiBold18Bluegray90002"
            onClick={() => navigate("/merchantshifi")}
          >
            Merchants
          </Text>
          <a
            href="javascript:"
            className="mb-[17px] sm:ml-[0] ml-[41px] sm:mt-0 mt-[27px] text-blue_gray-900_02 text-lg"
          >
            <Text size="txtManropeSemiBold18Bluegray90002">FAQs</Text>
          </a>
          <Button className="bg-gradient4  border border-black-900 border-solid cursor-pointer font-semibold leading-[normal] mb-[11px] min-w-[120px] sm:ml-[0] ml-[88px] mr-[116px] sm:mt-0 mt-[21px] py-2 rounded-[19px] text-base text-black-900 text-center">
            Get Started
          </Button>
        </header>
        <div className="h-[416px] md:h-[635px] md:px-5 relative w-full">
          <Img
            className="absolute h-[416px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_angel4704518640.png"
            alt="angel4704518640"
          />
          <Text
            className="absolute bottom-[13%] left-[10%] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
            size="txtManropeMedium32"
          >
            and its features
          </Text>
          <div className="absolute bg-gradient5  flex flex-col h-full inset-[0] items-center justify-center m-auto p-3 w-full">
            <div className="flex md:flex-col flex-row gap-11 items-start justify-start mt-[38px] w-[84%] md:w-full">
              <div className="flex flex-col gap-[57px] items-start justify-start md:mt-0 mt-[43px] w-[48%] md:w-full">
                <div className="h-[129px] md:h-[74px] relative w-full">
                  <Text
                    className="absolute inset-x-[0] left-0 mx-auto sm:text-[40px] md:text-[46px] text-[54px] text-blue_gray-900_01 top-[0] tracking-[2.16px] w-max"
                    size="txtManropeExtraBold54"
                  >
                    Frequently Asked
                  </Text>
                  <Text
                    className="absolute bottom-[0] inset-x-[0] left-14 sm:text-[40px] md:text-[46px] text-[54px] text-blue_gray-900_01 tracking-[2.16px]"
                    size="txtManropeExtraBold54"
                  >
                    Questions
                  </Text>
                </div>
                <Text
                  className="absolute left-48 bottom-36 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01 tracking-[0.64px]"
                  size="txtManropeMedium32"
                >
                  Learn more about the platform
                </Text>
              </div>
              <Img
                className="h-[354px]"
                src="images/img_questions1.svg"
                alt="questionsOne"
              />
            </div>
          </div>
        </div>
        <div className="h-[1013px] md:px-5 relative w-full">
          <Img
            className="h-[1013px] m-auto object-cover w-full"
            src="images/img_angel4704518640_1013x1280.png"
            alt="angel4704518640_One"
          />
          <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-[71%]">
            <div className="flex flex-col font-manrope gap-9 items-center justify-start w-auto md:w-full">
              <div className="flex flex-col gap-9 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start w-auto md:w-full">
                  <Button
                    className="bg-green-800 border border-green-800 border-solid cursor-pointer flex items-center justify-between min-w-[900px] md:min-w-full px-[34px] py-[22px] rounded-[20px]"
                    rightIcon={
                      <Img
                        className="h-[30px] mt-px mb-1 ml-[35px]"
                        src="images/img_arrowdown339svgrepocom.svg"
                        alt="arrow-down-339_svgrepo.com"
                      />
                    }
                  >
                    <div className="font-bold leading-[normal] md:text-2xl sm:px-5 sm:text-[22px] text-[26px] text-left text-white-A700">
                      What is ShopOkoa
                    </div>
                  </Button>
                </div>
                <Button
                  className="bg-green-800 border border-green-800 border-solid cursor-pointer flex items-center justify-between min-w-[900px] md:min-w-full px-[34px] py-[22px] rounded-[20px]"
                  rightIcon={
                    <Img
                      className="h-[30px] mt-1 mb-px ml-[35px]"
                      src="images/img_arrowdown339svgrepocom.svg"
                      alt="arrow-down-339_svgrepo.com"
                    />
                  }
                >
                  <div className="font-bold leading-[normal] md:text-2xl sm:px-5 sm:text-[22px] text-[26px] text-left text-white-A700">
                    How can I access the service?
                  </div>
                </Button>
              </div>
              <Button
                className="bg-green-800 border border-green-800 border-solid cursor-pointer flex items-center justify-between min-w-[900px] md:min-w-full px-[34px] py-[22px] rounded-[20px]"
                rightIcon={
                  <Img
                    className="h-[30px] mt-px mb-1 ml-[35px]"
                    src="images/img_arrowdown339svgrepocom.svg"
                    alt="arrow-down-339_svgrepo.com"
                  />
                }
              >
                <div className="font-bold leading-[normal] md:text-2xl sm:px-5 sm:text-[22px] text-[26px] text-left text-white-A700">
                  How can I register with the service?
                </div>
              </Button>
              <Button
                className="bg-green-800 border border-green-800 border-solid cursor-pointer flex items-center justify-between min-w-[900px] md:min-w-full px-[34px] py-[22px] rounded-[20px]"
                rightIcon={
                  <Img
                    className="h-[30px] mt-1 mb-px ml-[35px]"
                    src="images/img_arrowdown339svgrepocom.svg"
                    alt="arrow-down-339_svgrepo.com"
                  />
                }
              >
                <div className="font-bold leading-[normal] md:text-2xl sm:px-5 sm:text-[22px] text-[26px] text-left text-white-A700">
                  How does it benefit me as a customer?
                </div>
              </Button>
              <Button
                className="bg-green-800 border border-green-800 border-solid cursor-pointer flex items-center justify-between min-w-[900px] md:min-w-full px-[34px] py-[22px] rounded-[20px]"
                rightIcon={
                  <Img
                    className="h-[30px] mt-1 mb-px ml-[35px]"
                    src="images/img_arrowdown339svgrepocom.svg"
                    alt="arrow-down-339_svgrepo.com"
                  />
                }
              >
                <div className="font-bold leading-[normal] md:text-2xl sm:px-5 sm:text-[22px] text-[26px] text-left text-white-A700">
                  How am I able to walk out of a shop without paying for items?
                </div>
              </Button>
              
              <Button
                className="bg-green-800 border border-green-800 border-solid cursor-pointer flex items-center justify-between min-w-[900px] md:min-w-full px-[34px] py-[22px] rounded-[20px]"
                rightIcon={
                  <Img
                    className="h-[30px] mt-px mb-1 ml-[35px]"
                    src="images/img_arrowdown339svgrepocom.svg"
                    alt="arrow-down-339_svgrepo.com"
                  />
                }
              >
                <div className="font-bold leading-[normal] md:text-2xl sm:px-5 sm:text-[22px] text-[26px] text-left text-white-A700">
                  What can I use shopokoa to purchase?
                </div>
              </Button>
            </div>
            <Text
              className="md:ml-[0] mt-[169px] md:text-2xl sm:text-[22px] text-[26px] text-black-900_cc text-center"
              size="txtInterBold26"
            >
              HAVE A QUESTION THAT HAS NOT BEEN ADDRESSED?
            </Text>
            <Button className="bg-green-800_cc cursor-pointer font-manrope font-semibold leading-[normal] min-w-[260px] md:ml-[0] ml-[291px] mr-[349px] mt-7 py-[17px] rounded-[12px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl self-center">
              CONTACT US
            </Button>
          </div>
        </div>
        <Footer className="bg-white-A700 border-green-800 border-solid border-t flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default FAQsPage;
