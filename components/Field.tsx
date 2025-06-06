import { categories } from "@/constants";
import React from "react";
import CategoryCard from "./CategoryCard";


const Field = () => {
    return (
    <div className="w-full mt-20 p-10 flex flex-col rounded-lg bg-primary bg-opacity-10 ">
        <div className="w-full flex items-center justify-between gap-5">
            <div className="flex flex-col">
                <h1 className="subhead-text">Let's help you choose the category you want</h1>
                <p className="paragraph-text">Choosing the right career path can have a significant impact on your life and may lead to a long and fulfilling career. Reviewing your career path can help you set and achieve your professional goals.</p>
            </div>

            <div className="hidden lg:flex items-start justify-between p-4 gap-3">
                {categories.slice(0, 2).map((category) => (
                    <CategoryCard
                    categoryIcon={category.icon}
                    categoryField={category.field}
                    categoryDesc={category.desc}
                     />
                ))
                }
            </div>
        </div>

        <div className="hidden lg:flex justify-between flex-wrap p-4">
        {categories.slice(2, 6).map((category) => (
                    <CategoryCard
                    categoryIcon={category.icon}
                    categoryField={category.field}
                    categoryDesc={category.desc}
                     />
                ))
                }
        </div>

        <div className="lg:hidden flex justify-between flex-wrap p-4 gap-5">
        {categories.map((category) => (
                    <CategoryCard
                    categoryIcon={category.icon}
                    categoryField={category.field}
                    categoryDesc={category.desc}
                     />
                ))
                }
        </div>
    </div>
);
};

export default Field;
