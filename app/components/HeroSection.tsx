"use client";
import { getTransition } from "@/utils/getTransition";
import { motion } from "framer-motion";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-5rem)] wrapper section-padding border border-green-400 grid grid-cols-5">
      <div className="w-full h-ful flex items-end">
        {/* 1st col */}
        <div className="w-full  h-5/6 overflow-hidden ">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.2)}
            className="h-full w-full"
          >
            <Image
              src="https://images.pexels.com/photos/3131981/pexels-photo-3131981.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Free Candy in Disco Ball Stock Photo"
              width={300}
              height={600}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="w-full h-ful"></div>
      <div className="w-full h-full  flex items-center">
        {/* 3rd col */}
        <div className="w-full h-5/6">
          <motion.div
            initial={{ x: "-200%" }}
            whileInView={{ x: 0 }}
            transition={getTransition(0.4)}
            className="h-full w-full"
          >
            <Image
              src="https://images.pexels.com/photos/3052651/pexels-photo-3052651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Free Woman Wears Black Sleeveless Top Stock Photo"
              width={300}
              height={600}
              priority
              className="w-ful h-full  object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="w-full h-full "></div>
      <div className="w-full h-full">
        {/* 5th col */}
        <div className="w-full h-5/6 overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.6)}
            className="h-full w-full"
          >
            <Image
              src="https://images.pexels.com/photos/13338046/pexels-photo-13338046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Free Close-up of Fern Leaves  Stock Photo"
              width={300}
              height={600}
              priority
              className="w-full  h-full  object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
