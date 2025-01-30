import { ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { Button } from "./button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

interface Props {
  children: React.ReactNode;
  label: string;
}

export function CollapsibleButton({ children, label }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className=" space-y-2">
      <div className="flex items-center justify-between space-x-4 rounded border border-muted-foreground/50 px-4">
        <h4 className="text-sm font-semibold">{label}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
}
