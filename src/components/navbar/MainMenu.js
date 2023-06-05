import React, {useState} from 'react';
import styled  from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@mui/material'




const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const Navitem = styled.div`
  position: relative;
  display: inline-block;
  padding-left:10px;

`;

const Dropdown = styled.div`
 top:60px;
 position:absolute;
 flex-direction:column;
 min-width: 190px;
 z-index:99;
 background-color:#fff;
  border: 1px solid #DADADA;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.14);
  border-radius: 15px;

`;

const DropdownLink = styled(Link)`
  color: #000;
  padding: 12px 16px;
  text-decoration: none;
  font-family: 'Montserrat';
  display: block;
  padding-left:0px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 14px;  
  cursor: pointer;

  :hover{
    color:#1371FF;
  }
 
`;


const SidebarLink = styled(Link)`
  font-size:15px;
  font-weight:400;
  color: #000; 
  display: flex;
  align-items: flex-end;
  padding:10px;
  height:30px;
  text-decoration: none;
  cursor: pointer;

  :hover{
    color:#1371FF;
  }
 
`;

const ButtonLink = styled(Link)`
  font-size:15px;
  font-weight:400;
  color:${props=>props.color}; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding:10px;
  min-width:100px;
  height:30px;
  text-decoration: none;
  border:2px solid ${props=>props.color}; 
  cursor: pointer;
  border-radius:50px;
  background-color:${props=>props.bgcolor};
`;

const MegaLink = styled(Link)`
  font-size:15px;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  text-decoration: none;
  background-color:#fff;
  color:#000;
  border-radius: 10px;
  margin:10px;


  :hover{
    background-color:#F8F8F8;
  }


`;

const H6 = styled.span`
  font-size:17px;
  color:#1371FF;
`;

const Span = styled.span`
  font-size:15px;
`;

export default function MainMenu({item}) {

    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
  
    return (
      <>
          <Navitem 
              onMouseEnter={item.subNav && showSubnav }
              onMouseLeave={item.subNav && showSubnav }
          >
            {
              item.button ?
              <ButtonLink bgcolor={item.backgroundColor}  color={item.textColor} to={item.path} >
                 
                 {item.title}
              
             </ButtonLink> :
                <SidebarLink to={item.path} >
                <div>
                  <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                  {item.subNav && subnav
                    ? item.iconOpened
                    : item.subNav
                    ? item.iconClosed
                    : null}
                </div>
              </SidebarLink>

            }
        
            {subnav &&
            <>
            {
              item?.large 
              ?

                <Container
                  style={{
                    position:'absolute',
                    width:500,
                    background: "#FFFFFF",
                    border: "1px solid #DADADA",
                    boxShadow:" 0px 4px 23px rgba(0, 0, 0, 0.14)",
                    borderRadius: "10px",
                    left:-110,
                  }}
                >
                  <Grid 
                    container 
                    spacing={2}
                    marginBottom={2}
                    marginTop={1}
                  >
                    
                      { 
                        item?.subNav.map((item, index) => {
                            return(
                              <Grid 
                              item 
                              lg={6} xs={6}
                               key={index} 
                              >
                                  <MegaLink bgcolor={item.backroundColor}  color={item.textColor} to={item.path} >
                                      <H6 > {item.title} </H6>
                                      <Span> {item.description} </Span>
                                  </MegaLink> 
                              </Grid>
                            )
                        })
                      }
                   
                </Grid>
              </Container>
          
              :
              <Dropdown>
              { item?.subNav.map((item, index) => {
                  return (
                    <DropdownLink to={item.path} key={index}>
                      <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                  );
                })}
            </Dropdown>
            }
           
            </>
             
              }
      </Navitem>
      
       
        
      </>
    )
  }
