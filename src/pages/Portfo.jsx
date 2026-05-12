import React from 'react'
import { Github, MessageCircleDashed } from 'lucide-react'

import img1 from "../assets/blog.jpg";
import img2 from "../assets/blog2.jpg";
import img3 from "../assets/calnew.jpg";
import img4 from "../assets/store.jpg";
import img5 from "../assets/store2.jpg";
import img6 from "../assets/listrace.jpg";
import img7 from "../assets/listrace2.jpg";
import img8 from "../assets/weather.jpg";

export default function Portfo() {

    const projects = [
        {
            name: 'Blog',
            Image1: img1,
            Image2: img2,
            Caption:
                'A deep dive into building a multi-functional app using real-time APIs and complex logic engines.',
            github: 'https://github.com/rasheed091/Store',
        },

        {
            name: 'Store',
            Image1: img4,
            Image2: img5,
            Caption:
                'A seamless e-commerce platform featuring integrated payment processing, dynamic product filtering, and a responsive shopping cart.',
            github: 'https://github.com/rasheed091/mystore',
        },

        {
            name: 'Calculator & Weather App',
            Image1: img3,
            Image2: img8,
            Caption:
                'A versatile utility suite combining real-time weather forecasting with a high-precision calculation engine for daily efficiency.',
            github: 'https://github.com/rasheed091/List-Race',
        },

        {
            name: 'List Race',
            Image1: img6,
            Image2: img7,
            Caption:
                'Streamlining productivity through a dynamic interface that tracks progress from start to finish with racing-inspired precision.',
            github: 'https://github.com/rasheed091/listRaceHotel',
        },
    ]

    return (
        <>
            <div
                style={{ fontFamily: 'Bricolage Grotesque Variable' }}
                className='bg-black text-white py-10'
            >

                <div className='px-6 md:px-12'>
                    <h1 className='tracking-wider uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold mb-3 text-3xl md:text-5xl'>
                        Portfolio
                    </h1>

                    <p className='capitalize text-sm md:text-lg'>
                        Here are some of the projects I've worked on as a full-stack developer
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 mt-10'>

                    {
                        projects.map((eachPro, index) => (

                            <div
                                key={index}
                                className='border border-gray-500 rounded-3xl bg-[#272727ad] p-6'
                            >

                                <h1 className='capitalize font-extrabold text-2xl mb-4'>
                                    {eachPro.name}
                                </h1>

                                <div className='grid grid-cols-2 gap-4'>
                                    <img
                                        src={eachPro.Image1}
                                        alt=""
                                        className='rounded-xl h-40 w-full object-cover'
                                    />

                                    <img
                                        src={eachPro.Image2}
                                        alt=""
                                        className='rounded-xl h-40 w-full object-cover'
                                    />
                                </div>

                                <p className='mt-4 text-sm md:text-base'>
                                    {eachPro.Caption}
                                </p>

                                <div className='flex justify-end gap-4 mt-5'>

                                    <a
                                        target='_blank'
                                        rel='noreferrer'
                                        href={eachPro.github}
                                    >
                                        <Github className='hover:text-blue-400 duration-300' />
                                    </a>

                                    <MessageCircleDashed className='hover:text-blue-400 duration-300 cursor-pointer' />

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>
        </>
    )
}