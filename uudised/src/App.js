import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Avaleht from "./Pages/avaleht"
import Kontakt from './Pages/kontakt';
import Meist from './Pages/meist';
import Uudised from './Pages/uudised';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/uudised">
        <button>Uudiste lehele</button>
      </Link>
      <Link to="/kontakt">
        <button>Võta meiega ühendust</button>
      </Link>
      <Link to="/meist">
        <button>Info meist</button>
      </Link>
    <Routes>
     <Route path='' element={ <Avaleht /> } />
     <Route path='uudised' element={ <Uudised /> } />
     <Route path='kontakt' element={ <Kontakt /> } />
     <Route path='meist' element={ <Meist /> } />
    </Routes>
    </div>
  );
}

export default App;
