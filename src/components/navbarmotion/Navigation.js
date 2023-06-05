import React from 'react';
import { MenuItems } from '../navbar/MenuItems';
import {  UL } from './Elements';
import { MenuItem } from './MenuItem';


const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  
function Navigation() {
  return (
    <UL  variants={variants}>
       {MenuItems.map((item,index) => (
         <MenuItem color={item.color} i={index} key={index} path={item.path} title={item.title}  />
       ))}
    </UL>
  )
}

export default Navigation
