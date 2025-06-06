import Image from "next/image";
import React from "react";

const SaaryStructure = () => {
  return (
     <section className="w-full flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16 lg:justify-between my-20 shadow-2xl p-8 rounded-lg bg-primary bg-opacity-10">
        <div className="flex flex-col items-center lg:items-end justify-center min-w-[400px] gap-8">
          <Image src="/assets/images/gear.svg" alt="svg" width={200} height={250} />
          <div className="flex items-center justify-start gap-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:shadow-lg cursor-pointer">
            <h3 className="section-text">Salary Structure Wizard</h3>
            <Image src="/assets/images/right-arrow.svg" alt="right-arrow" width={30} height={15} />
          </div>
          <div className="flex items-center justify-start gap-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:shadow-lg cursor-pointer">
            <h3 className="section-text">Job Range Wizard</h3>
            <Image src="/assets/images/right-arrow.svg" alt="right-arrow" width={30} height={15} />
          </div>
          <div className="flex items-center justify-start gap-2 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:shadow-lg cursor-pointer">
            <h3 className="section-text">Onboarding</h3>
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
          <h3 className="title-text">Pay Framework</h3>
          <h1 className="head-text">Maintain Salary Structures</h1>
          <p className="subsection-text">Create, edit, and model salary structures with <span className="text-primary">Job Finder</span>. Accurately reflect and easily manage your pay practices across job families, departments, or divisions. Create a new structure in just three clicks, based on market data or an existing structure in your library. Quickly visualize proposed structure changes using flexible modeling tools.</p>
        </div>
      </section>
  );
};

export default SaaryStructure;
