import { Icon } from "@components/icon";
import { SUMMARY } from "@constants/defaults";
import { esExperiences, experiences } from "@constants/experience";
import { esProjects, projects } from "@constants/projects";
import { cn } from "@lib/utils";
import { useStore } from "@nanostores/react";
import { ArrowRight } from "lucide-react";
import { langStore } from "src/shared/stores/lang-store";
import { BlogList } from "./blogs";
import { ExperienceList } from "./experience";
import { ProjectList } from "./projects";

interface Props {
  className?: string;
}

export function Summary({ className }: Props) {
  const lang = useStore(langStore);

  return (
    <div className={cn("flex w-full flex-col gap-16", className)}>
      <div id="experience" className="flex w-full flex-col justify-start gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">{SUMMARY.experience[lang]}</h1>
            <span className="text-md hidden text-muted-foreground md:block">[{SUMMARY.subExperience[lang]}]</span>
          </div>
          <span className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline">
            <a className="flex gap-1" href="/experience">
              browse all <span className="hidden md:block">my experience</span>
            </a>
            <ArrowRight name="external-link" className="h-4 w-4" />
          </span>
        </div>
        <ExperienceList value={lang === "en" ? experiences : esExperiences} />
      </div>
      <div id="projects" className="flex w-full flex-col justify-start gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">{SUMMARY.projects[lang]}</h1>
            <span className="text-md hidden text-muted-foreground md:block">[{SUMMARY.subProjects[lang]}]</span>
          </div>
          <span className="hidden flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline">
            <a className="flex gap-1" href="/projects">
              browse all <span className="hidden md:block">my projects</span>
            </a>
            <ArrowRight name="external-link" className="h-4 w-4" />
          </span>
        </div>
        <ProjectList value={lang === "en" ? projects : esProjects} />
      </div>
      <div id="blog" className="flex w-full flex-col justify-start gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">{SUMMARY.blog[lang]}</h1>
            <span className="text-md hidden text-muted-foreground md:block">[{SUMMARY.subBlogs[lang]}]</span>
          </div>
          <span className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline">
            <a
              className="flex gap-1"
              href="https://medium.com/@martin.elarrea27"
              target="_blank"
              rel="noopener noreferrer"
            >
              browse all <span className="hidden md:block">my blogs</span>
            </a>
            <Icon name="external-link" className="h-4 w-4 fill-white" />
          </span>
        </div>
        <BlogList />
      </div>
    </div>
  );
}
