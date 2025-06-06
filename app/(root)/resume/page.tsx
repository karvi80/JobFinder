import React from "react";
import Image from "next/image";
import Link from "next/link";
import { resumes } from "@/constants";

const Resume = () => {
  return (
  <div className="w-full px-6 md:px-20 py-10 flex flex-col">
    <div className="w-full flex flex-col-reverse  lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-16 p-10 bg-primary bg-opacity-10 rounded-2xl">
        <div className="flex flex-col items-center justify-center">
            <h1 className="head-text">Professional Resume Template</h1>
            <p className="subsection-text">Impress pototial emplyers by putting together your skills, set and work history in an impactful summary designed with free, proffesional resume templates from <span>Job Finder</span></p>
        </div>
        <div className="h-full flex items-center justify-center h-full lg:w-[300px] p-6">
            <Image src="/assets/images/resume-template-1.jpg" alt="resume-template" width={150} height={150}
            className="w-1/3 lg:w-full lg:h-full rotate-12" 
             />
        </div>
    </div>

    <div>
      <h1 className="head-text">Resume Template</h1>
      <h4 className="section-text">Select the Template that matches your needs</h4>
      <p className="paragraph-text">Put your best qualities on display with professional, customizable resume templates. No matter your line of work or length of professional history, you'll find resume templates that'll help you.</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-6 p-4 mt-10">
     {resumes.map((resume) => (
      <Link href={`/resume/templates/${resume.id}`} key={resume.id}
      className="relative max-w-[250px] min:w-[200px] min-h-[250px] max-w-[312px] m-4 rounded-lg border-2 border-gray-500 hover:border-primary cursor-pointer transition-all duration-300 hover:scale-[1.02] border-2xl overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full">
        <Image src={resume.image} alt={resume.title} width={250} height={250} 
        className="w-full h-full rounded-lg"
        />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center p-8 rounded-lg -z-10 hover:z-20">
          <p>{resume.desc}</p>
        </div>

        <div className="absolute bottom-0 w-full flex items-center justify-center text-center bg-primary bg-opacity-10">
        <h3 >{resume.title}</h3>
        </div>
      </Link>
     ))}
    </div>
  </div>
);
};

export default Resume;
