import React from "react";

import { fetchJobDetails } from "@/utils/fetchApi";
import { JobProps } from "@/types";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: { id: string };
};

const JobDetails = async ({ params: { id } }: Props) => {
  const data = await fetchJobDetails(id);
  const detail: JobProps = data.data[0];
  console.log(data);

  const formatKey = (key: string) => {
    return key.split("_").join(" ");
  };

  const postedTime = ({ job_posted_at_timestamp }: JobProps) => {
    const milliseconds = job_posted_at_timestamp * 1000;
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - milliseconds;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const remainingHours = hours - days * 24;

    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  };

  return (
    <section className="flex justify-center items-center">
      <div
        className="w-9/10 md:w-3/4 mt-5 px-6 
    md:px-20 py-10 
     bg-gray-100 rounded-xl"
      >
        {data ? (
          <div key={detail.job_id}>
            <div className="py-5 ">
              <h1 className="title-text ">{detail.job_title}</h1>
              <h2 className="company-name">{detail.employer_name}</h2>
              <div className="flex align-center justify-left">
                {detail.job_city !== null ? (
                  <h3 className="sub-company-name">{detail.job_city},</h3>
                ) : (
                  ""
                )}

                <div className="felx">
                  {detail.job_state !== null ? (
                    <h3 className="ml-2 sub-company-name">
                      {detail.job_state}
                    </h3>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div>
                <h4 className="sub-company-name">
                  Job type: {detail.job_employment_type}
                </h4>

                {detail?.job_is_remote === true ? (
                  <h4 ml-2 sub-company-name>
                    (Remote)
                  </h4>
                ) : (
                  ""
                )}
              </div>

              {detail?.job_posted_at_timestamp ? (
                <h5 className="sub-company-name">
                  Posted: {postedTime(detail)}
                </h5>
              ) : (
                ""
              )}

              <hr className=" h-5 bg--300 border-0 my-5 shadow-xl" />
            </div>

            <div>
              <h1 className="title-text">Job details</h1>

              {detail.job_benefits !== null ? (
                <div className="product-container">
                  <h2 className="section-text flex gap-2">
                    {" "}
                    <Image
                      src="/assets/icons/important-blue.png"
                      alt="important"
                      width={24}
                      height={24}
                    />
                    Benefits
                  </h2>
                  {typeof detail.job_benefits === "string" ? (
                    <h3>{formatKey(detail.job_benefits)}</h3>
                  ) : (
                    <ul>
                      {detail.job_benefits.map(
                        (benefit: string, index: number) => (
                          <li key={index}>{formatKey(benefit)}</li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              ) : (
                ""
              )}

              {detail.job_benefits === null && detail.job_highlights?.Benefits && (
                <div className="product-container">
                  <h2 className="section-text flex gap-2">
                    {" "}
                    <Image
                      src="/assets/icons/important-blue.png"
                      alt="important"
                      width={24}
                      height={24}
                    />
                    Benefits
                  </h2>
                  {detail.job_highlights?.Benefits?.map(
                    (benefit: string, index: number) => (
                      <li key={index}>{benefit}</li>
                    )
                  )}
                </div>
              )}

              {detail.job_highlights?.Responsibilities && (
                <div className="product-container">
                  <h2 className="section-text flex gap-2">
                    {" "}
                    <Image
                      src="/assets/icons/important-orange.png"
                      alt="important"
                      width={24}
                      height={24}
                    />
                    Position Responsibilities
                  </h2>
                  {detail.job_highlights?.Responsibilities?.map(
                    (responsibility: string, index: number) => (
                      <li key={index}>{responsibility}</li>
                    )
                  )}
                </div>
              )}

              {detail.job_highlights?.Qualifications && (
                <div className="product-container">
                  <h2 className="section-text flex gap-2">
                    <Image
                      src="/assets/icons/important-orange.png"
                      alt="important"
                      width={24}
                      height={24}
                    />
                    Position Qualifications{" "}
                  </h2>
                  {detail.job_highlights?.Qualifications?.map(
                    (qualification: string, index: number) => (
                      <li key={index}>{qualification}</li>
                    )
                  )}
                </div>
              )}

              <div className="product-container">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={detail.job_apply_link}
                >
                  <button
                    type="button"
                    className="bg-primary px-5 py-2 rounded-full opacity-70
                    font-semibold hover:font-bold hover:opacity-100
                    "
                  >
                    Apply now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <h2>No data is available</h2>
        )}
      </div>
    </section>
  );
};

export default JobDetails;
