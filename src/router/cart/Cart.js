import React, { useState } from 'react'
import './Cart.css'
import { DATA } from '../../static'
import Empty from '../../components/empty/Empty'
import CartCom from '../../components/cart/Cart'

function Cart() {
    return (
        <div className='cart container'>
            {DATA < 1
                ?
                <Empty
                    title={"Savatda hozircha mahsulot yo'q"}
                    url="https://uzum.uz/static/img/shopocat.8cee444.png"
                    desc="Bosh sahifadagi to'plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
                />
                :
                <CartCom />
            }
        </div>
    )
}

export default Cart