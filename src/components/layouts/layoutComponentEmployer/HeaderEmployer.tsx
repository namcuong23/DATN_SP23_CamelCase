import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs'
import { SettingOutlined } from "@ant-design/icons"
import { Drawer, message } from 'antd';
import UseAuth from '../../auth/UseAuth';
import { useGetProfileQuery } from '../../../service/manage_profile';
import ImanageProfile from '../../../interface/manageProfile';
import { useGetUserEprByEmailQuery } from '../../../service/auth_employer';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';

const HeaderEmployer = () => {
    const [open, setOpen] = useState(false);
    const currentUser: any = UseAuth()
    const navigate = useNavigate()
    const data: any = useGetProfileQuery(currentUser?.email)
    const profile: ImanageProfile = data.currentData
    const user = useGetUserEprByEmailQuery(currentUser?.email)

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onSignOut = async () => {
        try {
            const signout: any = await signOut(auth)
            if (signout) {
                navigate('/login-epr')
            }
        } catch (error: any) {
            message.info(error.message)
        }
    }
    return (
        <>
            {/* Header */}
            <div className='sticky top-0 z-[1000] bg-gradient-to-r from-[#001744] via-[#001744] to-[#0053EB] d-flex justify-content-between align-items-center'>
                <ul className='text-white'>
                    <li className='p-3 text-decoration-none text-white'>
                        <NavLink to={'/home'}
                            className='d-flex align-items-center text-decoration-none text-white'>
                            <span className='hover:text-orange-400'>
                                Bảng điều khiển
                            </span>
                        </NavLink>
                    </li>
                    <li className='p-3 text-decoration-none text-white'>
                        <NavLink to={'/home/posts'}
                            className='d-flex align-items-center text-decoration-none text-white'>
                            <span className='hover:text-orange-400'>
                                Bài viết
                            </span>

                        </NavLink>
                    </li>
                    <li className='p-3 text-decoration-none text-white'><a>Ứng viên</a></li>
                    <li className='p-3 text-decoration-none text-white'><a>Ưu đãi</a></li>
                    <li className='p-3 text-decoration-none text-white'><a>Đơn hàng</a></li>
                    <li className='p-3 text-decoration-none text-white'><a>Báo cáo</a></li>
                </ul>
                <ul>
                    <li className='p-3 pr-4 text-decoration-none text-white'>
                        <button onClick={showDrawer}>
                            <BsPersonCircle className='text-3xl' />
                        </button>
                    </li>
                </ul>
                <Drawer
                    placement={'right'}
                    closable={false}
                    onClose={onClose}
                    open={open}
                    height={500}
                    key={'right'}
                    className='relative w-full stick bottom-0'
                >
                    {user.currentData ?
                        <div>
                            <div className='absolute left-0 flex items-center px-[30px] pb-[25px] gap-[20px] border-b-[1px] w-100'>
                                <BsPersonCircle className='text-5xl text-[#474747]' />
                                <div>
                                    <h2 className='text-[20px] text-[#474747] font-[700]'>{profile?.name}</h2>
                                    <div className='text-[15px]'>{profile?.email}</div>
                                </div>
                            </div>
                            <div className='pt-[90px] px-[10px]'>
                                <div className='flex items-start gap-2'>
                                    <SettingOutlined className='text-[25px] font-[700]' />
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-[17px] text-[#474747] font-[700]'>Thiết lập tài khoản</span>
                                        <span className='text-[15px] text-[#474747]'>Quản lý tài khoản</span>
                                        <span className='text-[15px] text-[#474747]'>Thông tin NTD</span>
                                        <span className='text-[15px] text-[#474747]'>Quản lý ứng viên</span>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute bottom-0 left-0 bg-[#F5F5F5] w-full p-3'>
                                <button className='flex items-center gap-2 text-[17px] text-[#474747] font-[700] px-[20px]' onClick={onSignOut}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                    </svg>
                                    Thoát
                                </button>
                            </div>
                        </div> :
                        <div>
                            <div className='mt-[150px]'>
                                <div className='flex justify-center'>
                                    <img src="https://employer.vietnamworks.com/v2/img/slider/image_not_login.svg" alt="" />
                                </div>
                                <div className='text-center'>
                                    <p className='py-3'>Đăng nhập để khám phá nhiều tính năng</p>
                                    <NavLink
                                        to={'/login-epr'}
                                        className='bg-[#FE7D55] hover:bg-[#FD6333] text-white py-2 px-3 rounded hover:no-underline'>
                                        Đăng nhập
                                    </NavLink>
                                </div>
                            </div>
                            <div className='absolute bottom-0 left-0 bg-[#F5F5F5] w-full py-3 text-center'>
                                <a href="#" className='text-[#2775FE] text-xl'>Tôi không có tài khoản</a>
                            </div>
                        </div>
                    }
                </Drawer>
            </div>
        </>
    )
}

export default HeaderEmployer