module.exports.getGlossary = () => {
  return [
    {
      id: 1,
      term: "BDUF",
      desc: `Big design up front (BDUF) is a software development approach in which the program's design is to be completed and perfected before that program's implementation is started. It is often associated with the waterfall model of software development.`,
      ref: `Wikipedia Contributors, “Waterfall model,” Wikipedia, Mar. 10, 2019. https://en.wikipedia.org/wiki/Waterfall_model`,
    },
    {
      id: 2,
      term: "Scrum",
      desc: `Scrum is a flexible project management structure rooted in Agile methodologies that highlights the importance of collaboration, accountability, and incremental advances toward a clear objective. Operating on the fundamental tenets of transparency, examination, and adaptability, Scrum offers an approach to project management that is both adaptable and emphasizes teamwork.`,
      ref: `Pekka Abrahamsson et al., Agile Processes in Software Engineering and Extreme Programming. Dordrecht: Springer, 2008.`,
    },
    {
      id: 3,
      term: "Sprint",
      desc: `A sprint in Agile methodologies is a set timeframe during which specific tasks are completed. Each sprint produces measurable results, contributing towards the overall project goals while allowing for continuous feedback and improvement.`,
      ref: `"Transitioning from Waterfall to Agile Methods [Mightybytes],” Mightybytes, Feb. 27, 2018. https://www.mightybytes.com/blog/transition-waterfall-to-agile/`,
    },
    {
      id: 4,
      term: "Team Capacity",
      desc: `This refers to the cumulative amount of billable work your team can accomplish in a week. It's crucial to account for non-billable tasks that inevitably arise, ensuring a level of flexibility in the schedule. For designers and developers, especially in an agency context, a utilization rate of 70-80% for billable tasks is typically observed.`,
      ref: `"Transitioning from Waterfall to Agile Methods [Mightybytes],” Mightybytes, Feb. 27, 2018. https://www.mightybytes.com/blog/transition-waterfall-to-agile/`,
    },
    {
      id: 5,
      term: "Cloud data migration",
      desc: `Cloud data migration is the procedure of moving information, localhost applications, services, and data to the distributed cloud computing infrastructure. The success of this data migration process is depending on several aspects like planning and impact analysis of existing enterprise systems.`,
      ref: `Iqbal, A., & Colomo-Palacios, R. (2019). Key Opportunities and Challenges of Data Migration in Cloud: Results from a Multivocal Literature Review. Procedia Computer Science, 164, 48–55. https://doi.org/10.1016/j.procs.2019.12.153`,
    },
    {
      id: 6,
      term: "Technical Debt",
      desc: `In the context of a technical team opting for a less-than-perfect resolution, it represents a strategic compromise of incurring immediate expenses for an ideal solution versus deferring those costs to the future. This situation essentially gives rise to what is termed as "technical debt". `,
      ref: `“Technical debt: how to measure and manage it with DevOps,” CircleCI, Feb. 28, 2022. https://circleci.com/blog/manage-and-measure-technical-debt/`,
    },
    {
      id: 7,
      term: "Hot Fix",
      desc: `A hotfix, also known as a Quick-Fix Engineering update (QFE update), is a comprehensive packet often containing several files, utilized to rectify an issue in a software product. `,
      ref: `“Hotfix,” Wikipedia, Jun. 22, 2023. https://en.wikipedia.org/wiki/Hotfix (accessed Jul. 21, 2023). `,
    },
    {
      id: 8,
      term: "CI/CD",
      desc: `CI/CD is a strategy that incorporates automation in the app development process, aiming to consistently provide updates to users. It fundamentally involves three key principles: continuous integration, continuous delivery, and continuous deployment. `,
      ref: `Redhat, “What is CI/CD?,” Redhat.com, 2019. https://www.redhat.com/en/topics/devops/what-is-ci-cd`,
    },
    {
      id: 9,
      term: "Team Capacity",
      desc: `This refers to the cumulative amount of billable work your team can accomplish in a week. It's crucial to account for non-billable tasks that inevitably arise, ensuring a level of flexibility in the schedule. For designers and developers, especially in an agency context, a utilization rate of 70-80% for billable tasks is typically observed.`,
      ref: `“Capacity vs Velocity,” Scrum.org. https://www.scrum.org/forum/scrum-forum/7293/capacity-vs-velocity (accessed Jul. 21, 2023).`,
    },
    {
      id: 10,
      term: "Velocity",
      desc: `In Agile project management, velocity refers to the amount of work a team can complete during a single sprint. It's typically measured in story points or work units and is used for planning and forecasting future sprints based on past performance.`,
      ref: `“Capacity vs Velocity,” Scrum.org. https://www.scrum.org/forum/scrum-forum/7293/capacity-vs-velocity (accessed Jul. 21, 2023).`,
    },
    {
      id: 11,
      term: "Kanban",
      desc: `Kanban is a project management tool that enables you to get a visual overview of your tasks at hand. It follows the Agile methodology and allows for incremental and continuous improvements. The method originated in Japan and focuses on limiting work-in-progress items, and leveraging visual project management.`,
      ref: `Ahmad, Muhammad O., Markku Oivo, Jouni Markkula, and Kari Liukkunen. "Kanban in software development: A systematic literature review." In 2013 39th Euromicro Conference on Software Engineering and Advanced Applications, pp. 9-16. IEEE, 2013.`,
    },
    {
      id: 12,
      term: "User Story",
      desc: `In software development and product management, a user story is an informal, natural language description of one or more features of a software system. User stories are often written from the perspective of an end user or user of a system.`,
      ref: `"User Stories," Mountain Goat Software. https://www.mountaingoatsoftware.com/agile/user-stories (accessed Jul. 21, 2023).`,
    },
    {
      id: 13,
      term: "API",
      desc: `An application programming interface (API) is a set of rules that allow different software applications to communicate with each other. It defines methods of communication between various software components.`,
      ref: `T. Mikkonen, A. Taivalsaari, "Web APIs: From Desktops to Ubiquitous Computing," IEEE Computer, vol. 52, no. 2, pp. 86-89, 2019.`,
    },
    {
      id: 14,
      term: "DevOps",
      desc: `DevOps is a set of practices that works to automate and integrate the processes between software development and IT teams, so they can build, test, and release software faster and more reliably. The term DevOps is a combination of two terms: development (Dev) and operations (Ops).`,
      ref: `Kim, Gene. The Phoenix project: A novel about IT, DevOps, and helping your business win. IT Revolution, 2018.`,
    },
    {
      id: 15,
      term: "Microservices",
      desc: `Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are highly maintainable and testable, loosely coupled, independently deployable, and organized around business capabilities.`,
      ref: `Newman, Sam. Building microservices: designing fine-grained systems. " O'Reilly Media, Inc.", 2015.`,
    },
    {
      id: 16,
      term: "Docker",
      desc: `Docker is an open-source platform that automates the deployment, scaling, and management of applications. It does this by encapsulating applications into containers, allowing them to be portable among any system running the Docker engine.`,
      ref: `"What is Docker?," Docker Documentation. https://docs.docker.com/get-started/overview/ (accessed Jul. 21, 2023).`,
    },
    {
      id: 17,
      term: "GitHub",
      desc: `GitHub is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as its own features.`,
      ref: `Loeliger, Jon, and Matthew McCullough. Version Control with Git: Powerful tools and techniques for collaborative software development. " O'Reilly Media, Inc.", 2012.`,
    },
    {
      id: 18,
      term: "REST",
      desc: `Representational State Transfer (REST) is an architectural style that defines a set of constraints to be used for creating web services. Web Services that conform to the REST architectural style, or RESTful web services, provide interoperability between computer systems on the Internet.`,
      ref: `Fielding, Roy Thomas. "Architectural styles and the design of network-based software architectures." (2000).`,
    },
    {
      id: 19,
      term: "MVP",
      desc: `A Minimum Viable Product (MVP) is a concept from Lean Startup that stresses the impact of learning in new product development. Eric Ries, defined an MVP as that version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort.`,
      ref: `Ries, Eric. "The lean startup: How today's entrepreneurs use continuous innovation to create radically successful businesses." (2011).`,
    },
    {
      id: 20,
      term: "Pair Programming",
      desc: `Pair programming is an agile software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in.`,
      ref: `"Pair Programming," Agile Alliance. https://www.agilealliance.org/glossary/pairing (accessed Jul. 21, 2023).`,
    }
    
  ];
};
