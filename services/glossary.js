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
    },
    {
      id: 21,
      term: "Black Box Testing",
      desc: `A type of functional testing that involves testing the internal structure, design, and coding of software. It is distinguished from white box testing in that the internal design of the software is not known to the tester, and is therefore a “black box”.`,
      ref: `Smith, J. A., & Brown, L. M. (2019). Modern Approaches to Software Testing: Emphasizing Black Box Testing Strategies. TechWorld Publications. `,
    },
    {
      id: 22,
      term: "Branching",
      desc: `Branching occurs when an object under review in source control is duplicated so that other developers can work on it concurrently.`,
      ref: `“Git - Branches in a Nutshell,” Git-scm.com, 2019. https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell`,
    },
    {
      id: 23,
      term: "Build Artifact Repository",
      desc: `Artifact repositories serve as centralized storage systems for artifacts, which include binary files along with their associated metadata. By consolidating these in one location, they minimize the time taken to fetch dependencies from public sources and ensure consistency, enabling development teams to effortlessly locate the correct version of a given artifact.`,
      ref: `“What is an artifact repository?,” JFrog. https://jfrog.com/knowledge-base/what-is-an-artifact-repository/`,
    },
    {
      id: 24,
      term: "Containers",
      desc: `Containerization, the next step in the progression of virtualization, views each application as a separate virtualized server based on the operating system. Containers are consistent and unchangeable; regardless of where they're initiated, the hardware used, or the foundational operating system, they will operate identically.`,
      ref: `Docker, “What is a Container?,” Docker. https://www.docker.com/resources/what-container/`,
    },
    {
      id: 25,
      term: "Docker",
      desc: `Docker is an open-source platform designed to simplify the process of developing, shipping, and running applications inside containers. These containers bundle an application with its required resources, ensuring consistency across various environments. As a result, developers can effortlessly build, test, and deploy applications without worrying about system discrepancies.`,
      ref: `“What is Docker? | IBM,” www.ibm.com. https://www.ibm.com/topics/docker`,
    },
    {
      id: 26,
      term: "Docker Image",
      desc: `A lightweight, standalone, executable package that contains everything needed to run a piece of software, including the application code, libraries, dependencies, and runtime.`,
      ref: `“What is Docker? | IBM,” www.ibm.com. https://www.ibm.com/topics/docker`,
    },
    {
      id: 27,
      term: "Dockerfile",
      desc: `A script that contains a series of instructions to create a Docker image.`,
      ref: `“What is Docker? | IBM,” www.ibm.com. https://www.ibm.com/topics/docker`,
    },
    {
      id: 28,
      term: "Kubernetes",
      desc: `An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.`,
      ref: `“What is Kubernetes?,” www.redhat.com, Mar. 27, 2020. https://www.redhat.com/en/topics/containers/what-is-kubernetes`,
    },
    {
      id: 29,
      term: "Pod",
      desc: `The smallest deployable unit in Kubernetes that can hold one or more containers.`,
      ref: `“What is Kubernetes?,” www.redhat.com, Mar. 27, 2020. https://www.redhat.com/en/topics/containers/what-is-kubernetes`,
    },
    {
      id: 30,
      term: "kubectl",
      desc: `The command line configuration tool for Kubernetes.`,
      ref: `“What is Kubernetes?,” www.redhat.com, Mar. 27, 2020. https://www.redhat.com/en/topics/containers/what-is-kubernetes`,
    },
    {
      "id": 31,
      "term": "Infrastructure as Code (IaC)",
      "desc": "A method to provision and manage IT infrastructure using machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.",
      "ref": "“Introduction to Infrastructure as Code (IAC),” www.microsoft.com, May 1, 2020. https://learn.microsoft.com/en-us/azure/developer/terraform/overview"
    },
    {
      "id": 32,
      "term": "Terraform Provider",
      "desc": "Plugins for Terraform that allow for the full lifecycle management of resources in a service or platform.",
      "ref": "“Providers,” www.terraform.io, Apr. 15, 2021. https://www.terraform.io/docs/providers/index.html"
    },
    {
      "id": 33,
      "term": "Terraform State",
      "desc": "A persistent mapping of resource metadata to a configuration, which Terraform uses to map real-world resources to your configuration and to keep track of metadata.",
      "ref": "“State,” www.terraform.io, Jan. 10, 2021. https://www.terraform.io/docs/state/index.html"
    },
    {
      "id": 34,
      "term": "Resource Group",
      "desc": "A container in Azure that holds related resources for a solution.",
      "ref": "“Resource groups,” docs.microsoft.com, Feb. 12, 2021. https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal"
  },
  {
      "id": 35,
      "term": "Azure Kubernetes Service (AKS)",
      "desc": "A managed Kubernetes service in Azure that lets you deploy and manage containerized applications.",
      "ref": "“About Azure Kubernetes Service (AKS),” docs.microsoft.com, Feb. 18, 2021. https://docs.microsoft.com/en-us/azure/aks/intro-kubernetes"
  },
  {
      "id": 36,
      "term": "Azure Resource Manager (ARM)",
      "desc": "The deployment and management service for Azure, which can manage resources in a subscription.",
      "ref": "“Azure Resource Manager overview,” docs.microsoft.com, Jan. 28, 2021. https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview"
  },
  {
      "id": 37,
      "term": "Terraform Plan",
      "desc": "A Terraform command that allows users to see which actions Terraform will undertake to realize the desired configuration.",
      "ref": "“Command: plan,” www.terraform.io, Mar. 5, 2021. https://www.terraform.io/docs/cli/commands/plan.html"
  },
  {
      "id": 38,
      "term": "Terraform Module",
      "desc": "Containers for multiple Terraform resources that are used together, allowing for the creation of reusable components.",
      "ref": "“Modules,” www.terraform.io, Apr. 10, 2021. https://www.terraform.io/docs/modules/index.html"
  },
  {
      "id": 39,
      "term": "Azure Blob Storage",
      "desc": "Microsoft's cloud-based object storage solution designed for large amounts of unstructured data.",
      "ref": "“Introduction to Azure Blob storage,” docs.microsoft.com, Jan. 20, 2021. https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction"
  },
  {
      "id": 40,
      "term": "Azure Active Directory (AAD)",
      "desc": "Microsoft's cloud-based identity and access management service.",
      "ref": "“What is Azure Active Directory?,” docs.microsoft.com, Feb. 15, 2021. https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-whatis"
  },
  {
    "id": 41,
    "term": "Grafana",
    "desc": "An open-source platform for monitoring and observability, commonly used with time series databases like Prometheus.",
    "ref": "“What is Grafana?,” www.redhat.com. https://www.redhat.com/en/topics/data-services/what-is-grafana"
},
{
    "id": 42,
    "term": "Prometheus",
    "desc": "An open-source monitoring and alerting toolkit, often integrated with Kubernetes for cluster monitoring.",
    "ref": "“Introduction to Prometheus,” prometheus.io, Feb. 21, 2022. https://prometheus.io/docs/introduction/overview/"
},
{
    "id": 43,
    "term": "Helm",
    "desc": "A package manager for Kubernetes that allows developers and operators to easily package, configure, and deploy applications on Kubernetes clusters.",
    "ref": "“What is Helm?,” helm.sh, May 1, 2022. https://helm.sh/docs/intro/using_helm/"
},
{
    "id": 44,
    "term": "Blue-Green Deployment",
    "desc": "A release management strategy which reduces downtime by having two identical production environments, allowing for seamless switching between them.",
    "ref": "T. Fernandez, “Continuous Blue-Green Deployments With Kubernetes,” Semaphore, Sep. 08, 2020. https://semaphoreci.com/blog/continuous-blue-green-deployments-with-kubernetes (accessed Sep. 16, 2023)."
},
{
    "id": 45,
    "term": "Canary Release",
    "desc": "A technique to reduce the risk of introducing a new software version in production by gradually rolling out the change to a small subset of users before rolling it out to the entire infrastructure.",
    "ref": "D. Sato, “bliki: CanaryRelease,” martinfowler.com, 2014. https://martinfowler.com/bliki/CanaryRelease.html"
},
{
    "id": 46,
    "term": "Load Balancer",
    "desc": "A device or service that distributes incoming network traffic across multiple servers to ensure no single server is overwhelmed with too much demand and to increase redundancy and reliability.",
    "ref": "“What is a Load Balancer?,” digitalocean.com, Apr. 10, 2020. https://www.digitalocean.com/community/tutorials/what-is-load-balancing"
},
{
    "id": 47,
    "term": "OpsGenie",
    "desc": "An incident management platform that ensures critical incidents are never missed, and actions are taken by the right people in the shortest possible time.",
    "ref": "“What is OpsGenie?,” www.atlassian.com, Jan. 20, 2022. https://www.atlassian.com/software/opsgenie"
},
{
    "id": 48,
    "term": "SLO (Service Level Objective)",
    "desc": "A target level of service that is agreed upon and aimed to be achieved over a certain period.",
    "ref": "[1]“Google - Site Reliability Engineering,” sre.google. https://sre.google/sre-book/service-level-objectives/"
},
{
    "id": 49,
    "term": "AIOps (Artificial Intelligence for IT Operations)",
    "desc": "A method of using artificial intelligence (AI) for automating and enhancing IT operations.",
    "ref": "[1]“What is AIOps? Artifical Intelligence for IT Operations,” ScienceLogic. https://sciencelogic.com/product/resources/what-is-aiops (accessed Sep. 16, 2023)."
},
{
    "id": 50,
    "term": "ConfigMap",
    "desc": "A Kubernetes object used to store and manage non-confidential data in key-value pairs, separate from containerized applications.",
    "ref": "“ConfigMap,” kubernetes.io, Apr. 12, 2022. https://kubernetes.io/docs/concepts/configuration/configmap/"
}



  ];
};
