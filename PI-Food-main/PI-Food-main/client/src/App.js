import './App.css';
import {Routes, Route, } from 'react-router-dom'
import  LandingPage  from './Components/LandingPage/landingPage';
import HomePage from './Components/HomePage/homePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/> }/>
      <Route path='/home' element={<HomePage/> }/>
    </Routes>  
  );
}

export default App;
