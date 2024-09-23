/* eslint-disable max-len */
import featuredProjects from './featured';
import projects from './projects';

module.exports = {
  email: 'keshavsharma10x@gmail.com',
  featuredProjects,
  projects,
  skills: ['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Redux.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Socket.IO', 'Webpack',  'GraphQL', 'AWS', 'Jest', 'RTL', 'Enzyme', 'MySQL', 'MongoDB', 'HTML5', 'CSS3','Git'],
  jobs: [
    {
      title: 'Senior Software Developer',
      company: 'Divami Design Labs',
      url: 'https://www.divami.com/',
      range: 'Feb 2023 - Present',
      location: 'Hyderabad, India',
      description: [
        'Revolutionized the front-end architecture by developing highly reusable React.js components, boosting maintainability and reusability by 60%.',
        'Supercharged system performance, optimizing load times and reducing latency by 30% across all major browsers and platforms.',
        'Championed the transformation of intricate UI/UX designs into intuitive, high-performing interfaces, driving user engagement and satisfaction.',
        'Enhanced code reliability by implementing rigorous testing frameworks using React Testing Library, cutting down bugs and release time.',
        'Secured the system infrastructure by implementing cutting-edge authentication and authorization protocols, ensuring robust data security.',
      ],
    },
    {
      title: 'Founding Engineer',
      company: 'FogTeams (IIT Bombay)',
      url: 'https://www.iitb.ac.in/',
      range: 'Jan 2022 - Feb 2023',
      location: 'Remote',
      description: [
        'Integrated Three.js for creating immersive 3D environments that enhance the virtual office experience, setting a unique standard in remote work environments.',
        'Implemented real-time media recording and playback, allowing teams to create, share, and review content effortlessly.',
        'Optimized data handling with Zustand for lightweight state management and Solr for efficient and scalable search functionalities within the platform.',
        'Leveraged AWS CloudWatch Logs and S3 for real-time logging and efficient data storage solutions.',
        'Achieved groundbreaking 70% performance optimization through advanced techniques such as code splitting, lazy loading, and tree shaking using Webpack and React Suspense, drastically reducing load times and enhancing user interactions.',
      ],
    },
    {
      title: 'Front-end Developer',
      company: 'Cumulations Technologies',
      url: 'https://www.cumulations.com/',
      range: 'July 2020 - Jan 2022',
      location: 'Remote',
      description: [
        'Architected responsive and high-performance interfaces using React.js and Material-UI, improving cross-device compatibility and user experience.',
        'Launched an admin portal, allowing real-time content moderation and improving submission management efficiency by 40%.',
        'Integrated RESTful API services, ensuring flawless data synchronization between front-end interfaces and back-end systems.',
        'Elevated coding standards, driving a 25% efficiency boost in team productivity through best practices in front-end architecture.',
      ],
    },
  ],
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/keshavsharma333',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/keshav-sharma-9324a9a7/',
    }
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/jrgarciadev',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/jrgarciadev',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Blog',
      url: 'https://blog.jrgarciadev.com',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },
};
