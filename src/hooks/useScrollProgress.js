import { useEffect, useState } from 'react';

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const percentage = (currentProgress / scrollHeight).toFixed(2) * 100;
      console.log(percentage);
      if (scrollHeight) setProgress(percentage);
    };

    window.addEventListener('scroll', updateScrollCompletion);
    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  return progress;
}

export { useScrollProgress };