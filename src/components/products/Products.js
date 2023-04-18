import React from 'react'
import './Products.css'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { DATA } from '../../static'

function Products() {
    return (
        <div className='products container'>
            {
                DATA?.map(e => (
                    <div className="pro__card" key={e.id}>
                        <div className="pro__img">
                            <img src={e.url} alt="" />
                            <AiOutlineHeart />
                        </div>
                        <div className="pro__body">
                            <div className="pro__card-title">{e.title.length > 55 ? (e.title.slice(0, 55) + '...') : e.title}</div>
                            <span className='pro__card-monthly'>{Math.round(e.price * 1.5 / 12)} so'm/oyiga</span>
                            <div className="pro__card-price">
                                <div>
                                    <del>{e.price * 1.2} so'm</del>
                                    <p>{e.price} so'm</p>
                                </div>
                                <button className='pro__card-shopping'>
                                    <AiOutlineShoppingCart />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products