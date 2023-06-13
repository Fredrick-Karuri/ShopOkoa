import React from 'react'

import { Button, Img, Text } from 'components'
import { useNavigate } from 'react-router-dom'

const Footer = props => {
  const navigate = useNavigate()
  const [isSmallScreen, setIsSmallScreen] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <footer className={`${props.className} py-4`}>
        <div className='flex flex-col items-center justify-center mb-3.5 ml-[80px] mr-[66px] mt-[20px] w-[91%] sm:w-[100]'>
          <div className='flex flex-col items-center justify-center w-full'>
            <div className='relative flex md:flex-col flex-row gap-12 md:gap-5 items-start justify-start mr-[158px] w-[87%] md:w-full'>
              {/* shopOkoa logo */}

              {/* centre the logo */}

              <Img
                className='flex flex-row  justify-center  md:h-[41px] h-auto object-cover w-[15%] md:w-[50%] sm:w-[60%] md:ml-20'
                src='images/img_asset14shopokoa.png'
                alt='image of the ShopOkoa logo'
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              {/* navigation and policies should be in a row when in a small device */}
              {/* Navigation section */}

              <div className='flex flex-row gap-[260px] md:gap-[100px] sm:gap-[50px] items-start justify-start sm:ml-[80px]  md:ml-[80px] ml-[80px] sm:ml-20 sm:w-[60%] w-full '>
                <div className='flex flex-col items-start justify-start  my-5'>
                  <Text
                    className='text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl'
                    size='txtManropeSemiBold22Bluegray90002'
                  >
                    Navigation
                  </Text>

                  <ul className='flex flex-col gap-[9px] items-start justify-start'>
                    <li>
                      <Text
                        className='text-blue_gray-800 text-xl'
                        size='txtQuicksandRegular20Bluegray800'
                        onClick={() => navigate('/customers')}
                      >
                        Customers
                      </Text>
                    </li>
                    <li>
                      <Text
                        className='text-blue_gray-800 text-xl'
                        size='txtQuicksandRegular20Bluegray800'
                        onClick={() => navigate('/merchantshifi')}
                      >
                        Merchants
                      </Text>
                    </li>
                    <li>
                      <Text
                        className='text-blue_gray-800 text-xl'
                        size='txtQuicksandRegular20Bluegray800'
                        onClick={() => navigate('/about')}
                      >
                        About
                      </Text>
                    </li>
                  </ul>
                </div>

                {/* Policies section */}
                <div className='flex flex-col items-start justify-start md:ml-[80px] sm:ml-[20px] my-5'>
                  <Text
                    className='text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl'
                    size='txtManropeSemiBold22Bluegray90002'
                  >
                    Policies
                  </Text>

                  <ul className='flex flex-col gap-[9px] items-start justify-start'>
                    <li>
                      <Text
                        className={`text-blue_gray-800 text-xl ${
                          isSmallScreen ? 'terms-small' : ''
                        }`}
                        size='txtQuicksandRegular20Bluegray800'
                        onClick={() => navigate('')}
                      >
                        {isSmallScreen ? 'T&Cs' : 'Terms and conditions'}
                      </Text>
                    </li>
                    <li>
                      <Text
                        className={`text-blue_gray-800 text-xl ${
                          isSmallScreen ? 'terms-small' : ''
                        }`}
                        size='txtQuicksandRegular20Bluegray800'
                        onClick={() => navigate('')}
                      >
                        {isSmallScreen ? 'Policies' : 'Privacy Policies'}
                      </Text>
                    </li>
                    <li>
                      <Text
                        className='text-blue_gray-800 text-xl'
                        size='txtQuicksandRegular20Bluegray800'
                        onClick={() => navigate('/faqs')}
                      >
                        FAQs
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>
              {/* contact us section */}
              <div className='flex  flex-col items-start justify-start  md:ml-[80px] ml-[20px] my-5'>
                <Text
                  className='text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl'
                  size='txtManropeSemiBold22Bluegray90002'
                >
                  Get in touch
                </Text>

                <ul className='flex flex-col gap-[9px] items-start justify-start'>
                  <li>
                    <Button
                      className='bg-transparent cursor-pointer font-quicksand leading-[normal] mb-[3px] min-w-[284px] md:w-full text-blue_gray-800 text-center text-xl'
                      mailto='dukatechsolutions@gmail.com'
                    >
                      dukatechsolutions@gmail.com
                    </Button>
                  </li>
                  <li>
                    <Button
                      onClick={() => navigate('/contactus')}
                      className='bg-transparent cursor-pointer font-quicksand leading-[normal] mb-[5px] min-w-[102px] md:w-full text-blue_gray-800 text-center text-xl'
                    >
                      Contact Us
                    </Button>
                  </li>
                  <li>
                    <Text
                      className='text-blue_gray-800 text-xl'
                      size='txtQuicksandRegular20Bluegray800'
                    >
                      Partner with us
                    </Text>
                  </li>
                </ul>
                {/* social media section */}
                {/* add space between the icons and align them a */}
                <div className='flex flex-row items-center justify-start md:ml-0 mt-5 md:flex-col sm:flex-col sm:items-start sm:justify-start '>
                  {/* Social media icons */}
                  <div className='flex flex-row gap-[20px] items-start justify-start '>
                    <Img
                      className='h-[37px]'
                      src='images/img_facebooksquare.svg'
                      alt='facebooksquare'
                    />
                    <Img
                      className='h-[37px]'
                      src='images/img_twitter.svg'
                      alt='twitter'
                    />
                    <Img
                      className='h-[37px]'
                      src='images/img_linkedinsvgrepocom.svg'
                      alt='linkedinsvgrepo'
                    />
                    <Img
                      className='h-[37px]'
                      src='images/img_instagram.svg'
                      alt='instagram'
                    />
                  </div>
                  {/* Copyright text */}
                  <div className='flex flex-col items-start justify-start md:ml-[0] ml-[-750px]  md:w-full common-column-list md:mt-8 sm:mt-8'>
                    <Text
                      className='text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl'
                      size='txtManropeSemiBold22Bluegray90002'
                    >
                      © 2023 ShopOkoa. All rights reserved
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* footer with facebook,  twitter, linkedin, instagram and copyrights section   */}

            {/* <div className=' absolute bottom-0  flex flex-col items-start justify-start md:ml-[0] ml-[269px] w-[75%] md:w-full  common-column-list'>
              <Text
                className='text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl'
                size='txtManropeSemiBold22Bluegray90002'
              >
                © 2023 ShopOkoa. All rights reserved
              </Text>
            </div> */}

            {/* <ul className='flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[269px] w-[77%] md:w-full common-column-list'> */}

            {/* <li>
                <div className='flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[154px]'>
                  <Text
                    className='sm:mt-0 mt-[18px] text-base text-black-900'
                    size='txtQuicksandRegular16Black900'
                  >
                    © 2023 ShopOkoa. All rights reserved
                  </Text>
                  <div className='flex flex-row items-center justify-between w-[37%] sm:w-full'>
                    <Img
                      className='h-9 w-9'
                      src='images/img_facebooksquare.svg'
                      alt='facebooksquare'
                    />
                    <Img
                      className='h-[37px]'
                      src='images/img_twitter.svg'
                      alt='twitter'
                    />
                    <Img
                      className='h-[45px] w-[45px]'
                      src='images/img_linkedinsvgrepocom.svg'
                      alt='linkedinsvgrepo'
                    />
                    <Img
                      className='h-9 w-9'
                      src='images/img_instagram.svg'
                      alt='instagram'
                    />
                  </div>
                </div>
              </li> */}
            {/* </ul> */}
          </div>
        </div>
      </footer>
    </>
  )
}

Footer.defaultProps = {}

export default Footer
