import React from 'react'
import { Link } from 'react-router-dom'
// import '../../../assets/img/admin/images/'\

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div className="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
      <div className="nk-sidebar-element nk-sidebar-head">
        <div className="nk-sidebar-brand">
          <a href="html/index.html" className="logo-link nk-sidebar-logo">
            <img className="logo-light logo-img" src="./src/assets/img/admin/images/logo.png" srcSet="./src/assets/img/admin/images/logo2x.png 2x" alt="logo" />
            <img className="logo-dark logo-img" src="./src/assets/img/admin/images/logo-dark.png" srcSet="./src/assets/img/admin/images/logo-dark2x.png 2x" alt="logo-dark" />
            <img className="logo-small logo-img logo-img-small" src="./src/assets/img/admin/images/logo-small.png" srcSet="./src/assets/img/admin/images/logo-small2x.png 2x" alt="logo-small" />
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
                  <span className="nk-menu-text">Dashboard</span>
                </a>
                
              </li>{/* .nk-menu-item */}
              <li className="nk-menu-item has-sub w-full ">
                <a href="#" className="nk-menu-link">
                  <span className="nk-menu-icon"><em className="icon ni ni-dashboard-fill" /></span>
                  <span className="nk-menu-text">Quản lý người dùng</span>
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