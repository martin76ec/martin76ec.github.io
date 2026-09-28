export type Theme = "dark" | "light";
export type Lang = "en" | "es";

export const DEFAULT_THEME: Theme = "dark";
export const DEFAULT_LANG: Lang = "en";

export const NAVBAR = {
  content: {
    en: "Content",
    es: "Contenido",
  },
  experience: {
    en: "Experience",
    es: "Experiencia",
  },
  projects: {
    en: "Projects",
    es: "Proyectos",
  },
};

export const SUMMARY = {
  experience: {
    en: "Experience",
    es: "Experiencia",
  },
  subExperience: {
    en: "Recent",
    es: "Reciente",
  },
  projects: {
    en: "Projects",
    es: "Proyectos",
  },
  subProjects: {
    en: "Meaningful",
    es: "Significativos",
  },
  blog: {
    en: "Blog",
    es: "Blog",
  },
  subBlogs: {
    en: "Latest Posts",
    es: "Recientes",
  },
  videos: {
    en: "Videos",
    es: "Videos",
  },
  subVideos: {
    en: "Latest Uploads",
    es: "Recientes",
  },
};

export const HIDDEN_BLOG_POSTS = ["Test Blog"];
export const MAX_BLOG_POSTS_HOME = 3;
export const MAX_VIDEOS_HOME = 3;
