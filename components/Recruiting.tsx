import React from "react";
import Image from "next/image";

const Recruiting = () => {
  return (
     <section className="w-full flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-16 p-10 my-20">
                <div className="flex flex-col items-start justify-center">
                    <h3 className="title-text">Recruiting</h3>
                    <h1 className="head-text">Win the War for Talent</h1>
                    <p className="subsection-text">Attracting and retaining top performers is easy with <span className="text-primary">Job Finder</span>. We empower you with the tools and data you need to pay market competitive salaries and ensure your employees are paid fairly.</p>
                </div>
    
                 <Image src="/assets/images/vertical-divider.svg" alt="vertical divider" width={15} height={220}
                    className="h-full hidden lg:block"
                    />
                
                    <Image src="/assets/images/horizontal-divider.svg" alt="horizontal divider" width={15} height={220}
                    className="w-full  lg:hidden"
                    />
    
                <div className="flex flex-col items-center lg:items-start justify-center min-w-[400px] gap-3">
                      <Image src="/assets/images/recruiting.svg" alt="recruiting" width={200} height={250} />
                      <div className="flex items-center justify-start gap-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:shadow-lg cursor-pointer">
                        <h3 className="section-text">Competitive Compensation</h3>
                        <Image src="/assets/images/right-arrow.svg" alt="right-arrow" width={30} height={15} />
                      </div>
                      <div className="flex items-center justify-start gap-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:shadow-lg cursor-pointer">
                        <h3 className="section-text">Labor Cost Forecasting</h3>
                        <Image src="/assets/images/right-arrow.svg" alt="right-arrow" width={30} height={15} />
                      </div>
                      <div className="flex items-center justify-start gap-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:shadow-lg cursor-pointer">
                        <h3 className="section-text">Reporting</h3>
                        <Image src="/assets/images/right-arrow.svg" alt="right-arrow" width={30} height={15} />
                      </div>
                    </div>
            </section>
  );
};

export default Recruiting;
