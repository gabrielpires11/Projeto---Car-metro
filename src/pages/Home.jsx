import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css';
import Logo from './img/Logo_Senai.jpeg';

function Home() {
    return (
        <>
            <div className='Card-Nav'>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={Logo} alt="logosenai" width='200px' />
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Login</Nav.Link>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>


    );
}

export default Home