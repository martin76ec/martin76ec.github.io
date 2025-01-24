// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useScroll(target: string, callback?: (...p: any) => any) {
  return () => {
    const _target = document.getElementById(target);
    const scrollable = document.getElementById("scroll-content");
    scrollable?.scrollBy({
      top: _target?.getBoundingClientRect().y,
      behavior: "smooth",
    });
    // _target?.scrollIntoView({ behavior: "smooth" });
    if (callback) callback();
  };
}
