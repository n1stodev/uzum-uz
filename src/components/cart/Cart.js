import React from 'react'
import { BsTrash3 } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addToCart, decFromCart, removeFromCart } from '../../context/action/action'

function Cart({ cart }) {
    const dispatch = useDispatch()
    return (
        <div className='cart container'>
            <div className="cart__body">
                {
                    (cart.slice(0, 5))?.map(e => (
                        <div key={e.id} className="cart__card">
                            <div className="cart__left">
                                <img src={e.url} alt={e.title} />
                                <div className="cart__card-about">
                                    <h3>{e.title}</h3>
                                    <div className='cca__btm'>
                                        <h4>Sotuvchi: {'PEGAS'}</h4>
                                        <div className="cart__card-num">
                                            <button
                                                onClick={() => dispatch(addToCart(e))}
                                                className="cart__num-btn">+</button>
                                            <span>{e.soni}</span>
                                            <button
                                                onClick={() => e.soni <= 1 ? dispatch(removeFromCart(e)) : dispatch(decFromCart(e))}
                                                className="cart__num-btn">-</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart__card-form">
                                <button onClick={() => dispatch(removeFromCart(e))} className="card__form-btn"><BsTrash3 /></button>
                                <h3>{e.price * e.soni} so'm</h3>
                                <del>{(e.price * e.soni) * 1.25}</del>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="cart__form">
                <h3 className="cart__form-title">RASMIYLASHTIRISH</h3>
                <div className="cart__form-products">
                    <div className="cart__form-productsItem">
                        <p>Mahsulotlar soni:</p>
                        <p>{cart.reduce((a, b) => a + b.soni, 0)} ta</p>
                    </div>
                    <div className="cart__form-productsItem">
                        <p>Jami:</p>
                        <p>{cart.reduce((a, b) => a + (b.soni * b.price), 0)} so'm</p>
                    </div>
                </div>
                <form>
                    <input type="text" className='cart__form-inp' placeholder='Ismingiz' />
                    <input type="number" placeholder='Telefon raqam' className='cart__form-inp' />
                    <input type="text" placeholder='Manzilingiz' className='cart__form-inp' />
                    <button className="cart__form-btn">RASMIYLASHTIRISH</button>
                </form>
            </div>
        </div>
    )
}

export default Cart