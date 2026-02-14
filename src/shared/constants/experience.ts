import TW from "@lib/assets/tw.png";
import Certificada from "@lib/assets/certificada.png";
import Fifty from "@lib/assets/fifty.png";
import IBM from "@lib/assets/ibm.png";

export interface Experience {
  start: string;
  end: string;
  role: string;
  description: string;
  skills: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    start: "2025",
    end: "Now",
    role: "Infrastructure Consultant - Thoughtworks",
    description:
      "Developed monitoring dashboards in Dynatrace and managed Level 2 incidents for Kubernetes. Built AI agents for DevOps and Kubernetes, along with an AI Agent evaluator. Facilitated English practice conversations.",
    skills: ["AWS", "Kubernetes", "Terraform", "Python", "Dynatrace"],
    logo: TW.src,
  },
  {
    start: "2024",
    end: "2025",
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
    logo: Certificada.src,
  },
  {
    start: "2020",
    end: "2024",
    role: "Fullstack Developer - FiftyFlowers",
    description:
      "Built scalable web applications using React, Remix, and Node.js. Developed serverless solutions on AWS Lambda and managed Dockerized services on EC2. Integrated machine learning scripts and maintained legacy PHP systems.",
    skills: ["Python", "TypeScript", "React", "Node.js", "AWS", "Docker"],
    logo: Fifty.src,
  },
  {
    start: "2019",
    end: "2019",
    role: "Infrastructure Intern - IBM",
    description:
      "Supported operations, maintenance, and management of the data center, ensuring optimal performance and reliability.",
    skills: ["Data Center", "Infrastructure", "Linux"],
    logo: IBM.src,
  },
];

export const esExperiences: Experience[] = [
  {
    start: "Abril 2024",
    end: "Actualidad",
    role: "Consultor de Infraestructura - Thoughtworks",
    description:
      "Desarrollé tableros de monitoreo en Dynatrace y gestioné incidentes de Nivel 2 en Kubernetes. Creé agentes de IA para DevOps y Kubernetes, junto con un evaluador de agentes de IA. Facilité conversaciones de práctica en inglés.",
    skills: ["AWS", "Kubernetes", "Terraform", "Python", "Dynatrace"],
    logo: TW.src,
  },
  {
    start: "2024",
    end: "Marzo 2024",
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
    logo: Certificada.src,
  },
  {
    start: "2020",
    end: "2024",
    role: "Desarrollador Fullstack - FiftyFlowers",
    description:
      "Construí aplicaciones web escalables usando React, Remix y Node.js. Desarrollé soluciones serverless en AWS Lambda y gestioné servicios Dockerizados en EC2. Integré scripts de machine learning y mantuve sistemas PHP legacy.",
    skills: ["Python", "TypeScript", "React", "Node.js", "AWS", "Docker"],
    logo: Fifty.src,
  },
  {
    start: "2019",
    end: "2019",
    role: "Pasante de Infraestructura - IBM",
    description:
      "Apoyé operaciones, mantenimiento y gestión del centro de datos, asegurando un rendimiento y confiabilidad óptimos.",
    skills: ["Data Center", "Infrastructure", "Linux"],
    logo: IBM.src,
  },
];
