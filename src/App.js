import React, { useEffect, useState } from 'react';
import About from './components/about';
import Banner from './components/Banner';
import Contact from './components/contact';
import Projets from './components/projets';
import './App.css'
import Navbarmotion from './components/navbarmotion';
import  styled  from 'styled-components';
import { motion } from 'framer-motion';
import Footer from './components/footer';
import Navbar from './components/navbar';


const Cursor = styled(motion.div)`
  background-color:#7700FF;
  box-shadow:0 0 7px rgba(255, 255, 255, 0.89),
  0 0 1px #fff,
  0 0 2px #fff,
  0 0 4px #4400FF,
  0 0 8px #4400FF,
  0 0 9px #4400FF,
  0 0 10px #4400FF,
  0 0 15px #4400FF;
  height:32px;
  width:32px;
  border-radius:50%;
  position:fixed;
  top:0;
  left:0;
  z-index:5;
  pointer-events:none;
  
`




function App() {

  const [mousePosition,setMousePosition] = useState({
    x:0,
    y:0
  });

  const [cursorVariant,setCursorvariant] = useState("default")

  useEffect(()=>{
    const mouseMove = e => {
       setMousePosition({
        x: e.clientX,
        y: e.clientY
       })
    }
     window.addEventListener('mousemove',mouseMove)

     return () => {
      window.removeEventListener('mousemove',mouseMove)
     }
  },[]);

  const variants = {
    default:{
      x:mousePosition.x -16,
      y:mousePosition.y - 16,
    },
    text:{
         height:150,
         width:150,
         x:mousePosition.x -75,
         y:mousePosition.y - 75,
         backgroundColor:"#232323",
         mixBlendMode:"screen",
         border:"1px soldid #7700FF"

    }
    
  }

  const textEnter = ()=> setCursorvariant('text');
  const textLeave = ()=> setCursorvariant('default')

  return (
    <>
       <Navbar/>
       <Banner  textenter={textEnter} textleave={textLeave}/>
       <Cursor
        variants={variants}
        animate={cursorVariant}
       />
       <About  textenter={textEnter} textleave={textLeave} />
       <Projets  textenter={textEnter} textleave={textLeave} />
       
       <Contact  textenter={textEnter} textleave={textLeave} />
  <Footer textenter={textEnter} textleave={textLeave}/>
    </>
  );
}

export default App;
