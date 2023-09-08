// routes/glossary.js
const express = require('express');
const router = express.Router();

const glossaryTerms = [
    {
        term: 'DevOps',
        description: 'DevOps is a set of practices, principles, and cultural philosophies that aim to improve collaboration and communication between software development and IT operations teams. It focuses on automating processes, accelerating software delivery, and ensuring continuous feedback to deliver high-quality software.',
        reference: 'https://www.atlassian.com/devops'
    },
    {
        term: 'Continuous Integration (CI)',
        description: 'Continuous Integration is a DevOps practice where code changes are frequently integrated into a shared repository. Automated build and test processes are triggered upon each integration to identify and address integration issues early in the development lifecycle.',
        reference: 'https://en.wikipedia.org/wiki/Continuous_integration'
    },
    {
        term: 'Continuous Delivery (CD)',
        description: 'Continuous Delivery is the process of automating the deployment of software to various environments, ensuring that the software can be released to production at any time with minimal manual intervention.',
        reference: 'https://en.wikipedia.org/wiki/Continuous_delivery'
    },
    {
        term: 'Version Control',
        description: 'Version Control (also known as source control) is the management of changes to documents, files, or code by tracking modifications, allowing collaboration, and maintaining a history of changes.',
        reference: 'https://en.wikipedia.org/wiki/Version_control'
    },
    {
        term: 'Infrastructure as Code (IaC)',
        description: 'Infrastructure as Code is the practice of managing and provisioning infrastructure (networks, virtual machines, etc.) using code and automation, enabling consistent and repeatable infrastructure deployment.',
        reference: 'https://en.wikipedia.org/wiki/Infrastructure_as_code'
    },
    {
        term: 'Docker',
        description: 'Docker is a platform for developing, shipping, and running applications inside containers, which provide a lightweight, isolated, and consistent environment for software.',
        reference: 'https://www.docker.com/resources/what-container'
    },
    {
        term: 'Kubernetes',
        description: 'Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.',
        reference: 'https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/'
    },
    {
        term: 'Microservices',
        description: 'Microservices is an architectural style where an application is built as a collection of small, loosely coupled services, each responsible for a specific business capability, enabling flexibility and scalability.',
        reference: 'https://en.wikipedia.org/wiki/Microservices'
    },
    {
        term: 'Agile',
        description: 'Agile is a software development methodology that emphasizes collaboration, adaptability, and iterative development, enabling teams to respond quickly to changing requirements and deliver high-quality software.',
        reference: 'https://en.wikipedia.org/wiki/Agile_software_development'
    },
    {
        term: 'Configuration Management',
        description: 'Configuration Management is the practice of automating and managing the configuration of software and infrastructure, ensuring consistency and reducing manual configuration errors.',
        reference: 'https://en.wikipedia.org/wiki/Configuration_management'
    },
    {
        term: 'Scrum',
        description: 'Scrum is an Agile framework for managing complex knowledge work, with an initial emphasis on software development. It is designed for teams of three to nine developers who break their work into actions that can be completed within timeboxed iterations, called sprints (usually 2-4 weeks).',
        reference: 'https://en.wikipedia.org/wiki/Scrum_(software_development)'
    },
    {
        term: 'Git',
        description: 'Git is a distributed version control system that allows multiple users to collaborate on software development while keeping track of changes in the codebase. It is widely used in modern software development and enables efficient branching, merging, and collaboration.',
        reference: 'https://en.wikipedia.org/wiki/Git'
    },
    {
        term: 'Infrastructure Automation',
        description: 'Infrastructure Automation is the practice of automating the setup, configuration, and management of infrastructure resources using code and tools. It ensures consistent and repeatable infrastructure provisioning, reduces manual errors, and accelerates the deployment process.',
        reference: 'https://www.ibm.com/cloud/learn/infrastructure-automation'
    },
    {
        term: 'Cloud Computing',
        description: 'Cloud Computing refers to the delivery of computing services (such as servers, storage, databases, networking, software, analytics, and more) over the internet (the cloud). Cloud platforms provide on-demand access to resources, scalability, and flexibility, enabling organizations to innovate and reduce infrastructure costs.',
        reference: 'https://azure.microsoft.com/en-us/overview/what-is-cloud-computing/'
    },
    {
        term: 'Orchestration',
        description: 'Orchestration in the context of DevOps refers to the automated coordination and management of various tasks, workflows, and processes involved in software deployment, provisioning, and management. It ensures that different components work together seamlessly to achieve the desired outcome.',
        reference: 'https://en.wikipedia.org/wiki/Orchestration_(computing)'
    },
    {
        term: 'Pipeline as Code',
        description: 'Pipeline as Code is the practice of defining software deployment pipelines using code, typically in a declarative manner. It allows teams to version control their pipeline configurations, automate the creation of deployment pipelines, and ensure consistency and repeatability in the software delivery process.',
        reference: 'https://jenkins.io/solutions/pipeline/'
    },
    {
        term: 'Artifact',
        description: 'An artifact in the context of software development and deployment is a deployable unit that represents a specific version of a software component. It can be a compiled binary, a packaged library, a Docker image, or any other form of output generated during the build process.',
        reference: 'https://en.wikipedia.org/wiki/Artifact_(software_development)'
    },
    {
        term: 'Automation',
        description: 'Automation involves the use of scripts, tools, and processes to replace manual tasks and workflows. It aims to reduce human error, improve efficiency, and ensure consistent and repeatable processes.',
        reference: 'https://www.atlassian.com/devops/devops-tools/test-automation'
    },
    {
        term: 'Containerization',
        description: 'Containerization is a technology that allows applications and their dependencies to be packaged together in a lightweight, isolated environment known as a container. Containers provide consistency across different environments, making deployment and scaling more efficient.',
        reference: 'https://geekflare.com/containerization-in-devops/'
    },
    {
        term: 'Microservices',
        description: 'Microservices is an architectural approach where an application is composed of small, independently deployable and manageable services. Each service focuses on a specific business capability and communicates over well-defined APIs.',
        reference: 'https://www.spiceworks.com/tech/devops/articles/what-are-microservices/'
    },

   {
    term: 'Serverless Computing',
    description: 'Serverless computing is a cloud computing model where applications are developed and deployed without managing the underlying server infrastructure. It allows developers to focus on writing code without worrying about server provisioning, scaling, or maintenance.',
    reference: 'https://aws.amazon.com/serverless/'
},
{
    term: 'CI/CD Pipeline',
    description: 'A CI/CD (Continuous Integration/Continuous Deployment) pipeline is a set of automated processes that enable the building, testing, and deployment of software changes. It ensures that code changes are consistently tested and deployed to production environments.',
    reference: 'https://www.atlassian.com/continuous-delivery/ci-cd-pipeline'
},
{
    term: 'Container Orchestration',
    description: 'Container orchestration is the automated management of containerized applications. It involves tasks like scaling containers, load balancing, and ensuring high availability. Kubernetes is a popular container orchestration platform.',
    reference: 'https://kubernetes.io/'
},
{
    term: 'Server Farm',
    description: 'A server farm is a collection of servers that work together to provide computing resources and services. It is often used to distribute workloads, improve reliability, and handle increased traffic.',
    reference: 'https://en.wikipedia.org/wiki/Server_farm'
},
{
    term: 'API Gateway',
    description: 'An API Gateway is a server that acts as an API front-end, receiving API requests, enforcing throttling and security policies, passing requests to the back-end service, and then passing the response back to the requester.',
    reference: 'https://aws.amazon.com/api-gateway/'
},
{
    term: 'Load Balancing',
    description: 'Load balancing is the distribution of network traffic or application requests across multiple servers or resources. It ensures that no single server is overwhelmed and helps improve system performance and availability.',
    reference: 'https://www.nginx.com/resources/glossary/load-balancing/'
},
{
    term: 'RESTful API',
    description: 'A RESTful API (Representational State Transfer) is an architectural style for designing networked applications. It uses HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources, which are represented as URLs.',
    reference: 'https://restfulapi.net/'
},
{
    term: 'Scalability',
    description: 'Scalability is the ability of a system to handle increased workloads or growing demands by adding resources (such as servers) to maintain or improve performance. It is a critical consideration for software and infrastructure design.',
    reference: 'https://en.wikipedia.org/wiki/Scalability'
},
{
    term: 'Latency',
    description: 'Latency refers to the delay or time lag in data transmission between a source and a destination. Low latency is essential for real-time applications, while high latency can lead to delays in data processing.',
    reference: 'https://en.wikipedia.org/wiki/Latency_(engineering)'
},
{
    term: 'Bottleneck',
    description: 'A bottleneck is a point in a system where the flow of data or processes is restricted or slowed down, causing reduced overall system performance. Identifying and mitigating bottlenecks is crucial for system optimization.',
    reference: 'https://en.wikipedia.org/wiki/Bottleneck'
}

];

router.get('/', (req, res) => {
    res.render('glossary', { glossaryTerms });
});

module.exports = router;
