import React from 'react'

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Senior Laravel Developer",
            company: "Dryice Tech",
            period: "2024 - Present",
            description:
                "Lead development of enterprise web applications using Laravel framework. Mentor junior developers and architect scalable solutions.",
            borderColor: "border-l-blue-500",
            current: true,
        },

    ]

    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Work Experience</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">My professional journey as a Laravel developer</p>
                </div>

                {/* Experience Timeline */}
                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            className={`bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${experience.borderColor} border-l-4`}
                        >
                            <div className="p-6 md:p-8">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div className="mb-2 md:mb-0">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{experience.title}</h3>
                                        <p className="text-blue-600 font-medium text-lg">{experience.company}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                                            {experience.period}
                                        </span>
                                        {experience.current && (
                                            <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                                                Current
                                            </span>
                                        )}
                                    </div>
                                </div>
                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience