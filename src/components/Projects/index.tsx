import { useEffect, useRef } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

function Project() {
  const container = useRef(null);
  const text = useRef(null);

  const mouseover = () => {
    let iterations = 0;

    const interval = setInterval(() => {
      text.current.innerText = text.current.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) return text.current.dataset.value[index];
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= text.current.dataset.value.length)
        clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    container.current.addEventListener("mouseenter", mouseover);

    return () => {
      container.current.removeEventListener("mouseenter", mouseover);
    };
  }, []);

  return (
    <div
      className="relative h-[300px] w-full h-full bg-black/80 backdrop-blur-xl rounded-xl"
      ref={container}
    >
      <p
        className="w-full h-full flex items-center justify-center text-white text-4xl uppercase font-black"
        data-value="Project"
        ref={text}
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
