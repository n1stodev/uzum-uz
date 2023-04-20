import React, { useState } from 'react'
import './Cart.css'
import { DATA } from '../../static'
import Empty from '../../components/empty/Empty'
import CartComponent from '../../components/cart/Cart'
import { useSelector } from 'react-redux'

function Cart() {
    const cart = useSelector(s => s.cart)
    console.log(cart)
    return (
        <div className='cart container'>
            {cart.length
                ?
                <CartComponent cart={cart} />
                :
                <Empty
                    title={"Savatda hozircha mahsulot yo'q"}
                    url="https://uzum.uz/static/img/shopocat.8cee444.png"
                    desc="Bosh sahifadagi to'plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
                />
            }
        </div>
    )
}

export default Cart