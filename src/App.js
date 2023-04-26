import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './router/home/Home'
import Cart from './router/cart/Cart'
import Admin from './router/admin/Admin'
import Login from './router/login/Login'
import Wishlist from './router/wishlist/Wishlist'
import SingleRoute from './router/single-route/SingleRoute'

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<Login />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/product/:id' element={<SingleRoute />} />
                <Route path='/admin' element={<Admin />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App