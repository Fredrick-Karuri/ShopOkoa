import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "components"

const CardsContainer = () => {
    return (
        <>
              <div className="flex flex-col items-center justify-start w-full">

    <div className="flex md:flex-col flex-row font-quicksand md:gap-10 items-start justify-between w-full">
    <div className="bg-gradient8  flex flex-col gap-[33px] justify-start mb-0.5 rounded-[12px] shadow-bs1 md:w-full">
        <div className="md:h-[227px] h-[252px] md:ml-[0] ml-[7px] mt-[7px] relative w-[88%]">
        <Img
            className="absolute bottom-[0] h-[220px] right-[0]"
            src="images/img_thinkingfacebro.svg"
            alt="thinkingfacebro"
        />
        <Text
            className="absolute bg-white-A700 flex h-[39px] items-center justify-center left-[0] rounded-[19px] text-black-900 text-center text-xl top-[0] w-[39px]"
            size="txtQuicksandRegular20"
        >
            1
        </Text>
        </div>
        <Text
        className="mb-[31px] md:ml-[0] ml-[15px] text-black-900 text-xl"
        size="txtQuicksandRegular20Black900"
        >
        <>
            Find a product you love but <br />
            don&#39;t have enough money <br />
            to purchase.
        </>
        </Text>
    </div>
    <Img
        className="h-10 md:mt-0 mt-[132px] w-10"
        src="images/img_arrow2svgrepocom.svg"
        alt="arrow2svgrepoco"
    />
    <div className="bg-gradient9  flex flex-col gap-[17px] items-start justify-start mb-0.5 p-2 rounded-[12px] shadow-bs md:w-full">
        <div className="md:h-[230px] h-[263px] relative w-[90%]">
        <Img
            className="absolute bottom-[0] h-[230px] inset-x-[0] mx-auto w-[230px]"
            src="images/img_questions1.svg"
            alt="newideabroTwo"
        />
        <Text
            className="absolute bg-white-A700 flex h-[39px] items-center justify-center left-[0] rounded-[19px] text-black-900 text-center text-xl top-[0] w-[39px]"
            size="txtQuicksandRegular20"
        >
            2
        </Text>
        </div>
        <Text
        className="mb-1 md:ml-[0] ml-[5px] text-black-900 text-xl"
        size="txtQuicksandRegular20Black900"
        >
        <>
            Select the flexible payment <br />
            option that allows you to <br />
            buy without needing the <br />
            full amount upfront.
        </>
        </Text>
    </div>
    <Img
        className="h-10 md:mt-0 mt-[132px] w-10"
        src="images/img_arrow2svgrepocom.svg"
        alt="arrow2svgrepoco_One"
    />
    <div className="bg-gradient8  flex flex-col gap-[29px] items-end justify-start md:mt-0 mt-0.5 p-2 rounded-[12px] shadow-bs md:w-full">
        <div className="md:h-[230px] h-[261px] mr-[29px] relative w-[89%]">
        <Img
            className="absolute bottom-[0] h-[230px] right-[0]"
            src="images/img_questions1.svg"
            alt="undrawenteruhqk"
        />
        <Text
            className="absolute bg-white-A700 flex h-[39px] items-center justify-center left-[0] rounded-[19px] text-black-900 text-center text-xl top-[0] w-[39px]"
            size="txtQuicksandRegular20"
        >
            3
        </Text>
        </div>
        <Text
        className="mb-[19px] text-black-900 text-xl"
        size="txtQuicksandRegular20Black900"
        >
        <>
            Go to a partnered shop <br />
            where ShopOkoa is <br />
            accepted.
        </>
        </Text>
    </div>
    </div>
    <div className="flex md:flex-col flex-row font-quicksand md:gap-10 items-start justify-between mt-[22px] w-full">
    <div className="bg-gradient9  flex md:flex-1 flex-col gap-8 justify-start p-2 rounded-[12px] shadow-bs md:w-full">
        <div className="md:h-[230px] h-[236px] mr-[13px] relative w-[96%]">
        <Img
            className="absolute h-[230px] inset-y-[0] my-auto right-[0] w-[230px]"
            src="images/img_questions1.svg"
            alt="onlinewisheslis"
        />
        <Text
            className="absolute bg-white-A700 flex h-[39px] items-center justify-center left-[0] rounded-[19px] text-black-900 text-center text-xl top-[0] w-[39px]"
            size="txtQuicksandRegular20"
        >
            4
        </Text>
        </div>
        <Text
        className="mb-[41px] text-black-900 text-xl ml-[15px]"
        size="txtQuicksandRegular20Black900"
        >
        <>
            Buy the desired product <br />
            using ShopOkoa as the <br />
            payment method.
        </>
        </Text>
    </div>
    <Img
        className="h-10 md:ml-[0] ml-[23px] md:mt-0 mt-[85px] w-10"
        src="images/img_arrow2svgrepocom.svg"
        alt="arrow2svgrepoco_Two"
    />
    <div className="bg-gradient8  flex md:flex-1 flex-col gap-[49px]  justify-start md:ml-[0]  p-2 rounded-[12px]  md:w-full">
        <div className="md:h-[190px] h-[221px] relative w-[91%]">
        <div className="absolute bottom-[0] h-[190px] inset-x-[0] mx-auto w-[97%]">
            <div className="absolute h-[190px] inset-y-[0] my-auto right-[14%] w-[65%]">
            <div className="absolute h-[190px] inset-[0] justify-center m-auto w-full">
                <div className="h-[190px] m-auto w-full">
                <div className="h-[190px] m-auto w-full">
                    <div className="h-[190px] m-auto w-full">
                    <div className="flex flex-row h-full items-end justify-between m-auto w-full">
                        <div className="md:h-[177px] h-[190px] relative w-[73%]">
                        <div className="absolute bg-blue_gray-800_01 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-bl-[18px] rounded-br-[18px] rounded-tl-[19px] rounded-tr-[19px] w-[98%]">
                            <div
                            className="bg-cover bg-no-repeat flex flex-col h-[186px] items-center justify-start pt-0.5 px-0.5 w-[97%] md:w-full"
                            style={{
                                backgroundImage:
                                "url('images/img_group52.svg')",
                            }}
                            >
                            <div className="flex flex-col justify-start w-[95%] md:w-full">
                                <div className="flex flex-row items-center justify-center ml-9 md:ml-[0] w-[18%] md:w-full">
                                <Img
                                    className="h-px"
                                    src="images/img_vector_white_a700_1x11.svg"
                                    alt="vector"
                                />
                                <div className="bg-white-A700 h-px ml-[3px] rounded-[50%] w-px"></div>
                                </div>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] w-[95%] md:w-full">
                                <div className="flex flex-row items-center justify-start w-[90%] md:w-full">
                                    <Img
                                    className="h-[3px]"
                                    src="images/img_vector_gray_300_01.svg"
                                    alt="vector_Two"
                                    />
                                    <div className="bg-gray-300_01 h-0.5 ml-[53px] rounded-[50%] w-0.5"></div>
                                    <div className="bg-gray-300_01 h-0.5 rounded-[50%] w-0.5"></div>
                                    <div className="bg-gray-300_01 h-0.5 rounded-[50%] w-0.5"></div>
                                </div>
                                <Img
                                    className="h-[13px] md:h-auto md:ml-[0] ml-[13px] mt-[3px] object-cover w-[59%] sm:w-full"
                                    src="images/img_asset14shopokoa.png"
                                    alt="asset14shopokoa_One"
                                />
                                <Img
                                    className="h-3.5 ml-6 md:ml-[0] mt-1.5"
                                    src="images/img_ticket.svg"
                                    alt="ticket"
                                />
                                <Line className="bg-gray-300_01 h-px mt-3.5 w-[90%]" />
                                <Img
                                    className="h-[3px] ml-8 md:ml-[0] mt-2.5"
                                    src="images/img_vector_gray_300_01.svg"
                                    alt="vector_Seven"
                                />
                                <div className="flex flex-row items-center justify-evenly mt-1 w-full">
                                    <Img
                                    className="h-[17px]"
                                    src="images/img_videocamera.svg"
                                    alt="videocamera"
                                    />
                                    <Img
                                    className="h-[9px] w-2.5"
                                    src="images/img_map.svg"
                                    alt="map"
                                    />
                                </div>
                                <Img
                                    className="h-[3px] ml-8 md:ml-[0] mt-[18px]"
                                    src="images/img_vector_gray_300_01.svg"
                                    alt="vector_Eight"
                                />
                                <Img
                                    className="h-[17px] mt-1"
                                    src="images/img_videocamera.svg"
                                    alt="videocamera_One"
                                />
                                </div>
                                <div className="flex flex-row gap-[13px] items-center justify-start mt-[5px] w-[58%] md:w-full">
                                <Img
                                    className="h-[39px]"
                                    src="images/img_volume.svg"
                                    alt="volume"
                                />
                                <Img
                                    className="h-1"
                                    src="images/img_vector_green_200.svg"
                                    alt="vector_Nine"
                                />
                                </div>
                            </div>
                            </div>
                        </div>
                        <Img
                            className="absolute h-[5px] left-[0] top-[17%]"
                            src="images/img_vector_blue_gray_800_01.svg"
                            alt="vector_Ten"
                        />
                        <Img
                            className="absolute h-[9px] left-[0] top-[22%]"
                            src="images/img_vector_blue_gray_800_01.svg"
                            alt="vector_Eleven"
                        />
                        <Img
                            className="absolute h-[9px] left-[0] top-[27%]"
                            src="images/img_vector_blue_gray_800_01.svg"
                            alt="vector_Twelve"
                        />
                        <Line className="absolute bg-blue_gray-800_01 h-[19px] right-[0] top-[19%] w-0.5" />
                        </div>
                        <Img
                        className="h-3 mb-[3px] mt-[174px]"
                        src="images/img_vector_deep_orange_100_01.svg"
                        alt="vector_Fourteen"
                        />
                        <Img
                        className="h-3 mb-[61px] mt-[116px]"
                        src="images/img_vector_deep_orange_100_01_12x5.svg"
                        alt="vector_Fifteen"
                        />
                    </div>
                    <div className="absolute bottom-[0] flex flex-row gap-[9px] items-end justify-between right-[5%] w-[16%]">
                        <Img
                        className="h-[5px] mt-2.5"
                        src="images/img_vector_blue_gray_900_04.svg"
                        alt="vector_Sixteen"
                        />
                        <Img
                        className="h-3 mb-[3px]"
                        src="images/img_vector_deep_orange_100_01.svg"
                        alt="vector_Seventeen"
                        />
                    </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col items-end justify-start right-[2%] w-[19%]">
                    <Img
                        className="h-[63px]"
                        src="images/img_trash.svg"
                        alt="trash"
                    />
                    <Img
                        className="h-[5px] mt-0.5"
                        src="images/img_vector_blue_gray_900_04.svg"
                        alt="vector_Eighteen"
                    />
                    </div>
                </div>
                <Img
                    className="absolute bottom-[33%] h-[49px] right-[3%]"
                    src="images/img_notification.svg"
                    alt="notification"
                />
                </div>
                <Img
                className="absolute h-[17px] inset-y-[0] my-auto right-[19%]"
                src="images/img_checkmark.svg"
                alt="checkmark"
                />
            </div>
            <Img
                className="absolute bottom-[36%] h-[38px] right-[0]"
                src="images/img_microphone.svg"
                alt="microphone"
            />
            <div className="absolute bg-deep_orange-100_01 h-3.5 right-[13%] rounded-[50%] top-[32%] w-3.5"></div>
            </div>
            <Img
            className="absolute h-3.5 right-[22%] top-[32%]"
            src="images/img_reply.svg"
            alt="reply"
            />
            <div
            className="absolute bg-cover bg-no-repeat bottom-[35%] md:h-[13px] h-[39px] right-[30%] w-[23%]"
            style={{
                backgroundImage: "url('images/img_group51.svg')",
            }}
            >
            <div className="absolute bottom-[23%] flex flex-col items-center justify-start left-[0] w-[87%]">
                <div className="flex flex-col justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-7 items-start justify-between w-full">
                    <Img
                        className="h-0.5 mt-0.5"
                        src="images/img_vector_white_a700_2x6.svg"
                        alt="vector_Twenty"
                    />
                    <Img
                        className="h-[9px] w-2.5"
                        src="images/img_videocamera_white_a700.svg"
                        alt="videocamera_Two"
                    />
                    </div>
                </div>
                <Img
                    className="h-px ml-1.5 md:ml-[0] mt-[3px]"
                    src="images/img_vector_white_a700_1x3.svg"
                    alt="vector_TwentyOne"
                />
                </div>
            </div>
            <Img
                className="absolute bottom-[13%] h-1 left-[10%]"
                src="images/img_vector_white_a700_1x3.svg"
                alt="vector_TwentyTwo"
            />
            <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-4 items-end justify-start left-[0] p-0.5 top-[10%] w-[87%]"
                style={{
                backgroundImage:
                    "url('images/img_group53.svg')",
                }}
            >
                <div className="flex flex-row items-start justify-end mt-[7px] w-[15%] md:w-full">
                <div className="bg-green-200 h-0.5 rounded-[50%] w-0.5"></div>
                <div className="bg-green-200 h-px rounded-[50%] w-px"></div>
                </div>
            </div>
            </div>
            <Line className="absolute bg-blue_gray-100 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
        </div>
        <Text
            className="absolute bg-white-A700 flex h-[39px] items-center justify-center left-[0] rounded-[19px] text-black-900 text-center text-xl top-[0] w-[39px]"
            size="txtQuicksandRegular20"
        >
            5
        </Text>
        </div>
        <Text
        className="mb-[39px] ml-1 md:ml-[0] text-black-900 text-xl"
        size="txtQuicksandRegular20Black900"
        >
        <>
            Complete the payment <br />
            transaction conveniently <br />
            through the ShopOkoa Till
        </>
        </Text>
    </div>
    <Img
        className="h-10 ml-2.5 md:ml-[0] md:mt-0 mt-[85px] w-10"
        src="images/img_arrow2svgrepocom.svg"
        alt="arrow2svgrepoco_Three"
    />
    <div className="bg-gradient9  flex md:flex-1 flex-col md:gap-10 gap-[62px] justify-start md:ml-[0] p-2 rounded-[12px] shadow-bs md:w-full">
        <div className="md:h-[157px] h-[216px] relative w-[97%]">
        <div className="absolute bg-white-A700 flex flex-col h-[39px] items-center justify-end left-[0] p-1.5 rounded-[19px] top-[0] w-[39px]">
            <Text
            className="text-black-900 text-xl"
            size="txtQuicksandRegular20"
            >
            6
            </Text>
        </div>
        <div className="absolute bottom-[0] md:h-[157px] h-[182px] inset-x-[0] mx-auto w-[98%]">
            <div className="md:h-[157px] h-[182px] m-auto w-full">
            <div className="md:h-[157px] h-[182px] m-auto w-full">
                <Img
                className="absolute bottom-[0] h-[25px] inset-x-[0] mx-auto"
                src="images/img_shadow_white_a700.svg"
                alt="shadow"
                />
                <div className="absolute h-[157px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="flex flex-row h-full items-start justify-between m-auto w-full">
                    <div className="flex h-[143px] md:h-[153px] justify-end mb-3.5 relative w-[39%]">
                    <div className="absolute bottom-[0] md:h-[46px] h-[55px] left-[0] w-[36%]">
                        <div className="md:h-[46px] h-[55px] m-auto w-full">
                        <div className="md:h-[46px] h-[55px] m-auto w-full">
                            <div className="absolute h-[46px] right-[0] top-[0] w-[95%]">
                            <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                style={{
                                backgroundImage:
                                    "url('images/img_group36.svg')",
                                }}
                            >
                                <Img
                                className="h-[46px]"
                                src="images/img_vector.svg"
                                alt="vector_TwentySix"
                                />
                            </div>
                            <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto w-full"
                                style={{
                                backgroundImage:
                                    "url('images/img_group37.svg')",
                                }}
                            >
                                <div className="flex flex-col items-end justify-start mb-1 mt-[7px] w-[78%] md:w-full">
                                <div className="flex flex-row items-start justify-evenly w-6 md:w-full">
                                    <div className="flex flex-col items-start justify-start mb-[5px] w-[71%]">
                                    <div className="flex flex-row gap-[5px] h-3.5 items-center justify-between w-3.5">
                                        <Img
                                        className="h-px"
                                        src="images/img_vector_white_a700_1x9.svg"
                                        alt="vector_TwentySeven"
                                        />
                                        <Img
                                        className="h-3.5"
                                        src="images/img_vector_white_a700_1x9.svg"
                                        alt="vector_TwentyEight"
                                        />
                                    </div>
                                    <Img
                                        className="h-px md:ml-[0] ml-[3px] mt-0.5"
                                        src="images/img_vector_white_a700_1x9.svg"
                                        alt="vector_TwentyNine"
                                    />
                                    </div>
                                    <Img
                                    className="h-[13px] mt-3"
                                    src="images/img_vector_white_a700_1x9.svg"
                                    alt="vector_Thirty"
                                    />
                                </div>
                                <Img
                                    className="h-px mt-1"
                                    src="images/img_vector_white_a700_1x9.svg"
                                    alt="vector_ThirtyOne"
                                />
                                </div>
                            </div>
                            </div>
                            <div
                            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[15px] items-center justify-start left-[0] w-[92%]"
                            style={{
                                backgroundImage:
                                "url('images/img_group36.svg')",
                            }}
                            >
                            <Img
                                className="h-[15px]"
                                src="images/img_vector.svg"
                                alt="vector_ThirtyTwo"
                            />
                            </div>
                        </div>
                        <div
                            className="absolute bg-cover bg-no-repeat bottom-[5%] flex flex-col h-2 items-start justify-end left-[0] p-0.5 w-[92%]"
                            style={{
                            backgroundImage:
                                "url('images/img_group37.svg')",
                            }}
                        >
                            <Img
                            className="h-0.5 ml-1 md:ml-[0]"
                            src="images/img_vector_white_a700_1x9.svg"
                            alt="vector_ThirtyThree"
                            />
                        </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-row items-start justify-center right-[21%] w-[48%]">
                        <div className="flex flex-col items-start justify-start w-1/2">
                            <Img
                            className="h-1.5 w-[5px]"
                            src="images/img_vector_white_a700_1x9.svg"
                            alt="vector_ThirtyFour"
                            />
                            <Img
                            className="h-1 ml-0.5 md:ml-[0]"
                            src="images/img_vector_white_a700_1x9.svg"
                            alt="vector_ThirtyFive"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[44%]">
                            <Img
                            className="h-1.5"
                            src="images/img_vector_white_a700_1x9.svg"
                            alt="vector_ThirtySix"
                            />
                            <Img
                            className="h-[3px] ml-0.5 md:ml-[0] w-1"
                            src="images/img_vector_white_a700_1x9.svg"
                            alt="vector_ThirtySeven"
                            />
                        </div>
                        </div>
                    </div>
                    <div
                        className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start mb-2 ml-[34px] mt-auto w-[15%]"
                        style={{
                        backgroundImage:
                            "url('images/img_group36.svg')",
                        }}
                    >
                        <div
                        className="bg-cover bg-no-repeat h-8 relative w-full"
                        style={{
                            backgroundImage:
                            "url('images/img_vector.svg')",
                        }}
                        >
                        <div className="absolute h-8 inset-[0] justify-center m-auto w-[36%]">
                            <Line className="bg-white-A700 h-8 m-auto w-[5px]" />
                            <Img
                            className="absolute h-1 left-[0] top-[22%] w-[3px]"
                            src="images/img_vector_white_a700_1x9.svg"
                            alt="vector_ThirtyNine"
                            />
                        </div>
                        <Img
                            className="absolute h-1.5 right-[0] top-[31%] w-1.5"
                            src="images/img_group37.svg"
                            alt="vector_Forty"
                        />
                        <Img
                            className="absolute h-1.5 inset-y-[0] left-[0] my-auto"
                            src="images/img_vector_white_a700_1x9.svg"
                            alt="vector_FortyOne"
                        />
                        <Img
                            className="absolute bottom-1/4 h-1 right-[0]"
                            src="images/img_vector_white_a700_1x9.svg"
                            alt="vector_FortyTwo"
                        />
                        <Img
                            className="absolute bottom-[13%] h-1 left-[0] w-[3px]"
                            src="images/img_vector_white_a700_1x9.svg"
                            alt="vector_FortyThree"
                        />
                        </div>
                    </div>
                    <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-4/5"
                        style={{
                        backgroundImage:
                            "url('images/img_group34.svg')",
                        }}
                    >
                        <div
                        className="bg-cover bg-no-repeat flex flex-col h-[139px] items-center justify-start w-full"
                        style={{
                            backgroundImage:
                            "url('images/img_group43.svg')",
                        }}
                        >
                        <Img
                            className="h-[139px]"
                            src="images/img_group.svg"
                            alt="group"
                        />
                        </div>
                    </div>
                    </div>
                    <div
                    className="bg-cover bg-no-repeat h-[108px] md:h-[157px] mt-[49px] relative w-[39%]"
                    style={{
                        backgroundImage:
                        "url('images/img_group35.svg')",
                    }}
                    >
                    <Img
                        className="h-[108px] m-auto"
                        src="images/img_vector_amber_a400.svg"
                        alt="vector_FortyFour"
                    />
                    <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                        style={{
                        backgroundImage:
                            "url('images/img_group_white_a700.svg')",
                        }}
                    >
                        <Img
                        className="h-[108px]"
                        src="images/img_vector_white_a700_108x96.svg"
                        alt="vector_FortyFive"
                        />
                    </div>
                    </div>
                </div>
                <Img
                    className="absolute bottom-[19%] h-[70px] left-[24%]"
                    src="images/img_save.svg"
                    alt="save"
                />
                </div>
            </div>
            <div className="absolute bottom-[12%] h-[116px] md:h-[99px] right-[10%] w-2/5">
                <div className="absolute h-[106px] md:h-[99px] inset-x-[0] mx-auto top-[0] w-[98%]">
                <div className="h-[106px] md:h-[99px] m-auto w-full">
                    <div className="h-[106px] md:h-[99px] m-auto w-full">
                    <div className="h-[106px] md:h-[99px] m-auto w-full">
                        <div className="flex flex-col gap-[18px] h-full justify-start m-auto w-full">
                        <div className="md:h-[23px] h-[30px] relative w-[53%]">
                            <div className="md:h-[23px] h-[30px] m-auto w-full">
                            <div className="md:h-[23px] h-[30px] m-auto w-full">
                                <div className="absolute md:h-[23px] h-[30px] inset-[0] justify-center m-auto w-full">
                                <div className="absolute bottom-[0] h-3 right-[0] w-[77%]">
                                    <Img
                                    className="absolute h-3 inset-[0] justify-center m-auto"
                                    src="images/img_vector_white_a700.svg"
                                    alt="vector_FortySix"
                                    />
                                    <Img
                                    className="absolute bottom-[0] h-2.5 right-[0]"
                                    src="images/img_airplane.svg"
                                    alt="airplane"
                                    />
                                </div>
                                <Img
                                    className="absolute bottom-[20%] h-[3px] left-[0]"
                                    src="images/img_vector_white_a700_3x12.svg"
                                    alt="vector_FortySeven"
                                />
                                <Img
                                    className="absolute h-[23px] right-[0] top-[0]"
                                    src="images/img_vector_white_a700_23x19.svg"
                                    alt="vector_FortyEight"
                                />
                                </div>
                                <Img
                                className="absolute h-[22px] right-[0] top-[0]"
                                src="images/img_fire.svg"
                                alt="fire"
                                />
                            </div>
                            <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-[17px] items-end justify-start pl-[3px] py-[3px] right-[0] top-[0] w-[18px]"
                                style={{
                                backgroundImage:
                                    "url('images/img_group47.svg')",
                                }}
                            >
                                <div className="flex flex-col items-start justify-start mb-0.5 w-[87%] md:w-full">
                                <Img
                                    className="h-[3px]"
                                    src="images/img_vector_3x12.svg"
                                    alt="vector_FortyNine"
                                />
                                <Img
                                    className="h-px md:ml-[0] ml-[5px]"
                                    src="images/img_vector_white_a700_1x7.svg"
                                    alt="vector_Fifty"
                                />
                                <Img
                                    className="h-px w-px"
                                    src="images/img_vector_blue_gray_900_01.svg"
                                    alt="vector_FiftyOne"
                                />
                                <Img
                                    className="h-px w-px"
                                    src="images/img_vector_blue_gray_900_01_1x1.svg"
                                    alt="vector_FiftyTwo"
                                />
                                </div>
                            </div>
                            </div>
                            <Img
                            className="absolute bottom-[40%] h-px right-[18%] w-0.5"
                            src="images/img_vector_blue_gray_900_01_1x2.svg"
                            alt="vector_FiftyThree"
                            />
                        </div>
                        <div
                            className="bg-cover bg-no-repeat flex flex-row gap-2.5 h-[58px] items-end justify-end ml-9 md:ml-[0] w-[63%] md:w-full"
                            style={{
                            backgroundImage:
                                "url('images/img_group44.svg')",
                            }}
                        >
                            <Img
                            className="h-[29px] mt-[26px]"
                            src="images/img_download.svg"
                            alt="download"
                            />
                            <div className="h-14 md:h-[55px] relative w-3/5">
                            <Img
                                className="absolute h-[55px] inset-y-[0] my-auto right-[0]"
                                src="images/img_rewind.svg"
                                alt="rewind"
                            />
                            <Img
                                className="absolute h-[3px] left-[0] top-1/4"
                                src="images/img_vector_white_a700_3x7.svg"
                                alt="vector_FiftyFour"
                            />
                            <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-2 items-start justify-start left-[0] pt-0.5 px-0.5 top-[0] w-[34%]"
                                style={{
                                backgroundImage:
                                    "url('images/img_group50.svg')",
                                }}
                            >
                                <Img
                                className="h-px md:ml-[0] ml-[5px] w-px"
                                src="images/img_vector_white_a700_1x9.svg"
                                alt="vector_FiftyFive"
                                />
                                <Img
                                className="h-px w-px"
                                src="images/img_vector_white_a700_1x9.svg"
                                alt="vector_FiftySix"
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                        <Img
                        className="absolute h-9 right-1/4 top-[19%]"
                        src="images/img_forward.svg"
                        alt="forward"
                        />
                    </div>
                    <div
                        className="absolute bg-cover bg-no-repeat flex flex-row h-8 items-start justify-start p-0.5 right-1/4 top-[19%] w-1/5"
                        style={{
                        backgroundImage:
                            "url('images/img_group45.svg')",
                        }}
                    >
                        <div className="h-1 md:h-[27px] mb-3.5 mt-[9px] relative w-2/5">
                        <Img
                            className="absolute h-1 inset-y-[0] my-auto right-[0] w-[5px]"
                            src="images/img_vector_blue_gray_900_01_1x2.svg"
                            alt="vector_FiftySeven"
                        />
                        <Img
                            className="absolute bottom-[0] h-px left-[0]"
                            src="images/img_vector_blue_gray_900_01_1x4.svg"
                            alt="vector_FiftyEight"
                        />
                        </div>
                        <Img
                        className="h-px mt-[13px] w-px"
                        src="images/img_vector_blue_gray_900_01_1x4.svg"
                        alt="vector_FiftyNine"
                        />
                    </div>
                    </div>
                    <div className="absolute flex flex-col justify-start left-[28%] top-[17%] w-[33%]">
                    <Img
                        className="h-1.5 md:ml-[0] ml-[18px] w-[7px]"
                        src="images/img_edit.svg"
                        alt="edit"
                    />
                    <div
                        className="bg-cover bg-no-repeat flex flex-col h-[31px] items-center justify-start w-8 md:w-full"
                        style={{
                        backgroundImage:
                            "url('images/img_group46.svg')",
                        }}
                    >
                        <Img
                        className="h-7 w-[29px]"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                        />
                    </div>
                    </div>
                </div>
                <Img
                    className="absolute bottom-[40%] h-2 left-[18%]"
                    src="images/img_vector_white_a700_8x10.svg"
                    alt="vector_Sixty"
                />
                <Img
                    className="absolute h-[5px] left-[44%] top-[23%]"
                    src="images/img_vector_blue_gray_900_01_5x3.svg"
                    alt="vector_SixtyOne"
                />
                </div>
                <Img
                className="absolute h-[3px] left-[42%] top-[22%] w-1"
                src="images/img_vector_blue_gray_900_01_5x3.svg"
                alt="vector_SixtyTwo"
                />
                <div
                className="absolute bg-cover bg-no-repeat bottom-[2%] flex flex-col h-1.5 items-center justify-start left-[31%] pt-0.5 w-[16%]"
                style={{
                    backgroundImage:
                    "url('images/img_group49.svg')",
                }}
                >
                <Img
                    className="h-[3px]"
                    src="images/img_vector_blue_gray_900_01_3x14.svg"
                    alt="vector_SixtyThree"
                />
                </div>
                <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-2.5 items-center justify-start pt-0.5 right-[0] w-[9px]"
                style={{
                    backgroundImage:
                    "url('images/img_group48.svg')",
                }}
                >
                <Img
                    className="h-[7px]"
                    src="images/img_checkmark_blue_gray_900_01.svg"
                    alt="checkmark_One"
                />
                </div>
            </div>
            </div>
            <Img
            className="absolute bottom-[4%] h-[65px] left-[9%]"
            src="images/img_device_white_a700.svg"
            alt="device"
            />
        </div>
        </div>
        <Text
        className="mb-[31px] text-black-900 text-xl"
        size="txtQuicksandRegular20Black900"
        >
        <>
            Repay the loan within 30 <br />
            days, ensuring a hassle-
            <br />
            free experience.
        </>
        </Text>
    </div>
    </div>

</div>
</>
    )
 }

export default CardsContainer;