import { NavLink } from 'react-router-dom'
import { useGetPostsQuery } from '../../../service/post'
import { WhatsAppOutlined } from '@ant-design/icons'
import { useAddFeedbackMutation } from '../../../services/feedback'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFeedback } from '../../../interfaces/feedback'
import { message, Button, Modal } from 'antd';
import { useAppSelector } from '../../../app/hook'
import { useState, useEffect } from 'react';
import HeaderSearchhJob from '../../layouts/HeaderSearchhJob'
import { useGetUserByEmailQuery } from '../../../service/auth'

import './HomeClient.css'
import { useGetBannersQuery } from '../../../service/admin/banner'
import { formatCurrency } from '../../../utils/hooks/FormatCurrrency'

const HomeClient = (): any => {
  const { email } = useAppSelector((rs) => rs.auth)
  const { data: user }: any = useGetUserByEmailQuery(email)
  const { data: posts } = useGetPostsQuery(user?._id)
  const { data: banners } = useGetBannersQuery()
  const [addFeedback] = useAddFeedbackMutation();
  const { register, handleSubmit, formState: { errors } } = useForm<IFeedback>()
  const [currentPosts, setCurrentPosts] = useState<any[]>([]);
  const [shuffled, setShuffled] = useState(false);
  useEffect(() => {
    if (posts && !shuffled) {
      // Lọc và xáo trộn danh sách công việc ngẫu nhiên khi component được tạo ra
      const filteredPosts = posts.filter((post: any) => post.post_status && post.priority);
      const shuffledPosts = [...filteredPosts].sort(() => Math.random() - 0.5);
      setCurrentPosts(shuffledPosts);

      const interval = setInterval(() => {
        setShuffled(true);
      }, 60000); // 5 giây (1 giây = 1000 milliseconds)

      return () => clearInterval(interval);
    }
  }, [posts, shuffled]);

  useEffect(() => {
    if (shuffled) {
      const shuffleTimeout = setTimeout(() => {
        shuffleAndSetPosts();
        setShuffled(false);
      }, 0); // Sử dụng setTimeout để chờ tới sau render

      return () => clearTimeout(shuffleTimeout);
    }
  }, [shuffled]);
  const shuffleAndSetPosts = () => {
    const shuffledPosts = [...currentPosts].sort(() => Math.random() - 0.5);
    setCurrentPosts(shuffledPosts);
  };
  
  const onSubmit: SubmitHandler<IFeedback> = (data) => {
    addFeedback({
      ...data,
      feedback_email: email
    })
    message.info('Gửi yêu cầu thành công')
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
      <div className="home-banner">
        <HeaderSearchhJob className='bg' />
        <div id="carouselExampleIndicators" className="carousel slide home-banner__item">
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
              <img src={banners && banners.length > 0 && banners[0].imageUrl || 'https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2Fcapge_hrbn_124732.jpg&w=1920&q=75'} className="d-block w-100" style={{
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }} alt="..." />
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
        <section className="sectionBlock sectionBlock_has-padding-touch fadeIn">
          <div className="home-banner__company">
            <div className="is-flex justify-between align-center section-title lunar-new-year-bottom mb-[16px]">
              <h2 className="sectionBlock__title text-[#fff]">Các Công Ty Hàng Đầu</h2>
            </div>
            <div className="sectionBlock__content" style={{ height: '100%' }}>
              <div className="featured-companies"><div className="companyBlock " style={{ flexBasis: '33.33%' }}>
                <a href="https://www.vietnamworks.com/company/metub-network?utm_campaign_navi=6293455&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage" target="_blank" rel="noreferrer">
                  <div className="companyBlock__box" role="img" aria-label="Metub Vietnam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn.">
                    <img className='mx-auto' src="https://images.vietnamworks.com/logo/M2B_viplogo_119863.jpg" alt="" />
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
                      <img className='mx-auto' src="https://images.vietnamworks.com/logo/130x130-O_121814.jpg" alt="" />
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
                      <img className='mx-auto' src="https://images.vietnamworks.com/logo/130x130-m_118018.jpg" alt="" />
                      <div className="companyBlock__content"><div className="companyBlock__name is-uppercase">MB SHINSEI (Mcredit)</div>
                        <span className="companyBlock__tag">Việc mới</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="companyBlock " style={{ flexBasis: '33.33%' }}>
                  <a href="https://www.vietnamworks.com/nha-tuyen-dung/lg-electronics-vietnam-sales-marketing-hcm-office-c81523?utm_campaign_navi=1895848&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage" target="_blank" rel="noreferrer">
                    <div className="companyBlock__box" role="img" aria-label="LG Electronics Vietnam tuyển dụng - Tìm việc mới nhất, lương thưởng hấp dẫn.">
                      <img className='mx-auto' src="https://images.vietnamworks.com/logo/new_120278.jpg" alt="" />
                      <div className="companyBlock__content"><div className="companyBlock__name is-uppercase">LG Electronics Vietnam</div>
                        <span className="companyBlock__tag">Việc mới</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="pageContentWrapper" className='pb-[4px] mb-[32px]'>
        <section className="home-content__jobs sectionBlock sectionBlock_has-slider sectionBlock_job-list section-featured-jobs">
          <div style={{ maxWidth: '100%' }} className="container p-0">
            <div className="is-flex justify-between align-center section-title">
              <h2 className="sectionBlock__title">Việc Làm Tốt Nhất</h2>
              <div className="sectionBlock__link">
                <a href="/viec-lam-tot-nhat">Xem Tất Cả</a>
              </div>
            </div>
            <div className=''>
              <div className="" style={{ height: '100%', padding: '9px 25px 25px' }}>
                <div className="swiper-container">
                  <div id="recommend-jobs" className="sc-dvwKko jrSuUk" style={{ width: '100%' }}>
                    <div className="sc-jtcaXd dhnMFx">
                    <div className="sc-dkSuNL gvXlWC row" style={{ transform: 'translateX(0px)', transition: 'all 0s ease 0s' }}>
      {currentPosts &&
        currentPosts.map((post: any, index: number) => (
          <NavLink key={index} to={`/posts/${post._id}`} className="sc-gJwTLC doaJYu col-4">
            <div key={post._id} className='job'>
              <div className="img-wrapper">
                <img src={post.logo} className="job-img" />
              </div>
              <div className="job-info">
                <div className='flex justify-end mt-[-8px] mb-[8px]'>
                  <span className='text-[12px] px-2 rouned-xl text-white bg-red-500'>HOT</span>
                </div>
                <h4 className="job-namee">{post.job_name}</h4>
                <p className="truncate block text-[14px] leading-4 text-red-400">
                  {post.offer_salary ? "Thương lượng" : <>{post?.min_job_salary ? `${formatCurrency(post.min_job_salary)}` : "Lên đến"} {post?.min_job_salary && post?.max_job_salary ? '-' : ""} {post?.max_job_salary ? `${formatCurrency(post.max_job_salary)}` : "trở lên"}</>}
                </p>
                <p className='job-location'>{post.work_location}</p>
              </div>
            </div>
          </NavLink>
        ))}
    </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>
        <section className="sectionBlock sectionBlock_hot-categories">
          <div className="home-content__careers">
            <div className="is-flex justify-between align-center section-title lunar-new-year-bottom mb-[16px]">
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
          <div className="home-content__banner-b">
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
          <div className="home-content__sug-job">
            <div className="flex justify-between align-center section-title bg-[#f2f7ff] py-[20px] pl-[40px] pr-[25px]">
              <h2 className="sectionBlock__title m-0">Việc Làm Cho Bạn</h2>
              <div className="sectionBlock__link">
                <a href="/viec-lam-goi-y">Xem Tất Cả</a>
              </div>
            </div>
            <div className=''>
              <div className="" style={{ height: '100%', padding: '9px 25px 25px' }}>
                <div className="swiper-container">
                  <div id="recommend-jobs" className="sc-dvwKko jrSuUk" style={{ width: '100%' }}>
                    <div className="sc-jtcaXd dhnMFx">
                      <div className="sc-dkSuNL gvXlWC row" style={{ transform: 'translateX(0px)', transition: 'all 0s ease 0s' }}>
                        {
                          posts && posts.map((post: any, index: number) =>
                            <NavLink key={index} to={`/posts/${post._id}`} className="sc-gJwTLC doaJYu col-4">
                              <div key={post._id} className='job'>
                                <div className="img-wrapper">
                                  <img src={post.logo}
                                    className="job-img" />
                                </div>
                                <div className="job-info">
                                  {
                                    post?.priority &&
                                    <div className='flex justify-end mt-[-8px] mb-[8px]'>
                                      <span className='text-[12px] px-2 rouned-xl text-white bg-red-500'>HOT</span>
                                    </div>
                                  }
                                  <h4 className="job-namee">{post.job_name}</h4>
                                  <p className="truncate block text-[14px] leading-4 text-red-400">
                                      {post.offer_salary
                                        ? "Thương lượng"
                                        : <>{post?.min_job_salary ? `${formatCurrency(post.min_job_salary)}` : "Lên đến"} {post?.min_job_salary && post?.max_job_salary ? '-' : ""} {post?.max_job_salary ? `${formatCurrency(post.max_job_salary)}` : "trở lên"}</>}
                                    </p>
                                  <p className='job-location'>{post.work_location}</p>
                                </div>
                              </div>
                            </NavLink>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>
      </div>

      <div className="float-contact ">
        <Button className='bg-[#f52b72] text-white m-2' onClick={showModal}>
          <WhatsAppOutlined /> Hỗ trợ
        </Button>
        <Modal
          title="Đóng góp ý kiến"
          open={isModalOpen}
          onCancel={handleCancel}
          okButtonProps={{ hidden: true }}
          cancelButtonProps={{ hidden: true }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='h-[80px] w-100 py-3 bg-white'>
              <div className='container flex items-center justify-center h-100 w-100'>
                <div className='flex items-center h-100 bg-[#F4F4F7] w-75 mr-2'>
                  <div className='h-100 flex items-center bg-[#F4F4F7] w-[100%] border rounded'>
                    <input type="text" className='bg-[#F4F4F7] h-100 w-[100%] text-gray-600 focus:outline-none' placeholder='Nhập câu hỏi cần giải đáp' {...register("feedback_question", { required: true })} />
                    {errors.feedback_question?.type === "required" && <p className='text-danger font-bold w-200'>Vui lòng nhập câu hỏi của bạn !</p>}
                  </div>
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

export default HomeClient