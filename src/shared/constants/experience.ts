export interface Experience {
  start: string;
  end: string;
  role: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    start: "2021",
    end: "2024",
    role: "Fullstack Developer - Fifty Flowers",
    description:
      "Developed, maintained, and designed key components and systems to enhance and support business operations. Collaborated with other departments to conduct research, gaining deep insights into business processes and ensuring that solutions were closely aligned with operational needs and goals.",
    skills: ["Typescript", "Python", "React", "AWS Lambda", "MySQL", "Shopify", "PHP", "Laravel"],
  },
  {
    start: "2020",
    end: "2020",
    role: "Cofounder - Conexperto",
    description:
      "Design and built a product to handle comunications between people who is expert in something to people who needs their view over a circumstance, using design thinking to drive the design process.",
    skills: ["Javascript", "React", "Mongo", "Figma"],
  },
  {
    start: "2018",
    end: "2019",
    role: "Operations Intern - IBM",
    description:
      "Supported operations, maintenance, and administration tasks for the datacenter, ensuring optimal performance and reliability.",
    skills: ["Linux", "Oracle DB", "Excel"],
  },
  {
    start: "2018",
    end: "2018",
    role: "Freelance - Agrobiotechnoloy",
    description:
      "Designed their webpage following their identity and helping them to define some key concepts for their branding style guidelines",
    skills: ["HTML", "Javascript"],
  },
];

export const esExperiences: Experience[] = [
  {
    start: "2021",
    end: "2024",
    role: "Desarrollador Fullstack - Fifty Flowers",
    description:
      "Desarrollé, mantuve y diseñé componentes y sistemas clave para mejorar y apoyar las operaciones comerciales. Colaboré con otros departamentos para realizar investigaciones, obteniendo una profunda comprensión de los procesos empresariales y asegurando que las soluciones estuvieran alineadas con las necesidades y objetivos operativos.",
    skills: ["Typescript", "Python", "React", "AWS Lambda", "MySQL", "Shopify", "PHP", "Laravel"],
  },
  {
    start: "2020",
    end: "2020",
    role: "Cofundador - Conexperto",
    description:
      "Diseñé y construí un producto para manejar comunicaciones entre personas expertas en un tema y personas que necesitan su perspectiva sobre una circunstancia, utilizando design thinking para guiar el proceso de diseño.",
    skills: ["Javascript", "React", "Mongo", "Figma"],
  },
  {
    start: "2018",
    end: "2019",
    role: "Pasante de Operaciones - IBM",
    description:
      "Apoyé en tareas de operaciones, mantenimiento y administración del centro de datos, asegurando un rendimiento y confiabilidad óptimos.",
    skills: ["Linux", "Oracle DB", "Excel"],
  },
  {
    start: "2018",
    end: "2018",
    role: "Freelance - Agrobiotechnology",
    description:
      "Diseñé su página web siguiendo su identidad y ayudándolos a definir algunos conceptos clave para sus pautas de estilo de marca.",
    skills: ["HTML", "Javascript"],
  },
];
