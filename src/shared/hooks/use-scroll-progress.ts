import { useEffect, useRef, useState } from "react";

export function useScrollProgress(delay = 30) {
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef<Timer | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const _progress = (scrollTop / scrollHeight) * 100;
        setProgress(_progress);
      }, delay);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [delay]);

  return progress;
}
