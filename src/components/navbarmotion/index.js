import React,{useRef} from 'react';
import { useCycle } from "framer-motion";
import { useDimensions } from './useDimension';
import {  Nav } from './Elements';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 900}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };
  

function Navbarmotion() {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  

  return (
    <Nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        variants={sidebar}
       
    >
     
          <Navigation/>
     
      <MenuToggle toggle={() => toggleOpen()}/>
    </Nav>
  )
}

export default Navbarmotion
