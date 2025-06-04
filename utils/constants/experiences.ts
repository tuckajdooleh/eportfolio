import type { Experience } from "../../types";

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