import React from "react";
import { motion, useAnimation } from "framer-motion";

function File6() {
  const control = useAnimation();
  const backgroundChange = useAnimation();
  const TapTap = useAnimation();
  const Keyframe = useAnimation();

  return (
    <>
      <div
        className=""
        style={{
          backgroundColor: "#ffda28",
          height: "100%",
          padding: "100px 0",
        }}
      >
        <div
          className=""
          style={{ maxWidth: "1024px", width: "100%", margin: "0 auto" }}
        >
          <h1>Square to circle</h1>
          <button
            className="btn btn-primary"
            onClick={() =>
              control.start({
                x: 0,
                transition: { duration: 5 },
                borderRadius: "50%",
              })
            }
          >
            Convert Shape
          </button>
          <motion.div className="Shape_One" animate={control}></motion.div>

          <h1>Changing backgroundColor</h1>
          <button
            className="btn btn-primary"
            onClick={() =>
              backgroundChange.start({
                background: "linear-gradient(to right, #f12711, #f5af19)",
                transition: {
                  duration: 5,
                  stiffness: 100,
                  damping: 100,
                },
              })
            }
          >
            Change Color
          </button>
          <motion.div
            className="Shape_One"
            animate={backgroundChange}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          ></motion.div>

          <h1>Tap Tap</h1>
          <button
            className="btn btn-primary"
            onClick={() =>
              TapTap.start({
                scale: 1.5,
              })
            }
          >
            Tap Tap
          </button>
          <motion.div className="Shape_One" animate={TapTap}></motion.div>

          <h1>Keyframe</h1>
          <button
            className="btn btn-primary"
            onClick={() =>
              Keyframe.start({
                x: [0, 100, 200, 300, 400, 500, 600],
                y: [-20, 0, -30, 0, -50, 0],
                backgroundColor: [
                  "hsl(0, 100, 50)",
                  "hsl(240, 100, 50)",
                  "hsl(344.72, 93.81%, 44.31%)",
                  "hsl(44.72, 93.81%, 44.31%)",
                  "hsl(103.2, 55.56%, 26.47%)",
                  "hsl(0, 100, 50)",
                ],
                border: [
                  "2px solid hsl(103.2, 55.56%, 26.47%)",
                  "10px solid hsl(44.72, 93.81%, 44.31%)",
                  "1px solid hsl(0, 100, 50)",
                  "7px solid hsl(344.72, 93.81%, 44.31%)",
                  "4px solid hsl(44.72, 93.81%, 44.31%)",
                  "10px solid hsl(04.72, 01.81%, 44.31%)",
                ],
              })
            }
          >
            Convert Key Frame
          </button>
          <motion.div
            className="Shape_One"
            animate={Keyframe}
            transition={{
              duration: 8,
            }}
          ></motion.div>
        </div>
      </div>
    </>
  );
}

export default File6;
