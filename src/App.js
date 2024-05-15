import './App.css';
import { Nav } from './comp/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TProno } from './comp/TProno';
import { Tablavel } from './comp/Tablavel';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<TProno/>} />
          <Route path='/tp' element={<TProno/>} />
          <Route path='/tv' element={<Tablavel/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
