import React from "react";
import Image from "next/image";

const Pricing = () => {
  return (
  <section className="w-full flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16 lg:justify-between my-20 shadow-2xl p-8 rounded-lg bg-primary bg-opacity-10">
    <div className="flex flex-col items-center lg:items-end justify-center min-w-[400px] gap-3">
      <Image src="/assets/images/paycheck.svg" alt="svg" width={200} height={250} />
      <div className="flex items-center justify-start gap-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:shadow-lg cursor-pointer">
        <h3 className="section-text">Market Pricing</h3>
        <Image src="/assets/images/right-arrow.svg" alt="right-arrow" width={30} height={15} />
      </div>
      <div className="flex items-center justify-start gap-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:shadow-lg cursor-pointer">
        <h3 className="section-text">Job Matching</h3>
        <Image src="/assets/images/right-arrow.svg" alt="right-arrow" width={30} height={15} />
      </div>
      <div className="flex items-center justify-start gap-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:shadow-lg cursor-pointer">
        <h3 className="section-text">HR Technology Integration</h3>
        <Image src="/assets/images/right-arrow.svg" alt="right-arrow" width={30} height={15} />
      </div>
    </div>

    <Image src="/assets/images/vertical-divider.svg" alt="vertical divider" width={15} height={220}
    className="h-full hidden lg:block"
    />

    <Image src="/assets/images/horizontal-divider.svg" alt="horizontal divider" width={15} height={220}
    className="w-full  lg:hidden"
    />

    <div className="flex flex-col items-start justify-start">
      <h3 className="title-text">Pricing</h3>
      <h1 className="head-text">Make Decisions With Confidence</h1>
      <p className="subsection-text"><span className="text-primary">Job Finder</span> delivers faster decision making, and new insights into your pay practices. You can explore new intersections between market, company, and employee data with enhanced data integrations. With powerful tools and streamlined workflows, you can price jobs quickly and access the information you need to get pay right.</p>
    </div>
  </section>
  );
};

export default Pricing;
