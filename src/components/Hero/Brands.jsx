import { companyLogos } from "../../constants/index";
import { motion } from "framer-motion";
import { fadeIn } from "../../constants/variants";

const Brands = ({ className }) => {
  return (
    <div className={`${className}`}>
      <motion.h5
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        className="mb-6 text-center tagline text-n-1/50"
      >
        Helping people create beautiful content at
      </motion.h5>
      <motion.ul
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 pb-[80px] sm:pb-0 lg:grid-cols-5 items-center between h-[8.5rem]"
      >
        {companyLogos.map((item, index) => {
          return (
            <li
              className="flex items-center w-[134px] mx-auto h-[28px] justify-center col-span-1 mt-4 sm:mt-0 lg:col-span-1"
              key={index}
            >
              <img className={`w-full h-full`} src={item} alt="logo" />
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Brands;
