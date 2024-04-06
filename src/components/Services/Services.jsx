import { service1, service2, service3, check } from "../../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../../constants";
import {
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
  Gradient,
} from "../design/Services";
import { fadeIn } from "../../constants/variants";
import AccordionItem from "../Collaboration/AccordionItem";
import Heading from "../Heading";
import Generating from "../Hero/Generating";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div
      id="how-to-use"
      className="max-w-[1400px] relative mx-auto px-5 sm:mt-0 md:mt-[70px] lg:mt-[100px] mb-[100px] lg:px-7.5 xl:px-10 max-lg:py-4"
    >
      <Heading
        className="max-w-md lg:max-w-2xl"
        title="Generative AI made for creators."
        text="Brainwave unlocks the potential of AI powered applications"
      />

      {/* bento grid */}
      <div className="relative grid grid-cols-1 gap-5 z-1 md:grid-cols-2">
        {/* top */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          className="relative col-span-1 md:col-span-2 z-1 flex items-center h-[39rem] mt-[60px] md:mt-[100px] p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
        >
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
            <img
              className="object-cover w-full h-full md:object-right"
              width={800}
              height={730}
              src={service1}
              alt="service"
            />
          </div>
          {/* content */}
          <div className="relative z-1 max-w-[17rem] ml-auto">
            <motion.h4
              variants={fadeIn("left", 1)}
              initial="hidden"
              whileInView={"show"}
              className="mb-2 h4"
            >
              Smartest AI
            </motion.h4>
            <motion.p
              variants={fadeIn("left", 1.2)}
              initial="hidden"
              whileInView={"show"}
              className="body-2 mb-[3rem] text-n-3"
            >
              Brainwave unlocks the potential of AI-powered applications
            </motion.p>
            {/* accordian */}
            <motion.ul
              variants={fadeIn("left", 1.4)}
              initial="hidden"
              whileInView={"show"}
              className="body-2"
            >
              {brainwaveServices.map((item, index) => {
                return (
                  <motion.div
                    variants={fadeIn("left", index + 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    key={index}
                    className="flex items-center py-2 list-none border-t border-n-6"
                  >
                    <AccordionItem header={item?.title} text={item?.text} />
                  </motion.div>
                );
              })}
            </motion.ul>
            {/* accordian */}
          </div>
          {/* generating spin absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 */}
          <Generating
            className={
              "absolute left-4 right-4 bottom-5 border border-n-1/10 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"
            }
          />
          {/* generating spin */}
          {/* content */}
        </motion.div>
        {/* top */}
        {/* bottom */}
        {/* left */}
        <motion.div
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          whileInView={"show"}
          className="col-span-1 relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src={service2}
              className="object-cover w-full h-full"
              alt="image"
              width={630}
              height={750}
            />
          </div>
          {/* content */}
          <motion.div
            variants={fadeIn("right", 1.2)}
            initial="hidden"
            whileInView={"show"}
            className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15"
          >
            <h4 className="mb-2 h4">Photo Editing</h4>
            <p className="body-2 mb-[3rem] text-n-3">
              Automatically enhance your photos using our AI app&apos;s photo
              editing feature. Try it now!
            </p>
            <PhotoChatMessage />
          </motion.div>
          {/* content */}
        </motion.div>
        {/* left */}
        {/* right */}
        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          className="col-span-1 relative p-4 min-h-[39rem] rounded-3xl overflow-hidden  bg-n-7"
        >
          <div className="relative w-full h-full">
            {/* top */}
            <div className="relative px-4 py-12 xl:px-8">
              <motion.h4
                variants={fadeIn("left", 1)}
                initial="hidden"
                whileInView={"show"}
                className="mb-2 h4"
              >
                Video generation
              </motion.h4>
              <motion.p
                variants={fadeIn("left", 1.2)}
                initial="hidden"
                whileInView={"show"}
                className="body-2 mb-[3rem] text-n-3"
              >
                The world’s most powerful AI photo and video art generation
                engine. What will you create?
              </motion.p>

              {/* icons */}
              <ul className="relative flex items-center justify-between space-x-1">
                {brainwaveServicesIcons.map((item, index) => {
                  return (
                    <motion.li
                      variants={fadeIn("up", item?.delay)}
                      initial="hidden"
                      whileInView={"show"}
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-[1.25px] bg-conic-gradient lg:w-[4.5rem] lg:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 lg:w-15 lg:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img
                          src={item?.img}
                          width={24}
                          height={24}
                          alt="icon"
                        />
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
              {/* icons */}
            </div>
            {/* bottom */}
            <div className="relative h-[20rem] rounded-xl overflow-hidden md:h-[25rem]">
              <motion.div
                variants={fadeIn("up", 1.4)}
                initial="hidden"
                whileInView={"show"}
                className="absolute w-full h-full bg-n-8"
              >
                <img
                  src={service3}
                  className="object-cover w-full h-full"
                  alt="image"
                />
                <VideoChatMessage />
                <VideoBar />
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* right */}
        {/* bottom */}
      </div>
      {/* bento grid */}
      <Gradient />
    </div>
  );
};

export default Services;
