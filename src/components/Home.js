import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import positions from '../positions.json' // remove this

const Home = (props) => {
    return (
        <div className="card-container">
           
            {/* Change cars to props.cars and remove the cars.json import above */}
            {positions.map((position, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{position.Name.toUpperCase()}</span>
                        <ul>
                        <li>Name: {position["Name"]}</li>
                        <li>Position Details: {position["Details"]}</li>
                        <li>Bottom Player Submissions: {position["Common Submissions: Bottom Player"]}</li>
                        <li>Top Player Submissions: {position["Common Submissions: Top Player"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'navy' }}>
                        <Link to={`/position/${position.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home