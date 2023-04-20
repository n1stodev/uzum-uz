import React from 'react'
import './Products.css'
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillHeart } from 'react-icons/ai'
import { DATA } from '../../static'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToHeart, addToCart, removeFromHeart } from '../../context/action/action'

function Products({ data }) {
    const dispatch = useDispatch()
    const heart = useSelector(s => s.heart)
    return (
        <div className='products container'>
            {
                data?.map(item => (
                    <div className="pro__card" key={item.id}>
                        <div className="pro__img">
                            <Link to={`/product/${item.id}`} state={item}>
                                <img src={item.url} alt={item.title} />
                            </Link>
                            {
                                heart?.some(i => i.id === item.id) ?
                                    <AiFillHeart onClick={() => dispatch(removeFromHeart(item))} />
                                    :
                                    <AiOutlineHeart onClick={() => dispatch(addToHeart(item))} />
                            }
                        </div>
                        <div className="pro__body">
                            <div className="pro__card-title">{item.title.length > 55 ? (item.title.slice(0, 55) + '...') : item.title}</div>
                            <span className='pro__card-monthly'>{Math.round(item.price * 1.5 / 12)} so'm/oyiga</span>
                            <div className="pro__card-price">
                                <div>
                                    <del>{item.price * 1.2} so'm</del>
                                    <p>{item.price} so'm</p>
                                </div>
                                <button onClick={() => dispatch(addToCart(item))} className='pro__card-shopping'>
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