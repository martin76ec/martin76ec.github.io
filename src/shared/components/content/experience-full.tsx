import { ActionSearchBar } from "@components/ui/action-search-bar";
import { BentoGrid } from "@components/ui/bento-grid";
import { ArrowLeft, AudioLines, BarChart2, Globe, PlaneTakeoff, Video } from "lucide-react";

export function ExperienceFull() {
  const allActions = [
    {
      id: "1",
      label: "Book tickets",
      icon: <PlaneTakeoff className="h-4 w-4 text-blue-500" />,
      description: "Operator",
      short: "⌘K",
      end: "Agent",
    },
    {
      id: "2",
      label: "Summarize",
      icon: <BarChart2 className="h-4 w-4 text-orange-500" />,
      description: "gpt-4o",
      short: "⌘cmd+p",
      end: "Command",
    },
    {
      id: "3",
      label: "Screen Studio",
      icon: <Video className="h-4 w-4 text-purple-500" />,
      description: "gpt-4o",
      short: "",
      end: "Application",
    },
    {
      id: "4",
      label: "Talk to Jarvis",
      icon: <AudioLines className="h-4 w-4 text-green-500" />,
      description: "gpt-4o voice",
      short: "",
      end: "Active",
    },
    {
      id: "5",
      label: "Translate",
      icon: <Globe className="h-4 w-4 text-blue-500" />,
      description: "gpt-4o",
      short: "",
      end: "Command",
    },
  ];

  return (
    <div className="w-full max-w-screen-xl px-10">
      <div className="flex flex-col gap-4">
        <div className="text-md flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline">
          <ArrowLeft className="h-4 w-4" />
          <a href="/">
            <span>Go back</span>
          </a>
        </div>
        <p className="text-3xl font-bold">Projects</p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center bg-red-200">
        <div className="absolute top-32">
          <ActionSearchBar actions={allActions} />
        </div>
      </div>
      <div className="mt-64">
        <BentoGrid>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 4</div>
          <div>Item 4</div>
          <div>Item 4</div>
          <div>Item 4</div>
          <div>Item 4</div>
        </BentoGrid>
      </div>
    </div>
  );
}
