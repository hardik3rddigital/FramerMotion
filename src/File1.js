import React from "react";
import { motion } from "framer-motion";

function File1() {
  return (
    <div className="boxcontainer">
      <motion.div
        className="box_one"
        animate={{ x: 800, opacity: 1 }}
        initial={{ opacity: 0.1 }}
        transition={{ type: "tween", duration: 2 }}
      ></motion.div>
    </div>
  );
}

export default File1;
