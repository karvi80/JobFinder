import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
    key: string;
    image: string;
    speaker: string;
    category: string;
    comment: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ key, image, speaker, category, comment }) => {
  return (
    <div key={key}
    className="flex flex-col w-[300px] h-[350px] p-8 bg-white shadow-2xl rounded-10 hover:border-2 hover:border-primary cursor-pointer hover:z-10"
    >
      <div className="flex items-center justify-start gap-3 w-full max-h-[100px]">
        <div className="flex items-center justify-center w-[50px] h-[50px]">
        <Image src={image} alt={speaker} width={50} height={50}
        className="border-2 border-primary h-full h-full rounded-full"
        />
        </div>

        <div>
        <h1 className="section-text">{speaker}</h1>
        <p className="paragraph-text">{category}</p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="overflow-y-scroll h-[200px] pr-2">
        <p className="paragraph-text">{comment}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;



