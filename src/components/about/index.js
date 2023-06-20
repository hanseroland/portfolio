import React from 'react';
import styled,{ keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Container from '@mui/material/Container'
import { Grid, Typography } from '@mui/material';
import '../index.css';
import ImgCoffee from '../../images/tasse1.png'
import ImgMouse from '../../images/souris.png';
import ImgSmoke from '../../images/smoke-3.png';
import TextSpan from '../TextSpan';

const animate = keyframes`
0% {
 transform:rotate(0deg);
}
100% {
 transform:rotate(360deg);
}
`

const Content = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  background: #232323;
 
`;

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

  


  b{
    position:absolute;
    inset:5px;
    background:#232323;
    border-radius:16px;
    z-index:1;
  }

`;

const Span = styled(motion.span)`
  position:relative;
  display:inline-block;
  color:white;
  width:80px;
  height:80px;
  padding:8px 15px;
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
      0 0 4px  #4400FF,
      0 0 8px  #4400FF,
      0 0 9px  #4400FF,
      0 0 10px  #4400FF,
      0 0 15px  #4400FF;
    border-left:1px solid #0004;
    border-bottom:1px solid #0004;
    border-top:1px solid #0004;


  }
 
  i{
    
      position:relative;
      color:white;
      font-size:0.7em;
      text-transform:uppercase
      filter:blur(1px);
      text-shadow:0 0 10px rgba(255,255,255,1),
                  0 0 20px rgba(255,255,255,1),
                  0 0 40px rgba(255,255,255,1),
                  0 0 80px rgba(255,255,255,1),
                  0 0 160px rgba(255,255,255,1);
    
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
    width:90px;
    height:60px;
    padding:8px 6px;
    font-weight:bold;
    margin:6px 2px;

    i{
      font-size:12px;
    }

  }

  @media screen and (max-width: 1132px){
    width:60px;
    height:60px;
    padding:8px 6px;
    font-weight:bold;
    margin:6px 2px;

    i{
      font-size:8px;
    }
  }
`;

const Cupwrap = styled.div`
 position:relative;

@media screen and (max-width: 768px){
     width: 200px;
     height: 200px;
    
  }
`;

const Cup = styled.div`
bottom:0;

`;

const Smokewrap = styled.div`
 position:absolute;
 transform:translateY(-95%);
 bottom:100px

@media screen and (max-width: 768px){
     width: 200px;
     height: 200px;
    
  }
`;

 const Image = styled(motion.img)`
 
  width: 200px;
  height: 200px;
  max-width: 100%;
  max-height: 450px;
 

 

    @media screen and (max-width: 414px){
      width: 150px;
      height: 170px;
     
   }

   @media screen and (max-width: 900px){
    width: 150px;
    height: 170px;
  }

  @media screen and (max-width: 768px){
    width: 100px;
    height: 100px;
   
 }

 
`;

const smoke1 = keyframes`
0% {
  filter:blur(2px);
  transform:translateY(0px) scale(1,1);
  opacity:0
}
25%{
  filter:blur(4px);
  transform:translateY(-10px) scale(1,1.05);
  opacity:0.5
}

50%{
  filter:blur(5px);
  transform:translateY(-20px) scale(1,1.1);
}

75%{
  filter:blur(5px);
  transform:translateY(-30px) scale(1,1.15);
  opacity:0.5
}

100%{
  filter:blur(7pxpx);
  transform:translateY(-40px) scale(1,1.2);
  opacity:1
}

`;

 const Smoke = styled(motion.img)`
  width: 220px;
  height: 320px;
  filter:blur(7px);
  transform-origin:50% 50%;
  animation: ${smoke1} 4s linear infinite;

  @media screen and (max-width: 768px){
       width: 200px;
       height: 200px;
      
    }

    @media screen and (max-width: 900px){
      width: 100px;
      height: 250px;
     
   }

    @media screen and (max-width: 375px){
      width: 150px;
      height: 150px;
     
   }
  
`;

const Cadre = styled.div`
  display:flex;
  padding:10px;
  border-radius:30px;
  margin:10px 10px;
  justify-content:space-between;
  background:#7700FF;
  box-shadow:0 0 7px rgba(255, 255, 255, 0.89),
  0 0 1px #fff,
  0 0 2px #fff,
  0 0 4px #4400FF,
    0 0 8px #4400FF,
    0 0 9px #4400FF,
    0 0 10px #4400FF,
    0 0 15px #4400FF;

  ${Image}:nth-child(0) {
    width:200px;
    height:350px
  }

  @media screen and (max-width: 900px){
    width:80%;

  }


  @media screen and (max-width: 500px){
   
    width:90%;
   
 }

  @media screen and (max-width: 768px){
   
    height: 150px;
   
 }
`;

const Paragraph = styled.div`

@media screen and (max-width: 698px){
   padding-bottom:20px;
}

`





function About({textenter,textleave}) {

  const title = "À PROPOS DE MOI".split("");

  return (
    <Content id="about" >
        <Container maxWidth="lg"  sx={{marginTop:{lg:'100px'}}} >
          <Box>
             <Grid container spacing={3}>
                
                <Grid container item lg={6} md={6} sm={6} xs={12}>
                  <Grid  container item   lg={12} xs={12} sx={{display:'flex',justifyContent:'center'}} >
                  {
                    title.map((letter,index)=>{
                      return(
                        <TextSpan  enter={textenter} leave={textleave}   key={index} >
                          {letter === " " ? "\u00A0" : letter}
                        </TextSpan>
                      )
                    })
                  } 
                    
                  </Grid>

                  <Grid item   lg={12} xs={12} ></Grid>
                      <Paragraph>
                     <Typography 
                      onMouseEnter={textenter} 
                      onMouseLeave={textleave}  
                      fontSize={15} 
                      variant="body1" 
                      align='justify' 
                      component="p" 
                      color="white"
                      >
                          Je suis un developpeur React Fullstak. Je vis à Dakar au Sénégal.
                          J'ai une passion pour le developpement web et mobile multi plateforme.
                     </Typography>
                     </Paragraph>
                     <Paragraph>
                     <Typography 
                        onMouseEnter={textenter} 
                        onMouseLeave={textleave}  
                        fontSize={15} 
                        variant="div"  
                        align='justify' 
                        component="p" 
                        color="white"
                     >
                            Etant quelqu'un d'organisé, J'aime commencer par l'étude spécifiques des besoins à
                            l'étude architecturale d'un projet avant de le mettre en oeuvre. Résolveur de problèmes,
                            je suis fan de méditation et de reflexion. Je m'interesse beaucoup à comprendre la psychologie 
                            humaine à travers la lecture et mes propres expériences personnelles mais aussi de mon entourage.
                      </Typography>
                      </Paragraph>
                      <Paragraph>
                      <Typography  
                        onMouseEnter={textenter} 
                        onMouseLeave={textleave}  
                        fontSize={15} 
                        variant="div"  
                        align='justify' 
                        component="p" 
                        color="white"
                      >
                            Je suis motivé et intéressé à travailler sur tous projets innovants avec des personnes respectueuses et positives
                            afin de m'améliorer.
                      </Typography>
                      </Paragraph>
                </Grid>
                <Grid item  lg={6} md={6} xs={12} sm={6}  container >
                    <Grid container item lg={12}  xs={12}>
                      
                       <Grid item  lg={2} xs={3} md={2} sm={3} >
                       <Span
                       onMouseEnter={textenter} onMouseLeave={textleave}
                         viewport={{once:true}}
                         initial={{opacity:0,y:0}}
                         whileInView={{opacity:1,y:0}}
                         transition={{type:"easeIn", duration:0.9,delay:0.1 }}
                        > <i>HTML</i> 
                        </Span>
                       </Grid>
                       
                        <Grid item  lg={2} xs={3} md={2} sm={3} >

                        <Span
                        onMouseEnter={textenter} onMouseLeave={textleave}
                          viewport={{once:true}}
                          initial={{opacity:0,y:0}}
                          whileInView={{opacity:1,y:0}}
                          transition={{type:"easeIn", duration:0.9,delay:0.10 }} 
                        >
                           <i>CSS</i> 
                           </Span>
                        </Grid>
                       
                           <Grid item  lg={2} xs={3} md={2} sm={3} >
                        <Span
                        onMouseEnter={textenter} onMouseLeave={textleave}
                        viewport={{once:true}}
                        initial={{opacity:0,y:0}}
                        whileInView={{opacity:1,y:0}}
                        transition={{type:"easeIn", duration:0.9,delay:0.15 }}
                        > 
                          <i>PHP</i> 
                        </Span>
                           </Grid>
                       
                        <Grid item  lg={2} xs={3} md={2}  sm={3}>
                        <Span
                        onMouseEnter={textenter} onMouseLeave={textleave}
                         viewport={{once:true}}
                         initial={{opacity:0,y:0}}
                         whileInView={{opacity:1,y:0}}
                         transition={{type:"easeIn", duration:0.9,delay:0.25 }}
                        > 
                          <i>JAVA-SCRIPT</i>
                        </Span>
                        </Grid>
                       
                        <Grid item  lg={2} xs={3} md={2}  sm={3}>
                        <Span
                        onMouseEnter={textenter} onMouseLeave={textleave}
                           viewport={{once:true}}
                           initial={{opacity:0,y:0}}
                           whileInView={{opacity:1,y:0}}
                           transition={{type:"easeIn", duration:0.9,delay:0.30 }}  
                          > 
                          <i>MySQL</i> 
                          </Span>
                        </Grid>
                         
                          <Grid item  lg={2} xs={3} md={2}  sm={3}>
                            <Span
                            onMouseEnter={textenter} onMouseLeave={textleave}
                             viewport={{once:true}}
                             initial={{opacity:0,y:0}}
                             whileInView={{opacity:1,y:0}}
                             transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                              > 
                              <i>REST API</i> 
                              </Span>

                          </Grid>
                         
                     
                      
                         <Grid item  lg={2} xs={3} md={2}  sm={3}>
                          <Span
                          onMouseEnter={textenter} onMouseLeave={textleave}
                              viewport={{once:true}}
                              initial={{opacity:0,y:0}}
                              whileInView={{opacity:1,y:0}}
                              transition={{type:"easeIn", duration:0.9,delay:0.50 }} 
                            > <i>MONGO-DB</i> 
                            </Span>
                         </Grid>
                         
                          <Grid item  lg={2} xs={3} md={2}  sm={3}>
                            <Span
                            onMouseEnter={textenter} onMouseLeave={textleave}
                               viewport={{once:true}}
                               initial={{opacity:0,y:0}}
                               whileInView={{opacity:1,y:0}}
                               transition={{type:"easeIn", duration:0.9,delay:0.60 }}
                              > 
                                <i>EXPRESS</i> 
                              </Span>
                          </Grid>
                          <Grid item  lg={2} xs={3} md={2}  sm={3}>
                            <Span
                            onMouseEnter={textenter} onMouseLeave={textleave}
                             viewport={{once:true}}
                             initial={{opacity:0,y:0}}
                             whileInView={{opacity:1,y:0}}
                             transition={{type:"easeIn", duration:0.9,delay:0.70 }}
                            > <i>REACT JS</i> 
                            </Span>
                           </Grid>

                           <Grid item  lg={2} xs={3} md={2}  sm={3}>
                            <Span
                            onMouseEnter={textenter} onMouseLeave={textleave}
                              viewport={{once:true}}
                              initial={{opacity:0,y:0}}
                              whileInView={{opacity:1,y:0}}
                              transition={{type:"easeIn", duration:0.9,delay:0.80 }}
                              > 
                                <i>REACT NATIVE</i> 
                              </Span>
                          </Grid>
                         
                          <Grid item  lg={2} xs={3} md={2}  sm={3}>
                            <Span
                            onMouseEnter={textenter} onMouseLeave={textleave}
                             viewport={{once:true}}
                             initial={{opacity:0,y:0}}
                             whileInView={{opacity:1,y:0}}
                             transition={{type:"easeIn", duration:0.9,delay:0.10 }}
                              > 
                                <i>NODE JS</i>
                              </Span>
                          </Grid>
                         
                          
                         
                          <Grid item  lg={2} xs={3} md={2}  sm={3}>
                            <Span
                            onMouseEnter={textenter} onMouseLeave={textleave}
                              viewport={{once:true}}
                              initial={{opacity:0,y:0}}
                              whileInView={{opacity:1,y:0}}
                              transition={{type:"easeIn", duration:0.9,delay:0.20 }}
                              > 
                                <i>REDUX</i> 
                              </Span>
                          </Grid>
                         
                    
                   
                          <Grid item  lg={2} xs={3} md={2}  sm={3}>
                          <Span
                          onMouseEnter={textenter} onMouseLeave={textleave}
                            viewport={{once:true}}
                            initial={{opacity:0,y:0}}
                            whileInView={{opacity:1,y:0}}
                            transition={{type:"easeIn", duration:0.9,delay:0.30 }}
                          > 
                          <i>MATERIAL UI</i> 
                          </Span>
                          </Grid>
                          
                          <Grid item  lg={2} xs={3} md={2}  sm={3} >
                            <Span
                            onMouseEnter={textenter} onMouseLeave={textleave}
                           viewport={{once:true}}
                           initial={{opacity:0,y:0}}
                           whileInView={{opacity:1,y:0}}
                           transition={{type:"easeIn", duration:0.9,delay:0.40 }}
                            > 
                            <i>WORD-PRESS</i>
                           </Span>
                          </Grid>
                         
                           <Grid item  lg={2} xs={3} md={2}  sm={3} >
                            <Span
                            onMouseEnter={textenter} onMouseLeave={textleave}
                              viewport={{once:true}}
                              initial={{opacity:0,y:0}}
                              whileInView={{opacity:1,y:0}}
                              transition={{type:"easeIn", duration:0.9,delay:0.50 }}  
                            > 
                              <i>GITHUB</i> 
                            </Span>
                           </Grid>
                         
                          <Grid item  lg={2} xs={3} md={2}  sm={3}>
                            <Span
                            onMouseEnter={textenter} onMouseLeave={textleave}
                             viewport={{once:true}}
                             initial={{opacity:0,y:0}}
                             whileInView={{opacity:1,y:0}}
                             transition={{type:"easeIn", duration:0.9,delay:0.60 }}
                              > 
                              <i>THREE JS</i>
                              </Span>
                          </Grid>
                        
                           <Grid item  lg={2} xs={3} md={2}  sm={3}>
                            <Span
                            onMouseEnter={textenter} onMouseLeave={textleave}
                               viewport={{once:true}}
                               initial={{opacity:0,y:0}}
                               whileInView={{opacity:1,y:0}}
                               transition={{type:"easeIn", duration:0.9,delay:0.70 }}
                              > 
                              <i>BOOT-STRAP</i> 
                            </Span>
                           </Grid>
                           <Grid item  lg={2} xs={3} md={2}  sm={3}>
                            <Span
                            onMouseEnter={textenter} onMouseLeave={textleave}
                               viewport={{once:true}}
                               initial={{opacity:0,y:0}}
                               whileInView={{opacity:1,y:0}}
                               transition={{type:"easeIn", duration:0.9,delay:0.80 }} 
                               > 
                              <i>{'>_'} </i> 
                            </Span>
                           </Grid>
                         
                         
                    </Grid>
                    <Grid item lg={12}  xs={12}>
                         <Cadre>
                          <Cupwrap>
                            <Cup>
                                  <Image
                                    src={ImgCoffee}
                                    viewport={{once:true}}
                                    initial={{opacity:0,y:50}}
                                    whileInView={{opacity:1,y:0}}
                                    transition={{type:"easeIn", duration:0.5,delay:0.15 }}
                                  />
                            </Cup>
                            <Smokewrap>
                                <Smoke
                                 onMouseEnter={textenter} onMouseLeave={textleave}
                                  src={ImgSmoke}
                                  viewport={{once:true}}
                                  initial={{opacity:0,y:50}}
                                  whileInView={{opacity:1,y:0}}
                                  transition={{type:"easeIn", duration:0.9,delay:0.15 }}
                                />
                            </Smokewrap>
                          </Cupwrap>
                        
                            <Image
                            onMouseEnter={textenter} onMouseLeave={textleave}
                                  src={ImgMouse}
                                  viewport={{once:true}}
                                  initial={{opacity:0,y:50}}
                                  whileInView={{opacity:1,y:0}}
                                  transition={{type:"easeIn", duration:0.9,delay:0.15 }}
                            />
                           
                         </Cadre>
                    </Grid>
                </Grid>
                
             </Grid>
          </Box>
        </Container>
    </Content>
  )
}

export default About

