import React from "react";
import Image from "next/image";
import { platforms } from "@/constants";

const Features = () => {
  return (
  <section className="relative w-full mt-20 p-10 flex flex-col-reverse gap-5 lg:flex-row items-center justify-between shadow-2xl rounded-lg cursor-pointer">
        <Image src="/assets/images/networking.png" alt="network" 
        width={300} height={300} 
        className="absolute inset-0 w-full h-full -z-10 object-fit opacity-20"
        />
    <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center">
            <div className="felx flex-col items-center justify-center text-center p-4 sm:w-3/4 rounded-lg bg-white shadow-2xl">
            <h1 className="head-text text-primary">+100K</h1>
            <h4 className="section-text">Best rating Courses with certificate, selected from the most popular platforms</h4>
            <p className="company-name">From critical skills to technical topics, All the Tools you need in one place</p>
            </div>
        </div>

        <div className="flex items-center justifyu-center flex-wrap gap-4 mt-6">
            {platforms.map((platform) => (
                <div key={platform.platform}
                className="flex items-center justify-center gap-1"
                >
                    <Image src={platform.logo} alt={platform.platform} width={36} height={36}/>
                    <p>{platform.platform}</p>
                </div>
            ))}
        </div>
    </div>

    <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center justify-center text-center">
            <h2 className="title-text">We Provide many features <br /> to help you improve yourself</h2>
            <p className="sub-company-name">From online courses with certificate at discounted prices, to real life projects to interview preparation</p>
        </div>

            <Image src="/assets/images/studying.jpg" alt="studying" width={280} height={280} 
            className="w-full h-full object-fit rounded-lg shadow-2xl"
            />
    </div>
  </section>
  );
};

export default Features;
