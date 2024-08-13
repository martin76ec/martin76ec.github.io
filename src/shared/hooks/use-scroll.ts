// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useScroll(target: string, callback?: (...p: any) => any) {
  return () => {
    const _target = document.getElementById(target);
    _target?.scrollIntoView({ behavior: "smooth" });
    if (callback) callback();
  };
}
