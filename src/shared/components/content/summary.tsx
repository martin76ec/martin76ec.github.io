import { Icon } from "@components/icon";
import { SUMMARY } from "@constants/defaults";
import { esExperiences, experiences } from "@constants/experience";
import { esProjects, projects } from "@constants/projects";
import { useStore } from "@nanostores/react";
import { langStore } from "src/shared/stores/lang-store";
import { BlogList } from "./blogs";
import { ExperienceList } from "./experience";
import { ProjectList } from "./projects";

export function Summary() {
  const lang = useStore(langStore);

  return (
    <div className="flex w-full flex-col gap-16">
      <div id="experience" className="flex w-full flex-col justify-start gap-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <h1 className="text-xl font-bold">{SUMMARY.experience[lang]}</h1>
            <span className="text-md text-muted-foreground">[{SUMMARY.subExperience[lang]}]</span>
          </div>
          <span className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline">
            <a href="/experience">browse all my experience</a>
            <Icon name="external-link" className="h-4 w-4 fill-white" />
          </span>
        </div>
        <ExperienceList value={lang === "en" ? experiences : esExperiences} />
      </div>
      <div id="projects" className="flex w-full flex-col justify-start gap-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <h1 className="text-xl font-bold">{SUMMARY.projects[lang]}</h1>
            <span className="text-md text-muted-foreground">[{SUMMARY.subProjects[lang]}]</span>
          </div>
          <span className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline">
            <a href="/experience">browse all my projects</a>
            <Icon name="external-link" className="h-4 w-4 fill-white" />
          </span>
        </div>
        <ProjectList value={lang === "en" ? projects : esProjects} />
      </div>
      <div id="blog" className="flex w-full flex-col justify-start gap-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <h1 className="text-xl font-bold">{SUMMARY.blog[lang]}</h1>
            <span className="text-md text-muted-foreground">[{SUMMARY.subBlogs[lang]}]</span>
          </div>
          <span className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline">
            <a href="/experience">browse all my blogs</a>
            <Icon name="external-link" className="h-4 w-4 fill-white" />
          </span>
        </div>
        <BlogList />
      </div>
    </div>
  );
}
