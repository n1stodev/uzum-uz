import React from 'react'
import './Dropdown.css'
import { useSelector } from 'react-redux'
import { BsHeadset } from 'react-icons/bs'
import { FaBlender, FaTshirt } from 'react-icons/fa'

function Dropdown() {
    const state = useSelector(s => s.dropdown)
    return (
        <div className={`dropdown container ${state ? 'active' : 'unactive'}`}>
            <div className="dropwdown__item">
                <BsHeadset />
                <span>Elektronika</span>
            </div>
            <div className="dropwdown__item">
                <FaBlender />
                <span>Maishiy texnika</span>
            </div>
            <div className="dropwdown__item">
                <FaTshirt />
                <span>Kiyimlar</span>
            </div>
        </div >
    )
}

export default Dropdown