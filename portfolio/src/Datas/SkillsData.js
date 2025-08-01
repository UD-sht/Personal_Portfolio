import { IoServerSharp } from 'react-icons/io5'
import { aws, lv, lx, php, psql, rt } from '../Images/image.js'
import { PiNetwork } from 'react-icons/pi'

const skills = [
    {
        name: "Laravel",
        level: "Expert",
        icon: (
            <img
                src={lv}
                alt="Laravel"
                className="w-20 h-10"
            />
        ),
    },
    {
        name: "PHP",
        level: "Expert",
        icon: (
            <img
                src={php}
                alt="Laravel"
                className="w-10 h-10"
            />
        ),
    },
    {
        name: "MySQL",
        level: "Advanced",
        icon: (
            <IoServerSharp className="w-8 h-8 text-blue-600" />
        ),
    },
    {
        name: "PostgreSQL",
        level: "Advanced",
        icon: (
            <img
                src={psql}
                alt='PostgreSQL'
                className="w-10 h-10"
            />
        ),
    },
    {
        name: "Networking",
        level: "Intermediate",
        icon: (
            <PiNetwork className='w-10 h-10' />
        ),
    },
    {
        name: "React",
        level: "Intermediate",
        icon: (
            <img
                src={rt}
                alt='PostgreSQL'
                className="w-10 h-10"
            />
        ),
    },
    {
        name: "Linux",
        level: "Intermediate",
        icon: (
            <img
                src={lx}
                alt='PostgreSQL'
                className="w-15 h-10"
            />
        ),
    },
    {
        name: "AWS",
        level: "Intermediate",
        icon: (
            <img
                src={aws}
                alt='PostgreSQL'
                className="w-15 h-10"
            />
        ),
    },
]

export default skills