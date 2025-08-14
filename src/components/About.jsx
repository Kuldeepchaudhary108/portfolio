import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Individual Service Card
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] p-[1px] rounded-2xl shadow-lg"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white dark:bg-tertiary rounded-2xl py-10 px-6 min-h-[280px] flex flex-col justify-center items-center"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
        <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// Main About Section
const About = () => {
  return (
    <div className="w-full min-w-full mx-auto px-4 py-20">
      {/* Header Text */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/* Description Text */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-gray-600 dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, Three.js,
        and Phaser.js. I'm a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/* Services */}
      <div className="mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
