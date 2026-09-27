// ============================================================
// Portfolio Data
// ============================================================

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

// ============================================================
// Certificate Interface
// ============================================================

export interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: string;
  url: string;
  placeholder: boolean;
}

// ============================================================
// Portfolio Data
// ============================================================

export const portfolioData = {
  // ==========================================================
  // PERSONAL INFORMATION
  // ==========================================================

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

    linkedIn:
      'https://www.linkedin.com/in/rituraj-s-300064373',

    github:
      'https://github.com/KingOfSeason',

    instagram:
      'https://www.instagram.com/rituraj_shukla_',

    resumeUrl: '/resume.pdf',

    currentlyLearning: [
      'ASP.NET Core MVC',
      'Advance Computer Networks',
      'Multimedia Technology',
      'Data Structures',
    ],
  },

  // ==========================================================
  // SKILLS
  // ==========================================================

  skills: [
    {
      name: 'C#',
      icon: 'CSharpIcon',
      description:
        'Object-oriented programming, Windows Forms, file handling, CRUD applications.',
      level: 80,
      category: 'Language',
    },

    {
      name: 'Java',
      icon: 'JavaIcon',
      description:
        'Core Java concepts, OOP principles, console-based applications.',
      level: 70,
      category: 'Language',
    },

    {
      name: 'HTML',
      icon: 'HtmlIcon',
      description:
        'Semantic markup, accessible structure, modern HTML5 elements.',
      level: 85,
      category: 'Web',
    },

    {
      name: 'CSS',
      icon: 'CssIcon',
      description:
        'Responsive layouts, Flexbox, Grid, animations, and modern UI styling.',
      level: 80,
      category: 'Web',
    },

    {
      name: 'JavaScript',
      icon: 'JsIcon',
      description:
        'DOM manipulation, ES6+, event handling, async fundamentals.',
      level: 72,
      category: 'Web',
    },

    {
      name: 'MSSQL',
      icon: 'SqlIcon',
      description:
        'Database design, queries, stored procedures, and data management.',
      level: 75,
      category: 'Database',
    },
  ] as SkillItem[],

  // ==========================================================
  // EDUCATION
  // ==========================================================

  education: [
    {
      id: 1,

      degree: 'Diploma in Computer Science Engineering',

      institution:
        'Government Polytechnic Sikandara, Kanpur Dehat',

      year: '2024 – 2027 (Expected)',

      score: 'In Progress',

      scoreLabel: 'Status',

      description:
        'Pursuing a 3-year Diploma in CSE, focusing on programming, database management, software development, and computer networks.',

      current: true,
    },

    {
      id: 2,

      degree: 'Intermediate (12th Grade)',

      institution:
        'DSM Inter College Yashoda Nagar Kanpur',

      year: '2024',

      score: '84%',

      scoreLabel: 'Percentage',

      description:
        'Completed Intermediate with strong academic performance, building a foundation in Science and Mathematics.',

      current: false,
    },

    {
      id: 3,

      degree: 'High School (10th Grade)',

      institution:
        'DSM Inter College Yashoda Nagar Kanpur',

      year: '2022',

      score: '86%',

      scoreLabel: 'Percentage',

      description:
        'Completed High School with distinction, demonstrating strong academic aptitude across core subjects.',

      current: false,
    },
  ] as EducationItem[],

  // ==========================================================
  // EXPERIENCE
  // ==========================================================

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
        'Collaborated on code reviews and documentation practices.',
      ],

      skills: [
        'C#',
        'Java',
        'Problem Solving',
        'Team Collaboration',
      ],

      icon: 'BriefcaseIcon',
    },

    {
      id: 2,

      role: 'Industrial Training',

      organization: 'BTPS',

      duration: '2025 - Technical Training Program',

      type: 'Training',
     
        description: [
    'Received practical training in programming and software development.',
    'Learned coding concepts through hands-on projects and practical tasks.',
    'Worked on projects to improve problem-solving and programming skills.',
    'Gained practical exposure to software development and project implementation.',
  ],

  skills: [
    'Programming',
    'Project Development',
    'Problem Solving',
    'Coding',
  ],


      icon: 'AcademicCapIcon',
    },
  ] as ExperienceItem[],

  // ==========================================================
  // PROJECTS
  // ==========================================================

  projects: [
    {
      id: 1,

      name: 'Student Grade Tracker Management',

      description:
        'A comprehensive grade tracking system for managing student academic records, calculating marks, and generating performance reports.',

      longDescription:
        'Built a full-featured student grade management system in console. Supports adding students, recording grades per subject, automatic marks calculation, and exporting performance summaries.',

      tech: [
        'Java',
        'GitHub',
        'OOPS Concept',
      ],

      githubUrl:
        'https://github.com/KingOfSeason/Student-grade-tracker.git',

      liveUrl:
        'https://lnkd.in/p/e2H8rE3u',

      image:
        'https://tse1.mm.bing.net/th/id/OIP.cPUfVXtynFYGCRZ8fc5bnQHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',

      featured: true,
    },

    {
      id: 2,

      name: 'Student Management System',

      description:
        'A CRUD-based student management application with file handling capabilities, allowing complete data persistence without a database.',

      longDescription:
        'Developed a student management system featuring full CRUD operations — Create, Read, Update, Delete — with file-based data storage using C# file I/O, making it lightweight and portable.',

      tech: [
        'C#',
        'File Handling',
        'OOP',
        'Windows Forms',
      ],

      githubUrl:
        'https://github.com/KingOfSeason/StudentManagementSystem.git',

      liveUrl: 'https://www.linkedin.com/posts/rituraj-s-300064373_csharp-csharpdeveloper-dotnet-activity-7505288124172873728-lsfp?',

      image:
        'https://tse2.mm.bing.net/th/id/OIP.0lHHRRQqQPMAapKEHrY-cwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',

      featured: false,
    },
    {
      id: 3,

      name: 'E-Commerce website',

      description:
        'A fast, modern e-commerce platform built with Next.js 15, React 19, and Tailwind CSS, featuring server-side rendering and responsive design.',

      longDescription:
        'A fast, scalable, and fully responsive e-commerce web platform built with Next.js 15, React 19, and Tailwind CSS.',

      tech: [
        'Next.js',
        'GitHub',
        'Tailwind CSS',
      ],

      githubUrl:
        'https://github.com/KingOfSeason/E_commerce-website.git',

      liveUrl:
        'https://lnkd.in/p/d2MMZJRN',

      image:
        'https://media.istockphoto.com/id/1394653946/vector/e-commerce-ecommerce-web-banner-on-blue-background-various-shopping-icons.jpg?s=170667a&w=0&k=20&c=lqcgciJ_1HJsSSpMsT6ILhrnbTkctbnjEFZT0tRWdDE=',

      featured: true,
    },
  ] as ProjectItem[],

  // ==========================================================
  // CERTIFICATES
  // ==========================================================

  certificates: [
    {
      id: 1,

      title: 'AI and cybersecurity Awareness',

      issuer:'TCS Foundation' ,

      date: '2026',

      type: 'Online Course',

      // Yahan apni BTPS LinkedIn post ka link paste karo
      url:'https://www.linkedin.com/posts/rituraj-s-300064373_ai-for-all-activity-7451191038318235648--bKj?',
      placeholder: false,
    },

    {
      id: 2,

      title: 'Internship Completion Certificate',

      issuer: 'CodeAlpha',

      date: 'July 2026',

      type: 'Internship',

      // Yahan apni CodeAlpha LinkedIn post ka link paste karo
      url: 'https://www.linkedin.com/posts/rituraj-s-300064373_codealpha-internship-completion-activity-7467231546068930560-ShS7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFxg8rABEIaVlYQ_OISNoje6xIT2S7tMH1M',

      placeholder: false,
    },

    {
         id: 3,
        title: 'Effective Speaking and Listening Skills',
        issuer: 'Wadhwani Foundation',
        date: '2026',
        type: 'Online Course',
        url:'https://www.linkedin.com/posts/rituraj-s-300064373_wadhwani-foundation-activity-7500950034511826944-Xj4p?' ,
        placeholder: false,
    },
  ] as CertificateItem[],

  // ==========================================================
  // LANGUAGES
  // ==========================================================

  languages: [
    'Hindi',
    'English',
  ],
};