import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://assets.materialup.com/uploads/b78ca002-cd6c-4f84-befb-c09dd9261025/preview.png"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Jodest Pvt. Ltd.</h4>
        <p className="font-bold text-2xl mt-1">Jodest</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg ">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
export default ExperienceCard;
