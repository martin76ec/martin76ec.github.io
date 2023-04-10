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
        { duration: 3000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <div
      id="blob"
      className="bg-gradient-to-r from-scampi to-bondiBlue"
      ref={ref}
    />
  );
}

export { RainbowCursor };
