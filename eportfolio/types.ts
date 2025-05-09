export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface SocialLinks {
    github: string
    linkedin: string
    email: string
    resume: string
}

export interface UserInfo 
{
  name: string
  title: string
  socialLinks: SocialLinks
}