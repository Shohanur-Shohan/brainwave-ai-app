import { socials } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

const Footer = () => {
  return (
    // max-w-[1400px] relative mx-auto px-5 sm:mt-0 md:mt-[70px] lg:mt-[100px] mb-[100px] lg:px-7.5 xl:px-10 max-lg:py-4
    <div className="bg-[#0D0B14] px-2 md:px-4 py-[20px] md:py-[30px] border-t border-n-1/10">
      <div className="max-w-[1400px] relative mx-auto sm:flex items-center justify-between ">
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          className="text-center caption text-n-4 lg:block sm:text-left"
        >
          © 2024. Shohan All rights reserved.
        </motion.p>

        <motion.ul
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center gap-5 sm:justify-end"
        >
          {socials.map(item => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-n-7 hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Footer;
