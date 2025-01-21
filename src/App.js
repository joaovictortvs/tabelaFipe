import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container'
import Footer from './components/layout/Footer';

import Carros from './components/pages/Carros';
import Motos from './components/pages/Motos';
import Caminhoes from './components/pages/Caminhoes'

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Container>
            <Routes>
              <Route exact path='/' element={<Carros/>}/>
              <Route path='/motos' element={<Motos/>}/>
              <Route path='/caminhoes' element={<Caminhoes/>}/>
            </Routes>
          </Container>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;


// https://brasilapi.com.br/api/fipe/preco/v1/{codigoFipe} buscar um automóvel específico por código fipe do automóvel.

// https://brasilapi.com.br/api/fipe/marcas/v1/{tipoVeiculo} pega os dados dos automóveis de certo tipo (carros, caminhoes, motos)