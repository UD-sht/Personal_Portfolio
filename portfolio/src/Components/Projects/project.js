import React from 'react'
import { FaGithub } from 'react-icons/fa6';
import { GoEye } from 'react-icons/go';
import { MdArrowRightAlt } from 'react-icons/md';

const Project = () => {
    
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description:
                "Full-featured e-commerce platform built with Laravel, featuring user authentication, payment integration, and admin dashboard.",
            status: "Live",
            statusColor: "bg-green-500",
            technologies: ["Laravel", "MySQL", "Vue.js", "Stripe API"],
        },
        {
            id: 2,
            title: "Task Management System",
            description:
                "Collaborative task management application with real-time updates, file sharing, and team collaboration features.",
            status: "In Development",
            statusColor: "bg-orange-500",
            technologies: ["Laravel", "WebSockets", "Redis", "Bootstrap"],
        },
        {
            id: 3,
            title: "API Gateway Service",
            description:
                "RESTful API gateway service handling authentication, rate limiting, and request routing for microservices architecture.",
            status: "Completed",
            statusColor: "bg-blue-500",
            technologies: ["Laravel", "Docker", "PostgreSQL", "JWT"],
        },
    ]

    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Featured <span className="text-orange-500">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Real-world solutions that showcase my expertise and passion for excellence
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                        >
                            {/* Project Header*/}
                            <div className={` p-8 relative`}>
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`${project.statusColor} text-white text-xs font-medium px-3 py-1 rounded-full`}>
                                        {project.status}
                                    </span>
                                </div>

                                <div className="flex justify-center items-center h-32">{project.icon}</div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                                        <FaGithub />
                                        Code
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                                        <GoEye />
                                        Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-12">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center gap-2">
                        View All Projects
                        <MdArrowRightAlt className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Project