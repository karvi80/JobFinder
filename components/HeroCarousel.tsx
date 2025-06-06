"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const HeroCarousel = () => {
  const heroImages = [
    { imgUrl: "/assets/images/quote-1.png", alt: "quote-1" },
    { imgUrl: "/assets/images/quote-2.png", alt: "quote-2" },
    { imgUrl: "/assets/images/quote-3.png", alt: "quote-3" },
    { imgUrl: "/assets/images/quote-4.png", alt: "quote-4" },
    { imgUrl: "/assets/images/quote-5.png", alt: "quote-5" },
  ];

  return (
    <div className="hero-carousel max-xl:hidden">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
          key={image.alt}
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain"
          />
        ))}
      </Carousel>

      <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        alt="hand arrow"
        height={175}
        width={175}
        className="max-xl:hidden absolute -left-[15%] bottom-[-5%] z-10"
      />
    </div>
  );
};

export default HeroCarousel;
