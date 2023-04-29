import React from 'react'
import './Admin.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import ManageProduct from './manage-product/ManageProduct'
import CreateProduct from './create-product/CreateProduct'

function Admin() {
    return (
        <div className="admin">
            <Sidebar />
            <div className="admin__content">
                <Routes>
                    <Route path='/create-product' element={<CreateProduct />} />
                    <Route path='/manage-product' element={<ManageProduct />} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin