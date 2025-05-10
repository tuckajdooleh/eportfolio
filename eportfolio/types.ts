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

export interface Education {
  school: string
  startDate: Date
  endDate: Date
  major: string
  degree: string
  minor: string
}

export interface Certification {
  title: string
}

export interface Award {
  title: string
}

export interface Statistics {
  projectCount: number,
  professionalExperienceYears: number
  internExperienceYears: number
}