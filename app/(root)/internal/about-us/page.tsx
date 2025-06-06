import React from "react";
import Image from "next/image"

const AboutUs = () => {
  return (
  <div className="w-full h-screen mb-[100px] lg:mb-10 flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-start p-10 mt-10 w-full h-full">
        <Image src="/assets/images/networking.png" alt="logo" fill 
        className="absolute inset-0 object-fill opacity-50"
        />

        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-gray-100/25 via-white/100 to-gray-100/25  z-10 p-4 gap-2 rounded-2xl">
            <div className="flex flex-col items-center justify-center py-6">
                <h1 className="title-text">About <span className="text-primary"> Job Finder</span></h1>
                <p className="text-center paragraph-text">
                  Welcome to <span className="text-primary">Job Find</span>, the world's largest professional network with more than
                 1 billion members in more than 200 countries and territories worldwide.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center p-6">
                <h1 className="title-text">Our Mission</h1>
                <p className="text-center paragraph-text">
                  Our mission is simple: to connect the world's professionals to make them more productive and successful.
                </p>
             </div>

             <div className="flex flex-col items-center justify-center p-6">
             <h1 className="title-text">Who are we?</h1>
                <p className="text-center paragraph-text">
                  Today, <span className="text-primary">Job Finder</span> leads a diversified business with revenues from membership subscriptions, advertising sales and recruitment solutions under the leadership of Karim El Mansouri. In December 2016, Microsoft completed its acquisition of <span className="text-primary">Job Finder</span>, bringing together the world’s leading professional cloud and the world’s leading professional network.</p>
             </div>
        </div>

    </div>
  </div>
  );
};

export default AboutUs;
