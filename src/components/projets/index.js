import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { data } from './data';
import { motion } from 'framer-motion';
import TextSpan from '../TextSpan';
import ComplexGrid from '../cards/NewProjectCard';


const Content = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  background: #232323;

  @media screen and (max-width: 500px){
    height:100%;
  }
`;






const H1 = styled(motion.h1)`
    font-size:2.5em;
    color:white;
    text-align:center
`;






function Projets({textenter,textleave}) {

  const title = "MES PROJETS".split("");

 
  return (
    <Content id="projets" >

       <Container maxWidth="lg">
               


          <Grid container spacing={1} >
    
            <Grid item lg={4} xs={12} display="flex" alignItems="center" justifyContent="center">
                 <Box marginBottom={5}  display="flex" justifyContent="center">
                  {
                    title.map((letter,index)=>{
                      return(
                        <TextSpan enter={textenter} leave={textleave} key={index} >
                          {letter === " " ? "\u00A0" : letter}
                        </TextSpan>
                      )
                    })
                  } 
                  </Box>
            </Grid>
            <Grid 
              container 
              item 
              lg={8} 
              xs={12}
              sx={{
                
                height:500,
                overflow:"auto",
                '&::-webkit-scrollbar': {
                  width: '0.4em',
                 
                },
                '&::-webkit-scrollbar-track': {
                  boxShadow: 'inset 0 0 6px #7700FF',
                  webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(0,0,0,.1)',
                  outline: '1px solid slategrey',
                  borderRadius:30,
                  
                }
              
              }}
              >
                  {
                      data.map((item,index)=>(
                        <Grid 
                          justifyContent="center" 
                          display="flex"
                            key={item?.name} 
                            item
                            lg={12} 
                            md={12} 
                            sm={12} 
                            xs={12}
                            padding={1}
                        >
                          <ComplexGrid 
                            item={item}
                            textenter={textenter} 
                            textleave={textleave}
                            viewport={{once:false}}
                            initial={{opacity:0,x:(item._id+10)}}
                            whileInView={{opacity:1,x:0}}
                            transition={{type:"easeIn", duration:0.1,delay:0 }}
                          />
                        </Grid>
                      ))
                    }
          
                    </Grid>
               
             
          </Grid>
       </Container>
    </Content>

  )
}

export default Projets
