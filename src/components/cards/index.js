import React from 'react';
import styled ,{ keyframes }from 'styled-components';
import '../index.css';
import { motion } from 'framer-motion';




// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  border-radius:20px;
  overflow:hidden;
  background:#7700FF;
  clip-path:circle(120px at center);
 
  transition:0.5s;

  @media screen and (max-width: 680px){
   
    clip-path:circle(75px at center);
  }

  @media screen and (max-width: 414px){
   
    clip-path:circle(50px at center);
  }

  @media screen and (max-width: 1232px){
    clip-path:circle(75px at center);
    
  }

  :hover {
    background:#7700FF;
    clip-path:circle(100px at center);
    animation: ${rotate} 2s linear infinite;
   }

 
`;

const Media = styled.img`
   position:absolute;
   witdh:150px;
   height:200px;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   pointer-events:none;
   transition:0.5s;
   @media screen and (max-width: 1232px){
    
    witdh:100px;
    height:150px;
    
  }
  
  @media screen and (max-width: 780px){
    witdh:100px;
    height:120px;
  }

  @media screen and (max-width: 414px){
    witdh:80px;
    height:100px;
  }
   

`
const Content = styled.div`
 position:relative;
 width:50%;
 padding:20px 20px 20px 40px;
 transition:0.5s
 opacity:0;
 visibility:hidden;

 h2{
  color:#fff;
  text-transfrom:uppercasw;
  font-size:2em;
  margin-bottom:5px;
  transition:0.5s;
  text-shadow: 10px 5px 2px #232323;
  font-family:PowerLord;
 }

 p{
  color:#fff;
  transition:0.5s;
 }

 a{
  position:relative;
  text-decoration:none;
  padding:10px 10px;
  background:#fff;
  color:#000;
  border-radius:10px;
  margin-top:10px;
  display:inline-block;
  font-weight:700;
  box-shadow:inset -8px 0 8px rgba(0,0,0,0.15),
  inset 0px -8px 8px rgba(0,0,0,0.25),
  0 0 0 2px rgba(0,0,0,0.75),
  10px 20px 25px rgba(0,0,0,0.4);
  transition:0.5s;
 }


 @media screen and (max-width: 1232px){
  h2{
    font-size:1.5em;
  }
  
}

@media screen and (max-width: 780px){
  font-size:0.5em;
}

@media screen and (max-width: 414px){
  h2{
    font-size:0.7em;
  }
}

`
const Card = styled(motion.div)`
  position:relative;
  width:380px;
  height:350px;
  background:transparent;
  border-radius:20px;
  display:flex;
  align-items:center;
  transition:0.5s;
  
  :hover ${Media}{
    left:72%;
    height:300px;
    opacity:0
  }

  :hover ${Content}{
    opacity:1;
    visibility:visible;
    align-items:center;
    width:100%
  }

  :hover ${Circle} {
    background:#7700FF;
    clip-path:circle(400px at center);
    animation: ${rotate} 2s linear infinite;
  }

   @media screen and (max-width: 1232px){
    width:280px;
    height:250px;
    margin:20px;
    
  }

  @media screen and (max-width: 1232px){
    width:200px;
    height:230px;
    margin:20px;
    
  }
  @media screen and (max-width: 780px){
    width:150px;
    height:150px;
    margin:20px;

    :hover ${Circle} {
      background:#7700FF;
      clip-path:circle(100px at center);
      animation: ${rotate} 2s linear infinite;
     }
    
  }

 

  @media screen and (max-width: 414px){
    width:150px;
    height:150px;

    :hover ${Circle} {
      background:#7700FF;
      clip-path:circle(100px at center);
      animation: ${rotate} 2s linear infinite;
     }
  }
 


`;







function CardMedia({media,title,tech,link,textenter,textleave,viewport,initial,whileInView,animate,transition}) {
  return (
    <Card
    viewport={viewport}
    initial={initial}
    whileInView={whileInView}
    animate={animate}
    transition={transition}
    >
      <Circle></Circle>
      <Content>
        <h2 onMouseEnter={textenter} onMouseLeave={textleave} >{title}</h2>
        <p onMouseEnter={textenter} onMouseLeave={textleave}>{tech}</p>
        <a onMouseEnter={textenter} onMouseLeave={textleave} href={link} target="_blank" rel="noopener noreferrer">Voir Plus</a>
      </Content>
      <Media src={media} alt="PORTFOLIO NGUEMA NTOUGOU - REALISATIONS WEB"  />
    </Card>
  )
}

export default CardMedia
