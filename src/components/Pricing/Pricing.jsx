import { smallSphere, stars } from "../../assets";
import Heading from "../Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "../design/Pricing";
import { motion } from "framer-motion";
import { fadeIn } from "../../constants/variants";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="max-w-[1400px] relative mx-auto px-5 sm:mt-0 md:mt-[70px] lg:mt-[100px] mb-[100px] lg:px-7.5 xl:px-10 max-lg:py-4"
    >
      <div className="relative z-2">
        <div className="relatiive justify-center mb-[6.5rem] flex">
          <img src={smallSphere} className="w-[250px] h-[250px]" alt="sphere" />
          <div className="absolute hidden sm:flex">
            <img src={stars} className="w-full h-[400px]" alt="start" />
          </div>
        </div>

        <div className="max-w-[50rem] mx-auto mb-12 lg:mb-20">
          <Heading
            tag={"Get started with Brainwave"}
            title={"Pay once, use forever"}
          />
        </div>

        {/* pricing */}
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        {/* pricing */}
        {/* see more */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center mt-10"
        >
          <a
            href="/pricing"
            className="text-xs font-bold tracking-wider uppercase border-b font-code"
          >
            See the full details
          </a>
        </motion.div>
        {/* see more */}
      </div>
    </div>
  );
};

export default Pricing;
