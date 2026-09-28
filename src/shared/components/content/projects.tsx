import type { Project } from "@constants/projects";
import { Badge } from "@components/ui/badge";

interface ProjectListProps {
  value: Project[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a href={project.link} target="_blank" rel="noreferrer">
      <div className="group/project flex h-80 w-full cursor-pointer flex-col-reverse gap-4 overflow-hidden rounded-none bg-muted/50 px-6 py-4 backdrop-blur-md hover:bg-accent md:h-36 md:flex-row md:gap-8">
        <div className="flex min-w-fit flex-col pt-1">
          <div className="box-border w-fit rounded-none border border-muted-foreground/30 group-hover/project:border-muted-foreground/50">
            <img
              src={project.image}
              className="w-32 rounded-none grayscale transition-[filter] duration-300 group-hover/project:grayscale-0 md:w-20"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex flex-col gap-1.5">
            <p className="text-base text-foreground md:text-lg">{project.name}</p>
            <p className="line-clamp-2 text-sm text-muted-foreground md:text-base">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 overflow-hidden">
            {project.skills.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export function ProjectList({ value }: ProjectListProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      {value.map((v) => (
        <ProjectCard key={v.name} project={v} />
      ))}
    </div>
  );
}
