import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterClient from './layoutComponentClient/FooterClient'
import HeaderClient from './layoutComponentClient/HeaderClient'

type Props = {}

const LayoutClient = (props: Props) => {
    return (
        <div>
            <HeaderClient />
            <div>
                <Outlet />
            </div>
            <FooterClient />
        </div>
    )
}

export default LayoutClient