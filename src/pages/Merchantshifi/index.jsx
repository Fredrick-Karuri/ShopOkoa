import React from "react";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import MerchantsHifiCarousel from "components/MerchantsHifiCarousel";

const MerchantshifiPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-white-A700 border-b border-green-800 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="bg-gradient5  flex flex-col items-center justify-start sm:pl-5 pl-[29px] w-full">
            <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between max-w-[1251px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col items-end justify-start md:mt-0 mt-[68px] w-[39%] md:w-full">
                <Img
                  className="h-[166px] md:h-auto object-cover rounded-lg w-[49%] sm:w-full"
                  src="images/img_rectangle52.png"
                  alt="rectangleFiftyTwo"
                />
                <div className="flex sm:flex-col flex-row gap-3.5 items-start justify-between mt-[19px] w-full">
                  <Img
                    className="h-[166px] md:h-auto mb-[113px] object-cover rounded-lg"
                    src="images/img_rectangle51.png"
                    alt="rectangleFiftyOne"
                  />
                  <Img
                    className="h-[166px] md:h-auto sm:mt-0 mt-[113px] object-cover rounded-lg"
                    src="images/img_rectangle50.png"
                    alt="rectangleFifty"
                  />
                </div>
                <Button className="bg-gradient5  border border-black-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[260px] mt-[35px] py-[13px] rounded-[12px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900_01 text-center">
                  Explore
                </Button>
              </div>
              <div className="h-[660px] relative w-3/5 md:w-full">
                <Img
                  className="h-[660px] m-auto object-cover w-full"
                  src="images/img_rectangle23.png"
                  alt="rectangleTwentyThree"
                />
                <div className="absolute bg-green-200_7a flex flex-col font-quicksand items-end justify-start p-[15px] right-[0] rounded-bl-[45px] rounded-tl-[45px] top-[27%]">
                  <Text
                    className="mr-[7px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtQuicksandSemiBold24Black900"
                  >
                    <>
                      Discover the benefits <br />
                      of partnering with us
                    </>
                  </Text>
                </div>
                <Text
                  className="absolute inset-x-[0] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-white-A700 top-[6%] tracking-[0.96px]"
                  size="txtManropeBold48"
                >
                  <>
                    Join Our Growing Network
                    <br />
                    of Merchants
                  </>
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[504px] mt-[34px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[0.56px]"
            size="txtManropeSemiBold28"
          >
            Featured merchants
          </Text>
          <MerchantsHifiCarousel className="gap-14 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start max-w-[1012px] mt-[18px] mx-auto md:px-5 w-full" />
          <Text
            className="md:ml-[0] ml-[549px] mt-[53px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[0.56px]"
            size="txtManropeSemiBold28"
          >
            Merchant Benefits
          </Text>
          <List
            className="sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1146px] mt-[26px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="border border-blue_gray-100_01 border-solid flex flex-1 flex-col items-center justify-start pb-[25px] rounded-[12px] w-full">
              <Img
                className="h-[250px] sm:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                src="images/img_rectangle46.png"
                alt="rectangleFortySix"
              />
              <Text
                className="mt-3 text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22"
              >
                unsecured credit{" "}
              </Text>
              <Text
                className="mt-[26px] text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                <>
                  Access unsecured credit ranging <br />
                  from $100 to $4,000 to cover short-
                  <br />
                  term cash flow shortfalls.
                </>
              </Text>
            </div>
            <div className="border border-blue_gray-100_01 border-solid flex flex-1 flex-col gap-[15px] items-center justify-start pb-[7px] rounded-[12px] w-full">
              <Img
                className="h-[250px] sm:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                src="images/img_rectangle47.png"
                alt="rectangleFortySeven"
              />
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22"
              >
                High-Value Loans
              </Text>
              <Text
                className="text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                <>
                  Benefit from our partnerships with <br />
                  leading banks, enabling access to <br />
                  high-value loans without the need <br />
                  to build your own balance sheet.
                </>
              </Text>
            </div>
            <div className="border border-blue_gray-100_01 border-solid flex flex-1 flex-col items-center justify-start pb-9 rounded-[12px] w-full">
              <Img
                className="h-[250px] sm:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                src="images/img_rectangle48.png"
                alt="rectangleFortyEight"
              />
              <Text
                className="mt-3 text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22"
              >
                Access to a large customer base
              </Text>
              <Text
                className="mt-10 text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                <>
                  Tap into our extensive customer <br />
                  network and expand your reach.
                </>
              </Text>
            </div>
          </List>
          <div className="flex md:flex-col flex-row gap-12 items-center justify-center md:ml-[0] ml-[265px] mt-7 md:px-5 w-[59%] md:w-full">
            <div className="border border-blue_gray-100_01 border-solid flex flex-col gap-2.5 items-end justify-start pb-6 rounded-[12px] w-[47%] md:w-full">
              <Img
                className="h-[250px] sm:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                src="images/img_rectangle49.png"
                alt="rectangleFortyNine"
              />
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="md:ml-[0] ml-[3px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                  size="txtManropeSemiBold22"
                >
                  Convenient payment options
                </Text>
                <Text
                  className="mt-1 text-black-900 text-xl"
                  size="txtQuicksandRegular20"
                >
                  <>
                    Enjoy multiple convenient payment <br />
                    options to effortlessly receive <br />
                    payments from your customers <br />
                    and manage transactions
                  </>
                </Text>
              </div>
            </div>
            <div className="border border-blue_gray-100_01 border-solid flex flex-col items-center justify-start pb-6 rounded-[12px] w-[47%] md:w-full">
              <Img
                className="h-[250px] sm:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                src="images/img_rectangle53.png"
                alt="rectangleFiftyThree"
              />
              <Text
                className="mt-2.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22"
              >
                Dedicated Support
              </Text>
              <Text
                className="mt-1 text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                <>
                  Get reliable and responsive support <br />
                  from our team, ensuring a smooth <br />
                  and hassle-free experience on our
                  <br />
                  platform
                </>
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[549px] mt-[63px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[0.56px]"
            size="txtManropeSemiBold28"
          >
            How it works
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[862px] mt-[100px] mx-auto md:px-5 w-full">
            <Img
              className="h-[252px]"
              src="images/img_signuppana.svg"
              alt="signuppana"
            />
            <div className="flex flex-col gap-4 items-center justify-start md:mt-0 mt-[50px]">
              <a
                href="javascript:"
                className="text-[22px] text-black-900 sm:text-lg md:text-xl"
              >
                <Text size="txtManropeSemiBold22">Sign Up</Text>
              </a>
              <Text
                className="text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                <>
                  Create an account and provide the
                  <br />
                  necessary information to get started.
                </>
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between max-w-[842px] mt-[87px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[19px] items-center justify-start sm:mt-0 mt-12">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22"
              >
                List Your Products
              </Text>
              <Text
                className="text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                <>
                  Add your products or services to <br />
                  our platform and set the pricing.
                </>
              </Text>
            </div>
            <div className="h-[261px] relative w-[30%] sm:w-full">
              <Img
                className="h-[7px] mt-0.5 mx-auto"
                src="images/img_car.svg"
                alt="car"
              />
              <Img
                className="absolute h-[261px] inset-[0] justify-center m-auto"
                src="images/img_onlinewisheslistcuate.svg"
                alt="onlinewisheslis"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[907px] mt-12 mx-auto md:px-5 w-full">
            <Img
              className="h-[262px]"
              src="images/img_icecreamselleramico.svg"
              alt="icecreamsellera"
            />
            <div className="flex flex-col gap-4 items-center justify-start md:mt-0 mt-12">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22"
              >
                Start Selling
              </Text>
              <Text
                className="text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                <>
                  Reach a wider customer base and start <br />
                  selling your products right away
                </>
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[415px] mt-[45px] text-[22px] text-black-900 sm:text-lg md:text-xl"
            size="txtManropeSemiBold22"
          >
            Yes its that easy! No bottle necks.
          </Text>
          <Text
            className="bg-gradient6  border border-black-900 border-solid md:ml-[0] ml-[453px] mt-6 pb-[13px] pt-5 sm:px-5 px-[35px] rounded-lg text-[22px] text-black-900 sm:text-lg md:text-xl"
            size="txtManropeSemiBold22"
          >
            Sign me up Now
          </Text>
          <div className="bg-gradient7  flex flex-col items-center justify-end mt-[45px] p-6 sm:px-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-start max-w-[1020px] mt-1.5 mx-auto md:px-5 w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[0.56px]"
                size="txtManropeSemiBold28"
              >
                Merchant Stories
              </Text>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-1 flex-col justify-start p-[3px] rounded-[12px] w-full">
                  <Img
                    className="h-[114px] md:h-auto md:ml-[0] ml-[184px] mt-2 object-cover rounded-[20px] w-[22%] sm:w-full"
                    src="images/img_rectangle6.png"
                    alt="rectangleSix"
                  />
                  <Text
                    className="md:ml-[0] ml-[197px] mt-1 text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtManropeSemiBold22"
                  >
                    Jane{" "}
                  </Text>
                  <Text
                    className="ml-20 md:ml-[0] mt-[27px] text-[22px] text-gray-500 sm:text-lg md:text-xl"
                    size="txtManropeSemiBold22Gray500"
                  >
                    Owner of ABC E-commerce Store
                  </Text>
                  <Text
                    className="mb-[9px] md:ml-[0] ml-[27px] mt-[18px] text-gray-600_01 text-xl"
                    size="txtQuicksandRegular20Gray60001"
                  >
                    <>
                      Using the app has revolutionized my business. <br />
                      With easy access to financing, I&#39;ve been able <br />
                      to expand my product range and increase sales.
                      <br /> It&#39;s a game-changer!&quot;
                    </>
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-1 flex-col justify-end p-[9px] rounded-[12px] w-full">
                  <Img
                    className="h-[114px] md:h-auto mt-0.5 mx-auto object-cover rounded-[20px] w-[22%] sm:w-full"
                    src="images/img_rectangle57.png"
                    alt="rectangleFiftySeven"
                  />
                  <Text
                    className="md:ml-[0] ml-[198px] mr-[212px] mt-1 text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtManropeSemiBold22"
                  >
                    John{" "}
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[138px] mr-[93px] mt-4 text-[22px] text-gray-500 sm:text-lg md:text-xl"
                    size="txtManropeSemiBold22Gray500"
                  >
                    Small Business Owner
                  </Text>
                  <Text
                    className="ml-4 md:ml-[0] mr-[27px] mt-[7px] text-gray-600_01 text-xl"
                    size="txtQuicksandRegular20Gray60001"
                  >
                    <>
                      I can&#39;t recommend the app enough! It has <br />
                      simplified my cash flow management and <br />
                      provided me with the flexibility to meet short-
                      <br />
                      term financial needs. It&#39;s been a lifesaver for <br />
                      my business.
                    </>
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <div className="bg-gradient6  flex flex-col items-center justify-end mt-[39px] p-[19px] rounded-lg w-full">
            <div className="flex flex-col items-center justify-start max-w-[1200px] mt-[3px] mx-auto md:px-5 w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-col md:ml-[0] ml-[410px] relative w-[30%]">
                  <Text
                    className="mx-auto md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.64px]"
                    size="txtManropeSemiBold32"
                  >
                    Our Impact in Numbers
                  </Text>
                  <Img
                    className="h-[13px] mt-[-0.08px] mx-auto z-[1]"
                    src="images/img_signal_gray_800_03.svg"
                    alt="signal"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[50px] mt-6 w-[86%] md:w-full">
                  <Text
                    className="md:mt-0 mt-0.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtManropeMedium22"
                  >
                    Merchant Partnerships
                  </Text>
                  <Img
                    className="h-[30px] ml-3 md:ml-[0] w-[30px]"
                    src="images/img_questions1.svg"
                    alt="dealdonepartn"
                  />
                  <Text
                    className="md:ml-[0] ml-[134px] md:mt-0 mt-0.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtManropeMedium22"
                  >
                    Lending Activity
                  </Text>
                  <Img
                    className="h-[30px] ml-3 md:ml-[0] w-[30px]"
                    src="images/img_questions1.svg"
                    alt="borrowsvgrepoco"
                  />
                  <Text
                    className="mb-0.5 ml-52 md:ml-[0] text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtManropeMedium22"
                  >
                    Growth Metrics
                  </Text>
                  <Img
                    className="h-[30px] ml-3 md:ml-[0] w-[30px]"
                    src="images/img_growsvgrepocom_gray_900_05.svg"
                    alt="growsvgrepocom"
                  />
                </div>
                <div className="flex sm:flex-col flex-row font-quicksand sm:gap-10 items-start justify-between mt-4 w-full">
                  <Text
                    className="sm:mt-0 mt-[5px] text-gray-800_04 text-xl"
                    size="txtQuicksandRegular20Gray80004"
                  >
                    <span className="text-gray-800_04 font-quicksand text-left font-normal">
                      Over{" "}
                    </span>
                    <span className="text-green-800 font-quicksand text-left font-normal">
                      100
                    </span>
                    <span className="text-gray-800_04 font-quicksand text-left font-normal">
                      <>
                        {" "}
                        outlets, including Naivas <br />
                        Supermarket, Goodlife Pharmacy, <br />
                        and Citi Walk, have partnered with us
                      </>
                    </span>
                  </Text>
                  <Text
                    className="sm:mt-0 mt-[5px] text-gray-800_04 text-xl"
                    size="txtQuicksandRegular20Gray80004"
                  >
                    <span className="text-gray-800_04 font-quicksand text-left font-normal">
                      <>
                        We have facilitated loans worth over <br />
                      </>
                    </span>
                    <span className="text-gray-800_04 font-quicksand text-left font-bold">
                      $1000
                    </span>
                    <span className="text-gray-800_04 font-quicksand text-left font-normal">
                      <>
                        {" "}
                        to support micro-merchants <br />
                        in their business growth.
                      </>
                    </span>
                  </Text>
                  <Text
                    className="mb-[5px] text-gray-800_04 text-xl"
                    size="txtQuicksandRegular20Gray80004"
                  >
                    <span className="text-gray-800_04 font-quicksand text-left font-normal">
                      Our platform has experienced{" "}
                    </span>
                    <span className="text-gray-800_04 font-quicksand text-left font-bold">
                      50%
                    </span>
                    <span className="text-gray-800_04 font-quicksand text-left font-normal">
                      <>
                        {" "}
                        <br />
                        month-on-month growth, empowering
                        <br /> more merchants to thrive in the market.
                      </>
                    </span>
                  </Text>
                </div>
                <Button className="bg-gradient6  border border-black-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[280px] md:ml-[0] ml-[444px] mt-[66px] py-[17px] rounded-lg text-[22px] text-black-900 text-center sm:text-lg md:text-xl">
                  Become a merchant{" "}
                </Button>
              </div>
            </div>
          </div>
          <Footer className="bg-white-A700 border-green-800 border-solid border-t flex items-center justify-center mt-[34px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default MerchantshifiPage;
