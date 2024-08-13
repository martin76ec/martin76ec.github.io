import { useEffect, useState } from "react";

export function useScrollProgress(element: string) {
  const [progress, setProgress] = useState(0);
  const content = document.getElementById(element);

  useEffect(() => {
    const handleScroll = () => {
      const content = document.getElementById(element);
      if (!content) return;
      const scrollTop = content.scrollTop;
      const scrollHeight = content.scrollHeight - content.clientHeight;
      const _progress = (scrollTop / scrollHeight) * 100;
      setProgress(_progress);
    };

    content?.addEventListener("scroll", handleScroll);
    return () => content?.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
