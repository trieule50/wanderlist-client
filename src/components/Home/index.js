import { Container } from "react-bootstrap"

const Home = () => {
    return(
        <Container>
            <div className='landing-img'>
                <h1>Welcome to WanderList</h1>
                {/* <img src="https://image.flaticon.com/icons/png/512/5169/5169182.png" alt="car traveling" style={{height: '25rem'}}/> */}
                <h5>Come and view recommended places to see in each state!</h5>
            </div>
        </Container>
    )
}

export default Home