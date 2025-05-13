export interface Project {
  title: string;
  shortDescription: string;  // Brief description for card view
  description: string;       // Detailed description for expanded view
  technologies: string[];
  displayMedia: {           // Media shown in the card view
    type: "image" | "gif" | "video";
    url: string;
    thumbnail?: string;     // Optional thumbnail for videos
    alt?: string;          // Accessibility description
  };
  media: {                  // Array of all media to show in expanded view (including display media)
    type: "image" | "gif" | "video";
    url: string;
    thumbnail?: string;     // Optional thumbnail for videos
    alt?: string;          // Accessibility description
  }[];                     // Array of media items
  githubUrl?: string;
  liveUrl?: string;
  detailedDescription?: string;
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  dateCompleted?: string;
  teamSize?: number;
  role?: string;
  status?: "completed" | "in-progress" | "archived";
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
  major?: string;
  minor?: string;
  startDate: string;
  endDate: string;
  location?: string;
  description?: string;
  gpa?: string;
  achievements?: string[];
  courses?: string[];
  skills?: string[];
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