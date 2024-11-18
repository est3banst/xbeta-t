import { ReactLenis } from "lenis/dist/lenis-react";
import Projects from "./Projects";
import CenterItem from "./CenterItem";

const SmoothScrollMain = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
            lerp: 0.05,
            infinite: true,
            // syncTouch: true,
        }}
      >
        <CenterItem />
        <Projects />
      </ReactLenis>
    </div>
  );
};

export default SmoothScrollMain;


