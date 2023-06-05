import React from 'react'
import styled,{ keyframes } from 'styled-components'

const animate = keyframes`
0% {
 transform:translateX(100%);
}
100% {
 transform:translateX(-100%);
}
`

const Scrolltext = styled.div`
   width:100%;
   display:flex;
   justify-content:center;
   padding-bottom:20px;
   div{
    color:white;
    font-size:2em;
    background:#232323;
    font-weight:900;
    text-transform:uppercase;
    white-space:nowrap;
    animation:${animate} 10s linear infinite;

   }
   span{
    -webkit-text-stroke:2px rgb(0, 195, 255);
    color:transparent;
    
   }
`

function Scrollingtext({textbefore,textafter}) {
  return (
    <Scrolltext>
        <div>
          {textbefore}  <span> {textafter} </span>
        </div>
    </Scrolltext>
  )
}

export default Scrollingtext
