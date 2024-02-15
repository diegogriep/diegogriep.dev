"use client"

import { motion } from "framer-motion"
import { skills } from "@/content/skills";
import { Title } from "../ui/title";

type SkillsProps = typeof skills[number]

export function Skills() {
  skills.sort((a, b) => b.knowledge - a.knowledge)

  const LIST_CONTAINER_VARIANTS = {
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.25
      }
    }
  };

  const LIST_ITEM_VARIANTS = {
    hidden: {
      x: -10,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <section className="mt-12 w-full">
      <Title primaryColor="orange" secondaryColor="red" text="Skills learnt on the way" />
      <div className="font-light">
        <p className="mb-4">Since my first step on the programming path until today, these are the topics that I worked on by far.</p>
        <motion.ul initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} variants={LIST_CONTAINER_VARIANTS}
          className="flex justify-center flex-wrap sm:w-3/4 mx-auto">
          {skills.map(({ skill }: SkillsProps) => (
            <motion.li variants={LIST_ITEM_VARIANTS}
              key={skill} className="mr-4 mb-4">
              <code>{skill}</code>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}