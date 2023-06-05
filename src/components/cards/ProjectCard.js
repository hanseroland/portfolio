import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import '../index.css';


const Card = styled(motion.div)`
    border:2px solid #7700FF;
    width:100%;
    height:100%;
    margin:5px;
    display:flex;
    flex-direction:column;
    transition:0.9s;

    :hover{
        background-color:#7700FF;
    }
    
`;

const Media = styled.img`
  width:100%;
`;

const CardContent = styled.div`
  margin:5px;
  
`;

const CardFooter = styled.div`
  display:flex;
`;

const Span = styled.span`
  color:#fff;
  padding:5px
`;

const A = styled.a`
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
    margin-left:10px;
    cursor:pointer;
`;

const H2 = styled.h2`
    color:#fff;
    text-transfrom:uppercasw;
    font-size:1.5em;
    margin-bottom:5px;
    transition:0.5s;
    text-shadow: 10px 5px 2px #232323;
    font-family:PowerLord;
    padding:5px
    
`;

const P = styled.p`
    color:#fff;
    font-size:15px;
    margin-bottom:5px;
    padding:5px;
    text-align:justify
`;



function ProjectCard({item,textenter,textleave,viewport,initial,whileInView,animate,transition}) {
  return (
    <Card
        viewport={viewport}
        initial={initial}
        whileInView={whileInView}
        animate={animate}
        transition={transition}
    >
      <Media src={item.image} />
      <CardContent>
        <H2 onMouseEnter={textenter} onMouseLeave={textleave}> {item.name} </H2>
        <P  onMouseEnter={textenter} onMouseLeave={textleave}>
          {item.description}
        </P>
        <Span onMouseEnter={textenter} onMouseLeave={textleave}>
           <b>Technologies :</b> {item.technologies}
        </Span>
      </CardContent>
      <CardFooter>
        {item.github ? 
        <A
          style={{
            textTransform:'capitalize'
          }}
          onMouseEnter={textenter} onMouseLeave={textleave}
          href={item.github} target="_blank" rel="noopener noreferrer"
        > 
        Github
       </A>
       :""
       }
       {
        item.demo ?
        <A
          style={{
            textTransform:'capitalize'
          }}
          onMouseEnter={textenter} onMouseLeave={textleave}
          href={item.link} target="_blank" rel="noopener noreferrer"
        > 
            Démo 
        </A> 
        : ""
        }
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
