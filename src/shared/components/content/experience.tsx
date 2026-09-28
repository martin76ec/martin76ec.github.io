import type { Experience } from "@constants/experience";
import { Badge } from "@components/ui/badge";

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="border-1 group flex h-52 w-full select-none flex-col gap-2 overflow-hidden rounded-none border border-muted/80 bg-muted/50 px-6 py-4 backdrop-blur-md hover:bg-accent md:h-36 md:flex-row md:gap-8">
      <div className="flex min-w-28 flex-col">
        <p className="whitespace-nowrap text-sm text-muted-foreground">
          {exp.start} - {exp.end}
        </p>
        {exp.logo && (
          <img
            src={exp.logo}
            alt={exp.role}
            className="hidden w-20 rounded-md object-contain grayscale transition-[filter] duration-300 group-hover:grayscale-0 md:mt-2 md:block"
          />
        )}
      </div>
      <div className="flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3">
            {exp.logo && (
              <img
                src={exp.logo}
                alt={exp.role}
                className="h-9 w-9 rounded-md bg-transparent object-contain grayscale transition-[filter] duration-300 group-hover:grayscale-0 md:hidden"
              />
            )}
            <p className="text-base text-foreground md:text-lg">{exp.role}</p>
          </div>
          <p className="line-clamp-2 text-sm text-muted-foreground md:text-base">{exp.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 overflow-hidden">
          {exp.skills.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceList({ value }: { value: Experience[] }) {
  return (
    <div className="flex flex-col gap-4">
      {value.map((e) => (
        <ExperienceCard key={e.role} exp={e} />
      ))}
    </div>
  );
}
