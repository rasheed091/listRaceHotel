import React from 'react'
import { Scan } from 'lucide-react'

export default function About() {
  return (
    <div className='bg-black bg-[url(assets/richie.png)] bg-no-repeat bg-right bg-cover md:bg-contain min-h-screen'>

      <div
        className='text-[#c4c1c1] px-6 md:px-16 lg:px-28 py-7'
        style={{ fontFamily: 'Bricolage Grotesque Variable' }}
      >

        {/* Header */}
        <div>
          <h1 className='text-3xl md:text-5xl uppercase mt-9 font-extrabold underline underline-offset-8 decoration-[#5076a7]'>
            About
          </h1>
          <p className='mt-3 text-sm md:text-base'>
            harbdulsalamrasheed33@gmail.com
          </p>
        </div>

        {/* Text */}
        <div className='w-full md:w-[70%] lg:w-[40%] mt-8'>
          <p className='text-sm md:text-base leading-relaxed'>
            I’m a passionate web developer who enjoys creating clean, responsive, and user-friendly websites and web applications...
          </p>
        </div>

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center md:items-center gap-8 mt-10'>

          {/* Address */}
          <div className='w-full md:w-[50%] lg:w-[37%] text-center md:text-left'>
            <h1>Ibadan, Oyo State.</h1>

            <div className='flex items-center gap-3 mt-2'>
              <span className='flex-1 h-px bg-[#5076a7]'></span>
              <span className='text-xs md:text-sm'>
                Balogun Str. Opposite Akinyele L.G.C
              </span>
              <span className='flex-1 h-px bg-[#5076a7]'></span>
            </div>
          </div>

          {/* Icon */}
          <div>
            <Scan size={40} />
          </div>

        </div>

      </div>
    </div>
  )
}