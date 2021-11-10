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
                <a href='/about' style={{textDecoration:'none'}}>
                    <div className='subNav-item'>
                        <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src="https://img.freepik.com/free-vector/about-us-website-banner-concept-with-thin-line-flat-design_56103-96.jpg?size=626&ext=jpg" style={{height:'13rem'}}/>
                            <Card.Body style={{textAlign:'center'}}>
                                <Card.Title style={{color:'black', fontSize:'1.5rem', fontWeight:'bold'}}>Learn More</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </a>
                <a href='/states' style={{textDecoration:'none'}}>
                    <div className='subNav-item'>
                        <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src="https://i0.wp.com/cameltravel.co.uk/wp-content/uploads/2018/08/USA-Travel-Specialists.jpeg?fit=1024%2C768&ssl=1" style={{height:'13rem'}}/>
                            <Card.Body style={{textAlign:'center'}}>
                                <Card.Title style={{color:'black', fontSize:'1.5rem', fontWeight:'bold'}}>Start Wandering</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </a>
            </div>
        </div>
            
    )
}

export default Home