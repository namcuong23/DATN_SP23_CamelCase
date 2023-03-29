import React from 'react'
import Header from './layoutComponentEmployer/HeaderEmployer'
import Sidebar from './layoutComponentEmployer/SidebarEmployer'
import { Outlet } from 'react-router-dom'

type Props = {}

const LayoutEmployer = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="row">
                {/* <Sidebar /> */}
                {/* Content */}
                <div className="bg-gray-100">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayoutEmployer