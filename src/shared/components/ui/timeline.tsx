import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-10">
        <div className="text-md flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline">
          <ArrowLeft className="h-4 w-4" />
          <a href="/">
            <span>Go back</span>
          </a>
        </div>
        <p className="text-3xl font-bold">Experience</p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10">
            <div className="sticky top-10 z-40 flex max-w-xs flex-col items-center self-start md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex w-6 h-6 md:h-10 md:w-10 items-center justify-center rounded-full bg-white dark:bg-black md:left-3">
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>
              <h3 className="hidden text-xl font-bold text-neutral-500 dark:text-neutral-500 md:block md:pl-20 md:text-xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-10 pr-4 md:pl-0">
              <h3 className="ml-4 mb-4 block text-left text-2xl font-bold text-muted-foreground md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 md:left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700  md:left-8 "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="from-black-500 absolute inset-x-0  top-0 w-[2px] rounded-full bg-gradient-to-t from-[0%] via-gray-500 via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
