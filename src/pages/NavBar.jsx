import { Smartphone, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-black text-white px-6 shadow-2xl w-full'>

      {/* Top bar */}
      <div className='flex items-center justify-between h-[10vh]'>

        {/* Logo or Name */}
        <h1 className='text-xl font-bold'>My Portfolio</h1>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-7 capitalize'>
          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
          <Link to='/resume'>resume</Link>
          <Link to='/Portfo'>portfolio</Link>
        </div>

        {/* Right side (Desktop only) */}
        <div className='hidden md:flex items-center gap-3'>
          <Smartphone />
          <p>09134791903</p>
        </div>

        {/* Hamburger Icon (Mobile only) */}
        <div className='md:hidden'>
          {isOpen ? (
            <X size={28} onClick={() => setIsOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='flex flex-col gap-5 pb-5 capitalize md:hidden'>
          <Link to='/' onClick={() => setIsOpen(false)}>home</Link>
          <Link to='/about' onClick={() => setIsOpen(false)}>about</Link>
          <Link to='/resume' onClick={() => setIsOpen(false)}>resume</Link>
          <Link to='/portfolio' onClick={() => setIsOpen(false)}>portfolio</Link>

          <div className='flex items-center gap-3 pt-3 border-t border-gray-600'>
            <Smartphone />
            <p>09134791903</p>
          </div>
        </div>
      )}
    </div>
  )
}