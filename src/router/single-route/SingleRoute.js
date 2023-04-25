import React from 'react'
import './SingleRoute.css'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { addToCart, decFromCart, removeFromCart, removeFromHeart, addToHeart } from '../../context/action/action'

function SingleRoute() {
    const dispatch = useDispatch()
    const data = useLocation().state
    const heart = useSelector(s => s.heart)
    return (
        <div className='single_route container'>
            <div className="single-route__images">
                <div className="sr__imagesLeft">
                    <img src={data?.url} className='active' alt="" />
                    <img src={data?.url} alt="" />
                    <img src={data?.url} alt="" />
                </div>
                <div className="sr__imagesRight">
                    <img src={data?.url} alt="" />
                </div>
            </div>
            <div className="single-route__content">
                <div className="sr__contentTop">
                    {
                        heart?.some(i => i.id === data.id) ?
                            <button onClick={() => dispatch(removeFromHeart(data))}>
                                <AiFillHeart />
                                <span>Saralanganlarda</span>
                            </button>
                            :
                            <button onClick={() => dispatch(addToHeart(data))}>
                                <AiOutlineHeart />
                                <span>Saralanganlarga</span>
                            </button>
                    }
                </div>
                <h3 className="sr__contentTitle">{data?.title}</h3>
                <p className="sr__contentData">Sotuvchi: <span>{'Nurillo Tojiakmedov'}</span></p>
                <p className="sr__contentData">Yetkazib berish: <span>{'1 kun, bepul'}</span></p>
                <hr />
                <div className="sr__contentMiqdor">
                    <p>Miqdor:</p>
                    <div className="cart__card-num">
                        <button
                            onClick={() => dispatch(addToCart(data))}
                            className="cart__num-btn">+</button>
                        <span>{data.soni}</span>
                        <button
                            onClick={() => data.soni <= 1 ? dispatch(removeFromCart(data)) : dispatch(decFromCart(data))}
                            className="cart__num-btn">-</button>
                    </div>
                </div>
                <div className="sr__contentPrice">
                    <p>Narx:</p>
                    <div className='sr'>
                        <h3>{data?.price} so'm</h3>
                        <del>{(data?.price) * 1.25} so'm</del>
                        <span>Aksiya</span>
                    </div>
                </div>
                <div className="sr__btns">
                    <button className="sr__btn" onClick={() => dispatch(addToCart(data))}>
                        Savatga qo'shish
                    </button>
                    <button className="sr__btn">
                        Tugmani 1 bosganda xarid qilish
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleRoute