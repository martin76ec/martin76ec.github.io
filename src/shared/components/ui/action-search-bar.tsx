import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "./input";

interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  short: string;
  end: string;
}

interface ActionSearchBarProps {
  actions: Action[];
  setQuery: (query: string) => void;
  query: string;
}

export function ActionSearchBar({ setQuery, query }: ActionSearchBarProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search projects..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-14 w-full rounded-md border border-input bg-background pl-10 pr-4 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-lg"
      />
    </div>
  );
}
