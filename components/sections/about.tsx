'use client'

import { Title } from "../ui/title";

export function About() {

  return (
    <section className="mt-12 w-full">
      <Title primaryColor="purple" secondaryColor="red" text="About my journey" />
      <div className="font-light">
        <p className="mb-4">I have been working with HTML, CSS, and JavaScript since 1999 when layouts were made with <code>table</code>. <br />
          Many things have changed since then. In 2011, I started to work with responsive sites, supporting all devices.</p>

        <p className="mb-4">My knowledge of SPA development started in 2015 with Angular and React (my choice to build applications nowadays) and tools like Typescript, Redux, Jest, and React testing library, Storybook. <br />
          By now, I have done at least four projects using Next.JS.</p>

        <p className="mb-4">I have experience consuming resource-oriented APIs (REST, GraphQL). <br />Using observability and monitoring after implementing New Relic and Logz.io agents.</p>

        <p className="mb-4">At this time, I did jobs for big and great companies like Reebok, Richemont Group, Motorola, Samsung Security, CASE, New Holland, IVECO, Petrobras, VALE, Cielo, Crefisa, BTG Pactual.</p>
      </div>
    </section>
  )
}