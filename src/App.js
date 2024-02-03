import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service';
import Exam from './pages/Exam';

import Layout from './components/Layout/Layout'

import Product from './pages/Product';
import Shop from './pages/Shop';
import Category from './components/Services/Category';
import FoodPage from './components/Services/FoodPage';
import PersonPage from './components/ExamList/PersonPage';

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
               <Route path='/exam' element={<Exam />} />

               <Route path="/product/:id" element={<Product />} />
               <Route path="/shop/:id" element={<Shop />} />
               <Route path="/category/:name" element={<Category />} />
               <Route path="/foodpage/:id" element={<FoodPage />} />
               <Route path="/exam/:id" element={<PersonPage />} />
            </Route>
         </Routes>
      </div>
   );
}