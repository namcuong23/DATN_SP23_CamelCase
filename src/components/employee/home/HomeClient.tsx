import { Link, NavLink } from 'react-router-dom'
import { useGetMyPostsQuery, useGetPostsQuery } from '../../../service/post'
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
import { useGetCareersQuery } from '../../../service/admin';
import { useGetUsersEprQuery } from '../../../service/auth_employer'

const HomeClient = (): any => {
  const { email } = useAppSelector((rs) => rs.auth)
  const { data: user }: any = useGetUserByEmailQuery(email)
  const { data: userEpr }: any = useGetUsersEprQuery('')
  const getLogo = (user_id: string) => {
    const data = userEpr.find((user: any) => user._id === user_id)

    return data.image
  }
  const [isJob, setIsJob] = useState(false)
  const { data: posts } = useGetPostsQuery(user?._id)

  const { data: banners } = useGetBannersQuery()
  const [addFeedback] = useAddFeedbackMutation();
  const { register, handleSubmit, formState: { errors } } = useForm<IFeedback>()
  const [currentPosts, setCurrentPosts] = useState<any[]>([]);
  const [shuffled, setShuffled] = useState(false);
  const { data: careers } = useGetCareersQuery();

  if (user && user.fieldPosition && user.desiredPosition) {
    const fieldPositionValue = user.fieldPosition;
    const desiredPositionValue = user.desiredPosition;
    const provinceValue = user.province;
    // Bây giờ bạn có thể sử dụng giá trị của fieldPositionValue
    console.log("Giá trị của fieldPosition:", fieldPositionValue);
    console.log("Giá trị của desiredPositionValue:", desiredPositionValue);
    console.log("Giá trị của privinceValue:", provinceValue);
  } else {
    console.error("Đối tượng user không tồn tại hoặc không có trường fieldPosition");
  }
  const { data: myPostsData } = useGetMyPostsQuery(isJob ? { isDone: false } : { isSave: true });
  const myPosts = myPostsData?.filter((myPost: any) => myPost);
  console.log(myPosts);

  const workLocations = myPosts?.map((post: any) => post.work_location) || [];

  // workLocations bây giờ chứa một mảng các giá trị work_location
  console.log("Danh sách các địa điểm làm việc:", workLocations);
  const suitableJobs = myPosts?.filter((myPost: any) => {
    if (user && user.fieldPosition && user.desiredPosition && user.province) {
      // Kiểm tra các điều kiện so sánh trường
      const isFieldPositionMatch = myPost.career === user.fieldPosition;
      const isDesiredPositionMatch = myPost.level === user.desiredPosition;
  
      // Kiểm tra xem user.province có khớp với bất kỳ giá trị trong mảng workLocations không
      const isProvinceMatch = workLocations.some((location: string) => {
        console.log("Location:", location);
        console.log("User Province:", user.province);
  
        const isLocationMatch = location.includes(user.province);
  
        console.log("Is Field Position Match:", isFieldPositionMatch);
        console.log("Is Desired Position Match:", isDesiredPositionMatch);
        console.log("Chú ý", isLocationMatch);
  
        // Kết quả tổng cộng cho tất cả các điều kiện
        const overallMatch = isFieldPositionMatch && isDesiredPositionMatch && isLocationMatch;
  
        console.log("Overall Match Result:", overallMatch);
  
        // Trả về kết quả tổng cộng
        return overallMatch;
      });
  
      // Trả về true nếu cả 3 điều kiện đều đúng, ngược lại trả về false
      return isProvinceMatch;
    }
  
    // Trả về false nếu có bất kỳ điều kiện nào không đúng hoặc nếu không có thông tin user
    return false;
  });
  

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
        <div id="" className=" home-banner__item">
          <img src={'https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2Fcapge_hrbn_124732.jpg&w=1920&q=75'} className="d-block w-100" style={{
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }} alt="..." />

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
                              <div className='job'>
                                <div className="img-wrapper">
                                  <img src={getLogo(post.user_id)} className="job-img" />
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
                <div className="grid  grid-cols-4">
                  {careers && careers.map((item: any) => {
                    return <div className='my-2'>
                      <div className="wrap-item">
                        <div style={{ width: '290px', height: '210px' }} className="category-item">
                          <Link to={`works?career=${item._id}`}><img width={60} style={{ height: '60px' }} src={item.image} />
                            <div className="wrap-name">
                              <h3 className="title truncate-text-2-line">{item.name}</h3>
                            </div>
                            {/* <p className="total">1124 <span>Việc Làm</span></p> */}
                          </Link>
                        </div>
                      </div>
                    </div>
                  })}
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
              <h2 className="sectionBlock__title m-0">Việc Làm Khác</h2>
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
                                      : `${post.min_job_salary} - ${post.max_job_salary}`}
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
        <section className="sectionBlock sectionBlock_has-slider sectionBlock_job-list section-featured-jobs">
          <div className="home-content__sug-job">
            <div className="flex justify-between align-center section-title bg-[#f2f7ff] py-[20px] pl-[40px] pr-[25px]">
              <h2 className="sectionBlock__title m-0">Dành riêng cho bạn</h2>
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
                          suitableJobs && suitableJobs.filter((post: any) => post.post_status === true).map((post: any, index: number) =>
                            <NavLink key={index} to={`/posts/${post._id}`} className="sc-gJwTLC doaJYu col-4">
                              <div className='job'>
                                <div className="img-wrapper">
                                  <img src={getLogo(post.user_id)}
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