export const resume = {
  certificates: [{
    issueDate: 'Jan 2024',
    name: 'New Relic One: Observability From Beginner to Advanced',
    organization: 'UDEMY',
  }, {
    issueDate: 'May 2021 - May 2024',
    name: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services (AWS)',
  }],
  education: [{
    degree: 'Graduated Web Development',
    location: 'São Paulo - Brazil',
    period: '2003 - 2006',
    school: 'Universidade Anhembi Morumbi',
  }],
  workExperience: [{
    company: 'FARFETCH',
    description: 'As a senior software engineer on the FPS team, I am involved in the rewriting process of their digital solutions using technologies such as Next.JS, Remix, and Typescript. Furthermore, I closely work with the head of engineering to further develop strategic technical solutions for FPS products.',
    location: 'Porto - Portugal',
    locationType: 'Hybrid',
    period: '06/2022 - 02/2024',
    projects: [{
      name: 'E-commerce Project for an American fitness footwear and clothing brand.',
      description: 'We developed the foundations of the application like handlers for Session, Internalization (A plugin was created to communicate between Remix and the Language API), and Cache. To monitor the application we used New Relic and Logz.io, this implementation was made by my team. I was part of the team responsible for the project going to production.'
    }, {
      name: 'Multi-tenant project for a big luxury fashion group.',
      description: 'This project was a mono repository-based one that consisted of supporting several tenants for the entire group. We used the company Design System to work together on a boilerplate. We built a Theme Provider to handle the different tenant themes.'
    }],
    skills: ['React', 'Emotion', 'Typescript', 'Design System', 'Remix', 'Unit testing', 'Jest', 'React Testing Library', 'Redis', 'Octopus', 'Docker', 'Webpack', 'Storybook', 'Observability', 'Monitoring'],
  }, {
    company: 'Mindpool',
    description: '',
    location: 'Denmark',
    locationType: 'Remote (from Brazil)',
    period: '10/2021 - 05/2022',
    projects: [{
      name: 'Mindpool Website',
      description: 'Working together with the stakeholders (and designer), I developed the new website company from scratch: mindpool.com. I configured and set up Strapi to provide an API for the content management system. The progress was demonstrated every ten days (sprint). My first approach was to get time to do a static website and create the dynamic version, getting information from CMS (Strapi).'
    }],
    skills: ['NextJS', 'styled-components', 'Strapi', 'CMS', 'PlopJS', 'Jest', 'React Testing Library', 'Storybook'],
  }, {
    company: 'Accenture / Concrete',
    description: 'Besides my responsibility for code development, I had the experience of being a Career Counselor (mentor) to eight people.',
    location: 'Belo Horizonte - Brazil',
    locationType: 'On site',
    period: '02/2017 - 10/2021',
    projects: [{
      name: 'Brazilian global personal care cosmetics group\'s project',
      description: 'We did the setup for new countries to support consultants in this new places. In this project I worked helping in the backend as well. Interesting working with Express, Knex, and Postgresql. On the frontend, we reduced the time on Checkout page, after refactoring all components related to it, minimising the calls to unnecessary dispatch using Redux.'
    }, {
      name: 'Brazilian bank\'s project',
      description: 'CRM and Back office\'s management. Working with the Backend team to define the API payload, using GraphQL to manage the requisitions.'
    }, {
      name: 'Brazilian retail company\'s project',
      description: 'Responsible and developing for financial squad frontend.'
    }, {
      name: 'PWA project',
      description: 'This was a PWA project built in React to save card meal information given to the lead community. We used features like the API Geolocation to get and save the location of the user, and photos upload, besides the Session User management.'
    }, {
      name: 'Brazilian financial institution\'s project',
      description: 'A project made in AngularJS with reports, API consuming, and unit testing.'
    }],
    skills: ['React', 'Redux', 'GraphQL', 'Apollo', 'Jest', 'PWA', 'Postgresql', 'Typescript', 'React Testing Library', 'Knex', 'Remix', 'Monitoring'],
  }]
}