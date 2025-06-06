import React from "react";
import Image from "next/image"

const Blog = () => {
  return (
  <div className="relative w-full flex flex-col items-center justify-center mt-10 bg-black p-8">
    <div className="flex items-start justify-center p-8 lg:hidden">
       <Image src="/logo.png" alt="logo" width={100} height={100} />
       <h1 className="head-text text-primary">JobFinder</h1>
    </div>

    <div className="w-full flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      <div className="flex-[0.7] h-full">
         <Image src="/assets/images/blog.jpg" alt="blog" width={450} height={300} 
           className="w-full h-full"
         />
      </div>

      <div className="flex flex-col items-center justify-center py-10 px-4 gap-6 bg-black text-white">
        <div className="flex items-start justify-center p-8 hidden lg:block">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <h1 className="head-text text-primary">JobFinder</h1>
        </div>

        <h1 className="subhead-text">UNDER CONSTRUCTION</h1>
        <p className="md:text-[16px] text-[14px] font-normal">Submit your email to get notified when we are ready!</p>

        <div className="flex items-center justify-center">
            <input type="text" placeholder="Your Email" className="p-4 rounded-l-xl" />
            <button className="bg-primary p-4 rounded-r-xl">
                Submit
            </button>
        </div>

      </div>
    </div>
  </div>
  );
};

export default Blog;
