import { SUMMARY } from "@constants/defaults";
import { esExperiences, experiences } from "@constants/experience";
import { esProjects, projects } from "@constants/projects";
import { useStore } from "@nanostores/react";
import { langStore } from "src/shared/stores/lang-store";
import { ExperienceList } from "./experience";
import { ProjectList } from "./projects";

export function Summary() {
  const lang = useStore(langStore);

  return (
    <div className="flex w-full flex-col gap-16">
      <div className="flex w-full flex-col justify-start gap-4">
        <h1 id="experience" className="mb-2 text-xl font-bold">
          {SUMMARY.experience[lang]}
        </h1>
        <ExperienceList value={lang === "en" ? experiences : esExperiences} />
      </div>
      <div id="projects" className="flex w-full flex-col justify-start gap-4">
        <div className="mb-2 flex items-center gap-4">
          <h1 className="text-xl font-bold">{SUMMARY.projects[lang]}</h1>
        </div>
        <ProjectList value={lang === "en" ? projects : esProjects} />
      </div>
    </div>
  );
}
