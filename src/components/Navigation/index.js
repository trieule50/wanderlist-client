import { Nav, Navbar, Container } from 'react-bootstrap'

const Navigation = () =>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href=""><img src="https://image.flaticon.com/icons/png/512/201/201623.png" alt="travel" style={{height: '1.5rem'}}/>WanderList</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">States</Nav.Link>
                    <Nav.Link href="">Sign Up</Nav.Link>
                    <Nav.Link href="">Log In</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation