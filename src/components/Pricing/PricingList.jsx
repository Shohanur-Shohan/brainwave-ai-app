import { check } from "../../assets";
import { pricing } from "../../constants";
import { fadeIn } from "../../constants/variants";
import Button from "../Button";
import { motion } from "framer-motion";

const PricingList = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
      {pricing.map((item, index) => {
        // console.log(index);
        return (
          <motion.div
            variants={fadeIn(
              index === 0
                ? "right"
                : index === 1
                ? "up"
                : index === 2
                ? "left"
                : "up",
              0.6
            )}
            initial="hidden"
            whileInView={"show"}
            key={item?.id}
            className="col-span-3 sm:col-span-2 md:col-span-1 w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-12 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          >
            <h4 className="mb-4 h4">{item?.title}</h4>
            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {item?.description}
            </p>

            <div className="flex items-center h-[5.5rem] mb-6">
              {item?.price && (
                <>
                  <div className="h3">$</div>
                  <div className="text-[5.5rem] leading-none font-bold">
                    {item?.price}
                  </div>
                </>
              )}
            </div>
            <Button
              className="w-full mb-6"
              white={!!item?.price}
              href={item?.price ? "/pricing" : "mailto:srshohanur734@gmail.com"}
            >
              {item?.price ? "Get Started" : "Contact Us"}
            </Button>

            <ul>
              {item?.features.map((feature, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-start py-5 border-t border-n-6"
                  >
                    <img className="w-6 h-6" src={check} alt="check" />
                    <p className="ml-3 body-2">{feature}</p>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          //   see more
        );
      })}
    </div>
  );
};

export default PricingList;
