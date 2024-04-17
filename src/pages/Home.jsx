import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css';
import Logo from './img/Logo_Senai.jpeg';
import CarouselCar from './Carousel';
import Button from 'react-bootstrap/Button';

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
            <div className="classroom">
                <button onClick={() => window.open(
                    'https://classroom.google.com/',
                    '_blank'
                )} id="classroom">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Google_Classroom_Logo.svg/2372px-Google_Classroom_Logo.svg.png" width='33px'
                        alt="Icon Classroom"
                        id='iconclassroom' />
                    CLASSROOM
                </button>
            </div>
            <div className='Card-Carousel'>
                <CarouselCar></CarouselCar>
            </div>

        </>


    );
}

export default Home