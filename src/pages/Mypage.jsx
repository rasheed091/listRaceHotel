import React from 'react'
import { Facebook } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Send } from 'lucide-react'
import { MessageCircleQuestionMark } from 'lucide-react'
import { Scan } from 'lucide-react'

export default function Mypage() {
  return (
    <>
        <div className='bg-[url(assets/black.jpg)] h-[90vh] bg-no-repeat bg-center bg-cover w-full'>
            <div className='py-30 px-30 text-white'>
                <div className='leading-none'>
                    <h1 style={{fontFamily:'Bricolage Grotesque Variable'}} className='text-[40px] uppercase '>Rasheed</h1>
                    <h2 className='text-[55px]' style={{fontFamily:'Luckiest Guy'}}>Abdulsalam</h2>
                    <p style={{fontFamily:'DM Mono'}} className='text-[20px] tracking-[14px]'>Web Developer</p>
                </div>
                <div style={{fontFamily:'Bricolage Grotesque Variable'}} className='flex gap-9 mt-17'>
                    <p className='border-none px-11 py-2 rounded-[30px] bg-[#00000042]  hover:bg-white hover:text-black hover:transition duration-500'>Portfolio</p>
                    <p className='border-none px-11 py-2 rounded-[30px] bg-[#00000042]  hover:bg-white hover:text-black hover:transition duration-500'>Resume</p>
                </div>
            </div>
            <div className='flex  justify-between text-[#dfdede] mt-20 px-30 '>
                <div className='flex gap-6'>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Send />
                    <MessageCircleQuestionMark />
                </div>
                <div>
                    <Scan />
                </div>       
            </div>
        </div>
    </>
  )
}
