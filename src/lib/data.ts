export interface ProjectItem {
  id: string;
  pid: string;
  type: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  linkText: string;
  image: string | null;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: '01',
    pid: 'PID_001',
    type: 'private',
    title: 'Social Media Automation',
    description:
      'Private application for automating social media scheduling and posting. Built scheduling dashboard with calendar interface, content management tools, and analytics integration. Implemented automation workflows for multiple social platforms.',
    tags: ['REACT', 'TYPESCRIPT', 'EXPRESS', 'CRON_JOBS'],
    year: '0',
    link: '#',
    linkText: 'Private_Access',
    image: null
  },
  {
    id: '02',
    pid: 'PID_002',
    type: 'public',
    title: 'Capacity Building',
    description:
      'Educational organization platform for professional development programs. Developed course management dashboard, participant tracking system, and content delivery interface. Implemented responsive design for accessibility across devices.',
    tags: ['REACT', 'JAVASCRIPT', 'NODE.JS', 'MONGODB'],
    year: '2025',
    link: 'https://capacity-building.org/',
    linkText: 'View_Portal',
    image: null
  },
  {
    id: '03',
    pid: 'PID_003',
    type: 'public',
    title: 'Agent AI',
    description:
      'AI-powered agent platform for automation and task management. Built product interface for agent configuration, monitoring, and analytics. Integrated LLM APIs for intelligent task execution and workflow automation.',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'OPENAI_API', 'TAILWIND'],
    year: '2025',
    link: 'https://agentai.ai/',
    linkText: 'Explore_Platform',
    image: null
  },
  {
    id: '04',
    pid: 'PID_004',
    type: 'public',
    title: 'Bakti Komdigi LMS',
    description:
      'Learning management system with video hosting capabilities. Developed frontend UI components for course management, student progress tracking, and video player integration. Collaborated on backend API integration for course delivery platform.',
    tags: ['REACT', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL'],
    year: '2024',
    link: 'https://baktikomdigi.id/',
    linkText: 'View_Platform',
    image: null
  },
  {
    id: '05',
    pid: 'PID_005',
    type: 'public',
    title: 'Supreme Solar',
    description:
      'Full-stack development for an Indonesian solar energy company. Built responsive web platform with product catalog, project showcase, and customer inquiry system. Integrated with backend APIs for lead management.',
    tags: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'TAILWIND'],
    year: '2023',
    link: 'https://supremesolar.id',
    linkText: 'Visit_Site',
    image: null
  }
];
