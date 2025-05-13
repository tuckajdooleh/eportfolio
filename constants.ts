import type { Certification, Education, Experience, Project, SkillCategory, UserInfo } from "./types";
export const PROJECTS: Project[] = [
  {
    title: "Tetris",
    description:
      "Interactive Tetris game built using vanilla web technologies.",
    technologies: ["HTML", "JavaScript", "CSS"],
    image: "tetris/tetris.PNG",
    githubUrl: "https://github.com/tuckajdooleh/tetris",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/tetris/tetris.html",
  },
  {
    title: "Traveling Salesman Corn Maze Pathfinding Program",
    description:
      "Algorithm implementation that solves the traveling salesman problem for corn maze pathfinding.",
    technologies: ["Python"],
    image: "CornMaze/result.PNG",
    githubUrl: "https://github.com/tuckajdooleh/CornMaze",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/CornMaze/CornMaze.html",
  },
  {
    title: "Online Multiplayer Texas Hold'em Poker Website",
    description:
      "Real-time multiplayer poker game with full game logic and player interaction.",
    technologies: ["Node.js", "Express.js", "Socket.IO", "HTML", "JavaScript", "CSS"],
    image: "poker/poker.PNG",
    githubUrl: "https://github.com/tuckajdooleh/poker",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/poker/poker.html",
  },
  {
    title: "Spotify Group Listening (Using API)",
    description:
      "Application that enables synchronized music listening experiences across multiple users using the Spotify API.",
    technologies: ["Node.js", "Express.js", "Socket.IO", "HTML", "JavaScript", "CSS", "Bootstrap"],
    image: "spotifyapi/spotifyapi2.PNG",
    githubUrl: "https://github.com/tuckajdooleh/spotifyapi",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/spotifyapi/spotifyapi.html",
  },
  {
    title: "Spotify Group Listening (Using Selenium)",
    description:
      "Alternative implementation of synchronized music listening using Selenium for automation.",
    technologies: ["Python", "Selenium", "Node.js", "Express.js", "Socket.IO", "HTML", "JavaScript", "CSS", "Bootstrap"],
    image: "spotifyselenium/spotify1.PNG",
    githubUrl: "https://github.com/tuckajdooleh/spotifyselenium",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/spotifyselenium/spotifyselenium.html",
  },
  {
    title: "Ember.Js Support App",
    description:
      "Support ticket management application built with Ember.js framework.",
    technologies: ["Ember.js", "Node.js", "Blueprint", "MongoDB"],
    image: "ember/profile.PNG",
    githubUrl: "https://github.com/tuckajdooleh/ember",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/ember/ember.html",
  },
  {
    title: "BACI Member Tracking Website",
    description:
      "Database-driven member management system for an organization.",
    technologies: ["PHP", "SQL", "HTML", "JavaScript", "Bootstrap"],
    image: "baci/baci.PNG",
    githubUrl: "https://github.com/tuckajdooleh/baci",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/baci/baci.html",
  },
  {
    title: "Impact Church Member Tracker",
    description:
      "Member management system designed specifically for church administration.",
    technologies: ["PHP", "SQL", "HTML", "JavaScript", "Bootstrap"],
    image: "impact/membermanagement.PNG",
    githubUrl: "https://github.com/tuckajdooleh/impact",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/impact/impact.html",
  },
  {
    title: "MIDI Instrument Replacer",
    description:
      "Python tool that allows for replacement of instruments in MIDI files.",
    technologies: ["Python"],
    image: "midi/midi.PNG",
    githubUrl: "https://github.com/tuckajdooleh/midi",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/midi/midi.html",
  },
  {
    title: "Church Member Tracking Website",
    description:
      "Comprehensive system for tracking church members and their information.",
    technologies: ["PHP", "HTML", "JavaScript", "CSS", "SQL"],
    image: "membertracking/mainadmin.PNG",
    githubUrl: "https://github.com/tuckajdooleh/membertracking",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/membertracking/membertracking.html",
  },
  {
    title: "IUPUI Class Finder 3D Game",
    description:
      "3D interactive game to help students find their classes at IUPUI campus.",
    technologies: ["Godot Engine", "Blender"],
    image: "iupuitour/classfinder.PNG",
    githubUrl: "https://github.com/tuckajdooleh/iupuitour",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/iupuitour/iupuitour.html",
  },
  {
    title: "Quarantine Simulator 3D Game",
    description:
      "3D simulation game based on quarantine experiences.",
    technologies: ["Godot Engine", "Blender"],
    image: "quarantine/Screenshot (7).png",
    githubUrl: "https://github.com/tuckajdooleh/quarantine",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/quarantine/quarantine.html",
  },
  {
    title: "2D Multiplayer Game",
    description:
      "Real-time multiplayer 2D game with network synchronization.",
    technologies: ["Node.js", "Express.js", "Socket.IO", "HTML", "JavaScript", "CSS"],
    image: "2dmultiplayer/players.PNG",
    githubUrl: "https://github.com/tuckajdooleh/2dmultiplayer",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/2dmultiplayer/2dmultiplayer.html",
  },
  {
    title: "Class Finder (Python)",
    description:
      "Python application with GUI that helps find optimal paths between classes.",
    technologies: ["Python", "Tkinter"],
    image: "pythonpathfinder/dev.PNG",
    githubUrl: "https://github.com/tuckajdooleh/pythonpathfinder",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/pythonpathfinder/pythonpathfinder.html",
  },
  {
    title: "AP Computer Science Final Project",
    description:
      "Java-based application developed as a final project for AP Computer Science.",
    technologies: ["Java"],
    image: "lunchtime/start.PNG",
    githubUrl: "https://github.com/tuckajdooleh/lunchtime",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/lunchtime/lunchtime.html",
  },
  {
    title: "Blocks",
    description:
      "Java game featuring block-based puzzles and challenges.",
    technologies: ["Java"],
    image: "blocks/start.PNG",
    githubUrl: "https://github.com/tuckajdooleh/blocks",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/blocks/blocks.html",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Encora Inc.",
    role: "Software Engineer",
    startDate: "June 2024",
    endDate: "Present",
    description:
      "Built several complex NextJS pages, components, and API endpoints. Developed SAM templates to deploy native AWS Python Lambda stacks for business proof of concepts. Successfully migrated solutions to Kubernetes environments.",
    technologies: ["NextJS", "AWS Lambda", "Python", "SAM Templates", "Kubernetes"],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer",
    startDate: "April 2022",
    endDate: "June 2024",
    description:
      "Served as service owner and sole engineer tasked with designing and implementing a long-term invoicing service generating thousands of PDFs daily. Built cross-regional APIs and internal ReactJS visualization tools for QA teams. Implemented comprehensive CI/CD pipelines with CloudWatch metrics, alarms, and dashboards, significantly reducing deployment and incident response times.",
    technologies: ["Java", "TypeScript", "Python", "ReactJS", "AWS Lambda", "SQS", "SNS", "API Gateway", "Route 53", "S3", "DynamoDB", "Athena", "CloudWatch"],
  },
  {
    company: "DMI (Digital Management, LLC)",
    role: "Software Engineer",
    startDate: "June 2021",
    endDate: "April 2022",
    description:
      "Worked with AWS and the Serverless Framework to create APIs interfacing with company services. Built and maintained serverless applications and infrastructure.",
    technologies: ["AWS", "Serverless Framework", "API Development"],
  },
  {
    company: "Franciscan Alliance Information Services",
    role: "Application Developer Intern",
    startDate: "May 2020",
    endDate: "June 2021",
    description:
      "Developed a COVID-19 screening application used by all employees and guests entering Franciscan buildings. Served as primary developer for the 'Senior Promise' website utilized throughout the company. Created C# cron jobs to automate account and form deletion processes.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Formstack", "C#"],
  },
  {
    company: "Indiana Farm Bureau Insurance",
    role: "Systems Development Intern",
    startDate: "May 2019",
    endDate: "August 2019",
    description:
      "Contributed to the development and testing of a Java Spring API for agent assistance with underwriting application statuses. Participated in corporate initiative to test E-applications. Integrated Clicky Analytics into the company website using JavaScript.",
    technologies: ["Java", "Spring", "JavaScript", "API Development", "Analytics Integration"],
  },
  {
    company: "Indiana University–Purdue University Indianapolis",
    role: "Teaching Assistant",
    startDate: "September 2018",
    endDate: "May 2019",
    description:
      "Worked to assist students and lead recitations for the introductory Computer Science course CSCI-230.",
    technologies: ["Teaching", "Computer Science"],
  },
  {
    company: "Indiana University–Purdue University Indianapolis",
    role: "Software Engineer",
    startDate: "October 2017",
    endDate: "September 2018",
    description:
      "Used Ember.js, MongoDB, and Blueprint to create several pages in an application used by researchers and life coaches to communicate with inmates coming out of incarceration.",
    technologies: ["Ember.js", "MongoDB", "Blueprint"],
  },
  {
    company: "TechPoint (Indiana)",
    role: "Xtern Bootcamp Participant",
    startDate: "May 2018",
    endDate: "June 2018",
    description:
      "Participated in a 3-week React.js intensive training course, hosted by TechPoint, focused on developing the skills and competencies needed for internships in tech.",
    technologies: ["React.js"],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "Next.js",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    category: "Tools & Methods",
    skills: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Jest",
      "Cypress",
      "Agile/Scrum",
      "CI/CD",
      "Webpack",
      "Vite",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Team Leadership",
      "Problem Solving",
      "Technical Writing",
      "Mentoring",
      "Project Management",
      "Client Communication",
    ],
  },
];

export const USER_INFO: UserInfo = {
  name: "Tucker Dooley",
  title: "Software Engineer",
  socialLinks: {
    github: "https://github.com/tuckajdooleh",
    linkedin: "https://linkedin.com/in/tucker-dooley",
    email: "mailto:tuckerdooleyengineer@gmail.com.com",
    resume: "Resume.pdf",
  },
};

export const EDUCATIONS: Education[] = [
  {
    institution: "Purdue University - Indianapolis",
    degree: "Bachelor of Science (BS)",
    field: "Computer Science",
    startDate: "August 2017",
    endDate: "May 2021",
    location: "Indianapolis, Indiana",
    achievements: [
      "Promising Freshman in Computer Science Award",
      "Dean's List",
      "Scholars List"
    ],
    courses: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Systems",
      "Operating Systems",
      "Web Development"
    ],
    gpa: "3.67"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    date: "2022",
    description: "Validates technical expertise in developing and maintaining AWS-based applications.",
    credentialUrl: "https://www.credly.com/badges/71a37436-89bc-48df-9fad-a449a8b7450b?source=linked_in_profile",
    image: "awardsCertificates/aws-certified-developer-associate.png"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2022",
    description: "Validates foundational understanding of AWS Cloud services, architecture, security, and compliance.",
    credentialUrl: "https://www.credly.com/badges/410b7499-d627-4a8d-8811-0efeb67d2025/linked_in_profile",
    image: "awardsCertificates/aws-certified-cloud-practitioner.png"
  },
  {
    title: "Certified SAFe 5 Practitioner",
    issuer: "Scaled Agile, Inc.",
    date: "2022",
    description: "Validates knowledge of Scaled Agile Framework principles, practices, and implementation.",
    credentialUrl: "https://www.credly.com/badges/9da273c3-23e4-49a5-ac56-1aec079cdfb9?source=linked_in_profile",
    image: "awardsCertificates/safe.PNG"
  },
  {
    title: "Formstack Forms Certification",
    issuer: "Formstack",
    date: "June 2020",
    description: "Completed comprehensive Formstack training and certification program.",
    image: "awardsCertificates/fstack1.PNG"
  },
  {
    title: "Promising Freshman Award",
    issuer: "IUPUI Computer Science Department",
    date: "2018",
    description: "Selected for high GPA, involvement in Computer Science club and rowing team, and Software Engineering job achievements.",
    image: "awardsCertificates/promising.jpg"
  },
  {
    title: "Scholar's List",
    issuer: "IUPUI School of Science",
    date: "2017-2021",
    description: "One of 328 School of Science students to achieve a cumulative GPA of 3.75 or higher.",
    image: "awardsCertificates/scholar.jpg"
  },
  {
    title: "Dean's List",
    issuer: "IUPUI",
    date: "Fall 2017, Fall 2018, Spring 2019, Spring 2020",
    description: "Awarded to students who complete a semester with at least a 3.5 GPA.",
    image: "awardsCertificates/dean.jpg"
  },
  {
    title: "Xtern Bootcamp Participant",
    issuer: "TechPoint Indiana",
    date: "2018",
    description: "Completed a 3-week React.js intensive training program focused on developing skills and competencies needed for internships in tech.",
    image: "awardsCertificates/xtern.jpg"
  }
];