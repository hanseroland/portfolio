import * as React from "react";
import { LI, Textplaceholde,Iconplaceholde, ScrollItem } from "./Elements";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

//const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const colors = ["#7700FF", "#7700FF", "#7700FF", "#7700FF", "#7700FF"];

export const MenuItem = ({ color,path,title,i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <LI
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Iconplaceholde  style={style}>  </Iconplaceholde>
      <Textplaceholde   style={style}> 
           <ScrollItem to={path} color={color}>
                {title}  
           </ScrollItem>   
      </Textplaceholde> 

    </LI>
  );
};
