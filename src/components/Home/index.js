import { Card } from "react-bootstrap"

const Home = () => {
    return(
        <div>
            <div className='landing-img'>
                <div className='landing-text'>
                <h1>Welcome to WanderList</h1>
                <small>Come and view recommended places to see in each state!</small>
                </div>
            </div>
            <div className='subNav-container'>
                <a href='/about'>
                    <div className='subNav-item'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </a>
                <a href='/states'>
                    <div className='subNav-item'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                </a>
            </div>
        </div>
            
    )
}

export default Home