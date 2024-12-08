import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { socialMedia } from "@/data";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="about" className="relative pb-12 pt-16 md:pt-8 text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03] flex items-center justify-center"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col xl:flex-row justify-center items-center my-8 md:my-16 px-4 md:px-8 lg:px-16 space-y-8 md:space-y-0 md:space-x-8">
        {/* Image on the Left */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <div>
            <BackgroundGradient className="rounded-2xl p-4 md:p-6 flex flex-col items-center bg-white dark:bg-black-100">
              <Image
                src={`/tofajashore.jpg`}
                alt="Tofaal Ahmed"
                height="200"
                width="200"
                className="object-cover w-40 h-40 md:w-60 md:h-60 rounded-full "
              />
              <div className="relative mt-4 md:mt-0">
                <p className=" text-sm md:text-lg uppercase tracking-widest text-blue-200 mt-4 mb-2 dark:text-neutral-200">
                  Md Tofaal Ahmed
                </p>
                <p className="xl:block hidden text-xs sm:text-sm lg:text-base xl:text-lg text-neutral-600 dark:text-neutral-400 text-center lg:text-left">
                  Experienced Next.js developer with a passion for crafting
                  dynamic, user-centric web applications.
                </p>

                <p className="xl:hidden block text-xs sm:text-sm lg:text-base xl:text-lg text-neutral-600 dark:text-neutral-400 ">
                  Hi! I&apos;m Tofaal, a Next.js Developer based in Bangladesh.
                  I specialize in creating responsive, high-performance web
                  applications using...
                </p>
                {/* Skills */}
                <div className="mt-3 md:mt-0 space-y-2 md:space-y-0 justify-evenly  md:flex md:flex-wrap md:gap-3">
                  <div>
                    <MagicButton
                      title="Next.Js || React.Js"
                      icon=""
                      position=""
                    />
                  </div>
                  <div>
                    <MagicButton
                      title="TypeScript || JavaScript"
                      icon=""
                      position=""
                    />
                  </div>
                  <div>
                    <MagicButton
                      title="Tailwind CSS || ShadCN"
                      icon=""
                      position=""
                    />
                  </div>
                  <div>
                    <MagicButton
                      title="Express.Js || MongoDB "
                      icon=""
                      position=""
                    />
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        </div>

        {/* Text on the Right */}
        <div className="hidden xl:flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4 max-w-lg">
          <p className="uppercase tracking-widest text-xs text-blue-200">
            Web Developer & Designer
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight"
          />

          <p className="text-xs md:text-sm lg:text-base">
            Hi! I&apos;m Tofaal, a Next.js Developer based in Bangladesh. I
            specialize in creating responsive, high-performance web applications
            using
            <span className="text-[#CBACF9]"> Next.js, </span>
            <span className="text-[#CBACF9]">TypeScript, </span>
            <span className="text-[#CBACF9]">Tailwind CSS, </span>and modern
            frontend technologies.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-4">
            {socialMedia.map((info) => (
              <Link key={info.id} href={info.link}>
                <div className="w-8 h-8 md:w-10 md:h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                  <img src={info.img} alt="icons" width={16} height={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
