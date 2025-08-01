import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { IoMailSharp } from 'react-icons/io5'

const Footer = () => {
    const socialLinks = [
        {
            name: "GitHub",
            href: "#",
            icon: (
                <FaGithub className='w-6 h-6' />
            ),
        },
        {
            name: "LinkedIn",
            href: "#",
            icon: (
                <FaLinkedinIn className='w-6 h-6' />
            ),
        },
        {
            name: "Email",
            href: "mailto:Uday@example.com",
            icon: (
                <IoMailSharp className='w-6 h-6' />
            ),
        },
    ]


    return (
        <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative">

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                {/* Logo and Branding */}
                <div className="mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-6">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">U</span>
                        </div>
                        <span className="text-white font-semibold text-base">Uday Shrestha</span>
                    </div>
                    <p className="text-blue-400 text-lg font-medium mb-6">Laravel Developer</p>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                        Crafting exceptional web experiences with Laravel and modern technologies.
                    </p>
                </div>


                {/* Social Links */}
                <div className="flex justify-center space-x-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                            aria-label={link.name}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 Uday shrestha. All rights reserved.
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer