import { positions } from '@mui/system';
import React from 'react'


    const Details = (props) => {
        console.log("JiuJitsuDetails", props)
        

    
    return (
        <div style={{ padding:'25px', display: 'flexbox', position: 'absolute',
        right: '0', justifyContent: 'right', border: '1px solid black'}} id='Details-Div'>
          <p>Positional Details</p>
          <p> {props.details} </p>
        </div>
    );
    }

export default Details