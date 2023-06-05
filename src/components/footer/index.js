import React from 'react';
import { Container, Grid } from '@mui/material';
import { 
    FooterContainer,
    Copyright,
} from './Element'




function Footer({textenter,textleave}) {
  return (
    <FooterContainer
    >
        <Container>
           <Grid container>
                <Grid p={3} item lg={12} xs={12}>
                     <Copyright  onMouseEnter={textenter} onMouseLeave={textleave}>
                      Construit par NGUEMA NTOUGOU Hanse R. P  © 2023. All rights reserved. 
                    </Copyright>
                </Grid>
           </Grid>
       </Container>
    </FooterContainer>
    
  )
}

export default Footer
