import React from "react";
import Image from "next/image";
import { FormDataProps } from "@/types";

const Modern = ({ formData, pdfRef }: { formData: FormDataProps; pdfRef: any }) => {
    return (
        <div ref={pdfRef} className="w-full flex items-center justify-center px-8 pt-5 pb-10">
            <div className="w-full flex justify-end gap-8 mt-6 py-15 bg-gray-200 rounded-ss-[200px] rounded-b-3xl">
                <div className="flex-[0.25] h-full flex flex-col justify-center bg-transparent mt-12 ml-12 pt-12">
                    <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-[4px] border-blue-400">
                        {formData.profilePicture ? (
                            <Image src={formData.profilePicture} alt={formData.name} width={100} height={100}
                                className="w-full h-full"
                            />
                        ) : (
                            <Image src="/assets/icons/avatar.png" alt="profile picture" width={100} height={100}
                                className="w-full h-full"
                            />
                        )}
                    </div>

                    <div className="flex flex-col items-start justify-start gap-3 mt-4">
                        <h1 className="text-4xl font-bold text-blue-900">{formData.name}</h1>
                        <h4 className="text-2xl text-right">{formData.jobTitle}</h4>
                    </div>

                    <div className="flex flex-col items-center justify-start text-left gap-4 mt-10">
                        {(formData.location || formData.phone || formData.email) && (
                            <div className="w-full flex flex-col items-start justify-start">
                                <h3 className="text-xl">Contact</h3>
                                <hr className="w-full h-[3px] bg-blue-500" />
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
            

                <div className="flex-1 w-full h-full flex flex-col items-start justify-start gap-8 px-8 py-14 mt-6 bg-white rounded-ss-[100px]">
                {formData.headline && (
                  <div className="w-full flex flex-col items-start justify-start">
                    <h2 className="text-2xl text-right">About Me</h2>
                    <hr className="w-full h-[3px] bg-blue-700" />
                    <p className="paragraph-text mt-2">{formData.headline}</p>
                  </div>
                )}
            

                <div className="w-full flex flex-col mt-14 gap-10">
                    {formData.workExperience.some(exp => exp.position || exp.company || exp.achievement) && (
                        <div className="w-full flex flex-col items-start justify-start gap-2">
                            <h3 className="text-2xl text-right">Work Experince</h3>
                            <hr className="w-full h-[3px] bg-blue-700" />
                        </div>
                    )}

                    {formData.workExperience.map((exp, index) => (
                        <div key={index} className="w-full flex flex-col items-start">
                            <div className="flex flex-col items-start justify-start">
                                <h4 className="font-semibold text-blue-700 text-2xl" >{exp.position}</h4>
                                <p className="font-semibold">{exp.company}</p>
                                <p>{exp.achievement}</p>
                            </div>
                            <div className="w-full flex items-center justify-start gap-2 text-right">
                                <p>{exp.startDate}</p>
                                {exp.startDate && (
                                    <span>/</span>
                                )}
                                <p>{exp.endDate}</p>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="w-full flex flex-col items-center mt-14 gap-10">
                        {formData.education.some(edu => edu.degree || edu.school || edu.academicAchievement) && (
                            <div className="w-full flex flex-col items-start justify-start gap-2">
                                <h3 className="text-2xl">Education</h3>
                                <hr className="w-full h-[3px] bg-blue-700"  />
                            </div>
                        )}

                        {formData.education.map((edu, index) => (
                            <div key={index} className="w-full flex flex-col items-start">
                                <div className="flex-[0.85] flex flex-col items-start justify-start">
                                    <p className="font-semibold text-blue-700 text-2xl">{edu.degree}</p>
                                    <h4 className="font-semibold">{edu.school}</h4>
                                    <p>{edu.academicAchievement}</p>
                                </div>

                                <div className="w-full flex items-center justify-start gap-2">
                                    <p>{edu.startDate}</p>
                                    {edu.startDate && (
                                        <span>/</span>
                                    )}
                                    <p>{edu.endDate}</p>
                                </div>


                            </div>
                        ))}
                </div>

                <div className="w-full flex flex-col mt-8">
                    {formData.skills.some(skill => skill.skillTitle || skill.skillDetail) && (
                        <div className="w-full flex flex-col items-start justify-start gap-2">
                            <h3 className="text-2xl">Skills</h3>
                            <hr className="w-full h-[3px] bg-blue-700"  />
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
                            <hr className="w-full h-[3px] bg-blue-700" />
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
        </div>
        </div>
    );
};

export default Modern;
