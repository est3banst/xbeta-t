import React from 'react'
import Items from './Items';
import { motion } from 'framer-motion';
import Contact from './Contact';
import Footer from './Footer';

const Projects = () => {
    return (
      <>
      <section
        id="proyectos-beta"
        className="mx-auto max-w-5xl px-4 py-48 text-white"
      >
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-20 text-4xl font-black uppercase text-zinc-50"
        >
          Work
        </motion.h1>
        <Items title="Tatuajes" src={itemImages[0].src} location="Montevideo" />
        <Items title="Remeras" src={itemImages[1].src} location="Montevideo" />
        <Items title="Pinturas" src={itemImages[2].src} location="Montevideo" />
      </section>
      <Contact />
      <Footer />
      </>
    );
  };

export default Projects

const itemImages = [
  { 
    src: 'tatt-4125659.jpg',
    alt: 'Tattoos',
  },
  {
    src : 'madvortex-9412926.jpg',
    alt: 'Remeras'
  },
  { 
    src: 'guycraig000-1767017.jpg',
    alt: 'Pinturas',
  },
]