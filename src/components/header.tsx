"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/social-icons";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-dark/90 backdrop-blur-md shadow-md">
      <div className="container max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-white bg-gradient-to-r from-pink to-purple-500 p-2 px-4 rounded-lg hover:scale-105 transition-transform duration-200"
          aria-label="Faraz Shah Home"
          onClick={(e) => handleScroll(e, "home")}
        >
          FS
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#home"
            className="text-zinc-300 hover:text-pink relative group transition-colors duration-200"
            onClick={(e) => handleScroll(e, "home")}
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#services"
            className="text-zinc-300 hover:text-pink relative group transition-colors duration-200"
            onClick={(e) => handleScroll(e, "services")}
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#portfolio"
            className="text-zinc-300 hover:text-pink relative group transition-colors duration-200"
            onClick={(e) => handleScroll(e, "portfolio")}
          >
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#resume"
            className="text-zinc-300 hover:text-pink relative group transition-colors duration-200"
            onClick={(e) => handleScroll(e, "resume")}
          >
            Experience & Skills
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#contacts"
            className="text-zinc-300 hover:text-pink relative group transition-colors duration-200"
            onClick={(e) => handleScroll(e, "contacts")}
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Button
            className="bg-pink hover:bg-pink/90 text-white font-medium px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
            asChild
          >
            <Link href="#contacts" onClick={(e) => handleScroll(e, "contacts")}>
              Hire Me
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/FARAZSHAH909"
              target="_blank"
              className="p-2 rounded-md bg-dark hover:bg-pink transition-all duration-200 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="h-4 w-4 text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/faraz-shah-934947306/"
              target="_blank"
              className="p-2 rounded-md bg-dark hover:bg-pink transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="h-4 w-4 text-white" />
            </Link>
          </div>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark/95 py-4 px-6">
          <nav className="flex flex-col items-center gap-4">
            <Link
              href="#home"
              className="text-zinc-300 hover:text-pink transition-colors duration-200"
              onClick={(e) => handleScroll(e, "home")}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-zinc-300 hover:text-pink transition-colors duration-200"
              onClick={(e) => handleScroll(e, "services")}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-zinc-300 hover:text-pink transition-colors duration-200"
              onClick={(e) => handleScroll(e, "portfolio")}
            >
              Projects
            </Link>
            <Link
              href="#resume"
              className="text-zinc-300 hover:text-pink transition-colors duration-200"
              onClick={(e) => handleScroll(e, "resume")}
            >
              Experience & Skills
            </Link>
            <Link
              href="#contacts"
              className="text-zinc-300 hover:text-pink transition-colors duration-200"
              onClick={(e) => handleScroll(e, "contacts")}
            >
              Contact
            </Link>
            <Button
              className="bg-pink hover:bg-pink/90 text-white font-medium px-6 py-2 rounded-full w-full max-w-xs"
              asChild
            >
              <Link href="#contacts" onClick={(e) => handleScroll(e, "contacts")}>
                Hire Me
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}