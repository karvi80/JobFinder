import React, { useState } from "react";
import Image from "next/image";
import { FormDataProps } from "@/types";



const BasicOne = ({ formData, pdfRef }: { formData: FormDataProps; pdfRef: any }) => {


  return (
    <div className="flex flex-col">
      <div ref={pdfRef} className="w-full flex flex-col items-center justify-center p-10">
        <div className="flex items-center justify-between w-full">
          <div className="flex-[0.85] flex flex-col items-start justify-start">
            <h1 className="text-3xl font-bold">{formData.name}</h1>
            <p className="text-xl text-gray-600">{formData.headline}</p>
          </div>

          <div className="relative flex-[0.15] flex flex-col items-center justify-end pl-4">
            {formData.name && formData.headline && (
              <Image src="/assets/images/vertical-divider.svg" alt="vertical divider" width={5} height={100}
                className="absolute h-full left-0 top-0 bottom-0"
              />
            )}

            <div className="w-full flex items-center justify-start my-2">
              {formData.location && (
                <Image src="/assets/icons/location.svg" alt="location" width={24} height={24} />
              )}
              <p className="text-gray-700">{formData.location}</p>
            </div>

            <div className="w-full flex items-center justify-start my-2">
              {formData.phone && (
                <Image src="/assets/icons/phone.svg" alt="phone" width={24} height={24} />
              )}
              <p className="text-gray-700">{formData.phone}</p>
            </div>

            <div className="w-full flex items-center justify-start my-2">
              {formData.email && (
                <Image src="/assets/icons/email.svg" alt="email" width={24} height={24} />
              )}
              <p className="text-gray-700">{formData.email}</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col mt-14 gap-10">
          {formData.workExperience.some(exp => exp.position || exp.company || exp.achievement) &&  (
            <div className="w-full flex items-center justify-around gap-2">
              <h3 className="text-2xl">Work Experince</h3>
              <hr className="flex-1 w-full" />
            </div>
          )}

          {formData.workExperience.map((exp, index) => (
            <div key={index} className="w-full flex items-start justify-between">
              <div className="flex-[0.85] flex flex-col items-start justify-start">
                <h4 className="font-semibold">{exp.position}</h4>
                <p>{exp.company}</p>
                <p>{exp.achievement}</p>
              </div>

              <div className="flex-[0.3] h-full flex items-end justify-start gap-3">
                <p>{exp.startDate}</p>
                {exp.startDate && (
                  <p>/</p>
                )}
                <p>{exp.endDate}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col mt-14 gap-10">
          {formData.education.some(edu => edu.degree || edu.school || edu.academicAchievement) && (
            <div className="w-full flex items-center justify-around gap-2">
              <h3 className="text-2xl">Education</h3>
              <hr className="flex-1 w-full" />
            </div>
          )}

          {formData.education.map((edu, index) => (
            <div key={index} className="w-full flex items-start justify-between">
              <div className="flex-[0.85] flex flex-col items-start justify-start">
                <h4 className="font-semibold">{edu.degree}</h4>
                <p>{edu.school}</p>
                <p>{edu.academicAchievement}</p>
              </div>

              <div className="flex-[0.3] h-full flex items-end justify-start gap-3">
                <p>{edu.startDate}</p>
                {edu.startDate && (
                  <p>/</p> 
                )}
                <p>{edu.endDate}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col mt-14 gap-10">
          {formData.languages.some(lang => lang.language || lang.spoken || lang.reading || lang.writing) && (
            <div className="flex items-center justify-center gap-3">
              <h3 className="text-2xl">Languages</h3>
              <hr className="flex-1 w-full" />
            </div>
          )}

          {formData.languages.map((lang, index) => (
            <div key={index} className="w-full flex items-start justify-between">
              <div className="flex-[0.3] h-full flex items-end justify-start gap-3">
                <h3 className="section-text">{lang.language}</h3>
              </div>

              <div className="flex-[0.85] flex flex-col items-start justify-start">
                {lang.spoken && (
                  <p className="font-semibold">Spoken level: {lang.spoken}</p>
                )}
                {lang.reading && (
                  <p>Reading level: {lang.reading}</p>
                )}
                {lang.writing && (
                  <p>Writing level: {lang.writing}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BasicOne;
