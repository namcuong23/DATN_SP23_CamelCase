import { message } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { useAddCvMutation } from '../../../service/manage_cv'
import { useGetPostQuery,useGetPostsByCareerQuery } from '../../../service/post'
import { useGetUserByEmailQuery } from '../../../service/auth'
import { useAppSelector } from '../../../app/hook'
import { useAddJobdoneMutation } from '../../../service/jobdone'
import { formatCurrency } from '../../../utils/hooks/FormatCurrrency'
import { useAddJobsaveMutation } from '../../../service/savejob'
import useDateFormat from '../../../utils/hooks/FormatDate'
import './postDetail.scss';
const PostDetailEp = (): any => {
  const { id } = useParams()
  const { data: post } = useGetPostQuery(id)
  const { data: posts } = useGetPostsByCareerQuery({
    id,
    career : post?.career
  })
  const { email, isLoggedIn, token } = useAppSelector((rs) => rs.auth)
  const { data: user } = useGetUserByEmailQuery(email)
  const [addCv] = useAddCvMutation()
  const [addJobdone] = useAddJobdoneMutation()
  const [addJobsave] = useAddJobsaveMutation()
  const applyJob = async () => {
    const address = `${user?.specific_address} ${user?.district} ${user?.province}`
    await addJobdone({
      ...post,
      user_id: user?._id
    })
    const apply = await addCv({
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      image: user?.image,
      address: address,
      description: user?.description,
      age: user?.age,
      gender: user?.gender,
      status: null,
      post_id: post._id
    })
    const { data: rs } = apply
    if (rs?.success) {
      message.success(rs?.mes)
    }
  }
  //savejob
  const saveJob = async () => {
    const address = `${user?.specific_address} ${user?.district} ${user?.province}`
    await addJobsave({
      ...post,
      user_id: user?._id
    })
    const save = await addCv({
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      image: user?.image,
      address: address,
      description: user?.description,
      age: user?.age,
      gender: user?.gender,
      status: null,
      post_id: post._id
    })
    const { data: rs } = save
    if (rs?.success) {
      message.success("Lưu thành công")
    }
  }
  return (
    <>
      <div
        className="recruitment-details"
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
                    <a
                      style={{
                        background: "white",
                        justifyContent: "center",
                        display: "flex",
                        padding: "5px",
                        border: "1px solid #fff",
                      }}
                    >
                      <img
                        src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F6e%2F10922087.png&w=128&q=75"
                        style={{
                          width: "100px",
                          height: "60px",
                          margin: "20px 0px",
                        }}
                      />
                    </a>
                  </div>
                  <div className="cuong1 w-[80%]">
                    <p>
                      <a
                        href="#"
                        className="job-name"
                        style={{ fontSize: "26px" }}
                      >
                        {post?.job_name}
                      </a>
                      <div style={{ color: "#005aff" }}>
                        {post?.work_location}
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
                    </p>
                  </div>
                </div>
                <div className=''>
                  {isLoggedIn ? (
                    <button onClick={saveJob} className="btn  p-2 heart m-2" data-evt-type="save-job">
                      <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px">
                        <path d="M 15 7 C 7.832031 7 2 12.832031 2 20 C 2 34.761719 18.695313 42.046875 24.375 46.78125 L 25 47.3125 L 25.625 46.78125 C 31.304688 42.046875 48 34.761719 48 20 C 48 12.832031 42.167969 7 35 7 C 30.945313 7 27.382813 8.925781 25 11.84375 C 22.617188 8.925781 19.054688 7 15 7 Z M 15 9 C 18.835938 9 22.1875 10.96875 24.15625 13.9375 L 25 15.1875 L 25.84375 13.9375 C 27.8125 10.96875 31.164063 9 35 9 C 41.085938 9 46 13.914063 46 20 C 46 32.898438 31.59375 39.574219 25 44.78125 C 18.40625 39.574219 4 32.898438 4 20 C 4 13.914063 8.914063 9 15 9 Z"></path>
                      </svg>
                    </button>
                  ) : (
                    <div className="bg-gray-100 text-[#333333] text-center font-semibold w-100 py-2 rounded mt-5">
                      Đăng nhập để lưu 
                    </div>
                  )}
                </div>
                <div className="w-[170px] h-[50px]">
                  {isLoggedIn ? (
                    <button
                      style={{ fontSize: "18px" }}
                      className="bg-[#ff7d55] w-full h-full  hover:bg-[#FD6333] text-white rounded font-medium"
                      onClick={applyJob}
                    >
                      Nộp đơn
                    </button>
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
                    <div>{post?.work_location}</div>
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
                      <img
                        src="src/image/logo-zalo.jpg"
                        className="mx-2"
                        width="16"
                        height="16"
                      />
                      <img
                        src="src/image/linked.jpg"
                        className="mx-2"
                        width="16"
                        height="16"
                      />
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
                        ĐỊA CHỈ LÀM VIỆC
                      </span>
                      <span className="text-[#333333] block font-thin text-[15px]">
                        {post?.work_location}
                      </span>
                      <hr />
                    </div>
                    <div className="pb-[15px]">
                      <span className="text-[#949697] block font-thin text-[13px]">
                        NGÂN SÁCH
                      </span>
                      <span className="text-[#333333] block font-thin text-[15px]">
                        {formatCurrency(post?.job_salary)}
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
                    <span className="text-[18px] block font-semibold leading-5 mb-4">Công việc tương tự</span>
                    {posts && posts.map((item:any) =>{
                      return (
                        <div style={{ border: '1px solid rgb(241, 241, 241)' }} className="job-similar rounded-xl p-3 flex w-full justify-between">
                        <div className="bg-white rounded-xl h-[86px] w-[86px] p-1">
                          <img className="w-full h-full object-contain rounded-xl" src="https://images.vietnamworks.com/pictureofcompany/d5/10894078.png" alt="logo" />
                        </div>
                        <div className="min-w-[0] flex flex-col w-[124px]" style={{ gap: '4px' }}>
                          <Link to={`/posts/${item._id}`}><span className="truncate block font-semibold leading-5">{item.job_name}</span></Link>
                          <span className="truncate block font-[14px] leading-4">{item.user_id?.name}</span>
                          <span className="truncate block text-[14px] leading-4 text-red-400">{formatCurrency(item.job_salary)}</span>
                          <span className="truncate block">{item.work_location}</span>
                        </div>
                      </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetailEp;
