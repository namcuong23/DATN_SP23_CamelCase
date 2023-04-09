import React from 'react'
import { Link } from 'react-router-dom'
// import '../../../assets/img/admin/images/'\
// import myImage from './src/assets/img/admin/images/logo.png';
import myImage from '../../../assets/img/logo.jpg';

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div className="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
      <div className="nk-sidebar-element nk-sidebar-head">
        <div className="nk-sidebar-brand">
          <a href="html/index.html" className="logo-link nk-sidebar-logo">
            <img className="logo-light logo-img" src={myImage} alt="logo" />
            <img className="logo-dark logo-img" src={myImage} alt="logo-dark" />
            {/* <img src={myImage} alt="My Image" /> */}
            <img className="logo-small logo-img logo-img-small" src={myImage} alt="logo-small" />
          </a>
        </div>
        <div className="nk-menu-trigger me-n2">
          <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em className="icon ni ni-arrow-left" /></a>
          <a href="#" className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em className="icon ni ni-menu" /></a>
        </div>
      </div>{/* .nk-sidebar-element */}
      <div className="nk-sidebar-element">
        <div className="nk-sidebar-content">
          <div className="nk-sidebar-menu" data-simplebar>
            <ul className="nk-menu">
              <li className="nk-menu-item has-sub w-full active ">
                <a href="#" className="nk-menu-link">
                  <span className="nk-menu-icon"><em className="icon ni ni-dashboard-fill" /></span>
                  <span className="nk-menu-text"><Link to='/admin'>Dashboard</Link></span>
                </a>

              </li>{/* .nk-menu-item */}
              <li className="nk-menu-item has-sub w-full ">
                <a href="#" className="nk-menu-link">
                  <span className="nk-menu-icon"><em className="icon ni ni-dashboard-fill" /></span>
                  <span className="nk-menu-text"><Link to="/admin/users-management">Quản lý người dùng</Link></span>
                </a>

              </li>{/* .nk-menu-item */}

              <li className="nk-menu-item has-sub w-full ">
                <a href="#" className="nk-menu-link">
                  <span className="nk-menu-icon"><em className="icon ni ni-dashboard-fill" /></span>
                  <span className="nk-menu-text"><Link to="/admin/posts">Quản lý bài viết</Link></span>
                </a>

              </li>{/* .nk-menu-item */}
            </ul>{/* .nk-menu */}
          </div>{/* .nk-sidebar-menu */}
        </div>{/* .nk-sidebar-content */}
      </div>{/* .nk-sidebar-element */}
    </div>
  )
}

export default SideBar