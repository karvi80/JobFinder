import React from "react";
import Image from "next/image";

const BrandPolicy = () => {
  return (
  <div className="w-full flex flex-col items-center">
    <div className="w-full h-[400px] flex flex-col-reverse lg:flex-row mt-10 lg:mt-0 items-center justify-between">
      <div className="flex-1 h-full flex flex-col items-between justify-between">
        <div className="flex h-full w-full lg:w-2/3 flex-col items-center justify-center">
        <h1 className="head-text text-center"><span className="text-primary">Job Finder</span> Branding Guidelines</h1>
        </div>
        <div className="w-full hidden lg:block h-[100px] bg-primary bg-opacity-20"></div>
      </div>
      <div className="w-2/3 lg:flex-[0.45] h-full">
        <Image src="/assets/images/brand-strategy.jpg" alt="brand strategy" width={350} height={350}
        className="w-full h-full" 
        />
      </div>
    </div>

    <div className="w-full flex items-center justify-center p-8">
      <h3 className="section-text">If you're looking to talk about JobFinder for your business, or use JobFinder branding, here's a helpful guide to show you how.</h3>
    </div>

    <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around">
      <div className="flex-[0.1] h-full flex items-start justify-end py-5">
        <h2 className="text-3xl font-bold">Legal</h2>
      </div>

      <div className="flex-[0.6] flex flex-col items-center md:items-start justify-center md:justify-start py-6 pr-10 gap-5">
      <p className="subsection-text">JobFinder is the owner of the JobFinder trademark and the *[Magnifier b] Logo (as well as other trademarks, collectively our “Brand”), and protecting our intellectual property is very important to us. A list of our trademarks can be found here. Since JobFinder is the owner of the Brand, please do not file any applications with any intellectual property office for any marks which incorporate the Brand.</p>
      <p className="subsection-text">Our Brand may only be used as outlined in these guidelines or with express written permission from an authorized representative of JobFinder. We may request that you stop the use of our Brand if we believe, in our sole discretion, that your use of our Brand violates our Branding Guidelines, our User Agreement, or our Professional Community Guidelines, hereafter collectively referred to as JobFinder Brand and User Agreements.”</p>
      <p className="subsection-text">Your use must also be consistent with applicable law and align with JobFinder’s values (which include, but are not limited to, not using the Brand in a misleading, unfair, defamatory, infringing, libelous, disparaging, obscene, or otherwise objectionable manner).  Failure to follow these guidelines could result in the suspension or termination of your JobFinder account and other actions by JobFinder. We may modify these Guidelines at any time, and your continued use of the Brand Features will constitute your consent to such modifications.</p>
      <p className="subsection-text">Overall, you should ensure that you do not use our Brand in a manner that might create the impression that your use is sponsored by JobFinder. Please ensure compliance with these guidelines, make clear that your use is separate from the JobFinder Brand, and ensure that you do not copy or imitate the JobFinder platform’s overall look and feel. Any logos or images found elsewhere on the web are not approved for use. Please help us protect our Brand, and present your work in the most appropriate way, by following these guidelines and only using approved Brand assets from this site.</p>
      </div>
    </div>

    <div className="w-4/5 p-6 bg-primary bg-opacity-20 flex flex-col items-center justify-center">
    <Image src="/logo.png" alt="logo" width={44} height={44} />

    <p className="subsection-text">JobFinder uses the Mongnifier instead of letter b</p>
    </div>
  </div>
  );
};

export default BrandPolicy;
