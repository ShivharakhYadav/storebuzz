import './App.css';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import { Route, Routes } from 'react-router-dom'
import Profile from './Components/Header/Profile';
import Registration from './Components/Registration/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialogtest from './Components/Dialogtest';

function App() {
  return (
    <div>
           <Routes>
               <Route path='/' element={<Home/>}></Route>
               <Route path='/about' element={<About/>}></Route>
               <Route path='/profile' element={<Profile/>}></Route>
               <Route path='/registration' element={<Registration/>}></Route>
               <Route path='/dialogtest/id' element={< Dialogtest/>}></Route>
           </Routes>
    </div>
  );
}

export default App;
