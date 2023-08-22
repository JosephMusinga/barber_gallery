import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Camera from './components/Camera';
import Home from './components/Home';
import Gallery from './components/Gallery';
import UploadForm from './components/UploadForm';
// import React, { useState, useEffect } from 'react';

function App() {
  // const[message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
    
  // }, []);
  
  return (

    <div className="app__body">
      <div className='header'>
        <h1>Barber Next Cut</h1>
      </div>
        {/* <h1 style={{color:'red'}}>{message}</h1> */}

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/camera' element={<Camera />} />
          <Route exact path='/uploadForm' element={<UploadForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
