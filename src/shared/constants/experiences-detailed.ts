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
      "Designed and developed an admin platform from scratch, transforming business processes into an integrated system that automates tasks, streamlines execution, and orchestrates operations. Enabled seamless integration with external stores like Shopify while maintaining a decoupled architecture.",
    characteristics: [
      "Implemented a token and OAuth-based authentication system.",
      "Developed a role-based access control (RBAC) system with user groups and template-based permissions.",
      "Designed and built core business APIs to support critical workflows.",
      "Created a Python API to handle image processing, optimization, and color extraction.",
      "Implemented a Backend-for-Frontend (BFF) API to optimize frontend interactions.",
      "Wrote automated tests to ensure reliability in critical business operations.",
      "Established strong code linting and styling enforcement using ESLint and Prettier.",
      "Designed a horizontally scalable monolithic architecture.",
      "Applied dependency injection techniques to maintain a decoupled system structure.",
      "Developed an entity-based logging system for improved observability and debugging.",
      "Implemented idempotency mechanisms to prevent duplicate API operations.",
      "Integrated third-party APIs, including Shopify, AWS S3, and AWS Lambda Core.",
      "Designed queue-based mechanisms for handling large-scale bulk operations.",
      "Built an advanced image processing module with optimization, color extraction, and an interactive image editor.",
      "Developed custom React components and leveraged advanced React patterns for modular frontend architecture.",
    ],
    technologies: [
      "Node.js",
      "Bun",
      "React",
      "TypeScript",
      "Hono",
      "FastAPI",
      "Faiss",
      "K-means",
      "Remix/React Router v7",
      "PostgreSQL",
      "Redis",
      "AWS SQS",
      "AWS Lambda",
      "Docker",
      "Grafana",
      "Loki",
      "Prometheus",
      "GitHub Actions",
      "AWS (S3, Lambda, EC2)",
      "Shopify SDK",
    ],
  },
  {
    year: 2023,
    company: "FiftyFlowers",
    role: "Full-Stack Developer",
    activity: "Bloom Brain - Technical Foundation",
    description:
      "Led the design and implementation of the application's core infrastructure, ensuring scalability, security, and streamlined deployment workflows.",
    characteristics: [
      "Configured and optimized horizontally scalable EC2 instances for better performance.",
      "Implemented a user authentication and management system with automated deployment pipelines.",
      "Automated versioning and release management using GitHub Actions to maintain high-quality standards.",
      "Set up and deployed self-hosted monitoring and testing tools, including Grafana and Hoppscotch.",
      "Developed containerized testing environments and self-hosted applications using Docker.",
      "Enforced coding standards with strong linting and styling rules.",
      "Established clear file structure and consistent variable naming conventions for maintainability.",
      "Designed APIs following Domain-Driven Design (DDD) principles to ensure modular and scalable architecture.",
    ],
    technologies: [
      "AWS EC2",
      "Grafana",
      "Hoppscotch",
      "CI/CD Pipelines",
      "Docker",
      "ESLint",
      "Prettier",
      "Python Black",
      "TypeScript",
      "Domain-Driven Design (DDD)",
    ],
  },
  {
    year: 2023,
    company: "FiftyFlowers",
    role: "Full-Stack Developer",
    activity: "Bloom Brain - Conception",
    description:
      "Designed and planned an ERP system to integrate third-party stores, supply chains, and payment processing into the FiftyFlowers operational framework.",
    characteristics: [
      "Developed a comprehensive knowledge database of business processes and workflows.",
      "Worked closely with operations teams to define and document system requirements.",
      "Outlined the product scope, ensuring minimal dependence on external platforms while maintaining integration capabilities.",
    ],
    technologies: ["Figma", "Miro"],
  },
  {
    year: 2022,
    company: "FiftyFlowers",
    role: "Full-Stack Developer",
    activity: "Cancellations Project",
    description:
      "Developed a Lambda-based API with a React frontend to manage order cancellations and refunds, improving customer service efficiency.",
    characteristics: [
      "Designed and implemented a serverless architecture using AWS Lambda.",
      "Built a React-based user interface for seamless order management.",
      "Integrated third-party APIs to handle payment processing and refund workflows.",
    ],
    technologies: ["AWS Lambda", "Node.js", "React", "TypeScript"],
  },
  {
    year: 2021,
    company: "FiftyFlowers",
    role: "Full-Stack Developer",
    activity: "Lambda Core",
    description:
      "Developed a library of AWS Lambda functions with shared layers, message queue processing, and functional programming principles to optimize system interactions between Shopify and core business services.",
    characteristics: [
      "Built ETL scripts in Python for data transformation and processing.",
      "Designed serverless architectures with AWS CloudFormation for infrastructure automation.",
      "Developed automated tests using Jest to ensure the reliability of core functions.",
      "Integrated Shopify REST and GraphQL APIs for seamless data synchronization.",
    ],
    technologies: [
      "AWS Lambda",
      "AWS SQS",
      "CloudFormation",
      "Jest",
      "Node.js",
      "Shopify REST & GraphQL APIs",
      "Python",
    ],
  },
  {
    year: 2021,
    company: "FiftyFlowers",
    role: "Full-Stack Developer",
    activity: "Admin Maintenance",
    description:
      "Maintained and enhanced a 15+ year-old PHP application and Laravel API by fixing bugs, adding features, and improving performance.",
    characteristics: [
      "Refactored legacy PHP code to improve maintainability.",
      "Fixed critical bugs impacting order management and customer interactions.",
      "Implemented new features in the Laravel API to extend system functionality.",
      "Optimized database queries to enhance application performance.",
    ],
    technologies: ["PHP", "Laravel", "MySQL"],
  },
];
