import type { SkillCategory } from "../../types";
import { PROJECTS } from "./projects";
import { EXPERIENCES } from "./experiences";
import { EDUCATIONS } from "./educations";
import { getAllUniqueSkills } from "../skillCategories";

// Add skills to education if not present
const educationWithSkills = EDUCATIONS.map(edu => ({
  ...edu,
  skills: [
    "Data Structures",
    "Algorithms",
    "Software Engineering",
    "Database Systems",
    "Operating Systems",
    "Web Development",
    "Computer Science",
    "Java",
    "Python",
    "JavaScript",
    "SQL",
    "Git"
  ]
}));

// Get categorized skills
const skillsByCategory = getAllUniqueSkills(PROJECTS, EXPERIENCES, educationWithSkills);

// Convert to SkillCategory array
export const SKILLS: SkillCategory[] = Array.from(skillsByCategory.entries())
  .filter(([_, skills]) => skills.size > 0) // Only include categories with skills
  .map(([category, skillSet]) => ({
    category,
    skills: Array.from(skillSet).sort()
  }))
  .sort((a, b) => {
    // Custom sort order for categories
    const order = [
      "Frontend",
      "Backend",
      "Cloud & DevOps",
      "Testing & Quality",
      "Project Management",
      "Other"
    ];
    return order.indexOf(a.category) - order.indexOf(b.category);
  }); 