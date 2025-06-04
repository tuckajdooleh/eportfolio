// Define skill categories and their associated technologies
export const SKILL_CATEGORIES = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "Tailwind CSS",
    "Redux",
    "Next.js",
    "NextJS",
    "ReactJS",
    "Ember.js",
    "Bootstrap",
    "Vite",
    "Webpack",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "REST APIs",
    "GraphQL",
    "API Development",
    "Python",
    "Java",
    "Spring",
    "C#",
    "SQL",
    "PHP",
  ],
  "Cloud & DevOps": [
    "AWS Lambda",
    "AWS",
    "SQS",
    "SNS",
    "API Gateway",
    "Route 53",
    "S3",
    "DynamoDB",
    "Athena",
    "CloudWatch",
    "Serverless Framework",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "Git",
  ],
  "Testing & Quality": [
    "Jest",
    "Cypress",
    "Testing",
  ],
  "Project Management": [
    "Agile/Scrum",
    "SAM Templates",
  ],
  Other: [
    "Socket.IO",
    "Selenium",
    "Blueprint",
    "Formstack",
    "Analytics Integration",
    "Godot Engine",
    "Blender",
    "Tkinter",
  ]
} as const;

// Helper function to categorize a skill
export function categorizeSkill(skill: string): string {
  // Normalize the skill name for comparison
  const normalizedSkill = skill.toLowerCase();
  
  // Check each category
  for (const [category, skills] of Object.entries(SKILL_CATEGORIES)) {
    if (skills.some(s => s.toLowerCase() === normalizedSkill)) {
      return category;
    }
  }
  
  // If no category matches, return "Other"
  return "Other";
}

// Function to get unique skills from projects, experiences, and education
export function getAllUniqueSkills(
  projects: { technologies: string[] }[],
  experiences: { technologies: string[] }[],
  education: { skills?: string[] }[]
): Map<string, Set<string>> {
  const skillsByCategory = new Map<string, Set<string>>();
  
  // Initialize categories
  Object.keys(SKILL_CATEGORIES).forEach(category => {
    skillsByCategory.set(category, new Set<string>());
  });

  // Function to process a skill
  const processSkill = (skill: string) => {
    const category = categorizeSkill(skill);
    const categorySet = skillsByCategory.get(category);
    if (categorySet) {
      categorySet.add(skill);
    }
  };

  // Process all skills from different sources
  projects.forEach(project => 
    project.technologies.forEach(processSkill)
  );
  
  experiences.forEach(experience => 
    experience.technologies.forEach(processSkill)
  );
  
  education.forEach(edu => 
    edu.skills?.forEach(processSkill)
  );

  return skillsByCategory;
} 