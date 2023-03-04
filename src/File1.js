import React, { useState } from "react";
import { motion } from "framer-motion";

function File1() {
  const [isanimate, setIsanimate] = useState(false);

  return (
    <div className="boxcontainer">
      <motion.div
        className="box_one"
        animate={{
          x: isanimate ? 750 : 0,
          opacity: isanimate ? 1 : 0.4,
          backgroundColor: isanimate ? "Blue" : "skyblue",
          rotate: isanimate ? 360 : 0,
        }}
        // initial={{ opacity: 0.2, backgroundColor: "Red" }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
        onClick={() => setIsanimate(!isanimate)}
      ></motion.div>
    </div>
  );
}

export default File1;
