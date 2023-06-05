import { motion } from "framer-motion";
import  styled  from 'styled-components';
import {Link as LinkS} from 'react-scroll';



export const Nav = styled(motion.nav)`
  position: sticky;
  top:0;
  left: 0;
  bottom: 0;
  width: 215px;
  z-index:3;
  
`;

export const Background = styled(motion.div)`
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    width: 215px;
    background: #232323;
    border-left:1px solid #7700FF;
    border-right:1px solid #7700FF;
`;

export const Button = styled.button`
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 18px;
    left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    color:#fff;
`;

export const ScrollItem = styled(LinkS)`
  text-decoration:none;
  align-items:center;
  cursor:pointer;
  padding:8px 8px;
  font-weight:bold;
  margin:8px 4px;
  color:#fff
`

export const UL = styled(motion.ul)`
  padding:25px;
  padding-top:100px;
  position: absolute;
  top:0px;
  width: 230px;
  height:200vh;
  background-color:#232323;
  boder-radius:50%;
  border-right:1px solid #7700FF;
`;

export const LI = styled.ul`
list-style: none;
margin-bottom: 20px;
display: flex;
align-items: center;
cursor: pointer;
margin: 0;
  padding: 10px;
`;


export const Textplaceholde = styled.div`
  border-radius: 5px;
 
  width: 200px;
  height: 30px;
  flex: 2;
  align-items:center;
  justify-content:center;

`;

export const Iconplaceholde = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
flex: 40px 0;
margin-right: 20px;
`;

