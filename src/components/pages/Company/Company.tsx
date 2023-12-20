import { useState, useRef } from 'react';

import './Company.css'
import HeaderSearchhJob from '../../layouts/HeaderSearchhJob';
import React from 'react';
import { useGetUsersEprQuery } from '../../../service/auth_employer';
import { NavLink } from 'react-router-dom';

type Props = {}

const Company = (props: Props) => {
    const { data: users }: any = useGetUsersEprQuery('')
    const [openFilter, setOpenFilter] = useState(false)
    const filterRef: any = useRef()

    const handleOpenFilterList = () => {
        setOpenFilter(!openFilter)
    }

  return (
    <>
        <div className='bg-[#fff]'>
            <HeaderSearchhJob className={'py-[16px]'} />
        </div>
        <div className='company-wrap'>
            <div className="company-body">
                <div className="company-header">
                    <h1 className='company-header__title'>Khám Phá Văn Hóa Công Ty</h1>
                    <p className="company-header__desc">
                        Tìm hiểu văn hoá công ty và chọn cho bạn nơi làm việc phù hợp nhất.
                    </p>
                    <div className="company-header__search">
                        <div className="company-header__search-wrap">
                            <label className='company-header__search-label' htmlFor="company-search-input"><i className="company-header__search-icon fa-solid fa-magnifying-glass"></i></label>
                            <input type="text" id='company-search-input' className="company-header__search-input" placeholder='Nhập tên công ty' />
                        </div>

                        <div className="company-header__search-btn">
                            Tìm
                        </div>
                    </div>
                </div>

                <div className="company-content">
                    <div className="company-content__header">
                        <h2 className='company-content__header-title'>
                            Công ty nổi bật 
                            <span className='company-content__header-quantity'>(525)</span>
                        </h2>

                        <div className='company-content__filter' onClick={handleOpenFilterList}>
                            <span className='company-content__filter-value'>
                                Tất cả lĩnh vực
                            </span>
                            <i className="company-content__filter-icon fa-solid fa-chevron-down"></i>

                            {
                                openFilter && 
                                <div ref={filterRef} className='company-content__filter-list' onClick={(e: any) => {
                                    e.stopPropagation()
                                }}>
                                    <div className='company-content__filter-search'>
                                        <i className="company-content__filter-icon fa-solid fa-magnifying-glass"></i>
                                        <input type="text" className='company-content__filter-input'
                                        placeholder='Tìm kiếm' />
                                    </div>
                                    <div className='company-content__filter-item'>
                                        <input type="radio" className='company-content__filter-select' />
                                        <span className='company-content__filter-text'>
                                            Tất cả lĩnh vực
                                        </span>
                                    </div>
                                </div>
                            }
                            
                        </div>
                    </div>

                    <div className="company-content__list">
                        {
                            users && users.map((user: any) => (
                                <div className="grid-col-4">
                                    <div className="company-content__item">
                                        <div className="company-content__item-image">

                                            <span className='company-content__item-image-cover'>
                                                <img src={user.company_banner} />
                                            </span>

                                            <a href="" className="company-content__item-image-avatar">
                                                <img src={user.image} alt="KB Securities Viet Nam Join Stock Company" />
                                            </a>

                                            <span className="company-content__item-image-view">
                                                <i className="fa-solid fa-folder-open"></i>
                                                {user.company_field}
                                            </span>
                                        </div>

                                        <div className="company-content__item-info">
                                            <a href="" className="company-content__item-info-title">
                                                {user.company_name}
                                            </a>
                                            <p className='company-content_desc'>{user.desc_epr}</p>
                                        </div>

                                        <NavLink to={`/company/${user._id}`} className="company-content__item-btn">
                                            Xem
                                        </NavLink>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="company-content__btn">
                        <button className="company-content__btn-more">
                            Xem thêm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Company