import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './layoutComponentAdmin/Header';
import Footer from './layoutComponentAdmin/Footer';
import Region from './layoutComponentAdmin/Region';
import SideBar from './layoutComponentAdmin/SideBar';
import '../../assets/css/adminCss/dashlite.css'
import '../../assets/css/adminCss/theme.css'

type Props = {}

const LayoutAdmin = (props: Props) => {
    return (
        <div className='nk-body bg-lighter npc-general has-sidebar'>
            <div className='nk-app-root'>
                <div className='nk-main'>
                    <SideBar />
                    <div className='nk-wrap'>
                    <Header />
                    <Outlet />
                    <Footer />
                    </div>
                </div>
            </div>
            <Region />
        </div>
    )
}
// import '../../assets/js/admin/assets/js/scripts.js?ver=3.0.1';
// import '../../assets/js/admin/scripts.js?ver=3.0.1';
// import '../../assets/js/admin/charts/chart-ecommerce.js?ver=3.0.1';
export default LayoutAdmin