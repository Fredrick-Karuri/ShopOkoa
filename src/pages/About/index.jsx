import React from "react";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboutPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-white-A700 border-b border-green-800 border-solid flex sm:flex-col flex-row font-manrope sm:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="font-manrope h-[676px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-7 sm:px-5 right-[0] w-[37%]"
              style={{ backgroundImage: "url('images/img_group22.png')" }}
            >
              <div className="flex flex-col md:gap-10 gap-[278px] items-center justify-start mb-[62px] mt-11 w-[97%] md:w-full">
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-blue_gray-900_02 tracking-[0.84px]"
                  size="txtManropeMedium42"
                >
                  <span className="text-blue_gray-900_02 font-manrope text-left font-bold">
                    <>
                      Empowering you <br />
                      to{" "}
                    </>
                  </span>
                  <span className="text-blue_gray-900_02 font-manrope text-left font-bold">
                    shop smart{" "}
                  </span>
                  <span className="text-blue_gray-900_02 font-manrope text-left font-bold">
                    <>
                      and <br />
                    </>
                  </span>
                  <span className="text-green-800_01 font-manrope text-left font-bold">
                    pay later
                  </span>
                  <span className="text-blue_gray-900_02 font-manrope text-left font-bold">
                    {" "}
                    with ease
                  </span>
                </Text>
                <div className="bg-gradient10  border border-black-900 border-solid flex flex-row gap-7 items-end justify-center p-[9px] rounded-[12px] w-[66%] md:w-full">
                  <Img
                    className="h-10 ml-[46px] mt-[7px] w-10"
                    src="images/img_readsvgrepocom.svg"
                    alt="readsvgrepocom"
                  />
                  <Text
                    className="mr-7 mt-3.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtManropeSemiBold22"
                  >
                    Our Story
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[676px] inset-y-[0] left-[0] my-auto object-cover w-[64%]"
              src="images/img_image2.png"
              alt="imageTwo"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[272px] mt-9 text-4xl sm:text-[32px] md:text-[34px] text-gray-600_01"
            size="txtQuicksandMedium36"
          >
            <>
              ShopOkoa was launched by Dukatech with <br />
              an aim of ending Digital Poverty by helping <br />
              Shopkeepers digitize their credit service
            </>
          </Text>
          <div className="flex sm:flex-col flex-row font-quicksand md:gap-10 items-center justify-between max-w-[1034px] mt-[81px] mx-auto md:px-5 w-full">
            <Img
              className="h-[238px]"
              src="images/img_breakingbarriersbro.svg"
              alt="breakingbarrier"
            />
            <Text
              className="text-black-900 text-xl"
              size="txtQuicksandRegular20"
            >
              <>
                At ShopOkoa, we aim to ensure universal access to the <br />
                things that matter most. Our app offers a convenient <br />
                and flexible shopping experience for all, regardless of <br />
                financial circumstances.
              </>
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-quicksand sm:gap-10 items-center justify-between max-w-[924px] mt-9 mx-auto md:px-5 w-full">
            <Text
              className="text-black-900 text-xl"
              size="txtQuicksandRegular20"
            >
              <>
                We understand the financial obstacles customers <br />
                face in buying essential goods. Our mission is to <br />
                deliver a personalized payment experience that <br />
                seamlessly caters to each individual&#39;s unique <br />
                financial situation.
              </>
            </Text>
            <Img
              className="h-[241px]"
              src="images/img_financeleadersbro.svg"
              alt="financeleadersb"
            />
          </div>
          <div className="flex sm:flex-col flex-row font-quicksand sm:gap-10 items-start justify-between max-w-[1008px] mt-9 mx-auto md:px-5 w-full">
            <Img
              className="h-[251px]"
              src="images/img_typewriterbro.svg"
              alt="typewriterbro"
            />
            <Text
              className="sm:mt-0 mt-[45px] text-black-900 text-xl"
              size="txtQuicksandRegular20"
            >
              <>
                ShopOkoa enables you to shop for goods up to KES <br />
                100,000 and pay in flexible installments that match <br />
                your income patterns. Enjoy a stress-free and <br />
                enjoyable shopping experience without the burden <br />
                of immediate payment.
              </>
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[562px] mt-9 sm:text-2xl md:text-[26px] text-[28px] text-black-900"
            size="txtManropeSemiBold28"
          >
            Meet Our Team
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[72px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1190px] mt-[35px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-gradient11  border border-black-900 border-solid flex flex-1 flex-col items-center justify-center p-1.5 rounded-[12px] w-full">
              <Img
                className="h-[171px] md:h-auto mt-[53px] object-cover rounded-[30px] w-[44%] sm:w-full"
                src="images/img_rectangle5.png"
                alt="rectangleFive"
              />
              <Text
                className="mt-4 text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22Bluegray90002"
              >
                John Doe
              </Text>
              <Text
                className="text-[22px] text-gray-700 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22Gray700"
              >
                Co-Founder & CEO
              </Text>
              <Text
                className="mb-[17px] mt-[3px] text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                <>
                  {" "}
                  With over 5 years of experience in <br />
                  finance and technology, John leads <br />
                  our team with a passion for making <br />
                  financial services accessible to all.
                </>
              </Text>
            </div>
            <div className="bg-gradient11  border border-black-900 border-solid flex flex-1 flex-col items-center justify-center p-2 rounded-[12px] w-full">
              <Img
                className="h-[171px] md:h-auto mt-[51px] object-cover rounded-[30px] w-[45%] sm:w-full"
                src="images/img_rectangle7.png"
                alt="rectangleSeven"
              />
              <Text
                className="mt-[18px] text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22Bluegray90002"
              >
                Jane{" "}
              </Text>
              <Text
                className="text-[22px] text-gray-700 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22Gray700"
              >
                Co-Founder & CTO
              </Text>
              <Text
                className="mb-[15px] text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                <>
                  Jane&#39;s technical expertise and <br />
                  commitment to innovation drive the <br />
                  development of our cutting-edge <br />
                  payment platform.
                </>
              </Text>
            </div>
            <div className="bg-gradient11  border border-black-900 border-solid flex flex-1 flex-col items-center justify-end p-[23px] sm:px-5 rounded-[12px] w-full">
              <Img
                className="h-[171px] md:h-auto mt-9 object-cover rounded-[30px] w-[49%] sm:w-full"
                src="images/img_rectangle6_171x150.png"
                alt="rectangleSix"
              />
              <Text
                className="mt-[15px] text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22Bluegray90002"
              >
                Alex
              </Text>
              <Text
                className="mt-[3px] text-[22px] text-gray-700 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22Gray700"
              >
                Head of Operations
              </Text>
              <Text
                className="text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                <>
                  Alex oversees the day-to-day <br />
                  operations, ensuring smooth <br />
                  processes and exceptional <br />
                  customer experiences.
                </>
              </Text>
            </div>
          </List>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1173px] mt-[59px] mx-auto md:px-5 w-full">
            <Img
              className="h-[371px] md:h-auto object-cover"
              src="images/img_rectangle33.png"
              alt="rectangleThirtyThree"
            />
            <div className="flex flex-col justify-start">
              <Text
                className="md:ml-[0] ml-[149px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtManropeSemiBold28"
              >
                Our Values and Mission
              </Text>
              <Text
                className="md:ml-[0] ml-[27px] mt-[5px] text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                At ShopOkoa, we uphold the following core values
              </Text>
              <div className="flex flex-col font-quicksand gap-4 items-start justify-start mt-3 w-full">
                <Text
                  className="text-black-900 text-xl"
                  size="txtQuicksandRegular20"
                >
                  <>
                    Transparency: We are committed to being open and honest,
                    <br /> providing clear information and terms to empower our
                    customers.
                  </>
                </Text>
                <Text
                  className="text-black-900 text-xl"
                  size="txtQuicksandRegular20"
                >
                  <>
                    Accessibility: We believe that everyone deserves access to
                    the <br />
                    goods they need, regardless of their financial situation.
                  </>
                </Text>
                <Text
                  className="text-black-900 text-xl"
                  size="txtQuicksandRegular20"
                >
                  <>
                    Responsibility: We take responsibility for our actions and
                    strive
                    <br />
                    to offer fair and ethical services to our customers.
                  </>
                </Text>
                <Text
                  className="text-black-900 text-xl"
                  size="txtQuicksandRegular20"
                >
                  <>
                    Innovation: We continuously innovate and improve our
                    platform
                    <br />
                    to deliver the best user experience and stay ahead of
                    evolving <br />
                    needs
                  </>
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[306px] mt-14 text-black-900 text-xl"
            size="txtQuicksandRegular20"
          >
            <>
              Our mission is to empower individuals to shop responsibly and
              affordably,
              <br />
              enabling them to fulfill their needs without financial strain. By
              offering <br />
              flexible payment options and personalized experiences, we aim to
              make <br />
              shopping convenient, stress-free, and enjoyable for our customers.
            </>
          </Text>
          <Text
            className="md:ml-[0] ml-[473px] mt-[39px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
            size="txtManropeSemiBold28"
          >
            What Our Customers Say
          </Text>
          <div className="flex md:flex-col flex-row gap-[51px] items-center justify-start max-w-[973px] mt-[27px] mx-auto md:px-5 w-full">
            <div className="bg-orange-50_01 flex flex-col items-start justify-center p-3">
              <Text
                className="md:ml-[0] ml-[5px] mt-3 text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                <>
                  ShopOkoa has truly been a game-changer
                  <br />
                  for me. I needed to buy some essential <br />
                  appliances for my home,but I couldn&#39;t afford
                  <br />
                  to pay upfront. ShopOkoa allowed me to shop <br />
                  and pay in convenient installments, making it <br />
                  much easier for me to manage my finances. <br />I highly
                  recommend it!&quot;
                </>
              </Text>
              <Text
                className="mb-[9px] mt-[3px] text-gray-700 text-lg"
                size="txtInterRegular18"
              >
                John{" "}
              </Text>
            </div>
            <div className="bg-orange-50_01 flex flex-col items-start justify-center p-2.5">
              <Text
                className="md:ml-[0] ml-[7px] mt-3.5 text-black-900 text-xl"
                size="txtQuicksandRegular20"
              >
                <>
                  I love the flexibility and convenience that <br />
                  ShopOkoa offers. As a freelancer with irregular
                  <br />
                  income, it&#39;s often challenging to make big <br />
                  purchases. ShopOkoa’s repayment options <br />
                  matched my income patterns perfectly, and I <br />
                  was able to buy the things I needed without <br />
                  financial stress. Thank you, ShopOkoa!
                </>
              </Text>
              <Text
                className="mb-[11px] md:ml-[0] ml-[7px] mt-[3px] text-gray-700 text-lg"
                size="txtInterRegular18"
              >
                Sarah{" "}
              </Text>
            </div>
          </div>
          <div className="bg-gradient12  flex flex-col font-manrope items-start justify-end mt-[134px] p-[21px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[191px] mt-5 md:px-5 w-[65%] md:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtManropeSemiBold28"
              >
                Who we serve
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[43px] w-full">
                <Img
                  className="h-[100px] md:h-auto object-cover"
                  src="images/img_mamapesa1.png"
                  alt="mamapesaOne"
                />
                <div className="h-[70px] relative w-[31%] md:w-full">
                  <Img
                    className="h-[70px] m-auto object-cover w-full"
                    src="images/img_goodlifepharmacy1.png"
                    alt="goodlifepharmac"
                  />
                  <Img
                    className="absolute h-[70px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_goodlifepharmacy1.png"
                    alt="goodlifepharmac_One"
                  />
                </div>
                <Img
                  className="h-20 md:h-auto object-cover"
                  src="images/img_naivassupermarketlogo.png"
                  alt="naivassupermark"
                />
              </div>
              <Text
                className="bg-gradient3  border border-black-900 border-solid mt-[26px] sm:px-5 px-[35px] py-4 rounded-lg text-[22px] text-black-900 sm:text-lg md:text-xl"
                size="txtManropeSemiBold22"
              >
                I am interested!
              </Text>
            </div>
          </div>
          <Footer className="bg-white-A700 border-green-800 border-solid border-t flex font-manrope items-center justify-center mt-[37px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
