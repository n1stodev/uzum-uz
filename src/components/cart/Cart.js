import React from 'react'
import { DATA } from '../../static'
import { BsTrash3 } from 'react-icons/bs'

function Cart() {

    return (
        <div className='cart container'>
            <div className="cart__body">
                {
                    (DATA.slice(0, 5))?.map(e => (
                        <div key={e.id} className="cart__card">
                            <img src={e.url} alt={e.title} />
                            <div className="cart__card-about">
                                <h3>{e.title}</h3>
                                <div className='cca__btm'>
                                    <h4>Sotuvchi: {'PEGAS'}</h4>
                                    <div className="cart__card-num">
                                        <button
                                            className="cart__num-btn">-</button>
                                        <span>1</span>
                                        <button
                                            className="cart__num-btn">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="cart__card-form">
                                <button className="card__form-btn"><BsTrash3 /></button>
                                <h3>{e.price} so'm</h3>
                                <del>{(e.price) * 1.25}</del>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="cart__form">
                <h3 className="cart__form-title">RASMIYLASHTIRISH</h3>
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