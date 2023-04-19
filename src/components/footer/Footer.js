import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer container'>
            <div className="footer__top">
                <ul>
                    <li><h4>Biz haqimizda</h4></li>
                    <li>Topshirish puktlari</li>
                    <li>Vakansiyalar</li>
                </ul>
                <ul>
                    <li><h4>Foydalanuvchilar</h4></li>
                    <li>Biz bilan bog'lanish</li>
                    <li>Savol-Javob</li>
                </ul>
                <ul>
                    <li><h4>Tadbirkorlarga</h4></li>
                    <li>Uzumda soting</li>
                    <li>Sotuvchi kabinetiga kirish</li>
                </ul>
                <ul>
                    <li><h4>Ilovani yuklab olish</h4></li>
                    <li>AppStore   Google Play</li>
                </ul>
            </div>
            <div className="footer__btm">
                <span className='footer__btmText'>Mahfiylik kelishuvi</span>
                <span className='footer__btmText'>Foydalanuvchi kelishuvi</span>
                <h4 className='footer__btmText'>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</h4>
            </div>
        </div>
    )
}

export default Footer