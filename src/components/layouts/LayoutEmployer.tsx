import React from 'react'
import Footer from './layoutComponentEmployer/FooterEmployer'
import Header from './layoutComponentEmployer/HeaderEmployer'
import Sidebar from './layoutComponentEmployer/SidebarEmployer'
import { Outlet } from 'react-router-dom'

type Props = {}

const LayoutEmployer = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="row g-0">
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default LayoutEmployer