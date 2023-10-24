import { useState, useEffect } from 'react'
import { useAppSelector } from '../../../app/hook';
import { useGetJobsaveByUIdQuery, useRemoveJobsaveMutation } from '../../../service/savejob';
import { formatCurrency } from '../../../utils/hooks/FormatCurrrency';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { useGetUserByEmailQuery } from '../../../service/auth';
import { useGetJobApplyByUIdQuery, useGetJobdonesQuery, useRemoveJobdoneMutation } from '../../../service/jobdone';
import { AiFillHeart } from 'react-icons/ai';

import './Profile.scss'

const MyJob = () => {
  const [jobdone, setJobdone] = useState(false);
  const { email, isLoggedIn } = useAppSelector((res: any) => res.auth)
  const [dataJobdone, setDataJobdone] = useState([]);
  const { data: user } = useGetUserByEmailQuery(email)

  const { data: jobapply } = useGetJobdonesQuery(user?._id);
  const { data: jobsaves } = useGetJobsaveByUIdQuery(user?._id);
  const [removeJobdone] = useRemoveJobdoneMutation()
  useEffect(() => {
    if (!jobapply?.post) {
      setDataJobdone([])
    } else {
      setDataJobdone(jobapply.post)
    }
  }, [user?._id])
  //remove
  const [removeJobsave] = useRemoveJobsaveMutation()
  const onHandleRemove = (id: any) => {
    if (window.confirm("Bạn có muốn bỏ lưu không ?")) {
      removeJobsave(id)
      toast.success("Bỏ lưu việc làm thành công")
    }
  }
  // const handleRemoveJobDone = async (post_id: any) => {
  //   removeJobdone(post_id)
  //   toast.success("Hủy Ứng Tuyển Thành Công")
  // }
  return (
    //SaveJob
    <>
      <div className='myJob border bg-white pl-5 py-3 rounded '>
        <h3>Việc làm của tôi</h3>
      </div>
      <div className='border bg-white p-[16px] mt-[10px]'>
        <div className="row m-0 py-[10px] border-b-[1px]">
          <div className="col-2">
            <button onClick={() => setJobdone(false)} style={!jobdone ? { fontWeight: 'bold' } : {}} className='text-black'>Việc làm đã lưu</button>
          </div>
          <div className="col-3">
            <button onClick={() => setJobdone(true)} style={jobdone ? { fontWeight: 'bold' } : {}} className='text-black'>Việc làm đã ứng tuyển</button>
          </div>

        </div>
        <div className=''>
          <div>
            {jobdone ?
              jobapply?.map((item: any, index: any) => 
                (
                  <div key={index} className='myJob border bg-white mr-3 py-2 rounded my-2 row d-flex'>
                    <div className='col-2 pt-1'>
                      <img src="https://picsum.photos/200" className='border rounded px-2 py-4 w-60 h-30' />
                    </div>
                    <div className='col-8 pt-1'>
                      <a href="#" className='text-black'> <h5 className='fw-bold'>{item.job_name}</h5></a>
                      <p className='mt-2'>Hình Thức : {item.working_form}</p>
                      <p className='address'>Địa Điểm Làm Việc : {item.work_location}</p>
                      <p className='salary text-danger'>{formatCurrency(item.job_salary)}/Giờ</p>
                    </div>
                    <div className='col-2 pt-5'>
                      {/* <button onClick={() => handleRemoveJobDone(item._id)} className='border border-danger rounded bg-white text-danger p-1 ml-2 mt-2'>Hủy</button> */}
                    </div>
                  </div>
                )
              ) :
              jobsaves?.map((item: any, index: any) =>
                <div key={index} className='flex items-center justify-between border rounded my-[10px] p-[16px] hover:bg-[#f9fcff]'>
                  <div className='flex items-center w-[75%]'>
                    <div className=''>
                      <img src="https://picsum.photos/200" style={{ width: '100px', height: 'auto' }} className='rounded-[6px]' />
                    </div>
                    <div className='ml-[16px] flex-1'>
                      <NavLink to={`/posts/${item._id}`}> 
                          <h5 className='text-[#333] text-[18px] font-medium job-name'>
                            {item.job_name}
                          </h5>
                      </NavLink>
                      <p className='m-0 text-[13px]'>Hình thức: {item.working_form}</p>
                      <p className='m-0 text-[13px]'>{item.work_location}</p>
                      <p className='text-danger m-0 text-[13px]'>{formatCurrency(item.job_salary)}</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-center'>
                    <button onClick={() => onHandleRemove(item._id)}>
                      <AiFillHeart className='fill-[#669cff] hover:cursor-pointer' style={{ width: '20px', height: '20px' }} />
                    </button>
                    <button className='px-[16px] py-[6px] bg-[#FE7D55] hover:bg-[#FD6333] text-white rounded-[8px] ml-[16px]'>Ứng tuyển</button>
                  </div>
                </div>
              )}
          </div>

          <div className='note pt-[8px]'>
            <p>Lưu ý: Bạn không xem được việc làm đã hết thời hạn đăng tuyển hoặc tạm ngưng nhận hồ sơ.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyJob
