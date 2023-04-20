import { useScrollProgress } from "@hooks";
import LogoWhite from "@assets/logo-white-alt.png";
import "./style.css";
import { useEffect, useRef } from "react";

function Button({ disabled = false, children }) {
  const container = useRef(null);
  const wave = useRef(null);
  const mouseover = () => (wave.current.style.display = "grid");
  const mouseleave = () => (wave.current.style.display = "none");

  useEffect(() => {
    container.current.addEventListener("mouseover", mouseover);
    container.current.addEventListener("mouseleave", mouseleave);

    return () => {
      container.current.removeEventListener("mouseover", mouseover);
      container.current.removeEventListener("mouseover", mouseleave);
    };
  }, []);

  return (
    <div className="w-1/6 md:w-2/5 max-h-32 relative" ref={container}>
      <div className="absolute w-full h-full flex z-0 justify-center items-center"></div>
      {!disabled && <div className="loader" ref={wave} />}
      <div className="absolute w-full h-full flex z-1 justify-center items-center backdrop-blur-lg">
        {children}
      </div>
    </div>
  );
}

function Navbar() {
  const progress = useScrollProgress();

  return (
    <>
      <div
        className="w-full flex h-2 bg-gradient-to-r from-blue to-purple md:hidden"
        style={{ transform: `translateX(${progress - 100}%)` }}
      ></div>
      <div className="w-full max-h-32 h-24 flex border-white/[.2] border-t-[1px] md:border-t-0 xs:border-b-0 md:border-b-[1px] text-white">
        <Button disabled={true}>
          <img src={LogoWhite} className="w-6 md:w-16" />
        </Button>
        <Button>About Me</Button>
        <Button>Projects</Button>
        <Button>Social</Button>
      </div>
      <div
        className="w-full flex h-2 bg-gradient-to-r from-blue to-purple hidden md:block"
        style={{ transform: `translateX(${progress - 100}%)` }}
      ></div>
    </>
  );
}

export { Navbar };
