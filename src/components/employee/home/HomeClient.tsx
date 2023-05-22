import { NavLink, useNavigate } from 'react-router-dom'
import { useGetPostsQuery } from '../../../service/post'
import { useState } from 'react'
import { WhatsAppOutlined } from '@ant-design/icons'
import { useAddFeedbackMutation } from '../../../services/feedback'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFeedback } from '../../../interfaces/feedback'
import { MessageType } from 'antd/es/message/interface'
import { message } from 'antd'
import { Button, Modal } from 'antd';
import { useAppSelector } from '../../../app/hook'
const HomeClient = () => {
  const { data: posts } = useGetPostsQuery()
  const { email } = useAppSelector((rs) => rs.auth)
  const [searchValue, setSearchValue] = useState()
  const navigate = useNavigate()
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
    <div>
      <div id="pageContentWrapper">
        {/* <div className="position-relative">
          <section className="sectionBlock position-relative sectionBlock_no-padding section-hero-banner">
            <div >
              <div className="sectionBlock__content" style={{ height: '540px' }}><img src="./src/assets/img/banner.jpg" alt="" style={{ width: '100%', height: '100%' }} /></div>
            </div>
            <div className="centeredSearchBar isMobile" id="centered-search-bar">
              <div className="centeredSearchBar_div">
                <div className="SearchBar-module_searchBarWrappper__6bsv2  SearchBar-module_isMobile__3NAMU ">
                  <div className="SearchBar-module_searchBarMobile__3zb3c SearchBar-module_isHomepage__Mb8ZT">
                    <div className="SearchBar-module_inputGroup__fZxVS">
                      <div className="SearchBar-module_leftSide__-UstR">
                        <div className="SearchBar-module_searchIcon__1nb1M"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={22} height={22}>
                          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z">
                          </path>
                        </svg>
                        </div>
                        <div className="sc-jIZahH hFVeNx">
                          <div className="sc-himrzO gJCOOM">
                            <input type="text" className="sc-cCsOjp cCPiOu  class-input-recommend" disabled placeholder="Tìm kiếm việc làm, công ty, kỹ năng" />
                          </div>
                        </div>
                      </div>
                      <div className="SearchBar-module_locationSelectBox__2Ai8a">
                        <svg width={20} height={20} fill="#858585" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                          <path d="M 25 1 C 16.160156 1 9 8.160156 9 17 C 9 24.308594 12.859375 32.164063 16.65625 38.25 C 20.453125 44.335938 24.25 48.65625 24.25 48.65625 C 24.441406 48.871094 24.714844 48.996094 25 48.996094 C 25.285156 48.996094 25.558594 48.871094 25.75 48.65625 C 25.75 48.65625 29.550781 44.246094 33.34375 38.125 C 37.136719 32.003906 41 24.167969 41 17 C 41 8.160156 33.839844 1 25 1 Z M 25 3 C 32.761719 3 39 9.238281 39 17 C 39 23.433594 35.363281 31.082031 31.65625 37.0625 C 28.550781 42.074219 25.921875 45.300781 25 46.40625 C 24.070313 45.308594 21.441406 42.152344 18.34375 37.1875 C 14.640625 31.25 11 23.589844 11 17 C 11 9.238281 17.238281 3 25 3 Z M 25 11 C 21.144531 11 18 14.144531 18 18 C 18 21.855469 21.144531 25 25 25 C 28.855469 25 32 21.855469 32 18 C 32 14.144531 28.855469 11 25 11 Z M 25 13 C 27.773438 13 30 15.226563 30 18 C 30 20.773438 27.773438 23 25 23 C 22.226563 23 20 20.773438 20 18 C 20 15.226563 22.226563 13 25 13 Z">
                          </path>
                        </svg>
                        <div data-id="multiple-select-search-bar-mobile" className="sc-iqcoie hsNYBZ">
                          <div className="sc-crXcEl jbIjZh">
                            <div className="sc-ksZaOG VAjSl">Tất cả địa điểm</div>
                            <div className="sc-hAZoDl eAhxuc">
                              <svg width={24} height={24} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ marginRight: 0 }}>
                                <path d="M18.6585527,8 C18.5713629,8.00266306 18.4880768,8.03910071 18.4269136,8.10286651 L11.9995722,14.5302079 L5.57223085,8.10286651 C5.50976631,8.03779911 5.42387773,8.00266306 5.33408503,8.00136146 C5.19744359,8.00266306 5.07641862,8.08464752 5.02436484,8.20957661 C4.97361231,8.33580729 5.00354332,8.47895504 5.10114425,8.57395311 L11.7640289,15.2368378 C11.8941634,15.3669722 12.104981,15.3669722 12.2351155,15.2368378 L18.8980002,8.57395311 C18.9969023,8.47895504 19.0268334,8.33190317 18.9747796,8.20567282 C18.9214245,8.07944214 18.7964954,7.99745768 18.6585527,8 Z" id="Down-Arrow-Thin" strokeWidth={1} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="content" >
                <section className="sectionBlock sectionBlock_has-padding-touch sectionBlock_featured-company lunar-new-year animated fadeIn take-1-second">
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
                </section>
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
                    <div className="p-0" style={{ width: '85%', margin: '0 auto' }}>
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
                            <h2 className="sectionBlock__title">Ngành Nghề Trọng Điểm</h2>
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



        </div> */}
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
              <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2Favery_hrbn2_122980.jpg&w=1920&q=75" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2Favery_hrbn2_122980.jpg&w=1920&q=75" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2Favery_hrbn2_122980.jpg&w=1920&q=75" className="d-block w-100" alt="..." />
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
          <div className='position-absolute top-50 start-50 translate-middle' style={{ background: 'rgba(0,0,0,.4)', height: '5em', width: '70%', borderRadius: '0.5em' }}>
            <div className="input-group mb-3 p-3 " style={{ width: '100%', display: 'inline-flex' }}>
              <div className="border border-right-0 input-group-text" id="basic-addon1" style={{ background: 'white', display: 'inline-block' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search mt-2" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <input
                onChange={(e: any) => setSearchValue(e.target.value)}
                type="text"
                className="form-control border border-left-0 py-4 rounded-end"
                placeholder="Tìm kiếm việc làm, công ty, kỹ năng"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <button onClick={() => navigate(`works?keyword=${searchValue}`)} type="button" className="btn ml-3 rounded-start" id="related-jobs-search">
                Tìm kiếm
              </button>
            </div>

          </div>
        </div>
        <section className="sectionBlock sectionBlock_has-padding-touch sectionBlock_featured-company lunar-new-year animated fadeIn take-1-second">
          <div className="container "><div className="is-flex justify-between align-center section-title lunar-new-year-bottom">
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
        </section>
        <section className="sectionBlock sectionBlock_has-slider sectionBlock_job-list section-featured-jobs">
          <div className="container p-0">
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
                      <div className="sc-dkSuNL gvXlWC row" style={{ transform: 'translateX(0px)', transition: 'all 0s ease 0s' }}>
                        {
                          posts ?
                            posts.map((post: any) =>
                              post.post_status == true ?
                                <NavLink to={`/posts/${post._id}`} className="sc-gJwTLC doaJYu col-4">
                                  <div key={post._id}>
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
                                </NavLink> : ""
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
        <section className="sectionBlock sectionBlock_hot-categories">
          <div className="container ">
            <div className="is-flex justify-between align-center section-title lunar-new-year-bottom">
              <h2 className="sectionBlock__title">Ngành Nghề Trọng Điểm</h2>
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
        <section className="sectionBlock job-corner animated fadeIn take-1-second ">
          <div className="container ">
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
          <div className="container p-0">
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
        <section className="sectionBlock hr-insider">
          <div className="container ">
            <div className="is-flex justify-between align-center section-title lunar-new-year-bottom">
              <h2 className="sectionBlock__title">Tư vấn nghề nghiệp từ HR Insider</h2>
              <div className="sectionBlock__link">
                <a href="http://hrinsider.vietnamworks.com" title="Xem Tất Cả" className="is-hidden-mobile" rel="noreferrer">Xem Tất Cả</a>
              </div>
            </div>
            <div className="sectionBlock__content" style={{ height: '100%' }}>
              <div className="article-wrapper">
                <article>
                  <div className="cardBlock">
                    <a href="/hrinsider/3-con-giap-nen-can-trong-trong-nam-2023.html?utm_source_navi=vnw_homepage" title="3 con giáp nên cẩn trọng trong năm 2023" target="_blank">
                      <figure className="image is-16by9 cardBlock__image">
                        <img src="https://www.vietnamworks.com//hrinsider//wp-content/uploads/2023/01/Shutterstock_2207479401-1-1080x675.jpg" alt="3 con giáp nên cẩn trọng trong năm 2023" />
                      </figure>
                    </a>
                    <div className="cardBlock__content-wrapper">
                      <div className="cardBlock__title">
                        <a href="/hrinsider/3-con-giap-nen-can-trong-trong-nam-2023.html?utm_source_navi=vnw_homepage" title="3 con giáp nên cẩn trọng trong năm 2023" className="text-like" target="_blank">
                          <div className="clamp-lines ">
                            <div id="clamped-content-card-title" aria-hidden="true">3 con giáp nên cẩn trọng trong năm 2023</div>
                          </div>
                        </a>
                      </div>
                      <div className="cardBlock__content" title="Sau một năm 2022 khó khăn, Quý Mão 2023 được cho mang lại nhiều may mắn hơn. Tuy vậy, theo các nhà chiêm tinh, một số con giáp tương khắc với Mão vẫn có thể gặp trắc trở."><div className="clamp-lines "><div id="clamped-content-card-content" aria-hidden="true">Sau một năm 2022 khó khăn, Quý Mão 2023 được cho mang lại nhiều may mắn hơn. Tuy vậy, theo các nhà chiêm tinh, một số con giáp tương khắc với Mão vẫn có thể gặp trắc trở.
                      </div>
                      </div>
                      </div>
                      <div className="cardBlock__category ellipsis">
                        <span className="cardBlock__point" />
                        <span>Trắc Nghiệm Vui</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
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

    </div>
  )
}

export default HomeClient