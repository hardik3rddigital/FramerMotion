import React from "react";
import { motion } from "framer-motion";

function File1() {
  return (
    <div className="boxcontainer">
      <motion.div
        className="box_one"
        animate={{ x: 800, opacity: 1 }}
        initial={{ opacity: 0.1 }}
        transition={{ type: "spring", stiffness: 10, damping: 10 }}
      ></motion.div>
    </div>
  );
}

export default File1;
