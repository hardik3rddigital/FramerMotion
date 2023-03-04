import React from "react";
import { motion } from "framer-motion";

function File4() {
  return (
    <div className="boxcontainer">
      <motion.div
        className="box"
        animate={{
          borderRadius: ["100px", "20px", "50px", "80px", "20px", "50%"],
          x: [100, 200, 300, 400, 500, 600],
          y: [-100, 0, -300, 0, -500, 0],
          rotate: [100, 50, -45, 180, 90, 360],
        }}
        transition={{
          duration: 8,
        }}
      ></motion.div>
    </div>
  );
}

export default File4;
