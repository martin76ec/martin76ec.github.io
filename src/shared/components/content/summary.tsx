import { experiences } from "@constants/experience";
import { projects } from "@constants/projects";
import { ExperienceList } from "./experience";
import { ProjectList } from "./projects";

export function Summary() {
  return (
    <div className="flex w-full flex-col gap-16">
      <div className="flex w-full flex-col justify-start gap-8">
        <h1 id="experience" className="mb-2 text-xl font-bold">
          Experience
        </h1>
        <ExperienceList value={experiences} />
      </div>
      <div id="projects" className="flex w-full flex-col justify-start gap-8">
        <div className="mb-2 flex items-center gap-4">
          <h1 className="text-xl font-bold">Projects</h1>
          <a className="cursor-pointer" rel="noopener noreferer">
            See all my projects
          </a>
        </div>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}
