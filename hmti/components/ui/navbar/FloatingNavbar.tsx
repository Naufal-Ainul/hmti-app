"use client";
import Image from "next/image";
import { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex  max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent rounded-full bg-linear-to-br from-slate-500/75 via-black to-slate-500/75 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-5000 pr-3 pl-2 py-2  items-center justify-center space-x-4",
          className,
        )}
      >
        <div className="cursor-default text-sm font-medium relative border-neutral-200 dark:border-white/20 text-black dark:text-white px-4 py-2 rounded-full">
          <div className="flex flex-row items-center mask-b-from-neutral-50">
            <Image
              src={
                "https://res.cloudinary.com/dxjptcgdd/image/upload/HMTI_dj9rvx.png"
              }
              width={20}
              height={20}
              alt={"logo"}
            />
            <span className="ml-2 text-base text-neutral-200">HMTI</span>
          </div>
        </div>
        <div className="relative dark:text-neutral-50 items-center flex space-x-4 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500">
          {navItems.map(
            (
              navItem, // idx: number,
            ) => (
              <Link
                key={navItem.name} // `link=${idx}`
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-200 items-center flex space-x-1 text-neutral-600",
                )}
              >
                <span className="block sm:hidden mask-b-from-neutral-50">
                  {navItem.icon}
                </span>
                <span className="hidden sm:block text-neutral-400 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-px after:bg-linear-to-r after:from-transparent after:via-blue-400 after:to-transparent after:transition-all after:duration-300 hover:after:w-full">
                  {navItem.name}
                </span>
              </Link>
            ),
          )}
        </div>
        <span className="absolute inset-x-0 w-2/3 mx-auto -bottom-px bg-linear-to-r from-transparent via-blue-400 to-transparent h-px" />
      </motion.div>
    </AnimatePresence>
  );
};
