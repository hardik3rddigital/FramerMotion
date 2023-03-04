import React from "react";
import { motion } from "framer-motion";

function File3() {
  const list = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { delay: 2, when: "beforeChildren" },
    },
  };

  const list2 = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, staggerChildren: 1, opacity: 1 },
  };

  return (
    <div className="boxcontainer">
      <motion.div
        className="box"
        variants={list}
        animate="visible"
        initial="hidden"
        // transition={{ type: "spring" }}
      >
        {[1, 2, 3].map((box, index) => {
          return (
            <motion.li
              className="boxItem"
              variants={list2}
              key={index}
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}

export default File3;
