import React from "react";
import { motion, useAnimation } from "framer-motion";

function File5() {
  const control = useAnimation();

  return (
    <div className="boxcontainer">
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          className="btn btn-primary"
          onClick={() =>
            control.start({
              x: -100,
              transition: { duration: 5 },
            })
          }
        >
          Move Left
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            control.start({
              x: 100,
              transition: { duration: 5 },
            })
          }
        >
          Move Right
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            control.start({
              y: -100,
              transition: { duration: 5 },
            })
          }
        >
          Move Up
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            control.start({
              y: 100,
              transition: { duration: 5 },
            })
          }
        >
          Move Down
        </button>
        <button className="btn btn-primary" onClick={() => control.stop({})}>
          Stop
        </button>
      </div>

      <motion.div
        className="box"
        style={{ marginTop: "20px" }}
        animate={control}
      ></motion.div>
    </div>
  );
}

export default File5;
