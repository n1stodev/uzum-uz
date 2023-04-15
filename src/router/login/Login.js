import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <div className="login__box">
                <h3 className='login__title'>Login</h3>
                <form className="login__form">
                    <input type="email" className='login__formInp' placeholder='Email' />
                    <input type="password" className='login__formInp' placeholder='Password' />
                    <button className='login__formBtn' type='submit'>Kirish</button>
                </form>
            </div>
        </div>
    )
}

export default Login