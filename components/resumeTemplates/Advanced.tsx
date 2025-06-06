import React from "react";
import Image from "next/image";
import { FormDataProps } from "@/types";

const Advanced = ({ formData, pdfRef }: { formData: FormDataProps; pdfRef: any }) => {
    return (
        <div className="flex flex-col w-full">
            <div ref={pdfRef} className="w-full flex items-start justify-center p-10">
                <div className="flex flex-[0.2] h-full flex-col items-center justify-between bg-primary bg-opacity-60 p-5 h-full">
                    <div className="w-full flex flex-col items-center justify-center">
                        {formData.profilePicture && (
                            <div className="bg-white rounded-full p-1 w-[100px] h-[100px]">
                                <Image src={formData.profilePicture} alt={formData.name} width={100} height={100}
                                    className="rounded-full w-full h-full"
                                />
                            </div>
                        )}

                        <div className="flex flex-col items-center justify-start text-left gap-4 mt-5">
                            {(formData.location || formData.phone || formData.email) && (
                                <div className="w-full flex flex-col items-center justify-center">
                                    <h3>Contact</h3>
                                    <hr className="w-full p-2" />
                                </div>
                            )}
                            <div className="w-full flex items-start justify-start gap-2">
                                {formData.location && (
                                    <Image src="/assets/icons/location.svg" alt="location" width={24} height={24} />
                                )}
                                <p className="text-gray-700">{formData.location}</p>
                            </div>

                            <div className="w-full flex items-start justify-start gap-2">
                                {formData.phone && (
                                    <Image src="/assets/icons/phone.svg" alt="phone" width={24} height={24} />
                                )}
                                <p className="text-gray-700">{formData.phone}</p>
                            </div>

                            <div className="w-full flex items-start justify-start gap-2">
                                {formData.email && (
                                    <Image src="/assets/icons/email.svg" alt="email" width={24} height={24} />
                                )}
                                <p className="text-gray-700">{formData.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col mt-8">
                        {formData.skills.some(skill => skill.skillTitle || skill.skillDetail) && (
                            <div className="w-full flex flex-col items-start justify-start gap-2">
                                <h3 className="text-2xl">Skills</h3>
                                <hr className="w-full" />
                            </div>
                        )}

                        {formData.skills.map((skill, index) => (
                            <div key={index} className="w-full flex flex-col items-start justify-start mb-6 gap-2">
                                <div className="flex flex-col items-start justify-start gap-2">
                                    <h3 className="font-semibold text-blue-700 text-2xl">{skill.skillTitle}</h3>
                                </div>

                                <div className="flex-1 flex flex-col items-start justify-start">
                                    <p className="font-semibold">{skill.skillDetail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col mt-8">
                        {formData.languages.some(lang => lang.language || lang.spoken || lang.reading || lang.writing) && (
                            <div className="w-full flex flex-col items-start justify-start gap-2">
                                <h3 className="text-2xl">Languages</h3>
                                <hr className="w-full" />
                            </div>
                        )}

                        {formData.languages.map((lang, index) => (
                            <div key={index} className="w-full flex flex-col items-start justify-start mb-6 gap-2">
                                <div className="flex flex-col items-start justify-start gap-2">
                                    <h3 className="font-semibold text-blue-700 text-2xl">{lang.language}</h3>
                                </div>

                                <div className="flex-1 flex flex-col items-start justify-start">
                                    {lang.spoken && (
                                        <p className="font-semibold">Speaking: {lang.spoken}</p>
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

                <div className="flex flex-[0.8] flex-col p-4">
                    <div className="flex items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start gap-3">
                            <h1 className="text-4xl font-bold text-blue-900">{formData.name}</h1>

                            {formData.headline && (
                                <div className="w-full flex flex-col mt-6">
                                    <h2>Professional Profile</h2>
                                    <hr className="w-full" />
                                </div>
                            )}
                            <h3>{formData.headline}</h3>
                        </div>
                    </div>

                    <div className="w-full flex flex-col mt-14 gap-10">
                        {formData.workExperience.some(exp => exp.position || exp.company || exp.achievement) && (
                            <div className="w-full flex flex-col items-start justify-start gap-2">
                                <h3 className="text-2xl text-right">Work Experince</h3>
                                <hr className="w-full" />
                            </div>
                        )}

                        {formData.workExperience.map((exp, index) => (
                            <div key={index} className="w-full flex flex-col items-start">
                                <div className="w-full flex items-center justify-start gap-2 text-right">
                                    <p>{exp.startDate}</p>
                                    {exp.startDate && (
                                        <span>/</span>
                                    )}
                                    <p>{exp.endDate}</p>
                                    <p className="font-semibold text-blue-700 text-2xl">{exp.company}</p>
                                </div>

                                <div className="flex flex-col items-start justify-start">
                                    <h4 className="font-semibold">{exp.position}</h4>
                                    <p>{exp.achievement}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col items-center mt-14 gap-10">
                        {formData.education.some(edu => edu.degree || edu.school || edu.academicAchievement) && (
                            <div className="w-full flex flex-col items-start justify-start gap-2">
                                <h3 className="text-2xl">Education</h3>
                                <hr className="w-full" />
                            </div>
                        )}

                        {formData.education.map((edu, index) => (
                            <div key={index} className="w-full flex flex-col items-start">
                                <div className="w-full flex items-center justify-start gap-2">
                                    <p>{edu.startDate}</p>
                                    {edu.startDate && (
                                        <span>/</span>
                                    )}
                                    <p>{edu.endDate}</p>
                                    <p className="font-semibold text-blue-700 text-2xl">{edu.school}</p>
                                </div>

                                <div className="flex-[0.85] flex flex-col items-start justify-start">
                                    <h4 className="font-semibold">{edu.degree}</h4>
                                    <p>{edu.academicAchievement}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Advanced;