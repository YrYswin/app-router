import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service';
import Layout from './components/Layout/Layout'
import Product from './pages/Product';
import Shop from './pages/Shop';

import { Routes, Route } from 'react-router-dom'

export default function App() {
   return (
      <div className="App">
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/service" element={<Service />} />
               <Route path="/product/:id" element={<Product />} />
               <Route path="/shop/:id" element={<Shop />} />
            </Route>
         </Routes>
      </div>
   );
}