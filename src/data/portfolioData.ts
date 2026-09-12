export interface SkillItem {
  name: string;
  icon: string;
  description: string;
  level: number;
  category: string;
}

export interface ProjectItem {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: number;
  role: string;
  organization: string;
  duration: string;
  type: string;
  description: string[];
  skills: string[];
  icon: string;
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  score: string;
  scoreLabel: string;
  description: string;
  current: boolean;
}

export interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: string;
  placeholder: boolean;
}

export const portfolioData = {
  personal: {
    name: 'Rituraj Shukla',
    firstName: 'Rituraj',
    title: 'CSE Diploma Student & Developer',
    tagline: 'Building solutions with clean code.',
    description:
    'A passionate Computer Science Engineering student from Fatehpur, UP, India. I build practical software projects using C#, Java, JavaScript, and web technologies — turning ideas into working applications.',
    location: 'Fatehpur, Uttar Pradesh, India',
    email: 'shuklarituraj1902@gmail.com',
    phone: '+91 6392556772',
    linkedIn: 'https://www.linkedin.com/in/rituraj-s-300064373',
    github: 'https://github.com/KingOfSeason',
    instagram: 'https://www.instagram.com/rituraj_shukla_',
    resumeUrl: '/resume.pdf',
    currentlyLearning: [
    'ASP.NET Core MVC',
    'Advance Computer Networks',
    'Multimedia Technology',
    'Data Structures']

  },

  skills: [
  {
    name: 'C#',
    icon: 'CSharpIcon',
    description: 'Object-oriented programming, Windows Forms, file handling, CRUD applications.',
    level: 80,
    category: 'Language'
  },
  {
    name: 'Java',
    icon: 'JavaIcon',
    description: 'Core Java concepts, OOP principles, console-based applications.',
    level: 70,
    category: 'Language'
  },
  {
    name: 'HTML',
    icon: 'HtmlIcon',
    description: 'Semantic markup, accessible structure, modern HTML5 elements.',
    level: 85,
    category: 'Web'
  },
  {
    name: 'CSS',
    icon: 'CssIcon',
    description: 'Responsive layouts, Flexbox, Grid, animations, and modern UI styling.',
    level: 80,
    category: 'Web'
  },
  {
    name: 'JavaScript',
    icon: 'JsIcon',
    description: 'DOM manipulation, ES6+, event handling, async fundamentals.',
    level: 72,
    category: 'Web'
  },
  {
    name: 'MSSQL',
    icon: 'SqlIcon',
    description: 'Database design, queries, stored procedures, and data management.',
    level: 75,
    category: 'Database'
  }] as
  SkillItem[],

  education: [
  {
    id: 1,
    degree: 'Diploma in Computer Science Engineering',
    institution: 'Government Polytechnic Sikandara, Kanpur Dehat',
    year: '2024 – 2027 (Expected)',
    score: 'In Progress',
    scoreLabel: 'Status',
    description:
    'Pursuing a 3-year Diploma in CSE, focusing on programming, database management, software development, and computer networks.',
    current: true
  },
  {
    id: 2,
    degree: 'Intermediate (12th Grade)',
    institution: 'DSM Inter College Yashoda Nagar Kanpur',
    year: '2024',
    score: '84%',
    scoreLabel: 'Percentage',
    description:
    'Completed Intermediate with strong academic performance, building a foundation in Science and Mathematics.',
    current: false
  },
  {
    id: 3,
    degree: 'High School (10th Grade)',
    institution: 'DSM Inter College Yashoda Nagar Kanpur',
    year: '2022',
    score: '86%',
    scoreLabel: 'Percentage',
    description:
    'Completed High School with distinction, demonstrating strong academic aptitude across core subjects.',
    current: false
  }] as
  EducationItem[],

  experience: [
  {
    id: 1,
    role: 'Java Developer Intern',
    organization: 'CodeAlpha',
    duration: 'June 2025 – July 2025 · 1 Month',
    type: 'Internship',
    description: [
    'Worked on real-world software development tasks under industry mentorship.',
    'Contributed to project builds using learned programming skills.',
    'Gained hands-on experience with professional development workflows.',
    'Collaborated on code reviews and documentation practices.'],

    skills: ['C#', 'Java', 'Problem Solving', 'Team Collaboration'],
    icon: 'BriefcaseIcon'
  },
  {
    id: 2,
    role: 'Industrial Training',
    organization: 'BTPS',
    duration: '2025 · Technical Training Program',
    type: 'Training',
    description: [
    'Completed industrial training at BTPS as part of Diploma curriculum.',
    'Gained exposure to large-scale technical infrastructure and operations.',
    'Learned about industrial computing systems and safety protocols.',
    'Observed real-world application of engineering and technology concepts.'],

    skills: ['Industrial Systems', 'Technical Documentation'],
    icon: 'AcademicCapIcon'
  }] as
  ExperienceItem[],

  projects: [
  {
    id: 1,
    name: 'Student Grade Tracker Management',
    description:
    'A comprehensive grade tracking system for managing student academic records, calculating GPA, and generating performance reports.',
    longDescription:
    'Built a full-featured student grade management application with a clean UI. Supports adding students, recording grades per subject, automatic GPA calculation, and exporting performance summaries.',
    tech: ['C#', 'MSSQL', 'Windows Forms', '.NET'],
    githubUrl: 'https://github.com/riturajshukla',
    liveUrl: '#',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1e63f61fc-1768541670466.png",
    featured: true
  },
  {
    id: 2,
    name: 'Student Management System',
    description:
    'A CRUD-based student management application with file handling capabilities, allowing complete data persistence without a database.',
    longDescription:
    'Developed a student management system featuring full CRUD operations — Create, Read, Update, Delete — with file-based data storage using C# file I/O, making it lightweight and portable.',
    tech: ['C#', 'File Handling', 'OOP', 'Windows Forms'],
    githubUrl: 'https://github.com/riturajshukla',
    liveUrl: '#',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1190944d7-1772351148685.png",
    featured: false
  }] as
  ProjectItem[],

  certificates: [
  {
    id: 1,
    title: 'Industrial Training Certificate',
    issuer: 'BTPS',
    date: '2025',
    type: 'Training',
    placeholder: true
  },
  {
    id: 2,
    title: 'Internship Completion Certificate',
    issuer: 'CodeAlpha',
    date: 'July 2025',
    type: 'Internship',
    placeholder: true
  },
  {
    id: 3,
    title: 'LinkedIn Learning Certificate',
    issuer: 'LinkedIn Learning',
    date: '2025',
    type: 'Online Course',
    placeholder: true
  }] as
  CertificateItem[],

  languages: ['Hindi', 'English']
};