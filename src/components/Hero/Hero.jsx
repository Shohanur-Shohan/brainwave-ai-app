// import Section from "../Section";
import HeroButton from "./HeroButton";
import { curve, robot, heroBackground } from "../../assets";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero.jsx";
import { heroIcons } from "../../constants/index.js";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../constants/variants.js";
import Generating from "./Generating.jsx";
import Notification from "./Notification.jsx";
import Brands from "./Brands.jsx";

const Hero = () => {
  const parallexRef = useRef(null);
  return (
    <div
      id="hero"
      className="pt-[10rem] md:pt-[12rem] -mt-[5rem] mb-[60px] sm:mb-[100px]"
    >
      <div ref={parallexRef} className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6.5rem]">
          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            className="mb-6 h1"
            viewport={{ once: false, amount: 0.7 }}
          >
            Explore our Posibilites of AI Chatting with{" "}
            <span className="relative inline-block">
              Brainwave
              <img
                src={curve}
                className="absolute left-0 w-full top-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8"
          >
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <HeroButton white href="#pricing">
              Get Started
            </HeroButton>
          </motion.div>
        </div>

        {/* bannerimage */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient"
          >
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => {
                      return (
                        <li key={index} className="px-5 py-5">
                          <img src={icon} width={24} height={25} alt={icon} />
                        </li>
                      );
                    })}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code Generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </motion.div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>
        {/* bannerimage */}
        {/* brands */}
        <Brands className="relative z-10 mt-20 " />
        {/* brands */}
      </div>
    </div>
  );
};

export default Hero;
