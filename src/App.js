import './App.css';
import Gallery from './Gallery';
import Camera from './Camera';
import Header from './Header';
import Navigator from './Navigator';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigator />
      <div className='app__body'>
        <Camera />
        <Gallery />
      </div>

    </div>
  );
}

export default App;
