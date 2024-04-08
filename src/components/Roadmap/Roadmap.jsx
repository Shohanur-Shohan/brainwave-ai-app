import { check2, grid, loading1 } from "../../assets";
import { roadmap } from "../../constants";
import { fadeIn } from "../../constants/variants";
import Button from "../Button";
import Heading from "../Heading";
import Tagline from "../Tagline";
import { motion } from "framer-motion";

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="max-w-[1400px] relative mx-auto px-5 sm:mt-0 md:mt-[70px] lg:mt-[100px] mb-[100px] lg:px-7.5 xl:px-10 max-lg:py-4"
    >
      <Heading tag={"Ready to get started"} title={"What we're working on"} />

      {/* cards */}
      <div className="relative grid gap-6 sm:gap-4 md:grid-cols-2 md:gap-4 md:pb-[7rem] mt-[60px]">
        {roadmap.map((item, index) => {
          const status = item?.status === "done" ? "Done" : "In Progress";
          const delay =
            index === 0
              ? 0.7
              : index === 1
              ? 1.2
              : index === 2
              ? 0.7
              : index === 3
              ? 1.2
              : index === 4
              ? 1.6
              : 1;
          return (
            <div
              className="col-span-1 even:md:translate-y-[4rem] h-full"
              key={item?.id}
            >
              <motion.div
                variants={fadeIn("up", delay)}
                initial="hidden"
                whileInView={"show"}
                className={`w-full md:flex h-full p-0.25 rounded-[2.5rem] ${
                  item?.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative bg-n-8 rounded-[2.5rem] overflow-hidden  w-full h-full">
                  <div className="w-full h-full px-4 py-[3rem] sm:px-8 md:px-6 xl:p-15">
                    {/* content */}
                    <div className="absolute top-0 left-0 max-w-full">
                      <img
                        src={grid}
                        className="w-full"
                        width={550}
                        height={550}
                        alt="img"
                      />
                    </div>
                    <div className="relative z-1">
                      {/* top */}
                      <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                        <motion.div
                          variants={fadeIn("right", 0.4)}
                          initial="hidden"
                          whileInView={"show"}
                          className="flex items-center justify-between "
                        >
                          <Tagline>{item?.date}</Tagline>
                        </motion.div>
                        <motion.div
                          variants={fadeIn("left", 0.4)}
                          initial="hidden"
                          whileInView={"show"}
                          className="flex items-center justify-between px-1 py-1 ml-auto rounded sm:px-4 w-fit bg-n-1 text-n-8"
                        >
                          <img
                            src={item?.status === "done" ? check2 : loading1}
                            className="mr-2.5 w-4 h-4"
                            alt="status"
                          />
                          <div className="text-xs font-light uppercase font-grotesk tracking-tagline">
                            {status}
                          </div>
                        </motion.div>
                      </div>
                      {/* top */}
                      <motion.div
                        variants={fadeIn("up", 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        className="mb-10"
                      >
                        <img
                          src={item?.imageUrl}
                          className="w-full max-w-[630px] max-h-[420px]"
                          alt={item?.title}
                        />
                      </motion.div>
                      <motion.h4
                        variants={fadeIn("up", 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        className="mb-4 h4"
                      >
                        {item?.title}
                      </motion.h4>
                      <motion.p
                        variants={fadeIn("up", 0.8)}
                        initial="hidden"
                        whileInView={"show"}
                        className="body-2 text-n-4"
                      >
                        {item?.text}
                      </motion.p>
                    </div>
                    {/* content */}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
      {/* cards */}
      {/* btn */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        className="flex justify-center mt-12 "
      >
        <Button className="" href="#hero">
          Our Roadmap
        </Button>
      </motion.div>
      {/* btn */}
    </div>
  );
};

export default Roadmap;
