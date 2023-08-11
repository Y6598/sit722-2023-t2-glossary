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
   
];

router.get('/', (req, res) => {
    res.render('glossary', { glossaryTerms });
});

module.exports = router;
