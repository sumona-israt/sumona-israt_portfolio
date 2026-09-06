"use client";

import * as React from "react";

import type { Project, ProjectCategory } from "@/data/projects";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectGrid } from "./ProjectGrid";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory | "All">("All");
  const [search, setSearch] = React.useState("");

  const categories = React.useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))] as (
      | ProjectCategory
      | "All"
    )[],
    [projects]
  );

  const filtered = React.useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        query.length === 0 ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, search]);

  return (
    <div className="flex flex-col gap-8">
      <ProjectFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        search={search}
        onSearchChange={setSearch}
      />
      <ProjectGrid projects={filtered} showComingSoon={projects.length < 3} />
    </div>
  );
}
