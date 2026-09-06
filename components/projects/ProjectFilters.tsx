"use client";

import { Search } from "lucide-react";

import type { ProjectCategory } from "@/data/projects";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  categories: (ProjectCategory | "All")[];
  activeCategory: ProjectCategory | "All";
  onCategoryChange: (category: ProjectCategory | "All") => void;
  search: string;
  onSearchChange: (value: string) => void;
}

export function ProjectFilters({
  categories,
  activeCategory,
  onCategoryChange,
  search,
  onSearchChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            aria-pressed={activeCategory === category}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
              activeCategory === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative w-full sm:w-64">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search projects or tech..."
          aria-label="Search projects"
          className="pl-9"
        />
      </div>
    </div>
  );
}
