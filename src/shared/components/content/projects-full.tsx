"use client";

import type { Project } from "@constants/projects";
import { projects } from "@constants/projects";
import { Badge } from "@components/ui/badge";
import { ArrowLeft, Briefcase } from "lucide-react";
import { ActionSearchBar } from "@components/ui/action-search-bar";
import React from "react";

export function ProjectCard({ project }: { project: Project }) {
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
              <p className="text-lg text-foreground">{project.name}</p>
            </a>
          </div>
          <p className="text-md mb-4 text-muted-foreground">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectsFull() {
  const [query, setQuery] = React.useState("");

  const projectActions = projects.map((p) => ({
    id: p.name,
    label: p.name,
    icon: <Briefcase className="h-4 w-4" />,
    description: p.description,
    end: "Project",
    short: "",
  }));

  const filteredProjects = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
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
          <p className="text-3xl font-bold">Projects</p>
          <ActionSearchBar actions={projectActions} setQuery={setQuery} query={query} />
        </div>
      </div>
      <div className="mt-12">
        <div className="flex flex-col gap-4">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
