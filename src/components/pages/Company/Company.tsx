import { useState, useRef } from 'react';

import './Company.css'
import HeaderSearchhJob from '../../layouts/HeaderSearchhJob';
import React from 'react';

type Props = {}

const Company = (props: Props) => {
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
                        <div className="grid-col-4">
                            <div className="company-content__item">
                                <div className="company-content__item-image">

                                    <span className='company-content__item-image-cover'>
                                        <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2FPGbank-cover2.jpg&w=1920&q=75' />
                                    </span>

                                    <a href="" className="company-content__item-image-avatar">
                                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fvietnamworks%2Fvi%2FPG_Bank-Logo.png&w=1920&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                    </a>

                                    <span className="company-content__item-image-view">
                                        <i className="fa-solid fa-users"></i>
                                        447 lượt theo dõi
                                    </span>
                                </div>

                                <div className="company-content__item-info">
                                    <a href="" className="company-content__item-info-title">
                                      Ngân hàng Thương mại cổ phần Thịnh vượng và Phát triển (PGBANK)
                                    </a>
                                    <span className="company-content__item-info-branch">
                                        <i className="fa-solid fa-folder-open"></i>
                                        Ngân hàng
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
                                        <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2FBanner_1_.jpg&w=1920&q=75' />
                                    </span>

                                    <a href="" className="company-content__item-image-avatar">
                                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2FLogo_Hisa.png&w=1920&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                    </a>

                                    <span className="company-content__item-image-view">
                                        <i className="fa-solid fa-users"></i>
                                        123 lượt theo dõi
                                    </span>
                                </div>

                                <div className="company-content__item-info">
                                    <a href="" className="company-content__item-info-title">
                                      Công ty TNHH Dược Phẩm Hisamitsu Việt Nam
                                    </a>
                                    <span className="company-content__item-info-branch">
                                        <i className="fa-solid fa-folder-open"></i>
                                        Hoá chất/Hoá sinh
                                    </span>
                                    <span className="company-content__item-info-jobs">
                                        <i className="fa-solid fa-briefcase"></i>
                                        7 việc làm
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
                                        <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2FDEEPC-Industrialzones%2Fen%2FCover_1_.jpg&w=1920&q=75' />
                                    </span>

                                    <a href="" className="company-content__item-image-avatar">
                                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2FDEEPC-Industrialzones%2Fen%2Fdeepc-logo.png&w=1920&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                    </a>

                                    <span className="company-content__item-image-view">
                                        <i className="fa-solid fa-users"></i>
                                        125 lượt theo dõi
                                    </span>
                                </div>

                                <div className="company-content__item-info">
                                    <a href="" className="company-content__item-info-title">
                                      DEEP C INDUSTRIAL ZONES 
                                    </a>
                                    <span className="company-content__item-info-branch">
                                        <i className="fa-solid fa-folder-open"></i>
                                        Bất Động Sản/Cho thuê
                                    </span>
                                    <span className="company-content__item-info-jobs">
                                        <i className="fa-solid fa-briefcase"></i>
                                        2 việc làm
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
                                        <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F21.9_Ngan_hang_xanh_Cover_resized_1_.jpg&w=1200&q=75' />
                                    </span>

                                    <a href="" className="company-content__item-image-avatar">
                                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2Flogo_xanh.jpg&w=1200&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                    </a>

                                    <span className="company-content__item-image-view">
                                        <i className="fa-solid fa-users"></i>
                                        335 lượt theo dõi
                                    </span>
                                </div>

                                <div className="company-content__item-info">
                                    <a href="" className="company-content__item-info-title">
                                      Ngân Hàng TMCP Đầu Tư & Phát Triển Việt Nam (BIDV)
                                    </a>
                                    <span className="company-content__item-info-branch">
                                        <i className="fa-solid fa-folder-open"></i>
                                        Ngân hàng
                                    </span>
                                    <span className="company-content__item-info-jobs">
                                        <i className="fa-solid fa-briefcase"></i>
                                        7 việc làm
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
                                        <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fhanarotns-htns%2Fvi%2F1._Cover.JPG&w=1920&q=75' />
                                    </span>

                                    <a href="" className="company-content__item-image-avatar">
                                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fhanarotns-htns%2Fvi%2F2._Logo.png&w=1920&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                    </a>

                                    <span className="company-content__item-image-view">
                                        <i className="fa-solid fa-users"></i>
                                        104 lượt theo dõi
                                    </span>
                                </div>

                                <div className="company-content__item-info">
                                    <a href="" className="company-content__item-info-title">
                                      Công ty TNHH Hanaro TNS Việt Nam
                                    </a>
                                    <span className="company-content__item-info-branch">
                                        <i className="fa-solid fa-folder-open"></i>
                                        Vận tải
                                    </span>
                                    <span className="company-content__item-info-jobs">
                                        <i className="fa-solid fa-briefcase"></i>
                                        2 việc làm
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
                                        <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2FCover_An_Ph%C3%A1t-min-min.png&w=1920&q=75' />
                                    </span>

                                    <a href="" className="company-content__item-image-avatar">
                                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2FLogo-An-Phat.png&w=1920&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                    </a>

                                    <span className="company-content__item-image-view">
                                        <i className="fa-solid fa-users"></i>
                                        192 lượt theo dõi
                                    </span>
                                </div>

                                <div className="company-content__item-info">
                                    <a href="" className="company-content__item-info-title">
                                      CÔNG TY CỔ PHẦN TẬP ĐOÀN AN PHÁT HOLDINGS
                                    </a>
                                    <span className="company-content__item-info-branch">
                                        <i className="fa-solid fa-folder-open"></i>
                                        Sản xuất
                                    </span>
                                    <span className="company-content__item-info-jobs">
                                        <i className="fa-solid fa-briefcase"></i>
                                        7 việc làm
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
                                        <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2FKangaroo___Cover_Photo.jpg&w=1920&q=75' />
                                    </span>

                                    <a href="" className="company-content__item-image-avatar">
                                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2FNM4_Bi%E1%BB%83n_t%C3%AAn_ph%C3%B2ng_ban-44.jpg&w=1920&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                    </a>

                                    <span className="company-content__item-image-view">
                                        <i className="fa-solid fa-users"></i>
                                        218 lượt theo dõi
                                    </span>
                                </div>

                                <div className="company-content__item-info">
                                    <a href="" className="company-content__item-info-title">
                                      Công ty cổ phần liên doanh Kangaroo Quốc tế
                                    </a>
                                    <span className="company-content__item-info-branch">
                                        <i className="fa-solid fa-folder-open"></i>
                                        Bán lẻ/Bán sỉ
                                    </span>
                                    <span className="company-content__item-info-jobs">
                                        <i className="fa-solid fa-briefcase"></i>
                                        2 việc làm
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
                                        <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2F1920x510-ACB_1_.jpg&w=1920&q=75' />
                                    </span>

                                    <a href="" className="company-content__item-image-avatar">
                                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fvietnamworks%2Fen%2FACB-Logo.png&w=1920&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                    </a>

                                    <span className="company-content__item-image-view">
                                        <i className="fa-solid fa-users"></i>
                                        1586 lượt theo dõi
                                    </span>
                                </div>

                                <div className="company-content__item-info">
                                    <a href="" className="company-content__item-info-title">
                                      Ngân Hàng Thương Mại Cổ Phần Á Châu - ACB
                                    </a>
                                    <span className="company-content__item-info-branch">
                                        <i className="fa-solid fa-folder-open"></i>
                                        Ngân hàng
                                    </span>
                                    <span className="company-content__item-info-jobs">
                                        <i className="fa-solid fa-briefcase"></i>
                                        16 việc làm
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
                                        <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2FVNpay.jpg&w=1200&q=75' />
                                    </span>

                                    <a href="" className="company-content__item-image-avatar">
                                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages02.vietnamworks.com%2Fcompanyprofile%2Fnull%2Fen%2FLogo_VNPAY.jpg&w=1200&q=75" alt="KB Securities Viet Nam Join Stock Company" />
                                    </a>

                                    <span className="company-content__item-image-view">
                                        <i className="fa-solid fa-users"></i>
                                        458 lượt theo dõi
                                    </span>
                                </div>

                                <div className="company-content__item-info">
                                    <a href="" className="company-content__item-info-title">
                                      Công Ty CP Giải Pháp Thanh Toán Việt Nam (VNPAY)
                                    </a>
                                    <span className="company-content__item-info-branch">
                                        <i className="fa-solid fa-folder-open"></i>
                                        Tài Chính
                                    </span>
                                    <span className="company-content__item-info-jobs">
                                        <i className="fa-solid fa-briefcase"></i>
                                        3 việc làm
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
    </>
  )
}

export default Company