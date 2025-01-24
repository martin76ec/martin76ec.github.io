import { useEffect, useState } from "react";

type Rect = {
  a: number;
  b: number;
};

type Coverage = {
  id: string;
  coverage: number;
};

function getCoveragePercentage(visible: Rect, target: Rect) {
  const overlapStart = Math.max(visible.a, target.a);
  const overlapEnd = Math.min(visible.b, target.b);

  if (overlapEnd <= overlapStart) return 0;

  const overlapLength = overlapEnd - overlapStart;
  const visibleLength = visible.b - visible.a;

  return (overlapLength / visibleLength) * 100;
}

function adjustCoverageBySize(coverage: number, visible: Rect, target: Rect) {
  const elementLength = target.b - target.a;
  const visibleLength = visible.b - visible.a;
  const windowHeight = window.innerHeight; // Get window height

  // Weight factor considers both visible area and screen size
  const weightFactor = ((visibleLength / elementLength) * (windowHeight / elementLength)) ** 0.8;

  return Math.min(coverage * weightFactor, 100);
}

function getCoverage(scrollArea: HTMLElement, element: HTMLElement) {
  const top = element.getBoundingClientRect().top;
  const bottom = element.getBoundingClientRect().bottom;

  const scrollTop = scrollArea.scrollTop;
  const scrollBottom = scrollArea.getBoundingClientRect().height;

  const visibleRect: Rect = {
    a: scrollTop,
    b: scrollTop + scrollBottom,
  };

  const elementRect: Rect = {
    a: scrollTop + top,
    b: scrollTop + bottom,
  };

  const baseCoverage = getCoveragePercentage(visibleRect, elementRect);
  return adjustCoverageBySize(baseCoverage, visibleRect, elementRect);
}

export function useScrollCoverage(scrollAreaID: string, targets: string[]) {
  const [percentages, setPercentages] = useState<Coverage[]>([]);

  const scrollArea = document.getElementById(scrollAreaID);
  const elements = targets.map((id) => document.getElementById(id));

  if (elements.length <= 0 || !scrollArea) return;

  useEffect(() => {
    const updateCoverages = () => {
      const coverages: Coverage[] = elements
        .filter((e) => !!e)
        .map((e) => ({ id: e.id, coverage: getCoverage(scrollArea, e) }));
      setPercentages(coverages);
    };

    scrollArea.addEventListener("scrollend", updateCoverages);

    return () => {
      scrollArea.removeEventListener("scrollend", updateCoverages);
    };
  }, [scrollAreaID, targets]);

  return percentages;
}
