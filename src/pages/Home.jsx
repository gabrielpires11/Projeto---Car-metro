import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function Home() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Login</Nav.Link>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
        
        
    );
}

export default Home