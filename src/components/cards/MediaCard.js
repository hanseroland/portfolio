import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function MediaCard({img,alt,title,content}) {

const contentStyle = {
      position:"absolute",
      top:0,
      width:"100%",
      height:"100%",
      backgroundColor:"#FF008C",
      opacity:0.9,
      transition:'all 0.5s linear',
      display:'none',
      "&:hover":{
        backgroundColor:"green",
      }
}

  return (
    <Card 
       sx={{
         maxWidth: 345,
         height:"auto",
         background:"transparent",
         backgroundColor:"transparent",
         position:"relative"
        
        }}
        >
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt={alt}
        sx={{
            width:'100%',
            height:'50%',
            maxWidth:'100%',
            maxHeight:'100%',
            objectFit:'cover',
            transition:'all 0.2s linear',
           
        }}
      />
      <CardContent  
       style={contentStyle}
      >
        <Typography 
            style={{
              fontWeight:600,
              textAlign:"center"
            }} 
            fontSize={20} 
            color="white" 
            gutterBottom 
            variant="h6" 
            component="div"
         >
          {title}  
        </Typography>
        <Typography 
           style={{
            color:"#fff",
            textAlign:"center"
          }} 
          variant="body2" 
          color="text.secondary"
        >
          {content}
        </Typography> 
        <CardActions>
             <Button sx={{color:'#fff',textTransform:'none'}} size="small">Voir</Button>
        </CardActions>
      </CardContent>
     
    </Card>
  );
}