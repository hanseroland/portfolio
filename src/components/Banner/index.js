import React from 'react';
import styled,{ keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Container from '@mui/material/Container'
import { Grid } from '@mui/material';
import '../index.css';
import {Link as LinkS} from 'react-scroll'

const Content = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  background: #232323;
`;

const animate = keyframes`
0% {
 transform:rotate(0deg);
}
100% {
 transform:rotate(360deg);
}
`


const Box = styled.div`
  position:relative;
  display:flex;
  width:100%;
  height:100%;
  justify-content:center;
  align-items:center;
  border-radius:20px;
  background:#0ccff;
  overflow:hidden;
  

  :before {
    content:'';
    position:absolute;
    width:105%;
    height:105%;
    background-image:conic-gradient(transparent,transparent,transparent, #7700FF);
    animation: ${animate} 4s linear infinite;
    animation-delay:-2s;
    
  }

  :after {
    content:'';
    position:absolute;
    width:105%;
    height:105%;
    background-image:conic-gradient(transparent,transparent,transparent,#fff);
    animation: ${animate} 4s linear infinite;
  }

  b{
    position:absolute;
    inset:5px;
    background:#232323;
    border-radius:16px;
    z-index:1;
  }

  @media screen and (max-width: 1200px){
    display:none
  }
`;

const NavScroll = styled(LinkS)`

 text-decoration:none;
 align-items:center;
 cursor:pointer
`


const Span = styled(motion.span)`
  position:relative;
  display:inline-block;
  color:white;
  width:80px;
  height:80px;
  padding:8px 6px;
  margin:8px 4px;
  border-radius:10px;
  background:linear-gradiant(180deg,#282828,#202020);
  box-shadow:inset -8px 0 8px rgba(0,0,0,0.15),
  inset 0px -8px 8px rgba(0,0,0,0.25),
  0 0 0 2px rgba(0,0,0,0.75),
  10px 20px 25px rgba(0,0,0,0.4);
  overflow:hidden;
  z-index:1;
  

  :before {
    content:'';
    position:absolute;
    top:3px;
    left:3px;
    bottom:14px;
    right:12px;
    background:linear-gradiant(90deg,#282828,#4a4a4a);
    border-radius:10px;
    box-shadow:0 0 7px rgba(255, 255, 255, 0.89),
    0 0 1px #fff,
    0 0 2px #fff,
    0 0 4px #4400FF,
    0 0 8px #4400FF,
    0 0 9px #4400FF,
    0 0 10px #4400FF,
    0 0 15px #4400FF;
    border-left:1px solid #0004;
    border-bottom:1px solid #0004;
    border-top:1px solid #0004;
  }
  

  i{
    position:relative;
    color:white;
    font-size:0.9em;
    font-weight:800;
    text-transform:uppercase
   
    
  }

  @media screen and (max-width: 768px){
    width:120px;
    height:80px;
    padding:8px 6px;
    font-weight:bold;
    margin:8px 4px;

    i{
      font-size:12px;
    }

  }

  @media screen and (max-width: 500px){
    width:60px;
    height:60px;
    padding:6px 5px;
    margin:3px 1px;

    i{
      font-size:9px;
    }

  }


 
`;



const ResponsiveBox = styled.div`
  position:relative;
  display:none;
  width:100%;
  height:100%;
  justify-content:center;
  align-items:center;
  border-radius:20px;
  background:#0ccff;
  overflow:hidden;

  :before {
    content:'';
    position:absolute;
    width:105%;
    height:105%;
    background-image:conic-gradient(transparent,transparent,transparent, #7700FF);
    animation: ${animate} 4s linear infinite;
    animation-delay:-2s;
  }

  :after {
    content:'';
    position:absolute;
    width:105%;
    height:105%;
    background-image:conic-gradient(transparent,transparent,transparent,#fff);
    animation: ${animate} 4s linear infinite;
  }

  b{
    position:absolute;
    inset:5px;
    background:#232323;
    border-radius:16px;
    z-index:1;
  }

  @media screen and (max-width: 1200px){
    display:flex
  }
`;



const ResponsiveSpan = styled(motion.span)`
  position:relative;
  display:inline-block;
  color:white;
  width:180px;
  height:80px;
  padding:8px 6px;
  font-weight:bold;
  margin:8px 4px;
  border-radius:10px;
  background:linear-gradiant(180deg,#282828,#202020);
  box-shadow:inset -8px 0 8px rgba(0,0,0,0.15),
  inset 0px -8px 8px rgba(0,0,0,0.25),
  0 0 0 2px rgba(0,0,0,0.75),
  10px 20px 25px rgba(0,0,0,0.4);
  overflow:hidden;
  z-index:2;

  :before {
    content:'';
    position:absolute;
    top:3px;
    left:3px;
    bottom:14px;
    right:12px;
    background:linear-gradiant(90deg,#282828,#4a4a4a);
    border-radius:10px;
    box-shadow:0 0 7px rgba(255, 255, 255, 0.89),
    0 0 1px #fff,
    0 0 2px #fff,
    0 0 4px #4400FF,
    0 0 8px #4400FF,
    0 0 9px #4400FF,
    0 0 10px #4400FF,
    0 0 15px #4400FF;
    border-left:1px solid #0004;
    border-bottom:1px solid #0004;
    border-top:1px solid #0004;


  }
  :hover {
   
    background:linear-gradiant(-90deg,#282828,#4a4a4a);
    border-radius:10px;
    box-shadow:0 0 7px rgba(255, 255, 255, 0.89),
    0 0 1px #fff,
    0 0 2px #fff,
    0 0 4px #4400FF,
    0 0 8px #4400FF,
    0 0 9px #4400FF,
    0 0 10px #4400FF,
    0 0 15px #4400FF;
    border-right:1px solid #0004;
    border-bottom:1px solid #0004;
    border-top:1px solid #0004;

    :before{
     
      box-shadow:-10px -10px 10px rgba(255,255,255,0.25),
      10px 5px 10px rgba(0,0,0,0.15);
     
    }


  }

  i{
    position:relative;
    color:white;
    font-size:0.9em;
    text-transformation:uppercase
  }

 
  @media screen and (max-width: 1194px){
    width:150px;
    height:80px;
    padding:8px 6px;
    font-weight:bold;
    margin:6px 2px;

    i{
      font-size:12px;
    }

  }


  @media screen and (max-width: 500px){
    width:120px;
    height:60px;
    padding:8px 6px;
    font-weight:bold;
    margin:6px 2px;

    i{
      font-size:12px;
    }

  }

  @media screen and (max-width: 414px){
    width:100px;
    height:50px;
    padding:4px 8px;
    margin:8px 2px;

   i{
      font-size:7px;
    }

 
  }


  @media screen and (max-width: 350px){
    width:80px;
    height:80px;
    padding:8px 6px;
    font-weight:bold;
    margin:6px 2px;

    i{
      font-size:12px;
    }

  }


 
`;

function Banner({primary,textenter,textleave}) {

 
  return (
    <Content id="banner" >
      
        <Container maxWidth="lg">
            
        
              
          <Box>
            <b></b>
          <Grid mt={10} container  >
             
              <Grid item lg={12} xs={12} md={12} >
                <Span 
                  onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.10 }}
                > 
                  <i>H</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:0.20 }}
                > <i>E</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                > 
                <i>L</i>
                 </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:0.60 }}
                > <i>L</i>
                 </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:0.80 }}
                > 
                  <i>O</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:1.00 }}
                > 
                  <i></i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:1.20 }}
                > 
                  <i>J</i>
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:1.40 }}
                > 
                  <i>E</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:1.60 }}
                > 
                  <i></i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                   viewport={{once:true}}
                   initial={{opacity:0,y:0}}
                   whileInView={{opacity:1,y:0}}
                   transition={{type:"easeIn", duration:0.9,delay:1.80 }}
                > 
                  <i>S</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:2.00 }}
                > 
                  <i>U</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:2.20 }}
                > 
                  <i>I</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:2.40 }}
                >
                   <i>S</i> 
                </Span>
              </Grid>
              <Grid item lg={12} >
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:0.20 }}
                > 
                  <i>H</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                > 
                  <i>A</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:0.60 }}
                > 
                  <i>N</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:0.80 }}
                > 
                  <i>S</i>
                 </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:1.00 }}
                > 
                  <i>E</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:1.20 }}
                > 
                  <i></i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:1.40 }}
                > 
                  <i>R</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:1.60 }}
                > 
                  <i>O</i>
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:1.80 }}
                > 
                  <i>L</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:2.00 }}
                > 
                  <i>A</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:2.20 }}
                > 
                  <i>N</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:2.40 }}
                > 
                  <i>D</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:2.60 }}
                > 
                  <i></i> 
                </Span>
              </Grid>
              <Grid item lg={12} >
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:0.10 }}
                >
                   <i>P</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.20 }}
                > 
                  <i>A</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                > 
                  <i>R</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:0.60 }}
                > 
                  <i>F</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:0.80 }}
                > 
                  <i>A</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:1.00 }}
                > 
                  <i>I</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:1.20 }}
                > 
                  <i>T</i> 
                </Span>
                <Span 
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:1.40 }}
                style={{width:'45%'}} 
                >
                   <i></i> 
                </Span>
                
              </Grid>
              <Grid item lg={12} >
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                   viewport={{once:true}}
                   initial={{opacity:0,y:0}}
                   whileInView={{opacity:1,y:0}}
                   transition={{type:"easeIn", duration:0.9,delay:0.10 }}
                > 
                  <i>D</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.20 }}
                > 
                  <i>E</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                > 
                  <i>V</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:0.60 }}
                > 
                  <i>E</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.80 }}
                > 
                  <i>L</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:1.00 }}
                > 
                  <i>O</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:1.20 }}
                > 
                  <i>P</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:1.40 }}
                > 
                  <i>P</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:1.60 }}
                > 
                  <i>E</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:1.80 }}
                > 
                  <i>U</i>
                 </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:2.00 }}
                >
                   <i>R</i>
                 </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                 viewport={{once:true}}
                 initial={{opacity:0,y:0}}
                 whileInView={{opacity:1,y:0}}
                 transition={{type:"easeIn", duration:0.9,delay:2.20 }}
                > 
                  <i></i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:2.40 }}
                > 
                  <i></i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.20 }}
                > 
                  <i>W</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                > 
                  <i>E</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.80 }}
                > 
                  <i>B</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.1 }}
                > 
                  <i></i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:1.20 }}
                > 
                  <i>F</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:1.40 }}
                > 
                  <i>U</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:1.60 }}
                > 
                  <i>L</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:1.80 }}
                > 
                  <i>L</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:2.00 }}
                > 
                  <i>S</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:2.20 }}
                > 
                  <i>T</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:2.40 }}
                > 
                  <i>A</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:2.60 }}
                > 
                  <i>C</i> 
                </Span>
                <Span
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:2.80 }}
                > 
                  <i>K</i> 
                </Span>
                
              </Grid>
          </Grid>
          </Box>
         
          <ResponsiveBox>
            <b></b>
          <Grid container>
              <Grid container item lg={12} xs={12} >
                  <Grid container spacing={1}  item lg={12} xs={12}>
                     <Grid item xs={12} md={3}  >
                     
                          <a 
                            style={{textDecoration:'none'}}
                            href='https://drive.google.com/file/d/1ozszGso4oG77MM1MyqkU6TLvVv7poneN/view?usp=share_link'
                            rel="noreferrer"
                            target='_blank'
                            onMouseEnter={textenter} onMouseLeave={textleave}
                           >
                             <Span
                              viewport={{once:true}}
                              initial={{opacity:0,y:-50}}
                              whileInView={{opacity:1,y:0}}
                              transition={{type:"easeIn", duration:0.9,delay:0.15 }}
                            > <i>CV</i> 
                            
                              </Span>
                           </a>
                     </Grid>
                      
                  </Grid>
                 
              </Grid>
              <Grid  
                  container
                  item 
                  lg={12} 
                  xs={12} 
                  md={12} 
                >
                  <Grid item xs={4} lg={2} md={2} >
                    <ResponsiveSpan 
                    onMouseEnter={textenter} onMouseLeave={textleave}
                        viewport={{once:true}}
                        initial={{opacity:0,y:0}}
                        whileInView={{opacity:1,y:0}}
                        transition={{type:"easeIn", duration:0.9,delay:0.10 }}
                      > 
                        <i>HELLO</i> 
                      </ResponsiveSpan>
                   </Grid>

                   <Grid item xs={4} lg={2} md={2}>
                      <ResponsiveSpan
                      onMouseEnter={textenter} onMouseLeave={textleave}
                      viewport={{once:true}}
                      initial={{opacity:0,y:0}}
                      whileInView={{opacity:1,y:0}}
                      transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                      > <i>!</i> 
                      </ResponsiveSpan>
                    </Grid>
                    <Grid item xs={4} lg={2} md={2}>
                        <ResponsiveSpan
                        onMouseEnter={textenter} onMouseLeave={textleave}
                        viewport={{once:true}}
                        initial={{opacity:0,y:0}}
                        whileInView={{opacity:1,y:0}}
                        transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                        > <i>JE</i> 
                        </ResponsiveSpan>
                    </Grid>
                     <Grid   item xs={4} lg={2} md={2}>
                      <ResponsiveSpan
                         onMouseEnter={textenter} onMouseLeave={textleave}
                          viewport={{once:true}}
                          initial={{opacity:0,y:0}}
                          whileInView={{opacity:1,y:0}}
                          transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                          > <i>ME</i> 
                      </ResponsiveSpan>
                     </Grid>
                     <Grid   item xs={4} lg={2} md={2}>
                       <ResponsiveSpan
                       onMouseEnter={textenter} onMouseLeave={textleave}
                        viewport={{once:true}}
                        initial={{opacity:0,y:0}}
                        whileInView={{opacity:1,y:0}}
                        transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                        > <i>NOMME</i> 
                       </ResponsiveSpan>
                     </Grid>
                     <Grid   item xs={4} lg={2} md={2}>
                        <ResponsiveSpan
                            viewport={{once:true}}
                            initial={{opacity:0,y:0}}
                            whileInView={{opacity:1,y:0}}
                            transition={{type:"easeIn", duration:0.9,delay:0.80 }}
                            > 
                            <i>:</i>
                        </ResponsiveSpan>
                      </Grid>
                   
                  
                
              </Grid>
              <Grid 
                container
                item 
                lg={12} 
                xs={12} 
              >
                <Grid   item xs={4} lg={2} md={2}>
                <ResponsiveSpan 
                       onMouseEnter={textenter} onMouseLeave={textleave}
                      viewport={{once:true}}
                      initial={{opacity:0,y:0}}
                      whileInView={{opacity:1,y:0}}
                      transition={{type:"easeIn", duration:0.9,delay:0.10 }}
                    > 
                      <i>{'>_'}</i> 
                    </ResponsiveSpan>
                </Grid>
             
                <Grid   item xs={4} lg={2} md={2}>
                <ResponsiveSpan 
                onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.10 }}
                > 
                  <i>HANSE</i> 
                </ResponsiveSpan>
                </Grid>
               
                <Grid   item xs={4} lg={2} md={2}>
                <ResponsiveSpan
                onMouseEnter={textenter} onMouseLeave={textleave}
                viewport={{once:true}}
                initial={{opacity:0,y:0}}
                whileInView={{opacity:1,y:0}}
                transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                > <i>ROLAND</i> 
                </ResponsiveSpan>
                </Grid>
               
                <Grid   item xs={4} lg={2} md={2}>
                  <ResponsiveSpan
                  onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                  > <i>PARFAIT</i> 
                  </ResponsiveSpan>
                </Grid>
               
                <Grid   item xs={4} lg={2} md={2}>
                  <ResponsiveSpan
                  onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                  > <i>NGUEMA</i> 
                  </ResponsiveSpan>
                </Grid>
               
                <Grid   item xs={4} lg={2} md={2}>
                  <ResponsiveSpan
                  onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.80 }}
                  > 
                  <i>NTOUGOU</i>
                  </ResponsiveSpan>
                </Grid>
               
              </Grid>
              <Grid 
                container
                item 
                lg={12} 
                xs={12} 
              >
                 <Grid   item xs={4} lg={2} md={2}>
                  <ResponsiveSpan 
                  onMouseEnter={textenter} onMouseLeave={textleave}
                    viewport={{once:true}}
                    initial={{opacity:0,y:0}}
                    whileInView={{opacity:1,y:0}}
                    transition={{type:"easeIn", duration:0.9,delay:0.10 }}
                  > 
                    <i>JE</i> 
                  </ResponsiveSpan>
                 </Grid>
               
                <Grid   item xs={4} lg={2} md={2}>
                    <ResponsiveSpan
                    onMouseEnter={textenter} onMouseLeave={textleave}
                    viewport={{once:true}}
                    initial={{opacity:0,y:0}}
                    whileInView={{opacity:1,y:0}}
                    transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                    > <i>SUIS</i> 
                    </ResponsiveSpan>
                </Grid>
              
                <Grid   item xs={4} lg={2} md={2}>
                    <ResponsiveSpan
                    onMouseEnter={textenter} onMouseLeave={textleave}
                    viewport={{once:true}}
                    initial={{opacity:0,y:0}}
                    whileInView={{opacity:1,y:0}}
                    transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                    > <i>UN</i> 
                    </ResponsiveSpan>
                </Grid>
               
                <Grid   item xs={4} lg={2} md={2}>
                  <ResponsiveSpan
                  onMouseEnter={textenter} onMouseLeave={textleave}
                  viewport={{once:true}}
                  initial={{opacity:0,y:0}}
                  whileInView={{opacity:1,y:0}}
                  transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                  > <i>WEB</i> 
                  </ResponsiveSpan>
                </Grid>
                <Grid   item xs={4} lg={2} md={2}>
                    <ResponsiveSpan
                    onMouseEnter={textenter} onMouseLeave={textleave}
                    viewport={{once:true}}
                    initial={{opacity:0,y:0}}
                    whileInView={{opacity:1,y:0}}
                    transition={{type:"easeIn", duration:0.9,delay:0.80 }}
                    > 
                    <i>DEVELOPER</i>
                    </ResponsiveSpan>
                </Grid>
               
                 <Grid   item xs={4} lg={2} md={2}>
                    <ResponsiveSpan
                    onMouseEnter={textenter} onMouseLeave={textleave}
                        viewport={{once:true}}
                        initial={{opacity:0,y:0}}
                        whileInView={{opacity:1,y:0}}
                        transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                        > <i>FULLSTACK</i> 
                    </ResponsiveSpan>
                 </Grid>
                
               
              </Grid>
          </Grid>
          </ResponsiveBox>
        </Container>
            
    </Content> 
  )
}

export default Banner

