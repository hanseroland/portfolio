import React,{useState} from 'react'
import  styled  from 'styled-components';
import { motion, useAnimationControls } from 'framer-motion';
import './index.css';




const Letter = styled(motion.span)`
  font-size:2.5rem;
  display:inline-block;
  color:#fff;
  font-weight:800;
  font-family:PowerLord;

  :hover {
    color:#7700FF;
    font-size:3rem;
  }

  @media screen and (max-width: 680px){
   
    font-size:1.5rem;
  }
`;

const H1 = styled(motion.h1)`
font-weight:800;
display:inline-block;
@media screen and (max-width: 680px){
   
    margin-top:10px;
    text-align:center
  }
`


const TextSpan = ({children,...props}) =>  {
    const controls = useAnimationControls();
    const [isPlaying,setIsPlaying]= useState(false)

    const rubberband = () => {
        
            controls.start({
                transform:[
                    "scale3d(1,1,1)",
                    "scale3d(1.4,.55,1)",
                    "scale3d(.75,1.25,1)",
                    "scale3d(1.25,.85,1)",
                    "scale3d(.9,1.05,1)",
                    "scale3d(1,1,1)",
                ]
            });
             setIsPlaying(false)
        
    }
   

  return (
    <H1
    
    >
        <Letter  
            onMouseEnter={props.enter} onMouseLeave={props.leave}
            animate={controls}
            onMouseOver={()=>{
                if(!isPlaying)
                    rubberband()
            }}
            onAnimationComplete={()=>setIsPlaying(false)}

        >
            {children}
        </Letter>
    </H1>
   
  )
}

export default TextSpan
