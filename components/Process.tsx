import Image from "next/image";
import React from "react";

const Process = () => {
  return (
  <section className="w-full items-center justify-around flex flex-col md:flex-row p-10 gap-5 shadow-2xl rounded-lg">
    <div>
        <h1 className="subhead-text">Build your Professional Profile</h1>
        <p className="section-text">Level up your search with 3 easy steps</p>
        <h4 className="subsection-text"><span className="font-bold">1.</span>Create an Account</h4>
        <h4 className="subsection-text"><span className="font-bold">2.</span>Create you professional Resume</h4>
        <h4 className="subsection-text"><span className="font-bold">3.</span>Search & Apply</h4>
    </div>

    <div className="hidden sm:block">
        <Image src="/assets/images/equality.jpg" alt="hero" 
        height={320} width={320}
        className="w-full h-auto"
        />
    </div>
  </section>
  );
};

export default Process;
