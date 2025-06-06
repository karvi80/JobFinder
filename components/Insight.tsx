import React from "react";
import { insights } from "@/constants";
import Image from "next/image";

const Insight = () => (
    <section className="w-ful mt-20 p-4 flex flex-col items-center justify-center">
        <div className="grid max-h-screen h-auto md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4">
            {insights.map((insight, index) => (
                <div key={insight.title}
                className={`group relative flex flex-col p-6 overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                    index === 0
                      ? 'md:col-span-2 md:row-span-2'
                      : index === 1
                      ? 'md:col-span-1 md:row-span-1'
                      : 'md:col-span-1 md:row-span-1 lg:row-span-2'
                  }`}
                >
                    <Image src={insight.image} alt={insight.title} fill
                    className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-50 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <h2 className="mb-2 text-2xl font-bold leading-tight">{insight.title}</h2>

                    <div>
                        <p>{insight.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>

);

export default Insight;
