import React, { useState, useEffect } from 'react'
import Card from './card'
import './MerchantsCarousel.styles.css'

import { Button, Img, Text } from 'components'

const MerchantsCarousel = props => {
  const [activeCards, setActiveCards] = useState('firstSet')
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveCards(activeCards === 'firstSet' ? 'secondSet' : 'firstSet')
    }, 3000)
    return () => clearTimeout(timer)
  }, [activeCards])

  return (
    <>
      <div className={`container ${props.className} `}>
        {activeCards === 'firstSet' && (
          // First three cards
          <>
            <Card
              animateIntoView={true}
              isVisible={activeCards === 'firstSet'}
              className='bg-gradient  justify-end card'
              imageClassName='h-22 md:h-auto w-[88%] sm:w-[100%]'
              buttonClassName='card-button'
              imageSrc='images/img_goodlifepharmacy1.png'
              imageAlt='Goodlife pharmacy'
              userDescription={props?.userdescription}
              userVisitSite={props?.uservisitsite}
              siteLink='https://www.goodlife.co.ke/'
            />
            {/* mamapesa */}
            <Card
              animateIntoView={true}
              isVisible={activeCards === 'firstSet'}
              className='bg-gradient1  justify-start card'
              imageClassName='h-[90px] md:h-auto w-[65%] sm:w-[130px] sm:h-[65px]'
              buttonClassName='bg-gradient1 card-button'
              imageSrc='images/img_mamapesa1.png'
              imageAlt='mamapesaOne'
              userDescription={props?.mamapesadescription}
              userVisitSite={props?.mamapesavisitsite}
              siteLink=' '
            />
            {/* naivas */}
            <Card
              animateIntoView={true}
              isVisible={activeCards === 'firstSet'}
              className='bg-gradient2 justify-end card'
              imageClassName='h-22 md:h-auto w-[62%]  sm:w-[80%]  mt-[19px]'
              buttonClassName=' bg-gradient3 card-button'
              imageSrc='images/img_naivassupermarketlogo.png'
              imageAlt='naivassupermark'
              userDescription={props?.naivasdescription}
              userVisitSite={props?.naivasvisitsite}
              siteLink='https://naivas.online/'
            />
          </>
        )}

        {activeCards === 'secondSet' && (
          // Second set of cards
          <>
            <Card
              animateIntoView={true}
              isVisible={activeCards === 'secondSet'}
              className='bg-gradient13 justify-end card'
              imageClassName='h-22 md:h-auto w-[65%]  sm:w-[80%]  mt-[19px]'
              buttonClassName=' bg-gradient13 card-button'
              imageSrc='images/Coca-Cola_log0.png'
              imageAlt='cocacola'
              userDescription={props?.cokeDescription}
              userVisitSite={props?.cokevisitsite}
              siteLink='https://www.coca-cola.com/ke/en'
            />

            <Card
              animateIntoView={true}
              isVisible={activeCards === 'secondSet'}
              className='bg-gradient14  justify-start card'
              imageClassName='h-[90px] md:h-auto w-[25%] sm:w-[80px] md:w-[60px] md:h-[90px] md:mt-2 sm:h-[65px]'
              buttonClassName='bg-gradient14 card-button'
              imageSrc='images/Unilever_logo.png'
              imageAlt='Unilever_logo'
              userDescription={props?.unileverDescription}
              userVisitSite={props?.unilevervisitsite}
              siteLink='https://www.unilever.com/ '
            />
            <Card
              animateIntoView={true}
              isVisible={activeCards === 'secondSet'}
              className='bg-gradient15  justify-end card'
              imageClassName='h-[90px] md:h-auto w-[40%] sm:w-[45%]'
              buttonClassName='bg-gradient15 card-button'
              imageSrc='images/Carrefour_logo.png'
              imageAlt='Carrefour_logo'
              userDescription={props?.carrefourDescription}
              userVisitSite={props?.carrefourvisitsite}
              siteLink='https://www.carrefour.ke/mafken/en/'
            />
          </>
        )}
      </div>
    </>
  )
}

MerchantsCarousel.defaultProps = {
  userdescription: <>Your one-stop solution for health and wellness</>,
  uservisitsite: 'Visit Site',
  mamapesadescription: <>Empowering entrepreneurs with financial solutions</>,
  mamapesavisitsite: 'Visit Site',
  naivasdescription: <>Your One-Stop Shop for Everyday Essentials at Naivas</>,
  naivasvisitsite: 'Visit Site',
  cokeDescription: <> Quench Your Thirst with Coca Cola's Iconic Beverages</>,
  cokevisitsite: 'Visit Site',
  unileverDescription: <>Committed to Sustainable Living and Innovation</>,
  unilevervisitsite: 'Visit Site',
  carrefourDescription: <>Your Destination for Quality and Value</>,
  carrefourvisitsite: 'Visit Site'
}

export default MerchantsCarousel
