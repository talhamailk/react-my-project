import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import About from './pages/About'
import Gallery from './pages/Gallery';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Errorpage from './pages/Errorpage';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/' element={<Errorpage/>} />
      </Routes>
    </div>
  );
}

export default App;
