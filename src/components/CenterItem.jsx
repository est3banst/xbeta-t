import React from 'react';
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
  } from "framer-motion";
  import { useRef } from "react";

const CenterItem = () => {
    return (
        <div
          className="relative w-full"
        >
          <CenterImage />
    
          <ParallaxImages />
    
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
        </div>
      );
}

const SECTION_HEIGHT = 1500;

const CenterImage = () => {
    const { scrollY } = useScroll();
  
    const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
    const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
  
    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  
    const backgroundSize = useTransform(
      scrollY,
      [0, SECTION_HEIGHT + 500],
      ["170%", "100%"]
    );
    const opacity = useTransform(
      scrollY,
      [SECTION_HEIGHT, SECTION_HEIGHT + 500],
      [1, 0]
    );
  
    return (
      <motion.div
        className="sticky top-0 h-screen w-full"
        style={{
          clipPath,
          backgroundSize,
          opacity,
          backgroundImage: "url(rem-beta.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    );
  };

const images = [
    "rem-beta.jpg",
    "rem-beta-2.jpg",
    "beta-rem-4.jpg"
]

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="rem-beta-3.jpg"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="rem-beta-8.jpg"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="xbeta-tat.jpg"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="rem-b-6.jpg"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

export default CenterItem