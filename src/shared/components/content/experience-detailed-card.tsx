import { Badge } from "@components/ui/badge";
import type { DetailedExperience } from "@constants/experiences-detailed";

interface Props {
  exp: DetailedExperience[];
}

function DetailedCard({ exp }: { exp: DetailedExperience }) {
  return (
    <div className="border-1 flex min-h-64 w-full select-none flex-col gap-2 rounded border border-muted/80 bg-muted/50 px-8 py-6 backdrop-blur-md hover:bg-accent md:flex-row md:gap-24 lg:gap-8">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-lg text-foreground">{exp.activity}</p>
          <p className="text-md mb-4 text-muted-foreground">{exp.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceDetailedList({ exp }: Props) {
  return (
    <div className="flex flex-col gap-8">
      {exp.map((e) => (
        <DetailedCard key={e.activity} exp={e} />
      ))}
    </div>
  );
}
