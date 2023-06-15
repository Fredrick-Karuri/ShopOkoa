import React from 'react'

import { Button, Img, List, Text } from 'components'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MerchantsCarousel from 'components/MerchantsCarousel'
import { useNavigate } from 'react-router-dom'

const MerchantsPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full'>
        <div className='flex flex-col justify-start w-full'>
          <Header className='bg-white-A700 border-b border-green-800 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full' />
          {/* left-side containing three images */}
          <div className='flex flex-col items-center justify-start w-full'>
            <div className='bg-gradient5  w-full'>
              <div className='flex md:flex-col flex-row sm:gap-[29px] items-start justify-between mx-auto  w-full'>
                {/* right-side containing image and text */}
                <div className='responsive-section'>
                  <div className=' md:w-full  h-[760px] relative w-full  sm:w-full'>
                    <Img
                      className='h-[760px] m-auto object-cover w-full '
                      src='images/img_rectangle23.png'
                      alt='rectangleTwentyThree'
                    />

                    {/* <div className='absolute bg-green-200_7a flex flex-col font-quicksand items-end justify-between p-[15px] right-[0] rounded-bl-[45px] rounded-tl-[45px] top-[43%]'> */}
                    {/* align the elements center */}

                    <div className='absolute bg-[rgba(0,0,0,0.5)]  flex items-center justify-center p-6 sm:p-[10px] sm:left-[50%] left-[61%] top-[70%] sm:top-[80%] transform-gpu -translate-x-1/2 -translate-y-1/2 rounded-bl-[45px] rounded-tl-[45px] rounded-tr-[45px]'>
                      <div className='flex flex-col items-center'>
                        <Text
                          className=' ml-8 font-quicksand font-medium leading-[normal] min-w-[260px] py-[13px] rounded-[12px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 text-center sm:ml-4'
                          size='txtQuicksandSemiBold24Black900'
                        >
                          <>Discover the benefits of partnering with us</>
                        </Text>

                        <div className='button-container'>
                          <Button className='bg-gradient5 border border-black-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[260px] py-[13px] rounded-[12px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900_01 text-center sm:ml-4'>
                            Explore
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Text
                      className='absolute inset-x-[0] w-[58%] md:w-[74%] sm:w-[80%] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-white-A700 top-[12%] left-[%] tracking-[0.96px]'
                      size='txtManropeBold48'
                    >
                      <>Join Our Growing Network of Merchants</>
                    </Text>
                  </div>
                </div>

                {/* three floating images */}
                <div className='flex md:flex-1 flex-col  justify-start md:mt-0 mt-40 md:px-4 md:w-full'>
                  <div className='image-container'>
                    <div className='image-scroll gap-3.5 items-start justify-between mb-6 w-full '>
                      <Img
                        // className='  h-[160px] md:h-auto  object-cover rounded-lg max-w-full max-h-[170px] sm:max-h-auto md:max-h-auto'
                        className='h-[160px] md:h-auto sm:mt-0 mt-[113px] object-cover rounded-lg max-w-full max-h-[170px] sm:max-h-auto md:max-h-auto'
                        src='images/img_rectangle52.png'
                        alt='woman shopping clothes'
                      />

                      <Img
                        className=' h-[160px] md:h-auto mb-[6px] md:mt-2 object-cover rounded-lg  max-w-full max-h-[170px] sm:mt-0 sm:max-h-auto md:max-h-auto'
                        // className=' h-[160px] md:h-auto sm:mt-0 mt-[113px] object-cover rounded-lg max-w-full max-h-[170px] sm:max-h-auto md:max-h-auto'

                        src='images/img_rectangle51.png'
                        alt='woman shopping fruits'
                      />

                      <Img
                        className='h-[160px] md:h-auto sm:mt-0 mt-[113px] object-cover rounded-lg max-w-full max-h-[170px] sm:max-h-auto md:max-h-auto'
                        src='images/img_rectangle50.png'
                        alt='man shopping in a supermarket'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className='mx-auto mt-12 sm:mt-6 md:mt-8 text-3xl md:text-[26px] text-black-900 tracking-[0.56px]'
            size='txtManropeSemiBold28'
          >
            Featured merchants
          </Text>

          <MerchantsCarousel className=' gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start max-w-[1012px] mt-6 sm:mt-8 md:mt-[18px] mx-auto md:px-5 w-full' />
          <Text
            className='mx-auto mt-12 sm:mt-6 md:mt-10 text-3xl md:text-[26px] text-black-900 tracking-[0.56px]'
            size='txtManropeSemiBold28'
          >
            Merchant Benefits
          </Text>

          <List
            className='sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1146px] mt-[26px] mx-auto md:px-5 w-full'
            orientation='horizontal'
          >
            <div className='border border-blue_gray-100_01 border-solid flex flex-1 flex-col items-center justify-start pb-[25px] rounded-[12px] w-full'>
              <Img
                className='h-[250px] sm:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full'
                src='images/img_rectangle46.png'
                alt='rectangleFortySix'
              />
              <Text
                className='mt-3 text-[22px] text-black-900 sm:text-lg md:text-xl'
                size='txtManropeSemiBold22'
              >
                unsecured credit
              </Text>
              <Text
                className=' mt-[26px] text-black-900 text-xl'
                size='txtQuicksandRegular20'
              >
                <>
                  Access unsecured credit ranging <br />
                  from $100 to $4,000 to cover short-
                  <br />
                  term cash flow shortfalls.
                </>
              </Text>
            </div>
            <div className='border border-blue_gray-100_01 border-solid flex flex-1 flex-col gap-[15px] items-center justify-start pb-[7px] rounded-[12px] w-full'>
              <Img
                className='h-[250px] sm:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full'
                src='images/img_rectangle47.png'
                alt='rectangleFortySeven'
              />
              <Text
                className='text-[22px] text-black-900 sm:text-lg md:text-xl'
                size='txtManropeSemiBold22'
              >
                High-Value Loans
              </Text>
              <Text
                className='text-black-900 text-xl'
                size='txtQuicksandRegular20'
              >
                <>
                  Benefit from our partnerships with <br />
                  leading banks, enabling access to <br />
                  high-value loans without the need <br />
                  to build your own balance sheet.
                </>
              </Text>
            </div>
            <div className='border border-blue_gray-100_01 border-solid flex flex-1 flex-col items-center justify-start pb-9 rounded-[12px] w-full'>
              <Img
                className='h-[250px] sm:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full'
                src='images/img_rectangle48.png'
                alt='rectangleFortyEight'
              />
              <Text
                className='mt-3 text-[22px] text-black-900 sm:text-lg md:text-xl'
                size='txtManropeSemiBold22'
              >
                Access to a large customer base
              </Text>
              <Text
                className='mt-10 text-black-900 text-xl'
                size='txtQuicksandRegular20'
              >
                <>
                  Tap into our extensive customer <br />
                  network and expand your reach.
                </>
              </Text>
            </div>
            <div className='border border-blue_gray-100_01 border-solid flex flex-col items-center justify-start pb-6 rounded-[12px]  md:w-full'>
              <Img
                className='h-[250px] sm:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full'
                src='images/img_rectangle53.png'
                alt='rectangleFiftyThree'
              />
              <Text
                className='mt-2.5 text-[22px] text-black-900 sm:text-lg md:text-xl'
                size='txtManropeSemiBold22'
              >
                Dedicated Support
              </Text>
              <Text
                className='mt-1 text-black-900 text-xl'
                size='txtQuicksandRegular20'
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
            <div className='border border-blue_gray-100_01 border-solid flex flex-col gap-2.5 items-end justify-start pb-6 rounded-[12px]  md:w-full'>
              <Img
                className='h-[250px] sm:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full'
                src='images/img_rectangle49.png'
                alt='rectangleFortyNine'
              />
              <div className='flex flex-col items-start justify-start'>
                <Text
                  className='md:ml-[0] ml-[3px] text-[22px] text-black-900 sm:text-lg md:text-xl'
                  size='txtManropeSemiBold22'
                >
                  Convenient payment options
                </Text>
                <Text
                  className='mt-1 text-black-900 text-xl'
                  size='txtQuicksandRegular20'
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
          </List>

          {/* how it works section start */}
          <div className='flex justify-center mt-12'>
            <Text
              className='sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[0.56px]'
              size='txtManropeSemiBold28'
            >
              How it works
            </Text>
          </div>

          {/* <div className='flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[862px] mt-[100px] mx-auto md:px-5 w-full sm:items-center '> */}
          <div className='flex sm:flex-col flex-row sm:gap-10 items-start justify-between max-w-[842px] mt-[87px] mx-auto md:px-5 w-full sm:items-center'>
            {/* step 1 illustration */}
            <Img
              className='h-[252px] sm:'
              src='images/img_signuppana.svg'
              alt='signuppana'
            />
            <div className='flex flex-col gap-4 items-center justify-start md:mt-0 mt-[50px]'>
              <a
                href='javascript:'
                className='text-[22px] text-black-900 sm:text-lg md:text-xl md:mt-10 sm:mt-0'
              >
                {/* step 1 title */}
                <Text size='txtManropeSemiBold22'>Sign Up</Text>
              </a>
              {/* step 1 content */}
              <Text
                className='text-black-900 text-xl'
                size='txtQuicksandRegular20'
              >
                <>
                  Create an account and provide the
                  <br />
                  necessary information to get started.
                </>
              </Text>
            </div>
          </div>
          <div className='flex sm:flex-col flex-row sm:gap-10 items-start justify-between max-w-[842px] mt-[87px] mx-auto md:px-5 w-full sm:items-center'>
            <div className='flex flex-col gap-[19px] items-center justify-start sm:mt-0 mt-12'>
              {/* step 2 title */}
              <Text
                className='text-[22px] text-black-900 sm:text-lg md:text-xl'
                size='txtManropeSemiBold22'
              >
                List Your Products
              </Text>
              {/* step 2 content */}
              <Text
                className='text-black-900 text-xl'
                size='txtQuicksandRegular20'
              >
                <>
                  Add your products or services to <br />
                  our platform and set the pricing.
                </>
              </Text>
            </div>
            {/* step 2 illustration */}
            <div className='h-[261px] relative w-[30%] sm:w-full'>
              <Img
                className='absolute h-[261px] inset-[0] justify-center m-auto'
                src='images/img_onlinewisheslistcuate.svg'
                alt='onlinewisheslis'
              />
            </div>
          </div>
          <div className='flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[907px] mt-12 mx-auto md:px-5 w-full sm:items-center '>
            {/* Step 3 illustration */}
            <div className='flex items-center'>
              <Img
                className='h-[262px]'
                src='images/img_icecreamselleramico.svg'
                alt='icecreamsellera'
              />
            </div>

            {/* Step 3 title and content */}
            <div className='flex flex-col gap-4 items-center justify-start md:mt-10 sm:mt-0 mt-12'>
              {/* Step 3 title */}
              <Text
                className='text-[22px] text-black-900 sm:text-lg md:text-xl'
                size='txtManropeSemiBold22'
              >
                Start Selling
              </Text>
              {/* Step 3 content */}
              <Text
                className='text-black-900 text-xl'
                size='txtQuicksandRegular20'
              >
                <>
                  Reach a wider customer base and start <br />
                  selling your products right away.
                </>
              </Text>
            </div>
          </div>

          <br />
          <Text
            className='text-center md:text-left mt-2 mx-auto mb-2 mt-[45px] text-[22px] text-black-900 sm:text-lg md:text-xl mt-4 mb-8'
            size='txtManropeSemiBold22'
          >
            Yes, it's that easy! No bottlenecks.
          </Text>

          <div className='flex justify-center mt-4'>
            <Button className='bg-gradient6 border border-black-900 border-solid cursor-pointer font-medium leading-[normal] max-w-[260px] min-w-[260px] py-[13px] rounded-[12px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900_01 text-center'>
              Sign me up Now
            </Button>
          </div>

          <div className='bg-gradient7 flex flex-col items-center justify-end mt-[45px] p-6 sm:px-5 w-full'>
            <div className='flex flex-col gap-4 items-center justify-start max-w-[1020px] mt-1.5 mx-auto md:px-5 w-full'>
              <Text
                className='sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[0.56px]'
                size='txtManropeSemiBold28'
              >
                Merchant Stories
              </Text>
              <List
                className='sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-center w-full'
                orientation='horizontal'
              >
                {/* merchant story 1 */}
                <div className='bg-white-A700 border border-black-900 border-solid flex flex-1 flex-col justify-start p-[9px] rounded-[12px] w-full'>
                  <Img
                    className='h-[120px] md:h-auto mt-0.5 mx-auto object-cover rounded-[20px] w-[22%] md:w-[150px]'
                    src='images/img_rectangle6.png'
                    alt='rectangleSix'
                  />
                  <Text
                    className='text-center md:text-left mt-1 text-[22px] text-black-900 sm:text-lg md:text-xl md:text-center'
                    size='txtManropeSemiBold22'
                  >
                    Jane
                  </Text>
                  <Text
                    className='text-center md:text-left mt-4 text-[22px] text-gray-500 sm:text-lg md:text-xl md:text-center'
                    size='txtManropeSemiBold22Gray500'
                  >
                    Owner of ABC E-commerce Store
                  </Text>
                  <Text
                    className='text-center md:text-left mt-[7px] text-gray-600_01 text-xl md:ml-1 md:mb-2'
                    size='txtQuicksandRegular20Gray60001'
                  >
                    <>
                      Using the app has revolutionized my business. With easy
                      access to financing, I've been able to expand my product
                      range and increase sales. It's a game-changer!&quot;
                    </>
                  </Text>
                </div>
                {/* merchant story 2 */}
                <div className='bg-white-A700 border border-black-900 border-solid flex flex-1 flex-col justify-end p-[9px]  rounded-[12px] w-full'>
                  <Img
                    className='h-[120px] md:h-auto mt-0.5 mx-auto object-cover rounded-[20px] w-[22%] md:w-[150px]'
                    src='images/img_rectangle57.png'
                    alt='rectangleFiftySeven'
                  />
                  <Text
                    className='text-center md:text-left mt-1 text-[22px] text-black-900 sm:text-lg md:text-xl md:text-center'
                    size='txtManropeSemiBold22'
                  >
                    John{' '}
                  </Text>
                  <Text
                    className='text-center md:text-left mt-4 text-[22px] text-gray-500 sm:text-lg md:text-xl md:text-center'
                    size='txtManropeSemiBold22Gray500'
                  >
                    Small Business Owner
                  </Text>
                  <Text
                    className=' md:ml-1 text-center md:text-left mt-[7px] text-gray-600_01 text-xl '
                    size='txtQuicksandRegular20Gray60001'
                  >
                    <>
                      I can't recommend the app enough! It has simplified my
                      cash flow management and provided me with the flexibility
                      to meet short-term financial needs. It's been a lifesaver
                      for my business.
                    </>
                  </Text>
                </div>
              </List>
            </div>
          </div>

          <div className='bg-gradient6 flex flex-col items-center justify-end mt-[39px] p-[19px]  w-full'>
            <div className='flex flex-col items-center justify-start max-w-[1200px] mt-[3px] mx-auto md:px-5 w-full'>
              <div className='flex flex-col items-center w-full'>
                <Text
                  className='md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.64px] text-center'
                  size='txtManropeSemiBold32'
                >
                  Our Impact in Numbers
                </Text>
              </div>
              <div className='grid grid-cols-3 md:grid-cols-1 gap-10 mt-6 w-full'>
                {/* merchant partnerships */}
                <div className='flex flex-col items-center'>
                  <Img
                    className='h-[30px] w-[30px]'
                    src='images/deal-done.svg'
                    alt='dealdonepartn'
                  />
                  <Text
                    className='mt-0.5 text-[22px] text-black-900 sm:text-lg md:text-xl'
                    size='txtManropeMedium22'
                  >
                    Merchant Partnerships
                  </Text>
                  <Text
                    className='mt-[5px] text-gray-800_04 text-xl font-quicksand'
                    size='txtQuicksandRegular20Gray80004'
                  >
                    <span className='text-gray-800_04 font-normal'>Over </span>
                    <span className='text-green-800 font-normal'>100</span>
                    <span className='text-gray-800_04 font-normal'>
                      outlets, including Naivas <br />
                      Supermarket, Goodlife Pharmacy, <br />
                      and Citi Walk, have partnered with us
                    </span>
                  </Text>
                </div>

                {/* lending activity */}
                <div className='flex flex-col items-center'>
                  <Img
                    className='h-[30px] w-[30px]'
                    src='images/borrow.svg'
                    alt='borrowsvgrepoco'
                  />
                  <Text
                    className='mt-0.5 text-[22px] text-black-900 sm:text-lg md:text-xl'
                    size='txtManropeMedium22'
                  >
                    Lending Activity
                  </Text>
                  <Text
                    className='mt-[5px] text-gray-800_04 text-xl font-quicksand'
                    size='txtQuicksandRegular20Gray80004'
                  >
                    <span className='text-gray-800_04 font-quicksand font-normal'>
                      We have facilitated loans worth over <br />
                    </span>
                    <span className='text-gray-800_04 font-quicksand font-bold'>
                      $1000
                    </span>
                    <span className='text-gray-800_04 font-quicksand font-normal'>
                      to support micro-merchants <br />
                      in their business growth.
                    </span>
                  </Text>
                </div>

                {/* growth metrics */}
                <div className='flex flex-col items-center'>
                  <Img
                    className='h-[30px] w-[30px]'
                    src='images/img_growsvgrepocom_gray_900_05.svg'
                    alt='growsvgrepocom'
                  />
                  <Text
                    className='mt-0.5 text-[22px] text-black-900 sm:text-lg md:text-xl'
                    size='txtManropeMedium22'
                  >
                    Growth Metrics
                  </Text>
                  <Text
                    className='mt-[5px] text-gray-800_04 text-xl font-quicksand'
                    size='txtQuicksandRegular20Gray80004'
                  >
                    <span className='text-gray-800_04 font-quicksand font-normal'>
                      Our platform has experienced{' '}
                    </span>
                    <span className='text-gray-800_04 font-quicksand font-bold'>
                      50%
                    </span>
                    <span className='text-gray-800_04 font-quicksand font-normal'>
                      <br />
                      month-on-month growth, empowering
                      <br /> more merchants to thrive in the market.
                    </span>
                  </Text>
                </div>
              </div>

              {/* buttons to prompt the user to become a merchant */}
              <div className='flex justify-center mt-9'>
                <Button
                  onClick={() => navigate('/merchants')}
                  className='bg-gradient6 border border-black-900 border-solid cursor-pointer font-semibold leading-[normal] max-w-[280px] min-w-[280px] py-[18px] rounded-lg text-[22px] text-black-900 text-center sm:text-lg md:text-xl'
                >
                  Become a merchant
                </Button>
              </div>
            </div>
          </div>

          <Footer className='bg-white-A700 border-green-800 border-solid border-t flex items-center justify-center mt-[34px] md:px-5 w-full' />
        </div>
      </div>
    </>
  )
}

export default MerchantsPage
