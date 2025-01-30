import type { DetailedExperience } from "@constants/experiences-detailed";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { CollapsibleButton } from "@components/ui/collapsible-button";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronsLeftRightEllipsis, ChevronsRightLeft, ChevronsRightLeftIcon } from "lucide-react";

interface Props {
  exp: DetailedExperience[];
}

function DetailedCard({ exp }: { exp: DetailedExperience }) {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="border-1 flex min-h-64 w-full select-none flex-col gap-2 rounded border border-muted/80 bg-muted/50 px-8 py-6 backdrop-blur-md hover:bg-accent md:flex-row md:gap-24 lg:gap-8">
      <div className="flex flex-col justify-between gap-12">
        <div className="flex flex-col gap-2">
          <p className="text-lg text-foreground">{exp.activity}</p>
          <p className="text-md text-muted-foreground">{exp.description}</p>
        </div>
        <div className="text-muted-foreground">
          <CollapsibleButton label="Details">
            <div className="flex flex-col gap-2">
              {exp.characteristics.map((e, idx) => (
                <div
                  key={`${exp.activity}-${idx}`}
                  className="text-md rounded border border-muted-foreground/30 bg-background px-4 py-2"
                >
                  {e}
                </div>
              ))}
            </div>
          </CollapsibleButton>
        </div>

        <motion.div className="flex flex-wrap items-center gap-2" initial="hidden" animate="show" exit="exit">
          {!showAll &&
            exp.technologies.slice(0, 5).map((s) => (
              <Badge className="h-6" key={s}>
                {s}
              </Badge>
            ))}
          {showAll &&
            exp.technologies.map((s) => (
              <Badge className="h-6" key={s}>
                {s}
              </Badge>
            ))}
          {exp.technologies.length > 5 && (
            <Button className="rounded-full h-6 border border-2 border-muted-foreground" variant={"secondary"} onClick={handleShowMore}>
               {showAll ? 
                 <ChevronsRightLeftIcon className="w-4 h-4" />
                 : 
               <ChevronsLeftRightEllipsis className="w-4 h-4"/>
               }
            </Button>
          )}
        </motion.div>
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
