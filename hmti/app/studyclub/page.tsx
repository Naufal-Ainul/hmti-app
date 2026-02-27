"use client";
import Hero from "../components/hero/Hero";
import Card from "../components/card/Card";
import { Faq } from "../components/faq/Faq";
import AboutSC from "../components/about/AboutSC";
import { useFetchMentor } from "../api/mentor/useFetchMentor";
// import ImageSC from "../components/about/ImageSC";

const StudyClub = () => {
  const { mentors } = useFetchMentor();

  return (
    <section className="">
      <Hero title="Cerenity Study Club" />
      <AboutSC />
      <div className="flex flex-col items-center justify-center mt-50">
        <h1 className="sm:text-4xl text-2xl font-extralight mb-20 text-white mask-b-from-35%">
          Meet Our Mentor
        </h1>
        <div className="flex flex-wrap items-center justify-center m-auto gap-20">
          {mentors.map((mentor) => (
            <Card {...mentor} key={mentor.id} />
          ))}
        </div>
      </div>
      <Faq />
    </section>
  );
};

export default StudyClub;
