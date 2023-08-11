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
   
];

router.get('/', (req, res) => {
    res.render('glossary', { glossaryTerms });
});

module.exports = router;
