import React from 'react'
import { ParallaxBanner,ParallaxBannerLayer } from 'react-scroll-parallax';
import styled from 'styled-components';
import {motion } from 'framer-motion';
import Container from '@mui/material/Container'
import { Grid, Typography } from '@mui/material';
import { styled as styledMui } from '@mui/material/styles';
import '../index.css'


export const Image = styled(motion.img)`
  position: relative;
  width: 300px;
  height: 500px;
  max-width: 100%;
  max-height: 750px;
 
  @media screen and (max-width: 768px){
       width: 70%;
       height: 70%;
      
    }
`;

export const Terre = styled(motion.img)`
  position: relative;
  width: 1000px;
  height: 1000px;
  max-width: 100%;
 
  @media screen and (max-width: 768px){
       width: 70%;
       height: 70%;
      
    }
`;

const Titre = styledMui(motion(Typography))(({ theme }) => ({
   fontWeight:"bold",
   color:'white',
   fontFamily:'PowerLord3D',
   fontSize:85,
   marginBottom:20,
  [theme.breakpoints.up('md')]: {
    paddingLeft:theme.spacing(3),
  },
 
}));

function Banner() {

  
  return (
    <ParallaxBanner style={{ aspectRatio: '1/1' }}>
        <ParallaxBannerLayer 
          image="/assets/galaxy-night-2.png"
          speed={-1}
        />
      
        
  
      <ParallaxBannerLayer
          expanded= {false}
          speed={10} 
          scale={[0.75, 0.1]}
          translateX={['100px', '0px']}
           translateY={['-200px', '0px']}
        >
       <Container maxWidth={false} >
          <Grid container>

                <Grid item lg={12} xs={12} >
                    <Titre 
                      textAlign='left' 
                      variant="h1" 
                      component="h1"
                      color="initial"
                      viewport={{once:false}}
                      initial={{opacity:0,y:500}}
                      whileInView={{opacity:1,y:0}}
                      transition={{type:"easeIn", duration: 1,delay:0.15 }}
                    >
                    Hello <b className='clean-text'>!</b> Je suis
                    </Titre> 
                </Grid>
                <Grid item lg={12} xs={12} >
                  <Titre 
                    variant="h1" 
                    component="h1"
                    textAlign='left' 
                    color="initial"
                    viewport={{once:false}}
                    initial={{opacity:0,y:520}}
                    whileInView={{opacity:1,y:0}}
                    transition={{type:"easeIn", duration: 1,delay:0.30 }}
                    >
                    <b>Hanse Roland Parfait,</b>  
                  </Titre>
                </Grid>
                <Grid item lg={12} xs={12} >
                  <Titre 
                    variant="h1" 
                    component="h1"
                    textAlign='left' 
                    color="initial"
                    viewport={{once:false}}
                    initial={{opacity:0,y:540}}
                    whileInView={{opacity:1,y:0}}
                    transition={{type:"easeIn", duration: 1,delay:0.60 }}
                    >
                  <b className='clean-text' >React Developer</b> 
                  </Titre>
                </Grid>
               
               
               
          </Grid>
          </Container>
        </ParallaxBannerLayer>
   
   
     
         <ParallaxBannerLayer
           speed={50} 
           expanded={false}
           scale={[0.80, 0.2]}
           translateX={['400px', '0px']}
           translateY={['90px', '0px']}
         >
                <Terre 
                    src={"/assets/terre-4.png"} 
                    animate={{
                      x: [5, 0, 5, 10, 5],
                     }}
                     transition={{
                       duration:2,
                       repeat:Infinity,
                       ease:"linear"
                     }}
                    
                  />
      </ParallaxBannerLayer>
    
   
         <ParallaxBannerLayer
          style={{width:'270px',height:'370px',marginTop:'250px'}} 
          speed={1} 
          expanded={true}
          translateX={['400px', '0px']}
          translateY={['90px', '0px']}
          scale={[0.75, 1]}
          rotate={[20, 1]}
          easing="easeInQuad"
         >
                <Image 
                    src={"/assets/astronaute-2.png"} 
                    animate={{
                      x: [5, 0, 5, 10, 5],
                     }}
                     transition={{
                       duration:2,
                       repeat:Infinity,
                       ease:"linear"
                     }}
                    
                  />
      </ParallaxBannerLayer>

   

    <motion.div
      animate={{
        y: [5, 0, 5, 10, 5],
      }}
      transition={{
        duration:2,
        repeat:Infinity,
        ease:"linear"
      }}
     
      >
       <ParallaxBannerLayer 
          style={{marginTop:'290px'}} 
          image="/assets/spacecraft.png" 
          speed={-80}   
          

      />
   
  
    </motion.div>
  

  </ParallaxBanner>
   
    )
}

export default Banner