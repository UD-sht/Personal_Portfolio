import React from 'react'
import { IoMdDownload } from 'react-icons/io';

const Nav = () => {

    const navitems = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Skills', href: '#' },
        { name: 'Projects', href: '#' },
        { name: 'Experience', href: '#' },
        { name: 'Contact', href: '#' },
      ];

  return (
    <>
        <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="font-semibold text-gray-900">Udhay Shrestha</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navitems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Resume Button */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <IoMdDownload />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav