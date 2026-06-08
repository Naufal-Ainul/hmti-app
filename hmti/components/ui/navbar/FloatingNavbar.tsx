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
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

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
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // Always visible at top of page
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setMobileOpen(false);
        }
      }
    }
  });

  const isActive = (link: string) => {
    if (link === "/") return pathname === "/";
    return pathname.startsWith(link);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
            filter: "blur(10px)",
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
            filter: visible ? "blur(0px)" : "blur(10px)",
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={cn(
            "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.08] rounded-full bg-slate-950/70 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)] z-[5000] pr-3 pl-2 py-2 items-center justify-center space-x-4",
            className,
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-medium relative px-4 py-2 rounded-full group"
          >
            <div className="flex flex-row items-center">
              <Image
                src={
                  "https://res.cloudinary.com/dxjptcgdd/image/upload/HMTI_dj9rvx.png"
                }
                width={20}
                height={20}
                alt={"logo"}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span className="ml-2 text-base text-neutral-200 font-semibold">HMTI</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="relative items-center hidden sm:flex space-x-1 text-neutral-600">
            {navItems.map((navItem) => (
              <Link
                key={navItem.name}
                href={navItem.link}
                className={cn(
                  "relative px-3 py-1.5 rounded-full text-sm transition-all duration-300",
                  isActive(navItem.link)
                    ? "text-white"
                    : "text-neutral-400 hover:text-white",
                )}
              >
                {/* Active indicator background */}
                {isActive(navItem.link) && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.08]"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{navItem.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden relative z-10 p-2 text-neutral-300 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <HiX className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
            </motion.div>
          </button>

          {/* Bottom glow line */}
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent h-px" />
        </motion.div>
      </AnimatePresence>

      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[4998] sm:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-20 inset-x-4 z-[4999] sm:hidden"
          >
            <div className="bg-slate-950/95 backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-4 shadow-[0_16px_64px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col space-y-1">
                {navItems.map((navItem, idx) => (
                  <motion.div
                    key={navItem.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.25, ease: "easeOut" }}
                  >
                    <Link
                      href={navItem.link}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                        isActive(navItem.link)
                          ? "text-white bg-white/[0.06] border border-white/[0.06]"
                          : "text-neutral-400 hover:text-white hover:bg-white/[0.04]",
                      )}
                    >
                      {navItem.icon}
                      <span className="text-sm font-medium">{navItem.name}</span>
                      {isActive(navItem.link) && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
              {/* Bottom glow */}
              <span className="block w-2/3 mx-auto mt-3 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
