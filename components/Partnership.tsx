import { partners } from "@/constants";
import Image from "next/image";
import React from "react";

const Partnership = () => {
  return (
  <section className="w-full flex flex-col items-center my-20 p-10 bg-primary bg-opacity-10 rounded-lg">
    <h1 className="section-text">We proudly Partner With some of Top 500 Companies In The World</h1>
    <p className="paragraph-text">Our platform is designed to help you develop yourself, find and land your dream job.</p>

    <div className="w-full mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center gap-5">
        {partners.map((partner) => (
            <div key={partner.company}
            className="flex items-center justify-center"
            >
                <Image src={partner.logo} alt={partner.company} width={36} height={36} />
                <h3>{partner.company}</h3>
            </div>
        ))}
    </div>
  </section>
  );
};

export default Partnership;
