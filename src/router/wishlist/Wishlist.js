import React from 'react'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'

function Wishlist() {
    const data = useSelector(s => s.heart)
    return (
        <div className='container'>
            {
                data.length
                    ?
                    <Products data={data} />
                    :
                    <Empty
                        title={"Sevimlilar ro'yhati bo'sh"}
                        url="https://uzum.uz/static/img/hearts.cf414be.png"
                        desc="Bosh sahifaga o'ting va mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanglar saqlanib qoladi"
                    />
            }
        </div>
    )
}

export default Wishlist