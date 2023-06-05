import React from 'react'
import { ParallaxBanner,ParallaxBannerLayer } from 'react-scroll-parallax';
import styled from 'styled-components';
import {motion } from 'framer-motion';
import Container from '@mui/material/Container'
import { Box, Grid, Typography } from '@mui/material';
import { styled as styledMui} from '@mui/material/styles';
import '../index.css'


export const Image = styled(motion.img)`
  position: relative;
  margin-top:150px;
  width: 600px;
  height: 100vh;
 
  @media screen and (max-width: 768px){
       width: 70%;
       height: 70%;
      
    }
`;

const H1 = styledMui(motion(Typography))(({ theme }) => ({
  fontWeight:"bold",
   color:'white',
   fontFamily:'PowerLord3D',
   fontSize:40,
   marginBottom:20,
  [theme.breakpoints.up('md')]: {
    paddingLeft:theme.spacing(3),
  },
  [theme.breakpoints.up('xs')]: {
    fontSize:20,
  }
}));

const Main = styledMui(Box)(({ theme }) => ({
   fontWeight:"bold",
   color:'white',
   fontFamily:'PowerLord',
   fontSize:30,
   marginBottom:20,
  [theme.breakpoints.up('md')]: {
    paddingLeft:theme.spacing(3),
  }
}));

const P = styledMui(motion(Typography))(({ theme }) => ({
  
   color:'white',
   fontFamily:'BebasNeue-Regular',
   letterSpacing:1,
   textAlign:"justify",
   fontSize:30,
   marginBottom:20,
  [theme.breakpoints.up('md')]: {
    paddingLeft:theme.spacing(3),
  }
}));
function Section() {
  return (
      <div
       
      >
        <ParallaxBanner style={{height:'100vh', aspectRatio: '0.9/1' }}>
            <ParallaxBannerLayer 
              image="/assets/galaxy-night-2.png" 
              speed={1}
            />
             <ParallaxBannerLayer 
              speed={20}
              >
          
            </ParallaxBannerLayer>

             <ParallaxBannerLayer 
              image="/assets/homme-1.png" 
              speed={-10}
            />

             <ParallaxBannerLayer
                expanded= {false}
                speed={45} 
             >
                <Container maxWidth={false} >
                
                <Grid container >
                   <Grid item lg={6} xs={12}>
                        <Box>
                            <H1 variant='h1' className='klimb-text' > 
                                Me, Myself & I 
                              
                            </H1>
                            <P variant='p' component='p' >
                                  Je suis un developpeur React Fullstak. Je vis à Dakar au Sénégal.
                                  J'ai une passion pour le developpement web et mobile multi plateforme.
                            </P>
                            <P variant='p' component='p'>
                                  Etant quelqu'un d'organisé, J'aime commencer par l'étude spécifiques des besoins à
                                  l'étude architecturale d'un projet avant de le mettre en oeuvre. Résolveur de problèmes,
                                  je suis fan de méditation et de reflexion. Je m'interesse beaucoup à comprendre la psychologie 
                                  humaine à travers la lecture et mes propres expériences personnelles mais aussi de mon entourage.
                            </P>
                            <P variant='p' component='p'>
                                  Je suis motivé et intéressé à travailler sur tous projets innovants avec des personnes respectueuses et positives
                                  afin de m'améliorer.
                            </P>
                        </Box>
                   </Grid>
                   <Grid item lg={6} xs={12}>
                         <Box  className='container' >
                          <div className='ball'>
                             <div className='circle'style={{color:"#04fc43"}} > <b > HTML</b> </div>
                             <div className='circle '  style={{color:"#04fc43"}} > <b> CSS</b> </div>
                             <div className='circle '   style={{color:"#04fc43"}} > <b> Bootstrap</b> </div>
                             <div className='circle '  style={{color:"#04fc43"}} ><b>Express</b></div>
                             <div className='circle klimb-text'  style={{color:"#04fc43"}} ><b>MySql</b></div>
                             <div className='circle klimb-text'  style={{color:"#04fc43"}} ><b>PHP</b></div>
                             <div className='circle klimb-text'  style={{color:"#04fc43"}} ><b>Wordpress</b></div>
                             <div className='circle klimb-text'  style={{color:"#04fc43"}} ><b>React Native</b></div>
                             <div className='circle klimb-text'  style={{color:"#04fc43"}} ><b>React JS</b></div>
                             <div className='circle klimb-text'  style={{color:"#04fc43"}} ><b>MongoDB</b></div>
                             <div className='circle klimb-text'  style={{color:"#04fc43"}} ><b>REST</b></div>
                             <div className='circle klimb-text'  style={{color:"#04fc43"}} ><b>Javascript</b></div>
                             <div className='circle klimb-text'  style={{color:"#04fc43"}} ><b>Material UI</b></div>
                          </div>
                           
                        </Box>
                   </Grid>
                </Grid>
            </Container>
            </ParallaxBannerLayer>
           
        
         
        </ParallaxBanner>
      </div>
    )
}

export default Section