import { useEffect, useRef } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

function Project() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.onmouseover = (event) => {
      let iterations = 0;

      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) return event.target.dataset.value[index];
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iterations >= event.target.dataset.value.length)
          clearInterval(interval);
        iterations += 1 / 3;
      }, 30);
    };

    return () => {
      ref.current.onmouseover = null;
    };
  }, []);

  return (
    <div className="relative h-[300px] w-full h-full bg-black/80 backdrop-blur-xl rounded-xl">
      <p
        className="w-full h-full flex items-center justify-center text-white text-4xl uppercase font-black"
        ref={ref}
        data-value="Project"
      >
        Project
      </p>
    </div>
  );
}
function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
}

export { Projects };
