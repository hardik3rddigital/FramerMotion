import React from "react";
import { motion } from "framer-motion";

function File3() {
  // const boxVariant = {
  //   objectOne: {
  //     x: 100,
  //     scale: 1.5,
  //   },
  //   objectTwo: {
  //     x: 1000,
  //     scale: 0.2,
  //   },
  // };

  const list = {
    hidden: { opacity: 0 },
    visible: {
      x: 100,
      opacity: 1,
      transition: { delay: 2, when: "beforeChildren" },
    },
  };

  const list2 = {
    hidden: { opacity: 0, x: -100 },
    visible: { x: 0, opacity: 1, staggerChildren: 0.2 },
  };
  // const item = { hidden: { x: -10, opacity: 0 } };
  return (
    <div className="boxcontainer">
      <motion.div
        className="box"
        variants={list}
        animate="visible"
        initial="hidden"
        transition={{ type: "spring" }}
      >
        {[1, 2, 3].map((box) => {
          return <motion.li className="boxItem" variants={list2}></motion.li>;
        })}
      </motion.div>
    </div>
  );
}

export default File3;
