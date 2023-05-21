import React from 'react'
import { Link } from 'react-router-dom'
// import '../../../assets/img/admin/images/'\
// import myImage from './src/assets/img/admin/images/logo.png';
import myImage from '../../../assets/img/logo.jpg';
import { AreaChartOutlined, DeploymentUnitOutlined, ReconciliationOutlined, TagsOutlined, UserOutlined, IdcardOutlined } from '@ant-design/icons';

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div className="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
      <div className="nk-sidebar-element nk-sidebar-head">
        <div className="">

          <a href="html/index.html" className="">
            <img className="w-75 mt-2" src={myImage} alt="logo" />
          </a>

        </div>
        <div className="nk-menu-trigger me-n2">

        </div>
      </div>
      <div className="nk-sidebar-element">
        <div className="nk-sidebar-content">
          <div className="" data-simplebar>
            <ul className="nk-menu">

              <Link to='/admin'>
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><AreaChartOutlined /></span>
                  <span className="nk-menu-text">Dashboard</span>
                </li>
              </Link>
              <Link to="/admin/users-management">
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1" ><UserOutlined /></span>
                  <span className="nk-menu-text">Quản lý người dùng</span>
                </li>
              </Link>
              <Link to="/admin/posts">
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><ReconciliationOutlined /></span>
                  <span className="nk-menu-text">Quản lý bài tuyển dụng</span>
                </li>
              </Link>
              <Link to="/admin/vouchers">
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><TagsOutlined /></span>
                  <span className="nk-menu-text">Quản lý gói dịch vụ</span>
                </li>
              </Link>
              <Link to="/admin/careers">
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><DeploymentUnitOutlined /></span>
                  <span className="nk-menu-text">Quản lý bài Ngành nghề</span>
                </li>
              </Link>
              <Link to="/admin/feedbacks">
                <li className="nk-menu-item has-sub w-full ">
                  <a href="#" className="nk-menu-link">
                    <span className="nk-menu-icon m-1"><IdcardOutlined /></span>
                    <span className="nk-menu-text">Quản lý Feedback</span>
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar