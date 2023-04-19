import React from 'react'
import './Dropdown.css'
import { useSelector } from 'react-redux'
import { BsHeadset } from 'react-icons/bs'
import { FaBlender, FaTshirt } from 'react-icons/fa'

function Dropdown() {
    const state = useSelector(s => s.dropdown)
    return (
        <div className={`dropdown container ${state ? 'active' : 'unactive'}`}>
            <div className="dropdown__item">
                <BsHeadset />
                <span>Elektronika</span>
            </div>
            <div className="dropdown__item">
                <FaBlender />
                <span>Maishiy texnika</span>
            </div>
            <div className="dropdown__item">
                <FaTshirt />
                <span>Kiyimlar</span>
            </div>
        </div >
    )
}

export default Dropdown