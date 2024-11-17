import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { SmoothScrollMain } from './Main.jsx';
import Nav from './Nav.jsx';

const HeroBeta = () => {
  return (
    <>
    <Nav></Nav>
    <div className='flex w-full m-auto text-neutral-80 absolute top-[10%] z-[999] items-center justify-center'>
    
      <section 
      className='cust'>
      <h2 className='custom text-3xl text-slate-50 md:text-6xl lg:text-7xl mx-2'>X BETA</h2>
     
      </section>
  
      <button
        onClick={() => {
          document.getElementById("proyectos-beta")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        Artista independiente <FiArrowRight />
      </button>

    </div>
    <div 
    style={{
      backgroundImage: `url(${heroCards[0].url})`,
      backgroundRepeat: 'no-repeat',
      maskImage: 'url(mask.png)',
      maskSize: 'contain',
    }}
    className='absolute opacity-[0.4] bg-cover overflow-hidden top-0 w-full h-[100vh] z-[987]'></div>
    <SmoothScrollMain></SmoothScrollMain>
    </>
  )
}

const heroCards = [
  {
  url: 'h-bet.jpg',
  alt: 'Drawing Hero',    
  }, 
  {
    url: 'heroimg.jpg',
    alt: 'Drawing Fantasy',
  }, 
  {
    url: 'xbeta-h.jpg',
    alt: 'Crazy Is Art',
  },
]
export default HeroBeta