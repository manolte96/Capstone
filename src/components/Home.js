import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import positions from '../positions.json' // remove this
import { Button } from '@mui/material'
import Details from './Details'
import { useState } from 'react'


const Home = (props) => {
    const [details, setDetails] = useState()
    const seeDetails = (e, position) => {
          e.preventDefault();
        console.log("JiuJitsu")
        console.log(position.id)

    }
    return (
        <div className="parent-Div">
        <div className="card-container">
           
            {positions.map((position, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{position.Name.toUpperCase()}</span>
                        <ul>
                        <li>Name: {position["Name"]}</li>
                        <li>Variations: {position["Variations"]}</li>
                        <li>Common Bottom Player Submissions: {position["Common Submissions: Bottom Player"]}</li>
                        <li>Common Top Player Submissions: {position["Common Submissions: Top Player"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <Button onClick={() => {
                        console.log(position.Details)
                        setDetails(position.Details)
                        }} >
                        See Position Details
                    </Button>
                    {/* <CardActions style={{ color: 'blue' }}>

                        <Link to={`/position/${position.id}`}>See More Details</Link>
                    </CardActions> */}
                </Card>
            ))}
        </div>
        <div className='sister-Div'>
            {/* this might be something cool! */}
            <Details details={details} />
        </div>
        </div>
    )
}

export default Home