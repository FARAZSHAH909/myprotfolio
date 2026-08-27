"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt, FaGithub, FaServer, FaReact, FaCode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";

interface ProjectItem {
  id: string;
  title: string;
  category: "Backend & API" | "Full-Stack" | "Frontend & UI" | "E-Commerce";
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured?: boolean;
}

const projectsData: ProjectItem[] = [
  {
    id: "banking-api",
    title: "Banking System Backend API",
    category: "Backend & API",
    description:
      "A safe and scalable Banking Backend API mimicking real-world financial systems with robust authentication, role authorization, and secure transaction handling.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "MVC Architecture", "REST API"],
    liveUrl: "https://lnkd.in/dyM79Sep",
    githubUrl: "https://github.com/FARAZSHAH909",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "trend-dashboard",
    title: "Trend Dashboard",
    category: "Frontend & UI",
    description:
      "Interactive analytics and trend monitoring dashboard built with React.js for visualizing real-time metrics and dynamic data charts.",
    tags: ["React.js", "Tailwind CSS", "Analytics", "Chart UI", "REST APIs"],
    liveUrl: "https://trand-dashboard-frontend.vercel.app/dashboard",
    githubUrl: "https://github.com/FARAZSHAH909",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "swiftride",
    title: "SwiftRide Ride-Sharing App",
    category: "Full-Stack",
    description:
      "Ride-sharing web app interface featuring comprehensive booking workflows, user dashboards, and responsive layout across all devices.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "UI/UX", "Responsive Design"],
    liveUrl: "https://swiftride-phi.vercel.app",
    githubUrl: "https://github.com/FARAZSHAH909",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "shopvista",
    title: "ShopVista E-Commerce Platform",
    category: "E-Commerce",
    description:
      "Modern e-commerce platform engineered for fast browsing, product filtering, intuitive shopping cart experience, and high performance.",
    tags: ["React.js", "Tailwind CSS", "State Management", "E-Commerce"],
    liveUrl: "https://shopvista-eight.vercel.app/",
    githubUrl: "https://github.com/FARAZSHAH909",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "task-mgmt-backend",
    title: "Task Management (Auth & Firebase)",
    category: "Full-Stack",
    description:
      "Secure login-based task management system with protected authentication flows, real-time database updates, and user task boards.",
    tags: ["React.js", "Tailwind CSS", "Firebase Auth", "Realtime DB", "Security"],
    liveUrl: "https://task-management-pi-pearl.vercel.app/login",
    githubUrl: "https://github.com/FARAZSHAH909",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "recipehub",
    title: "RecipeHub Management App",
    category: "Full-Stack",
    description:
      "Recipe discovery, searching, and sharing web application with custom categories, third-party API integration, and responsive layout.",
    tags: ["React.js", "Tailwind CSS", "API Integration", "Web App"],
    liveUrl: "https://recipehub-three.vercel.app/",
    githubUrl: "https://github.com/FARAZSHAH909",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "gitex-driver",
    title: "Gitex Driver Logistics App",
    category: "Full-Stack",
    description:
      "Web solution built for driver management, shipment tracking, and logistics operations with modern administrative panels.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Logistics UI"],
    liveUrl: "https://gitexdriver.vercel.app/",
    githubUrl: "https://github.com/FARAZSHAH909",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "task-mgmt-frontend",
    title: "Task Management Frontend",
    category: "Frontend & UI",
    description:
      "A sleek productivity application featuring interactive task boards, status indicators, and clean user-centric workflow management.",
    tags: ["React.js", "Tailwind CSS", "Productivity", "Component UI"],
    liveUrl: "https://task-management-frontend-mauve-two.vercel.app/",
    githubUrl: "https://github.com/FARAZSHAH909",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "cara-mart",
    title: "Cara Mart Online Marketplace",
    category: "E-Commerce",
    description:
      "Interactive online marketplace with secure authentication, product catalog, user registration, and dynamic cart operations.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Authentication", "Cart Logic"],
    liveUrl: "https://cartmart.netlify.app/login.html",
    githubUrl: "https://github.com/FARAZSHAH909",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
  },
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Backend & API", "Full-Stack", "Frontend & UI", "E-Commerce"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-zinc-950/60">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-pink uppercase tracking-wider text-sm font-semibold mb-3 inline-block">
            Featured Projects & Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent mb-4">
            Recent Work & Applications
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base">
            Explore live web applications, backend APIs, and full-stack projects built with modern technologies.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-pink text-white shadow-lg shadow-pink/30 scale-105"
                    : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-zinc-900/90 border border-zinc-800 hover:border-pink/50 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink/10 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] relative overflow-hidden bg-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-zinc-900/90 border border-zinc-700/50 text-white backdrop-blur-md px-3 py-1 text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-pink text-white font-medium px-2.5 py-0.5 text-xs shadow-md">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-zinc-800/60 mt-auto">
                {project.liveUrl && (
                  <Button
                    size="sm"
                    className="bg-pink hover:bg-pink/90 text-white font-medium rounded-lg text-xs flex items-center gap-1.5 flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-zinc-700 hover:border-pink hover:bg-zinc-800 text-zinc-200 text-xs flex items-center gap-1.5 flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-sm" /> Code Repository
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}