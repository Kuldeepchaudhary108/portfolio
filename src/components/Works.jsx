import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ScrollStack, { ScrollStackItem } from "./ui/projectStack"; // ✅ Adjust path as needed

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <div className="bg-tertiary p-2 rounded-2xl w-full shadow-lg">
    <div className="relative w-full h-[300px] overflow-hidden rounded-2xl">
      <img src={image} alt={name} className="w-full h-full object-cover" />

      <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition"
        >
          <img
            src={github}
            alt="source code"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
    </div>

    <div className="mt-5">
      <h3 className="text-white font-bold text-[24px]">{name}</h3>
      <p className="mt-2 text-secondary text-[14px]">{description}</p>
    </div>

    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
          #{tag.name}
        </p>
      ))}
    </div>
  </div>
);

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>My work</p>
      <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Here are some of the projects I've worked on, showcasing my skills in
      full-stack development, creative UI/UX, and scalable solutions. Click on
      any project to view its source code or live version.
    </motion.p>

    <div className=" w-full -mt-20 h-[90vh]">
      <ScrollStack
        itemDistance={300}
        itemStackDistance={40}
        itemScale={0.04}
        baseScale={1}
        stackPosition="8%"
        scaleEndPosition="10%"
        blurAmount={1}
        rotationAmount={0}
        onStackComplete={() => console.log("All projects stacked.")}
      >
        {projects.map((project, index) => (
          <ScrollStackItem key={`project-${index}`}>
            <ProjectCard index={index} {...project} />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  </>
);

export default SectionWrapper(Works, "");
