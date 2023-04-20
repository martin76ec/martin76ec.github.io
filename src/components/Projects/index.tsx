import { useEffect, useRef } from "react";
import "./style.css";

const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

function Project() {
  const container = useRef(null);
  const text = useRef(null);

  function mouseover() {
    let iterations = 0;

    if (this.executing) return;

    const interval = setInterval(() => {
      this.executing = true;
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
      this.executing = false;
    }, 30);
  }

  useEffect(() => {
    container.current.addEventListener("mouseenter", mouseover);

    return () => {
      container.current.removeEventListener("mouseenter", mouseover);
    };
  }, []);

  return (
    <div
      className="relative h-[400px] w-full h-full bg-black/80 backdrop-blur-xl rounded-xl aspect-square card"
      ref={container}
    >
      <div className="card__lines"></div>
      <div className="card__content">
        <p
          className="w-full h-full flex items-center justify-center text-white text-4xl uppercase font-black"
          data-value="Project"
          ref={text}
        >
          Project
        </p>
      </div>
    </div>
  );
}
function Projects() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
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
