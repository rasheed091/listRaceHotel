import React, { useEffect, useRef, useState } from 'react'
import {
  BookOpenText,
  Microscope,
  Plane,
  SquareCode,
} from 'lucide-react'

export default function Resume() {

  const [animate, setAnimate] = useState(false)
  const [languageAnimate, setLanguageAnimate] = useState(false)

  const sectionRef = useRef(null)
  const languageRef = useRef(null)

  const skills = [
    { id: 1, name: 'HTML & CSS', level: 85 },
    { id: 2, name: 'JavaScript', level: 70 },
    { id: 3, name: 'Python - Django', level: 40 },
    { id: 4, name: 'MS Word & Excel', level: 100 },
    { id: 5, name: 'MS PowerPoint', level: 85 },
  ]

  const experience = [
    {
      years: '2018 - 2020',
      company: 'Solutech Cybercafe',
      position: 'Cafe Attendant',
    },

    {
      years: '2020 - 2021',
      company: 'Davotech Cybercafe',
      position: 'Cafe Attendant',
    },

    {
      years: '2021 - 2023',
      company: 'Lagos SCID Yaba, Lagos',
      position: 'Typist',
    },

    {
      years: '2023 - Present',
      company: 'Pleroma Business Center',
      position: 'IT Director',
    },
  ]

  const hobbies = [
    {
      icon: <BookOpenText />,
      text: 'Reading',
    },

    {
      icon: <Microscope />,
      text: 'Researching',
    },

    {
      icon: <Plane />,
      text: 'Traveling',
    },

    {
      icon: <SquareCode />,
      text: 'Coding',
    },
  ]

  const languages = [
    { id: 1, name: 'English', level: 80 },
    { id: 2, name: 'Yoruba', level: 80 },
  ]

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setAnimate(true)
          setLanguageAnimate(true)
        }

      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    if (languageRef.current) {
      observer.observe(languageRef.current)
    }

    return () => observer.disconnect()

  }, [])

  return (
    <>

      <div className='bg-black bg-[url(assets/print.jpg)] bg-cover bg-no-repeat'>

        <div
          style={{ fontFamily: 'Bricolage Grotesque Variable' }}
          className='bg-[#141414c9] min-h-screen text-[#d6d6d6] p-5 md:p-10'
        >

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

            {/* LEFT SECTION */}

            <div className='flex flex-col gap-10'>

              {/* SOFTWARE SKILLS */}

              <div>

                <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold text-[20px] mb-5'>
                  Software Skills
                </h1>

                <div
                  ref={sectionRef}
                  className='space-y-6'
                >

                  {
                    skills.map((skill) => (

                      <div
                        key={skill.id}
                        className='flex flex-col gap-2'
                      >

                        <div className='flex items-center gap-3'>

                          <div className='w-6 h-6 border border-gray-400 rounded flex items-center justify-center text-xs'>
                            {skill.name[0]}
                          </div>

                          <span className='text-sm md:text-base'>
                            {skill.name}
                          </span>

                        </div>

                        <div className='relative h-1 bg-gray-600 rounded'>

                          <div
                            style={{
                              width: animate
                                ? `${skill.level}%`
                                : '0%',
                            }}
                            className='h-1 bg-white rounded transition-all duration-1000 ease-out'
                          ></div>

                          <div
                            style={{
                              left: animate
                                ? `${skill.level}%`
                                : '0%',
                            }}
                            className='absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full'
                          ></div>

                        </div>

                      </div>
                    ))
                  }

                </div>

              </div>

              {/* LANGUAGES */}

              <div>

                <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold text-[20px] mb-5'>
                  Languages
                </h1>

                <div
                  ref={languageRef}
                  className='space-y-6'
                >

                  {
                    languages.map((lang) => (

                      <div
                        key={lang.id}
                        className='flex flex-col gap-2'
                      >

                        <div className='flex items-center gap-3'>

                          <div className='w-6 h-6 border border-gray-400 rounded flex items-center justify-center text-xs'>
                            {lang.name[0]}
                          </div>

                          <span className='text-sm md:text-base'>
                            {lang.name}
                          </span>

                        </div>

                        <div className='relative h-1 bg-gray-600 rounded'>

                          <div
                            style={{
                              width: languageAnimate
                                ? `${lang.level}%`
                                : '0%',
                            }}
                            className='h-1 bg-white rounded transition-all duration-1000 ease-out'
                          ></div>

                          <div
                            style={{
                              left: languageAnimate
                                ? `${lang.level}%`
                                : '0%',
                            }}
                            className='absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full'
                          ></div>

                        </div>

                      </div>
                    ))
                  }

                </div>

              </div>

              {/* PERSONAL SKILLS */}

              <div>

                <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold text-[20px] mb-5'>
                  Personal Skills
                </h1>

                <p className='capitalize leading-8'>
                  Creative • Team Work • Organization • Communication
                </p>

              </div>

            </div>

            {/* MIDDLE SECTION */}

            <div>

              {/* EXPERIENCE */}

              <div className='mb-10'>

                <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold text-[20px] mb-6'>
                  Experience
                </h1>

                <div className='space-y-6'>

                  {
                    experience.map((item, index) => (

                      <div
                        key={index}
                        className='flex gap-4'
                      >

                        <div className='relative'>

                          <div className='bg-[#4d81f3] w-[75px] h-[75px] rounded-full flex items-center justify-center text-center p-2'>

                            <h1 className='text-[11px] font-bold'>
                              {item.years}
                            </h1>

                          </div>

                          {
                            index !== experience.length - 1 && (
                              <span className='absolute left-1/2 top-full -translate-x-1/2 w-[2px] h-10 bg-white'></span>
                            )
                          }

                        </div>

                        <div>

                          <h1 className='font-bold uppercase text-sm md:text-base'>
                            {item.company}
                          </h1>

                          <p className='capitalize text-gray-300 text-sm md:text-base'>
                            {item.position}
                          </p>

                        </div>

                      </div>
                    ))
                  }

                </div>

              </div>

              {/* EDUCATION */}

              <div>

                <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold text-[20px] mb-6'>
                  Education
                </h1>

                <div className='mb-5'>

                  <h1 className='font-bold capitalize'>
                    Diploma in Computer Engineering
                  </h1>

                  <p className='text-gray-300'>
                    Pleroma Computer Institute
                  </p>

                </div>

                <div>

                  <h1 className='font-bold capitalize'>
                    Full Stack Web Development
                  </h1>

                  <p className='text-gray-300'>
                    Parach ICT Academy
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT SECTION */}

            <div>

              {/* WHAT I CAN DO */}

              <div className='mb-10'>

                <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold text-[20px] mb-5'>
                  What I Can Do
                </h1>

                <div className='space-y-3 capitalize'>

                  <p>Build complete web applications</p>

                  <p>Create and connect APIs</p>

                  <p>Deploy and maintain projects</p>

                </div>

              </div>

              {/* DESIGN SKILLS */}

              <div className='mb-10'>

                <h1 className='uppercase underline underline-offset-8 decoration-[#5076a7] font-extrabold text-[20px] mb-5'>
                  Design Skills
                </h1>

                <div className='space-y-3 capitalize'>

                  <p>Responsive Design</p>

                  <p>Visual Hierarchy</p>

                  <p>CSS / Tailwind Styling</p>

                </div>

              </div>

              {/* HOBBIES */}

              <div>

                <h1 className='uppercase text-center underline underline-offset-8 decoration-[#5076a7] font-extrabold text-[20px] mb-8'>
                  Hobbies & Interests
                </h1>

                <div className='grid grid-cols-2 gap-6'>

                  {
                    hobbies.map((hobbie, index) => (

                      <div
                        key={index}
                        className='flex flex-col items-center text-center gap-3'
                      >

                        <div className='w-16 h-16 border-4 border-white rounded-full flex items-center justify-center'>

                          <span className='text-xl'>
                            {hobbie.icon}
                          </span>

                        </div>

                        <p className='text-sm text-gray-300'>
                          {hobbie.text}
                        </p>

                      </div>
                    ))
                  }

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}