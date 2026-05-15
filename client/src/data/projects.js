import studyzoneCover from "../assets/GH_StudyZone.png";
import mortanaCover from "../assets/GH_Mortana.png";
import walkthroughV2 from "../assets/StudyZone_V2_Walkthrough.mp4";
import brokenRajCover from "../assets/Broken_Raj.jpeg";

// Add these later when you have covers/media
// import mortanaCover from "../assets/mortana-cover.png";
// import brokenRajCover from "../assets/broken-raj-cover.png";
// import highlighterCover from "../assets/highlighter-cover.png";

export const projects = [
  {
    slug: "studyzone",
    title: "StudyZone",
    status: "Deployed V1",
    type: "Full-Stack MERN App",
    desc: "Interactive quiz platform with auth, quiz creation, question pools, MCQ/DDQ bulk parser, matrix questions, leaderboard, and ranking systems.",
    stack: ["MongoDB", "Express", "React", "Node", "JWT"],
    link: "/projects/studyzone",
  },
  {
    slug: "mortana",
    title: "Mortana",
    status: "Planning",
    type: "C# WPF CRM",
    desc: "Mortgage and real estate CRM rebuild using WPF, MVVM, SWE fundamentals, UML diagrams, and system design planning.",
    stack: ["C#", "WPF", "MVVM", "SQL", "SWE"],
    link: "/projects/mortana",
  },
  {
    slug: "broken-raj",
    title: "Broken Raj",
    status: "Prototype / Learning",
    type: "Unreal Engine Game",
    desc: "1800s India-inspired game project focused on Unreal Engine, C++, dialogue systems, faction choices, movement, and worldbuilding.",
    stack: ["Unreal", "C++", "Blueprints", "Game Design"],
    link: "/projects/broken-raj",
  },
  {
    slug: "research-highlighter",
    title: "Research Highlighter",
    status: "Coming Soon",
    type: "Browser Extension",
    desc: "Planned research productivity tool for highlighting, organizing, and extracting useful information from online sources.",
    stack: ["JavaScript", "Extension APIs", "Research Tools"],
    link: "/projects/research-highlighter",
  },
];

export const projectDetails = [
  {
    slug: "studyzone",
    title: "StudyZone",
    status: "Deployed V1",
    summary:
      "A full-stack MERN quiz platform built to improve learning workflows and showcase scalable quiz architecture.",

    coverImage: studyzoneCover,

    liveUrl: "https://studyzone-githappens.onrender.com/",
    githubUrl: "https://github.com/sandhusamit/StudyZone_GitHappens.git",


    developerOverview:
      "StudyZone was built as a real full-stack system rather than a tutorial project. The focus was authentication, reusable question architecture, custom question types, backend data modeling, validation, deployment, and iterative debugging.",

    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cookies",
      "Render",
    ],

    built: [
      "Quiz creation and playback system",
      "MCQ, drag-and-drop, and matrix question support",
      "Bulk question parser",
      "Reusable question pool",
      "Authentication with cookies and JWT",
      "Leaderboard and ranking foundations",
    ],

    engineeringFocus: [
      "Reusable React component structure",
      "Mongoose schema design",
      "API response consistency",
      "Validation and error handling",
      "Deployment cleanup",
      "Frontend/backend debugging",
    ],

    walkthrough: [
      {
        type: "video",
        src: walkthroughV2,
        title: "StudyZone V2 Walkthrough",
        description:
          "A developer-focused walkthrough of StudyZone features, architecture decisions, and user flows.",
      },
    ],

    documents: ["/GitHappensLtd_EDD_v1.pdf"],

    problemsSolved: [
      "Standardized inconsistent API response shapes",
      "Debugged undefined matrix question IDs across frontend/backend layers",
      "Designed mixed question model support",
      "Improved UI readability for complex question types",
      "Matrix Questions that allow 'steps' as if user were completing them in a quiz",
      "Parsing bulk questions for each individual question type and error handling for malformed input",
      "Authenticated quizzes for sharing based on user roles and permissions (ex: guest cookies)",

    ],

    lessonsLearned: [
      "Consistency across API responses matters",
      "Component ownership prevents messy state flow",
      "Deployment exposes issues hidden in development",
      "Good validation protects the entire system",
      "Proper usage of the SWE principles such as seperation of concerns, single responsibility, and DRY can lead to more scalable and maintainable code",
      "Code can often be reused but should be refactored to fit new architecture and design patterns",
      "Context usage can help avoid prop drilling in complex component trees",
    ],

    nextImprovements: [
      "Cleaner test coverage",
      "More analytics",
      "Friend system",
      "Improved leaderboard",
      "Role-based admin tools",
      "Additional question types - coding, flashcard, vectors, diagrams and graphing.",
      "Quiz Gaming with Multiplayer",
      "Friends and Social Features",
      "AI chatbox for quiz creation and note parsing", 
    ],
  },

  {
    slug: "mortana",
    title: "Mortana",
    status: "Planning / Rebuild",
    summary:
      "A C# WPF CRM rebuild designed around mortgage and real estate workflows, software engineering fundamentals, and cleaner architecture.",

    coverImage: mortanaCover,

    liveUrl: "",
    githubUrl: "https://github.com/sandhusamit/Mortana_v1_ph1.git",

    developerOverview:
      "Mortana started as a Windows Forms CRM project and is being planned for a full rebuild in WPF. The goal is to approach it like a proper software engineering project using requirements engineering, UML, MVVM, database design, and system planning before implementation.",

    stack: ["C#", "WPF", "MVVM", "SQL", "UML", "SDLC"],

    built: [
      "Original Windows Forms CRM foundation",
      "Client and mortgage workflow planning",
      "Early data organization and business logic concepts",
      "Requirements planning for WPF rebuild",
    ],

    engineeringFocus: [
      "MVVM architecture",
      "Requirements engineering",
      "UML diagrams",
      "Database design",
      "Separation of concerns",
      "Business workflow modeling",
      "Strong Authentication and Authorization",
    ],

    walkthrough: [],

    documents: ["/SRS_Mortana_MASTERDOC.pdf"],


    problemsSolved: [
      "Identified limitations of the original Windows Forms implementation",
      "Mapped real mortgage workflow problems into software requirements",
      "Reframed the project from a quick tool into a properly engineered system",
    ],

    lessonsLearned: [
      "Planning matters before rebuilding a system",
      "Business knowledge can shape better software requirements",
      "Desktop apps need clean separation between UI, state, and business logic",
      "A rebuild is stronger when architecture comes before code",
    ],

    nextImprovements: [
      "Complete SRS document",
      "Create UML diagrams",
      "Design database schema",
      "Build WPF MVVM foundation",
      "Create client/application tracking modules",
    ],
  },

  {
    slug: "broken-raj",
    title: "The 1800's: Shadow of the Broken Raj",
    status: "Prototype / Learning",
    summary:
      "An Unreal Engine game project inspired by 1800s India, faction-based storytelling, interaction systems, and historical worldbuilding.",

    coverImage: brokenRajCover,

    liveUrl: "",
    githubUrl: "",

    developerOverview:
      "Broken Raj is the long-term game development project under GitHappens. It is currently being used as a learning ground for Unreal Engine, C++, Blueprints, character interaction, dialogue systems, faction design, and gameplay architecture.",

    stack: ["Unreal Engine", "C++", "Blueprints", "Game Design", "Worldbuilding"],

    built: [
      "Early Unreal Engine experiments",
      "Player movement and interaction prototypes",
      "Initial faction and story concepts",
      "Dialogue and interaction system exploration",
    ],

    engineeringFocus: [
      "Gameplay systems",
      "Interaction logic",
      "Blueprint-to-C++ learning",
      "Enhanced Input",
      "Narrative system design",
      "Save/progression planning",
    ],

    walkthrough: [],
    documents: [],


    problemsSolved: [
      "Explored how Unreal separates meshes, blueprints, and gameplay actors",
      "Started learning interaction systems through line traces and input mapping",
      "Began translating game ideas into smaller prototype systems",
    ],

    lessonsLearned: [
      "Game development requires breaking big ideas into tiny systems",
      "Blueprints are useful for prototyping before deeper C++ implementation",
      "Input, interaction, and world logic need clear architecture",
      "Scope control is critical for game projects",
    ],

    nextImprovements: [
      "Build basic interaction system",
      "Prototype dialogue system",
      "Create small playable environment",
      "Experiment with faction selection",
      "Continue Unreal/C++ learning",
    ],
  },

  {
    slug: "research-highlighter",
    title: "Research Highlighter",
    status: "Coming Soon",
    summary:
      "A planned browser extension for highlighting, organizing, and extracting research notes from online content.",

    coverImage: studyzoneCover,

    liveUrl: "",
    githubUrl: "",

    developerOverview:
      "Research Highlighter is planned as a productivity and learning tool to support deeper research workflows. The focus will be browser extension architecture, content scripts, note extraction, tagging, and structured research organization.",

    stack: ["JavaScript", "Browser Extension APIs", "HTML", "CSS", "Storage APIs"],

    built: [
      "Initial concept and use-case planning",
      "Research workflow problem identification",
      "Planned integration with learning and note-taking systems",
    ],

    engineeringFocus: [
      "Browser extension architecture",
      "Content scripts",
      "DOM selection and highlighting",
      "Local/cloud storage strategy",
      "Research organization workflows",
    ],

    walkthrough: [],
    documents: [],


    problemsSolved: [
      "Identified the need for better research capture and organization",
      "Planned a tool to reduce scattered notes across tabs, documents, and sources",
    ],

    lessonsLearned: [
      "Productivity tools should fit naturally into existing workflows",
      "Research systems need both capture and retrieval",
      "A simple extension can become powerful if the data model is clean",
    ],

    nextImprovements: [
      "Define MVP scope",
      "Create extension manifest",
      "Prototype text highlighting",
      "Design note storage model",
      "Build basic export system",
    ],
  },
];