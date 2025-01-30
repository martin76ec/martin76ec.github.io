import { Squares } from "./squares-background";

export function SquareBG() {
  return (
    <div className="space-y-8">
      <div className="relative h-[400px] overflow-hidden rounded-lg bg-[#060606]">
        <Squares direction="diagonal" speed={0.5} squareSize={40} borderColor="#333" hoverFillColor="#222" />
      </div>
    </div>
  );
}
