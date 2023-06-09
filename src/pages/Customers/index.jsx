import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import { useMediaQuery } from 'react-responsive';
import Footer from "components/Footer";
import CustomersCarousel from "components/CustomersCarousel";
import CardsContainer from "components/CardsContainerComponent";

const CustomersPage = () => {
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="bg-white-A700 border-b border-green-800 border-solid flex sm:flex-col flex-row font-manrope sm:gap-5 items-center justify-center md:px-5 w-full">
            <Img
              className="common-pointer sm:flex-1 h-11 md:h-auto mb-[7px] ml-10 sm:ml-[0] sm:mt-0 mt-[22px] object-cover w-[13%] sm:w-full"
              src="images/img_asset14shopokoa.png"
              alt="asset14shopokoa"
              onClick={() => navigate("/landing")}
            />
            <Text
              className="common-pointer mb-[17px] sm:ml-[0] ml-[346px] sm:mt-0 mt-[31px] text-blue_gray-900_02 text-lg"
              size="txtManropeSemiBold18Bluegray90002"
              onClick={() => navigate("/about")}
            >
              About
            </Text>
            <Text
              className="mb-[17px] sm:ml-[0] ml-[41px] sm:mt-0 mt-[31px] text-blue_gray-900_02 text-lg"
              size="txtManropeSemiBold18Bluegray90002"
            >
              Customers
            </Text>
            <Text
              className="common-pointer mb-[17px] sm:ml-[0] ml-[41px] sm:mt-0 mt-[31px] text-blue_gray-900_02 text-lg"
              size="txtManropeSemiBold18Bluegray90002"
              onClick={() => navigate("/merchantshifi")}
            >
              Merchants
            </Text>
            <a className="mb-[17px] sm:ml-[0] ml-[41px] sm:mt-0 mt-[31px] text-blue_gray-900_02 text-lg">
              <Text
                className="common-pointer"
                size="txtManropeSemiBold18Bluegray90002"
                onClick={() => navigate("/faqs")}
              >
                FAQs
              </Text>
            </a>
            <Button className="bg-gradient4  border border-black-900 border-solid cursor-pointer font-semibold leading-[normal] mb-[11px] min-w-[120px] sm:mt-0 mt-[25px] py-2 rounded-[19px] text-base text-black-900 text-center">
              Get Started
            </Button>
          </header>
          <div className="bg-gradient4  flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1071px] mb-[55px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[133px]">
                <Text
                  className="md:text-5xl text-[64px] text-black-900 tracking-[2.56px]"
                  size="txtManropeBold64"
                >
                  Shop now,{" "}
                </Text>
                <Text
                  className="md:text-5xl text-[64px] text-black-900 tracking-[2.56px]"
                  size="txtManropeBold64"
                >
                  Pay later
                </Text>
                <Text
                  className="md:ml-[0] ml-[5px] mt-[29px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtQuicksandSemiBold24"
                >
                  <>
                    Building Trust without borders for credit
                    <br />
                    driven trade across Africa.
                  </>
                </Text>
                <a
                  href="javascript:"
                  className="bg-gradient4  border border-black-900 border-solid md:ml-[0] ml-[17px] mt-[133px] sm:px-5 px-[35px] py-4 rounded-[12px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                >
                  <Text size="txtManropeSemiBold22">Learn More</Text>
                </a>
              </div>
              <Img
                className="h-[500px] mb-[86px] w-[500px]"
                src="images/img_online_groceries-rafiki.svg"
                alt="onlinegroceries"
              />
            </div>
          </div>
          <Text
            className="text-center md:ml-[0] mx-auto mt-[34px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900_06"
            size="txtQuicksandRegular36"
          >
            <>
              Shop Now and Pay Later in flexible installments
              <br />
              that match your income patterns.
            </>
          </Text>
          <div className="flex flex-col font-manrope mt-[45px] md:px-5 relative w-full">
            <div className="flex flex-col items-center justify-start mx-auto p-[11px] w-full">
              <div className="flex flex-col gap-[26px] justify-start mb-9 w-[83%] md:w-full">
                <Text
                  className="md:ml-[0] text-center sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtManropeSemiBold28"
                >
                  How it works
                </Text>
                {isTabletOrMobile && <CustomersCarousel/>}
                {isDesktopOrLaptop && <CardsContainer/>}         
                  <Text
                    className="mt-[55px] sm:mt-[15px] sm:text-2xl md:text-[26px] text-center text-[28px] text-black-900"
                    size="txtManropeSemiBold28"
                  >
                    Why buy with ShopOkoa?
                  </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-between max-w-[1073px] mt-12 md:mt-6 mx-auto md:px-5 w-full">
              <div className="flex-col">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl text-center"
                size="txtManropeSemiBold22"
              >
                low interest rates
              </Text>
              <Text
                className="text-black-900 text-xl mt-[15px]"
                size="txtQuicksandRegular20"
              >
                <>
                  We offer competitively low interest rates, setting <br />
                  us apart from our competitors. Our aim is to ensure
                  <br />
                  that you are not financially strained, allowing you to
                  <br />
                  enjoy your purchases without burden. We prioritize <br />
                  your financial well-being and strive to make your <br />
                  shopping experience convenient and affordable
                </>
              </Text>
              </div>
              <Img
              className="h-80 ml-auto mr-[93px] mt-[-5px] object-cover rounded-bl-[72px] rounded-br rounded-tl rounded-tr w-[38%] md:w-full z-[1]"
              src="images/img_687087502914b5890993c.png"
              alt="687087502914bFiftyEight"
            />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-quicksand md:gap-10 items-start justify-between max-w-[1073px] mt-12 mx-auto md:px-5 w-full">
            <Img
              className="h-80 md:h-auto object-cover rounded-bl rounded-br-[72px] rounded-tl-sm rounded-tr"
              src="images/img_andretaissin5.png"
              alt="andretaissinFive"
            />
            <Text
              className="sm:mt-0 mt-[83px] text-black-900 text-xl"
              size="txtQuicksandRegular20"
            >
              <>
                We understand the importance of flexibility when
                <br />
                it comes to managing your finances. That&#39;s why <br />
                we provide you with a generous 30-day repayment
                <br />
                window. At ShopOkoa, we believe in giving you <br />
                ample time to settle your payments comfortably, <br />
                empowering you to shop with confidence. We <br />
                prioritize your convenience and aim to make the <br />
                repayment process seamless and stress-free.{" "}
              </>
            </Text>
          </div>
          <div className="bg-gradient8  flex flex-col font-manrope items-start justify-start mt-[49px] p-[30px] sm:px-5 w-full">
            <div className="flex flex-col gap-[23px] justify-start mb-1 md:ml-[0] ml-[220px] md:px-5 w-[59%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-end md:ml-[0] ml-[154px] w-[79%] md:w-full">
                <Text
                  className="text-[22px] text-center text-black-900 sm:text-lg md:text-xl font-bold"
                  size="txtManropeSemiBold22"
                >
                  Unlock a World of Shopping Convenience
                </Text>
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_info.svg"
                  alt="info"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[100px] items-center justify-between w-[70%] md:w-full">
                <Img
                  className="h-[100px]"
                  src="images/img_happyearthbro.svg"
                  alt="happyearthbro"
                />
                 <Button className="bg-gradient flex items-start justify-evenly border border-black-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[260px] py-[13px] rounded-[12px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900_01 text-center" rightIcon={
                    <Img
                    className="h-[35px] ml-[21px] my-auto"
                    src="images/img_cursor.svg"
                    alt="cursor"
                  />
                 }>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          <Footer className="bg-white-A700 border-green-800 border-solid border-t flex font-manrope items-center justify-center mt-[13px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CustomersPage;
