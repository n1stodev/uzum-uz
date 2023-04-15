import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './router/home/Home'
import Cart from './router/cart/Cart'
import Login from './router/login/Login'

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App