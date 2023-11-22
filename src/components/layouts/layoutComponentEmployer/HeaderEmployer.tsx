import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs'
import { Drawer, message } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../app/hook';
import { logoutAuth } from '../../../app/actions/auth';
import { useGetUserEprByEmailQuery } from '../../../service/auth_employer';
import {FaCartPlus} from "react-icons/fa"
import { useGetProfileQuery } from '../../../service/manage_profile'
import { useGetPostsQuery } from '../../../service/post'
import { WhatsAppOutlined } from '@ant-design/icons'
import { useAddFeedbackMutation } from '../../../services/feedback'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFeedback } from '../../../interfaces/feedback'
import { MessageType } from 'antd/es/message/interface'
import { Button, Modal } from 'antd';
import {IoMdNotifications} from "react-icons/io"
import classNames from 'classnames/bind';
import styles from './../layoutComponentClient/HeaderClient.module.scss';
const HeaderEmployer = () => {
    const { email, isLoggedIn } = useAppSelector((res) => res.authEmpr)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const { data: user } = useGetUserEprByEmailQuery<any>(email)
    const dispatch = useAppDispatch()
    const cx = classNames.bind(styles);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onSignOut = async () => {
        try {
            dispatch(logoutAuth())
            navigate('/login-epr')
        } catch (error: any) {
            message.info(error.message)
        }
    }
    const profiles: any = useGetProfileQuery(email)
    const [addFeedback, { isLoading }] = useAddFeedbackMutation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IFeedback>()
    const onSubmit: SubmitHandler<IFeedback> = (data) => {
        addFeedback({
            ...data,
            feedback_email: email
        })
        const confirm: MessageType = message.info('Gửi yêu cầu thành công')
        try {
        } catch (error) {

        }
    }
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
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
                    <li className='p-3 text-decoration-none text-white'>
                        <NavLink to={'/home/candidates'}
                            className='d-flex align-items-center text-decoration-none text-white'>
                            <span className='hover:text-orange-400'>
                                Ứng viên
                            </span>
                        </NavLink>
                    </li>
                    <li className='p-3 text-decoration-none text-white'>
                        <NavLink to={'/home/packages'}
                            className='d-flex align-items-center text-decoration-none text-white'>
                            <span className='hover:text-orange-400'>
                                Mua dịch vụ
                            </span>
                        </NavLink>
                    </li>
                    <li className='p-3 text-decoration-none text-white'>
                        <NavLink to={'/home/services'}
                            className='d-flex align-items-center text-decoration-none text-white'>
                            <span className='hover:text-orange-400'>
                                Dịch vụ của tôi
                            </span>
                        </NavLink>
                    </li>
                    <li className='p-3 text-decoration-none text-white'>
                        <NavLink to={'/report'}
                            className='d-flex align-items-center text-decoration-none text-white'>
                            <span className='hover:text-orange-400'>
                            Hỗ trợ
                            </span>
                        </NavLink>
                    </li>
                </ul>
                <ul className='flex items-center '>
                <li className='p-3 pr-4 text-decoration-none text-white'>
                        <button onClick={showDrawer}>
                            <IoMdNotifications className='text-3xl' />
                        </button>
                    </li>
                    <li className='p-3 pr-4 text-decoration-none'>
                        <NavLink to={'/home/cart'}>
                            <FaCartPlus className='text-[28px] text-white' />
                        </NavLink>
                    </li>
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
                    {isLoggedIn ?
                        <div>
                            <div className='absolute left-0 flex items-center px-[30px] gap-[20px] w-100'>
                                {
                                    user?.image ? 
                                    <img src={user?.image} alt="" 
                                        style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%'
                                        }}
                                    />
                                    : <BsPersonCircle className='text-5xl text-[#474747]' />
                                }
                              
                                
                                <div>
                                <p className='text-[21px]'>Thông báo & Tin tức</p>
                                <p>Nhận thông báo tin tức hoặc công việc</p>
                                </div>
                               
                            </div>
                            <div >
            
                                    <div className={cx('modal-body__msg1')} >
                                        {/* Cập nhật hồ sơ để tìm thấy công việc phù hợp. 
                                        <span>Cập nhật</span> */}
                                    </div>
                                    <div className={cx('modal-body__content')}>
                                        <div className={cx('modal-body__content-notify')}>
                                            <span className={cx('notify-img')}>
                                                <img src="https://images.vietnamworks.com/pictureofcompany/89/11125541.png" alt="" />
                                                <span>
                                                    <i className="fa-solid fa-heart"></i>
                                                </span>
                                            </span>
                                            <div className={cx('notify-content')}>
                                                <span className={cx('notify-title')} title='Giám Đốc Cao Cấp Quan Hệ Khách Hàng - Quan Hệ Khách Hàng'>
                                                    Giám Đốc Cao Cấp Quan Hệ Khách Hàng - Quan Hệ Khách Hàng
                                                </span>
                                                <div className={cx('notify-desc')}>
                                                    <span className={cx('notify-status')}>đã lưu</span>
                                                    <span className={cx('notify-expirate')}>hết hạn trong 98 ngày trước</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('modal-body__content-notify')}>
                                            <span className={cx('notify-img')}>
                                                <img src="https://images.vietnamworks.com/pictureofcompany/89/11125541.png" alt="" />
                                                <span>
                                                    <i className="fa-solid fa-heart"></i>
                                                </span>
                                            </span>
                                            <div className={cx('notify-content')}>
                                                <span className={cx('notify-title')} title='Giám Đốc Cao Cấp Quan Hệ Khách Hàng'>
                                                    Giám Đốc Cao Cấp Quan Hệ Khách Hàng
                                                </span>
                                                <div className={cx('notify-desc')}>
                                                    <span className={cx('notify-status')}>đã lưu</span>
                                                    <span className={cx('notify-expirate')}>hết hạn trong 98 ngày trước</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            {/* <div className='pt-[90px] px-[10px]'>
                                <div className='flex items-start'>
                                    <SettingOutlined className='text-[25px] font-[700]' />
                                    <div className='flex flex-col'>
                                        <span className='text-[17px] text-[#474747] font-[700] px-3'>Thiết lập tài khoản</span>
                                        <NavLink
                                            to={'/home/acc-epr-manage'}
                                            className='text-[15px] text-[#474747] hover:text-[#474747] hover:bg-[#F3F8FC] px-3 py-1'>
                                            Quản lý tài khoản
                                        </NavLink>
                                        <NavLink
                                            to={'/home/profile-epr'}
                                            className='text-[15px] text-[#474747] hover:text-[#474747] hover:bg-[#F3F8FC] px-3 py-1'>
                                            Thông tin NTD
                                        </NavLink>
                                        <span className='text-[15px] text-[#474747] px-3 py-1'>Quản lý ứng viên</span>
                                    </div>
                                </div>
                            </div> */}
                            <div className='absolute bottom-0 left-0 bg-[#F5F5F5] w-full p-3'>
                                <button className='flex items-center gap-2 text-[17px] text-[#474747] font-[700] px-[20px]' onClick={onSignOut}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
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
            <div className="float-contact ">
                <Button className='bg-[#f52b72] text-white m-2' onClick={showModal}>
                    <WhatsAppOutlined /> Hỗ trợ
                </Button>
                <Modal title="Đóng góp ý kiến" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='h-[80px] w-100 py-3 bg-white'>
                            <div className='container flex items-center justify-center h-100 w-100'>
                                <div className='flex items-center h-100 bg-[#F4F4F7] w-75 mr-2'>
                                    <div className='h-100 flex items-center bg-[#F4F4F7] w-[100%] border rounded'>
                                        <input type="text" className='bg-[#F4F4F7] h-100 w-[100%] text-gray-600 focus:outline-none' placeholder='Nhập câu hỏi cần giải đáp' {...register("feedback_question", { required: true })} />
                                        {errors.feedback_question?.type === "required" && <p className='text-danger font-bold w-200'>Vui lòng nhập câu hỏi của bạn !</p>}
                                    </div>
                                    {/* <div className='hidden'>
                    {currentUser?.email}
                  </div> */}
                                </div>
                                <div className='h-100'>
                                    <div className='h-100'>
                                        <button className='bg-[#FE7D55] hover:bg-[#FD6333] text-white rounded h-100 px-10'>Gửi</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </Modal>
            </div>
        </>
    )
}

export default HeaderEmployer