export interface DetailedExperience {
  year: number;
  company: string;
  role: string;
  activity: string;
  description: string;
  characteristics: string[];
  technologies: string[];
}

export const detailedExperiences: DetailedExperience[] = [
  {
    year: 2024,
    company: "FiftyFlowers",
    role: "Full-Stack Developer",
    activity: "Bloom Brain - Building Phase",
    description:
      "Architected and built a scalable admin platform with decoupled architecture, automating business processes and integrating external stores.",
    characteristics: [
      "Designed a horizontally scalable architecture with RBAC and OAuth authentication.",
      "Built core business APIs and a Backend-for-Frontend (BFF) layer.",
      "Implemented advanced image processing and optimization modules.",
      "Ensured reliability with automated tests, extensive logging, and idempotency.",
      "Integrated third-party APIs (Shopify, AWS) and queue-based bulk operations.",
    ],
    technologies: [
      "Node.js",
      "React",
      "TypeScript",
      "Hono",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "Grafana",
    ],
  },
  {
    year: 2023,
    company: "FiftyFlowers",
    role: "Full-Stack Developer",
    activity: "Bloom Brain - Technical Foundation",
    description:
      "Established the core infrastructure, security protocols, and development standards for the platform.",
    characteristics: [
      "Configured scalable EC2 instances and automated deployment pipelines (CI/CD).",
      "Set up monitoring (Grafana) and containerized testing environments.",
      "Enforced coding standards and Domain-Driven Design (DDD) principles.",
    ],
    technologies: [
      "AWS EC2",
      "Grafana",
      "Docker",
      "CI/CD",
      "TypeScript",
      "DDD",
    ],
  },
  {
    year: 2023,
    company: "FiftyFlowers",
    role: "Full-Stack Developer",
    activity: "Bloom Brain - Conception",
    description:
      "Designed the ERP system strategy to integrate operations, supply chains, and payment processing.",
    characteristics: [
      "Mapped business workflows and documented system requirements.",
      "Defined product scope for seamless integration with minimal dependencies.",
    ],
    technologies: ["Figma", "Miro"],
  },
  {
    year: 2022,
    company: "FiftyFlowers",
    role: "Full-Stack Developer",
    activity: "Cancellations Project",
    description:
      "Built a serverless system for managing order cancellations and refunds, improving efficiency.",
    characteristics: [
      "Implemented serverless architecture using AWS Lambda.",
      "Created a React-based UI for efficient order management and refunds.",
      "Integrated payment processing APIs.",
    ],
    technologies: ["AWS Lambda", "Node.js", "React", "TypeScript"],
  },
  {
    year: 2021,
    company: "FiftyFlowers",
    role: "Full-Stack Developer",
    activity: "Lambda Core",
    description:
      "Developed a library of shared AWS Lambda functions and layers for core business services.",
    characteristics: [
      "Built reusable Lambda layers and ETL scripts for data processing.",
      "Automated infrastructure with CloudFormation and testing with Jest.",
      "Integrated Shopify REST and GraphQL APIs.",
    ],
    technologies: [
      "AWS Lambda",
      "CloudFormation",
      "Node.js",
      "Shopify APIs",
      "Python",
    ],
  },
  {
    year: 2021,
    company: "FiftyFlowers",
    role: "Full-Stack Developer",
    activity: "Admin Maintenance",
    description:
      "Maintained and optimized a legacy PHP/Laravel application, enhancing performance and stability.",
    characteristics: [
      "Refactored legacy code and improved API performance.",
      "Fixed critical bugs and added new features for order management.",
    ],
    technologies: ["PHP", "Laravel", "MySQL"],
  },
];
