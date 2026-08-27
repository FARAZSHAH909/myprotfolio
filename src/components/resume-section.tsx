"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaBriefcase, FaGraduationCap, FaCertificate, FaTools, FaUser, FaCheckCircle } from "react-icons/fa";
import { BsServer, BsCodeSlash, BsDatabaseCheck, BsShieldCheck } from "react-icons/bs";

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "skills" | "personal">("experience");

  return (
    <section id="resume" className="py-20 bg-dark">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-pink uppercase tracking-wider text-sm font-semibold mb-3 inline-block">
            Professional Background
          </span>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent mb-4">
            Resume & Qualifications
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base">
            Detailed overview of work experience, academic background, certifications, and technical skill matrix.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                activeTab === "experience"
                  ? "bg-pink text-white shadow-lg shadow-pink/30 scale-105"
                  : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              <FaBriefcase className="text-sm" /> Work Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                activeTab === "education"
                  ? "bg-pink text-white shadow-lg shadow-pink/30 scale-105"
                  : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              <FaGraduationCap className="text-sm" /> Education & Certifications
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                activeTab === "skills"
                  ? "bg-pink text-white shadow-lg shadow-pink/30 scale-105"
                  : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              <FaTools className="text-sm" /> Technical Skills
            </button>
            <button
              onClick={() => setActiveTab("personal")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                activeTab === "personal"
                  ? "bg-pink text-white shadow-lg shadow-pink/30 scale-105"
                  : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              <FaUser className="text-sm" /> Personal Info
            </button>
          </div>
        </div>

        {/* Tab 1: Experience */}
        {activeTab === "experience" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
            {/* CIS */}
            <Card className="bg-zinc-900/90 border border-zinc-800 hover:border-pink/40 rounded-2xl p-2 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Developer (Full-Stack & Backend)</h3>
                    <p className="text-pink font-medium text-sm">CIS (Cloud Innovators Solution)</p>
                  </div>
                  <Badge className="bg-pink/20 text-pink border border-pink/30 shrink-0">
                    2026 – Present
                  </Badge>
                </div>
                <ul className="space-y-2.5 text-zinc-300 text-sm">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-pink text-xs mt-1 shrink-0" />
                    <span>Completed Full-Stack development for CIS clients, delivering robust web apps and APIs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-pink text-xs mt-1 shrink-0" />
                    <span>Developed and delivered responsive web applications, scalable REST APIs, and technical solutions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-pink text-xs mt-1 shrink-0" />
                    <span>Worked as a dedicated freelancer within CIS handling client requirements with precision.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-pink text-xs mt-1 shrink-0" />
                    <span>Maintained high focus on clean code, scalable database architectures, and timely delivery of assignments.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 360Xpert Solutions */}
            <Card className="bg-zinc-900/90 border border-zinc-800 hover:border-pink/40 rounded-2xl p-2 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Front-End Developer Intern</h3>
                    <p className="text-pink font-medium text-sm">360Xpert Solutions</p>
                  </div>
                  <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700 shrink-0">
                    Completed
                  </Badge>
                </div>
                <ul className="space-y-2.5 text-zinc-300 text-sm">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-pink text-xs mt-1 shrink-0" />
                    <span>Completed internship as a Front-End Developer with hands-on exposure to production workflows.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-pink text-xs mt-1 shrink-0" />
                    <span>Built responsive, cross-browser web interfaces using HTML, CSS, JavaScript, and React.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-pink text-xs mt-1 shrink-0" />
                    <span>Collaborated with engineering teams, adopting industry-standard agile and coding practices.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tab 2: Education & Certifications */}
        {activeTab === "education" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                <FaGraduationCap className="text-pink" /> Education
              </h3>

              <Card className="bg-zinc-900/90 border border-zinc-800 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-white">Govt. Degree Boys College Malir Karachi</h4>
                    <Badge className="bg-zinc-800 text-zinc-300">2023 – 2024</Badge>
                  </div>
                  <p className="text-pink text-sm font-medium mb-2">Intermediate Education</p>
                  <p className="text-zinc-400 text-sm">Karachi, Pakistan</p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/90 border border-zinc-800 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-white">Baldia Boys Secondary School Karachi</h4>
                    <Badge className="bg-zinc-800 text-zinc-300">2022 – 2023</Badge>
                  </div>
                  <p className="text-pink text-sm font-medium mb-2">Matriculation (Science)</p>
                  <p className="text-zinc-400 text-sm">Karachi, Pakistan</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                <FaCertificate className="text-pink" /> Certifications
              </h3>

              <Card className="bg-zinc-900/90 border border-pink/30 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-white">Web & App Development Certification</h4>
                    <Badge className="bg-pink/20 text-pink border border-pink/40">Certified</Badge>
                  </div>
                  <p className="text-pink text-sm font-semibold mb-3">SMIT (Saylani Mass IT Center)</p>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    In-depth program covering Full-Stack Web Development, Modern JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB, RESTful APIs, and responsive design systems.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">Node.js</span>
                    <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">React.js</span>
                    <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">MongoDB</span>
                    <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">Express.js</span>
                    <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">REST APIs</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Tab 3: Technical Skills Matrix */}
        {activeTab === "skills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
            {/* Backend */}
            <Card className="bg-zinc-900/90 border border-zinc-800 hover:border-pink/40 rounded-2xl p-2 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-pink/10 rounded-xl text-pink">
                    <BsServer className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Backend Engineering</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Node.js",
                    "Express.js",
                    "REST API Development",
                    "CRUD Operations",
                    "Authentication & Authorization",
                    "JWT Authentication",
                    "API Integration",
                    "MVC Architecture",
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center justify-between text-sm py-1 border-b border-zinc-800/60 last:border-0">
                      <span className="text-zinc-200">{skill}</span>
                      <FaCheckCircle className="text-pink text-xs" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Frontend */}
            <Card className="bg-zinc-900/90 border border-zinc-800 hover:border-pink/40 rounded-2xl p-2 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-pink/10 rounded-xl text-pink">
                    <BsCodeSlash className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Frontend Development</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "React.js",
                    "Next.js",
                    "JavaScript (ES6+)",
                    "Tailwind CSS",
                    "HTML5 & CSS3",
                    "Responsive Web Design",
                    "Component Architecture",
                    "State Management",
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center justify-between text-sm py-1 border-b border-zinc-800/60 last:border-0">
                      <span className="text-zinc-200">{skill}</span>
                      <FaCheckCircle className="text-pink text-xs" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Databases & Tools */}
            <Card className="bg-zinc-900/90 border border-zinc-800 hover:border-pink/40 rounded-2xl p-2 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-pink/10 rounded-xl text-pink">
                    <BsDatabaseCheck className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Databases & Tools</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "MongoDB & Mongoose",
                    "Firebase Realtime DB",
                    "Git & Version Control",
                    "GitHub Repositories",
                    "Postman API Testing",
                    "Vercel & Netlify Deployment",
                    "Biome & ESLint",
                    "VS Code Environment",
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center justify-between text-sm py-1 border-b border-zinc-800/60 last:border-0">
                      <span className="text-zinc-200">{skill}</span>
                      <FaCheckCircle className="text-pink text-xs" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tab 4: Personal Info */}
        {activeTab === "personal" && (
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <Card className="bg-zinc-900/90 border border-zinc-800 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">
                  Personal Information & Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <span className="text-xs uppercase text-zinc-500 font-semibold block mb-1">Full Name</span>
                    <p className="text-white text-base font-medium">Faraz Shah</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase text-zinc-500 font-semibold block mb-1">Designation</span>
                    <p className="text-white text-base font-medium">Back-End & Full-Stack Developer</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase text-zinc-500 font-semibold block mb-1">Email Address</span>
                    <a href="mailto:farazshah9095@gmail.com" className="text-pink text-base font-medium hover:underline">
                      farazshah9095@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-xs uppercase text-zinc-500 font-semibold block mb-1">Contact Phone</span>
                    <a href="tel:+923183052533" className="text-white text-base font-medium hover:text-pink">
                      +92 318 3052533
                    </a>
                  </div>
                  <div>
                    <span className="text-xs uppercase text-zinc-500 font-semibold block mb-1">Location</span>
                    <p className="text-white text-base font-medium">Karachi, Pakistan</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase text-zinc-500 font-semibold block mb-1">Date of Birth</span>
                    <p className="text-white text-base font-medium">7th October 2003</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase text-zinc-500 font-semibold block mb-1">Marital Status</span>
                    <p className="text-white text-base font-medium">Single</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase text-zinc-500 font-semibold block mb-1">Languages</span>
                    <p className="text-white text-base font-medium">English, Urdu</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}