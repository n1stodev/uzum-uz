import React, { useRef } from 'react'
import '../Admin.css'

function CreateProduct() {
    const title = useRef()
    const price = useRef()
    const url = useRef()
    const handleCreate = e => {
        e.preventDefault()
        let newPro = {
            title: title.current.value,
            price: +price.current.value,
            url: url.current.value
        }
        console.log(newPro)
    }
    return (
        <div className='create__pro'>
            <h2>Create Product</h2>
            <form action="" onSubmit={handleCreate}>
                <input required ref={title} type="text" placeholder='Title' />
                <input required ref={price} type="number" placeholder='Price' />
                <input required ref={url} type="text" placeholder='Url' />
                <button type="submit">Create Product</button>
            </form>
        </div>
    )
}

export default CreateProduct