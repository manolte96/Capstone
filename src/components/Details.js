import { positions } from '@mui/system';
import { Card, CardContent, CardActions, Divider } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'


    const Details = (props) => {
        console.log("JiuJitsuDetails", props)
        

    
    return (
        <Card id='Details-Div'>
          <CardContent >
            Positional Details 
            <Link to='/'>
            <Button > Submissions </Button> 
            </Link >
            <Link to='/'>
            <Button > Sweeps </Button> 
            </Link >
            </CardContent >

            <Divider />
            <CardContent >
           {props.details} 
           </CardContent >
        </Card >
    );
    }

export default Details