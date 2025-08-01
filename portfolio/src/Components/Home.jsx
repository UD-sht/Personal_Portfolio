import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { PiSuitcaseSimple } from 'react-icons/pi';
import { heroText } from '../Datas/HomeData.js'
import { ud } from '../Images/image.js';

const Home = () => {

    return (
        <>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Hero Text */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                                {heroText.heading}{' '}
                                <span className="text-blue-600">{heroText.name}</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-gray-600 font-medium">{heroText.subheading}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">{heroText.description}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                                <IoIosMail className='w-5 h-5' />
                                <span>Get In Touch</span>
                            </button>
                            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center space-x-2">
                                <PiSuitcaseSimple className='w-5 h-5' />
                                <span>View Projects</span>
                            </button>
                        </div>

                        {/* Statistics for Future*/}
                        {/* <div className="grid grid-cols-3 gap-8 pt-8">
                        {statistics.map((stat, idx) => (
                            <div key={idx} >
                                <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</div>
                                <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div> */}
                    </div>

                    {/* Right Content - Avatar/Image Area */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Decorative Background Circles */}
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-100 rounded-full opacity-60 -z-10"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full opacity-40 -z-10"></div>

                            {/* Main Gradient Circle */}
                            <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-xl overflow-hidden relative">
                                <img
                                    src={ud}
                                    alt="Udhay Shrestha"
                                    className="w-64 h-64 rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
};

export default Home;
