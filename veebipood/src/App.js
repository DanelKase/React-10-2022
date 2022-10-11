import { Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/avaleht';
import Lisatoode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (
    <div className="App">
   <Routes>
    <route path="" element= { <Avaleht/>} />
    <route path="lisa toode" element= { <Lisatoode/>} />
    <route path="ostukorv" element= { <Ostukorv/> } />
   </Routes>
    </div>
  );
}

export default App;
