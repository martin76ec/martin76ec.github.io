import { motion } from "framer-motion";
import React from "react";

export const BentoGrid = ({ children }) => {
  const bentoStyles = [
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
  ];

  return (
    <div className="grid auto-rows-[minmax(300px,_auto)] grid-cols-4 gap-4 p-4">
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          className={`flex items-center justify-center rounded bg-accent ${bentoStyles[index % bentoStyles.length]}`}
          layout
          whileHover={{ scale: 1 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};
