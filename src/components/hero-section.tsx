"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiJsonwebtokens, SiFirebase, SiGit } from "react-icons/si";
import { BsServer, BsDatabaseCheck, BsShieldLock } from "react-icons/bs";

export default function HeroSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 min-h-screen flex items-center">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink/10 border border-pink/30 text-pink text-sm font-medium w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-pink animate-pulse"></span>
              Available for Opportunities & Freelance
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 heading-gradient">
              Hi, I'm <span className="text-pink">Faraz Shah</span> <br />
              <span className="text-3xl sm:text-4xl md:text-5xl text-zinc-100 font-semibold">
                Back-End & Full-Stack Developer
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm mb-6">
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-pink text-xs" /> Karachi, Pakistan
              </span>
              <span className="text-zinc-600">•</span>
              <a href="mailto:farazshah9095@gmail.com" className="flex items-center gap-1.5 hover:text-pink transition-colors">
                <FaEnvelope className="text-pink text-xs" /> farazshah9095@gmail.com
              </a>
              <span className="text-zinc-600">•</span>
              <a href="tel:+923183052533" className="flex items-center gap-1.5 hover:text-pink transition-colors">
                <FaPhoneAlt className="text-pink text-xs" /> +92 318 3052533
              </a>
            </div>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              I am a hardworking Full-Stack Developer with a strong passion for <span className="text-pink font-semibold">Backend Architecture</span>, robust <span className="text-white font-medium">REST APIs</span>, and scalable database systems. Experienced with Node.js, Express.js, MongoDB, React.js, and Tailwind CSS to build high-performance web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">Connect With Me</span>
                <div className="flex gap-3">
                  <Link
                    href="https://github.com/FARAZSHAH909"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/80 border border-zinc-700/50 hover:bg-pink hover:border-pink hover:shadow-lg hover:shadow-pink/20 transition-all duration-200 hover:scale-110"
                    aria-label="GitHub Profile"
                  >
                    <GitHubIcon className="h-5 w-5 text-white" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/faraz-shah-934947306/"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/80 border border-zinc-700/50 hover:bg-pink hover:border-pink hover:shadow-lg hover:shadow-pink/20 transition-all duration-200 hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedInIcon className="h-5 w-5 text-white" />
                  </Link>
                  <a
                    href="mailto:farazshah9095@gmail.com"
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/80 border border-zinc-700/50 hover:bg-pink hover:border-pink hover:shadow-lg hover:shadow-pink/20 transition-all duration-200 hover:scale-110"
                    aria-label="Send Email"
                  >
                    <FaEnvelope className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">Core Tech Stack</span>
                <div className="flex gap-2.5 flex-wrap">
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-zinc-800/80 border border-zinc-700/50 hover:bg-zinc-700 hover:scale-110 transition-all" title="Node.js">
                    <FaNodeJs className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-zinc-800/80 border border-zinc-700/50 hover:bg-zinc-700 hover:scale-110 transition-all" title="Express.js">
                    <SiExpress className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-zinc-800/80 border border-zinc-700/50 hover:bg-zinc-700 hover:scale-110 transition-all" title="MongoDB">
                    <SiMongodb className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-zinc-800/80 border border-zinc-700/50 hover:bg-zinc-700 hover:scale-110 transition-all" title="React.js">
                    <FaReact className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-zinc-800/80 border border-zinc-700/50 hover:bg-zinc-700 hover:scale-110 transition-all" title="Next.js">
                    <SiNextdotjs className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-zinc-800/80 border border-zinc-700/50 hover:bg-zinc-700 hover:scale-110 transition-all" title="Tailwind CSS">
                    <SiTailwindcss className="h-5 w-5 text-teal-400" />
                  </div>
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-zinc-800/80 border border-zinc-700/50 hover:bg-zinc-700 hover:scale-110 transition-all" title="JWT & Auth">
                    <SiJsonwebtokens className="h-5 w-5 text-pink" />
                  </div>
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-zinc-800/80 border border-zinc-700/50 hover:bg-zinc-700 hover:scale-110 transition-all" title="Git & GitHub">
                    <SiGit className="h-5 w-5 text-orange-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-pink hover:bg-pink/90 text-white font-semibold px-8 py-6 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-pink/25"
                asChild
              >
                <Link href="#contacts" onClick={(e) => handleScroll(e, "contacts")}>
                  Get in Touch
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 hover:border-pink font-semibold px-8 py-6 rounded-full transition-all duration-200"
                asChild
              >
                <Link href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
                  View Projects
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-[340px] aspect-[3/4] group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-zinc-700/80 bg-zinc-800">
                <Image
                  src="/farazshah.jpeg"
                  alt="Faraz Shah - Back-End Developer"
                  fill
                  priority
                  className="rounded-2xl object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:right-0 bg-zinc-900/95 border border-pink/30 p-4 rounded-xl shadow-2xl backdrop-blur-md max-w-xs z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink to-purple-600 flex items-center justify-center text-white shrink-0">
                  <BsServer className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full-Stack & Backend Dev</h4>
                  <p className="text-xs text-pink font-medium">CIS & 360Xpert Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}