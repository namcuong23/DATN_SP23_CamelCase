import { useState, useRef } from 'react';
import { message } from '@pankod/refine-antd'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hook'
import { logoutAuth } from '../../../app/actions/auth'
import { useGetUserByEmailQuery } from '../../../service/auth'
import myImage from '../../../assets/img/logo.jpg';
import classNames from 'classnames/bind';
import styles from './HeaderClient.module.scss';
import { useGetNotificationByEmailQuery } from '../../../service/notification';
import moment from 'moment';
import { truncateStringFunction } from '../../../utils/hooks/truncateString';
import { Modal } from 'antd';

const cx = classNames.bind(styles);
interface Inotification {
    _id: string;
    notification_title: string;
    notification_content: string;
    created_at: Date;
    notificationImage?: string; 
  }
const HeaderClient = () => {
    
    const { email, isLoggedIn, token } = useAppSelector((res: any) => res.auth)
    const [selectedNotification, setSelectedNotification] = useState<Inotification | null>(null);

    const navigate = useNavigate()
    const { data: user } = useGetUserByEmailQuery(email)
    const [isModalNoti, setIsModalNoti] = useState(false);
    const dispatch = useAppDispatch()
    const [showModal, setShowModal] = useState(true)
    const [isActive, setIsActive] = useState(false)
    const modalRef: any = useRef()
    const handleOpenModalNotify = () => {
        setShowModal(false);
    }

    const handleCloseModalNotify = () => {
        setShowModal(true);
    }

    const onSignOut = async () => {
        try {
            dispatch(logoutAuth())
            navigate('/login')
        } catch (error: any) {
            message.error(error.message)
        }
    }

    const { data: notification } = useGetNotificationByEmailQuery(email);

    const showModalNoti = (notificationId: string) => {
        if (notification) {
          const selectedNoti = notification.find((noti) => noti._id === notificationId);
          if (selectedNoti) {
            setSelectedNotification(selectedNoti as Inotification | null ); // Explicitly cast to null
            setIsModalNoti(true);
          }
        }
      };
      
    const handleOkNoti = () => {
        setIsModalNoti(false);
    };
    const handleCancelNoti = () => {
        setIsModalNoti(false);
    };
      
    return (
        <>
            <div className="sticky top-0 z-[997] sc-lkcIho hIprbQ menu-homepage ">
                <NavLink to={'/'} className='cursor-pointer mr-10'>
                    <img className='w-[100px] h-[100px]' src={myImage} alt="" />
                </NavLink>
                <div className="sc-jtJlRs fqkDtm" data-text="Việc làm" tabIndex={0}>
                    <span className='flex items-center space-x-1'>
                        <div>
                            Việc làm
                        </div>
                        <svg width={13} height={7} viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 1L6.5 6L1.5 1" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <div className="sc-fbHdRr fDvwxk">
                        <div className="sc-bjjCGC iJdSOK">
                            <a className="sc-eYPhOV bZvuew" href="#">
                                Việc làm mới nhất
                            </a>
                            <NavLink to={'/works'} className="sc-eYPhOV bZvuew">
                                Tìm việc làm
                            </NavLink>
                        </div>
                    </div>
                </div>
                <ul className="cMKKZy listMenu-homepage">
                    <li><NavLink to={'/interview'} className="text-decoration-none text-[#fff] hover:text-[#fd7e14] pr-3" target="_self" data-text="Phỏng vấn" tabIndex={0}>Phỏng vấn</NavLink></li>
                    <li><NavLink to={'/company'} className="text-decoration-none text-[#fff] hover:text-[#fd7e14] pr-3" target="_self" data-text="Công ty" tabIndex={0}>Công ty</NavLink></li>
                    <li><a className="text-decoration-none text-[#fff] hover:text-[#fd7e14]" target="_blank" href="#" data-text="HR Insider" tabIndex={0}>HR Insider</a></li>
                </ul >
                <div className="sc-gCLdxd eAZlAg rightNavigation-homepage" >
                    <NavLink to={'/home'} tabIndex={0} className="sc-fSTJYd bpcIQX">Nhà tuyển dụng</NavLink>
                    <div className="sc-iJRSss bniaTV" />
                    <button className={`sc-iMJOuO hHYTlq NotificationIcon`} onClick={handleOpenModalNotify}>
                        <div className="notify-btn notification-icon">
                            <svg fill="currentColor" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18}>
                                <path d="M 12 2 C 11.172 2 10.5 2.672 10.5 3.5 L 10.5 4.1953125 C 7.9131836 4.862095 6 7.2048001 6 10 L 6 16 L 4.4648438 17.15625 L 4.4628906 17.15625 A 1 1 0 0 0 4 18 A 1 1 0 0 0 5 19 L 12 19 L 19 19 A 1 1 0 0 0 20 18 A 1 1 0 0 0 19.537109 17.15625 L 18 16 L 18 10 C 18 7.2048001 16.086816 4.862095 13.5 4.1953125 L 13.5 3.5 C 13.5 2.672 12.828 2 12 2 z M 10 20 C 10 21.1 10.9 22 12 22 C 13.1 22 14 21.1 14 20 L 10 20 z">
                                </path>
                            </svg>
                        </div>
                    </button>
                    {
                        isLoggedIn ?
                            <div>
                                <button className='flex items-center justify-center space-x-3'
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                    <span>{user?.name}</span>
                                </button>
                                <div className="text-[#555555] dropdown-menu dropdown-not-login animated fadeIn userProfileMenu-homepage mt-4"
                                    aria-labelledby="dropdownMenuButton1">
                                    <div className='flex items-center justify-between px-4 py-3'>
                                        <div>
                                            <h3 className='text-[17px] font-[700] pb-0'>{user?.name}</h3>
                                            <h4 className='text-[13px] font-normal'>{user?.email}</h4>
                                        </div>
                                        <div>
                                            <button className='border-1 border-[#FF7D55] text-[#FF7D55] px-2 py-1 rounded'>Cập nhật hồ sơ</button>
                                        </div>
                                    </div>
                                    <div className='mx-3'>
                                        <button className='flex items-center mb-1 w-100 px-[8px] py-[12px] hover:rounded hover:bg-[#EBF2FF]'>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 3.35986C5.91184 3.35986 0.959961 8.31174 0.959961 14.3999C0.959961 16.048 1.28809 17.5424 1.94621 18.9449C1.97621 19.0105 2.00809 19.0742 2.03809 19.1399C2.08309 19.228 2.12621 19.318 2.17309 19.4061C2.35121 19.753 2.54059 20.0942 2.75621 20.4224C2.84434 20.5574 2.99434 20.6399 3.15746 20.6399H20.8425C21.0056 20.6399 21.1556 20.5574 21.2437 20.4224C21.4593 20.0942 21.6487 19.753 21.8268 19.4061C21.8718 19.318 21.9168 19.228 21.9618 19.1399C21.9918 19.0742 22.0237 19.0105 22.0537 18.9449C22.7118 17.5424 23.04 16.048 23.04 14.3999C23.04 8.31174 18.0881 3.35986 12 3.35986ZM14.88 18.7199H9.11996C8.85371 18.7199 8.63996 18.5042 8.63996 18.2399C8.63996 17.9755 8.85371 17.7599 9.11996 17.7599H14.88C15.1462 17.7599 15.36 17.9755 15.36 18.2399C15.36 18.5042 15.1462 18.7199 14.88 18.7199ZM17.4412 11.7636L12.9581 14.3905C12.9581 14.3942 12.96 14.3961 12.96 14.3999C12.96 14.9305 12.5306 15.3599 12 15.3599C11.4693 15.3599 11.04 14.9305 11.04 14.3999C11.04 13.8692 11.4693 13.4399 12 13.4399C12.1706 13.4399 12.3281 13.4886 12.4668 13.5655L16.9518 10.9367C17.1787 10.8017 17.475 10.8767 17.61 11.1055C17.745 11.3342 17.67 11.6286 17.4412 11.7636ZM20.7206 19.4399C20.6306 19.5936 20.4693 19.6799 20.3043 19.6799C20.2818 19.6799 20.2575 19.6742 20.235 19.6705C20.2106 19.6742 20.1843 19.6799 20.16 19.6799C20.0681 19.6799 19.9762 19.6536 19.8937 19.5992L18.4537 18.6392C18.2325 18.493 18.1725 18.1949 18.3206 17.9736C18.4668 17.7524 18.765 17.6924 18.9862 17.8405L20.0943 18.5792C20.1 18.568 20.1056 18.5567 20.1112 18.5474C20.1131 18.5192 20.1131 18.4911 20.1337 18.4967C20.1356 18.4967 20.1375 18.4967 20.1375 18.4967C20.7075 17.368 21.0375 16.1342 21.105 14.8799H19.68C19.4137 14.8799 19.2 14.6661 19.2 14.3999C19.2 14.1355 19.4137 13.9199 19.68 13.9199H21.0956C21.0281 12.6299 20.6943 11.413 20.1431 10.318C20.1318 10.2974 20.115 10.2805 20.1037 10.258L18.9712 10.9536C18.8925 11.0024 18.8062 11.0249 18.72 11.0249C18.5587 11.0249 18.4012 10.9424 18.3112 10.7942C18.1725 10.5692 18.2437 10.273 18.4687 10.1342L19.6237 9.42736C19.5881 9.37299 19.56 9.31861 19.53 9.26424C18.8137 8.21799 17.8818 7.33299 16.8018 6.66174C16.7831 6.65049 16.7606 6.63924 16.7418 6.62799L16.05 7.88236C15.9618 8.03986 15.7987 8.12986 15.6281 8.12986C15.5512 8.12986 15.4706 8.11111 15.3975 8.06986C15.165 7.94236 15.0806 7.64986 15.21 7.41736L15.8981 6.17049C15.8868 6.16486 15.8756 6.15736 15.8643 6.15174C14.8256 5.66236 13.6837 5.36799 12.4781 5.30424V6.71986C12.4781 6.98424 12.2643 7.19986 11.9981 7.19986C11.7337 7.19986 11.5181 6.98424 11.5181 6.71986V5.30424C10.2112 5.37361 8.97559 5.71486 7.86934 6.27924C7.82996 6.30361 7.78871 6.32799 7.74934 6.34861L8.48809 7.54299C8.62684 7.76799 8.55746 8.06424 8.33059 8.20299C8.25184 8.25174 8.16559 8.27424 8.07934 8.27424C7.91809 8.27424 7.76246 8.19361 7.67059 8.04736L6.92621 6.83986C6.89246 6.86236 6.85871 6.87924 6.82496 6.89799C5.77871 7.62361 4.89746 8.56111 4.23184 9.64674L5.42809 10.2974C5.66246 10.4249 5.74871 10.7155 5.62121 10.948C5.53496 11.1092 5.36996 11.1992 5.19934 11.1992C5.12246 11.1992 5.04371 11.1805 4.97059 11.1411L3.77246 10.4905C3.27184 11.5405 2.96809 12.6974 2.90434 13.9199H4.31996C4.58621 13.9199 4.79996 14.1355 4.79996 14.3999C4.79996 14.6642 4.58621 14.8799 4.31996 14.8799H2.89496C2.96246 16.1249 3.28496 17.3474 3.84746 18.4686C3.85121 18.478 3.86059 18.4874 3.86621 18.4949C3.88121 18.5249 3.91121 18.5755 3.91121 18.5755L5.01371 17.8405C5.23496 17.6924 5.53309 17.7524 5.67934 17.9736C5.82746 18.193 5.76746 18.4911 5.54621 18.6392L4.10621 19.5992C4.02371 19.6536 3.93184 19.6799 3.83996 19.6799C3.83434 19.6799 3.82684 19.6649 3.81746 19.6555C3.61496 19.7099 3.38996 19.633 3.27934 19.4399C2.39059 17.9042 1.91996 16.1624 1.91996 14.3999C1.91996 8.84236 6.44246 4.31986 12 4.31986C17.5575 4.31986 22.08 8.84236 22.08 14.3999C22.08 16.1624 21.6093 17.9042 20.7206 19.4399Z" fill="#888888"></path>
                                            </svg>
                                            <span className='text-[14px] pl-[10px]'>Tổng quan</span>
                                        </button>
                                    </div>
                                    <div className='mx-3'>
                                        <NavLink to={'/profile'} className='flex items-center mb-1 w-100 px-[8px] py-[12px] text-[#677793] hover:rounded hover:bg-[#EBF2FF] hover:no-underline hover:text-[#6F6F6F]'>
                                            <svg width="20" height="20"
                                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.6 1.6001C4.716 1.6001 4 2.3161 4 3.2001V20.8001C4 21.6841 4.716 22.4001 5.6 22.4001H13.05C13.6612 20.6225 15.2518 20.0363 16.1078 19.7235C16.1574 19.7051 16.2135 19.6842 16.2703 19.6626C16.0815 19.4146 15.9031 19.1368 15.7688 18.8392C15.3703 18.4136 15.0797 17.7903 15.0797 17.0079C15.0797 16.8727 15.0894 16.7443 15.1078 16.6235C14.9766 16.2699 14.8687 15.8289 14.8688 15.3329C14.8703 12.9385 16.6912 11.2001 19.2 11.2001C19.4856 11.2001 19.7496 11.2523 20 11.3251V7.6001C20 7.3881 19.916 7.18407 19.7656 7.03447L14.5656 1.83447C14.4152 1.68407 14.212 1.6001 14 1.6001H5.6ZM13.6 3.12354L18.4766 8.0001H14.4C13.9584 8.0001 13.6 7.6417 13.6 7.2001V3.12354ZM19.2 12.7985C17.6928 12.7985 16.4703 13.7073 16.4703 15.3329C16.4703 16.0201 16.8547 16.5548 16.8547 16.5548C16.8547 16.5548 16.6797 16.6407 16.6797 17.0079C16.6797 17.7207 17.1391 17.8923 17.1391 17.8923C17.2031 18.4571 18.0797 19.2845 18.0797 19.2845V20.2267C17.6085 21.6419 14.4 20.8313 14.4 24.0001H24C24 20.8313 20.7915 21.6419 20.3203 20.2267V19.2845C20.3203 19.2845 21.1977 18.4571 21.2609 17.8923C21.2609 17.8923 21.7203 17.5751 21.7203 17.0079C21.7203 16.6143 21.5453 16.5548 21.5453 16.5548C21.5453 16.5548 21.8594 15.9572 21.8594 15.386C21.8594 14.2412 21.2859 13.3595 20.3203 13.3595C20.3203 13.3595 19.9096 12.7985 19.2 12.7985Z" fill="#888888"></path>
                                            </svg>
                                            <span className='text-[14px] pl-[10px]'>Hồ sơ của tôi</span>
                                        </NavLink>
                                    </div>
                                    <div className='mx-3'>
                                        <NavLink to={'/profile?tab=my-job'} className='flex items-center mb-1 w-100 px-[8px] py-[12px] hover:rounded hover:bg-[#EBF2FF]'>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.2 2.3999C10.316 2.3999 9.59998 3.1159 9.59998 3.9999H3.19998C2.31598 3.9999 1.59998 4.7159 1.59998 5.5999V12.7999C1.59998 13.6839 2.31598 14.3999 3.19998 14.3999H20.8C21.684 14.3999 22.4 13.6839 22.4 12.7999V5.5999C22.4 4.7159 21.684 3.9999 20.8 3.9999H14.4C14.4 3.1159 13.684 2.3999 12.8 2.3999H11.2ZM12 11.1999C12.4416 11.1999 12.8 11.5583 12.8 11.9999C12.8 12.4415 12.4416 12.7999 12 12.7999C11.5584 12.7999 11.2 12.4415 11.2 11.9999C11.2 11.5583 11.5584 11.1999 12 11.1999ZM1.59998 15.5546V18.3999C1.59998 19.2839 2.31598 19.9999 3.19998 19.9999H20.8C21.684 19.9999 22.4 19.2839 22.4 18.3999V15.5546C21.9272 15.8298 21.3856 15.9999 20.8 15.9999H3.19998C2.61438 15.9999 2.07278 15.8298 1.59998 15.5546Z" fill="#888888"></path>
                                            </svg>
                                            <span className='text-[14px] pl-[10px] text-[#677793]'>
                                                Việc làm của tôi
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div className='mx-3'>
                                        <NavLink to={'/profile?tab=account-manage'} className='flex items-center mb-1 w-100 px-[8px] py-[12px] hover:rounded hover:bg-[#EBF2FF]'>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_3011_6580)">
                                                    <path d="M22.6368 10.186L19.8 9.72236C19.6339 9.15308 19.4069 8.60588 19.1227 8.08796L20.7787 5.7278C20.9126 5.53724 20.8896 5.27756 20.7249 5.11244L18.8582 3.24668C18.6917 3.0806 18.4296 3.059 18.2385 3.19676L15.9139 4.86764C15.3912 4.57868 14.8392 4.34924 14.2665 4.18268L13.7717 1.3574C13.7313 1.12796 13.5321 0.959961 13.2989 0.959961H10.6589C10.4237 0.959961 10.223 1.13036 10.1851 1.36268L9.72622 4.1726C9.15022 4.3382 8.59726 4.56524 8.07646 4.85036L5.75806 3.19436C5.56654 3.05756 5.3059 3.07964 5.13934 3.24524L3.27358 5.111C3.10894 5.27564 3.0859 5.53484 3.21982 5.7254L4.85134 8.05964C4.56094 8.58524 4.32958 9.14156 4.1611 9.72044L1.36222 10.1865C1.13086 10.2249 0.960938 10.4256 0.960938 10.6598V13.2998C0.960938 13.5326 1.12798 13.7318 1.35694 13.7726L4.15582 14.2689C4.32334 14.8464 4.5547 15.4027 4.84606 15.9297L3.19438 18.24C3.05806 18.4305 3.07966 18.6921 3.24526 18.8587L5.1115 20.7264C5.27614 20.891 5.53582 20.914 5.72638 20.7801L8.06398 19.1428C8.58862 19.4313 9.14302 19.6603 9.71758 19.8264L10.1861 22.6396C10.224 22.8705 10.4241 23.04 10.6589 23.04H13.2989C13.5317 23.04 13.7309 22.8729 13.7712 22.644L14.2728 19.8168C14.8483 19.6473 15.3998 19.4169 15.9192 19.128L18.2736 20.7796C18.4646 20.9145 18.7238 20.891 18.8889 20.7264L20.7552 18.8587C20.9213 18.6921 20.9429 18.4296 20.8051 18.2385L19.1261 15.9072C19.4107 15.3888 19.6368 14.8406 19.8014 14.2713L22.6421 13.7726C22.872 13.7323 23.039 13.5326 23.039 13.2998V10.6598C23.0395 10.4246 22.8691 10.224 22.6368 10.186ZM12 15.36C10.1443 15.36 8.63998 13.8556 8.63998 12C8.63998 10.1443 10.1443 8.63996 12 8.63996C13.8557 8.63996 15.36 10.1443 15.36 12C15.36 13.8556 13.8557 15.36 12 15.36Z" fill="#888888"></path></g><defs><clipPath id="clip0_3011_6580"><rect width="24" height="24" fill="white">
                                                    </rect></clipPath></defs>
                                            </svg>
                                            <span className='text-[14px] pl-[10px] text-[#677793]'>
                                                Quản lý tài khoản
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div className='mx-3' onClick={onSignOut}>
                                        <button className='flex items-center mb-1 w-100 px-[8px] py-[12px] hover:rounded hover:bg-[#EBF2FF]'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 2C2.598 2 2 2.598 2 3.33333V16.6667C2 17.402 2.598 18 3.33333 18H12.6667C13.402 18 14 17.402 14 16.6667V10.6667H8.66667C8.29867 10.6667 8 10.368 8 10C8 9.632 8.29867 9.33333 8.66667 9.33333H14V3.33333C14 2.598 13.402 2 12.6667 2H3.33333ZM14 9.33333V10.6667H17.724L16.1953 12.1953C16.1313 12.2567 16.0802 12.3303 16.0451 12.4117C16.0099 12.4932 15.9913 12.5808 15.9904 12.6695C15.9895 12.7582 16.0063 12.8462 16.0398 12.9283C16.0733 13.0104 16.1229 13.085 16.1856 13.1477C16.2483 13.2104 16.3229 13.26 16.4051 13.2935C16.4872 13.3271 16.5752 13.3439 16.6639 13.343C16.7526 13.3421 16.8402 13.3235 16.9216 13.2883C17.003 13.2531 17.0766 13.202 17.138 13.138L19.8047 10.4714C19.9297 10.3463 19.9999 10.1768 19.9999 10C19.9999 9.82322 19.9297 9.65368 19.8047 9.52865L17.138 6.86198C17.0759 6.79812 17.0016 6.74735 16.9195 6.71269C16.8374 6.67802 16.7493 6.66016 16.6602 6.66016C16.5275 6.66019 16.3979 6.69978 16.2879 6.77385C16.1779 6.84793 16.0925 6.95313 16.0426 7.076C15.9927 7.19888 15.9806 7.33384 16.0078 7.46365C16.035 7.59345 16.1003 7.71219 16.1953 7.80469L17.724 9.33333H14Z" fill="#888888"></path></svg>
                                            <span className='text-[14px] pl-[10px]'>Thoát</span>
                                        </button>
                                    </div>
                                </div>
                            </div> :
                            <div className="gpqYMH hidden-mobile div-login-homepage">
                                <button className="wrapper-user-btn"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <div className="avatar-icon-no-avatar">
                                        <svg width={17} height={18} fill="currentColor" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 18">
                                            <defs>
                                                <filter id="filter-1">
                                                    <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0">
                                                    </feColorMatrix>
                                                </filter>
                                            </defs>
                                            <g id="2020-SEARCHRESULT-HOMEPAGE" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <g id="Homepage-Header-1-Copy" transform="translate(-1478.000000, -20.000000)">
                                                    <g id="section/header/top-nav-blue" transform="translate(0.000000, -2.000000)">
                                                        <g id="banner/banner-1" transform="translate(1466.000000, 10.000000)" filter="url(#filter-1)">
                                                            <g transform="translate(12.000000, 12.000000)" id="icons/nav/icon-user-avatar" fill="#FFFFFF">
                                                                <path d="M8.08885706,0.14957265 C6.60287,0.176389729 5.51756296,0.619662241 4.85817562,1.48727668 C4.07732234,2.51579441 3.93534924,4.08223311 4.42910075,6.13138125 C4.24769031,6.353806 4.11044975,6.69138717 4.16408391,7.1409692 C4.26977525,8.02751383 4.62470841,8.39506684 4.90865502,8.54177249 C5.04589598,9.24217413 5.43237877,10.0261822 5.80466433,10.3968903 L5.80466433,10.5861881 C5.80624171,10.8527823 5.80150957,11.1051793 5.79204448,11.3686187 C6.00342716,11.8103135 6.67385655,12.5044052 8.13933646,12.5044052 C9.61585884,12.5044052 10.3036406,11.7961162 10.4992483,11.3055195 C10.491361,11.0625876 10.4976709,10.8322751 10.4992483,10.5861881 L10.4992483,10.3968903 C10.8604914,10.02776 11.2327769,9.24217413 11.3700179,8.54177249 C11.6618518,8.39664422 12.0073203,8.03066859 12.114589,7.1409692 C12.1682236,6.70085186 12.0388699,6.36642585 11.862192,6.1440011 C12.0972366,5.34421805 12.5767909,3.2619429 11.7486134,1.92897141 C11.4015675,1.37054328 10.8762664,1.01876488 10.1837521,0.881523913 C9.80200182,0.400392257 9.07005056,0.14957265 8.08885706,0.14957265 Z M10.8652239,12.2393884 C10.3556974,12.8277887 9.45495596,13.3120755 8.13933646,13.3120755 C6.80005505,13.3120755 5.9245529,12.8199014 5.42606885,12.2520082 C5.04116344,12.5753917 4.42594599,12.818324 3.74762888,13.0849183 C2.17014771,13.7048683 0.209338509,14.4715243 0.0626328611,16.9213525 L0.0373931624,17.3504274 L16.2412798,17.3504274 L16.2160401,16.9213525 C16.0693344,14.4715243 14.1164125,13.7048683 12.5436639,13.0849183 C11.862192,12.8151689 11.248552,12.5675044 10.8652239,12.2393884 Z" id="Shape" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="login-text">
                                        <div className="user-text-noLogin">Đăng nhập</div>
                                    </div>
                                    <div className="dropdown-icon dropdown-icon-noLogin">
                                        <svg width={11} height={6} fill="#b4e3f7" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 6">
                                            <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <g id="Avatar/AvatarBox-Btn-LogIn" transform="translate(-147.000000, -32.000000)" fill="#b4e3f7" fillRule="nonzero">
                                                    <g id="icons8-sort_down" transform="translate(147.000000, 32.000000)">
                                                        <path d="M5.5,6 C5.372,6 5.244,5.951 5.1465,5.8535 L0.1465,0.8535 C0.0035,0.7105 -0.0395,0.4955 0.038,0.3085 C0.115,0.1215 0.298,0 0.5,0 L10.5,0 C10.702,0 10.885,0.1215 10.962,0.3085 C11.0395,0.4955 10.9965,0.7105 10.8535,0.8535 L5.8535,5.8535 C5.756,5.951 5.628,6 5.5,6 Z" id="Path" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </button>
                                <ul className="dropdown-menu dropdown-not-login animated fadeIn userProfileMenu-homepage mt-3"
                                    aria-labelledby="dropdownMenuButton1">
                                    <li className="title w-full">
                                        <span className="ask">Người tìm việc đăng nhập</span>
                                        <div className="social-login-appShell">
                                            <a href="https://www.vietnamworks.com/dang-nhap?type=facebook" className="social-login-facebook" tabIndex={0}>
                                                <svg fill="currentColor" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                                    <path d="M44,38.44A5.56,5.56,0,0,1,38.44,44H9.56A5.56,5.56,0,0,1,4,38.44V9.56A5.56,5.56,0,0,1,9.56,4H38.44A5.56,5.56,0,0,1,44,9.56Z" style={{ fill: '#3f51b5' }} />
                                                    <path d="M35.52,25.11H31.78V39.56H26.22V25.11H22.89V20.67h3.33V18c0-3.9,1.62-6.21,6.22-6.21h3.78v4.44H33.68c-1.79,0-1.91.67-1.91,1.91v2.53h4.44Z" style={{ fill: '#fff' }} />
                                                </svg>
                                                <span>Với Facebook</span>
                                            </a>
                                            <a href="https://www.vietnamworks.com/dang-nhap?type=google" className="social-login-google" tabIndex={0}>
                                                <svg fill="currentColor" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                                    <path style={{ fill: '#FFC107' }} d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 33.652344 32.65625 29.222656 36 24 36 C 17.371094 36 12 30.628906 12 24 C 12 17.371094 17.371094 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 12.953125 4 4 12.953125 4 24 C 4 35.046875 12.953125 44 24 44 C 35.046875 44 44 35.046875 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z ">
                                                    </path>
                                                    <path style={{ fill: '#FF3D00' }} d="M 6.304688 14.691406 L 12.878906 19.511719 C 14.65625 15.109375 18.960938 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 16.316406 4 9.65625 8.335938 6.304688 14.691406 Z ">
                                                    </path>
                                                    <path style={{ fill: '#4CAF50' }} d="M 24 44 C 29.164063 44 33.859375 42.023438 37.410156 38.808594 L 31.21875 33.570313 C 29.210938 35.089844 26.714844 36 24 36 C 18.796875 36 14.382813 32.683594 12.71875 28.054688 L 6.195313 33.078125 C 9.503906 39.554688 16.226563 44 24 44 Z ">
                                                    </path>
                                                    <path style={{ fill: '#1976D2' }} d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 34.511719 30.238281 33.070313 32.164063 31.214844 33.570313 C 31.21875 33.570313 31.21875 33.570313 31.21875 33.570313 L 37.410156 38.808594 C 36.972656 39.203125 44 34 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z ">
                                                    </path>
                                                </svg>
                                                <span>với Google</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="dropdownSection login w-full">
                                        <NavLink to={'/login'} tabIndex={0}>
                                            <svg width={25} height={25} fill="#555555" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                                <path d="M 25 2 C 15.257933 2 6.9235076 8.0691703 3.5761719 16.636719 A 1.0001 1.0001 0 1 0 5.4375 17.363281 C 8.4921642 9.5448298 16.088067 4 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 16.088067 46 8.4921642 40.455171 5.4375 32.636719 A 1.0001 1.0001 0 1 0 3.5761719 33.363281 C 6.9235076 41.930829 15.257933 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25.990234 15.990234 A 1.0001 1.0001 0 0 0 25.292969 17.707031 L 31.585938 24 L 3 24 A 1.0001 1.0001 0 1 0 3 26 L 31.585938 26 L 25.292969 32.292969 A 1.0001 1.0001 0 1 0 26.707031 33.707031 L 34.707031 25.707031 A 1.0001 1.0001 0 0 0 34.707031 24.292969 L 26.707031 16.292969 A 1.0001 1.0001 0 0 0 25.990234 15.990234 z">
                                                </path>
                                            </svg>
                                            <span>Đăng nhập</span>
                                        </NavLink>
                                    </li>
                                    <li className="dropdownSection registration w-full">
                                        <NavLink to={'/signup'} tabIndex={0}>
                                            <svg width={25} height={25} fill="#555555" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                                <path d="M 19.875 0.40625 C 15.203125 0.492188 12.21875 2.378906 10.9375 5.3125 C 9.714844 8.105469 9.988281 11.632813 10.875 15.28125 C 10.398438 15.839844 10.019531 16.589844 10.15625 17.71875 C 10.304688 18.949219 10.644531 19.824219 11.125 20.4375 C 11.390625 20.773438 11.738281 20.804688 12.0625 20.96875 C 12.238281 22.015625 12.53125 23.0625 12.96875 23.9375 C 13.21875 24.441406 13.503906 24.90625 13.78125 25.28125 C 13.90625 25.449219 14.085938 25.546875 14.21875 25.6875 C 14.226563 26.921875 14.230469 27.949219 14.125 29.25 C 13.800781 30.035156 13.042969 30.667969 11.8125 31.28125 C 10.542969 31.914063 8.890625 32.5 7.21875 33.21875 C 5.546875 33.9375 3.828125 34.8125 2.46875 36.1875 C 1.109375 37.5625 0.148438 39.449219 0 41.9375 L -0.0625 43 L 25 43 L 24.34375 41 L 2.25 41 C 2.53125 39.585938 3.058594 38.449219 3.90625 37.59375 C 4.972656 36.515625 6.425781 35.707031 8 35.03125 C 9.574219 34.355469 11.230469 33.820313 12.6875 33.09375 C 14.144531 32.367188 15.492188 31.410156 16.0625 29.875 L 16.125 29.625 C 16.277344 27.949219 16.21875 26.761719 16.21875 25.3125 L 16.21875 24.71875 L 15.6875 24.4375 C 15.777344 24.484375 15.5625 24.347656 15.375 24.09375 C 15.1875 23.839844 14.957031 23.476563 14.75 23.0625 C 14.335938 22.234375 13.996094 21.167969 13.90625 20.3125 L 13.8125 19.5 L 12.96875 19.4375 C 12.960938 19.4375 12.867188 19.449219 12.6875 19.21875 C 12.507813 18.988281 12.273438 18.480469 12.15625 17.5 C 12.058594 16.667969 12.480469 16.378906 12.4375 16.40625 L 13.09375 16 L 12.90625 15.28125 C 11.964844 11.65625 11.800781 8.363281 12.78125 6.125 C 13.757813 3.894531 15.75 2.492188 19.90625 2.40625 C 19.917969 2.40625 19.925781 2.40625 19.9375 2.40625 C 21.949219 2.414063 23.253906 3.003906 23.625 3.65625 L 23.875 4.0625 L 24.34375 4.125 C 25.734375 4.320313 26.53125 4.878906 27.09375 5.65625 C 27.65625 6.433594 27.96875 7.519531 28.0625 8.71875 C 28.25 11.117188 27.558594 13.910156 27.125 15.21875 L 26.875 16 L 27.5625 16.40625 C 27.519531 16.378906 27.945313 16.667969 27.84375 17.5 C 27.726563 18.480469 27.492188 18.988281 27.3125 19.21875 C 27.132813 19.449219 27.039063 19.4375 27.03125 19.4375 L 26.1875 19.5 L 26.09375 20.3125 C 26 21.175781 25.652344 22.234375 25.25 23.0625 C 25.046875 23.476563 24.839844 23.839844 24.65625 24.09375 C 24.472656 24.347656 24.28125 24.488281 24.375 24.4375 L 23.84375 24.71875 L 23.84375 25.3125 C 23.84375 26.757813 23.785156 27.949219 23.9375 29.625 L 23.9375 29.75 L 24 29.875 C 24.320313 30.738281 24.882813 31.605469 25.8125 32.15625 L 26.84375 30.4375 C 26.421875 30.1875 26.144531 29.757813 25.9375 29.25 C 25.832031 27.949219 25.835938 26.921875 25.84375 25.6875 C 25.972656 25.546875 26.160156 25.449219 26.28125 25.28125 C 26.554688 24.902344 26.816406 24.4375 27.0625 23.9375 C 27.488281 23.0625 27.796875 22.011719 27.96875 20.96875 C 28.28125 20.804688 28.617188 20.765625 28.875 20.4375 C 29.355469 19.824219 29.695313 18.949219 29.84375 17.71875 C 29.976563 16.625 29.609375 15.902344 29.15625 15.34375 C 29.644531 13.757813 30.269531 11.195313 30.0625 8.5625 C 29.949219 7.125 29.582031 5.691406 28.71875 4.5 C 27.929688 3.40625 26.648438 2.609375 25.03125 2.28125 C 23.980469 0.917969 22.089844 0.40625 19.90625 0.40625 Z M 38 26 C 31.382813 26 26 31.382813 26 38 C 26 44.617188 31.382813 50 38 50 C 44.617188 50 50 44.617188 50 38 C 50 31.382813 44.617188 26 38 26 Z M 38 28 C 43.535156 28 48 32.464844 48 38 C 48 43.535156 43.535156 48 38 48 C 32.464844 48 28 43.535156 28 38 C 28 32.464844 32.464844 28 38 28 Z M 37 32 L 37 37 L 32 37 L 32 39 L 37 39 L 37 44 L 39 44 L 39 39 L 44 39 L 44 37 L 39 37 L 39 32 Z">
                                                </path>
                                            </svg>
                                            <span>Tạo tài khoản mới</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                    }
                </div>
            </div>
            <div ref={modalRef} onClick={handleCloseModalNotify} className={cx('container', {
                'd-none': showModal,
            })}>
                <div className={cx('modal')} onClick={(e: any) => {
                    e.stopPropagation();
                }}>
                    <div className={cx('modal-header')}>
                        <div className={cx('modal-header__icon')}>
                            <i className="fa-regular fa-bell"></i>
                        </div>
                        <div className={cx('modal-header__title')}>
                            <h2>Thông báo & Tin tức</h2>
                            <p>Nhận thông báo tin tức hoặc công việc</p>
                        </div>
                        <button onClick={handleCloseModalNotify} className={cx('modal-header__btn')}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div className={cx('modal-body')}>
                        <div className={cx('modal-body__tabs')}>
                            <span onClick={() => setIsActive(false)} className={cx('modal-body__tabs-notify', {
                                active: isActive === false
                            })}>Thông báo</span>
                            <span onClick={() => setIsActive(true)} className={cx('modal-body__tabs-news', {
                                active: isActive
                            })}>Tin tức</span>
                        </div>

                        {
                            isActive ?
                                <>
                                    <div className={cx('modal-body__news')}>
                                        <h6 className={cx('modal-body__news-title')}>
                                            Follow kênh LinkedIn của VietnamWorks
                                        </h6>
                                        <p className={cx('modal-body__news-content')}>
                                            Trang LinkedIn của VietnamWorks - nơi cập nhật các thông tin bổ ích, nhanh chóng cho người tìm việc và nhà tuyển dụng, theo dõi ngay!
                                        </p>
                                        <div className={cx('modal-body__news-info')}>
                                            <span>Mở rộng</span>
                                            <span>18 Tháng 9 2023</span>
                                        </div>
                                    </div>
                                    <div className={cx('modal-body__news')}>
                                        <h6 className={cx('modal-body__news-title')}>
                                            Follow kênh LinkedIn của VietnamWorks
                                        </h6>
                                        <p className={cx('modal-body__news-content')}>
                                            Trang LinkedIn của VietnamWorks - nơi cập nhật các thông tin bổ ích, nhanh chóng cho người tìm việc và nhà tuyển dụng, theo dõi ngay!
                                        </p>
                                        <div className={cx('modal-body__news-info')}>
                                            <span>Mở rộng</span>
                                            <span>18 Tháng 9 2023</span>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className={cx('modal-body__msg')}>
                                        Cập nhật hồ sơ để tìm thấy công việc phù hợp.
                                        <span>Cập nhật</span>
                                    </div>
                                    <div className={cx('modal-body__content')}>
                                        <div className={cx('modal-body__content')}>
                                            <div>
                                                {notification ? (
                                                    notification.map((noti) => (
                                                        <div key={noti._id} className={cx('modal-body__content-notify')} onClick={() => showModalNoti(noti._id)}>
                                                            <span className={cx('notify-img')}>
                                                                <img src={noti.notificationImage} alt="" />
                                                                <span>
                                                                    <i className="fa-solid fa-heart"></i>
                                                                </span>
                                                            </span>
                                                            <div className={cx('notify-content')}>
                                                                <span className={cx('notify-title')}>{noti.notification_title}</span>
                                                                <span>{truncateStringFunction(noti.notification_content, 30)}</span>
                                                                <div className={cx('notify-desc')}>
                                                                    <span className={cx('notify-expirate')}>
                                                                        {moment(noti.created_at).format('DD/MM/YYYY HH:mm')}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p>Loading notifications...</p>
                                                )}
                                                <Modal title="Basic Modal" open={isModalNoti} onOk={handleOkNoti} onCancel={handleCancelNoti}>
                                                    {selectedNotification && (
                                                        <>
                                                            <span className={cx('notify-title')}>{ selectedNotification.notification_title}</span>
                                                            <span>{selectedNotification.notification_content}</span>
                                                        </>
                                                    )}
                                                </Modal>
                                            </div>
                                        </div>
                                    </div>

                                </>
                        }


                    </div>

                    <div className={cx('modal-footer')}>
                        <div className={cx('modal-footer__icon')}>
                            <i className="fa-regular fa-bell"></i>
                        </div>

                        <div className={cx('modal-footer__content')}>
                            <span className={cx('modal-footer__content-link')}>Công việc mới</span> hấp dẫn dành riêng cho bạn!
                        </div>
                    </div>
                </div>
            </div>
            {/* {
                showModal && 
                
            } */}
        </ >
    )
}

export default HeaderClient