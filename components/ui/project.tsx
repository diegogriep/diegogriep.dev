import Image from "next/image";

type ProjectProps = {
  description: string
  image: string
  project: string
  techStack: string[]
  url: string
}

export function Project({ project, description, image, techStack, url }: ProjectProps) {
  return (
    <article>
      <a target="_blank" className="underline decoration-4" href={url} title={`Go to the ${project} website`}>
        <Image src={`/images/projects/${image}`} width={400} height={280} alt={`Screenshot from ${project} project`} className="w-full" />
      </a>
      <h2 className="text-lg text-black font-bold py-2 dark:invert">
        <a target="_blank" className="underline decoration-4" href={url} title={`Go to the ${project} website`}>{project}</a>
      </h2>
      <pre className="mb-4 inherit whitespace-pre-line font-light">{description}</pre>
      <h3 className="text-black mb-2 mt-4 dark:invert">Tech stack:</h3>
      <p className="mb-8">
        {techStack.map(stack => (
          <span key={stack} className="text-sm inline-block mr-2 mb-2 bg-black text-white p-1 rounded font-mono dark:invert" >{stack}</span>
        ))}
      </p>
    </article>
  )
}