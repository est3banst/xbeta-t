import React from 'react'
import { motion } from 'framer-motion';

const Items = ({ title, src, location }) => {
    return (
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
      >
        <div>
          <img className='w-1/4' src={src} alt="" />
          <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
          <p className="text-sm uppercase text-zinc-500"></p>
        </div>
        <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
          <p>{location}</p>
     
        </div>
      </motion.div>
    );
  };

export default Items