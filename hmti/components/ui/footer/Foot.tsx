import clsx from "clsx";
import { ShootingStars } from "../background/ShootingStar";
import { StarsBackground } from "../background/StarsBackground";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface FootProps {
  className?: string;
}

export default function Foot({ className }: FootProps) {
  return (
    <>
      <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

                * {
                    font-family: "Poppins", sans-serif;
                }

                @keyframes scroll {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }

                .animate-scroll {
                    animation: scroll 10s linear infinite;
                }
            `}</style>
      <footer
        className={clsx("h-fit bg-black py-12 px-4 sm:px-6 lg:px-8", className)}
      >
        <div className="rounded-md bg-black flex flex-col items-center justify-center relative w-full">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-wrap sm:justify-between justify-around gap-y-12 lg:gap-x-8">
              <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left z-10">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-5"
                >
                  <Image
                    src="https://res.cloudinary.com/dxjptcgdd/image/upload/v1769009884/HMTI_dj9rvx.png"
                    width={50}
                    height={50}
                    alt="logo"
                    className="mask-b-from-0%"
                  />
                  <span className="text-blue-100 text-3xl font-medium mask-b-from-neutral-50">
                    HMTI UMP
                  </span>
                </Link>
                <div className="w-full max-w-52 h-px mt-8 bg-linear-to-r from-black via-white/75 to-black"></div>
                <div className="text-sm text-white/60 mt-6 max-w-sm leading-relaxed">
                  <div>
                    <span className="flex flex-row items-center gap-1 mask-b-from-neutral-50 text-white">
                      <FaMapMarkerAlt /> Alamat
                    </span>
                    <p className="text-xs mx-5 text-left">
                      Jl. KH. Ahmad Dahlan, Purwokerto, Banyumas,
                      <br /> Jawa Tengah 53182
                    </p>
                  </div>
                  <div className='mt-3'>
                    <span className="flex flex-row items-center gap-1 text-white mask-b-from-neutral-50">
                      <MdEmail /> Email
                    </span>
                    <p className="text-xs mx-5 text-left">
                      hmtiump@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-sm text-white font-medium mask-b-from-neutral-50">
                  Navigation
                </h3>
                <div className="flex flex-col gap-2 mt-6 z-10">
                  <Link
                    href="/"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/member"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Member
                  </Link>
                  <Link
                    href="/studyclub"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    StudyClub
                  </Link>
                  <Link
                    href="/proker"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Proker
                  </Link>
                  <Link
                    href="/aspirasi"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Aspiration
                  </Link>
                </div>
              </div>

              <div className="sm:w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left z-10">
                <h3 className="text-sm text-white font-medium mask-b-from-neutral-50">
                  Social Links
                </h3>
                <div className="flex flex-col gap-2 mt-6">
                  <Link
                    href="https://www.instagram.com/hmtiftsump/"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="https://www.youtube.com/@hmtiftsump1490"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Youtube
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left z-10">
                <h3 className="text-sm text-white font-medium mask-b-from-neutral-50">
                  Subscribe for news
                </h3>
                <div className="flex items-center border gap-2 border-white/20 h-13 max-w-80 w-full rounded-full overflow-hidden mt-4">
                  <input
                    type="email"
                    placeholder="Enter your email.."
                    className="w-full h-full pl-6 outline-none text-sm bg-transparent text-white placeholder-white/60 placeholder:text-xs"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-linear-to-br from-slate-400 via-black to-slate-500/75 shadow-sm shadow-blue-400 active:scale-95 transition w-56 h-10 rounded-full text-sm text-white cursor-pointer mr-1.5"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full h-px mt-16 mb-4 bg-linear-to-r from-black via-white/25 to-black"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-white/60">© 2026 HMTI UMP</p>
              <div className="w-fit flex items-center gap-6 overflow-hidden whitespace-nowrap">
                <span className="animate-scroll text-xs text-white/60">
                  Made with <span className="mask-b-from-25%">💙</span> by HMTI
                  Ristek
                </span>
              </div>
            </div>
          </div>

          {/* <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-linear-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
          <span>Shooting Star</span>
          <span className="text-white text-lg font-thin">x</span>
          <span>Star Background</span>
        </h2> */}
          <ShootingStars />
          <StarsBackground />
        </div>
      </footer>
    </>
  );
}
