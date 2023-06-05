import React from 'react'
import styled from 'styled-components';
import {motion } from 'framer-motion';
import Container from '@mui/material/Container'
import { Box, Grid, Typography } from '@mui/material';
import { styled as styledMui} from '@mui/material/styles';
import '../index.css'
import MediaCard from '../cards';


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
function Skills() {
  return (
      <div
        style={{backgroundColor:"#1b1c1c"}}
      >
        <div className='cursor' >
            <div className='cercle'>
              
            </div>
        </div>
                <Container  >
                    <Grid  p={2} container spacing={1} >
                      <Grid item lg={4} xs={6}>
                            <MediaCard
                               img='/assets/bravosenegal.png'
                            />
                      </Grid>
                      <Grid item lg={4} xs={6}>
                            <MediaCard
                               img='/assets/ccarree.png'
                            />
                      </Grid>
                      <Grid item lg={4} xs={6}>
                            <MediaCard
                               img='/assets/semisenegal.png'
                            />
                      </Grid>
                      <Grid item lg={4} xs={6}>
                            <MediaCard
                               img='/assets/cliniquepasteur.png'
                            />
                      </Grid>
                      <Grid item lg={4} xs={6}>
                            <MediaCard
                               img='/assets/accueil.png'
                            />
                      </Grid>
                      <Grid item lg={4} xs={6}>
                            <MediaCard
                               img='/assets/homeGes.png'
                            />
                      </Grid>
                      <Grid item lg={4} xs={6}>
                            <MediaCard
                               img='/assets/pizza.png'
                            />
                      </Grid>

                      
                    </Grid>
                </Container>
      </div>
    )
}

export default Skills