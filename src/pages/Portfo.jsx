import React from 'react'
import { Github } from 'lucide-react'
import { MessageCircleDashed } from 'lucide-react'
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
            name: 'Blog ',
            Image1: img1,
            Image2: img2,
            Caption: 'A deep dive into building a multi-functional app using real-time APIs and complex logic engines.',
            icon: Github,
            github: 'https://github.com/rasheed091/Store',            
        },
        {
            name: 'Store ',
            Image1: img4,
            Image2: img5,
            Caption: 'A seamless e-commerce platform featuring integrated payment processing, dynamic product filtering, and a responsive shopping cart.',
            github: 'https://github.com/rasheed091/mystore',
            icon: Github,
        },
        {
            name: 'Calculator & Weather App',
            Image1: img3,
            Image2: img8,
            Caption: 'A versatile utility suite combining real-time weather forecasting with a high-precision calculation engine for daily efficiency.',
            github: 'https://github.com/rasheed091/List-Race',
            icon: Github,
        },
        {
            name: 'List Race',
            Image1: img6,
            Image2: img7,
            Caption: 'Streamlining productivity through a dynamic interface that tracks progress from start to finish with racing-inspired precision.',
            github: 'https://github.com/rasheed091/listRaceHotel',
            icon: Github,
        },
    ]
  return (
    <>
        <div style={{fontFamily:'Bricolage Grotesque Variable'}} className='bg-[url(assets/reviev.jpg)] h-[110vh] bg-cover bg-no-repeat text-white'>
            <div className='px-6'>
                <h1 className='tracking-wider uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold mb-3 text-[35px]'>Portfolio</h1>
                <p className='capitalize '>here are some of the projects i've  work on as full-stack developer</p>
            </div>
            <div className=' w-full px-7 grid grid-cols-2 justify-center gap-4 mt-3'>
                {
                    projects.map((eachPro)=>(
                        <div className=' border border-[#d1d1d1] rounded-3xl bg-[#272727ad] p-6 '>
                            <h1 className='capitalize font-extrabold'>{eachPro.name}</h1>
                            <div className='w-[50%] flex items-center gap-4'>
                                <img src={eachPro.Image1} alt="" />
                                <img src={eachPro.Image2} alt="" />
                            </div>
                            <p className='mt-3'>{eachPro.Caption}</p>
                            <div className='flex justify-end gap-4'>
                                <a target='_blank' href={eachPro.github}>
                                    <Github />
                                </a>
                                <MessageCircleDashed />
                            </div> 
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}
