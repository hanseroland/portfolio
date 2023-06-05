import React, { useState ,useEffect} from 'react'
import {  Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import {makeStyles} from '@mui/styles'
import { styled as styledMui } from '@mui/material/styles';
import clsx from 'clsx';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import styled  from 'styled-components';
import * as GiIcons from 'react-icons/gi';
import { MenuItems } from './MenuItems';
import {Link as LinkS} from 'react-scroll';
import '../index.css'



const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const MenuBox = styled.div`
  display:flex;
  height:60px;
  position:relative;
  justify-content:space-around;
  gap:10px;
  zIndex:99;
`;

const DropdownLink = styled(Link)`
  background: #707173; 
  height: 50px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color:  #fff;
  font-size: 12px;
  &:hover {
    background:#006431;
    cursor: pointer;
    color: #fff;
  }
`;



const ContainerLogo = styled.div`
  max-width: 250px;
  padding: 0 10px;
  overflow: hidden;
`;



const Scrollink = styled(LinkS)`
  text-decoration:none;
  align-items:center;
  cursor:pointer
  color:white;
  padding:4px 4px;
  font-weight:bold;
  margin:4px 2px;
  border-radius:10px;
  overflow:hidden;

  

  :before {
    content:'';
    position:absolute;
    top:5px;
    left:2px;
    bottom:6px;
    right:1px;
    background:linear-gradiant(90deg,#282828,#4a4a4a);
    border-radius:10px;
    border-left:1px solid #0004;
    border-bottom:1px solid #0004;
    border-top:1px solid #0004;

     


  }
  :hover {
   
    background:linear-gradiant(-90deg,#282828,#4a4a4a);
    border-radius:10px;
    box-shadow:0 0 7px rgba(255, 255, 255, 0.89),
    0 0 1px #fff,
    0 0 2px #fff,
    0 0 4px #4400FF,
    0 0 8px #4400FF,
    0 0 9px #4400FF,
    0 0 10px #4400FF,
    0 0 15px #4400FF;
    border-left:1px solid #0004;
    border-right:1px solid #0004;
    border-bottom:1px solid #0004;
    border-top:1px solid #0004;

   
  }

  i{
    position:relative;
    color:white;
    font-size:0.7em;
    text-transform:uppercase
    filter:blur(1px);
    text-shadow:0 0 10px rgba(255,255,255,1),
                0 0 20px rgba(255,255,255,1),
                0 0 40px rgba(255,255,255,1),
                0 0 80px rgba(255,255,255,1),
                0 0 160px rgba(255,255,255,1);
  }

  @media screen and (max-width: 768px){
    width:120px;
    height:80px;
    padding:8px 6px;
    font-weight:bold;
    margin:8px 4px;

    i{
      font-size:12px;
    }

  }

  @media screen and (max-width: 500px){
    width:60px;
    height:60px;
    padding:6px 4px;
    margin:3px 1px;

    i{
      font-size:10px;
    }

  }


 
`;

const Scrollinknav = styled(LinkS)`
display: flex;
color: #000; 
justify-content: space-between;
align-items: center;
padding: 10px;
list-style: none;
height:30px;
text-decoration: none;
font-size: 14px;
font-weight: 500;
`

const MenuOption = styled(LinkS)`
  text-decoration:none;
  align-items:center;
  cursor:pointer;
  padding:4px 4px;
  font-weight:bold;
  display:flex;
  justify-content:center;
  font-family:PowerLord;
  




  :hover {
   
    background:linear-gradiant(-90deg,#282828,#4a4a4a);
    border-radius:10px;
    box-shadow:0 0 7px rgba(255, 255, 255, 0.89),
    0 0 1px #fff,
    0 0 2px #fff,
    0 0 4px #4400FF,
    0 0 8px #4400FF,
    0 0 9px #4400FF,
    0 0 10px #4400FF,
    0 0 15px #4400FF;
    border-left:1px solid #0004;
    border-right:1px solid #0004;
    border-bottom:1px solid #0004;
    border-top:1px solid #0004;

   
  }

`
const ResumeLink = styled.a`
font-family:PowerLord;
  text-decoration:none;
  align-items:center;
  cursor:pointer;
  padding:2px 2px;
  font-weight:bold;
  display:flex;
  justify-content:center;
  color:#fff;
  
  :hover {
   
    background:linear-gradiant(-90deg,#282828,#4a4a4a);
    border-radius:10px;
    box-shadow:0 0 7px rgba(255, 255, 255, 0.89),
    0 0 1px #fff,
    0 0 2px #fff,
    0 0 4px #4400FF,
    0 0 8px #4400FF,
    0 0 9px #4400FF,
    0 0 10px #4400FF,
    0 0 15px #4400FF;
    border-left:1px solid #0004;
    border-right:1px solid #0004;
    border-bottom:1px solid #0004;
    border-top:1px solid #0004;

   
  }

`


 const ToolBar = styledMui(Toolbar)(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.up('md')]: {
     flexDirection: 'row',
     alignItems:'flex-end',
     justifyContent:'space-between',
    },
 }));



const useStyles = makeStyles({
    menuOption:{
        padding:5,
        color:'white',
        fontFamily:'Press Star2P',
        fontSize:15
    },
    menuBox:{
        display:'flex',
        flexDirection:'column'
      
   },
   navbar:{
    position:'fixed',
    top:0,
    zIndex:10,
    color:'white',
    backdropFilter:"blur(10px)",
    backgroundColor:'transparent',
    width:'100%'
   
   },
   active:{
    backgroundColor:'transparent',
    
   },
  
   menuOptionActive:{
    color:'#fff'
   },
   sidebarLink:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
   }

})

const MenuSub = ({item,handleClick}) => {

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Scrollinknav to={item.path} onClick={item.subNav && showSubnav }>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Scrollinknav>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}  onClick={handleClick} >
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  )
}


function Navbar() {
  const [navbar,setNavbar] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 

  const [state,setState] = useState({
    toggleMenu:false,
    toggleMenuOpen:false
  });

  


  const {toggleMenu,toggleMenuOpen} = state;
  const classes = useStyles();


 


  const displayToggleMenu = () => {
   
    const handleToggleMenuOpen = () =>  setState((prevState) =>
          ({...prevState,toggleMenuOpen:true}))
     

    const handleToggleMenuClose = () =>  setState((prevState) =>
          ({...prevState,toggleMenuOpen:false}))
        

    return(
        <ToolBar
        >
                <IconButton
                    {...{
                        onClick: handleToggleMenuOpen
                    }}
                    style={{
                        color:'white',
                        display:'flex',
                        justifyContent:'flex-start'
                    }}
                >
               
                   <MenuIcon fontSize='large' sx={{color:'#fff'}} />
                </IconButton> 
                <Drawer
                    {...{
                        anchor:'left',
                        open:toggleMenuOpen,
                        onClose:handleToggleMenuClose
                    }}
                   
                >
                   
                   
                         <Box>
                            {MenuItems.map((item, index) => {
                            return <MenuSub handleClick={handleClick} item={item} key={index} />;
                            })
                            }

                        </Box>
                            
                 
                </Drawer>
               
            </ToolBar>
    )
 }
  

  const displayLargeMenu = () => {
    const handleToggleMenuOpen = () =>  setState((prevState) =>
    ({...prevState,toggleMenuOpen:true}))


    const handleToggleMenuClose = () =>  setState((prevState) =>
    ({...prevState,toggleMenuOpen:false}))
    return(
        <ToolBar>

            <ContainerLogo>
            
              
                <IconButton
                      {...{
                        onClick: handleToggleMenuOpen
                        }}
                        style={{
                            color:'white',
                            display:'flex',
                            justifyContent:'flex-start'
                        }}
                  >
                    <Scrollink   smooth={true} to="banner" >
                        <GiIcons.GiCoffeeCup size={30}/>
                    </Scrollink>
                        
                  
                </IconButton> 
               
                <Drawer
                    {...{
                        anchor:'left',
                        open:toggleMenuOpen,
                        onClose:handleToggleMenuClose
                    }}
                   
                >
                   
                   
                         <Box>
                            {MenuItems.map((item, index) => {
                              return <MenuSub handleClick={handleClick} item={item} key={index} />;
                            })
                            }

                          </Box>
                            
                 
                </Drawer>
           </ContainerLogo>
        <MenuBox  >
            
                <MenuOption
                   
                    to="about"
                    smooth={true}
                   
                >
                  À propos
                
                </MenuOption>
            <MenuOption
              
              to="projets"
              smooth={true}
             
            >
               Mes projets
               
            </MenuOption>

            <MenuOption
              
              to="contact"
              smooth={true}
             
            >
               Contacts
            </MenuOption>
            <ResumeLink
              
              href='https://drive.google.com/file/d/1ozszGso4oG77MM1MyqkU6TLvVv7poneN/view?usp=share_link'
              rel="noreferrer"
              target='_blank'
             
            >
               Mon CV
            </ResumeLink>
         
           
        </MenuBox>
       
    </ToolBar>
    )
   
 }

  const changeBackground = () => {
       if(window.scrollY >= 80) {
        setNavbar(true)
      
       }else{
        setNavbar(false)
       }
  }

  useEffect(() => {
    const setResponsiveness = () => {
        return window.innerWidth < 960
         ? setState((prevState) => ({...prevState,toggleMenu:true}))
         : setState((prevState) => ({...prevState,toggleMenu:false}));

    }
    setResponsiveness();
    window.addEventListener('resize',()=>setResponsiveness());
  }, [])

  window.addEventListener('scroll',changeBackground)
  

  return (
    <div  className={navbar ? clsx(classes.navbar,classes.active) : classes.navbar } >
      <Container>
       
            {toggleMenu ? displayToggleMenu() : displayLargeMenu()} 
      
       
      </Container>
    </div> 
  )
}

export default Navbar