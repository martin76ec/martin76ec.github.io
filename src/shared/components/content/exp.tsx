import { Timeline } from "@components/ui/timeline";
import { experiences } from "@constants/experience";
import { detailedExperiences } from "@constants/experiences-detailed";
import { ExperienceCard } from "./experience";
import { ExperienceDetailedList } from "./experience-detailed-card";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="flex flex-col gap-4">
          <ExperienceDetailedList exp={detailedExperiences.filter(e => e.year === 2024)} />
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex flex-col gap-4">
          <ExperienceDetailedList exp={detailedExperiences.filter(e => e.year === 2023)} />
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="flex flex-col gap-4">
          <ExperienceDetailedList exp={detailedExperiences.filter(e => e.year === 2022)} />
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="flex flex-col gap-4">
          <ExperienceDetailedList exp={detailedExperiences.filter(e => e.year === 2021)} />
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div className="flex flex-col gap-4">
          <ExperienceDetailedList exp={detailedExperiences.filter(e => e.year === 2020)} />
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <div className="absolute left-0 top-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <div className="w-full max-w-screen-xl px-10">
      <div className="flex p-2">
        <TimelineDemo />
      </div>
    </div>
  );
}
