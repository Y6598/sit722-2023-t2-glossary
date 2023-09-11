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
},

{
    term: 'Terraform',
    description: 'Terraform is an open-source infrastructure as code (IaC) tool used for defining and provisioning infrastructure resources. It allows users to describe infrastructure configurations using a declarative language, and then it automates the provisioning and management of those resources across various cloud providers and platforms.',
    reference: 'https://www.terraform.io/intro/index.html'
},
{
    term: 'IaC State',
    description: 'Infrastructure as Code (IaC) state refers to the recorded information about the current state of provisioned infrastructure resources. It includes details about the resources, their configurations, and their relationships. The IaC state is used by tools like Terraform to plan and manage changes to infrastructure.',
    reference: 'https://www.terraform.io/docs/state/index.html'
},
{
    term: 'Terraform Provider',
    description: 'A Terraform provider is a plugin that enables Terraform to interact with a specific cloud provider or service. Providers define the available resources and their configurations, allowing Terraform to create, update, and manage those resources in the target environment.',
    reference: 'https://www.terraform.io/docs/providers/index.html'
},
{
    term: 'Terraform Module',
    description: 'A Terraform module is a reusable and encapsulated set of Terraform configurations that define a specific set of infrastructure resources. Modules help organize and share infrastructure code, making it easier to maintain and reuse configurations across projects.',
    reference: 'https://www.terraform.io/docs/modules/index.html'
},
{
    term: 'Terraform Plan',
    description: 'A Terraform plan is a command that generates an execution plan based on the current Terraform configuration and the state of the infrastructure. It provides information about the changes Terraform will make to the infrastructure when applied, helping users understand the impact of their configuration changes.',
    reference: 'https://www.terraform.io/docs/commands/plan.html'
},
{
    term: 'Terraform Apply',
    description: 'Terraform apply is a command used to apply changes to the infrastructure as defined in the Terraform configuration. It creates, updates, or deletes resources to match the desired state defined in the configuration files.',
    reference: 'https://www.terraform.io/docs/commands/apply.html'
},
{
    term: 'Terraform Workspace',
    description: 'Terraform workspaces are isolated environments within a Terraform project that allow users to manage separate configurations and state files for different deployments or environments (e.g., development, staging, production). Workspaces enable configuration reuse and isolation.',
    reference: 'https://www.terraform.io/docs/state/workspaces.html'
},
{
    term: 'Terraform Remote State',
    description: 'Terraform remote state is a method of storing the state file (which records the current state of the infrastructure) remotely, often in a shared location such as an object storage bucket. Remote state allows collaboration among team members and helps maintain a single source of truth for infrastructure state.',
    reference: 'https://www.terraform.io/docs/state/remote.html'
},
{
    term: 'Infrastructure Provisioning',
    description: 'Infrastructure provisioning in the context of Terraform refers to the process of creating and configuring infrastructure resources, such as virtual machines, networks, and storage, based on the definitions and configurations specified in Terraform files.',
    reference: 'https://www.terraform.io/intro/index.html'
},
{
    term: 'IaC Best Practices',
    description: 'Infrastructure as Code (IaC) best practices are guidelines and recommendations for creating maintainable and reliable infrastructure configurations using tools like Terraform. These practices include version control, modularization, code review, and automated testing.',
    reference: 'https://www.terraform.io/docs/enterprise/guides/recommended-practices/index.html'
},

{
    term: 'Kubernetes Cluster',
    description: 'A Kubernetes cluster is a set of interconnected physical or virtual machines that run containerized applications managed by Kubernetes. It consists of a control plane (master nodes) and worker nodes, where containers are deployed and orchestrated.',
    reference: 'https://kubernetes.io/docs/concepts/architecture/kubernetes-runtime/'
},
{
    term: 'Pod',
    description: 'A pod is the smallest deployable unit in Kubernetes. It represents a single instance of a running process in a cluster and can contain one or more containers. Pods share the same network namespace, storage, and IP address.',
    reference: 'https://kubernetes.io/docs/concepts/workloads/pods/pod/'
},
{
    term: 'Kubelet',
    description: 'Kubelet is a Kubernetes component that runs on each node in the cluster and ensures that containers are running in a Pod as expected. It communicates with the control plane and manages container lifecycle.',
    reference: 'https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/'
},
{
    term: 'Kubernetes Namespace',
    description: 'A Kubernetes namespace is a virtual cluster within a physical cluster. It allows for resource isolation and provides a way to divide and manage cluster resources among multiple users or teams. Namespaces help organize and secure workloads.',
    reference: 'https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/'
},
{
    term: 'Kubeconfig',
    description: 'Kubeconfig is a configuration file used by kubectl (Kubernetes command-line tool) to specify the cluster, user, and context information required to interact with a Kubernetes cluster. It enables users to switch between clusters and contexts.',
    reference: 'https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/'
},
{
    term: 'Kubernetes API Server',
    description: 'The Kubernetes API server is a component of the Kubernetes control plane that exposes the Kubernetes API. It is responsible for validating and processing API requests, making state changes, and serving data to clients like kubectl.',
    reference: 'https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/'
},
{
    term: 'Kubernetes Deployment',
    description: 'A Kubernetes Deployment is an API resource that manages the deployment of a replicated application. It ensures that a specified number of replica Pods are running and provides scaling and rolling update capabilities.',
    reference: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/'
},
{
    term: 'Kubernetes Service',
    description: 'A Kubernetes Service is an abstraction that defines a logical set of Pods and a policy for accessing them. It enables network connectivity and load balancing to Pods, allowing services to be discovered within the cluster.',
    reference: 'https://kubernetes.io/docs/concepts/services-networking/service/'
},
{
    term: 'Kubernetes Ingress',
    description: 'Kubernetes Ingress is an API resource that manages external access to services within a cluster. It provides HTTP and HTTPS routing, load balancing, and can be used for features like SSL termination and virtual hosting.',
    reference: 'https://kubernetes.io/docs/concepts/services-networking/ingress/'
},
{
    term: 'Helm',
    description: 'Helm is a package manager for Kubernetes that simplifies the deployment and management of applications. It uses charts (packages) to define, install, and upgrade even the most complex Kubernetes applications.',
    reference: 'https://helm.sh/docs/intro/what_is_helm/'
},

];

router.get('/', (req, res) => {
    res.render('glossary', { glossaryTerms });
});

module.exports = router;
