import React from "react";
import { motion } from "framer-motion";

function File2() {
  // const [isanimate, setIsanimate] = useState(false);

  return (
    <div className="boxcontainer">
      <motion.div
        className="box_two"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraint={{
          right: 20,
          left: -20,
        }}
      ></motion.div>
    </div>
  );
}

export default File2;
