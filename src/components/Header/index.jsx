import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Button, Img, Text } from 'components'

const Header = props => {
  const navigate = useNavigate()

  return (
    <>
      <header className={`${props.className} mobile-menu `}>
        <Img
          className='common-pointer h-11 md:h-auto mb-[7px] sm:ml-[0] ml-[42px] sm:mt-0 mt-[22px] object-cover w-[10%] sm:w-full'
          src='images/img_asset14shopokoa.png'
          alt='shopokoa logo'
          onClick={() => navigate('/landing')}
        />
        <Text
          className='common-pointer mb-[17px] sm:ml-[0] ml-[346px] sm:mt-0 mt-[31px] text-blue_gray-900_02 text-lg'
          size='txtManropeSemiBold18Bluegray90002'
          onClick={() => navigate('/about')}
        >
          About
        </Text>
        <Text
          className='common-pointer mb-[17px] sm:ml-[0] ml-[41px] sm:mt-0 mt-[31px] text-blue_gray-900_02 text-lg'
          size='txtManropeSemiBold18Bluegray90002'
          onClick={() => navigate('/customers')}
        >
          Customers
        </Text>
        <Text
          className='common-pointer mb-[17px] sm:ml-[0] ml-[41px] sm:mt-0 mt-[31px] text-blue_gray-900_02 text-lg'
          size='txtManropeSemiBold18Bluegray90002'
          onClick={() => navigate('/merchantshifi')}
        >
          Merchants
        </Text>
        <Text
          className='common-pointer mb-[17px] sm:ml-[0] ml-[41px] sm:mt-0 mt-[31px] text-blue_gray-900_02 text-lg'
          size='txtManropeSemiBold18Bluegray90002'
          onClick={() => navigate('/faqs')}
        >
          FAQs
        </Text>
        <Button className='bg-gradient4  border border-black-900 border-solid cursor-pointer font-manrope font-semibold leading-[normal] mb-[11px] min-w-[120px] sm:ml-[0] ml-[88px] mr-[116px] sm:mt-0 mt-[25px] py-2 rounded-[19px] text-base text-black-900 text-center'>
          Get Started
        </Button>
      </header>
    </>
  )
}

Header.defaultProps = {}

export default Header
