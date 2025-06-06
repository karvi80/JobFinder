import React from "react";
import Image from "next/image";

const Equity = () => {
    return (
        <section className="w-full flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-16 p-10 my-20">
            <div className="flex flex-col items-start justify-center">
                <h3 className="title-text">Equity</h3>
                <h1 className="head-text">Make Pay Fair</h1>
                <p className="subsection-text">With <span className="text-primary">Job Finder</span>® gives you the insights you need to easily balance internal pay equity and external competitiveness. You can perform a deep analysis with a few clicks and quickly identify equity issues, flight risks, and other real-time insights that help you get pay right and win the war for talent.</p>
            </div>

             <Image src="/assets/images/vertical-divider.svg" alt="vertical divider" width={15} height={220}
                className="h-full hidden lg:block"
                />
            
                <Image src="/assets/images/horizontal-divider.svg" alt="horizontal divider" width={15} height={220}
                className="w-full  lg:hidden"
                />

            <div className="flex flex-col items-center lg:items-start justify-center min-w-[400px] gap-3">
                  <Image src="/assets/images/equity.svg" alt="equity" width={200} height={250} />
                  <div className="flex items-center justify-start gap-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:shadow-lg cursor-pointer">
                    <h3 className="section-text">Pay Equity Analytics</h3>
                    <Image src="/assets/images/right-arrow.svg" alt="right-arrow" width={30} height={15} />
                  </div>
                  <div className="flex items-center justify-start gap-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:shadow-lg cursor-pointer">
                    <h3 className="section-text">Merit Modeling</h3>
                    <Image src="/assets/images/right-arrow.svg" alt="right-arrow" width={30} height={15} />
                  </div>
                  <div className="flex items-center justify-start gap-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:shadow-lg cursor-pointer">
                    <h3 className="section-text">Total Compensation Statement</h3>
                    <Image src="/assets/images/right-arrow.svg" alt="right-arrow" width={30} height={15} />
                  </div>
                </div>
        </section>
    );
};

export default Equity;
