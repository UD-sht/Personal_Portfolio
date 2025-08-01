import skills from "../Datas/SkillsData"

const Skills = () => {

    const getLevelColor = (level) => {
        switch (level) {
            case "Expert":
                return "text-green-600 bg-green-100"
            case "Advanced":
                return "text-blue-600 bg-blue-100"
            case "Intermediate":
                return "text-orange-600 bg-orange-100"
            default:
                return "text-gray-600 bg-gray-100"
        }
    }

    return (
        <section className=" py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Technologies and tools I use to bring ideas to life</p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-6 shadow-sm transition-shadow duration-300 text-center group "
                        >
                            {/* Icon Container */}
                            <div
                                className={`w-16 h-16rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                            >
                                {skill.icon}
                            </div>

                            {/* Skill Name */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">{skill.name}</h3>

                            {/* Skill Level */}
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(skill.level)}`}>
                                {skill.level}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills