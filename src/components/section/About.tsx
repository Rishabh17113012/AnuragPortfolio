'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useInView from '@/hooks/useInView';

const About: React.FC = () => {
  const aboutRef = useRef(null);
  const { hasBeenInView } = useInView(aboutRef, { threshold: 0.1 });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div ref={aboutRef} className="w-full p-4 md:p-6 lg:px-12" id="about">
      <div className="max-w-custom mx-auto py-16 md:py-28">
        <motion.h2
          className="text-2xl text-gray-900 font-sans font-semibold dark:text-gray-50 flex items-center mb-10"
          initial="hidden"
          animate={hasBeenInView ? 'visible' : 'hidden'}
          variants={textVariants}
          custom={0}
        >
          <span
            className="text-xl text-bluebell font-serif"
            style={{ transform: 'translateY(-0.15em)' }}
          >
            01.
          </span>
          <span className="ml-4">About Me</span>
          <span className="flex-1 h-px bg-gray-300 dark:bg-gray-700 ml-4 max-w-xs"></span>
        </motion.h2>
        <div className="flex flex-col md:flex-row md:gap-12">
          <motion.div
            className="md:flex-[2]"
            initial="hidden"
            animate={hasBeenInView ? 'visible' : 'hidden'}
            variants={textVariants}
            custom={1}
          >
            {[
              "I’m a passionate Software Developer and Data Enthusiast currently pursuing a B.Tech in Computer Science & Engineering from Bharati Vidyapeeth College of Engineering, Pune. With a strong foundation in MERN Stack, Cloud Platforms (GCP & AWS), and Data Engineering, I thrive on building scalable, real-time web applications and intelligent data-driven solutions.",
              "Education:",
              "B.Tech in Computer Science & Engineering (2021–2025), Bharati Vidyapeeth College Of Engineering, Pune.",
              "ISC (Class XII), St. Aloysius High School (2019–2020).",
              "Interests: Frontend, Backend, Data engineering, AI/ML, Cloud."
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-gray-700 text-[15.5px] font-sans dark:text-gray-300 mt-4 leading-loose"
                custom={index + 2}
                variants={textVariants}
              >
                <span>{text}</span>
              </motion.p>
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-end md:flex-[1] relative mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: hasBeenInView ? 1 : 0,
              x: hasBeenInView ? 0 : 20,
            }}
            transition={{
              duration: 0.5,
              delay: hasBeenInView ? 0.2 : 0,
            }}
          >
            <div className="relative group w-full md:w-[300px] h-auto md:h-[300px]">
              <div className="rounded-lg overflow-hidden">
                <div className="absolute inset-0 border-2 rounded border-bluebell translate-x-4 translate-y-4 -z-10"></div>
                <Image
                  src="/profile.jpg"
                  width={300}
                  height={300}
                  alt="A photo of Anurag Singh"
                  className="rounded-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-bluebell opacity-25 rounded-lg group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
