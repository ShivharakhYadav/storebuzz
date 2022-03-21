import './App.css';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import { Route, Routes } from 'react-router-dom'
import Profile from './Components/Header/Profile';
import Registration from './Components/Registration/Registration';

import Dialogtest from './Components/Dialogtest';
import Login from './Components/Authentication/Login'
function App() {
  return (
    <div>
           <Routes>
               <Route path='/' element={<Home/>}></Route>
               <Route path='/about' element={<About/>}></Route>
               <Route path='/profile' element={<Profile/>}></Route>
               <Route path='/registration' element={<Registration/>}></Route>
               <Route path='/login' element={<Login/>}></Route>
           </Routes>
    </div>
  );
}

export default App;
