import React from 'react';
import  styled  from 'styled-components';

const Card = styled.div`
    position:absolute;
    width:300px;
    height:400px;
    background:transparent;
    box-shadow:0 25px 50px rgba(0,0,0,0.15);
    border-radius:20px;
   
    


`

const I = styled.i`
    position:absolute;
    left:-15px;
    top:40px;
    width:280px;
    height:50px;
    background:rgb(0, 195, 255);
    border-radius:30px;
    border-bottom-left-radius:0px;
    box-shadow:0 5px 10px rgba(0,0,0,0.15);
   

    :before {
        content:'';
        position:absolute;
        width:15px;
        height:30px;
        background:white;
        top:50px;
        border-top-left-radius:20px;
        border-bottom-left-radius:20px;
        z-index:2;
        
       
      }

      :after {
        content:'';
        position:absolute;
        top:50px;
        width:15px;
        height:15px;
        background:rgb(0, 195, 255);
      
      }
`




function RibbonCard() {
  return (
    <Card>
      <I></I>
    </Card>
  )
}

export default RibbonCard
