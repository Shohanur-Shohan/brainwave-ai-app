import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

const Heading = ({ className, title, text }) => {
  return (
    <div
      className={`${className} max-w-[28rem] md:max-w-[36rem] xl:max-w-[40rem] mx-auto text-center`}
    >
      {title && (
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[24px] leading-[36px] sm:text-[32px] md:text-[36px] sm:leading-[40px] lg:text-[44px] lg:leading-[52px] xl:text-[48px] xl:leading-[56px]"
        >
          {title}
        </motion.h2>
      )}
      {text && (
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 1 }}
        >
          <p className="mt-4 body-2 text-n-4">{text}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Heading;
