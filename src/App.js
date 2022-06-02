
import { Route } from 'react-router';
import { Routes } from 'react-router';
import './App.css';
import Home from  './Components/Pages/Home'

import Navbar from './Components/Navbar/Navbar';
import Show from './Components/Pages/Show'
import User from './Components/Pages/User';
import Login  from './Components/Pages/Login'
import Registration from './Components/Pages/Registration';
import { useSelector } from 'react-redux';


function App() {
const id= useSelector(state=>state.movie.Id)
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/show" element={<Show />}> </Route>
      <Route path="/user"  element={<User/>}> </Route>
      <Route path="/login" element={<Login/>}> </Route>
      <Route path="/reg" element={<Registration/>}> </Route>
      </Routes>
     
     
    </div>
  );
}

export default App;
