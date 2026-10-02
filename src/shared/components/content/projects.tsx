import type { Project } from "@constants/projects";
import { Badge } from "@components/ui/badge";
import { cn } from "@lib/utils";
import { Star } from "lucide-react";

interface ProjectListProps {
  value: Project[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { featured, accentColor } = project;
  return (
    <a href={project.link} target="_blank" rel="noreferrer">
      <div
        style={accentColor ? ({ "--project-accent": accentColor } as React.CSSProperties) : undefined}
        className={cn(
          "group/project flex h-80 w-full cursor-pointer flex-col-reverse gap-4 overflow-hidden rounded-none bg-muted/50 px-6 py-4 backdrop-blur-md hover:bg-accent md:h-36 md:flex-row md:gap-8",
          featured &&
            (accentColor ? "project-card-accent" : "border border-primary/60 bg-primary/5 hover:bg-primary/10")
        )}
      >
        <div className="flex min-w-fit flex-col pt-1">
          <div
            className={cn(
              "box-border w-fit rounded-none border border-muted-foreground/30 group-hover/project:border-muted-foreground/50",
              featured &&
                (accentColor
                  ? "project-card-accent-border"
                  : "border-primary/60 group-hover/project:border-primary")
            )}
          >
            <img
              src={project.image}
              className={cn(
                "w-32 rounded-none grayscale transition-[filter] duration-300 group-hover/project:grayscale-0 md:w-20",
                featured && "grayscale-0"
              )}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-base text-foreground md:text-lg">{project.name}</p>
              {featured && (
                <Badge
                  variant="outline"
                  className={cn("gap-1", accentColor ? "project-card-accent-badge" : "border-primary text-primary")}
                >
                  <Star className="h-3 w-3 fill-current" />
                  {accentColor && <Star className="h-3 w-3 fill-current" />}
                  Featured
                </Badge>
              )}
            </div>
            <p className="line-clamp-2 text-sm text-muted-foreground md:text-base">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 overflow-hidden">
            {project.skills.map((s) => (
              <Badge
                key={s}
                variant={accentColor ? "outline" : undefined}
                className={cn(accentColor && "project-card-accent-badge")}
              >
                {s}
              </Badge>
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
