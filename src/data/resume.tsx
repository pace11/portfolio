import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Iriansyah",
  initials: "IP",
  url: "https://www.pace11.my.id",
  location: "Tangerang, Banten, Indonesia",
  locationLink:
    "https://www.google.com/maps/place/Tangerang,+Banten,+Indonesia",
  description:
    "Software Engineer specializing in React.js, Next.js, TypeScript, and Node.js | Currently Exploring Go & DevOps",
  summary:
    "I'm a Software Engineer with 6+ years of experience specializing in building scalable web applications using React, Next.js, and TypeScript. Experienced in designing frontend architecture, implementing SSO systems, and optimizing performance for production systems. Proven track record in leading frontend initiatives, mentoring engineers, and delivering high-impact features across fintech and SaaS platforms. Strong understanding of fullstack development including Node.js, Go, and system integrations",
  avatarUrl: "/new/iriansyah.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mailto:rppratama1771@gmail.com",
    tel: "tel:+6282248080870",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pace11",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-iriansyah-putra-pratama-a0120514b",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ryanpace",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Hyperscal",
      href: "https://hyperscal.com",
      badges: [],
      location: "Onsite",
      title: "Fullstack Engineer",
      logoUrl: "/new/hyperscal.png",
      start: "August 2025",
      end: "Present",
      description: "Designed and developed a scalable multi-tenant authentication platform with SSO (Google & Microsoft), secure multi-device session management, and configurable tenant settings for web and mobile applications.",
    },
    {
      company: "Sanbercode",
      badges: [],
      href: "https://sanbercode.com/",
      location: "Remote",
      title: "Instructor",
      logoUrl: "/new/sanbercode.png",
      start: "October 2023",
      end: "September 2025",
      description:
        "Mentored over 200 students in Next.js by providing technical guidance, code reviews, and hands-on support to help them build production-ready frontend applications.",
    },
    {
      company: "eFishery",
      href: "https://efishery.com",
      badges: [],
      location: "Remote",
      title: "Mid Frontend Engineer",
      logoUrl: "/new/efishery.jpeg",
      start: "March 2022",
      end: "February 2025",
      description:
        "Contributed as an Individual Contributor by developing internal platforms, enhancing GraphQL architecture, building Go-based APIs, and improving development workflows through CI/CD, code quality, and observability initiatives.",
    },
    {
      company: "Female Daily Network",
      href: "https://femaledaily.com",
      badges: [],
      location: "Onsite",
      title: "Frontend Developer",
      logoUrl: "/new/femaledaily.jpg",
      start: "January 2020",
      end: "March 2022",
      description:
        "Led a team of three frontend engineers to modernize the authentication system, implement a monorepo architecture, and establish CI/CD pipelines that improved development efficiency and deployment reliability.",
    },
    {
      company: "Ralali.com",
      href: "https://www.ralali.com",
      badges: [],
      location: "Onsite",
      title: "Software Engineer, Frontend",
      logoUrl: "/new/ralali.png",
      start: "March 2019",
      end: "December 2019",
      description:
        "Developed mobile-first React.js applications while building a reusable UI component library with Storybook and leading key CMS interface improvements to enhance user experience.",
    },
    {
      company: "Disitu.com",
      href: "https://disitu.com/",
      badges: [],
      location: "Onsite",
      title: "Web Developer",
      logoUrl: "/new/disitu.jpeg",
      start: "September 2018",
      end: "February 2019",
      description:
        "Enhanced Disitu.com by improving application performance, maintaining key financial product pages, and ensuring code quality through clean development practices, debugging, and code reviews.",
    },
  ],
  education: [
    {
      school: "Institut Teknologi PLN Jakarta",
      href: "https://www.itpln.ac.id",
      degree: "S1 Informatics Engineering",
      logoUrl: "/new/itpln.jpg",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "World Cup Map Visualizer",
      href: "https://world-cup.pace11.my.id/",
      dates: "June 2026",
      active: true,
      description:
        "Explore FIFA World Cup matches on an interactive world map. Browse tournament history, group stages, knockout rounds, and match details with an immersive geographic visualization",
      technologies: [
        "Next.js",
        "Typescript",
        "Leaflet.js",
        "TailwindCSS",
        "Zustand",
        "MongoDB Atlas",
      ],
      links: [
        {
          type: "Frontend",
        },
        {
          type: "Website",
          href: "https://world-cup.pace11.my.id",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/projects/world-cup.gif",
      video: "",
    },
  ],
} as const;
