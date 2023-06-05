import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import '../index.css';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid({item,textenter,textleave,}) {
  return (
    <Paper
     elevation={0}
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: "100%",
        flexGrow: 1,
        backgroundColor:'transparent',
        transition:'ease-in 0.5s',
        "&:hover":{
          backgroundColor:'rgba(255,255,255,0.1)',
          boxShadow:"0 4px 30px rgba(0,0,0.1)",
          backdropFilter:"blur(2.6px)",
          WebkitBackdropFilter:"blur(2.6px)",
          border:"1px solid rgba(255,255,255,0.3)"
        }
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={item.image} onMouseEnter={textenter} onMouseLeave={textleave} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography 
                 onMouseEnter={textenter} onMouseLeave={textleave} 
                 sx={{color:'#fff',display:'flex',justifyContent:'space-between'}} 
                 gutterBottom variant="subtitle1" component="div">
                
                 
                  <>
                  {
                    item.demo ?
                    <a style={{color:"#fff",cursor:'pointer',fontWeight:'bolder'}}  href={item.demo} > 
                       {item.name} <span><Launch sx={{fontSize:12}} /> </span>
                    </a>
                    : 
                    <span style={{color:"#fff",fontWeight:'bolder'}}  > 
                    {item.name} 
                     </span>

                  }
                   {
                    item.github ?
                    <a style={{color:"#fff",textDecoration:'none',cursor:'pointer',fontWeight:'bolder'}}  href={item.github} > 
                    Github <span><GitHub sx={{fontSize:12}} /> </span>
                   </a>
                   : ""
                   } 
                   
                  </>
                
               
              </Typography>
              <Typography onMouseEnter={textenter} onMouseLeave={textleave} sx={{color:'#fff'}} variant="body2" gutterBottom>
                {item.description}
              </Typography>
             
            </Grid>
            <Grid sx={{display:{lg:'block',xs:'block'},gap:1,}} alignItems="center" item>
            {
              item.technologies.map((item)=>(
                <Button
                key={item.id}
                variant="outlined"
                onMouseEnter={textenter} onMouseLeave={textleave}
                sx={{
                  textTransform:'none',
                  color:'#c797ff',
                  borderRadius:10,
                  fontSize:{lg:10,xs:10},
                  border:'none',
                  backgroundColor:'#7700ff59',
                  marginRight:{xs:1},
                  marginBottom:{xs:1},
                  height:30,
                  "&:hover":{
                    border:"1px solid #7700ff",
                    color:"#fff"
                  }
                  

                  }}
                >
                  {item.name}
                </Button>
              ))
            }
           
            </Grid>
          </Grid>
         
        </Grid>
      </Grid>
    </Paper>
  );
}
