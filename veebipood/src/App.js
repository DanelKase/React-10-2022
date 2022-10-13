import {Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/avaleht';
import Lisatoode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (
    <div className="App">

   <Routes>
    <Route path="" element= { <Avaleht/>} />
    <Route path="lisa toode" element= { <Lisatoode/>} />
    <Route path="ostukorv" element= { <Ostukorv/> } />
    <Route path="HaldaTooteid" element= { <HaldaTooteid/> } />
    <Route path="Meist" element= { <Meist/> } />
    <Route path="Poed" element= { <Poed/> } />
    <Route path="Yksiktoode" element= { <Yksiktoode/> } />
    <Route path="seaded" element= { <seaded/> } />
   </Routes>
    </div>
  );
}

export default App;
