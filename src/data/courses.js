export const courses = [
  {
    id: "data-annotation",
    name: "Data Annotation",
    iconName: "Binary",
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
    id: "app-development",
    name: "App Development",
    iconName: "Smartphone",
    shortDescription: "Build modern Android and cross-platform mobile applications with current technologies.",
    duration: "16 Weeks",
    learningMode: "Offline / Lab Intensive",
    skillLevel: "Intermediate",
    certificateIncluded: true,
    placementAssistance: true,
    longDescription: "Learn to design, develop, and launch high-performance mobile apps. This course covers React Native for cross-platform apps and native Android development using Kotlin, state management, offline storage, camera APIs, maps integration, and deploying apps to Google Play Store.",
    syllabus: [
      { module: "Module 1: JavaScript & React Core Essentials", topics: ["ES6 syntax, callbacks, and promises", "React functional components, hooks (useState, useEffect)", "Layout structures & UI rendering patterns"] },
      { module: "Module 2: React Native Framework Setup", topics: ["React Native CLI & Expo configurations", "Style sheets, flexbox layouts, and assets handling", "Dynamic navigation (Stack, Tabs, Drawer)"] },
      { module: "Module 3: Mobile Sensor Integration", topics: ["Asynchronous storage systems (AsyncStorage)", "Camera and image upload APIs", "Geolocation & map routes tracking"] },
      { module: "Module 4: Native Android & Deployment", topics: ["Kotlin fundamentals & Android Studio SDK", "API connection protocols (Axios/Fetch)", "App packaging, play store publishing parameters"] }
    ]
  },
  {
    id: "labview",
    name: "LabVIEW Training",
    iconName: "Terminal",
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
