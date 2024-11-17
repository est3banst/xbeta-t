import React from 'react';


const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 w-full top-0 z-50 flex items-center gap-4 justify-between px-6 py-3 text-white">
        <ul className='list-none text-slate-50 font-mono lowercase flex w-full justify-between'>
        <li><a href="">Galería</a></li>
        <li><a href="">Work</a></li>
        <li><a href="">Contactar</a></li>
        </ul>
      
    </nav>
  )
}

export default Nav