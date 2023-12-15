import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsBuilding } from "react-icons/bs";
import {
  AreaChartOutlined,
  DeploymentUnitOutlined,
  ReconciliationOutlined,
  TagsOutlined,
  UserOutlined,
  IdcardOutlined,
  ShoppingCartOutlined,
  FileImageOutlined
} from '@ant-design/icons';
import myImage from '../../../assets/img/logo.jpg';
import "./sidebar.css"
const SideBar = () => {
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
              <NavLink to='/admin/dashboard' activeClassName='active'>
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><AreaChartOutlined /></span>
                  <span className="nk-menu-text">Dashboard</span>
                </li>
              </NavLink>

              <NavLink to="/admin/users-management/employee" activeClassName='active'>
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><UserOutlined /></span>
                  <span className="nk-menu-text">Quản lý người tìm việc</span>
                </li>
              </NavLink>
              <NavLink to="/admin/users-management/employer" activeClassName='active'>
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <div className="nk-menu-content">
                    <span className="nk-menu-icon m-1"><BsBuilding /></span>
                    <span className="nk-menu-text">Quản lý nhà tuyển dụng</span>
                  </div>
                </li>
              </NavLink>

              <NavLink to="/admin/posts" activeClassName='active'>
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><ReconciliationOutlined /></span>
                  <span className="nk-menu-text">Quản lý bài tuyển dụng</span>
                </li>
              </NavLink>
              <NavLink to="/admin/vouchers" activeClassName='active'>
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><TagsOutlined /></span>
                  <span className="nk-menu-text">Quản lý gói dịch vụ</span>
                </li>
              </NavLink>
              <NavLink to="/admin/careers" activeClassName='active'>
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><DeploymentUnitOutlined /></span>
                  <span className="nk-menu-text">Quản lý bài ngành nghề</span>
                </li>
              </NavLink>
              <NavLink to="/admin/order-management" activeClassName='active'>
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><ShoppingCartOutlined /></span>
                  <span className="nk-menu-text">Thông kê đơn hàng</span>
                </li>
              </NavLink>
              <NavLink to="/admin/feedbacks" activeClassName='active'>
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><IdcardOutlined /></span>
                  <span className="nk-menu-text">Quản lý Feedback</span>
                </li>
              </NavLink>
              <NavLink to="/admin/banner" activeClassName='active'>
                <li className="nk-menu-item has-sub w-full nk-menu-link ">
                  <span className="nk-menu-icon m-1"><FileImageOutlined /></span>
                  <span className="nk-menu-text">Quản lý Banner</span>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;