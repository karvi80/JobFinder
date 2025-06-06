"use client"

import React, { useEffect, useState } from "react";
import { testimonials } from "@/constants";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const getCenterSlidePercentage = () => {
    if (windowWidth >= 1200) return 40;
    if (windowWidth >= 768) return 60;
    if (windowWidth >= 640) return 80;
    return 100;
  };

  return (
    <div className="w-full mt-20 p-10 bg-primary bg-opacity-10 rounded-lg">
      <Carousel
        autoPlay
        infiniteLoop
        centerMode
        centerSlidePercentage={getCenterSlidePercentage()}
        interval={5000}
        showArrows={false}
        showStatus={false}
        emulateTouch={true}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.speaker}
            image={testimonial.avatar}
            speaker={testimonial.speaker}
            category={testimonial.category}
            comment={testimonial.comment}
            
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
