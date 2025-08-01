import { FaLocationDot } from 'react-icons/fa6'
import { LuBadgeCheck } from 'react-icons/lu'
import { aboutDescription, whatIDo } from '../Datas/AboutMeData'

const AboutMe = () => {

    return (
        <div className='bg-gray-100 py-20'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Learn more about my journey as a Laravel developer and what drives my passion for web development.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - About Text */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            {aboutDescription.map((paragraph, index) => (
                                <p key={index} className="text-gray-600 text-lg leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                                <FaLocationDot className='text-blue-600' />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Location</h4>
                                    <p className="text-gray-600">Kathmandu, Nepal</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                                <LuBadgeCheck className='text-blue-600' />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Experience</h4>
                                    <p className="text-gray-600">5+ Years</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - What I Do */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">What I Do</h3>
                        <div className="space-y-6">
                            {whatIDo.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
