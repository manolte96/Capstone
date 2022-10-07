import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import positions from '../positions.json' // remove this

const Home = (props) => {
    return (
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
                    <CardActions style={{ color: 'blue' }}>
                        <Link to={`/position/${position.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home