import type { Award, Certification, Education, Experience, Project, SkillCategory, UserInfo } from "./types";

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with cart functionality, user authentication, and payment processing integration.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    image: "/images/project1.jpg",
    githubUrl: "https://github.com/alexmorgan/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management Dashboard",
    description:
      "A Kanban-style project management tool with drag-and-drop functionality, team collaboration features, and real-time updates.",
    technologies: ["React", "Redux", "Firebase", "Tailwind CSS"],
    image: "/images/project2.jpg",
    githubUrl: "https://github.com/alexmorgan/task-dashboard",
    liveUrl: "https://task-dashboard-demo.com",
  },
  {
    title: "Weather Forecast App",
    description:
      "A responsive weather application that provides accurate forecasts based on location, with historical data visualization.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation API"],
    image: "/images/project3.jpg",
    githubUrl: "https://github.com/alexmorgan/weather-app",
    liveUrl: "https://weather-app-demo.com",
  },
];

// Sample experience data
export const EXPERIENCES: Experience[] = [
  {
    company: "Tech Innovations Inc.",
    role: "Senior Frontend Engineer",
    period: "2021 - Present",
    description:
      "Lead the development of the company's flagship SaaS product. Architected and implemented major features that increased user engagement by 45%. Mentored junior developers and established frontend best practices.",
    technologies: ["React", "TypeScript", "GraphQL", "Jest", "Cypress"],
  },
  {
    company: "Digital Solutions Ltd.",
    role: "Frontend Developer",
    period: "2018 - 2021",
    description:
      "Developed responsive web applications for clients across various industries. Collaborated with designers to transform mockups into functional interfaces. Implemented CI/CD pipelines that reduced deployment time by 60%.",
    technologies: ["React", "JavaScript", "REST APIs", "Webpack", "SCSS"],
  },
  {
    company: "Creative Web Agency",
    role: "Junior Web Developer",
    period: "2016 - 2018",
    description:
      "Built and maintained client websites using modern frontend technologies. Worked directly with clients to gather requirements and implement changes. Contributed to the development of the company's internal CMS.",
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery", "PHP"],
  },
];

// Sample skills data
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
    resume: "/Resume.pdf",
  },
};

export const EDUCATIONS: Education[] = [
  {
    school: "Purdue University of Indianapolis",
    startDate: new Date("2017/03/03"),
    endDate: new Date("2021/03/03"),
    major: "Computer Science",
    degree: "Bachelors of Science",
    minor: "Mathematics"
  }
]

export const CERTIFICATIONS: Certification[] = [
  {title: "SAFE"},{title: "AWS Developer Associate"}, {title: "AWS Cloud Practitioner"}
]

export const AWARDS: Award[] = [
  
]
