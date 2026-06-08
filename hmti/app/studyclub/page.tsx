"use client";
import Hero from "../../components/hero/Hero";
import Card from "../../components/card/Card";
import { Faq } from "../../components/faq/Faq";
import AboutSC from "../../components/about/AboutSC";
import { useFetchMentor } from "../../api/mentor/useFetchMentor";
import { motion } from "motion/react";

const StudyClub = () => {
  const { mentors } = useFetchMentor();

  return (
    <section className="">
      <Hero title="Cerenity Study Club" />
      <AboutSC />
      <div className="flex flex-col items-center justify-center mt-24 sm:mt-32 md:mt-40 px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="sm:text-4xl text-2xl font-extralight mb-12 sm:mb-16 md:mb-20 text-white mask-b-from-35%"
        >
          Meet Our Mentor
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center max-w-6xl mx-auto w-full">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card {...mentor} />
            </motion.div>
          ))}
        </div>
      </div>
      <Faq />
    </section>
  );
};

export default StudyClub;
