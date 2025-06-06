"use client";

import React, { useRef, useState } from "react";
import { useParams } from "next/navigation";
import { jsPDF } from "jspdf";
import * as html2canvas from 'html2canvas';
import { ResumeTemplates } from "@/components/resumeTemplates";
import { FormDataProps } from "@/types";
import { ResumeTemplatesProps } from '@/types';
import Image from "next/image";






const Template = () => {
  const params = useParams();
  const id = params.id;
  const pdfRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);

  if (!id || typeof id !== "string") return <p>Loading...</p>;

  const SelectedTemplate = ResumeTemplates[id as keyof typeof ResumeTemplates] as React.ComponentType<ResumeTemplatesProps>;

  if (!SelectedTemplate) return <p>Template not found</p>;


  const [isEditing, setIsEditing] = useState(true);

  // Resume Form State
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    headline: "",
    location: "",
    phone: "",
    email: "",
    jobTitle: "",
    profilePicture: "",
    workExperience: [{ position: "", company: "", achievement: "", startDate: "", endDate: "" }],
    education: [{ degree: "", school: "", academicAchievement: "", startDate: "", endDate: "" }],
    languages: [{ language: "", spoken: "", reading: "", writing: "" }],
    skills: [{ skillTitle: "", skillDetail: "" }]
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index?: number, section?: string) => {
    const { name, value } = e.target;

    if (section === undefined) {
      setFormData((prev) => ({ ...prev, [name]: value }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].map((item: any, i: number) => (i === index ? { ...item, [name]: value } : item)),
    }));
  };

  // add a profile picture
  const handleProfilePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, profilePicture: reader.result as string }));
    };
    reader.readAsDataURL(file)
  }

  // Add new work experience entry
  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      workExperience: [...prev.workExperience, { position: "", company: "", achievement: "", startDate: "", endDate: "" }],
    }));
  };

  // Add new education entry
  const addMoreEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, { degree: "", school: "", academicAchievement: "", startDate: "", endDate: "" }],
    }));
  };

  // Add new language entry
  const addLanguage = () => {
    setFormData((prev) => ({
      ...prev,
      languages: [...prev.languages, { language: "", spoken: "", reading: "", writing: "" }],
    }));
  };

  // Add new skill entry
  const addSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, { skillTitle: "", skillDetail: "" }],
    }));
  };

  // Scroll to resume section
  const handleToggleEdit = () => {
    setIsEditing(!isEditing);

    setTimeout(() => {
      if (resumeRef.current) {
        resumeRef.current.scrollIntoView({ behavior: "smooth"});
      }
    }, 100);
  }

  // PDF Export
  const handleExportPDF = async () => {
    const inputData = pdfRef.current
    try {
      const canvas = await (html2canvas as any)(inputData)
      const imgData = canvas.toDataURL("image/png")

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4"
      });

      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "png", 0, 0, width, height);
      pdf.save(`Resume-${formData.name}`)

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="subhead-text">Resume Template: <span className="text-primary">{id}</span></h1>

      {/* Form Inputs */}
      <div className="w-full max-w-3xl p-5 border rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-3">Personal Information</h2>
        <input type="text" name="name" placeholder="Your Name" className="border p-2 w-full mb-2" value={formData.name} onChange={handleChange} />
        <input type="text" name="jobTitle" placeholder="Job Title" className="border p-2 w-full mb-2" value={formData.jobTitle} onChange={handleChange} />
        <input type="text" name="headline" placeholder="Your headline or current Title" className="border p-2 w-full mb-2" value={formData.headline} onChange={handleChange} />
        <input type="text" name="location" placeholder="Your Location" className="border p-2 w-full mb-2" value={formData.location} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Your Phone" className="border p-2 w-full mb-2" value={formData.phone} onChange={handleChange} />
        <input type="text" name="email" placeholder="Your Email" className="border p-2 w-full mb-2" value={formData.email} onChange={handleChange} />

        <hr className="w-full my-6" />

        {/* Profile Picture Upload */}
        <h2 className="text-lg font-semibold mt-5 mb-3">Profile Picture</h2>
        <input type="file" accept="image/*" placeholder="Upload your picture" className="border p-2 w-full mb-2" onChange={handleProfilePictureUpload} />
        {formData.profilePicture && (
          <Image src={formData.profilePicture} alt="profile picture"
            width={32} height={32}
            className="w-32 h-32 object-cover rounded-full border border-gray-300 mt-2" />
        )}


        <hr className="w-full my-6" />

        {/* Work Experience */}
        <h2 className="text-lg font-semibold mt-5 mb-3">Work Experience</h2>
        {formData.workExperience.map((exp, index) => (
          <div key={index} className="mb-3">
            <input type="text" name="position" placeholder="Position" className="border p-2 w-full mb-2" value={exp.position} onChange={(e) => handleChange(e, index, "workExperience")} />
            <input type="text" name="company" placeholder="Company" className="border p-2 w-full mb-2" value={exp.company} onChange={(e) => handleChange(e, index, "workExperience")} />
            <input type="text" name="achievement" placeholder="Achievement" className="border p-2 w-full mb-2" value={exp.achievement} onChange={(e) => handleChange(e, index, "workExperience")} />
            <input type="date" name="startDate" placeholder="starting date" className="border p-2 w-full mb-2" value={exp.startDate} onChange={(e) => handleChange(e, index, "workExperience")} />
            <input type="date" name="endDate" placeholder="ending date" className="border p-2 w-full mb-2" value={exp.endDate} onChange={(e) => handleChange(e, index, "workExperience")} />
          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addExperience}>+ Add Experience</button>

        <hr className="w-full my-6" />

        {/* Skills */}
        <h2 className="text-lg font-semibold mt-5 mb-3">Skills</h2>
        {formData.skills.map((skill, index) => (
          <div key={index} className="mb-3">
            <input type="text" name="skillTitle" placeholder="Skill" className="border p-2 w-full mb-2" value={skill.skillTitle} onChange={(e) => handleChange(e, index, "skills")} />
            <input type="text" name="skillDetail" placeholder="Skill detail" className="border p-2 w-full mb-2" value={skill.skillDetail} onChange={(e) => handleChange(e, index, "skills")} />
          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addSkill}>+ Add Skill</button>

        <hr className="w-full my-6" />

        {/* Education */}
        <h2 className="text-lg font-semibold mt-5 mb-3">Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <input type="text" name="degree" placeholder="Degree" className="border p-2 w-full mb-2" value={edu.degree} onChange={(e) => handleChange(e, index, "education")} />
            <input type="text" name="school" placeholder="School" className="border p-2 w-full mb-2" value={edu.school} onChange={(e) => handleChange(e, index, "education")} />
            <input type="text" name="academicAchievement" placeholder="Academic Achievement" className="border p-2 w-full mb-2" value={edu.academicAchievement} onChange={(e) => handleChange(e, index, "education")} />
            <input type="date" name="startDate" placeholder="starting date" className="border p-2 w-full mb-2" value={edu.startDate} onChange={(e) => handleChange(e, index, "education")} />
            <input type="date" name="endDate" placeholder="ending date" className="border p-2 w-full mb-2" value={edu.endDate} onChange={(e) => handleChange(e, index, "education")} />

          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addMoreEducation}>+ Add Education</button>

        <hr className="w-full my-6" />

        {/* Languages */}
        <h2 className="text-lg font-semibold mt-5 mb-3">Languages</h2>
        {formData.languages.map((lang, index) => (
          <div key={index} className="mb-3">
            <input type="text" name="language" placeholder="Language" className="border p-2 w-full mb-2" value={lang.language} onChange={(e) => handleChange(e, index, "languages")} />
            <input type="text" name="spoken" placeholder="Speaking: Novice - Intermediate - Advanced - Superior - Native" className="border p-2 w-full mb-2" value={lang.spoken} onChange={(e) => handleChange(e, index, "languages")} />
            <input type="text" name="reading" placeholder="Reading: Novice - Intermediate - Advanced - Superior - Native" className="border p-2 w-full mb-2" value={lang.reading} onChange={(e) => handleChange(e, index, "languages")} />
            <input type="text" name="writing" placeholder="Writing: Novice - Intermediate - Advanced - Superior - Native" className="border p-2 w-full mb-2" value={lang.writing} onChange={(e) => handleChange(e, index, "languages")} />
          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addLanguage}>+ Add Language</button>

      </div>

      {/* PDF Download Button */}
      <div className="flex gap-4 mt-10">
        <button
          className="bg-blue-500 text-white p-3 rounded-lg"
          onClick={handleToggleEdit}
        >
          {isEditing ? "Preview Resume" : "Edit Resume"}
        </button>

        <button className="bg-green-500 text-white p-3 rounded-lg" onClick={handleExportPDF}>
          Download PDF
        </button>
      </div>

      {/* Render Resume Template (Only for Display) */}
      <div ref={resumeRef} className="mt-10 w-full border-2">
        <SelectedTemplate id={id} formData={formData} pdfRef={pdfRef} />
      </div>
    </div>
  );
};

export default Template;
