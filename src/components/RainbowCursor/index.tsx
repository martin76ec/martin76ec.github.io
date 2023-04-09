import { useEffect, useRef } from "react";
import "./style.css";

function RainbowCursor() {
  const ref = useRef(null);

  useEffect(() => {
    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      ref.current.animate(
        {
          left: `${clientX}px`,
          top: `${window.scrollY + clientY}px`,
        },
        { duration: 5000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <div id="blob" className="bg-gradient-to-r from-purple to-blue" ref={ref} />
  );
}

export { RainbowCursor };
