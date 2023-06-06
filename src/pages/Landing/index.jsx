import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const LandingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-white-A700 border-b border-green-800 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="bg-gradient4  flex flex-col items-end justify-end p-[43px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-start justify-end mr-2.5 mt-[72px] w-[94%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[37px] w-[47%] md:w-full">
                <Text
                  className="md:text-5xl text-[80px] text-black-900 tracking-[3.20px]"
                  size="txtManropeExtraBold80"
                >
                  <>
                    Fanikisha na
                    <br />
                    ShopOkoa
                  </>
                </Text>
                <Text
                  className="md:ml-[0] ml-[3px] mt-5 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[0.48px]"
                  size="txtQuicksandSemiBold24"
                >
                  <>
                    Building Trust without borders for <br />
                    credit driven trade across Africa.
                  </>
                </Text>
                <Button className="bg-gradient4  border border-black-900 border-solid cursor-pointer font-manrope font-semibold leading-[normal] min-w-[260px] md:ml-[0] ml-[34px] mt-[139px] py-[17px] rounded-[12px] text-[22px] text-black-900 text-center sm:text-lg md:text-xl">
                  Download App
                </Button>
              </div>
              <div className="md:h-[481px] h-[482px] md:mt-0 mt-[57px] relative w-[42%] md:w-full">
                <div className="md:h-[481px] h-[482px] m-auto w-full">
                  <div className="flex flex-col gap-3.5 h-full items-center justify-start m-auto w-full">
                    <div className="md:h-[420px] h-[421px] relative w-full">
                      <Img
                        className="absolute h-[420px] inset-[0] justify-center m-auto"
                        src="images/img_backgroundcomplete.svg"
                        alt="backgroundcompl"
                      />
                      <Img
                        className="absolute bottom-[0] h-px inset-x-[0] mx-auto"
                        src="images/img_floor.svg"
                        alt="floor"
                      />
                    </div>
                    <Img
                      className="h-[47px]"
                      src="images/img_shadow.svg"
                      alt="shadow"
                    />
                  </div>
                  <Img
                    className="absolute h-[440px] inset-[0] justify-center m-auto object-cover w-[51%]"
                    src="images/img_device.png"
                    alt="device"
                  />
                </div>
                <div className="absolute bottom-[2%] flex flex-row inset-x-[0] items-start justify-between mx-auto w-[96%]">
                  <Img
                    className="h-60 mt-[177px]"
                    src="images/img_plant.svg"
                    alt="plant"
                  />
                  <Img
                    className="h-[426px]"
                    src="images/img_character.svg"
                    alt="character"
                  />
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[367px] mt-[57px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
            size="txtManropeSemiBold36"
          >
            <span className="text-green-800 font-manrope text-left font-semibold">
              Shop now
            </span>
            <span className="text-black-900 font-manrope text-left font-semibold">
              {" "}
            </span>
            <a
              href="javascript:"
              className="text-black-900 font-manrope text-left font-semibold underline"
            >
              pay later
            </a>
            <span className="text-black-900 font-manrope text-left font-semibold">
              {" "}
              with ShopOkoa
            </span>
          </Text>
          <List
            className="sm:flex-col flex-row gap-[34px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[909px] mt-[25px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-yellow-200 flex flex-1 flex-col items-center justify-end p-[19px] w-full">
              <Text
                className="mt-[27px] text-gray-900_01 text-lg"
                size="txtManropeSemiBold18"
              >
                Shop Now, Pay Later
              </Text>
              <Img
                className="h-[60px] mt-8 w-[60px]"
                src="images/img_grid.svg"
                alt="grid"
              />
              <Text
                className="mb-[15px] mt-[62px] text-base text-black-900"
                size="txtQuicksandRegular16"
              >
                <>
                  Purchase now, pay later in <br />
                  flexible installments based on <br />
                  your financial situation.
                </>
              </Text>
            </div>
            <div className="bg-yellow-200 flex flex-1 flex-col items-start justify-center p-[7px] w-full">
              <Text
                className="md:ml-[0] ml-[21px] mt-[38px] text-gray-900_01 text-lg"
                size="txtManropeSemiBold18"
              >
                Flexible Repayment Options
              </Text>
              <Img
                className="h-20 md:ml-[0] ml-[100px] mt-[22px] w-20"
                src="images/img_paybycreditc.svg"
                alt="paybycreditc"
              />
              <Text
                className="mb-4 md:ml-[0] ml-[17px] mt-[42px] text-base text-black-900"
                size="txtQuicksandRegular16"
              >
                <>
                  Flexible repayment options <br />
                  tailored to your income patterns <br />
                  for a seamless and personalized <br />
                  payment experience.
                </>
              </Text>
            </div>
            <div className="bg-yellow-200 flex flex-1 flex-col items-center justify-end p-[19px] w-full">
              <Text
                className="mt-[26px] text-gray-900_01 text-lg"
                size="txtManropeSemiBold18"
              >
                Convenient Mobile App
              </Text>
              <Img
                className="h-[70px] mt-[27px] w-[70px]"
                src="images/img_app1svgrepocom.svg"
                alt="app1svgrepocom"
              />
              <Text
                className="mb-3.5 mt-[57px] text-base text-black-900"
                size="txtQuicksandRegular16"
              >
                <>
                  Access ShopOkoa conveniently <br />
                  through our intuitive Android <br />
                  mobile app.
                </>
              </Text>
            </div>
          </List>
          <Text
            className="md:ml-[0] ml-[479px] mt-[88px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
            size="txtManropeSemiBold28"
          >
            Why choose ShopOkoa?
          </Text>
          <div className="flex md:flex-col flex-row gap-[38px] items-center justify-start md:ml-[0] ml-[39px] mt-[60px] md:px-5 w-[90%] md:w-full">
            <Img
              className="h-[314px] sm:h-auto object-cover rounded-lg w-[43%] md:w-full"
              src="images/img_imgcontainer.png"
              alt="imgcontainer"
            />
            <div className="flex flex-col gap-10 items-start justify-start">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 w-full"
                size="txtManropeSemiBold50"
              >
                Your shopping experience just got an upgrade
              </Text>
              <Text
                className="text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                <>
                  Imagine a world where you walk into a shop, its the last week
                  <br />
                  of the month and you’re running on empty. You whip out your{" "}
                  <br />
                  phone and a few moments later, you’re walking out with those
                  <br />
                  sneakers you’ve been eyeing for all month. The best part is
                  you
                  <br />
                  didn’t have to pay for it upfront. How cool is that?
                </>
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[464px] mt-[95px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
            size="txtManropeSemiBold28"
          >
            Take a peek inside our DNA
          </Text>
          <div className="gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between max-w-[1176px] mt-[45px] mx-auto md:px-5 w-full">
            <Img
              className="flex-1 h-60 md:h-auto object-cover w-full"
              src="images/img_rectangle72.png"
              alt="rectangleSeventyTwo"
            />
            <Img
              className="flex-1 h-60 md:h-auto object-cover w-full"
              src="images/img_rectangle73.png"
              alt="rectangleSeventyThree"
            />
            <Img
              className="flex-1 h-60 md:h-auto object-cover w-full"
              src="images/img_rectangle74.png"
              alt="rectangleSeventyFour"
            />
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start max-w-[1049px] mt-[19px] mx-auto md:px-5 w-full">
            <Text
              className="mb-0.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
              size="txtManropeMedium22"
            >
              Seamless Transactions
            </Text>
            <Text
              className="sm:ml-[0] ml-[179px] sm:mt-0 mt-0.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
              size="txtManropeMedium22"
            >
              Flexible Financing
            </Text>
            <Text
              className="sm:ml-[0] ml-[221px] sm:mt-0 mt-0.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
              size="txtManropeMedium22"
            >
              Cover Cash Flow Gaps
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-quicksand sm:gap-10 items-center justify-between max-w-[1200px] mt-[15px] mx-auto md:px-5 w-full">
            <Text
              className="text-black-900 text-xl"
              size="txtQuicksandRegular20"
            >
              <>
                Enjoy convenient payment options and <br />
                manage transactions effortlessly, <br />
                making it easier to receive payments <br />
                from your customers.
              </>
            </Text>
            <Text
              className="text-black-900 text-xl"
              size="txtQuicksandRegular20"
            >
              <>
                Access high-value loans without building <br />
                your balance sheet, ensuring Micro-
                <br />
                Merchants on our platform can access <br />
                financing anytime.
              </>
            </Text>
            <Text
              className="text-black-900 text-xl"
              size="txtQuicksandRegular20"
            >
              <>
                Access unsecured credit between $100 <br />
                and $4,000 to cover short-term cash <br />
                flow shortfalls, ensuring smooth <br />
                operations for your business.
              </>
            </Text>
          </div>
          <Img
            className="md:h-auto h-px md:ml-[0] ml-[928px] mt-[35px] object-cover w-px"
            src="images/img_manshopping1.png"
            alt="manshoppingOne"
          />
          <div className="font-quicksand sm:h-[422px] md:h-[459px] h-[957px] mt-8 md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
              <div className="md:h-[390px] h-[679px] relative w-full">
                <div className="absolute bg-green-500_01 bottom-[9%] md:h-[390px] h-[524px] inset-x-[0] mx-auto p-[65px] md:px-10 sm:px-5 rounded-bl-[12px] rounded-br-[64px] rounded-tr-[12px] w-[93%] md:w-full">
                  <Img
                    className="h-[100px] ml-[206px] mt-[29px]"
                    src="images/img_circles.svg"
                    alt="circles"
                  />
                  <div className="absolute flex inset-y-[0] my-auto right-[11%] w-[67%] md:w-full">
                    <div className="h-[390px] my-auto w-[76%] sm:w-full">
                      <div className="absolute flex flex-col md:gap-10 gap-[74px] inset-x-[0] justify-start mx-auto top-[21%] w-full">
                        <div className="bg-white-A700_99 flex flex-row gap-[17px] items-center justify-end md:ml-[0] ml-[369px] p-2.5 rounded-[20px] w-[37%] md:w-full">
                          <Text
                            className="text-base text-gray-900_03"
                            size="txtQuicksandMedium16"
                          >
                            Lipa na sms
                          </Text>
                          <Img
                            className="h-[25px] mr-1.5 w-[25px]"
                            src="images/img_sms.svg"
                            alt="sms"
                          />
                        </div>
                        <div className="bg-white-A700_99 flex flex-row gap-2 items-center justify-start mr-[364px] p-2.5 rounded-[20px] w-[38%] md:w-full">
                          <Img
                            className="h-[25px] w-[25px]"
                            src="images/img_growsvgrepocom.svg"
                            alt="growsvgrepocom"
                          />
                          <Text
                            className="text-base text-gray-900_03"
                            size="txtQuicksandMedium16"
                          >
                            Grow your loan limit
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[390px] inset-[0] justify-center m-auto object-cover w-[35%]"
                        src="images/img_image8.png"
                        alt="imageEight"
                      />
                    </div>
                    <Button
                      className="bg-white-A700_99 cursor-pointer flex items-center justify-center mb-[73px] min-w-[239px] ml-[-53px] mt-auto pl-2.5 pr-[15px] py-3 rounded-[20px] z-[1]"
                      rightIcon={
                        <div className="h-5 mb-px ml-[undefinedpx] w-5 bg-green-800 bottom-[0] left-[1%] z-[1]">
                          <Img
                            className="h-5 ml-[undefinedpx] z-[1]"
                            src="images/img_qrcode.svg"
                            alt="qrcode"
                          />
                        </div>
                      }
                    >
                      <div className="font-semibold leading-[normal] text-gray-900_03 text-left text-sm z-[1]">
                        Scan you way to paying fast
                      </div>
                    </Button>
                    <div className="h-[135px] mb-24 ml-[undefinedpx] mr-[243px] mt-auto w-[29%] z-[1]"></div>
                  </div>
                </div>
                <div className="absolute bg-white-A700_56 bottom-[0] h-56 left-[1%] rounded-[50%] w-56"></div>
                <div className="absolute bg-white-A700_56 h-[131px] right-[0] rounded-[65px] top-[4%] w-[131px]"></div>
                <div className="absolute bg-white-A700_56 h-[131px] left-[0] rounded-[65px] top-[0] w-[131px]"></div>
              </div>
            </div>
            <div className="absolute bg-lime-A100 flex flex-col inset-x-[0] items-end justify-end mx-auto p-[26px] sm:px-5 top-[0] w-full">
              <div className="flex flex-col justify-start mr-[221px] mt-[31px] w-[53%] md:w-full">
                <div className="flex md:flex-col flex-row font-manrope md:gap-[41px] items-center justify-between w-full">
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-blue_gray-900_02 tracking-[1.12px]"
                    size="txtManropeSemiBold56"
                  >
                    Secure and Reliable
                  </Text>
                  <Img
                    className="h-[60px] w-[60px]"
                    src="images/img_checkcirclesvgrepocom.svg"
                    alt="checkcirclesvgr"
                  />
                </div>
                <Img
                  className="h-[60px] md:ml-[0] ml-[243px] mt-[23px] w-[60px]"
                  src="images/img_solidlocksvgrepocom.svg"
                  alt="solidlocksvgrep"
                />
                <Text
                  className="md:ml-[0] ml-[67px] mt-2 text-black-900 text-xl"
                  size="txtQuicksandRegular20Black900"
                >
                  <>
                    Enjoy a secure and reliable payment experience
                    <br />
                    with state-of-the-art encryption technology and <br />
                    robust data protection measures.
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-manrope md:gap-10 items-start justify-between max-w-[994px] mt-6 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[13px] justify-start md:mt-0 mt-[104px] w-[34%] md:w-full">
              <Img
                className="h-[50px] md:ml-[0] ml-[125px] w-[50px]"
                src="images/img_trustwalletsvgrepocom.svg"
                alt="trustwalletsvgr"
              />
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900_03 sm:text-xl"
                size="txtManropeRegular24"
              >
                <>
                  Building trust without borders
                  <br />
                  in credit based trade for small <br />
                  and medium sized businesses
                </>
              </Text>
            </div>
            <div className="md:h-[349px] h-[426px] relative w-[57%] md:w-full">
              <Img
                className="absolute h-[349px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                src="images/img_image9.png"
                alt="imageNine"
              />
              <Img
                className="absolute bottom-[0] h-[250px] object-cover right-[6%] w-[24%]"
                src="images/img_image4.png"
                alt="imageFour"
              />
            </div>
          </div>
          <div className="bg-gradient4  flex flex-col font-manrope items-center justify-start mt-16 p-3.5 w-full">
            <div className="flex flex-col gap-[31px] justify-start max-w-[1181px] mb-8 mx-auto md:px-5 w-full">
              <Text
                className="md:ml-[0] ml-[450px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtManropeSemiBold28"
              >
                Join ShopOkoa Community
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="bg-green-500_99 flex md:flex-1 flex-col justify-end p-[17px] rounded-[12px] w-[46%] md:w-full">
                  <Img
                    className="h-[120px] md:ml-[0] ml-[181px] mr-[205px] mt-9 w-[120px]"
                    src="images/img_shoppingbagsvgrepocom.svg"
                    alt="shoppingbagsvgr"
                  />
                  <Text
                    className="md:ml-[0] ml-[38px] mr-[47px] mt-[43px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtQuicksandRegular22"
                  >
                    <>
                      Discover a wide range of products from <br />
                      trusted merchants and enjoy a seamless <br />
                      shopping experience.
                    </>
                  </Text>
                  <Input
                    name="groupFortyTwo"
                    placeholder="Explore Customers"
                    className="font-manrope font-medium leading-[normal] md:text-xl p-0 placeholder:text-gray-900_04 sm:px-5 sm:text-lg text-[22px] text-gray-900_04 text-left w-full"
                    wrapClassName="bg-green-A400 border border-black-900 border-solid mt-[30px] mx-auto pb-3.5 pl-[25px] pr-[35px] pt-[19px] rounded-[12px] w-[52%]"
                  ></Input>
                </div>
                <div className="bg-lime-A100_99 flex md:flex-1 flex-col justify-end p-[17px] rounded-[12px] w-[46%] md:w-full">
                  <Img
                    className="h-[120px] md:ml-[0] ml-[191px] mr-[195px] mt-9 w-[120px]"
                    src="images/img_storesvgrepocom.svg"
                    alt="storesvgrepocom"
                  />
                  <Text
                    className="ml-11 md:ml-[0] mr-[34px] mt-[43px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtQuicksandRegular22"
                  >
                    <>
                      Expand your business reach and increase <br />
                      sales by joining our network of partnered <br />
                      outlets.
                    </>
                  </Text>
                  <Button className="bg-yellow-400 border border-black-900 border-solid cursor-pointer font-manrope font-medium leading-[normal] min-w-[260px] md:ml-[0] ml-[137px] mr-[109px] mt-[30px] py-[17px] rounded-[12px] text-[22px] text-center text-gray-900_04 sm:text-lg md:text-xl">
                    Visit Merchants
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[500px] mt-[41px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
            size="txtManropeSemiBold28"
          >
            Be part of our success story...
          </Text>
          <div className="flex md:flex-col flex-row font-manrope gap-2.5 items-center justify-start max-w-[1118px] mt-[31px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[14%] md:w-full">
              <Img
                className="h-[151px] md:h-auto object-cover w-[151px]"
                src="images/img_shopokoamerchant2.png"
                alt="shopokoamerchan"
              />
              <Img
                className="h-[183px] md:h-auto object-cover w-full"
                src="images/img_shopokoamerchant2_183x150.png"
                alt="shopokoamerchan_One"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[9px] justify-start w-[86%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Img
                  className="h-[270px] md:h-auto object-cover"
                  src="images/img_shopokoamerchant1.png"
                  alt="shopokoamerchan_Two"
                />
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900_03 sm:text-xl"
                  size="txtManropeRegular24"
                >
                  <>
                    Embark on a remarkable journey with us as <br />a customer
                    or merchant. Explore partnered <br />
                    outlets, including supermarkets, pharmacies, <br />
                    and more, for all your shopping needs. Expand <br />
                    your business and reach a wider audience as <br />a merchant
                    by joining our platform.
                  </>
                </Text>
              </div>
              <Button className="bg-gradient4  border border-black-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[260px] md:ml-[0] ml-[539px] py-[17px] rounded-[12px] text-[22px] text-black-900 text-center sm:text-lg md:text-xl">
                Join Now
              </Button>
            </div>
          </div>
          <Footer className="bg-white-A700 border-green-800 border-solid border-t flex font-manrope items-center justify-center mt-16 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
