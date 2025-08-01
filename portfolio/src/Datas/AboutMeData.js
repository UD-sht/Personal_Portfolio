import { ImLab } from 'react-icons/im'
import { IoServer, IoShareSocialSharp } from 'react-icons/io5'

const aboutDescription = [
    "I'm a passionate Laravel developer with over 5 years of experience building robust web applications. I specialize in creating scalable backend solutions and have a strong foundation in modern PHP development practices.",
    "My expertise includes developing RESTful APIs, implementing complex business logic, database optimization, and integrating third-party services. I'm committed to writing clean, testable code and following industry best practices."
  ]

  const whatIDo = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: 'Backend Development',
      description: 'Laravel & PHP applications with clean architecture',
    },
    {
      icon: <IoServer className="text-white w-6 h-6" />,
      title: 'Database Design',
      description: 'Optimized database schemas and query performance',
    },
    {
      icon: <IoShareSocialSharp className="text-white w-6 h-6" />,
      title: 'API Development',
      description: 'RESTful APIs and third-party integrations',
    },
    {
      icon: <ImLab className="text-white w-6 h-6" />,
      title: 'Full-Stack Solutions',
      description: 'Complete web applications from concept to deployment',
    },
  ]

  export { aboutDescription, whatIDo }