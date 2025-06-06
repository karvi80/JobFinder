"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchJobs } from "@/utils/fetchApi";
import { JobProps } from "@/types";
import Link from "next/link";
import Loader from "@/components/Loader";

const SearchResult = () => {
  const searchParams = useSearchParams();
  const searchPrompt = searchParams.get("searchPrompt");
  const location = searchParams.get("location");

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<JobProps[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchPrompt) {
        setIsLoading(true);
        const data = await fetchJobs(searchPrompt, location || "");
        setResponse(data.data);
        setIsLoading(false);
      }
    };
    
    fetchSearchResults();
    console.log(response)
  }, [searchPrompt, location]);

  const postedTime = ({ job_posted_at_timestamp }: JobProps) => {
    const milliseconds = job_posted_at_timestamp * 1000;
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - milliseconds;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} days ago`;
    if (hours > 0) return `${hours} hours ago`;
    if (minutes > 0 && minutes) return `${minutes} minutes ago`;
    if (minutes > 0) return `${minutes} minutes ago`;
    return `${seconds} seconds ago`;
  };

  return (
    <section className="flex justify-center items-center">
      <div className="w-full md:w-9/10 mt-5 px-6 md:px-10 px-20 py-10">
        <h1 className="section-text">Your Search Results for <span className="text-primary">{searchPrompt}</span></h1>

        {isLoading && <Loader />}

        {!isLoading && response.length === 0 && <p>No jobs found.</p>}

        {!isLoading && response.length > 0 && (
          <section className="trending-section">
            {response.map((job) => (
              <div
                key={job.job_id}
                className="flex flex-col p-4 w-full border-2 border-gray-300 rounded-lg hover:border-primary"
              >
                <Link href={`/searchResult/jobDetail/${job.job_id}`}
                  passHref
                  target="blank">
                  <h2 className="section-text">
                    {job.job_title} ({job.job_employment_type})
                  </h2>
                  <h3 className="company-name">{job.employer_name}</h3>
                  {job.job_posted_at_timestamp && (
                    <h3>Posted: {postedTime(job)}</h3>
                  )}
                  <p className="paragraph-text">{job.job_description.slice(0, 100)}...</p>

                  <div className="w-full flex items-end justify-end">
                    <button
                      className=" bg-primary
                    rounded-full p-3 text-sm opacity-50 hover:opacity-100"
                    >See More details {'>>'}</button>
                  </div>
                </Link>
              </div>
            ))}
          </section>
        )}
      </div>
    </section>
  );
};

export default SearchResult;
