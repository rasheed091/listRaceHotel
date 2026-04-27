import React, { useEffect, useRef, useState } from 'react'
import { BookOpenText } from 'lucide-react'
import { Microscope } from 'lucide-react'
import { Plane } from 'lucide-react'
import { SquareCode } from 'lucide-react'

export default function Resume() {
    const [animate, setAnimate] = useState(false)
    const sectionRef = useRef(null)

    const [languageAnimate, setLanguageAnimate] = useState(false)
    const languageRef = useRef(null)

    const skills =[
        { id: 1, name: 'HTML, CSS', level: 85},
        {id: 2, name: 'Java Script', level: 70},
        {id: 3, name: 'Python-Django', level: 40},
        {id: 4, name: 'Ms Word & Excel', level: 100},
        {id: 5, name: 'Ms PowerPoint', level: 85},
    ]

    const experi = [
        {
           years: "2018-2020",
           Company: 'Solutech Cybercafe',
           Position: 'Cafe-Attendant'
        },
        
        {
           years: "2020-2021",
           Company: 'Davotech Cybercafe',
           Position: 'Cafe-Attendant'
        },
        {
           years: '2021-2023',
           Company: 'Lagos SCID Yaba, Lagos',
           Position: 'Typist'
        },
        {
           years: '2018-2020',
           Company: 'Pleroma Business Center',
           Position: 'IT Director'
        },

    ]

    const Hobbie = [
        {
            icon : <BookOpenText /> ,
            text : 'Reading',   
        },
        {

            icon : <Microscope /> ,
            text : 'Researching'
        },
        {

            icon : <Plane /> ,
            text : 'Traveling'
        },
        {

            icon : <SquareCode />,
            text : 'Coding'
        },
    ]

    const language = [
        {id: 1, name:'English', level: 80},
        {id: 2, name:'Yoruba', level: 80},
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry])=>{
                if (entry.isIntersecting) {
                    setAnimate(true)
                }
                if (entry.isIntersecting) {
                    setLanguageAnimate(true)
                }
            },
            {threshold: 0.3}
        )
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current) 
        }
        if (languageRef.current) {
            observer.observe(languageRef.current) 
        }
    
      return () => {
        observer.disconnect()
      }
    }, [])
    
  return (
    <>
        <div  className='bg-black bg-[url(assets/print.jpg)] h-[90vh] bg-cover bg-no-repeat'>
            <div style={{fontFamily:'Bricolage Grotesque Variable'}} className='bg-[#14141496] flex  gap-10 text-[#d6d6d6] h-[90vh] p-7'>
                <div className='w-[40%] flex flex-col gap-8'>
                    <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold mb-3 text-[20px]'>software skills</h1>
                    <div ref={sectionRef} className=''>
                        {
                            skills.map((eachskill, index)=>(
                                <div  key={eachskill.id} className='flex items-center gap-4'>
                                    <div className='w-6 h-6 mt-2 border border-gray-400 rounded flex items-center justify-center text-xs'>
                                        {eachskill.name[0]}
                                    </div>
                                    <span className='w-40 text-gray-300 text-2'>
                                        {eachskill.name}
                                    </span>
                                    <div className='relative flex-1 h-1 bg-gray-600 rounded'>
                                        <div style={{width: animate ? `${eachskill.level}%` : '0%'}} className='h-1 bg-white rounded transition-all duration-1000 ease-out'></div>
                                        <div className='absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full' style={{left: animate ?`${eachskill.level}%` : '0%'}}></div>
                                    </div>
                                </div>
                                
                            ))
                        }
                    </div>

                    <div className=' w-[80%]'>
                        <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold mb-3 text-[20px]'>Languages</h1>
                        <div ref={languageRef} className='mt-4 space-y-4'>
                            {
                                language.map((eachlang)=>(
                                    <div key={eachlang.id} className='flex items-center gap-4'>
                                        <div className='w-6 h-6 border border-gray-400 rounded flex items-center justify-center text-xs'>
                                            {eachlang.name[0]}
                                        </div>
                                        <span className='w-24 text-gray-300 text-sm'>
                                            {eachlang.name}
                                        </span>
                                        <div className='relative flex-1 h-0.5 bg-gray-600 rounded '>
                                            <div style={{width: animate ?`${eachlang.level}%`: '0%'}} className='h-1 bg-white rounded transition-all duration-1000 ease-out'></div>
                                            <div style={{left: animate ?`${eachlang.level}%`: '0%'}} className='absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full'></div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                    <div>
                        <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold mb-3 text-[20px]'>personal skills</h1>
                        <p className='capitalize'>creative- team work- organization </p>
                    </div>
                </div>
                <div>
                    <div className='mb-3'>
                        <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold mb-3 text-[20px]'>Experience</h1>
                        <div className=' justify-center '>
                            {
                                experi.map((eachexperi, index)=>(
                                    <div className='flex gap-3 p-3'>
                                        <div className='bg-[#4d81f3] flex justify-center w-[18%] p-2 rounded-[300%] relative'>
                                            <h1 className='text-[13px] text-center font-bold'>{eachexperi.years}</h1>
                                            {index  !== experi.length-1 &&(<span className='absolute top-full left-1/2 -translate-x-1/2 w-px h-10 bg-white'></span>)}
                                            
                                        </div>
                                        <div>
                                            <h1 className='font-bold uppercase'>{eachexperi.Company} <br /> <span className='capitalize font-light'>{eachexperi.Position}</span></h1>
                                        </div>
                                    </div>
                                    
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold mb-3 text-[20px]' >education</h1>
                        <div className='mb-3'>
                            <p className='capitalize font-extrabold'>Diploma in Computer Engineering <br /> <span className='font-light'>Pleroma Computer instituted</span></p>
                        </div>
                        <div>
                            <p className='capitalize font-extrabold'>FullStack Web Developer <br /> <span className='font-light'>Parach ICT Academy</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mb-4'>
                        <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold text-[20px] mb-3'>what i can do ? </h1>
                        <p className='capitalize'>Build complete web application</p>
                        <p className='capitalize'>Create and Connect APIs</p>
                        <p className='capitalize'>Deploy and maintain projects </p>
                    </div>
                    <div className='mb-4'>
                        <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold text-[20px] mb-5'>design skills </h1>
                        <p className='capitalize '>responsive design</p>
                        <p className='capitalize '>Visual Hierarchy</p>
                        <p className='capitalize '>CSS/Tailwind Styling</p>
                    </div>
                    <div className=''>
                        <h1 className='uppercase text-center underline underline-offset-8 decoration-[#5076a7] font-extrabold text-[20px]'>hobbies & interest</h1>
                        <div className='grid grid-cols-2 justify-center items-center gap-4 p-4'>
                            {
                                Hobbie.map((eachHobbie)=>(
                                    <div className='flex flex-col items-center gap-3 text-center  '>
                                        <div className='w-14 h-14 flex items-center justify-center border-4 border-white rounded-full'>
                                            <span className='text-xl'>
                                                {eachHobbie.icon}
                                            </span>
                                        </div>
                                        <p className='text-sm text-gray-300'>
                                            {eachHobbie.text}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </>
  )
}
