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

export const DATA = {
  name: "Iriansyah",
  initials: "IP",
  url: "https://pace11.my.id",
  location: "Tangerang, Banten, Indonesia",
  locationLink:
    "https://www.google.com/maps/place/Tangerang,+Banten,+Indonesia",
  description:
    "Software Engineer specializing in React.js, Next.js, TypeScript, and Node.js | Currently Exploring Go & DevOps",
  summary:
    "I'm a Software Engineer with 6+ years of experience specializing in building scalable web applications using React, Next.js, and TypeScript. Experienced in designing frontend architecture, implementing SSO systems, and optimizing performance for production systems. Proven track record in leading frontend initiatives, mentoring engineers, and delivering high-impact features across fintech and SaaS platforms. Strong understanding of fullstack development including Node.js, Go, and system integrations",
  avatarUrl: "/new/iriansyah.png",
  skills: [
    "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
    "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
    "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white",
    "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
    "https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white",
    "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white",
    "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    "https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
    "https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
    "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
    "https://img.shields.io/badge/drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black",
    "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white",
    "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
    "https://img.shields.io/badge/Ant%20Design-1890FF?style=for-the-badge&logo=antdesign&logoColor=white",
    "https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white",
    "https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white",
    "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
    "https://img.shields.io/badge/Composer-885630?style=for-the-badge&logo=Composer&logoColor=white",
    "https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white",
    "https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white",
    "https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white",
    "https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white",
    "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
    "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
    "https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white",
    "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white",
    "https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white",
    "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white",
    "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white",
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
      description:
        "Designed and developed a scalable multi-tenant authentication platform with SSO (Google & Microsoft), secure multi-device session management, and configurable tenant settings for web and mobile applications.",
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
      dates: "2026-06-01",
      active: true,
      description:
        "Explore FIFA World Cup matches on an interactive world map. Browse tournament history, group stages, knockout rounds, and match details with an immersive geographic visualization",
      technologies: [
        "Next.js",
        "TypeScript",
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
    {
      title: "Landing Page & Dashboard PLN UIP3B Sumatera",
      href: "https://www.infouip3bs.com",
      dates: "2025-07-01",
      active: true,
      description:
        "Developed and maintained a monitoring dashboard and user-facing web application for PLN UIP3B Sumatera using Next.js. Built responsive interfaces for field officer performance monitoring and synchronized field data, while integrating with Laravel, MySQL, NGINX, and MinIO services.",
      technologies: [
        "Next.js",
        "Node.js",
        "Redux",
        "JavaScript",
        "Ant Design",
        "TailwindCSS",
        "MySQL",
        "Laravel",
        "NGINX",
        "MinIO",
      ],
      links: [
        {
          type: "Fullstack App",
        },
        {
          type: "Website",
          href: "https://www.infouip3bs.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/pln.gif",
      video: "",
    },
    {
      title: "Pace App Dockerized",
      href: "https://github.com/pace11/pace-app-neo",
      dates: "2025-07-01",
      active: true,
      description:
        "Docker Compose setup for running backend, frontend, databases (MySQL & PostgreSQL), NGINX, and other self-hosted services in a scalable, modular environment.",
      technologies: [
        "docker-compose",
        "nginx",
        "postgresql",
        "mysql",
        "certbot",
        "github-actions",
      ],
      links: [
        {
          type: "Infrastructure",
        },
        {
          type: "Source",
          href: "https://github.com/pace11/pace-app-neo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/pace-server.gif",
      video: "",
    },
    {
      title: "PassQ CLI",
      href: "https://github.com/pace11/passq",
      dates: "2025-03-01",
      active: true,
      description:
        "A simple CLI library built with JavaScript, Commander, and SQLite for managing passwords.",
      technologies: ["javascript", "commander", "sqlite", "cli"],
      links: [
        {
          type: "Library",
        },
        {
          type: "Source",
          href: "https://github.com/pace11/passq",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/passq.png",
      video: "",
    },
    {
      title: "Blamescope",
      href: "https://github.com/pace11/blamescope",
      dates: "2026-05-01",
      active: true,
      description:
        "Component-level git blame overlay for React projects (Vite & Next.js).",
      technologies: [
        "javascript",
        "typescript",
        "react.js",
        "vite",
        "next.js",
        "git",
      ],
      links: [
        {
          type: "Library",
        },
        {
          type: "Source",
          href: "https://github.com/pace11/blamescope",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/blamescope.gif",
      video: "",
    },
    {
      title: "Readable",
      href: "https://readable.pace11.my.id",
      dates: "2025-08-01",
      active: true,
      description:
        "A modern news application built with React, TypeScript, and Vite, featuring NYT API integration, state management with Zustand, automated CI using GitHub Actions, testing with Vitest, and containerized deployment with Docker.",
      technologies: [
        "React.js",
        "TypeScript",
        "Vite",
        "Vitest",
        "Bun",
        "TailwindCSS",
        "Zustand",
        "GitHub Actions",
        "Dockerfile",
      ],
      links: [
        {
          type: "Frontend",
        },
        {
          type: "Website",
          href: "https://readable.pace11.my.id",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pace11/readable",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/readable.gif",
      video: "",
    },
    {
      title: "Jobs Seeker",
      href: "https://jobs.pace11.my.id",
      dates: "2025-08-01",
      active: true,
      description:
        "A full-stack job seeker dashboard built with Next.js, featuring secure authentication with NextAuth and JWT, PostgreSQL database integration through Drizzle ORM, and a responsive user experience.",
      technologies: [
        "Next.js",
        "TypeScript",
        "NextAuth",
        "Drizzle ORM",
        "JWT",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Fullstack App",
        },
        {
          type: "Website",
          href: "https://jobs.pace11.my.id",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pace11/jobs-seeker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/jobs-seeker.gif",
      video: "",
    },
    {
      title: "Recipe Foods Web & Api",
      href: "https://recipe-foods.pace11.my.id",
      dates: "2024-10-01",
      active: true,
      description:
        "A full-stack recipe-sharing application built with Next.js and Golang, featuring JWT authentication, RESTful APIs, MySQL with GORM, Zustand for state management, and CI/CD with GitHub Actions and Docker.",
      technologies: [
        "Golang",
        "JWT",
        "REST API",
        "GORM",
        "MySQL",
        "Next.js",
        "TypeScript",
        "Zustand",
        "Dockerfile",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Fullstack App",
        },
        {
          type: "Website",
          href: "https://recipe-foods.pace11.my.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/recipe-foods.gif",
      video: "",
    },
    {
      title: "BMKG Weather API Wrapper",
      href: "https://github.com/pace11/weather-api",
      dates: "2025-07-01",
      active: true,
      description:
        "A GraphQL wrapper for BMKG weather data, built with Express.js to simplify API consumption while providing REST endpoints and interactive API documentation with Swagger.",
      technologies: [
        "REST API",
        "GraphQL",
        "Swagger",
        "Express.js",
        "JavaScript",
      ],
      links: [
        {
          type: "Backend GraphQL",
        },
        {
          type: "Source",
          href: "https://github.com/pace11/weather-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/weather-api.png",
      video: "",
    },
    {
      title: "Cloudflare R2 Upload Service",
      href: "https://github.com/pace11/cycloop",
      dates: "2025-07-01",
      active: true,
      description:
        "A lightweight file upload service built with TypeScript and Express.js, exposing REST APIs with Swagger documentation and integrating the AWS S3 SDK for Cloudflare R2 object storage.",
      technologies: [
        "TypeScript",
        "Express.js",
        "REST API",
        "Swagger",
        "Cloudflare R2",
      ],
      links: [
        {
          type: "Backend Service",
        },
        {
          type: "Source",
          href: "https://github.com/pace11/cycloop",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/cycloop.png",
      video: "",
    },
  ],
} as const;
