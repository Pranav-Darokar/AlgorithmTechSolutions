export const courses = [
  {
    id: "data-annotation",
    name: "Data Annotation",
    iconName: "Binary",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=450",
    shortDescription: "Learn image, text, audio and video annotation used in Artificial Intelligence and Machine Learning projects.",
    duration: "4 Weeks",
    learningMode: "Hybrid (Online/Offline)",
    skillLevel: "Beginner Friendly",
    certificateIncluded: true,
    placementAssistance: true,
    longDescription: "Data Annotation is the process of labeling data to make it usable for machine learning algorithms. In this course, you will learn hands-on image annotation, text bounding boxes, audio tagging, and video tracking methods using industry-standard labeling suites. Perfect for starting a career in the high-demand AI operations field.",
    syllabus: [
      { module: "Module 1: Introduction to AI & Data Labeling", topics: ["Overview of Machine Learning & Deep Learning workflows", "Types of annotation (Supervised vs Unsupervised)", "Familiarization with Annotation Tooling suites"] },
      { module: "Module 2: Computer Vision Image Annotation", topics: ["Bounding box creation for object detection", "Polygons and keypoint labelling for facial recognition", "Semantic segmentation for autonomous vehicles"] },
      { module: "Module 3: Natural Language & Audio Tagging", topics: ["Entity naming recognition (NER)", "Sentiment analysis categorization", "Audio file translation and soundwave classification"] },
      { module: "Module 4: Video Annotation & Quality Control", topics: ["Object tracking across frames", "Dealing with occlusion and bounding box interpolations", "QA rules, compliance, and export metrics"] }
    ]
  },
  {
    id: "prompt-engineering",
    name: "Prompt Engineering",
    iconName: "Cpu",
    image: "/courses/prompt_engineering.png",
    shortDescription: "Learn how to write effective prompts for ChatGPT, Gemini, Claude and other Generative AI models.",
    duration: "4 Weeks",
    learningMode: "Online / Live Classes",
    skillLevel: "All Levels",
    certificateIncluded: true,
    placementAssistance: true,
    longDescription: "Unlock the full potential of Generative AI. This course covers advanced prompt writing strategies, zero-shot and few-shot learning techniques, prompt patterns, chain-of-thought methodologies, and integrating LLMs into automated business workflows to boost productivity.",
    syllabus: [
      { module: "Module 1: LLM Foundation & NLP Basics", topics: ["How Large Language Models (LLMs) operate", "Tokenization and context windows", "Understanding temperature and top-p generation parameters"] },
      { module: "Module 2: Core Prompt Engineering Formats", topics: ["Directives, context, and output structures", "Zero-shot vs Few-shot learning prompts", "Role prompting and tone styling"] },
      { module: "Module 3: Advanced Reasoning Prompt Patterns", topics: ["Chain-of-Thought (CoT) prompting", "Self-consistency and iterative feedback loops", "Prompt injection threats and guardrail defenses"] },
      { module: "Module 4: Workflow Automation & Tooling", topics: ["Integrating LLMs with API pipelines", "Intro to LangChain and semantic lookups", "Building custom AI agents for business tasks"] }
    ]
  },
  {
    id: "software-testing",
    name: "Software Testing",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=450",
    shortDescription: "Learn Manual Testing, Automation Testing, Selenium, API Testing, SQL and Agile methodologies.",
    duration: "12 Weeks",
    learningMode: "Hybrid (Online/Offline)",
    skillLevel: "Beginner to Intermediate",
    certificateIncluded: true,
    placementAssistance: true,
    longDescription: "Become a professional QA Engineer. This comprehensive syllabus covers Manual QA core parameters, automated web testing using Selenium WebDriver with Java, API testing using Postman, database verification with SQL queries, and software lifecycle methods in Agile sprints.",
    syllabus: [
      { module: "Module 1: Manual Testing Fundamentals", topics: ["SDLC and STLC lifecycles", "Test case design techniques & boundary values", "Defect reporting and JIRA integration"] },
      { module: "Module 2: Databases & API Validation", topics: ["Relational databases & SQL queries (Select, Join, Group)", "API basics & HTTP request parameters", "Postman scripting, collections, and assertions"] },
      { module: "Module 3: Web Automation with Selenium", topics: ["Java language essentials for Selenium", "Locators (XPath, CSS selectors)", "Handling dynamic web components & windows"] },
      { module: "Module 4: QA Frameworks & DevOps CI/CD", topics: ["TestNG, Page Object Model (POM) layouts", "Maven build manager & Git workflows", "Jenkins setup for continuous test automation runs"] }
    ]
  },
  {
    id: "playwright-automation",
    name: "Playwright & Automation Testing",
    iconName: "TestTube",
    image: "/courses/playwright.png",
    shortDescription: "Master modern web automation testing using Playwright with JavaScript/TypeScript.",
    duration: "8 Weeks",
    learningMode: "Hybrid (Online/Offline)",
    skillLevel: "Intermediate",
    certificateIncluded: true,
    placementAssistance: true,
    longDescription: "Become an expert in test automation using Playwright. This course covers everything from basic setup to advanced testing strategies, including API testing, parallel execution, cross-browser testing, and CI/CD integration. Learn to build robust and reliable automation frameworks.",
    syllabus: [
      { module: "Module 1: Playwright Fundamentals", topics: ["Introduction to Playwright and Architecture", "Environment setup and basic scripts", "Locators and interaction with elements"] },
      { module: "Module 2: Advanced Web Automation", topics: ["Handling frames, windows, and alerts", "Network interception and mocking", "Authentication and state management"] },
      { module: "Module 3: Test Framework & Design Patterns", topics: ["Page Object Model (POM) implementation", "Data-driven testing and fixtures", "Visual regression testing"] },
      { module: "Module 4: CI/CD & Reporting", topics: ["Integration with GitHub Actions/Jenkins", "Allure reporting setup", "Parallel execution and test sharding"] }
    ]
  },
  {
    id: "labview",
    name: "LabVIEW Training",
    iconName: "Terminal",
    image: "/courses/labview.png",
    shortDescription: "Learn graphical programming using LabVIEW for automation, data acquisition and engineering applications.",
    duration: "8 Weeks",
    learningMode: "Offline / Classroom",
    skillLevel: "Beginner to Advanced",
    certificateIncluded: true,
    placementAssistance: true,
    longDescription: "Master National Instruments' LabVIEW graphical programming environment. Learn to interface sensors, build automated test systems, perform data acquisition (DAQ), code instrument control loops, and build intuitive front panels for industrial engineering, manufacturing, and R&D labs.",
    syllabus: [
      { module: "Module 1: LabVIEW Programming Essentials", topics: ["G-programming graphical dataflow concept", "Front Panel controls & Block Diagram loops (For, While)", "Data types: numeric, string, boolean, cluster"] },
      { module: "Module 2: Structures & Memory Management", topics: ["Case and Sequence structures", "Arrays and shift registers", "Creating custom SubVIs for modular code layouts"] },
      { module: "Module 3: Hardware Interfacing & DAQmx", topics: ["Data Acquisition (DAQmx) basics", "Analog/Digital input/output configurations", "Serial communication protocols (RS232/GPIB)"] },
      { module: "Module 4: Design Patterns & Systems Calibration", topics: ["State Machine design layouts", "Producer-Consumer buffer architectures", "Error handling, debugging, and executable generation"] }
    ]
  },
  {
    id: "android-ios-development",
    name: "Android and iOS Development",
    iconName: "Smartphone",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=450",
    shortDescription: "Master mobile application development for both Android and iOS platforms.",
    duration: "16 Weeks",
    learningMode: "Hybrid (Online/Offline)",
    skillLevel: "Intermediate",
    certificateIncluded: true,
    placementAssistance: true,
    longDescription: "Learn to build native and cross-platform mobile applications. This course covers everything from basic UI design to advanced state management, native API integration, and app store deployment strategies for both Apple and Google ecosystems.",
    syllabus: [
      { module: "Module 1: Mobile UI/UX Fundamentals", topics: ["Responsive layouts", "Navigation patterns", "Mobile design guidelines"] },
      { module: "Module 2: Cross-Platform Frameworks", topics: ["React Native / Flutter basics", "State management", "Component lifecycle"] },
      { module: "Module 3: Native Device APIs", topics: ["Camera & Storage access", "Geolocation & Maps", "Push Notifications"] },
      { module: "Module 4: Testing & Deployment", topics: ["App profiling and performance", "Play Store deployment", "App Store submission"] }
    ]
  },
  {
    id: "agentic-ai",
    name: "Agentic AI",
    iconName: "BrainCircuit",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=450",
    shortDescription: "Build autonomous AI agents capable of reasoning, planning, and executing complex tasks.",
    duration: "8 Weeks",
    learningMode: "Hybrid (Online/Offline)",
    skillLevel: "Advanced",
    certificateIncluded: true,
    placementAssistance: true,
    longDescription: "Dive into the cutting-edge field of Agentic AI. Learn how to architect systems where LLMs act as autonomous agents, utilizing tools, memory, and sequential reasoning to solve multi-step problems without human intervention.",
    syllabus: [
      { module: "Module 1: Foundations of Agentic AI", topics: ["Evolution from chatbots to agents", "Core components of an AI Agent", "Reasoning and planning paradigms (ReAct)"] },
      { module: "Module 2: Tool Use and APIs", topics: ["Function calling with LLMs", "Connecting agents to external databases", "Web scraping and search tools"] },
      { module: "Module 3: Memory and Context Management", topics: ["Short-term vs Long-term memory", "Vector databases (Pinecone, Chroma)", "Context window optimization"] },
      { module: "Module 4: Multi-Agent Systems", topics: ["Agent orchestration frameworks", "Collaborative agent workflows", "Evaluation and safety guardrails"] }
    ]
  },
  {
    id: "devops-and-cloud",
    name: "DevOps and Cloud",
    iconName: "Cloud",
    image: "/courses/devops_cloud.png",
    shortDescription: "Master DevOps pipelines, CI/CD, AWS, Docker, Kubernetes, and cloud infrastructure.",
    duration: "12 Weeks",
    learningMode: "Hybrid (Online/Offline)",
    skillLevel: "Intermediate",
    certificateIncluded: true,
    placementAssistance: true,
    longDescription: "Learn to bridge the gap between software development and IT operations. This course covers everything you need to become a DevOps engineer, including version control with Git, continuous integration and deployment with Jenkins, containerization with Docker and Kubernetes, and infrastructure as code using Terraform on AWS.",
    syllabus: [
      { module: "Module 1: Version Control & Linux Basics", topics: ["Linux command line essentials", "Git branching and merging strategies", "Bash scripting fundamentals"] },
      { module: "Module 2: Cloud Computing with AWS", topics: ["EC2, S3, and IAM basics", "VPC networking and security groups", "Serverless architecture overview"] },
      { module: "Module 3: Containerization & Orchestration", topics: ["Docker images and containers", "Docker Compose for multi-container apps", "Kubernetes pods, services, and deployments"] },
      { module: "Module 4: CI/CD & Infrastructure as Code", topics: ["Jenkins pipeline creation", "GitHub Actions workflows", "Terraform configuration and provisioning"] }
    ]
  },
  {
    id: "mern-fullstack",
    name: "Full-Stack Web Dev with MERN",
    iconName: "Code",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=450",
    shortDescription: "Build dynamic, scalable web applications using MongoDB, Express.js, React, and Node.js.",
    duration: "16 Weeks",
    learningMode: "Hybrid (Online/Offline)",
    skillLevel: "Beginner to Intermediate",
    certificateIncluded: true,
    placementAssistance: true,
    longDescription: "Become a Full-Stack developer mastering the MERN stack. Learn to build modern, responsive front-end interfaces with React.js, create robust backend RESTful APIs with Node.js and Express, and manage databases efficiently with MongoDB. Complete multiple hands-on projects and prepare for top tech roles.",
    syllabus: [
      { module: "Module 1: Front-End Foundations", topics: ["HTML5, CSS3, and modern JavaScript (ES6+)", "Responsive design with Tailwind CSS", "DOM manipulation and event handling"] },
      { module: "Module 2: React.js Development", topics: ["React components, props, and state", "Hooks (useState, useEffect, useContext)", "React Router and API integration"] },
      { module: "Module 3: Back-End with Node.js & Express", topics: ["Node.js runtime and modules", "Creating RESTful APIs with Express", "Middleware and error handling"] },
      { module: "Module 4: Database & Deployment", topics: ["MongoDB schemas and Mongoose", "User authentication (JWT, bcrypt)", "Deploying MERN apps to Vercel and Render"] }
    ]
  },
  {
    id: "linux-administration",
    name: "Linux Administration",
    iconName: "Terminal",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800&h=450",
    shortDescription: "Master Linux operating system, command line, shell scripting, and server administration.",
    duration: "8 Weeks",
    learningMode: "Hybrid (Online/Offline)",
    skillLevel: "Beginner to Intermediate",
    certificateIncluded: true,
    placementAssistance: true,
    longDescription: "Gain a deep understanding of the Linux operating system. This course covers everything from basic command-line navigation and file management to advanced topics like user administration, network configuration, security hardening, and bash shell scripting. Perfect for aspiring sysadmins and DevOps professionals.",
    syllabus: [
      { module: "Module 1: Linux Fundamentals", topics: ["Introduction to Linux distributions", "Basic command-line navigation", "File and directory management"] },
      { module: "Module 2: System Administration", topics: ["User and group management", "File permissions and ownership", "Process monitoring and management"] },
      { module: "Module 3: Networking & Security", topics: ["Network configuration and troubleshooting", "Firewall setup (iptables/ufw)", "SSH configuration and security best practices"] },
      { module: "Module 4: Shell Scripting", topics: ["Bash variables and control structures", "Automating administrative tasks", "Text processing (grep, awk, sed)"] }
    ]
  },
  {
    id: "java-development",
    name: "Java Development",
    iconName: "Code",
    image: "/courses/java_dev.png",
    shortDescription: "Master Core Java, Advanced Java, Spring Boot, and Microservices.",
    duration: "16 Weeks",
    learningMode: "Hybrid (Online/Offline)",
    skillLevel: "Beginner to Advanced",
    certificateIncluded: true,
    placementAssistance: true,
    longDescription: "Become an expert Java Developer. This course covers everything from Core Java fundamentals to enterprise-level frameworks like Spring Boot, Hibernate, and RESTful web services. Build scalable microservices architectures and prepare for top tier software engineering roles.",
    syllabus: [
      { module: "Module 1: Core Java Fundamentals", topics: ["Object-Oriented Programming (OOP) concepts", "Collections Framework and Generics", "Exception handling and multithreading"] },
      { module: "Module 2: Advanced Java & Databases", topics: ["JDBC and database connectivity", "Servlets and JSP", "Hibernate ORM integration"] },
      { module: "Module 3: Spring Framework & Spring Boot", topics: ["Dependency Injection and Inversion of Control", "Spring MVC and RESTful APIs", "Spring Security and Data JPA"] },
      { module: "Module 4: Microservices & Deployment", topics: ["Microservices architecture principles", "Dockerizing Java applications", "Deploying Spring Boot apps on Cloud"] }
    ]
  },
  {
    id: "python-development",
    name: "Python Development",
    iconName: "Terminal",
    image: "/courses/python_dev.png",
    shortDescription: "Learn Python programming, Django, Flask, Data Analysis, and Automation.",
    duration: "12 Weeks",
    learningMode: "Hybrid (Online/Offline)",
    skillLevel: "Beginner to Intermediate",
    certificateIncluded: true,
    placementAssistance: true,
    longDescription: "Start your journey with Python. This comprehensive course covers Python fundamentals, web development with Django and Flask, data manipulation using Pandas, and task automation. Gain hands-on experience building real-world applications.",
    syllabus: [
      { module: "Module 1: Python Basics & Core Concepts", topics: ["Data types, variables, and operators", "Control flow (loops and conditionals)", "Functions, modules, and file handling"] },
      { module: "Module 2: Object-Oriented Python", topics: ["Classes, objects, and inheritance", "Exception handling and regular expressions", "Working with APIs and JSON data"] },
      { module: "Module 3: Web Development with Django/Flask", topics: ["Setting up web servers and routing", "Templates and static files", "Database integration with ORM"] },
      { module: "Module 4: Data Analysis & Automation", topics: ["Web scraping with BeautifulSoup", "Data analysis with Pandas and NumPy", "Automating tasks and writing scripts"] }
    ]
  }
];

export async function fetchCourses() {
  await new Promise((resolve) => setTimeout(resolve, 150));
  return courses;
}

export async function fetchCourseById(id) {
  await new Promise((resolve) => setTimeout(resolve, 150));
  return courses.find(c => c.id === id);
}
