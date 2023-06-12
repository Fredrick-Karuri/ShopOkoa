import React from 'react'

import { Button, Img, Text } from 'components'
import Footer from 'components/Footer'
import Header from 'components/Header'

const ContactusPage = () => {
  return (
    <>
      <div className='bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full'>
        <Header className='bg-white-A700 border-b border-green-800 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full' />
        <div className='bg-gradient5 flex sm:flex-col md:flex-row gap-[21px] items-center justify-between p-[40px] md:px-10 sm:px-5 w-full'>
          {/* Text on the left side of the hero section */}
          <Text
            className='md:text-5xl text-7xl text-blue_gray-900_01 tracking-[2.88px]'
            size='txtManropeExtraBold72'
          >
            Get in touch
          </Text>
          {/* Illustration */}
          <Img
            className='h-[290px] mb-5 sm:mt-0 mt-[23px]'
            src='images/contact_us.svg'
            alt='undrawcontactus'
          />
        </div>

        <div className='bg-white-A700 flex flex-col items-center justify-end outline-gray-500_01 p-[27px] sm:px-5 w-full'>
          <div className='flex flex-col items-center justify-start max-w-[1059px] mt-[61px] mx-auto md:px-5 w-full'>
            <div className='flex md:flex-col flex-row md:gap-10 items-start justify-between w-full'>
              <div className='flex flex-col items-start justify-start w-[50%] md:w-full'>
                <div className=' flex flex-col items-start justify-start md:h-[174px] h-[252px] relative w-[89%] sm:w-full'>
                  <Text
                    className=' absolute inset-x-[0] mx-auto md:text-5xl text-[64px] text-black-900 top-[0] tracking-[2.56px]'
                    size='txtManropeExtraBold62'
                  >
                    <>We’re here to listen. </>
                  </Text>
                  <Text
                    className=' sm:bottom-[-40px]  absolute bottom-[0] inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-black-900_7f'
                    // sm:bottom-[-60px]  absolute bottom-[0] inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-black-900_7f'
                    size='txtQuicksandMedium26'
                  >
                    <>Send us your feedback, queries and suggestions</>
                  </Text>
                </div>
                <Img
                  className='h-[376px] mt-[25px]'
                  src='images/img_questions1.svg'
                  alt='feedbackOne'
                />
                {/* responsive code for location section with the location log, alongside location text and below it three texts, Chandaria Business & Innovation Center: Kenyatta University and Nairobi, Kenya*/}
                <div className='flex flex-row gap-3 items-start justify-start mt-14 w-[37%] sm:w-[40%] md:w-full'>
                  <Img
                    className=' h-[42px] w-[50px] sm:h-[40px] sm:w-[40px] md:h-[64px] md:w-[64px]'
                    src='images/img_location.svg'
                    alt='location'
                  />

                  <Text
                    className='sm:text-[29px] md:text-[31px] text-[33px] text-black-900 tracking-[0.66px]'
                    // size='txtManropeExtraBold33'
                    size='txtQuicksandMedium26'
                  >
                    Location
                  </Text>
                </div>

                <div className='flex flex-col font-quicksand items-start justify-start mt-4'>
                  <Text
                    className='md:text-2xl sm:text-[22px] text-[26px] text-black-900_b2'
                    size='txtQuicksandMedium26'
                  >
                    Chandaria Business & Innovation Center
                  </Text>
                  <Text
                    className='mt-[18px] md:text-2xl sm:text-[22px] text-[26px] text-black-900_b2'
                    size='txtQuicksandMedium26'
                  ></Text>
                  <Text
                    className='mt-[] md:text-2xl sm:text-[22px] text-[26px] text-black-900_b2'
                    size='txtQuicksandMedium26'
                  >
                    Kenyatta University
                  </Text>
                  <Text
                    className='mt-[15px] md:text-2xl sm:text-[22px] text-[26px] text-black-900_b2'
                    size='txtQuicksandMedium26'
                  >
                    Nairobi, Kenya
                  </Text>
                </div>
              </div>
              {/* form to reach us */}
              <div className='bg-white-A700 flex flex-col items-center justify-start md:mt-0 mt-[70px] w-[43%] mr-[] md:w-full'>
                <Text
                  className='md:text-2xl text-3xl text-blue_gray-900_01 tracking-[2.88px]'
                  size='txtManropeExtraBold32'
                >
                  Send us a message
                </Text>
                <div className='flex flex-col items-start justify-start w-full'>
                  {/* form with 4 input fields name,mail, phone, and message(should be a bit longer in height) and a button with the text send message  */}

                  <form className='flex flex-col items-start justify-start mt-[50px] w-full'>
                    <input
                      className='bg-[#F6F6F6] h-[50px] p-[10px]  w-[100%] rounded-[5px]'
                      type='text'
                      placeholder='Name'
                    />
                    <input
                      className='bg-[#F6F6F6] h-[50px] p-[10px] mt-[10px] w-[100%] rounded-[5px]'
                      type='text'
                      placeholder='Email'
                    />
                    <input
                      className='bg-[#F6F6F6] h-[50px] p-[10px] mt-[10px] md:m  w-[100%] rounded-[5px]'
                      type='text'
                      placeholder='Phone'
                    />
                    <textarea
                      className='bg-[#F6F6F6] h-[200px] p-[10px] mt-[10px] w-[100%]'
                      type='text'
                      placeholder='Message'
                    />
                    {/* lets align this the right not left as is now  */}
                    <button className='bg-[#F6F6F6] h-[50px] p-[10px] mt-[10px] w-[50%] md:w-[100%] rounded-[5px]'>
                      Send Message
                    </button>
                  </form>

                  {/* end of form */}

                  {/*code for  contact section with email and phone number having a logo of each alongside the text */}

                  <div className='md:ml-[0] ml-[74px] mt-[375px] sm:mt-[40px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[0.72px]'>
                    <Text
                      // className='md:text-2xl sm:text-[22px] text-[26px] text-black-900_b2'
                      className='sm:text-[29px] md:text-[31px] text-[33px] text-black-900 tracking-[0.66px]'
                      size='txtQuicksandMedium26'
                    >
                      Reach us
                    </Text>
                  </div>

                  <div className='flex flex-row font-quicksand gap-[30px] items-end justify-start mt-[17px] w-[58%] md:w-full'>
                    <Img
                      className='h-[30px] w-[30px] sm:mt-[ sm:mt-0 mt-0.5'
                      src='images/img_mail.svg'
                      alt='mail'
                    />
                    <Text
                      className='mt-1.5 md:text-2xl sm:text-[20px] text-[26px] text-black-900_b2'
                      size='txtQuicksandMedium26'
                    >
                      dukatechsolutions@gmail.com
                    </Text>
                  </div>
                  <div className='flex flex-row font-quicksand gap-[30px] items-end justify-start mt-[17px] w-[58%] md:w-full'>
                    <Img
                      className=' h-[30px] w-[30px] sm:mt-[ sm:mt-0 mt-0.5'
                      src='images/img_whatsapp.svg'
                      alt='whatsapp'
                    />
                    <Text
                      className='mt-1.5 md:text-2xl sm:text-[22px] text-[26px] text-black-900_b2'
                      size='txtQuicksandMedium26'
                    >
                      +254743800904
                    </Text>
                  </div>

                  <div></div>

                  {/* end of contact section */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className='bg-white-A700 border-green-800 border-solid border-t flex items-center justify-center md:px-5 w-full' />
      </div>
    </>
  )
}

export default ContactusPage
