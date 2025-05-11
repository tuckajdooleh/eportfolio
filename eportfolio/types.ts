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
  startDate: string;
  endDate: string;
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


export interface Award {
  title: string
}

export interface Statistics {
  projectCount: number,
  professionalExperienceYears: number
  internExperienceYears: number
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  location?: string;
  description?: string;
  gpa?: string;
  achievements?: string[];
  courses?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  description?: string;
  credentialUrl?: string;
  credentialId?: string;
  image?: string;
}