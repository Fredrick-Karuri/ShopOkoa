import React from 'react'

import { Button, Img, List, Text } from 'components'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='bg-white-A700 flex flex-col items-center justify-start mx-auto w-full'>
        <div className='flex flex-col justify-start w-full'>
          <Header className='bg-white-A700 border-b border-green-800 border-solid flex sm:flex-col flex-row font-manrope sm:gap-5 items-center justify-center md:px-5 w-full' />
          {/* hero to cover the whole screen with a height of 800px and a width of 100%  */}
          <div
            className='bg-cover bg-no-repeat flex flex-col h-[800px] inset-y-[0] items-center justify-start my-auto p-7 sm:px-5 '
            style={{ backgroundImage: "url('images/about-hero-left.png')" }}
          >
            <div className='font-manrope h-[800px] md:px-12 sm:px-0  relative w-full'>
              <div className='flex flex-col    items-center justify-start sm:mt-0 mt-11  md:w-full'>
                <div className='flex flex-col  items-center justify-start  sm:mt-0  md:w-full'>
                  <Text
                    className='  max-w-[60%] sm:text-[32px] sm:mt-[0px] sm:max-w-[80%] md:mt-[200px]     md:text-[38px] text-[42px] text-blue_gray-900_02 tracking-[0.84px] '
                    size='txtManropeMedium42'
                  >
                    <span className=' md:text-[#FFFFFF] sm:text-blue_gray-900_02 font-manrope font-bold'>
                      <>Empowering you to shop smart and </>
                    </span>

                    <span className=' md:text-[#FDDA01] sm:text-green-800_01  text-green-800_01 font-manrope  font-bold'>
                      pay later {''}
                    </span>
                    <span className='md:text-[#FFFFFF] sm:text-blue_gray-900_02 font-manrope font-bold'>
                      with ease
                    </span>
                  </Text>
                </div>

                {/* button similar  the text,our story with the image, alongside it */}
                {/*align the button at the bottom of the screen, using absolute a with a height of 80px, a width of 280px, a radius of 12px, a border of black, a border-solid, a background-gradient10, a flex, a flex-row, a items-center, a justify-center,  */}

                <div className='absolute bottom-[0px]  bg-gradient10 border border-black-900 border-solid flex flex-row rounded-[12px]   '>
                  <Button
                    onClick={() => navigate('')}
                    className='flex flex-row items-center justify-center gap-7 cursor-pointer font-semibold leading-[normal] max-w-[280px] min-w-[280px] py-[18px] rounded-lg text-[22px] text-black-900 text-center sm:text-lg md:text-xl'
                  >
                    <Img
                      className=' '
                      src='images/img_readsvgrepocom.svg'
                      alt='readsvgrepocom'
                    />
                    <Text>Our Story</Text>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='font-quicksand flex flex-col items-center justify-start md:px-5 w-full'>
            <Text
              className='md:ml-2 max-w-[1000px] md:max-w-[720px]sm:text-2xl md:text-[26px] text-[32px] mt-20 text-black-900 '
              size='txtQuicksandRegular20'
            >
              <>
                ShopOkoa was launched by Dukatech with an aim of ending Digital
                Poverty by helping Shopkeepers digitize their credit service
              </>
            </Text>
            <div className='flex sm:flex-col flex-row font-quicksand gap-40 md:max-w-[780px] md:gap-20 sm:gap-10 items-center justify-between max-w-[1034px] mt-[81px] mx-auto md:px-5 w-full'>
              <Img
                className=' md:h-[200px] h-[238px] '
                src='images/img_breakingbarriersbro.svg'
                alt='breakingbarrier'
              />
              <Text
                className='text-black-900 text-xl'
                size='txtQuicksandRegular20'
              >
                <>
                  At ShopOkoa, we aim to ensure universal access to the things
                  that matter most. Our app offers a convenient and flexible
                  shopping experience for all, regardless of financial
                  circumstances.
                </>
              </Text>
            </div>
            <div className='flex sm:flex-col flex-row font-quicksand sm:gap-10 items-center justify-between max-w-[1034px] mt-9 mx-auto md:px-5 w-full'>
              <Text
                className=' text-black-900 text-xl max-w-[517px] md:max-w-[390px]'
                size='txtQuicksandRegular20'
              >
                <>
                  We understand the financial obstacles customers face in buying
                  essential goods. Our mission is to deliver a personalized
                  payment experience that seamlessly caters to each
                  individual&#39;s unique financial situation.
                </>
              </Text>
              <Img
                className=' md:h-[200px] h-[238px] '
                src='images/img_financeleadersbro.svg'
                alt='financeleadersb'
              />
            </div>
            {/* <div className='flex sm:flex-col flex-row font-quicksand sm:gap-10 items-start justify-between max-w-[1034px] mt-9 mx-auto md:px-5 w-full'> */}
            <div className='flex sm:flex-col flex-row font-quicksand gap-40 md:max-w-[780px] md:gap-20 sm:gap-10 items-center justify-between max-w-[1034px] mt-[81px] mx-auto md:px-5 w-full'>
              <Img
                className=' md:h-[200px] h-[238px] '
                src='images/img_typewriterbro.svg'
                alt='typewriterbro'
              />
              <Text
                className='sm:mt-0 mt-[45px] text-black-900 text-xl'
                size='txtQuicksandRegular20'
              >
                <>
                  ShopOkoa enables you to shop for goods up to KES 100,000 and
                  pay in flexible installments that match your income patterns.
                  Enjoy a stress-free and enjoyable shopping experience without
                  the burden of immediate payment.
                </>
              </Text>
            </div>
          </div>

          {/* The team */}
          <div className='flex sm:flex-col flex-col font-quicksand items-center justify-between  mt-[81px] mx-auto md:px-0 w-full'>
            <Text
              className='sm:text-2xl md:text-[26px] text-[28px] text-black-900'
              size='txtManropeSemiBold28'
            >
              Meet Our Team
            </Text>

            <List
              className='sm:flex-col flex-row md:gap-10 gap-[72px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1190px] mt-[35px] mx-auto md:px-5 w-full'
              orientation='horizontal'
            >
              <div className='bg-gradient11  border border-black-900 border-solid flex flex-1 flex-col items-center justify-center p-1.5 rounded-[12px] w-full'>
                <Img
                  className='h-[160px] md:h-auto mt-2 object-cover rounded-[30px] w-[44%] sm:w-[35%] md:w-[40%]'
                  src='images/img_rectangle5.png'
                  alt='rectangleFive'
                />

                <Text
                  className='mt-4 text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl'
                  size='txtManropeSemiBold22Bluegray90002'
                >
                  John Doe
                </Text>
                <Text
                  className='text-[22px] text-gray-700 sm:text-lg md:text-xl'
                  size='txtManropeSemiBold22Gray700'
                >
                  Co-Founder & CEO
                </Text>
                <Text
                  className='mb-[17px] ml-2 mt-4 text-black-900 text-xl'
                  size='txtQuicksandRegular20'
                >
                  <>
                    With over 5 years of experience in finance and technology,
                    John leads our team with a passion for making financial
                    services accessible to all.
                  </>
                </Text>
              </div>

              <div className='bg-gradient11  border border-black-900 border-solid flex flex-1 flex-col items-center justify-center p-1.5 rounded-[12px] w-full'>
                <Img
                  className='h-[160px] md:h-auto mt-2 object-cover rounded-[30px] w-[44%] sm:w-[35%] md:w-[40%]'
                  src='images/img_rectangle7.png'
                  alt='rectangleFive'
                />

                <Text
                  className='mt-4 text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl'
                  size='txtManropeSemiBold22Bluegray90002'
                >
                  Jane
                </Text>
                <Text
                  className='text-[22px] text-gray-700 sm:text-lg md:text-xl'
                  size='txtManropeSemiBold22Gray700'
                >
                  Co-Founder & CTO
                </Text>
                <Text
                  className='mb-[17px] ml-2 mt-4 text-black-900 text-xl'
                  size='txtQuicksandRegular20'
                >
                  <>
                    Jane&#39;s technical expertise and commitment to innovation
                    drive the development of our cutting-edge payment platform.
                  </>
                </Text>
              </div>

              <div className='bg-gradient11  border border-black-900 border-solid flex flex-1 flex-col items-center justify-center p-1.5 rounded-[12px] w-full'>
                <Img
                  className='h-[160px] md:h-auto mt-2 object-cover rounded-[30px] w-[44%] sm:w-[35%] md:w-[40%]'
                  src='images/img_rectangle6_171x150.png'
                  alt='rectangleFive'
                />

                <Text
                  className='mt-4 text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl'
                  size='txtManropeSemiBold22Bluegray90002'
                >
                  Alex
                </Text>
                <Text
                  className='text-[22px] text-gray-700 sm:text-lg md:text-xl'
                  size='txtManropeSemiBold22Gray700'
                >
                  Head of Operations
                </Text>
                <Text
                  className='mb-[17px] ml-2 mt-4 text-black-900 text-xl'
                  size='txtQuicksandRegular20'
                >
                  <>
                    Alex oversees the day-to-day operations, ensuring smooth
                    processes and exceptional customer experiences.
                  </>
                </Text>
              </div>
            </List>
          </div>
          <div className='flex flex-col items-center justify-center max-w-[1173px] mt-[120px] mx-auto md:px-5 w-full'>
            <div className='flex md:flex-col gap-20 flex-row md:gap-10 items-center justify-between   mx-auto md:px-5 w-full'>
              <Img
                className=' h-[370px] sm:h-auto md:h-[370px] md:w-auto  object-cover rounded-[12px]'
                src='images/img_rectangle33.png'
                alt='rectangleThirtyThree'
              />
              <div className='flex align-middle justify-center flex-col gap-1 items-center justify-start'>
                <Text
                  className='sm:text-2xl md:text-[26px] text-[28px] text-black-900'
                  size='txtManropeSemiBold28'
                >
                  Our Values and Mission
                </Text>
                <Text
                  className='  mt-[5px] text-black-900 text-xl'
                  size='txtQuicksandRegular20'
                >
                  At ShopOkoa, we uphold the following core values
                </Text>
                <div className='flex flex-col font-quicksand gap-4 items-start justify-start mt-3 w-full'>
                  <Text
                    className='text-black-900 text-xl'
                    size='txtQuicksandRegular20'
                  >
                    <>
                      Transparency: We are committed to being open and honest,
                      providing clear information and terms to empower our
                      customers.
                    </>
                  </Text>
                  <Text
                    className='text-black-900 text-xl'
                    size='txtQuicksandRegular20'
                  >
                    <>
                      Accessibility: We believe that everyone deserves access to
                      the goods they need, regardless of their financial
                      situation.
                    </>
                  </Text>
                  <Text
                    className='text-black-900 text-xl'
                    size='txtQuicksandRegular20'
                  >
                    <>
                      Responsibility: We take responsibility for our actions and
                      strive to offer fair and ethical services to our
                      customers.
                    </>
                  </Text>
                  <Text
                    className='text-black-900 text-xl'
                    size='txtQuicksandRegular20'
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
              className='md:ml-2 max-w-[1173px] md:max-w-[720px] ml-[149px] sm:text-2xl md:text-[26px] text-[28px] mt-20 text-black-900 '
              size='txtQuicksandRegular20'
            >
              <>
                Our mission is to empower individuals to shop responsibly and
                affordably, enabling them to fulfill their needs without
                financial strain. By offering flexible payment options and
                personalized experiences, we aim to make shopping convenient,
                stress-free, and enjoyable for our customers.
              </>
            </Text>
          </div>

          {/* divider */}
          {/* <div className='md:ml-[0] ml-[306px] mt-[39px]'>
            <Img
              className='h-[1px] w-full'
              src='images/img_line_1_1_1.png'
              alt='lineOneOneOne'
            />
          </div> */}
          {/* what our customers say section */}
          <div className='flex flex-col gap-[20px] items-center justify-start  mt-[27px] mx-auto md:px-5 w-full'>
            <Text
              className=' mt-[39px] sm:text-2xl md:text-[26px] text-[28px] text-black-900'
              size='txtManropeSemiBold28'
            >
              What Our Customers Say
            </Text>
            <div className='flex md:flex-col flex-row gap-[51px] items-center justify-start max-w-[980px] md:max-w-[680px] mt-[27px] mx-auto md:px-5 w-full'>
              <div className='bg-orange-50_01 flex flex-col items-start justify-center p-3'>
                <Text
                  className='md:ml-2 ml-[5px] mt-3 text-black-900 text-xl'
                  size='txtQuicksandRegular20'
                >
                  <Text>
                    ShopOkoa has truly been a game-changer for me. I needed to
                    buy some essential appliances for my home,but I couldn&#39;t
                    afford to pay upfront. ShopOkoa allowed me to shop and pay
                    in convenient installments, making it much easier for me to
                    manage my finances. I highly recommend it!&quot;
                  </Text>
                </Text>
                <Text
                  className=' md:ml-2 mb-6 mt-[3px] text-gray-700 text-lg'
                  size='txtInterRegular18'
                >
                  John
                </Text>
              </div>
              <div className='bg-orange-50_01 flex flex-col items-start justify-center p-2.5'>
                <Text
                  className='md:ml-2 ml-[7px] mt-3.5 text-black-900 text-xl'
                  size='txtQuicksandRegular20'
                >
                  <Text>
                    I love the flexibility and convenience that ShopOkoa offers.
                    As a freelancer with irregular income, it&#39;s often
                    challenging to make big purchases. ShopOkoa’s repayment
                    options matched my income patterns perfectly, and I was able
                    to buy the things I needed without financial stress. Thank
                    you, ShopOkoa!
                  </Text>
                </Text>
                <Text
                  className=' md:ml-2 mb-6 md:ml-[0] ml-[7px] mt-[3px] text-gray-700 text-lg'
                  size='txtInterRegular18'
                >
                  Sarah
                </Text>
              </div>
            </div>
          </div>
          {/* who we serve section */}
          <div className='bg-gradient12  flex flex-col font-manrope items-start justify-end mt-[120px] md:mt-[60px]  p-[20px] sm:px-5 w-full'>
            {/* <div className='flex flex-col gap-[20px] items-center justify-start md:ml-[0] ml-[] mt-5 md:px-5 w-[65%] md:w-full'> */}
            <div className='flex flex-col items-center justify-start max-w-[1200px] mt-5 mx-auto md:px-5 w-full'>
              <Text
                className='sm:text-2xl md:text-[26px] text-[28px] text-black-900'
                size='txtManropeSemiBold28'
              >
                Who we serve
              </Text>
              <div className='flex md:flex-row sm:flex-col flex-row md:gap-10 items-center justify-between mt-[43px] w-full'>
                <Img
                  className='h-20 md:w-[23%] sm:w-[70%] md:h-auto object-cover'
                  src='images/img_mamapesa1.png'
                  alt='mamapesaOne'
                />
                <Img
                  className='h-20 md:w-[30%] sm:w-[70%] md:h-auto object-cover'
                  src='images/img_goodlifepharmacy1.png'
                  alt='goodlifepharmac_One'
                />

                <Img
                  className='h-20 md:w-[30%] sm:w-[70%] md:h-auto object-cover'
                  src='images/img_naivassupermarketlogo.png'
                  alt='naivassupermark'
                />
              </div>

              <div className='flex justify-center mt-9'>
                <Button
                  onClick={() => navigate('')}
                  className='bg-gradient3 border border-black-900 border-solid cursor-pointer font-semibold leading-[normal] max-w-[280px] min-w-[280px] py-[18px] rounded-lg text-[22px] text-black-900 text-center sm:text-lg md:text-xl'
                >
                  I am interested!
                </Button>
              </div>
            </div>
          </div>
          <Footer className='bg-white-A700 border-green-800 border-solid border-t flex font-manrope items-center justify-center mt-[37px] md:px-5 w-full' />
        </div>
      </div>
    </>
  )
}

export default AboutPage
