import { message } from 'antd'
import { useState, useEffect } from 'react';
import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom'
import { useApplyCvMutation } from '../../../service/manage_cv'
import React from 'react';
import {
  useAddMyPostMutation,
  useCountNewCandidatesMutation,
  useGetPostQuery,
  useGetPostsByCareerQuery,
  useRemoveMyPostMutation
} from '../../../service/post'
import { useGetUserByEmailQuery } from '../../../service/auth'
import { useAppSelector } from '../../../app/hook'
import { formatCurrency } from '../../../utils/hooks/FormatCurrrency'
import useDateFormat from '../../../utils/hooks/FormatDate'
import HeaderSearchhJob from '../../layouts/HeaderSearchhJob'
import { useForm } from 'react-hook-form';
import { useAddNotificationMutation } from '../../../service/notification';
import './postDetail.scss';
const PostDetailEp = (): any => {
  const [countNewCandidates] = useCountNewCandidatesMutation()
  const [params] = useSearchParams()
  const apply = params.get('apply')
  const [isAplly, setIsAplly] = useState(apply !== null)
  const { id } = useParams()
  const { data: post } = useGetPostQuery(id)
  const { data: posts } = useGetPostsByCareerQuery({
    id,
    career: post?.career
  })
  const { email, isLoggedIn } = useAppSelector((rs: any) => rs.auth)
  const [lastSubmissionDate, setLastSubmissionDate] = useState<Date | null>(null);
  useEffect(() => {
    // Lấy thông tin về ngày nộp đơn gần đây nhất từ localStorage khi component được tải
    const storedDate = localStorage.getItem('lastSubmissionDate');
    if (storedDate) {
      setLastSubmissionDate(new Date(storedDate));
    }

    return () => localStorage.removeItem('lastSubmissionDate')
  }, []);
  useEffect(() => {
    // Lấy giá trị từ localStorage khi component được tải
    const storedIsApplied = localStorage.getItem('isApplied');
    if (storedIsApplied === 'true') {
      setIsApplied(true);
    }

    return () => {
      // Xoá giá trị từ localStorage khi component bị hủy
      localStorage.removeItem('isApplied');
    };
  }, []);
  const { data: user } = useGetUserByEmailQuery(email)
  const [applyCv] = useApplyCvMutation()
  const [addMyPost] = useAddMyPostMutation()
  const [addNotification] = useAddNotificationMutation()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [fileName, setFileName] = useState<any>()
  const [file, setFile] = useState<any>()
  const date = new Date()
  const currentDate = useDateFormat(date)
  // Thêm vào đầu component
  const [isApplied, setIsApplied] = useState(apply !== null);

  const applyJob = async (candidate: any) => {

    const currentDate = new Date();
    if (lastSubmissionDate && lastSubmissionDate.toDateString() === currentDate.toDateString()) {
      message.warning('Bạn đã nộp đơn trong ngày hôm nay rồi. Hãy quay lại vào ngày mai!');
      return;
    }

    await addNotification({
      email,
      role: 2,
      notification_title: "Ứng tuyển thành công",
      notification_content: post.job_content
    })

    await addMyPost({
      _id: id,
      isDone: true
    })

    const formData: any = new FormData();
    formData.append("name", user?.name)
    formData.append("image", user?.image)
    formData.append("job_title", candidate.job_title)
    formData.append("email", candidate.email)
    formData.append("post_id", id)
    formData.append("file", file)
    const apply = await applyCv(formData)
    const { data: rs } = apply

    if (rs?.success) {
      countNewCandidates(id)
      setIsAplly(false)
      setIsApplied(true);
      localStorage.setItem('isApplied', 'true');
      message.success(rs?.mes)
    }
    localStorage.setItem('lastSubmissionDate', currentDate.toISOString());
    setLastSubmissionDate(currentDate);
  }

  //Save job
  const saveJob = async () => {
    await addNotification({
      email,
      role: 2,
      notification_title: "Đã lưu vào Việc làm đã lưu",
      notification_content: post.job_content
    })

    await addMyPost({
      _id: id,
      isSave: true
    })
      .then((res: any) => {
        message.success("Đã thêm vào Việc làm đã lưu")
      })
      .catch((err: any) => {
        message.error(err.message)
      })
  }

  const [removeMyPost] = useRemoveMyPostMutation()
  const handleRemove = async (post: any) => {
    await removeMyPost({
      _id: id,
      isSave: true
    })
      .then(() => {
        message.success("Đã xoá khỏi Việc làm đã lưu")
      }).catch((err: any) => {
        message.error(err.message)
      })
  }
  return (
    <>
      <div className='bg-white'>
        <HeaderSearchhJob className={'py-[16px]'} />
      </div>
      <div
        className="recruitment-details mt-[16px]"
        style={{ background: "#f7f7f7", paddingBottom: "1em" }}
      >
        <div className="row">
          <div
            style={{ background: "white", height: "13em", paddingTop: "1em" }}
          >
            <div style={{ width: "73%", margin: "0 auto" }}>
              <div
                className="recruitment-details1 flex items-center justify-between"
                style={{ padding: "auto 0" }}
              >
                <div className="w-[80%] flex items-center">
                  <div
                    className="d-flex justify-content-center align-items-center logo-area-wrapper logo-border w-[20%]"
                    id="logo-area-wrapper"
                  >
                    <section
                      style={{
                        background: "white",
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: "center",
                        padding: "5px",
                        overflow: 'hidden',
                      }}
                      className='rounded-full w-[100px] h-[100px]'
                    >
                      <img src={post?.logo} />
                    </section>
                  </div>
                  <div className="cuong1 w-[80%]">
                  <div></div>
                    <a
                      href="#"
                      className="job-name"
                      style={{ fontSize: "26px" }}
                    >
                      {post?.job_name}
                    </a>
                    <div className="">
                      <span className="text-[#333333] block font-thin text-[15px]">
                        {post?.offer_salary
                          ? "Thương lượng"
                          : `${formatCurrency(post?.min_job_salary)} - ${formatCurrency(post?.max_job_salary)}`}
                      </span>
                    </div>
                    <span style={{ color: "#999", fontSize: "13px" }}>
                      Ngày đăng tin:{" "}
                      {useDateFormat(post?.createdAt)}
                    </span>
                    <div style={{ color: "#ff7d55", fontWeight: 500 }}>
                      {post?.job_salary?.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </div>
                  </div>
                </div>
                <div className=''>
                  {isLoggedIn ? (
                    <>
                      {
                        post && post.isSave ?
                          <button
                            onClick={handleRemove}
                            className="text-[20px] px-[16px] h-[50px] border-[1px] rounded-[6px]"
                            data-evt-type="save-job"
                            style={{
                              borderColor: "#669cff",
                              color: "#669cff"
                            }}
                          >
                            <i className="fa-solid fa-heart"></i>
                          </button>
                          :
                          <button
                            onClick={saveJob}
                            className="text-[20px] px-[16px] h-[50px] border-[1px] rounded-[6px]"
                            data-evt-type="save-job"
                            style={{
                              borderColor: "#666",
                              color: "#666"
                            }}
                          >
                            <i className="fa-regular fa-heart"></i>
                          </button>
                      }
                    </>
                  ) : (
                    <div className="bg-gray-100 text-[#333333] text-center font-semibold w-100 py-2 rounded mt-5">
                      Đăng nhập để lưu
                    </div>
                  )}
                </div>
                <div className="w-[170px] h-[50px] ml-[16px]">
                  {isLoggedIn ? (
                    <label
                      htmlFor='modal-cv-check'
                      style={{
                        fontSize: "18px",
                        background: isApplied ? "#ccc" : "#ff7d55",
                        cursor: isApplied ? "not-allowed" : "pointer",
                      }}
                      className={`w-full h-full hover:bg-[#FD6333] text-white rounded flex items-center justify-center`}
                      onClick={() => !isApplied && setIsAplly(!isAplly)}
                    >
                      {isApplied ? 'Đã ứng tuyển' : 'Nộp đơn'}
                    </label>
                  ) : (
                    <div className="bg-gray-100 text-[#333333] text-center font-semibold w-100 py-2 rounded mt-5">
                      Đăng nhập để ứng tuyển
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
          <div className="content-recruitment-details">
            <div
              className="pt-2 pl-5"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="w-[1100px]"
                style={{
                  display: "grid",
                  padding: "32px",
                  background: "white",
                  gap: "30px",
                  gridTemplateColumns: "1fr 352px"
                }}
              >
                <div className="flex flex-col p-3">
                  <p className="text-[21px] text-uppercase mt-1 mb-4 text-[#333333] font-medium">
                    CÁC PHÚC LỢI DÀNH CHO BẠN
                  </p>
                  <div className="benefits mb-[45px]">
                    Hoa hồng không giới hạn. Thưởng nóng x2 x3 x4 hấp dẫn từ
                    công ty và chủ đầu tư (30-100 triệu/căn).
                  </div>
                  <p className="text-[21px] text-uppercase mt-1 mb-4 text-[#333333] font-medium">
                    Mô tả công việc:
                  </p>
                  <div className="fs-6">{post?.job_description}</div>
                  <div className="flex flex-col py-3">
                    <p className="text-[21px] text-uppercase mt-1 mb-4 text-[#333333] font-medium">
                      Yêu cầu:
                    </p>
                    <div className="fs-6">{post?.requirements}</div>
                  </div>
                  <div className="">
                    <p className="text-[21px] text-uppercase mt-1 mb-2 text-[#333333] font-medium">
                      Địa điểm làm việc:
                    </p>
                    <div>
                      {post?.work_location.map((location, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <br />} {/* Thêm xuống dòng nếu không phải phần tử đầu tiên */}
                          {location}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-x-3">
                    <p className="text-[13px] m-0">Chia sẻ</p>
                    <div className="d-flex py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-facebook mx-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-twitter mx-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  style={{ flex: 1, padding: "23px", height: "fit-content" }}
                  className=""
                  id="banner-list-job border-1 rounded-[6px]"
                >
                  <div style={{ backgroundColor: "#f0f7ff", padding: "23px" }}>
                    <div className="pb-[15px]">
                      <span className="text-[#949697] block font-thin text-[13px]">
                        NGÀY ĐĂNG TUYỂN
                      </span>
                      <span className="text-[#333333] block font-thin text-[15px]">
                        {useDateFormat(post?.createdAt)}
                      </span>
                      <hr />
                    </div>
                    <div className="pb-[15px]">
                      <span className="text-[#949697] block font-thin text-[13px]">
                       Cấp bậc
                      </span>
                      <span className="text-[#333333] block font-thin text-[15px]">
                        {post?.level}
                      </span>
                      <hr />
                    </div>
             
                    <div className="pb-[15px]">
                      <span className="text-[#949697] block font-thin text-[13px]">
                        HÌNH THỨC LÀM VIỆC
                      </span>
                      <span className="text-[#333333] block font-thin text-[15px] text-uppercase">
                        {post?.working_form}
                      </span>
                      <hr />
                    </div>
                    <div className="pb-[15px]">
                      <span className="text-[#949697] block font-thin text-[13px]">
                        SỐ LƯỢNG YÊU CẦU
                      </span>
                      <span className="text-[#333333] block font-thin text-[15px]">
                        {post?.number_of_recruits}
                      </span>
                      <hr />
                    </div>
                    <div className="pb-[15px]">
                      <span className="text-[#949697] block font-thin text-[13px]">
                        GIỚI TÍNH
                      </span>
                      <span className="text-[#333333] block font-thin text-[15px]">
                        {post?.gender}
                      </span>
                      <hr />
                    </div>
                  </div>
                  <div style={{ border: '1px solid #b3ceff' }} className="mt-5 rounded-xl p-3">
                    <span className="text-[18px] block font-semibold leading-5 mb-4">Công việc khác</span>
                    {posts && posts.map((item: any) => {
                      return (
                        <div style={{ border: '1px solid rgb(241, 241, 241)' }} className="job-similar rounded-xl p-3 flex w-full justify-between">
                          <div className="bg-white rounded-xl h-[86px] w-[86px] p-1">
                            <img className="w-full h-full object-contain rounded-xl" src="https://images.vietnamworks.com/pictureofcompany/d5/10894078.png" alt="logo" />
                          </div>
                          <div className="min-w-[0] flex flex-col w-[124px]" style={{ gap: '4px' }}>
                            <Link to={`/posts/${item._id}`}>
                              <span className="truncate block font-semibold leading-5">{item.job_name}</span>
                            </Link>
                            <span className="truncate block font-[14px] leading-4">{item.user_id?.name}</span>
                            <span className="truncate block text-[14px] leading-4 text-red-400">
                              {item.offer_salary
                                ? "Thương lượng"
                                : `${item.min_job_salary} - ${item.max_job_salary}`}
                            </span>
                            <span className="truncate block">{item.work_location}</span>
                          </div>
                        </div>
                      );
                    })}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <input
        type="checkbox"
        hidden
        id="modal-cv-check"
        className='modal-open-check'
        checked={isAplly}
        readOnly
      />
      <label htmlFor='modal-cv-check' onClick={() => setIsAplly(!isAplly)} className="overlay"></label>
      {/* Modal CV */}
      <section className="modal-cv">
        <section className="modal-cv__job">
          <section
            className="modal-cv__job-img"
            style={{ backgroundImage: "url('https://images.vietnamworks.com/pictureofcompany/bb/11125895.png')" }}
          ></section>
          <section className="modal-cv__job-info">
            <h4 className="modal-cv__job-name">{post?.job_name}</h4>
            <p className="modal-cv__job-salary">{formatCurrency(post?.job_salary)}</p>
            <p className="modal-cv__job-location">{post?.work_location}</p>
          </section>
          <label htmlFor="modal-cv-check" onClick={() => setIsAplly(!isAplly)}>
            <i className="modal-cv__job-icon fa-solid fa-xmark"></i>
          </label>
        </section>
        <form onSubmit={handleSubmit(applyJob)}>
          <section className="modal-cv__form">
            <section className="modal-cv__form-info">
              <svg width="88" height="88" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="90" height="90" rx="45" fill="#E6EFFF"></rect>
                <path d="M55.9759 54.1993C62.3237 54.1993 67.8409 48.5041 67.8409 41.0884C67.8409 33.7618 62.3237 28.3335 55.9759 28.3335C49.6281 28.3335 44.1109 33.8804 44.1109 41.1477C44.1109 48.5041 49.5984 54.1993 55.9759 54.1993ZM37.3181 81.6668H74.5743C79.261 81.6668 80.9221 80.332 80.9221 77.7217C80.9221 70.0688 71.3411 59.5089 55.9462 59.5089C40.581 59.5089 31 70.0688 31 77.7217C31 80.332 32.6611 81.6668 37.3181 81.6668Z" fill="#CCDEFF"></path>
              </svg>
              <section className="modal-cv__form-input">
                <h5>{user?.name}</h5>
                <input type="text"
                  {...register('job_title', {
                    required: true,
                  })}
                  placeholder='Nhập Chức danh'
                  name='job_title' />
                {errors.job_title && errors.job_title.type === 'required' && <span className='text-red-500 text-[12px] mt-1'>Vui lòng nhập Chức danh</span>}
                <input type="text"
                  {...register('email', {
                    required: true,
                  })}
                  placeholder='Nhập email'
                  defaultValue={user?.email ? user?.email : ""}
                  name='email' />
                {errors.email && errors.email.type === 'required' && <span className='text-red-500 text-[12px] mt-1'>Vui lòng nhập Email</span>}
              </section>
            </section>

            <section className="modal-cv__form-file">
              <p className="modal-cv__form-para">
                <b>Chọn hồ sơ ứng tuyển:</b> Nhà tuyển dụng ưu tiên hồ sơ ứng tuyển viết bằng <b>Tiếng Anh</b>
              </p>
              {
                fileName &&
                <section className="modal-cv__file-uploaded">
                  <input type="radio" checked readOnly />
                  <section className="modal-cv__file-info">
                    <label className='modal-cv__file-title'>Hồ sơ vừa tải lên</label>
                    <p className="modal-cv__file-name">
                      <span>{fileName.name} - Đã tải lên: {fileName.currentDate}</span>
                    </p>
                  </section>
                </section>
              }
              <section className="modal-cv__form-upload">
                <label htmlFor="file-upload">
                  <i className="fa-solid fa-upload"></i>
                  Chọn hồ sơ từ máy của bạn
                </label>
                <input hidden type="file"
                  id="file-upload"
                  accept='application/pdf'
                  {...register('cv', {
                    required: true,
                    onChange: (e: any) => {
                      const { name } = e.target.files[0]

                      setFileName({ name, currentDate })
                      setFile(e.target.files[0])
                    }
                  })}
                />
                <p>Hỗ trợ định dạng .doc, .docx, pdf có kích thước dưới 5120KB</p>
              </section>
              {errors.cv && errors.cv.type === 'required' && <span className='text-red-500 text-[12px] mt-1'>Vui lòng đính kèm file CV để ứng tuyển</span>}
            </section>
            <section style={{ padding: '16px 0' }}>
              <NavLink to="/change-cv" className="modal-cv__form-link">Tạo hồ sơ ngay</NavLink>
            </section>
          </section>

          <button type='submit' className="modal-cv__btn">Nộp đơn</button>
        </form>

      </section>
    </>
  )
}

export default PostDetailEp;
