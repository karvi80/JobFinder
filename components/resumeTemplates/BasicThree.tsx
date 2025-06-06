import { FormDataProps } from "@/types";
import Image from "next/image";
import React from "react";

const BasicThree = ({ formData, pdfRef }: { formData: FormDataProps; pdfRef: any }) => {
  return (
    <div className="flex flex-col">
      <div ref={pdfRef} className="w-full flex flex-col items-center justify-center p-10">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <div className="w-full flex flex-col items-start justify-start p-6 gap-3">
            <h1 className="text-4xl font-bold text-blue-900">{formData.name}</h1>
            <h3>{formData.headline}</h3>
            {(formData.name || formData.headline) && (
              <hr className="w-full h-[4px] bg-gray-400 border-none" />
            )}
          </div>

          <div className="flex items-start justify-start w-full gap-6">
            <div className="relative flex-[0.15] flex flex-col items-center justify-end pl-4">
                        <div className="w-full flex items-center justify-start my-2 gap-2">
                          {formData.location && (
                            <Image src="/assets/icons/location.svg" alt="location" width={24} height={24} />
                          )}
                          <p className="text-gray-700">{formData.location}</p>
                        </div>
            
                        <div className="w-full flex items-center justify-start my-2 gap-2">
                          {formData.phone && (
                            <Image src="/assets/icons/phone.svg" alt="phone" width={24} height={24} />
                          )}
                          <p className="text-gray-700">{formData.phone}</p>
                        </div>
            
                        <div className="w-full flex items-center justify-start my-2 gap-2">
                          {formData.email && (
                            <Image src="/assets/icons/email.svg" alt="email" width={24} height={24} />
                          )}
                          <p className="text-gray-700">{formData.email}</p>
                        </div>
                      </div>

            <div className="flex flex-[0.8] flex-col w-full p-4 gap-6 border-l-[4px] border-gray-400">
              <div className="w-full flex-[0.2] flex flex-col gap-10">
                {formData.workExperience.some(exp => exp.position || exp.company || exp.achievement) && (
                  <div className="flex flex-col items-start justify-start gap-3">
                    <h3 className="text-2xl">Work Experience</h3>
                    <hr className="w-[100px] h-[4px] bg-gray-400 border-none" />
                  </div>
                )}

                {formData.workExperience.map((exp, index) => (
                  <div key={index} className="w-full flex items-start justify-start">
                    <div className="flex-[0.2] h-full flex flex-col items-start justify-start p-2">
                      <p>{exp.startDate}</p>
                      <p>{exp.endDate}</p>
                    </div>

                    <div className="flex-[0.8] flex flex-col items-start justify-start">
                      <h4 className="font-semibold">{exp.position}</h4>
                      <p>{exp.company}</p>
                      <p>{exp.achievement}</p>
                    </div>
                  </div>
                ))}
              </div>

              {formData.workExperience.some(exp => exp.position || exp.company || exp.achievement) && (
                <hr className="w-full h-[2px] bg-gray-200 border-none" />
              )}

              <div className="w-full flex flex-col gap-10">
                {formData.education.some(edu => edu.degree || edu.school || edu.academicAchievement) && (
                  <div className="w-full flex flex-col items-start justify-start gap-2">
                    <h3 className="text-2xl">Education</h3>
                    <hr className="w-[100px] h-[4px] bg-gray-400 border-none" />
                  </div>
                )}

                {formData.education.map((edu, index) => (
                  <div key={index} className="w-full flex items-start justify-between">
                    <div className="flex-[0.2] h-full flex flex-col items-start justify-start p-2">
                      <p>{edu.startDate}</p>
                      <p>{edu.endDate}</p>
                    </div>

                    <div className="flex-[0.8] flex flex-col items-start justify-start">
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p>{edu.school}</p>
                      <p>{edu.academicAchievement}</p>
                    </div>
                  </div>
                ))}
              </div>

              {formData.education.some(edu => edu.degree || edu.school || edu.academicAchievement) && (
                <hr className="w-full h-[2px] bg-gray-200 border-none" />
              )}

              <div className="w-full flex flex-col gap-10">
                {formData.languages.some(lang => lang.language || lang.spoken || lang.reading || lang.writing) && (
                  <div className="flex flex-col items-start justify-start gap-3">
                    <h3 className="text-2xl">Languages</h3>
                    <hr className="w-[100px] h-[4px] bg-gray-400 border-none" />
                  </div>
                )}

                {formData.languages.map((lang, index) => (
                  <div key={index} className="w-full flex items-start justify-between">
                    <div className="flex-[0.2] h-full flex items-start justify-start p-2">
                      <h3 className="section-text">{lang.language}</h3>
                    </div>

                    <div className="flex-[0.82] flex flex-col items-start justify-start">
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

        </div>

      </div>
    </div>
  );
};

export default BasicThree;
