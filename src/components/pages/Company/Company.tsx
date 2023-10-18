import React, { useState, useRef } from 'react';

import './Company.css'

type Props = {}

const Company = (props: Props) => {
    const [openFilter, setOpenFilter] = useState(false)
    const filterRef: any = useRef()

    const handleOpenFilterList = () => {
        setOpenFilter(!openFilter)
    }

  return (
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
                    <div className="grid-col-4">
                        <div className="company-content__item">
                            <div className="company-content__item-image">

                                <span className='company-content__item-image-cover'>
                                    <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F%E1%BA%A2nh_b%C3%ACa_Banner_CK_KB_3_.jpg&w=3840&q=75' />
                                </span>

                                <a href="" className="company-content__item-image-avatar">
                                    <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F%E1%BA%A2nh_Logo_CK_KB.png&w=3840&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                </a>

                                <span className="company-content__item-image-view">
                                    <i className="fa-solid fa-users"></i>
                                    110 lượt theo dõi
                                </span>
                            </div>

                            <div className="company-content__item-info">
                                <a href="" className="company-content__item-info-title">
                                    KB Securities Viet Nam Join Stock Company 
                                </a>
                                <span className="company-content__item-info-branch">
                                    <i className="fa-solid fa-folder-open"></i>
                                    Chứng khoán
                                </span>
                                <span className="company-content__item-info-jobs">
                                    <i className="fa-solid fa-briefcase"></i>
                                    6 việc làm
                                </span>
                            </div>

                            <div className="company-content__item-btn">
                                Theo dõi
                            </div>
                        </div>
                    </div>
                    <div className="grid-col-4">
                        <div className="company-content__item">
                            <div className="company-content__item-image">

                                <span className='company-content__item-image-cover'>
                                    <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F%E1%BA%A2nh_b%C3%ACa_Banner_CK_KB_3_.jpg&w=3840&q=75' />
                                </span>

                                <a href="" className="company-content__item-image-avatar">
                                    <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F%E1%BA%A2nh_Logo_CK_KB.png&w=3840&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                </a>

                                <span className="company-content__item-image-view">
                                    <i className="fa-solid fa-users"></i>
                                    110 lượt theo dõi
                                </span>
                            </div>

                            <div className="company-content__item-info">
                                <a href="" className="company-content__item-info-title">
                                    KB Securities Viet Nam Join Stock Company 
                                </a>
                                <span className="company-content__item-info-branch">
                                    <i className="fa-solid fa-folder-open"></i>
                                    Chứng khoán
                                </span>
                                <span className="company-content__item-info-jobs">
                                    <i className="fa-solid fa-briefcase"></i>
                                    6 việc làm
                                </span>
                            </div>

                            <div className="company-content__item-btn">
                                Theo dõi
                            </div>
                        </div>
                    </div>
                    <div className="grid-col-4">
                        <div className="company-content__item">
                            <div className="company-content__item-image">

                                <span className='company-content__item-image-cover'>
                                    <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F%E1%BA%A2nh_b%C3%ACa_Banner_CK_KB_3_.jpg&w=3840&q=75' />
                                </span>

                                <a href="" className="company-content__item-image-avatar">
                                    <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F%E1%BA%A2nh_Logo_CK_KB.png&w=3840&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                </a>

                                <span className="company-content__item-image-view">
                                    <i className="fa-solid fa-users"></i>
                                    110 lượt theo dõi
                                </span>
                            </div>

                            <div className="company-content__item-info">
                                <a href="" className="company-content__item-info-title">
                                    KB Securities Viet Nam Join Stock Company 
                                </a>
                                <span className="company-content__item-info-branch">
                                    <i className="fa-solid fa-folder-open"></i>
                                    Chứng khoán
                                </span>
                                <span className="company-content__item-info-jobs">
                                    <i className="fa-solid fa-briefcase"></i>
                                    6 việc làm
                                </span>
                            </div>

                            <div className="company-content__item-btn">
                                Theo dõi
                            </div>
                        </div>
                    </div>
                    <div className="grid-col-4">
                        <div className="company-content__item">
                            <div className="company-content__item-image">

                                <span className='company-content__item-image-cover'>
                                    <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F%E1%BA%A2nh_b%C3%ACa_Banner_CK_KB_3_.jpg&w=3840&q=75' />
                                </span>

                                <a href="" className="company-content__item-image-avatar">
                                    <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F%E1%BA%A2nh_Logo_CK_KB.png&w=3840&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                </a>

                                <span className="company-content__item-image-view">
                                    <i className="fa-solid fa-users"></i>
                                    110 lượt theo dõi
                                </span>
                            </div>

                            <div className="company-content__item-info">
                                <a href="" className="company-content__item-info-title">
                                    KB Securities Viet Nam Join Stock Company 
                                </a>
                                <span className="company-content__item-info-branch">
                                    <i className="fa-solid fa-folder-open"></i>
                                    Chứng khoán
                                </span>
                                <span className="company-content__item-info-jobs">
                                    <i className="fa-solid fa-briefcase"></i>
                                    6 việc làm
                                </span>
                            </div>

                            <div className="company-content__item-btn">
                                Theo dõi
                            </div>
                        </div>
                    </div>
                    <div className="grid-col-4">
                        <div className="company-content__item">
                            <div className="company-content__item-image">

                                <span className='company-content__item-image-cover'>
                                    <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F%E1%BA%A2nh_b%C3%ACa_Banner_CK_KB_3_.jpg&w=3840&q=75' />
                                </span>

                                <a href="" className="company-content__item-image-avatar">
                                    <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F%E1%BA%A2nh_Logo_CK_KB.png&w=3840&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                </a>

                                <span className="company-content__item-image-view">
                                    <i className="fa-solid fa-users"></i>
                                    110 lượt theo dõi
                                </span>
                            </div>

                            <div className="company-content__item-info">
                                <a href="" className="company-content__item-info-title">
                                    KB Securities Viet Nam Join Stock Company 
                                </a>
                                <span className="company-content__item-info-branch">
                                    <i className="fa-solid fa-folder-open"></i>
                                    Chứng khoán
                                </span>
                                <span className="company-content__item-info-jobs">
                                    <i className="fa-solid fa-briefcase"></i>
                                    6 việc làm
                                </span>
                            </div>

                            <div className="company-content__item-btn">
                                Theo dõi
                            </div>
                        </div>
                    </div>
                    <div className="grid-col-4">
                        <div className="company-content__item">
                            <div className="company-content__item-image">

                                <span className='company-content__item-image-cover'>
                                    <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F%E1%BA%A2nh_b%C3%ACa_Banner_CK_KB_3_.jpg&w=3840&q=75' />
                                </span>

                                <a href="" className="company-content__item-image-avatar">
                                    <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F%E1%BA%A2nh_Logo_CK_KB.png&w=3840&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                </a>

                                <span className="company-content__item-image-view">
                                    <i className="fa-solid fa-users"></i>
                                    110 lượt theo dõi
                                </span>
                            </div>

                            <div className="company-content__item-info">
                                <a href="" className="company-content__item-info-title">
                                    KB Securities Viet Nam Join Stock Company 
                                </a>
                                <span className="company-content__item-info-branch">
                                    <i className="fa-solid fa-folder-open"></i>
                                    Chứng khoán
                                </span>
                                <span className="company-content__item-info-jobs">
                                    <i className="fa-solid fa-briefcase"></i>
                                    6 việc làm
                                </span>
                            </div>

                            <div className="company-content__item-btn">
                                Theo dõi
                            </div>
                        </div>
                    </div>
                </div>

                <div className="company-content__btn">
                    <button className="company-content__btn-more">
                        Xem thêm
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Company