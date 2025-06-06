import Image from "next/image";
import React from "react";

const Compensation = () => {
  return (
  <section className="w-full flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between my-20">
    <div className="flex flex-col items-start justify-center">
        <h3 className="title-text">Compensation Management</h3>
        <h1 className="head-text">Price With Confidence</h1>
        <p className="subsection-text">With <span className="text-primary">Job Finder</span>® you get the data and insights you need to make pay decisions with confidence. Our solution addresses the entire compensation process, helping you quickly price jobs with unparalleled accuracy and analyze your compensation pay practices.</p>
        <div className="w-full flex items-center justify-center gap-8 mt-8">
            <button className="py-4 px-4 bg-primary text-white rounded-[30px] text-primary text-md font-semibold">See It In Action</button>
            <button className="py-4 px-4 bg-white border-2 border-primary rounded-[30px] text-primary text-md font-semibold">Price a Job</button>
        </div>
    </div>

        <div className="flex-shrink-0 min-w-[460px] min-h-[460px] mt-10 lg:mt-0">
            <Image src="/assets/images/salary-hero.png" alt="salary hero" width={560} height={560}
            className="w-full h-full"
             />
        </div>
    </section>
  );
};

export default Compensation;
