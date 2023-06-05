import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { Grid, Typography, Button } from '@mui/material'

function Counter() {

    const [count,setCount] = useState(0)

    const incremente = () => {
        setCount(count+1)
    } 

    const decremente = () => {
       
        if(count>=1){
            setCount(count-1)
        }
       
    }

  return (
    <div>
       <Container maxWidth="xs">
           <Grid container >
                <Grid item xs={12}>
                     <Typography 
                        variant="h1" 
                        color="initial"
                        display='flex'
                        justifyContent='center'
                     >
                        Compter
                     </Typography>
                     <Typography 
                        variant="h1" 
                        color="initial"
                        display='flex'
                        justifyContent='center'
                     >
                        {count}
                     </Typography>
                </Grid>
                <Grid 
                    display='flex' 
                    item 
                    xs={12}
                    justifyContent="space-between"
                >
                    <Button onClick={()=>decremente()} variant="contained" color="error">
                       -
                    </Button>
                    <Button onClick={()=>incremente()} variant="contained" color="primary">
                        +
                    </Button>
                </Grid>
           </Grid>
       </Container>
    </div>
  )
}

export default Counter
