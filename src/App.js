import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Camera from './components/Camera';
import Home from './components/Home';
import Gallery from './components/Gallery';

function App() {
  
  return (

    <div className="app">
      <div className='header'>
        <h1>Barber Next Cut</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/camera' element={<Camera />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
