import './App.css'
import { Routes, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Converter from './components/Converter';
import Productes from './components/Productes';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/converter">Converter</Link>
          <Link to="/productes">Productes</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/productes" element={<Productes />} />
      </Routes>
        
      
      
    </div>
  )
}

export default App