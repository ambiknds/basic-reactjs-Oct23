import './App.css'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import { Routes, Route } from 'react-router-dom'
import Product from './components/Product'
import About from './components/About'


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Welcome />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>


  )
}