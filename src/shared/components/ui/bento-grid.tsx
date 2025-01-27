import React from "react";
import { motion } from "framer-motion";

export const BentoGrid = ({ children }) => {
  const bentoStyles = [
    "col-span-1 row-span-1", 
    "col-span-2 row-span-1", 
    "col-span-1 row-span-2", 
    "col-span-2 row-span-2"
  ];

  return (
    <div className="grid auto-rows-[minmax(300px,_auto)] grid-cols-4 gap-4 p-4">
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          className={`rounded bg-accent flex items-center justify-center ${bentoStyles[index % bentoStyles.length]}`}
          layout
          whileHover={{ scale: 1 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};
