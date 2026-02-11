import Acodear from "@lib/assets/acodear.png";
import Musicfy from "@lib/assets/musicfy.png";
import Portfolio from "@lib/assets/portfolio.png";
import SvgBuilder from "@lib/assets/svg-builder.png";
import Znotes from "@lib/assets/znotes.png";

export interface Project {
  name: string;
  image: string;
  link: string;
  description: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    name: "Acodear",
    image: Acodear.src,
    description: "Platform to learn to code, with video instructions, hints and a built-in code editor.",
    link: "https://www.acodear.com",
    skills: ["TypeScript", "Python", "Docker", "AWS"],
  },
  {
    name: "svg-tsx-builder",
    image: SvgBuilder.src,
    description:
      "A library to manage your icons without overhead. It transforms your SVGs into individual React components with an easy-to-use selector.",
    link: "https://github.com/martin76ec/svg-tsx-builder",
    skills: ["TypeScript"],
  },
  {
    name: "Musicfy",
    image: Musicfy.src,
    description:
      "A project collection designed to create a self-hosted music streaming platform, offering complete control and customization for your music experience.",
    link: "https://github.com/martin76ec/musicfy",
    skills: ["TypeScript", "Remix", "Postgres", "Docker", "API UX"],
  },
];

export const esProjects: Project[] = [
  {
    name: "Acodear",
    image: Acodear.src,
    description:
      "Plataforma para aprender a programar, con instrucciones en video, pistas y un editor de código integrado.",
    link: "https://dev.acodear.io",
    skills: ["TypeScript", "Python", "AWS Amplify", "AWS Lambda", "Dynamo DB", "Docker"],
  },
  {
    name: "svg-tsx-builder",
    image: SvgBuilder.src,
    description:
      "Un potente paquete npm diseñado para convertir una colección de íconos SVG en componentes individuales de TypeScript (TSX). Incluye un componente Icon versátil que permite a los desarrolladores renderizar cualquier ícono de manera dinámica. Ideal para proyectos que requieren una gestión de íconos escalable y mantenible.",
    link: "https://github.com/martin76ec/svg-tsx-builder",
    skills: ["TypeScript", "SVG", "Arquitectura basada en componentes"],
  },
  {
    name: "Znotes",
    image: Znotes.src,
    description: "Una aplicación de React Native para escribir notas de libros.",
    link: "https://github.com/martin76ec/znotes",
    skills: ["React Native", "TypeScript"],
  },
  {
    name: "Musicfy",
    image: Musicfy.src,
    description:
      "Una colección de proyectos diseñada para crear una plataforma de streaming de música autoalojada, que ofrece control total y personalización para tu experiencia musical.",
    link: "https://github.com/martin76ec/musicfy",
    skills: ["TypeScript", "Remix", "SSR", "Rust", "Postgres", "Supabase", "GoAuth", "Docker", "API REST", "API RPC"],
  },
  {
    name: "Portfolio v3",
    image: Portfolio.src,
    description:
      "Un sitio web en Astro React que tiene como objetivo mostrar mis habilidades para crear sistemas fiables y utilizables.",
    link: "https://github.com/martin76ec/martin76ec.github.io",
    skills: ["TypeScript", "Astro"],
  },
];
