import { resume } from "@/content/resume";
import { Title } from "../ui/title";
import Link from "next/link";
import { Download, LucideExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <article className="w-full">
      <Title as="h1" primaryColor="cyan" secondaryColor="pink"
        text="Work Experience" />
      <p className="text-slate-500 mb-4">My last three work experiences. You can see my (almost) career timeline on my <Link target="_blank" className="dark:decoration-yellow-400 underline hover:overline" href='https://linkedin.com/in/diegogriep' title='Diego Griep linkedin'><LucideExternalLink className="inline-block" size={16} /> LinkedIn</Link> or <Link className="dark:decoration-yellow-400 underline hover:overline" href='https://linkedin.com/in/diegogriep' title='Diego Griep linkedin'><Download className="inline-block" size={16} /> curriculum</Link>.</p>

      {resume.workExperience.map((experience, index) => (
        <article key={index}>
          <h2 className="text-lg text-fuchsia-500">{experience.company} <span>({experience.period})</span></h2>
          <p className="text-sm mb-4">
            {experience.location} (<span>{experience.locationType}</span>)
          </p>
          <p className="mb-4 font-light">{experience.description}</p>

          <h3 className="text-fuchsia-300 mb-2">Project{experience.projects.length > 1 && 's'}:</h3>
          {experience.projects.map((project, projectIndex) => (
            <div key={projectIndex} className="mb-2">
              <h4>{project.name}</h4>
              <p className="font-light">{project.description}</p>
            </div>
          ))}

          <h3 className="text-fuchsia-300 mb-2 mt-4">Skills/tools practiced in this company:</h3>
          <p className="mb-8">
            {experience.skills.map((skill) => (
              <span className="text-sm inline-block mr-2 mb-2 bg-fuchsia-500 text-white p-1 rounded font-mono" key={skill}>{skill}</span>
            ))}
          </p>
        </article>
      ))}

      <Title as="h2" primaryColor="cyan" secondaryColor="pink"
        text="Education" />
      {resume.education.map((education, index) => (
        <article key={index}>
          <h2>{education.school} <span>({education.location})</span></h2>
          <p className="mb-8">
            {education.degree} (<span>{education.period}</span>)
          </p>
        </article>
      ))}

      <Title as="h2" primaryColor="cyan" secondaryColor="pink"
        text="Certificates" />
      {resume.certificates.map((certificate, index) => (
        <article key={index}>
          <h2>{certificate.name} <span>({certificate.issueDate})</span></h2>
          <p className="mb-4">
            {certificate.organization}
          </p>
        </article>
      ))}
    </article>
  )
}