import React from "react";

interface TechnologyProps {
    title: string;
    desc: string;
}

interface CookiesTableProps {
  technologies: TechnologyProps[];
  header: string;
  description: string;
}

const CookiesTable: React.FC<CookiesTableProps> = ({ technologies, description, header }) => {

  return (
  <div className="w-full border-2 border-gray-400 flex flex-col items-start">
    <div className="w-full flex items-center justify-start p-2 border-b-1">
        <h3 className="section-2-text flex-[0.3] text-center">{header}</h3>
        <h3 className="section-2-text flex-1 text-left">{description}</h3>
    </div>

    {technologies.map((technology, index: number) => (
        <div key={index}
        className={`w-full flex items-center justify-start ${index %2 !== 0 ? "bg-gray-100" : "border-y-2 border-gray-400"}`}
        >
            <h3 className="section-2-text flex-[0.3] text-center">{technology.title}</h3>
            <div className="flex-1 p-2">
                <p className="paragraph-text"
                    dangerouslySetInnerHTML={{__html: technology.desc.replace(/LinkedIn/g, "JobFinder")}}
                    />
                </div>
        </div>
    ))}
  </div>
  );
};

export default CookiesTable;
