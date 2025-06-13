"use client";

import React, { useState } from "react";

import { fetchEstimatedSalary } from "@/utils/fetchApi";

import { EstimatedSalaryProps, EstimatedSalaryResponseProps } from "@/types";

import millify from "millify";
import Image from "next/image";
import Link from "next/link";

const EstimatedSalary: React.FC = () => {
  const [searchEstimate, setSearchEstimate] = useState("");
  const [location, setLocation] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<EstimatedSalaryProps | null>(null);

  const searchSalary = async () => {
    setIsLoading(true);

    if (searchEstimate.trim() !== "" && location.trim() !== "") {
      try {
        const data = await fetchEstimatedSalary({
          searchEstimate: searchEstimate.trim(),
          location: location.trim(),
        });
        setResponse(data);
      } catch (error) {
        console.error("Error fetching estimated salary:", error);
        // Handle the error, set an error state, etc.
      }
    } else {
      // Handle the case when one of the parameters is empty
      console.error("One or more search parameters are empty.");
    }

    setIsLoading(false);
    setSearchEstimate("");
    setLocation("");
  };

  return (
    <div className="mt-12 w-full flex flex-col ">
      <h1 className="section-text">Search Estimate Salary by Area</h1>
      <form
        className="w-full flex flex-col gap-4 md:flex-row md:gap-8"
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          searchSalary(); // Call the searchJob function to initiate the request
        }}
      >
        <div className="w-full flex flex-col gap-4 md:flex-row md:gap-8archbars">
          <input
            value={searchEstimate}
            type="text"
            placeholder="Job title or keywords in location"
            className="searchbar-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchEstimate(e.target.value)
            }
          />

          <input
            value={location}
            type="text"
            placeholder="Job location"
            className="searchbar-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLocation(e.target.value)
            }
          />
        </div>

        <button
          type="submit"
          className="searchbar-btn"
          disabled={searchEstimate.trim() === ""}
        >
          {isLoading ? "Searching..." : "Search Salary"}
        </button>
      </form>

      <section>
        {response ? (
          <div key={response.request_id} className="product-container">
            <h2 className="title-text">
              Estimate{" "}
              <span className="text-primary">
                {response.parameters.job_title}
              </span>{" "}
              salaries in{" "}
              <span className="text-primary">
                {response.parameters.location}
              </span>
            </h2>

            <div>
              <p className="section-text mb-7">
                Average base salary is in {response?.data[0].salary_currency}{" "}
                per {response?.data[0].salary_period}
              </p>
              <div className="flex items-center justify-center gap-10 flex-wrap">
                {response?.data?.map((average: EstimatedSalaryResponseProps) => (
                  <div key={average.publisher_name} className="price-info_card">
                    <div className="product-card">
                      <Link
                        href={average.publisher_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3 className="company-name underline underline-offset-2 ">
                          {average.publisher_name}
                        </h3>
                      </Link>
                      <div className="flex flex-col items-center justify-center w-full gap-6">
                        <div className="flex items-center justify-around w-full">
                          {average.min_salary ? (
                            <div className="flex flex-col">
                              <h4>Low</h4>
                              <h4>{millify(average.min_salary)}</h4>
                            </div>
                          ) : (
                            <div>
                              <h4>Low</h4>
                              <h4>N/A</h4>
                            </div>
                          )}

                          <Image
                            src="/assets/images/average-vector.png"
                            width={100}
                            height={70}
                            alt="arrow-right"
                          />

                          {average.max_salary ? (
                            <div className="flex flex-col">
                              <h4>High</h4>
                              <h4>{millify(average.max_salary)}</h4>
                            </div>
                          ) : (
                            <div>
                              <h4>High</h4>
                              <h4>N/A</h4>
                            </div>
                          )}
                        </div>

                        {average.median_salary ? (
                          <div className="flex flex-col">
                            <h4>Average</h4>
                            <h4>{millify(average.median_salary)}</h4>
                          </div>
                        ) : (
                          <div>
                            <h4>Average</h4>
                            <h4>N/A</h4>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div></div>
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
};

export default EstimatedSalary;
