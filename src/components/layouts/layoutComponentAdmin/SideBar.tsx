import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AreaChartOutlined,
  DeploymentUnitOutlined,
  ReconciliationOutlined,
  TagsOutlined,
  UserOutlined,
  IdcardOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import myImage from '../../../assets/img/logo.jpg';

const SideBar = (props: Props) => {
  const [userSubMenuOpen, setUserSubMenuOpen] = useState(false);

  const handleUserMenuClick = () => {
    setUserSubMenuOpen(!userSubMenuOpen);
  };

  return (
    <div className="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
      <div className="nk-sidebar-element nk-sidebar-head border-b-[1px] py-1">
        <div className="pl-12">
          <img className="mt-2" width={130} height={130} src={myImage} alt="logo" />
        </div>
      </div>
      <div className="nk-sidebar-element">
        <div className="nk-sidebar-content">
          <div className="" data-simplebar>
            <ul className="nk-menu mt-3">
              <Link to='/admin'>
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><AreaChartOutlined /></span>
                  <span className="nk-menu-text">Dashboard</span>
                </li>
              </Link>
              <li
                className={`nk-menu-item has-sub w-full nk-menu-link ${userSubMenuOpen ? 'open' : ''}`}
                onClick={handleUserMenuClick}
                style={{ cursor: 'pointer' }}
              >

                <span className="nk-menu-icon m-1">
                  <UserOutlined />
                </span>
                <span className="nk-menu-text">Quản lý người dùng</span>
              </li>
              {userSubMenuOpen && (
                <div className="submenu" style={{ paddingLeft: '20px', listStyle: 'none', display: 'block' }}>
                  <Link to="/admin/users-management/employer">
                    <div key="sub-menu-1" className="nk-menu-item">
                      <span  style={{ color: "black" }} className="nk-menu-item has-sub w-full nk-menu-link ">Nhà tuyển dụng</span>
                    </div>
                  </Link>
                  <Link to="/admin/users-management/employee">
                    <div key="sub-menu-2" className="nk-menu-item">
                      <span style={{ color: "black" }}  className="nk-menu-item has-sub w-full nk-menu-link ">Người tìm việc</span>
                    </div>
                  </Link>
                </div>
              )}
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
                  <span className="nk-menu-text">Quản lý bài ngành nghề</span>
                </li>
              </Link>
              <Link to="/admin/order-management">
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><ShoppingCartOutlined /></span>
                  <span className="nk-menu-text">Quản lý đơn hàng</span>
                </li>
              </Link>
              <Link to="/admin/feedbacks">
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><IdcardOutlined /></span>
                  <span className="nk-menu-text">Quản lý Feedback</span>
                </li>
              </Link>
           
              {/* Các menu khác */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;