import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            {/* Header */}
            <div className='bg-success d-flex justify-content-between align-items-center'>
                <ul className='text-white'>
                    <li className='p-3 text-decoration-none text-white'><a>Bảng điều khiển</a></li>
                    <li className='p-3 text-decoration-none text-white'><a>Công việc</a></li>
                    <li className='p-3 text-decoration-none text-white'><a>Ứng viên</a></li>
                    <li className='p-3 text-decoration-none text-white'><a>Giới thiệu</a></li>
                    <li className='p-3 text-decoration-none text-white'><a>Trật tự</a></li>
                    <li className='p-3 text-decoration-none text-white'><a>Bài viết</a></li>
                </ul>
                <ul>
                    <li className='p-3 text-decoration-none text-white'><a>Đăng xuất</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header