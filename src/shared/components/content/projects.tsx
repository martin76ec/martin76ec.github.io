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
      <div className="group/project flex min-h-64 w-full cursor-pointer flex-col-reverse gap-4 rounded bg-muted/50 px-8 py-6 backdrop-blur-md hover:bg-accent md:flex-row md:gap-24 lg:gap-8">
        <div className="flex min-w-fit flex-col pt-2">
          <div className="box-border w-fit rounded border border-muted-foreground/30 group-hover/project:border-muted-foreground/50">
            <img src={project.image} className="w-40 rounded md:w-24" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-lg text-foreground">{project.name}</p>
            <p className="text-md mb-4 text-muted-foreground">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
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
