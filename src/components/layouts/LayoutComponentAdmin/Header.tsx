import React from 'react'
type Props = {}
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, message } from 'antd';
import { useAppDispatch } from '../../../app/hook';
import { logoutAdmAuth } from '../../../app/actions/authAdm';
import { useNavigate } from 'react-router-dom';
const Header = (props: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      label: 'Đăng xuất',
      key: '0'    
    },
  ];
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    dispatch(logoutAdmAuth());
    navigate('/login-admin');
    message.info('Đăng xuất');
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="nk-header nk-header-fixed is-light">
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ms-n1">
            <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu" /></a>
          </div>
          <div className="nk-header-brand d-xl-none">
            <a href="html/index.html" className="logo-link">
              {/* <img className="logo-light logo-img" src="./src/assets/img/admin/images/logo.png" srcSet="./src/assets/img/admin/images/logo2x.png 2x" alt="logo" />
            <img className="logo-dark logo-img" src="./src/assets/img/admin/images/logo-dark.png" srcSet="./src/assets/img/admin/images/logo-dark2x.png 2x" alt="logo-dark" /> */}
            </a>
          </div>{/* .nk-header-brand */}
          <div className="nk-header-search ms-3 ms-xl-0">
            <em className="icon ni ni-search" />
            <input type="text" className="form-control border-transparent form-focus-none" placeholder="Search anything" />
          </div>{/* .nk-header-news */}
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <Dropdown menu={ menuProps } trigger={['click']}>
                <a className='border p-1 rounded-lg hover:bg-blue-400 font-bold hover:text-white' onClick={(e) => e.preventDefault()}>
                  <Space>
                    ADMIN
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </ul>
          </div>
        </div>{/* .nk-header-wrap */}
      </div>{/* .container-fliud */}
    </div>
  )
}

export default Header