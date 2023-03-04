import React from "react";
import { motion } from "framer-motion";

const list = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const item = { hidden: { x: -10, opacity: 0 }, visible: { x: 0, opacity: 1 } };

function Variant() {
  return (
    <motion.ul
      initial="hidden"
      variants={list}
      transition={{ delay: 8 }}
      animate="visible"
    >
      <motion.li variants={item} />
      <motion.li variants={item} />
      <motion.li variants={item} />
    </motion.ul>
  );
}

export default Variant;
