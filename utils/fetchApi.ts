import { SearchProps, JobProps, EstimatedSalaryProps, EstimatedSalaryParamsProps } from "../types"




const headers: HeadersInit = {
  "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY_2 || "",
  "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
};

export const baseUrl = 'https://jsearch.p.rapidapi.com'

export async function fetchJobs( searchPrompt: string, location: string) {

  const query = `${searchPrompt} in ${location}`.trim();

  const response = await fetch(
    `${baseUrl}/search?query=${encodeURIComponent(query)}`,
    { headers: headers }
  );

  
  const result = await response.json();
  
  return result;
};

export async function fetchJobDetails( id: string ) {


  const response = await fetch(`${baseUrl}/job-details?job_id=${id}`,
  { headers: headers }
  );
  
  const result = await response.json();

  return result;
}


export async function fetchEstimatedSalary( {searchEstimate, location}: EstimatedSalaryParamsProps ) {

  const response = await fetch(`${baseUrl}/estimated-salary?job_title=${searchEstimate}&location=${location}`,
  { headers: headers }
  );
  
  const result = await response.json();

  return result;
}
