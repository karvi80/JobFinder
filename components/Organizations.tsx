"use client"

import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { organizations } from "@/constants";
import Image from "next/image";

const Organizations = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden mt-20 p-10 bg-primary bg-opacity-10 rounded-lg">
        <h1 className="head-text my-10">Organizations Getting It Right</h1>
      <Carousel
        autoPlay
        infiniteLoop
        centerMode
        interval={2000}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        centerSlidePercentage={10}
        transitionTime={2000}
      >
        {organizations.map((organization) => (
          <div key={organization.company}
          className="w-[80px] h-[46px] flex items-center justify-center m-2"
          >
            <Image src={organization.logo} alt={organization.company} width={80} height={46} 
            className="w-full h-full"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Organizations;
