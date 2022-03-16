import Dialogtest from "../Dialogtest";
import Header from "../Header/Header";
import Registration from "../Registration/Registration";
import {Carousel} from 'react-bootstrap'
import './Crousel.css'
import CardsItems from "../Cards/CardsItems";

function Home() {
    return (
        <div>
            {/* <Header /> */}
            {/* <Cards/>
            <Cards/>
            <Cards/> */}
            {/* <Carousel >
                <Carousel.Item className="imgReducer">
                    <img
                        className="d-block w-100"
                        src="images/CrouselImages/img51l.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="imgReducer">
                    <img
                        className="d-block w-100"
                        src="images/CrouselImages/2nd.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="imgReducer">
                    <img
                        className="d-block w-100"
                        src="images/CrouselImages/img6.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
            <CardsItems/>
        </div>
    )
}
export default Home;