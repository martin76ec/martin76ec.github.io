import { useEffect, useRef } from "react";

type Callback = (...p: any) => void;

export function useOutsideClick(callback: Callback) {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
}
