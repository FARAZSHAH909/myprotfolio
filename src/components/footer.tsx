"use client";

import React from "react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-14">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-2xl font-bold text-white bg-gradient-to-r from-pink to-purple-500 p-2 px-4 rounded-lg inline-block mb-4 hover:scale-105 transition-transform duration-200"
              aria-label="Faraz Shah Home"
              onClick={(e) => handleScroll(e, "home")}
            >
              FS
            </Link>
            <h4 className="text-lg font-bold text-white mb-2">Faraz Shah</h4>
            <p className="text-pink text-sm font-medium mb-3">Back-End & Full-Stack Developer</p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
              Passionate developer specializing in Node.js, Express.js, MongoDB, React.js, and REST APIs. Creating high-performance, scalable web solutions.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://github.com/FARAZSHAH909"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-pink hover:border-pink transition-all duration-200 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/faraz-shah-934947306/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-pink hover:border-pink transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="h-4 w-4 text-white" />
              </Link>
              <a
                href="mailto:farazshah9095@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-pink hover:border-pink transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h6 className="text-base font-bold text-white mb-4">Quick Navigation</h6>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="#home"
                  className="text-zinc-400 hover:text-pink transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-zinc-400 hover:text-pink transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-zinc-400 hover:text-pink transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "portfolio")}
                >
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#resume"
                  className="text-zinc-400 hover:text-pink transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "resume")}
                >
                  Experience & Resume
                </Link>
              </li>
              <li>
                <Link
                  href="#contacts"
                  className="text-zinc-400 hover:text-pink transition-colors duration-200"
                  onClick={(e) => handleScroll(e, "contacts")}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h6 className="text-base font-bold text-white mb-4">Contact Information</h6>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-pink shrink-0" />
                <span>Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-pink shrink-0" />
                <a href="mailto:farazshah9095@gmail.com" className="hover:text-pink transition-colors break-all">
                  farazshah9095@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-pink shrink-0" />
                <a href="tel:+923183052533" className="hover:text-pink transition-colors">
                  +92 318 3052533
                </a>
              </li>
              <li className="pt-2 text-xs text-zinc-500">
                Portfolio: <a href="https://protfolio-332c.vercel.app" target="_blank" rel="noopener noreferrer" className="text-pink hover:underline">protfolio-332c.vercel.app</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 Faraz Shah. All rights reserved.</p>
          <p>Built with Next.js, React.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}