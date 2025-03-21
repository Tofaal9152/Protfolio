import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";
import Link from "next/link";

const ExperienceAndResume = () => {
  return (
    <div id="experience" className="py-20 w-full">
      <h1 className="heading text-center text-3xl md:text-4xl lg:text-5xl font-bold">
        My Resume & <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 mb-32 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                width={100}
                height={100}
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-24 w-16 rounded-lg"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      <div className="mx-auto max-w-7xl mt-10 px-4">
        <Link
          href="https://drive.google.com/drive/u/1/folders/163SFJu6pIqHM8Smj0-CfCs3Pko7FdE0s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image

            width={1000}
            height={1000}
            src="/Tofaal_Resume(M).jpg"
            alt="Resume"
            className="w-full h-auto rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default ExperienceAndResume;
