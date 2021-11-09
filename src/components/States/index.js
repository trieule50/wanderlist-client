import { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const States = () => {

    const [states, setStates] = useState([])

    const getStates = async () => {
        try{
            const response = await fetch('http://localhost:8000/states/')
            const data = await response.json()
            setStates(data)
        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(()=>{
        getStates()
    },[])

    return(
        <div>
            <Row xs={2} md={4} className="g-4">
                {states.map((state, id) => {
                    return(
                        <Col>
                        <Link to={`states/${state.id}`}>
                            <Card>
                            <Card.Img variant="top" src={state.state_flag} />
                            <Card.Body>
                            <Card.Title>{state.name}</Card.Title>
                            </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        )
                })}
            </Row>
        </div>
    )
}

export default States