"use client";

import type { Project } from "@constants/projects";
import { projects } from "@constants/projects";
import { Badge } from "@components/ui/badge";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Input } from "@components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={i} className="text-primary-foreground bg-primary">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

export function ProjectCard({
  project,
  query,
}: {
  project: Project;
  query: string;
}) {
  return (
    <div className="border-1 flex min-h-64 w-full select-none flex-col gap-2 rounded border border-muted/80 bg-muted/50 px-8 py-6 backdrop-blur-md hover:bg-accent md:flex-row md:gap-24 lg:gap-8">
      <div className="flex min-w-24 flex-col">
        {project.image && (
          <img
            src={project.image}
            alt={project.name}
            className="hidden w-24 rounded-md object-contain md:mt-4 md:block"
          />
        )}
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="h-10 w-10 rounded-md bg-transparent object-contain md:hidden"
              />
            )}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <p className="text-base text-foreground md:text-lg">
                <Highlight text={project.name} query={query} />
              </p>
            </a>
          </div>
          <p className="text-sm mb-4 text-muted-foreground md:text-base">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((s) => (
            <Badge key={s}>
              <Highlight text={s} query={query} />
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectsFull() {
  const [query, setQuery] = React.useState("");

  const filteredProjects = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()))
  );
  return (
    <div className="w-full max-w-screen-xl px-10">
      <div className="flex flex-col gap-8">
        <div className="text-md flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline">
          <ArrowLeft className="h-4 w-4" />
          <a href="/">
            <span>Go back</span>
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold md:text-3xl">Projects</p>
          <Input
            placeholder="Search by name or tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-16 w-full text-xl md:text-2xl"
          />
        </div>
      </div>
      <div className="mt-12">
        <motion.div layout className="flex flex-col gap-4">
          <AnimatePresence>
            {filteredProjects.map((p) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProjectCard project={p} query={query} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
