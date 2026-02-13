import type { DetailedExperience } from "@constants/experiences-detailed";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { CollapsibleButton } from "@components/ui/collapsible-button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useState } from "react";

interface Props {
  exp: DetailedExperience[];
}

const item = {
  hidden: { opacity: 0, y: -10, height: 0 },
  visible: { opacity: 1, y: 0, height: "auto" },
  exit: { opacity: 0, y: -10, height: 0, transition: { duration: 0.2 } },
};

function DetailedCard({ exp }: { exp: DetailedExperience }) {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="border-1 flex min-h-64 w-full select-none flex-col gap-2 rounded border border-muted/80 bg-muted/50 px-8 py-6 backdrop-blur-md hover:bg-accent md:flex-row md:gap-24 lg:gap-8">
      <div className="flex min-w-24 flex-col">
        {exp.logo && (
          <img
            src={exp.logo}
            alt={exp.company}
            className="hidden h-12 w-12 rounded-md bg-white object-contain md:block"
          />
        )}
      </div>
      <div className="flex flex-col justify-between gap-12">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            {exp.logo && (
              <img
                src={exp.logo}
                alt={exp.company}
                className="h-10 w-10 rounded-md bg-white object-contain md:hidden"
              />
            )}
            <p className="text-lg text-foreground">{exp.activity}</p>
          </div>
          <p className="text-md text-muted-foreground">{exp.description}</p>
        </div>
        <div className="text-muted-foreground">
          <CollapsibleButton label="Details">
            <motion.ul
              className="flex flex-col gap-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              {exp.characteristics.map((e, idx) => (
                <motion.li
                  key={`${exp.activity}-${idx}`}
                  className="text-md rounded border border-muted-foreground/30 bg-background px-4 py-2 font-mono"
                  variants={item}
                  exit="exit"
                  layout
                >
                  {e}
                </motion.li>
              ))}
            </motion.ul>
          </CollapsibleButton>
        </div>

        <motion.div className="flex flex-wrap items-center gap-2" transition={{ duration: 0.3, type: "spring" }}>
          <AnimatePresence initial={false}>
            {(showAll ? exp.technologies : exp.technologies.slice(0, 5)).map((s) => (
              <motion.div
                key={s}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Badge className="h-6" key={s}>
                  {s}
                </Badge>
              </motion.div>
            ))}
            {exp.technologies.length > 5 && (
              <motion.div layout>
                <Button
                  className="h-6 rounded-full border border-2 border-muted-foreground"
                  variant={"outline"}
                  onClick={handleShowMore}
                >
                  <motion.span
                    key={showAll ? "show" : "hide"}
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 180, opacity: 1 }}
                    exit={{ rotate: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {showAll ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}
                  </motion.span>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
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
