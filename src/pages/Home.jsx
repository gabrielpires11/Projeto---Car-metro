import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css';
import Logo from './img/Logo_Senai.jpeg';
import CarouselCar from './Carousel';
import Button from 'react-bootstrap/Button';
import NavbarTop from '../components/Navbar';

function Home() {
    return (
        <>
            <NavbarTop></NavbarTop>
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
            <div className='Card-Turmas'>
                <button onClick={() => window.open(
                    'http://localhost:5173/idev2',
                    '_blank'
                )} id="idev1">
                    IDEV1
                </button>
                <button onClick={() => window.open(
                    'http://localhost:5173/idev2',
                    '_blank'
                )} id="idev2">
                    IDEV2
                </button>
                <button onClick={() => window.open(
                    'http://localhost:5173/idev2',
                    '_blank'
                )} id="idev3">
                    IDEV3
                </button>
                <button onClick={() => window.open(
                    'http://localhost:5173/idev2',
                    '_blank'
                )} id="">
                    IELE/IMEC1
                </button>
                <button onClick={() => window.open(
                    'http://localhost:5173/idev2',
                    '_blank'
                )} id="">
                    IELE/IMEC2
                </button>
                <button onClick={() => window.open(
                    'http://localhost:5173/idev2',
                    '_blank'
                )} id="">
                    IELE/IMEC2
                </button>
            </div>

        </>


    );
}

export default Home