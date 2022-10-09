import { positions } from '@mui/system';
import React from 'react'

    const Details = (props) => {
        console.log("JiuJitsuDetails", props)
        

    
    return (
        <div>
          <p>This will be Positional Details</p>
          <p> {props.details} </p>
        </div>
    );
    }

export default Details