"use client";

import Image from "next/image";
import Railson from "@/public/Railson.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              alt="Railson Image"
              src={Railson}
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 -right-3 text-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            😁
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Railson</span> I&apos;m a{" "}
        <span className="font-bold">Web Developer </span> with experience as a{" "}
        <span className="font-bold">Code Review.</span> I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>
        <a
          className="group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10"
          href="/Railson.pdf"
          download
        >
          {" "}
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />{" "}
        </a>
        <a
          className="bg-white p-4 flex items-center gap-2 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer border border-black/10 hover:text-blue-800"
          target="_blank"
          href="https://www.linkedin.com/in/railson-santiago-97991516b/"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 flex items-center gap-2 text-gray-700 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
          target="_blank"
          href="https://github.com/Railson25"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
