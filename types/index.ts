

export type SearchProps = {
    searchJob: [];
    value: string;
    searchPrompt: string;
    job_posted_at_timestamp: number;
    location: string;
    parameters: {
        query: string;
    }

}
export type JobProps = {
    response: [],
    job: [],
    job_id: string,
    id: string;
    detail: [];
    details:[];
    employer_name: string,
    employer_logo: string,
    job_title: string,
    job_employment_type: string,
    job_apply_link: string,
    job_description: string,
    job_benefits: [];
    job_highlights: {
        Responsibilities: [],
        responsability: [],
        Qualifications: [],
        Benefits: [];

    },
    data: [],
    jobTitle: string;
    location: string;
    job_city: string;
    job_state: string;
    job_posted_at_datetime_utc: string | number;
    job_posted_at_timestamp: number;
    job_is_remote: boolean;
}

export type EstimatedSalaryProps = {
    searchEstimate: string;
    response: {};
    data: [];
    request_id: string;
    location: string;
    parameters: {
        job_title: string;
        location: string;
    };
    average: {};
    publisher_name: string;
    max_salary: number;
    min_salary: number;
    median_salary: number;
    salary_currency: string;
    salary_period: string;
    publisher_link: string;
    
}

export interface FormDataProps {
  name: string;
  headline: string;
  jobTitle: string;
  location: string;
  phone: string;
  email: string;
  workExperience: { position: string; company: string; achievement: string; startDate: string; endDate: string }[];
  education: { degree: string; school: string; academicAchievement: string; startDate: string; endDate: string }[];
  languages: { language: string; spoken: string; reading: string; writing: string; }[];
  skills: { skillTitle: string; skillDetail: string; }[];
  [key: string]: any;
}

export interface ResumeTemplatesProps {
    id: string;
    pdfRef: any;
    formData: FormDataProps;
}