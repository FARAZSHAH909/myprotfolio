"use client";

import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJsonwebtokens, SiFirebase } from "react-icons/si";
import { BsServer, BsDatabaseCheck, BsShieldLock, BsCodeSlash } from "react-icons/bs";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card
      className="bg-dark/80 backdrop-blur-md border border-zinc-800 rounded-xl overflow-hidden hover:border-pink/50 hover:shadow-lg hover:shadow-pink/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-8">
        <div className="flex flex-col gap-6">
          <div
            className="w-16 h-16 rounded-xl bg-gradient-to-r from-pink to-purple-600 flex items-center justify-center shadow-md shadow-pink/20 transition-all duration-200"
            title={title}
          >
            {icon}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-white relative group">
              <Link
                href="#portfolio"
                className="hover:text-pink transition-colors"
                onClick={(e) => handleScroll(e, "portfolio")}
                aria-label={`View projects for ${title}`}
              >
                {title}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
              </Link>
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-pink uppercase tracking-wider text-sm font-semibold mb-3 inline-block">
            What I Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink to-purple-500 bg-clip-text text-transparent mb-4">
            Services & Technical Expertise
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base">
            Specializing in modern server-side architecture, secure REST APIs, scalable database solutions, and intuitive frontend experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Backend & REST API Development"
            description="Developing scalable, robust REST APIs using Node.js and Express.js with clean MVC architecture and comprehensive error handling."
            icon={<BsServer className="h-8 w-8 text-white" />}
            delay={0}
          />
          <ServiceCard
            title="Database Design & Management"
            description="Designing high-performance schema architectures, database indexing, and CRUD pipelines using MongoDB and Mongoose."
            icon={<SiMongodb className="h-8 w-8 text-white" />}
            delay={100}
          />
          <ServiceCard
            title="Authentication & Security"
            description="Implementing secure JWT authentication, role-based access control (RBAC), bcrypt password hashing, and token validation."
            icon={<BsShieldLock className="h-8 w-8 text-white" />}
            delay={200}
          />
          <ServiceCard
            title="Frontend & Full-Stack Apps"
            description="Building fast, interactive user interfaces with React.js, Next.js, and Tailwind CSS seamlessly integrated with backend systems."
            icon={<FaReact className="h-8 w-8 text-white" />}
            delay={300}
          />
          <ServiceCard
            title="API Integration & Third-Party Services"
            description="Connecting web applications with external REST APIs, Firebase real-time services, payment systems, and custom endpoints."
            icon={<BsCodeSlash className="h-8 w-8 text-white" />}
            delay={400}
          />
          <ServiceCard
            title="Clean Code & Scalable Architecture"
            description="Writing maintainable, modular code adhering to modern standards, MVC design patterns, and efficient server-side performance."
            icon={<BsDatabaseCheck className="h-8 w-8 text-white" />}
            delay={500}
          />
        </div>
      </div>
    </section>
  );
}