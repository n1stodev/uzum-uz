import React from 'react'
import './SingleRoute.css'
import { useLocation } from 'react-router-dom'

function SingleRoute() {
    const data = useLocation().state
    console.log(data)

    return (
        <div className='single_route container'>
            <img src={data?.url} alt="" />
        </div>
    )
}

export default SingleRoute