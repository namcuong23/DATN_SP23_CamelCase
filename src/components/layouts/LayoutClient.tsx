import { Outlet } from 'react-router-dom'
import FooterClient from './layoutComponentClient/FooterClient'
import HeaderClient from './layoutComponentClient/HeaderClient'
import NotifyModalEpe from '../NotifyModalEpe'
import "../../assets/vendor/fontawesome-free/css/all.min.css"
import "../../assets/css/index.css"
import React from 'react'

const LayoutClient = () => {
    return (
        <div>
            <div>
                <HeaderClient />
            </div>
            <div className=''>
                <Outlet />
            </div>
            <FooterClient />
        </div>
    )
}
export default LayoutClient