import React from 'react'
import Empty from '../../components/empty/Empty'
import './Wishlist.css'

function Wishlist() {
    return (
        <div>
            <Empty
                title={"Sevimlilar ro'yhati bo'sh"}
                url="https://uzum.uz/static/img/hearts.cf414be.png"
                desc="Bosh sahifaga oʻting va mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanglar saqlanib qoladi"
            />
        </div>
    )
}

export default Wishlist