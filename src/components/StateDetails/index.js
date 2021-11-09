import { useState, useEffect } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const StateDetails = () => {

    const [recommendations, setRecommendations] = useState([])

    const getRecommendations = async () => {
        try{
            const response = await fetch('http://localhost:8000/states/')
            const data = await response.json()
            setRecommendations(data.recommendations)
        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(()=>{
        getRecommendations()
    },[])

    return(
        <div>
            {recommendations.map((recommendation, id) => {
                    return(
                        <Col>
                        <Link to={`recommendations/${recommendation.id}`}>
                            <Card>
                            <Card.Img variant="top" src={recommendation.photo_url} />
                            <Card.Body>
                            <Card.Title>{recommendation.title}</Card.Title>
                            <Card.Footer>
                            </Card.Footer>
                            </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        )
            })}
        </div>
    )
}

export default StateDetails