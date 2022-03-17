import Dialogtest from "../Dialogtest";
import Header from "../Header/Header";
import Registration from "../Registration/Registration";
import {Carousel} from 'react-bootstrap'
import './Crousel.css'

import CardsItems from "../Cards/CardsItems";
import Profile from "../Header/Profile";


function Home() {
    return (
        <div>
            <Header />
            {/* <Profile/> */}
            <CardsItems/>
        </div>
    )
}
export default Home;