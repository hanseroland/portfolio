import React from 'react'
import { Container, Grid } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import TextSpan from '../TextSpan';
import '../index.css';




const Content = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:50vh;
  background: #232323;
`;



const Box = styled(motion.div)`
    display:grid;
    place-items:center;
    text-align:center;
    color:fff;
    transition:0.5s;
    margin:10px;
    border-radius:20px;
    background:#232323;
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
    transition:o.5s;

    a{
      text-decoration:none;
      cursor:pointer;
    }

   

  
`;

const ContentBox = styled.div`
    padding:10px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
   
    span{
      position:relative;
      width:60px;
      color:#7700FF;
      
    }

 
`;

const P = styled.p`

  color:white;
  font-size:12px;
  font-family:PowerLord;

  @media screen and (max-width: 1138){
    font-size:10px;
}

`

const Background = styled(motion.div)`
    background-color:transparent;
    margin:20px;
    border-radius:20px;
    
`




function Contact({textenter,textleave}) {


  const title = "CONTACTS".split("");

  const bounceTransition = {
    y:{
      duration:0.4,
      yoyo:"Infinity",
      ease:"easeOut",
    },
    backgroundColor:{
      duration:0,
      yoyo:"Infinity",
      ease:"easeOut",
      reapeatDelay:0.8,
    }
  }
  return (
    <Content id="contact" >

       <Container maxWidth="lg">

              <Grid container marginBottom={5} display="flex" justifyContent="center"  >
                      {
                        title.map((letter,index)=>{
                          return(
                            <TextSpan enter={textenter} leave={textleave} key={index} >
                              {letter === " " ? "\u00A0" : letter}
                            </TextSpan>
                          )
                        })
                      } 
                </Grid>
               <Background
                 viewport={{once:true}}
                 initial={{opacity:0,y:150}}
                 whileInView={{opacity:1,y:0}}
                 transition={bounceTransition}
               >
                  <Grid container>
                  
                     
                  
                      <Grid item lg={4}  xs={12}  >
                          <Box 
                              viewport={{once:true}}
                              initial={{opacity:0,y:0}}
                              whileInView={{opacity:1,y:0}}
                              transition={{type:"easeIn", duration:0.9,delay:0.15 }}
                            >
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/hanseroland/" >
                                  <ContentBox onMouseEnter={textenter} onMouseLeave={textleave}>
                                 
                                   <span>
                                      <AiIcons.AiOutlineGithub size={30}/>
                                    </span>
                                    <P> 
                                    github.com/hanseroland/
                                    </P>
                                  </ContentBox>
                              </a>
                          </Box>
                      </Grid>
                      <Grid item lg={4}  xs={12}  >
                          <Box 
                              viewport={{once:true}}
                              initial={{opacity:0,y:0}}
                              whileInView={{opacity:1,y:0}}
                              transition={{type:"easeIn", duration:0.9,delay:0.15 }}
                            >
                                <a target="_blank" rel="noopener noreferrer" href="https://sn.linkedin.com/in/hanse-roland-parfait-nguema-ntougou-16a907220?trk=public_profile_browsemap" >
                                  <ContentBox onMouseEnter={textenter} onMouseLeave={textleave}>
                                   
                                    <span>
                                      <FaIcons.FaLinkedinIn size={30}/>
                                    </span>
                                    <P> 
                                    hanse-roland-parfait
                                    </P>
                                  </ContentBox>
                              </a>
                          </Box>
                      </Grid>
                      <Grid item lg={4} xs={12} >
                          <Box 
                              viewport={{once:true}}
                              initial={{opacity:0,y:0}}
                              whileInView={{opacity:1,y:0}}
                              transition={{type:"easeIn", duration:0.9,delay:0.15 }}
                            > 
                                <a href="mailto:rolandntougou@gmail.com" >
                                  <ContentBox onMouseEnter={textenter} onMouseLeave={textleave}>
                                  
                                   <span>
                                      <AiIcons.AiTwotoneMail size={30} />
                                    </span>
                                    <P> 
                                        rolandntougou@gmail.com
                                    </P>
                                  </ContentBox>
                              </a>
                          </Box>
                      </Grid>
                  </Grid>
              </Background>
       </Container>
    </Content>

  )
}

export default Contact
