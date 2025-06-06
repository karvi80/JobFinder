import React from "react";

import EstimatedSalary from "@/components/EstimatedSalary";
import Compensation from "@/components/Compensation";
import Pricing from "@/components/Pricing";
import Equity from "@/components/Equity";
import SalaryStructure from "@/components/SalaryStructure";
import Recruiting from "@/components/Recruiting";
import Organizations from "@/components/Organizations";
import Insight from "@/components/Insight";

const SearchSalary = () => {
  return (
    <section className="w-full px-6 md:px-20 py-10 flex flex-col">
      <div className="flex flex-col items-center justify-center p-10 bg-primary bg-opacity-10 border border-white/20 backdrop-blur-lg rounded-lg shadow-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="head-text">Are you paid fairly? Find out.</h1>
          <p className="section-text">Know your worth and calculate your salary with Glassdoor's salary estimation tools to learn how much you should be making.</p>
        </div>
        <EstimatedSalary />

      </div>

      <div>
        <Compensation />

        <Pricing />

        <Equity />

        <SalaryStructure />

        <Recruiting />

        <Organizations />

        <Insight />
      </div>

    </section>
  );
};

export default SearchSalary;
