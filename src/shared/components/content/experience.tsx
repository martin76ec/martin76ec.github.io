import type { Experience } from "@constants/experience";
import { Badge } from "@components/ui/badge";

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="border-1 flex min-h-64 w-full select-none flex-col gap-2 rounded border border-muted/80 bg-muted/50 px-8 py-6 backdrop-blur-md hover:bg-accent md:flex-row md:gap-24 lg:gap-8">
      <div className="flex min-w-24 flex-col pt-2">
        <p className="text-md text-muted-foreground">
          {exp.start} - {exp.end}
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-lg text-foreground">{exp.role}</p>
          <p className="text-md mb-4 text-muted-foreground">{exp.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
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
