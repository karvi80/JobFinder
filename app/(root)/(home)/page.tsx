import Image from "next/image";

import HeroCarousel from "@/components/HeroCarousel";
import SearchJob from "@/components/SearchJob";
import Partnership from "@/components/Partnership";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Field from "@/components/Field";
import Testimonial from "@/components/Testimonial";

const Home = () => {
  return (
    <>
      <section className="w-full px-6 md:px-20 py-10 flex flex-col">
        <div className="flex max-xl:flex-col gap-26">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart search start here:
              <Image
                src="assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h2 className="head-text">
              Unleash the Power of <br />
              <span className="text-primary">Job Finder</span>
            </h2>

            <p className="mt-6">
              Powerful and free engine to help you <br />
              search, find, apply and land your dream job.
            </p>
          </div>
          <HeroCarousel />
        </div>

        <SearchJob />

        <Partnership />

        <Process />
        <Field />
        <Features />
        <Testimonial />

      </section>
    </>
  );
};

export default Home;
