import React from "react";
import Image from "next/image";

interface CategoryCardProps {
    categoryIcon: string;
    categoryField: string;
    categoryDesc: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ categoryIcon, categoryField, categoryDesc}) => {
  return (
  <div className="flex flex-col w-[250px] mt-5 p-8 bg-white shadow-2xl rounded-10 hover:border-2 hover:border-primary cursor-pointer">
    <div className="flex items-center justify-start gap-3">
        <Image src={categoryIcon} alt={categoryField} width={56} height={56}/>
        <h1 className="section-text">{categoryField}</h1>
    </div>

    <hr className="my-6" />

    <div>
        <p className="paragraph-text">{categoryDesc}</p>
    </div>
  </div>
  );
};

export default CategoryCard;
