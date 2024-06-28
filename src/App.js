import './App.css';
import { Nav } from './comp/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TProno } from './comp/TProno';
import { Tablavel } from './comp/Tablavel';
import { ContenidoTvel } from './comp/ContenidoTvel';
import {MProno} from './comp/MProno';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<TProno/>} />
          <Route path='/MP' element={<MProno/>} />
          <Route path='/tp' element={<TProno/>} />
          <Route path='/tv' element={<Tablavel/>} />
          <Route path='/te' element={<ContenidoTvel/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
