import React, { useState } from 'react'
import { useAppSelector } from '../../../app/hook';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UseAuth from '../../auth/UseAuth';
import { useGetEprProfileQuery } from '../../../service/profileEpe';
import { useGetJobsaveByUIdQuery, useRemoveJobsaveMutation } from '../../../service/savejob';

const MyJob = () => {
  const authid = getAuth();
  const [jobdone, setJobdone] = useState(false);
  const currentUser: any = UseAuth()
  const data: any = useGetEprProfileQuery(currentUser?.email)
  const profile: any = data.currentData
  const { data: jobsaves, error, isLoading } = useGetJobsaveByUIdQuery(profile?._id);
  console.log(jobsaves);
  console.log(profile?._id);
  const [removeJobsave] = useRemoveJobsaveMutation()
  const onHandleRemove = (id: any) => {
    removeJobsave(id)
  }
  return (
    //SaveJob
    <div className="col-9">
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
        <div style={{ height: '100%' }}>
          {jobdone ? <div className='myJob border bg-white mr-3 py-3 rounded my-3 row'>
            <div className='col-2 pt-5'>
              <img src="https://images.vietnamworks.com/pictureofcompany/f8/82482.jpg" className='border rounded px-2 py-4' />
            </div>
            <div className='col-8 '>
              <a href="#" className='text-black'> <h5 className='fw-bold'>Kỹ Sư Phòng Bảo Dưỡng Sửa Chữa (ME)</h5></a>
              <p style={{ marginTop: '10px' }}>Fujitsu Vietnam Ltd</p>
              <p className='address'>Ha Noi,Ho Chi Minh</p>
              <p className='salary text-danger'>$1000</p>
            </div>

          </div> :
            jobsaves?.map((item: any, index: any) =>
              <div key={index} className='myJob border bg-white mr-3 py-3 rounded my-3 row'>
                <div className='col-2 pt-1'>
                  <img src="https://picsum.photos/200" className='border rounded px-2 py-4 w-120 h-120' />
                </div>
                <div className='col-8 pt-1'>
                  <a href="#" className='text-black'> <h3 className='fw-bold'>{item.job_name}</h3></a>
                  <p>Fujitsu Vietnam Ltd</p>
                  <p className='address'>Ha Noi,Ho Chi Minh</p>
                  <p className='salary text-danger'>{item.job_salary}</p>
                </div>
                <div className='col-2 pt-5'>
                  <button className='border border-danger rounded bg-white text-danger p-3 mt-2'>Ứng tuyển</button>
                  <button onClick={()=>onHandleRemove(item._id)} className='border border-danger rounded bg-white text-danger p-3 mt-2'>Xoa</button>
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
