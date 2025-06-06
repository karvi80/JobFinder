import React from "react";
import { FormDataProps } from "@/types";

const Vertical = ({ formData, pdfRef }: { formData: FormDataProps; pdfRef: any }) => {
    return (
        <div className="flex flex-col">
            <div ref={pdfRef} className="w-full flex flex-col items-center justify-center p-10">
                <div className="w-full flex flex-col items-center justify-center gap-2">
                    <h1 className="text-4xl font-bold text-blue-900">{formData.name}</h1>
                    <h3>{formData.headline}</h3>
                    <div className="w-full flex items-center justify-center gap-3">
                        <p>{formData.location}</p>
                        {formData.location && (
                            <span className="text-xl">|</span>
                        )}
                        <p>{formData.phone}</p>
                        {formData.phone && (
                            <span className="text-xl">|</span>
                        )}
                        <p className="text-blue-900">{formData.email}</p>
                    </div>

                    {formData.name && (
                        <hr className="w-full h-[4px] bg-blue-900 border-none" />
                    )}
                </div>

                <div className="w-full flex flex-col mt-6 gap-10">
                    {formData.workExperience.some(exp => exp.position || exp.company || exp.achievement) && (
                        <div className="flex flex-col items-start justify-start gap-3">
                            <h3 className="text-2xl">Work Experience</h3>
                            <hr className="w-full h-[4px] bg-tranparent border-t-[4px] border-b-[1px] border-blue-900" />
                        </div>
                    )}

                    {formData.workExperience.map((exp, index) => (
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                            {index !== 0 ? (
                                <hr className="w-1/2 h-[2px] bg-blue-900" />
                            ) : ""}
                            <div key={index} className="w-full flex items-start justify-between">
                                <div className="flex-[0.8] flex flex-col items-start justify-start">
                                    <h4 className="font-semibold">{exp.position}</h4>
                                    <p>{exp.company}</p>
                                    <p>{exp.achievement}</p>
                                </div>

                                <div className="flex-[0.2] h-full flex items-end justify-start gap-3">
                                    <p>{exp.startDate}</p>
                                    {exp.startDate && (
                                        <p>/</p>
                                    )}
                                    <p>{exp.endDate}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="w-full flex flex-col mt-14 gap-10">
                    {formData.education.some(edu => edu.degree || edu.school || edu.academicAchievement) && (
                        <div className="w-full flex flex-col items-start justify-start gap-2">
                            <h3 className="text-2xl">Education</h3>
                            <hr className="w-full h-[4px] bg-tranparent border-t-[4px] border-b-[1px] border-blue-900" />
                        </div>

                    )}

                    {formData.education.map((edu, index) => (
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                            {index !== 0 ? (
                                <hr className="w-1/2 h-[2px] bg-blue-900" />
                            ) : ""}

                            <div key={index} className="w-full flex items-start justify-between">
                                <div className="flex-[0.8] flex flex-col items-start justify-start">
                                    <h4 className="font-semibold">{edu.degree}</h4>
                                    <p>{edu.school}</p>
                                    <p>{edu.academicAchievement}</p>
                                </div>

                                <div className="flex-[0.2] h-full flex items-end justify-start gap-3">
                                    <p>{edu.startDate}</p>
                                    {edu.startDate && (
                                        <p>/</p>
                                    )}
                                    <p>{edu.endDate}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full flex flex-col mt-14 gap-10">
                    {formData.languages.some(lang => lang.language || lang.spoken || lang.reading || lang.writing) && (
                        <div className="flex flex-col items-start justify-start gap-3">
                            <h3 className="text-2xl">Languages</h3>
                            <hr className="w-full h-[4px] bg-tranparent border-t-[4px] border-b-[1px] border-blue-900" />
                        </div>
                    )}

                    {formData.languages.map((lang, index) => (
                        <div key={index} className="w-full flex items-start justify-start">
                            <div className="flex-[0.3] h-full flex items-start justify-start gap-3">
                                <h3 className="section-text">{lang.language}</h3>
                            </div>

                            <div className="flex-[0.85] flex flex-col items-start justify-start">
                                {lang.spoken && (
                                    <p className="font-semibold">Spoken: {lang.spoken}</p>
                                )}
                                {lang.reading && (
                                    <p className="font-semibold">Reading: {lang.reading}</p>
                                )}
                                {lang.writing && (
                                    <p className="font-semibold">Writing: {lang.writing}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Vertical;
