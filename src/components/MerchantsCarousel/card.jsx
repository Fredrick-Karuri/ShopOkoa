import React from 'react'
import { Button, Img, Text } from 'components'
import { useSpring, animated, config } from 'react-spring'

const Card = ({
  className,
  imageClassName,
  buttonClassName,
  imageSrc,
  imageAlt,
  userDescription,
  userVisitSite,
  siteLink,
  isVisible
}) => {
  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',

    config: config.easeInOutCubic
  })

  const handleButtonClick = () => {
    window.open(siteLink, '_blank')
  }

  return (
    <animated.div
      className={`bg-gradient flex flex-col items-center justify-end p-4 rounded-lg shadow-bs  min-h-[300px] h-auto ${className}`}
      style={{ ...animationProps, width: '100%' }}
    >
      <Img
        className={`h-16 md:h-auto mt-6 object-cover w-11/12 sm:w-full ${imageClassName}`}
        src={imageSrc}
        alt={imageAlt}
      />
      <Text className='card-description' size='txtQuicksandRegular20'>
        {userDescription}
      </Text>
      <Button
        onClick={handleButtonClick}
        className={`bg-gradient border border-black-900 border-solid cursor-pointer font-manrope font-semibold leading-normal min-w-[160px] mt-8 py-2 rounded-lg text-lg md:text-xl text-black-900 text-center ${buttonClassName}`}
      >
        {userVisitSite}
      </Button>
    </animated.div>
  )
}

export default Card
