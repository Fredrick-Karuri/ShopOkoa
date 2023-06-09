import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomersCarousel = () => {
    return (
      <Carousel>
        <div>
          <img src="images/img_thinkingfacebro.svg" alt="Thinking face" />
          <p className="legend">
            Find a product you love but
            don't have enough money
            to purchase.
        </p>
        </div>
        <div>
          <img src="images/img_new_idea-bro.svg" alt="New Idea" />
          <p className="legend">
            Select the flexible payment
            option that allows you to
            buy without needing the
            full amount upfront.
        </p>
        </div>
        <div>
          <img src="images/img_undraw_enter.svg" alt="Enter details" />
          <p className="legend">
            Go to a partnered shop
            where ShopOkoa is
            accepted.
          </p>
        </div>
        <div>
          <img src="images/img_online_wishes_list-bro.svg" alt="Wishes" />
          <p className="legend">
            Buy the desired product
            using ShopOkoa as the
            payment method.
          </p>
        </div>
        <div>
          <img src="images/img_undraw_stripe_payments.svg" alt="Stripe payments" />
          <p className="legend">
            Complete the payment
            transaction conveniently
            through the ShopOkoa Till
          </p>
        </div>
        <div>
          <img src="images/img_plain-credit-card-bro.svg" alt="Credit card" />
          <p className="legend">
            Repay the loan within 30
            days, ensuring a hassle-
            free experience.
          </p>
        </div>        
      </Carousel>
    );
  };

  export default CustomersCarousel;

  