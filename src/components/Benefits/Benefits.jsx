import Heading from "../Heading";
import { benefits } from "../../constants";
import Arrow from "../../assets/svg/Arrow.jsx";
import { GradientLight } from "../design/Benefits.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../constants/variants.js";

const Benefits = () => {
  return (
    <div
      id="features"
      className="max-w-[1400px] relative mx-auto px-5 mt-[150px] sm:mt-[100px] mb-[100px] lg:px-7.5 xl:px-10 max-lg:py-4"
    >
      <Heading
        className="max-w-md lg:max-w-2xl"
        title="Chat Smarter, Not Harder with Brainwave"
      />

      <div className="grid w-full gap-[2.5rem] lg:gap-[1rem] xl:gap-[2.5rem] items-center justify-between grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 mt-[60px] md:mt-[100px]">
        {benefits.map((item) => {
          // console.log(item);
          return (
            // card
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              className="col-span-1 sm:col-span-2 lg:col-span-1 block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-[24rem] mx-auto"
              style={{ backgroundImage: `url(${item?.backgroundUrl})` }}
              key={item?.id}
            >
              {/*inner content */}
              <div className="relative flex flex-col z-2 p-[1.8rem] lg:p-[1.5rem] xl:p-[2.4rem] overflow-hidden">
                {/* content */}
                <div className="">
                  <h5 className="mb-5 leading-[3rem] h5">{item?.title}</h5>
                  <p className="mb-6 lg:mb-[40px]  body-2 text-n-3 line-clamp-3">
                    {item?.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        src={item?.iconUrl}
                        className="w-[48px] h-[48px]"
                        alt="icon"
                      />
                    </div>
                    <div className="flex items-center justify-end text-sm tracking-wider uppercase font-code text-n-1">
                      <p>Read More</p>
                      <Arrow />
                    </div>
                  </div>
                </div>
                {/* content */}
                {/* bg-image */}
                <div className="absolute top-0 left-0 opacity-[0] transition-opacity hover:opacity-[0.3] w-full h-full">
                  <img
                    src={item?.imageUrl}
                    className="object-cover w-full h-full rounded-tr-[80px] xl:rounded-tr-[90px] rounded-tl-[30px] rounded-br-[30px] rounded-bl-[30px]"
                    alt="robot"
                  />
                </div>
                {/* bg-image */}
              </div>
              {/* bg-gradint */}
              {item?.light && <GradientLight />}
              {/* bg-gradint */}

              {/*inner content */}
            </motion.div>
            // card
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
