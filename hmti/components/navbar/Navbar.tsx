"use client";
import { FloatingNav } from "../ui/navbar/FloatingNavbar";
import { SlPeople } from "react-icons/sl";
import { ImInfo } from "react-icons/im";
import { FaRegPaperPlane } from "react-icons/fa6";
import { LuClipboardPen } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IoHomeOutline className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <ImInfo className="h-4 w-4 text-white" />,
    },
    {
      name: "Member",
      link: "/member",
      icon: <ImInfo className="h-4 w-4 text-white" />,
    },
    {
      name: "Proker",
      link: "/proker",
      icon: <LuClipboardPen className="h-4 w-4 text-white" />,
    },
    {
      name: "StudyClub",
      link: "/studyclub",
      icon: <SlPeople className="h-4 w-4 text-white" />,
    },
    {
      name: "Aspirasi",
      link: "/aspirasi",
      icon: <FaRegPaperPlane className="h-4 w-4 text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return (
    <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
  );
};
