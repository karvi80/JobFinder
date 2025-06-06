import React from "react";
import Image from "next/image";
import { FormDataProps } from "@/types";

const VerticalTow = ({ formData, pdfRef }: { formData: FormDataProps; pdfRef: any }) => {
    return (
        <div className="flex flex-col w-full">
            <div ref={pdfRef} className="w-full flex flex-col items-center justify-center p-10">
                <div className="flex items-center justify-end w-full">
                    <div className="flex flex-col flex-[0.7] items-start justify-start">
                        <h1 className="text-4xl font-bold text-blue-900">{formData.name}</h1>
                        <h3>{formData.headline}</h3>
                    </div>

                    <div className="flex-[0.15] flex flex-col items-center justify-end gap-3">
                        <div className="w-full flex items-center justify-end">
                            <p className="text-gray-700">{formData.location}</p>
                            {formData.location && (
                                <Image src="/assets/icons/location.svg" alt="location" width={24} height={24} />
                            )}
                        </div>

                        <div className="w-full flex items-center justify-end">
                            <p className="text-gray-700">{formData.phone}</p>
                            {formData.phone && (
                                <Image src="/assets/icons/phone.svg" alt="phone" width={24} height={24} />
                            )}
                        </div>

                        <div className="w-full flex items-center justify-end">
                            <p className="text-gray-700">{formData.email}</p>
                            {formData.email && (
                                <Image src="/assets/icons/email.svg" alt="email" width={24} height={24} />
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col mt-14 gap-10">
          {formData.workExperience.some(exp => exp.position || exp.company || exp.achievement) &&  (
            <div className="w-full flex items-center justify-end gap-2">
              <h3 className="flex-[0.15] text-2xl text-right">Work Experince</h3>
              <hr className="flex-[0.85]" />
            </div>
          )}

          {formData.workExperience.map((exp, index) => (
            <div key={index} className="w-full flex items-start gap-8">
              <div className="flex-[0.15] h-full flex flex-col items-end justify-start gap-2 text-right">
                <p className="font-semibold text-blue-700 text-2xl">{exp.company}</p>
                <p>{exp.startDate}</p>
                <p>{exp.endDate}</p>
              </div>

              <div className="flex-[0.85] flex flex-col items-start justify-start">
                <h4 className="font-semibold">{exp.position}</h4>
                <p>{exp.achievement}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center mt-14 gap-10">
          {formData.education.some(edu => edu.degree || edu.school || edu.academicAchievement) && (
            <div className="w-full flex items-center gap-2">
              <h3 className="text-2xl">Education</h3>
              <hr className="flex-1 w-full" />
            </div>
          )}

          {formData.education.map((edu, index) => (
            <div key={index} className="w-full flex items-start gap-8">
              <div className="flex-[0.15] h-full flex flex-col items-end justify-end gap-2">
                <p className="font-semibold text-blue-700 text-2xl">{edu.school}</p>
                <p>{edu.startDate}</p>
                <p>{edu.endDate}</p>
              </div>

              <div className="flex-[0.85] flex flex-col items-start justify-start">
                <h4 className="font-semibold">{edu.degree}</h4>
                <p>{edu.academicAchievement}</p>
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
            <div key={index} className="w-full flex items-start gap-8">
              <div className="flex-[0.15] h-full flex flex-col items-end justify-end gap-2">
                <h3 className="font-semibold text-blue-700 text-2xl">{lang.language}</h3>
              </div>

              <div className="flex-[0.85] flex flex-col items-start justify-start">
                {lang.spoken && (
                  <p className="font-semibold">Spoken: {lang.spoken}</p>
                )}
                {lang.reading && (
                  <p>Reading: {lang.reading}</p>
                )}
                {lang.writing && (
                  <p>Writing: {lang.writing}</p>
                )}
              </div>
            </div>
          ))}
        </div>
     </div>
</div>
    );
};

export default VerticalTow;
