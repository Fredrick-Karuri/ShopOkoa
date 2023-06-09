import React from 'react'
import Card from './card'
import './MerchantsHifiCarousel.styles.css';

import { Button, Img, Text } from 'components'

const MerchantsHifiCarousel = props => {
  return (
    <>
      <div className={`container ${props.className} `}> 
        {/* good life pharmacy */}
   
        <Card
          animateIntoView={true}
          className='bg-gradient  justify-end card'
          imageClassName='h-20 md:h-auto w-[88%] sm:w-[100%]'
          // textClassName='mt-[71px] w-[77%] sm:w-full'
          buttonClassName='card-button'
          imageSrc='images/img_goodlifepharmacy1.png'
          imageAlt='Goodlife pharmacy'
          userDescription={props?.userdescription}
          userVisitSite={props?.uservisitsite}
        />

        {/* mamapesa */}
   
        <Card
          animateIntoView={true}
          className='bg-gradient1  justify-start card'
          imageClassName='h-[90px] md:h-auto w-[65%] sm:w-[130px] sm:h-[65px]'
          // textClassName='mt-[33px] w-[94%] sm:w-full'
          buttonClassName='bg-gradient1 card-button'
          imageSrc='images/img_mamapesa1.png'
          imageAlt='mamapesaOne'
          userDescription={props?.mamapesadescription}
          userVisitSite={props?.mamapesavisitsite}
        />

        {/* naivas */}
     
        <Card
          animateIntoView={true}
          className='bg-gradient2 justify-end card'
          imageClassName='h-20 md:h-auto w-[62%] sm:w-[100%] sm:h-[60] mt-[19px]'
          // textClassName='mt-[66px] w-[86%] sm:w-full'
          buttonClassName='bg-gradient3 card-button'
          imageSrc='images/img_naivassupermarketlogo.png'
          imageAlt='naivassupermark'
          userDescription={props?.naivasdescription}
          userVisitSite={props?.naivasvisitsite}
        />

      
      </div>
    </>
  )
}

MerchantsHifiCarousel.defaultProps = {
  userdescription: <>Your one-stop solution for health and wellness</>,
  uservisitsite: 'Visit Site',
  mamapesadescription: <>Empowering entrepreneurs with financial solutions</>,
  mamapesavisitsite: 'Visit Site',
  naivasdescription: <>Shop for all your grocery needs with convenience</>,
  naivasvisitsite: 'Visit Site'
}

export default MerchantsHifiCarousel
