import React from "react";
import Image from "next/image"
import { FormDataProps } from "@/types";


const GirlsVertical = ({ formData, pdfRef }: { formData: FormDataProps; pdfRef: any }) => {
    return (
        <div ref={pdfRef} className="flex items-center justify-center w-full h-full">
            <div className="w-[97%] h-[97%] flex flex-col items-start justify-center border-[2px] border-gray-800 overflow-hidden">
                <div className="w-full flex items-center justify-between bg-pink-200 p-6">
                    <div className="w-[200px] h-[200px] ml-10 rounded-full overflow-hidden">
                        {formData.profilePicture ? (
                            <Image src={formData.profilePicture} alt={formData.name} width={200} height={200}
                                className="rounded-full w-full h-full"
                            />
                        ) : (
                            <Image src="/assets/icons/avatar.png" alt="profile picture" width={200} height={200}
                                className="rounded-full w-full h-full"
                            />
                        )}
                    </div>

                    <div className="h-full flex flex-col items-center justify-center flex-1 gap-2">
                        <h1 className="text-4xl font-bold text-blue-900">{formData.name}</h1>
                        {formData.name && (
                            <hr className="w-1/3 h-[2px] bg-blue-800" />
                        )}
                        <h4 className="text-2xl text-right">{formData.jobTitle}</h4>
                    </div>
                </div>

                <div className="flex items-start justify-between p-5">
                    <div className="flex-[0.25] fle flex-col items-start justify-center gap-8">
                        <div className="flex flex-col items-center justify-start text-left gap-4 mt-10">
                            {(formData.location || formData.phone || formData.email) && (
                                <div className="w-full flex flex-col items-center justify-start">
                                    <h3 className="text-xl">Contact</h3>
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

                        <div className="w-full flex flex-col mt-8">
                            {formData.skills.some(skill => skill.skillTitle || skill.skillDetail) && (
                                <div className="w-full flex flex-col items-center justify-start gap-2">
                                    <h3 className="text-2xl">Skills</h3>

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
                                <div className="w-full flex flex-col items-center justify-start gap-2">
                                    <h3 className="text-2xl">Languages</h3>
                                </div>
                            )}

                            {formData.languages.map((lang, index) => (
                                <div key={index} className="w-full flex items-end justify-start mb-6 gap-2">
                                    <h3 className="font-semibold text-blue-700 text-2xl">{lang.language}</h3>
                                    {lang.language && (
                                        <h3 className="font-semibold text-blue-700 text-2xl">:</h3>
                                    )}
                                    {lang.spoken && (
                                        <p className="font-semibold">{lang.spoken}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {(formData.location || formData.phone || formData.email) && (
                        <div className="h-full">
                            <Image src="/assets/images/vertical-divider.svg" alt="vertical-divider" width={5} height={500}
                                className="w-full h-full"
                            />
                        </div>
                    )}

                    <div className="flex-[0.7] w-full flex flex-col items-start justify-center p-6 gap-6">
                        <div className="w-full">
                            {formData.headline && (
                                <div className="w-full flex flex-col items-center justify-center">
                                    <h2 className="text-2xl">About Me</h2>
                                    <p className="paragraph-text text-left">{formData.headline}</p>
                                </div>
                            )}
                        </div>


                        <div className="w-full flex flex-col items-start justify-center gap-2">
                            {formData.workExperience.some(exp => exp.position || exp.company || exp.achievement) && (
                                <div className="w-full flex flex-col items-center justify-start gap-2">
                                    <h3 className="text-2xl text-right">Work Experince</h3>
                                </div>
                            )}

                            {formData.workExperience.map((exp, index) => (
                                <div key={index} className="w-full flex flex-col items-start">
                                    <div className="w-full flex items-end justify-start gap-2 text-right">
                                        <p>{exp.startDate}</p>
                                        {exp.startDate && (
                                            <span>/</span>
                                        )}
                                        <p>{exp.endDate}</p>
                                        <h4 className="font-semibold text-blue-700 text-2xl" >{exp.position}</h4>
                                    </div>

                                    <div className="flex flex-col items-start justify-start">
                                        <p className="font-semibold">{exp.company}</p>
                                        <p>{exp.achievement}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="w-full flex flex-col items-start justify-center">
                            {formData.education.some(edu => edu.degree || edu.school || edu.academicAchievement) && (
                                <div className="w-full flex flex-col items-center justify-center gap-2">
                                    <h3 className="text-2xl">Education</h3>
                                </div>
                            )}

                            {formData.education.map((edu, index) => (
                                <div key={index} className="w-full flex flex-col items-start">
                                    <div className="w-full flex items-end justify-start gap-2">
                                        <p>{edu.startDate}</p>
                                        {edu.startDate && (
                                            <span>/</span>
                                        )}
                                        <p>{edu.endDate}</p>
                                        <p className="font-semibold text-blue-700 text-2xl">{edu.degree}</p>
                                    </div>

                                    <div className="flex-[0.85] flex flex-col items-start justify-start">
                                        <h4 className="font-semibold">{edu.school}</h4>
                                        <p>{edu.academicAchievement}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GirlsVertical;
