import { Timeline } from "@components/ui/timeline";
import { detailedExperiences } from "@constants/experiences-detailed";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ExperienceDetailedList } from "./experience-detailed-card";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="flex flex-col gap-4">
          <ExperienceDetailedList exp={detailedExperiences.filter((e) => e.year === 2024)} />
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex flex-col gap-4">
          <ExperienceDetailedList exp={detailedExperiences.filter((e) => e.year === 2023)} />
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="flex flex-col gap-4">
          <ExperienceDetailedList exp={detailedExperiences.filter((e) => e.year === 2022)} />
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="flex flex-col gap-4">
          <ExperienceDetailedList exp={detailedExperiences.filter((e) => e.year === 2021)} />
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div className="flex flex-col gap-4">
          <ExperienceDetailedList exp={detailedExperiences.filter((e) => e.year === 2020)} />
        </div>
      ),
    },
  ];
  return (
    <ScrollArea className="h-svh w-full overflow-y-auto">
      <Timeline data={data} />
    </ScrollArea>
  );
}

export function Experience() {
  return (
    <div className="w-full max-w-screen-xl px-10 overflow-y-hidden">
      <div className="flex p-2">
        <TimelineDemo />
      </div>
    </div>
  );
}
