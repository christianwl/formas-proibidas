import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import PaginaCalculo from './components/Calculo/PaginaFormas';

import './App.css';


function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina-calculo/:forma" element={<PaginaCalculo />}/>
      </Routes>
    </Router>
    // exact 
  );
}

export default App;
