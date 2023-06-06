import React from "react";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ContactusPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 border-b border-green-800 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-gradient4  flex sm:flex-col flex-row gap-[21px] items-center justify-end p-[66px] md:px-10 sm:px-5 w-full">
          <Text
            className="md:text-5xl text-7xl text-blue_gray-900_01 tracking-[2.88px]"
            size="txtManropeExtraBold72"
          >
            Get in touch
          </Text>
          <Img
            className="h-[291px] mb-5 sm:mt-0 mt-[23px]"
            src="images/img_questions1.svg"
            alt="undrawcontactus"
          />
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-end outline outline-gray-500_01 p-[27px] sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1059px] mt-[61px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[51%] md:w-full">
                <div className="md:h-[174px] h-[252px] relative w-[89%] sm:w-full">
                  <Text
                    className="absolute inset-x-[0] mx-auto md:text-5xl text-[64px] text-black-900 top-[0] tracking-[2.56px]"
                    size="txtManropeExtraBold64"
                  >
                    <>
                      We’re here to <br />
                      listen.{" "}
                    </>
                  </Text>
                  <Text
                    className="absolute bottom-[0] inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-black-900_7f"
                    size="txtQuicksandMedium32"
                  >
                    <>
                      Send us your feedback, queries
                      <br />
                      and suggestions
                    </>
                  </Text>
                </div>
                <Img
                  className="h-[376px] mt-[25px]"
                  src="images/img_questions1.svg"
                  alt="feedbackOne"
                />
                <div className="flex flex-row gap-3 items-start justify-end mt-14 w-[37%] md:w-full">
                  <Img
                    className="h-[54px]"
                    src="images/img_location.svg"
                    alt="location"
                  />
                  <Text
                    className="sm:text-[29px] md:text-[31px] text-[33px] text-black-900 tracking-[0.66px]"
                    size="txtManropeExtraBold33"
                  >
                    Location
                  </Text>
                </div>
                <div className="flex flex-col font-quicksand items-start justify-start mt-4">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900_b2"
                    size="txtQuicksandMedium26"
                  >
                    Chandaria Business & Innovation Center
                  </Text>
                  <Text
                    className="mt-[18px] md:text-2xl sm:text-[22px] text-[26px] text-black-900_b2"
                    size="txtQuicksandMedium26"
                  >
                    Kenyatta University
                  </Text>
                  <Text
                    className="mt-[15px] md:text-2xl sm:text-[22px] text-[26px] text-black-900_b2"
                    size="txtQuicksandMedium26"
                  >
                    Nairobi, Kenya
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-center justify-start md:mt-0 mt-[70px] w-[43%] md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_cc tracking-[0.64px]"
                  size="txtManropeExtraBold32"
                >
                  Send us a message
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    className="h-[57px]"
                    src="images/img_group37_green_800.svg"
                    alt="groupThirtySeven"
                  />
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[50px] items-start justify-start mt-[9px] p-[7px] w-full"
                    style={{ backgroundImage: "url('images/img_group57.svg')" }}
                  >
                    <Img
                      className="h-[18px] mb-[11px] mt-1"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col font-inter h-[50px] items-start justify-end mt-2 p-[7px] w-full"
                    style={{ backgroundImage: "url('images/img_group56.svg')" }}
                  >
                    <Text
                      className="ml-0.5 md:ml-[0] mt-2 text-[22px] text-black-900_7f sm:text-lg md:text-xl"
                      size="txtInterBold22"
                    >
                      Phone
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-40 items-start justify-start mt-[9px] p-[13px] w-full"
                    style={{ backgroundImage: "url('images/img_group57.svg')" }}
                  >
                    <Img
                      className="h-[21px] mb-[110px] mt-0.5"
                      src="images/img_signal_black_900.svg"
                      alt="signal_One"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col font-inter h-[71px] items-center justify-end ml-56 md:ml-[0] mt-[15px] p-[22px] sm:px-5"
                    style={{ backgroundImage: "url('images/img_group13.svg')" }}
                  >
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterBold22WhiteA700"
                    >
                      Send message
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[74px] mt-[375px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[0.72px]"
                    size="txtManropeBold36"
                  >
                    Reach us
                  </Text>
                  <div className="flex sm:flex-col flex-row font-quicksand gap-[30px] items-start justify-start mt-[19px] w-[98%] md:w-full">
                    <Img
                      className="h-[30px] sm:mt-0 mt-0.5"
                      src="images/img_mail.svg"
                      alt="mail"
                    />
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-black-900_b2"
                      size="txtQuicksandMedium26"
                    >
                      dukatechsolutions@gmail.com
                    </Text>
                  </div>
                  <div className="flex flex-row font-quicksand gap-[30px] items-end justify-start mt-[17px] w-[58%] md:w-full">
                    <Img
                      className="h-10 w-[41px]"
                      src="images/img_whatsapp.svg"
                      alt="whatsapp"
                    />
                    <Text
                      className="mt-1.5 md:text-2xl sm:text-[22px] text-[26px] text-black-900_b2"
                      size="txtQuicksandMedium26"
                    >
                      +254743800904
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[324px] mt-4 text-sm text-white-A700"
                    size="txtManropeBold14"
                  >
                    Send Message
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-white-A700 border-green-800 border-solid border-t flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactusPage;
