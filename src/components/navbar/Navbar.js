import React, { useState } from 'react'
import './Navbar.css'
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineHome } from 'react-icons/ai'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { NAVBAR_BOTTOM_DATA, DATA } from '../../static'
import Dropdown from '../dropdown/Dropdown'
import { useDispatch } from 'react-redux'
import { dropdown } from '../../context/action/action'
import '../search_bar/Search.css'

function Navbar() {
    const [filter, setFilter] = useState([])
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    if (pathname.includes("admin")) {
        return <></>
    }
    const inpBlur = () => {
        setFilter([])
    }
    const handleFilter = e => {
        const search = e.target.value
        const filtered = DATA.filter(value => {
            return value.title.toLowerCase().includes(search.toLowerCase())
        })
        search === "" ? setFilter([]) : setFilter(filtered)
    }
    return (
        <>
            <div className='navbar container'>
                <Link to={'/'} className="nav__logo">
                    <span>uzum market</span>
                </Link>
                <button onClick={() => dispatch(dropdown())} className="nav__katalog-btn">
                    <FiMenu />
                    <span>Katalog</span>
                </button>
                <Dropdown />
                <div className="nav__search">
                    <input type="text" onBlur={inpBlur} placeholder='Qidirish' onChange={handleFilter} />
                    <button>
                        <FiSearch />
                    </button>
                    {filter.length != 0 && (
                        <div className="search_bar">{
                            filter?.map(e => (
                                <Link className="search_barItem" key={e.id} to={`/product/${e.id}`} state={e}>
                                    {e.title}
                                </Link>
                            ))
                        }
                        </div>
                    )
                    }
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