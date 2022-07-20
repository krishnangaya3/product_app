import React from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./productList.css";

export default function Carousel(props) {
  const { productCards, displayProduct } = props;
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  function handleClick(productId) {
    console.log("id::", productId);
    displayProduct(productId);
  }

  return (
    <div className="content">
      <Slider className="slider" ref={setSliderRef} {...sliderSettings}>
        {productCards.map((card, index) => (
          <div key={index}>
            <img alt={card.title} src={card.image} width="200" height="200" />

            {/* <ul>
              {card.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul> */}
            <h2>{card.title}</h2>
            <button className="btn" onClick={() => handleClick(card.id)}>
              Buy Now
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}
