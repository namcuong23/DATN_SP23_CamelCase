import { NavLink } from 'react-router-dom'
import ImanageProfile from '../../../interface/manageProfile'
import IPost from '../../../interface/post'
import { useGetProfileQuery } from '../../../service/manage_profile'
import UseAuth from '../../auth/UseAuth'
import { useGetPostsQuery } from '../../../service/post'

const HomeClient = () => {
  const currentUser: any = UseAuth()
  const profiles: any = useGetProfileQuery(currentUser?.email)
  const profile: ImanageProfile = profiles.currentData
  const { data: posts } = useGetPostsQuery()

  return (
    <div id="pageContentWrapper" >
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/11/11061946/part-time-hours-1024x512.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="src/image/banner-home2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="src/image/banner-home3.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2FCarlsb_hrbn1_122809.png&w=1920&q=75" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2FLgelec_hrbn1_119708.png&w=1920&q=75" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
                <div className='position-absolute top-50 start-50 translate-middle' style={{ background: 'rgba(0,0,0,.4)', height: '6em' , width:'70%', borderRadius: '0.5em'}}>
                    <div className="input-group mb-3 p-3 " style={{ width: '100%', display: 'inline-flex' }}>
                        <div className="border border-right-0 input-group-text" id="basic-addon1" style={{ background: 'white', display: 'inline-block' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search " viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            className="form-control border border-left-0 py-4 rounded-end"
                            placeholder="Tìm kiếm việc làm, công ty, kỹ năng"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <button type="button" className="btn ml-3 rounded-start" id="related-jobs-search">
                            Tìm kiếm
                        </button>
                    </div>
                    
                </div>
            </div>
            <div className="content" >
                {/* <section className="sectionBlock sectionBlock_has-padding-touch sectionBlock_featured-company lunar-new-year animated fadeIn take-1-second">
                    <div className="" style={{ width: '85%', margin: '0 auto' }}><div className="is-flex justify-between align-center section-title lunar-new-year-bottom">
                        <h2 className="sectionBlock__title">Các Công Ty Hàng Đầu</h2>
                    </div>
                        <div className="sectionBlock__content" style={{ height: '100%' }}>
                            <div className="featured-companies"><div className="companyBlock " style={{ flexBasis: '33.33%' }}>
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
                                        <div className="companyBlock__box" role="img" aria-label="ORION VIETNAM tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn."><img src="https://images.vietnamworks.com/logo/130x130-O_121814.jpg" alt="" />
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
                                            <div className="companyBlock__content"><div className="companyBlock__name is-uppercase">MB SHINSEI (Mcredit)</div>
                                                <span className="companyBlock__tag">Việc mới</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="companyBlock " style={{ flexBasis: '33.33%' }}>
                                    <a href="https://www.vietnamworks.com/nha-tuyen-dung/lg-electronics-vietnam-sales-marketing-hcm-office-c81523?utm_campaign_navi=1895848&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage" target="_blank" rel="noreferrer">
                                        <div className="companyBlock__box" role="img" aria-label="LG Electronics Vietnam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn.">
                                            <img src="https://images.vietnamworks.com/logo/new_120278.jpg" alt="" />
                                            <div className="companyBlock__content"><div className="companyBlock__name is-uppercase">LG Electronics Vietnam</div>
                                                <span className="companyBlock__tag">Việc mới</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="companyBlock " style={{ flexBasis: '33.33%' }}>
                                    <a href="https://www.vietnamworks.com/nha-tuyen-dung/e3746753/?utm_campaign_navi=3746753&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage" target="_blank" rel="noreferrer">
                                        <div className="companyBlock__box" role="img" aria-label="TRỞ THÀNH KỸ SƯ CNTT MOBIFONE tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn."><img src="https://images.vietnamworks.com/logo/130x130-MBf_120892.jpg" alt="" />
                                            <div className="companyBlock__content"><div className="companyBlock__name is-uppercase">TRỞ THÀNH KỸ SƯ CNTT MOBIFONE</div>
                                                <span className="companyBlock__tag">Việc mới</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <div className="px-4 text-center py-4" style={{ width: '85%', margin: '0 auto' }}>

                </div>
                <div id="carouselExampleIndicators" className="carousel slide pb-3">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="section-header-voucher py-3" style={{ width: '85%', margin: '0 auto' }}>
                        <h2>Việc làm gợi ý</h2>
                    </div>
                    <div className="carousel-inner" style={{ width: '85%', margin: '0 auto' }}>
                        <div className="carousel-item active">
                            <div className="text-center" >
                                <div className="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <div className="container text-center">
                                <div className="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container text-center">
                                <div className="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row p-3">
                                            <div className="col-xl-3">
                                                <img src="https://images.vietnamworks.com/pictureofcompany/05/11125993.png" />
                                            </div>
                                            <div className="col-xl-9 ">
                                                <h3>HSBC Vietnam Graduate Program 2023 – Wealth and Personal Banking Management Associate</h3>
                                                <p>HSBC Vietnam - Hồ Chí Minh</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <section className="sectionBlock sectionBlock_has-slider sectionBlock_job-list section-featured-jobs pb-5">
                  <div className="p-0" style={{ width: '85%', height:'400px', margin: '0 auto' }}>
                        <div className="is-flex justify-between align-center section-title">
                            <h2 className="sectionBlock__title">Việc Làm Tốt Nhất</h2>
                            <div className="sectionBlock__link">
                                <a href="/viec-lam-tot-nhat">Xem Tất Cả</a>
                            </div>
                        </div>
                        <div className=''>
                            <div className="sectionBlock__content" style={{ height: '100%' }}>
                                <div className="swiper-container">
                                    <div id="recommend-jobs" className="sc-dvwKko jrSuUk" style={{ width: '100%' }}>
                                        <div className="sc-jtcaXd dhnMFx">
                                            <div className="sc-dkSuNL gvXlWC row" style={{ transform: 'translateX(0px)', transition: 'all 0s ease 0s',maxHeight: '24em' }}>
                                                {
                                                    posts ?
                                                        posts.map((post: any) =>
                                                            <div key={post._id} className="sc-gJwTLC doaJYu col-4">
                                                                <div className="swiper-slide">
                                                                    <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                                        <div className="columns is-mobile cursor-pointer">
                                                                            <div className="column jobBlock__leftCol has-text-centered">
                                                                                <img src="https://images.vietnamworks.com/pictureofcompany/3d/10195707.jpg"
                                                                                    className="jobBlock__logo" />
                                                                            </div>
                                                                            <div className="column jobBlock__rightCol">
                                                                                <div className="columns is-mobile is-multiline justify-between">
                                                                                    <div className="column jobBlock__info">
                                                                                        <div className="jobBlock__title truncate-text-2-line">{post.job_name}</div>
                                                                                        <p className="jobBlock__company truncate-text">{post.job_description}</p>
                                                                                    </div>
                                                                                    <span className="tag tag_hot">Hot</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                        : ''
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
                <section className="sectionBlock sectionBlock_hot-categories" >
                    <div className="" style={{ width: '85%', margin: '0 auto' }}>
                        <div className="is-flex justify-between align-center section-title lunar-new-year-bottom">
                            <h2 className="sectionBlock__title pb-5">Ngành Nghề Trọng Điểm</h2>
                        </div>
                        <div className="sectionBlock__content" style={{ height: '100%' }}>
                            <div id="hot-cagories" className="sc-dvwKko jrSuUk"><div className="sc-jtcaXd dhnMFx">
                                <div className="sc-dkSuNL gvXlWC ">
                                    <div className='row'>
                                        <div className="sc-gJwTLC gsSTVe col-3">
                                            <div className="wrap-item">
                                                <div className="category-item">
                                                    <a href="https://www.vietnamworks.com/viec-lam-tai-chinh-dau-tu-i59-vn?utm_source_navi=vnw_homepage&utm_medium_navi=HotCategories&ignoreLocation=true"><img src="https://images02.vietnamworks.com/mobile_banner/43615b63f0b281d216616f74630fb274.png" alt="category icon" />
                                                        <div className="wrap-name">
                                                            <h3 className="title truncate-text-2-line">Tài chính / Đầu tư</h3>
                                                        </div>
                                                        <p className="total">1124 <span>Việc Làm</span></p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-gJwTLC gsSTVe col-3">
                                            <div className="wrap-item">
                                                <div className="category-item">
                                                    <a href="https://www.vietnamworks.com/viec-lam-ban-hang-i33-vn?utm_source_navi=vnw_homepage&utm_medium_navi=HotCategories&ignoreLocation=true">
                                                        <img src="https://images02.vietnamworks.com/mobile_banner/39fc1e25eac4528661800fe9e28267ca.png" alt="category icon" />
                                                        <div className="wrap-name">
                                                            <h3 className="title truncate-text-2-line">Bán hàng</h3>
                                                        </div>
                                                        <p className="total">1045 <span>Việc Làm</span></p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-gJwTLC gsSTVe col-3">
                                            <div className="wrap-item">
                                                <div className="category-item">
                                                    <a href="https://www.vietnamworks.com/viec-lam-it-phan-mem-i35-vn?utm_source_navi=vnw_homepage&utm_medium_navi=HotCategories&ignoreLocation=true">
                                                        <img src="https://images02.vietnamworks.com/mobile_banner/4196a5fa1e29ac68a2f8e1a7f2df9086.png" alt="category icon" />
                                                        <div className="wrap-name">
                                                            <h3 className="title truncate-text-2-line">IT - Phần mềm</h3>
                                                        </div>
                                                        <p className="total">817 <span>Việc Làm</span></p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-gJwTLC gsSTVe col-3">
                                            <div className="wrap-item">
                                                <div className="category-item">
                                                    <a href="https://www.vietnamworks.com/viec-lam-ngan-hang-i42-vn?utm_source_navi=vnw_homepage&utm_medium_navi=HotCategories&ignoreLocation=true">
                                                        <img src="https://images02.vietnamworks.com/mobile_banner/23689c11d14510257843715c9ab51106.png" alt="category icon" />
                                                        <div className="wrap-name">
                                                            <h3 className="title truncate-text-2-line">Ngân hàng</h3>
                                                        </div>
                                                        <p className="total">656 <span>Việc Làm</span></p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5 row'>
                                        <div className="sc-gJwTLC gsSTVe col-3">
                                            <div className="wrap-item">
                                                <div className="category-item">
                                                    <a href="https://www.vietnamworks.com/viec-lam-marketing-i27-vn?utm_source_navi=vnw_homepage&utm_medium_navi=HotCategories&ignoreLocation=true">
                                                        <img src="https://images02.vietnamworks.com/mobile_banner/85667b6343cc3133b2eb70c8486c592b.png" alt="category icon" />
                                                        <div className="wrap-name">
                                                            <h3 className="title truncate-text-2-line">Marketing</h3>
                                                        </div>
                                                        <p className="total">617 <span>Việc Làm</span></p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-gJwTLC gsSTVe col-3">
                                            <div className="wrap-item">
                                                <div className="category-item">
                                                    <a href="https://www.vietnamworks.com/viec-lam-hanh-chanh-thu-ky-i2-vn?utm_source_navi=vnw_homepage&utm_medium_navi=HotCategories&ignoreLocation=true">
                                                        <img src="https://images02.vietnamworks.com/mobile_banner/1bc3dd0e7376dcbd8561d6780a64dd6e.png" alt="category icon" />
                                                        <div className="wrap-name">
                                                            <h3 className="title truncate-text-2-line">Hành chánh / Thư ký</h3>
                                                        </div>
                                                        <p className="total">592 <span>Việc Làm</span></p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-gJwTLC gsSTVe col-3">
                                            <div className="wrap-item">
                                                <div className="category-item">
                                                    <a href="https://www.vietnamworks.com/viec-lam-ke-toan-i1-vn?utm_source_navi=vnw_homepage&utm_medium_navi=HotCategories&ignoreLocation=true">
                                                        <img src="https://images02.vietnamworks.com/mobile_banner/5f7c2e72ad9117e6189de072f4dc87a7.png" alt="category icon" />
                                                        <div className="wrap-name">
                                                            <h3 className="title truncate-text-2-line">Kế toán</h3>
                                                        </div>
                                                        <p className="total">592 <span>Việc Làm</span></p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-gJwTLC gsSTVe col-3">
                                            <div className="wrap-item">
                                                <div className="category-item">
                                                    <a href="https://www.vietnamworks.com/viec-lam-dien-dien-tu-i64-vn?utm_source_navi=vnw_homepage&utm_medium_navi=HotCategories&ignoreLocation=true">
                                                        <img src="https://images02.vietnamworks.com/mobile_banner/5eca9f2f6165e80fc5f7bda53b3490f3.png" alt="category icon" />
                                                        <div className="wrap-name">
                                                            <h3 className="title truncate-text-2-line">Điện / Điện tử</h3>
                                                        </div>
                                                        <p className="total">563 <span>Việc Làm</span></p>
                                                    </a>
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
                <section className="sectionBlock job-corner animated fadeIn take-1-second " style={{ width: '85%', margin: '0 auto', padding: "0", marginTop: "3em" }}>
                    <div className="" >
                        <div className="is-flex justify-between align-center section-title lunar-new-year-bottom" />
                        <div className="sectionBlock__content" style={{ height: '100%' }}>
                            <div className="columns">
                                <div className="column is-12">
                                    <a href="https://www.vietnamworks.com/viec-lam-ban-hang-tuyen-gap-uj-i33-vn?utm_campaign_navi=salesjuly&utm_medium_navi=jobcorner&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage" target="_blank" className="job-corner__image-link" rel="noreferrer">
                                        <figure className="image is-fullwidth mb-0"><img src="https://images.vietnamworks.com/logo/1-1170x274_119836.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sectionBlock sectionBlock_has-slider sectionBlock_job-list section-featured-jobs">
                    <div className="p-0" style={{ width: '85%', margin: '0 auto' }}>
                        <div className="is-flex justify-between align-center section-title"><h2 className="sectionBlock__title">Việc Làm Gợi Ý</h2><div className="sectionBlock__link"><a href="/viec-lam-goi-y">Xem Tất Cả</a></div></div>
                        <div className="sectionBlock__content" style={{ height: '100%' }}>
                            <div className="swiper-container">
                                <div id="recommend-jobs" className="sc-dvwKko jrSuUk" style={{ width: '100%' }}>
                                    <div className="sc-jtcaXd dhnMFx">
                                        <div className="sc-dkSuNL gvXlWC row" style={{ transform: 'translateX(0px)', transition: 'all 0s ease 0s' }}>
                                            <div className="sc-gJwTLC doaJYu col-4">
                                                <div className="swiper-slide">
                                                    <div>
                                                        <div>
                                                            <div className="jobBlock recoJobs__job animated fadeIn take-1-second ">
                                                                <div className="columns is-mobile">
                                                                    <div className="column jobBlock__leftCol has-text-centered">
                                                                        <a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh"><img src="https://images.vietnamworks.com/pictureofcompany/d3/11126481.png" className="jobBlock__logo" alt="Công Ty TNHH Cibes Lift Việt Nam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn." /></a></div><div className="column jobBlock__rightCol"><div className="columns is-mobile is-multiline justify-between"><div className="column jobBlock__info"><a href="https://www.vietnamworks.com/sales-representative-dai-dien-kinh-doanh-6-1606627-jv/?utm_source_navi=vnw_homepage&utm_medium_navi=HotJob&utm_campaign_navi=HotJob&utm_term_navi=homepage2&source=homePage" className="jobBlock__link" title="Việc làm - Sales Representative – Đại Diện Kinh Doanh - Công Ty TNHH Cibes Lift Việt Nam - Hà Nội, Hồ Chí Minh, Quảng Ninh">
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
                    </div>

                </section>
                <div className="" style={{ width: '85%', margin: '0 auto', paddingBottom: '1.25em' }}>
                    <div className="row pt-6">
                        <div className="col-md-6 " style={{ paddingTop: '8%' }} >
                            <div className='fs-4'>
                                <h1>Cơ hội tìm kiếm việc làm lớn</h1>
                            </div>
                            <div style={{ fontSize: '1em' }}>
                                <h2>Việc làm xứng tầm</h2>
                                <h2>Cá nhân hóa trải nghiệm</h2>
                                <h2>Đồng hành cùng bạn trên hành trình sự nghiệp</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src='https://scontent.fhan3-4.fna.fbcdn.net/v/t1.15752-9/342417731_187825987407620_8304241218679443645_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=WMMA_6K5WawAX-i1l5F&_nc_oc=AQmGheEsbIwXd6rgHGyLdHa1-jwfbaLtfjmikofq7THwPexBEbAS8oxZyxuj0NNgVPw&_nc_ht=scontent.fhan3-4.fna&oh=03_AdQ6dhjVYgLQtp41pfVXVCnbTiJPDrYN7Z8wzTa89vJcVA&oe=646F32B1' />
                        </div>
                    </div>
                </div>
            </div>



        </div>
  )
}

export default HomeClient