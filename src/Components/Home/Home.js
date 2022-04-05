import Dialogtest from "../Dialogtest";
import Header from "../Header/Header";
import Registration from "../Registration/Registration";
import {Carousel} from 'react-bootstrap'
import './Crousel.css'

import CardsItems from "../Cards/CardsItems";
import Profile from "../Header/Profile";
import BasicTable from "../testingComponents/BasicTable";
import SearchUser from '../SearchUsers'
import GetidOnHover from "../GetidOnHover";
import AddProducts from '../addProducts/AddProducts'
import DisplayProducts from "../Cards/DisplayProducts";
function Home() {
    return (
        <div>
            {/* <Header /> */}
            {/* <Profile/> */}
            <Registration/>
            <CardsItems/>
            {/* <Dialogtest /> */}
            {/* <BasicTable/> */}
            {/* <SearchUser/> */}
            {/* <AddProducts /> */}
        </div>
    )
}
export default Home;
