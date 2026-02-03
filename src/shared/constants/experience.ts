export interface Experience {
  start: string;
  end: string;
  role: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    start: "2024",
    end: "Now",
    role: "Fullstack Developer (main engineer) - Certificada EC",
    description:
      "Led the migration of legacy systems to modern APIs, reducing billing errors by 50%. Improved system reliability with observability (Grafana) and automated CI/CD pipelines. Optimized background processing with Redis and BullMQ, significantly reducing error rates.",
    skills: [
      "TypeScript",
      "PHP",
      "Laravel",
      "Redis",
      "AWS",
      "GitHub Actions",
      "Grafana",
      "MySQL",
    ],
  },
  {
    start: "2020",
    end: "2024",
    role: "Fullstack Developer - FiftyFlowers",
    description:
      "Built scalable web applications using React, Remix, and Node.js. Developed serverless solutions on AWS Lambda and managed Dockerized services on EC2. Integrated machine learning scripts and maintained legacy PHP systems.",
    skills: [
      "Python",
      "TypeScript",
      "React",
      "Node.js",
      "AWS",
      "Docker",
      "PHP",
      "Laravel",
    ],
  },
];

export const esExperiences: Experience[] = [
  {
    start: "2024",
    end: "Current",
    role: "Fullstack Developer (main engineer) - Certificada EC",
    description:
      "Lideré la migración de sistemas legacy a APIs modernas, reduciendo errores de facturación en un 50%. Mejoré la confiabilidad con observabilidad (Grafana) y pipelines CI/CD automatizados. Optimicé procesos en segundo plano con Redis y BullMQ, reduciendo drásticamente la tasa de errores.",
    skills: [
      "TypeScript",
      "PHP",
      "Laravel",
      "Redis",
      "AWS",
      "GitHub Actions",
      "Grafana",
      "MySQL",
    ],
  },
  {
    start: "2020",
    end: "2024",
    role: "Desarrollador Fullstack - FiftyFlowers",
    description:
      "Construí aplicaciones web escalables usando React, Remix y Node.js. Desarrollé soluciones serverless en AWS Lambda y gestioné servicios Dockerizados en EC2. Integré scripts de machine learning y mantuve sistemas PHP legacy.",
    skills: [
      "Python",
      "TypeScript",
      "React",
      "Node.js",
      "AWS",
      "Docker",
      "PHP",
      "Laravel",
    ],
  },
];
