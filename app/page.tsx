import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Title } from "@/components/ui/title";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="font-sans text-2xl lg:text-4xl dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
        Welcome! <br />My name is Diego Griep. I'm a <strong>Senior Frontend Engineer</strong> with 15+ years of experience on the front side of the force.
      </h2>
      <About />
      <Skills />
      <p className="text-orange-600 dark:text-orange-200 mt-4 mb-8">You can see my experience history, projects, and technologies used on my <Link href={'/resume'} legacyBehavior passHref>
        <a title="My resume" className="dark:decoration-yellow-400 underline hover:overline">resume</a>
      </Link> page.</p>
    </>
  );
}
