import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../../app/hook';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UseAuth from '../../auth/UseAuth';
import { useGetEprProfileQuery } from '../../../service/profileEpe';
import { useGetJobsaveByUIdQuery, useRemoveJobsaveMutation } from '../../../service/savejob';
import { formatCurrency } from '../../../utils/FormatCurrrency';
import { toast } from 'react-toastify';
import { useAddJobdoneMutation, useRemoveJobdoneMutation } from '../../../service/jobdone';
import { useGetJobdonesQuery } from '../../../service/jobdone';

const MyJob = () => {
  const [jobdone, setJobdone] = useState(false);
  const currentUser: any = UseAuth()
  const data: any = useGetEprProfileQuery(currentUser?.email)
  const profile: any = data.currentData
  const { data: jobsaves } = useGetJobsaveByUIdQuery(profile?._id);
  //jobdone
  const { data: jobdones } = useGetJobdonesQuery(profile?._id)
  console.log(jobdones);
  const [dataJobdone, setDataJobdone] = useState<any>({jobdones})
  useEffect(() => {
    setDataJobdone(jobdones);
  }, [jobdones])
  console.log(dataJobdone);
  
  //remove
  const [removeJobsave] = useRemoveJobsaveMutation()
  const onHandleRemove = (id: any) => {
    if (window.confirm("Bạn có muốn xóa không ?")) {
      removeJobsave(id)
      toast.success("Xóa Thành Công Việc Làm")
    }
  }
  const [removeJobdone] = useRemoveJobdoneMutation()
  const onHandleRemoveJobdone = (id: any) => {
    if (window.confirm("Bạn có muốn hủy ứng tuyển không ?")) {
      removeJobdone(id)
      toast.success("Hủy Ứng Tuyển Thành Công Việc Làm")
      setDataJobdone(jobdones)
    }
  }
  const [addJobdone] = useAddJobdoneMutation()
  const onHandleAdd: any = (item: any) => {
    try {
      addJobdone({ job_name: item.job_name, job_description: item.job_description, work_location: item.work_location, job_salary: item.job_salary, user_id: profile?._id });
      toast.success("Đã Ứng Tuyển Việc Làm Này");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    //SaveJob
    <div className="container">
      <div className='myJob border bg-white pl-5 py-3 rounded '>
        <h3>Việc làm của tôi</h3>
      </div>
      <div className='myJob border bg-white pl-5 pt-3 rounded my-3'>
        <div className="row py-2">
          <div className="col-2">
            <span onClick={() => setJobdone(false)} style={!jobdone ? { fontWeight: 'bold' } : {}} className='text-black'>Việc làm đã lưu</span>
          </div>
          <div className="col-2">
            <span onClick={() => setJobdone(true)} style={jobdone ? { fontWeight: 'bold' } : {}} className='text-black'>Việc làm đã ứng tuyển</span>
          </div>

        </div>
        <div>
          {jobdone ?
            dataJobdone?.map((item: any, index: any) => {
              return (
                <div key={index} className='myJob border bg-white mr-3 py-2 rounded my-2 row d-flex'>
                  <div className='col-2 pt-1'>
                    <img src="https://picsum.photos/200" className='border rounded px-2 py-4 w-60 h-30' />
                  </div>
                  <div className='col-8 pt-1'>
                    <a href="#" className='text-black'> <h5 className='fw-bold'>{item.job_name}</h5></a>
                    <p>Fujitsu Vietnam Ltd</p>
                    <p className='address'>{item.work_location}</p>
                    <p className='salary text-danger'>{formatCurrency(item.job_salary)}/Giờ</p>
                  </div>
                  <div className='col-2 pt-5'>
                    <button onClick={() => onHandleRemoveJobdone(item._id)} className='border border-danger rounded bg-white text-danger p-1 ml-2 mt-2'>Hủy</button>
                  </div>
                </div>)
            }
            ) :
            jobsaves?.map((item: any, index: any) =>
              <div key={index} className='myJob border bg-white mr-3 py-2 rounded my-2 pb-3 row'>
                <div className='col-2 pt-1'>
                  <img src="https://picsum.photos/200" className='border rounded px-2 py-4 w-60 h-30' />
                </div>
                <div className='col-8 pt-1'>
                  <a href="#" className='text-black'> <h5 className='fw-bold'>{item.job_name}</h5></a>
                  <p>Fujitsu Vietnam Ltd</p>
                  <p className='address'>{item.work_location}</p>
                  <p className='salary text-danger'>{formatCurrency(item.job_salary)}/Giờ</p>
                </div>
                <div className='col-2 pt-5'>
                  <button onClick={() => onHandleAdd(item)} className='border border-primary rounded bg-white text-primary p-1 mt-2'>Ứng tuyển</button>
                  <button onClick={() => onHandleRemove(item._id)} className='border border-danger rounded bg-white text-danger p-1 ml-2 mt-2'>Xóa</button>
                </div>
              </div>
            )}
        </div>

        <div className='note'>
          <p>Lưu ý: Bạn không xem được việc làm đã hết thời hạn đăng tuyển hoặc tạm ngưng nhận hồ sơ.</p>
        </div>
      </div>

    </div>
  )
}

export default MyJob
