import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs'

const HeaderEmployer = () => {
    return (
        <>
            {/* Header */}
            <div className='bg-gradient-to-r from-[#001744] via-[#001744] to-[#0053EB] d-flex justify-content-between align-items-center'>
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

                    <li className='p-3 text-decoration-none text-white'>
                        <a>
                            <BsPersonCircle className='text-3xl' />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default HeaderEmployer