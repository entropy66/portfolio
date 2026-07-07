export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  bio: string
  avatar?: string
  email: string
  phone?: string
  location: string
  blog?: string
  social: SocialLink[]
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface Skill {
  name: string
  category: 'engineering' | 'tech' | 'general'
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  link?: string
  github?: string
  highlights: string[]
}

export interface ResumeData {
  personal: PersonalInfo
  skills: Skill[]
  experience: Experience[]
  projects: Project[]
}
