import React from 'react'
import './Navbar.css'
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineHome } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { NAVBAR_BOTTOM_DATA } from '../../static'

function Navbar() {
    return (
        <>
            <div className='navbar container'>
                <NavLink to={'/'} className="nav__logo">
                    <span>uzum market</span>
                </NavLink>
                <button className="nav__katalog-btn">
                    <FiMenu />
                    <span>Katalog</span>
                </button>
                <div className="nav__search">
                    <input type="text" placeholder='Qidirish' />
                    <button>
                        <FiSearch />
                    </button>
                </div>
                <div className="nav__links">
                    <NavLink to={'/'} className="nav__link">
                        <AiOutlineHome />
                        <span>Bosh Sahifa</span>
                    </NavLink>
                    <NavLink to={'/login'} className="nav__link">
                        <FiUser />
                        <span>Kirish</span>
                    </NavLink>
                    <NavLink to={'/wishlist'} className="nav__link">
                        <AiOutlineHeart />
                        <span>Saralangan</span>
                    </NavLink>
                    <NavLink to={'/cart'} className="nav__link">
                        <AiOutlineShoppingCart />
                        <span>Savatcha</span>
                    </NavLink>
                </div>
            </div>
            <div className="nav__bottom container">
                {
                    NAVBAR_BOTTOM_DATA?.map((e, inx) => (
                        <span key={inx}>{e}</span>
                    ))
                }
            </div>
        </>
    )
}

export default Navbar