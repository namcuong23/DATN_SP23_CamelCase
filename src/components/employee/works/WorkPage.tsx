import React from 'react'

type Props = {}

const WorkPage = (props: Props) => {
    return (
        <>
            <div className='min-h-[100vh]'>
                {/* SEARCH BAR */}
                <div className='h-[80px] w-100 py-3'>
                    <div className='container flex items-center justify-center h-100 w-100'>
                        <div className='flex items-center h-100 bg-[#F4F4F7] w-75 mr-2 rounded'>
                            <div className='h-100 flex items-center bg-[#F4F4F7] w-[65%]'>
                                <button className='w-[10%] flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search text-black" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                                <input type="text" className='bg-[#F4F4F7] h-100 w-[90%] text-gray-600 focus:outline-none' placeholder='Tìm kiếm việc làm, công ty, kỹ năng' />
                            </div>
                            <div className='flex items-center bg-[#F4F4F7] border-l-[1px] border-[#979797] h-[24px] mr-1'></div>
                            <div className='h-100 flex items-center bg-[#F4F4F7] w-[35%] px-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 384 512">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                                </svg>
                                <select name="" id="" className='bg-[#F4F4F7] focus:outline-none w-100 pl-2'>
                                    <option value="0" selected>Tất cả địa điểm</option>
                                    <option value="1">Vĩnh Phúc</option>
                                </select>
                            </div>
                        </div>
                        <div className='h-100'>
                            <div className='h-100'>
                                <button className='bg-[#FE7D55] hover:bg-[#FD6333] text-white rounded h-100 px-10'>Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CONTENT */}
                <section className='h-[80px] w-100 bg-[#F4F4F7] py-10'>
                    <div className='container flex items-center justify-center h-100 w-100 p-0'>
                        <div className='w-[85%] p-[10px]'>
                            <div className='text-black'>
                                <h1 className='text-[24px] font-[700]'>9701 tin tuyển dụng, tìm việc làm nhanh 24h mới nhất trên toàn quốc!</h1>
                                <p className='leading-[28px]'>Tiếp cận 10,000+ doanh nghiệp tuyển dụng uy tín. Việc làm mới mỗi ngày với mức lương cao, hấp dẫn, chế độ đãi ngộ cực tốt!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-100 sectionBlock sectionBlock_has-padding-touch sectionBlock_featured-company animated fadeIn take-1-second">
                    <div className="container flex justify-center">
                        <div className='w-[87%]'>
                            <div className="is-flex justify-between align-center section-title lunar-new-year-bottom">
                                <h2 className="sectionBlock__title">Các Công Ty Hàng Đầu</h2>
                            </div>
                            <div className="sectionBlock__content" style={{ height: '100%' }}>
                                <div className="featured-companies">
                                    <div className="companyBlock " style={{ flexBasis: '33.33%' }}>
                                        <a href="https://www.vietnamworks.com/company/metub-network?utm_campaign_navi=6293455&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage" target="_blank" rel="noreferrer">
                                            <div className="companyBlock__box" role="img" aria-label="Metub Vietnam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn.">
                                                <img src="https://images.vietnamworks.com/logo/M2B_viplogo_119863.jpg" alt="" />
                                                <div className="companyBlock__content">
                                                    <div className="companyBlock__name is-uppercase">Metub Vietnam</div>
                                                    <span className="companyBlock__tag">Việc mới</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="companyBlock " style={{ flexBasis: '33.33%' }}>
                                        <a href="https://www.vietnamworks.com/nha-tuyen-dung/e1527856?utm_campaign_navi=1527856&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage" target="_blank" rel="noreferrer">
                                            <div className="companyBlock__box" role="img" aria-label="ORION VIETNAM tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn.">
                                                <img src="https://images.vietnamworks.com/logo/130x130-O_121814.jpg" alt="" />
                                                <div className="companyBlock__content">
                                                    <div className="companyBlock__name is-uppercase">ORION VIETNAM</div>
                                                    <span className="companyBlock__tag">Việc mới</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="companyBlock " style={{ flexBasis: '33.33%' }}>
                                        <a href="https://www.vietnamworks.com/company/Mcredit?utm_campaign_navi=4139866&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage" target="_blank" rel="noreferrer">
                                            <div className="companyBlock__box" role="img" aria-label="MB SHINSEI (Mcredit) tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn.">
                                                <img src="https://images.vietnamworks.com/logo/130x130-m_118018.jpg" alt="" />
                                                <div className="companyBlock__content">
                                                    <div className="companyBlock__name is-uppercase">MB SHINSEI (Mcredit)</div>
                                                    <span className="companyBlock__tag">Việc mới</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="companyBlock " style={{ flexBasis: '33.33%' }}>
                                        <a href="https://www.vietnamworks.com/nha-tuyen-dung/lg-electronics-vietnam-sales-marketing-hcm-office-c81523?utm_campaign_navi=1895848&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage" target="_blank" rel="noreferrer">
                                            <div className="companyBlock__box" role="img" aria-label="LG Electronics Vietnam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn.">
                                                <img src="https://images.vietnamworks.com/logo/new_120278.jpg" alt="" />
                                                <div className="companyBlock__content">
                                                    <div className="companyBlock__name is-uppercase">LG Electronics Vietnam</div>
                                                    <span className="companyBlock__tag">Việc mới</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="companyBlock " style={{ flexBasis: '33.33%' }}>
                                        <a href="https://www.vietnamworks.com/nha-tuyen-dung/e3746753/?utm_campaign_navi=3746753&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage" target="_blank" rel="noreferrer">
                                            <div className="companyBlock__box" role="img" aria-label="TRỞ THÀNH KỸ SƯ CNTT MOBIFONE tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn."><img src="https://images.vietnamworks.com/logo/130x130-MBf_120892.jpg" alt="" />
                                                <div className="companyBlock__content">
                                                    <div className="companyBlock__name is-uppercase">TRỞ THÀNH KỸ SƯ CNTT MOBIFONE</div>
                                                    <span className="companyBlock__tag">Việc mới</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-100 sectionBlock sectionBlock_has-slider sectionBlock_job-list section-featured-jobs">
                    <div className="container w-[82%] p-0">
                        <div className=''>
                            <div className="is-flex justify-between align-center section-title">
                                <h2 className="sectionBlock__title">Việc Làm Đang Hot</h2>
                                <div className="sectionBlock__link">
                                    <a href="/viec-lam-goi-y">Xem Tất Cả</a>
                                </div>
                            </div>
                            <div className="sectionBlock__content" style={{ height: '100%' }}>
                                <div className="swiper-container">
                                    <div id="recommend-jobs" className="sc-dvwKko jrSuUk" style={{ width: '100%' }}>
                                        <div className="sc-jtcaXd dhnMFx">
                                            <div className="sc-dkSuNL gvXlWC row" style={{ transform: 'translateX(0px)', transition: 'all 0s ease 0s' }}>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-100 sectionBlock sectionBlock_has-slider sectionBlock_job-list section-featured-jobs">
                    <div className="container w-[82%] p-0">
                        <div className=''>
                            <div className="is-flex justify-between align-center section-title">
                                <h2 className="sectionBlock__title">Việc Làm Tốt Nhất</h2>
                                <div className="sectionBlock__link">
                                    <a href="/viec-lam-goi-y">Xem Tất Cả</a>
                                </div>
                            </div>
                            <div className="sectionBlock__content" style={{ height: '100%' }}>
                                <div className="swiper-container">
                                    <div id="recommend-jobs" className="sc-dvwKko jrSuUk" style={{ width: '100%' }}>
                                        <div className="sc-jtcaXd dhnMFx">
                                            <div className="sc-dkSuNL gvXlWC row" style={{ transform: 'translateX(0px)', transition: 'all 0s ease 0s' }}>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-100 sectionBlock sectionBlock_has-slider sectionBlock_job-list section-featured-jobs">
                    <div className="container w-[82%] p-0">
                        <div className=''>
                            <div className="is-flex justify-between align-center section-title">
                                <h2 className="sectionBlock__title">Việc Làm Gợi Ý</h2>
                                <div className="sectionBlock__link">
                                    <a href="/viec-lam-goi-y">Xem Tất Cả</a>
                                </div>
                            </div>
                            <div className="sectionBlock__content" style={{ height: '100%' }}>
                                <div className="swiper-container">
                                    <div id="recommend-jobs" className="sc-dvwKko jrSuUk" style={{ width: '100%' }}>
                                        <div className="sc-jtcaXd dhnMFx">
                                            <div className="sc-dkSuNL gvXlWC row" style={{ transform: 'translateX(0px)', transition: 'all 0s ease 0s' }}>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-gJwTLC doaJYu col-4">
                                                    <div className="swiper-slide">
                                                        <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                            <div className="columns is-mobile">
                                                                <div className="column jobBlock__leftCol has-text-centered">
                                                                    <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                        <img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." />
                                                                    </a>
                                                                </div>
                                                                <div className="column jobBlock__rightCol">
                                                                    <div className="columns is-mobile is-multiline justify-between">
                                                                        <div className="column jobBlock__info">
                                                                            <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
                                                                                <div className="jobBlock__title truncate-text-2-line">Sales Representative – Đại Diện Kinh Doanh</div>
                                                                                <p className="jobBlock__company truncate-text">Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh</p>
                                                                            </a>
                                                                        </div>
                                                                        <span className="tag tag_hot">Hot</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default WorkPage