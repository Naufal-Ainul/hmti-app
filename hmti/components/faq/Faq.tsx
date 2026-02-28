"use client";
import { useState } from "react";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqsData = [
    {
      question: "Lightning-Fast Performance",
      answer: "Built with speed — minimal load times and optimized rendering.",
    },
    {
      question: "Fully Customizable Components",
      answer:
        "Easily adjust styles, structure, and behavior to match your project needs.",
    },
    {
      question: "Responsive by Default",
      answer:
        "Every component are responsive by default — no extra CSS required.",
    },
    {
      question: "Tailwind CSS Powered",
      answer:
        "Built using Tailwind utility classes — no extra CSS or frameworks required.",
    },
    {
      question: "Dark Mode Support",
      answer:
        "All components come ready with light and dark theme support out of the box.",
    },
  ];
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <div className="flex flex-col items-center text-center text-white px-3 mt-50 xl:mt-75 mb-50 xl:mb-75">
        <p className="text-base font-medium text-white mask-t-from-35%">FAQ</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extralight mt-2 text-white mask-b-from-35%">
          Frequently Asked Questions
        </h1>
        <div className="max-w-xl w-full mt-10 flex flex-col gap-4 items-start text-left">
          {faqsData.map((faq, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <div
                className="flex items-center justify-between w-full cursor-pointer bg-linear-to-br from-slate-500/50 via-black to-slate-500/75 mask-b-from-95% mask-r-from-85% border-none p-4 rounded"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h2 className="font-normal text-sm text-slate-200 ">
                  {faq.question}
                </h2>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className={`text-sm text-slate-100 font-normal px-4 transition-all duration-1000 ease-in-out ${openIndex === index ? "opacity-75 max-h-75 translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
