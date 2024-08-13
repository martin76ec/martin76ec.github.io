import Acodear from "@lib/assets/acodear.png";

export interface Project { name: string;
  image: string;
  link: string;
  description: string;
  skills: string[];
}

export const projects = [
  {
    name: "Acodear",
    image: Acodear.src,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos aut eligendi reprehenderit odit facilis dolorum molestias aliquid quam sunt nesciunt ducimus debitis unde nobis blanditiis quod, neque enim id impedit?",
    link: "https://dev.acodear.io",
    skills: ["Typescript", "Python", "AWS Amplify", "AWS Lambda", "Docker"],
  },
  {
    name: "Acodear",
    image: Acodear.src,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos aut eligendi reprehenderit odit facilis dolorum molestias aliquid quam sunt nesciunt ducimus debitis unde nobis blanditiis quod, neque enim id impedit?",
    link: "https://dev.acodear.io",
    skills: ["Typescript", "Python", "AWS Amplify", "AWS Lambda", "Docker"],
  },
  {
    name: "Acodear",
    image: Acodear.src,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos aut eligendi reprehenderit odit facilis dolorum molestias aliquid quam sunt nesciunt ducimus debitis unde nobis blanditiis quod, neque enim id impedit?",
    link: "https://dev.acodear.io",
    skills: ["Typescript", "Python", "AWS Amplify", "AWS Lambda", "Docker"],
  },
];
