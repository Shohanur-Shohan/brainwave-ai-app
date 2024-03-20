import { brainwaveSymbol } from "../../assets";
import { collabApps, collabContent, collabText } from "../../constants";
import Button from "../Button";
import AccordionItem from "./AccordionItem";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../constants/variants";

const Collaboration = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotationAngle(prevAngle => (prevAngle + 45) % 360); // Increment angle by 45 degrees, wrap around after reaching 360
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="collaboration"
      className="max-w-[1400px] relative mx-auto px-5 lg:px-7.5 xl:px-10"
    >
      <div className="grid w-full grid-cols-12 pt-[150px] sm:pt-[100px] pb-[100px] items-center">
        {/* left */}
        <div className="col-span-12 md:col-span-6 mb-[40px] md:mb-0">
          <div className="max-w-[25rem]">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              className="mb-4 h2 md:mb-8"
            >
              AI Chat App for seamless collaboration
            </motion.h1>
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              className="max-w-[22rem] mb-10 md:mb-14"
            >
              {collabContent.map(item => {
                return (
                  <AccordionItem
                    key={item.id}
                    header={item.title}
                    text={item?.text}
                  />
                );
              })}
            </motion.div>

            {/* button */}
            <motion.div
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView={"show"}
            >
              <Button className="">Try It Now</Button>
            </motion.div>
            {/* button */}
          </div>
        </div>
        {/* left */}
        {/* right */}
        <div className="col-span-12 md:col-span-6">
          <div className="lg:ml-auto xl:w-[38rem]">
            <motion.p
              variants={fadeIn("left", 1)}
              initial="hidden"
              whileInView={"show"}
              className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto"
            >
              {collabText}
            </motion.p>
            {/* main circle */}
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
            >
              <div className="relative left-1/2 flex w-[20rem] sm:w-[28rem] md:w-[18rem] lg:w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
                {/* second circle */}
                <div className="flex w-[14rem] sm:w-[20rem] md:w-[12rem] lg:w-[15rem] aspect-square m-auto border border-n-6 rounded-full">
                  {/* third circle */}
                  <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient animate-pulse rounded-full">
                    <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                      <img
                        src={brainwaveSymbol}
                        width={48}
                        height={48}
                        alt="logo"
                      />
                    </div>
                  </div>
                  {/* third circle */}
                </div>
                {/* second circle */}
                {/* all logos */}
                <ul>
                  {collabApps.map((item, index) => {
                    const adjustedRotation = (rotationAngle + index * 45) % 360;
                    return (
                      <li
                        key={item?.id}
                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${adjustedRotation}`}
                      >
                        <div
                          className={`relative animate-pulse -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] sm:w-[4.2rem] sm:h-[4.2rem] md:w-[3.2rem] md:h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${adjustedRotation}`}
                        >
                          <img
                            className="m-auto "
                            width={item?.width}
                            height={item?.height}
                            src={item?.icon}
                            alt={item?.title}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
                {/* all logos */}
                {/* left-right-lines */}
                <LeftCurve />
                <RightCurve />
                {/* left-right-lines */}
              </div>
            </motion.div>

            {/* main circle */}
          </div>
        </div>
        {/* right */}
      </div>
    </div>
  );
};

export default Collaboration;
