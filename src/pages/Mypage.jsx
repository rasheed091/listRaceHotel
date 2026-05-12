import React from 'react'
import {
  Facebook,
  Instagram,
  Twitter,
  Send,
  MessageCircleQuestionMark,
  Scan,
} from 'lucide-react'

export default function Mypage() {

  return (
    <>

      <div className='bg-[url(assets/black.jpg)] min-h-screen bg-no-repeat bg-center bg-cover w-full'>

        <div className='bg-[#0000007a] min-h-screen flex flex-col justify-between'>

          {/* HERO SECTION */}

          <div className='px-6 md:px-14 lg:px-24 pt-28 md:pt-36'>

            <div className='leading-tight'>

              <h1
                style={{ fontFamily: 'Bricolage Grotesque Variable' }}
                className='text-[32px] md:text-[50px] uppercase text-white font-bold'
              >
                Rasheed
              </h1>

              <h2
                style={{ fontFamily: 'Luckiest Guy' }}
                className='text-[45px] md:text-[75px] text-white'
              >
                Abdulsalam
              </h2>

              <p
                style={{ fontFamily: 'DM Mono' }}
                className='text-[14px] md:text-[22px] tracking-[6px] md:tracking-[14px] text-[#d6d6d6] uppercase mt-2'
              >
                Web Developer
              </p>

            </div>

            {/* BUTTONS */}

            <div
              style={{ fontFamily: 'Bricolage Grotesque Variable' }}
              className='flex flex-col sm:flex-row gap-5 mt-12'
            >

              <button className='border-none px-10 py-3 rounded-full bg-[#00000042] text-white hover:bg-white hover:text-black duration-500 w-full sm:w-fit'>

                Portfolio

              </button>

              <button className='border-none px-10 py-3 rounded-full bg-[#00000042] text-white hover:bg-white hover:text-black duration-500 w-full sm:w-fit'>

                Resume

              </button>

            </div>

          </div>

          {/* FOOTER ICONS */}

          <div className='flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-14 lg:px-24 pb-10 text-[#dfdede]'>

            {/* SOCIAL ICONS */}

            <div className='flex items-center gap-5'>

              <a href="#">
                <Facebook className='hover:text-blue-400 duration-300 cursor-pointer' />
              </a>

              <a href="#">
                <Instagram className='hover:text-pink-400 duration-300 cursor-pointer' />
              </a>

              <a href="#">
                <Twitter className='hover:text-sky-400 duration-300 cursor-pointer' />
              </a>

              <a href="#">
                <Send className='hover:text-blue-300 duration-300 cursor-pointer' />
              </a>

              <a href="#">
                <MessageCircleQuestionMark className='hover:text-green-400 duration-300 cursor-pointer' />
              </a>

            </div>

            {/* SCAN ICON */}

            <div>

              <Scan className='hover:text-[#5076a7] duration-300 cursor-pointer' />

            </div>

          </div>

        </div>

      </div>

    </>
  )
}