import { Title } from "../ui/title";
import { projects } from "@/content/projects";
import { Project } from "../ui/project";

export type ProjectProps = typeof projects

export default function Projects() {
  return (
    <article className="w-full">
      <Title as="h1" primaryColor="black" secondaryColor="black"
        text="Some projects" invert />

      <p className="text-black dark:invert mb-4">A bit of my history: my first paid project was for a car dealership. I worked on many projects in my career, from the small to the biggest ones. Below, you can see the project list with the most recent projects that I can share.</p>

      <div className="md:grid md:gap-16 md:grid-cols-2">
      {
        projects.map((project, index) => <Project {...project} key={index} />)
      }
      </div>


    </article>
  )
}