import { useState } from 'react'
import { message } from 'antd';
import { AiFillHeart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { formatCurrency } from '../../../utils/hooks/FormatCurrrency';
import { useGetMyPostsQuery, useRemoveMyPostMutation } from '../../../service/post';
import './Profile.scss'
import MyJobComp from './ProfileComps/MyJobComp';
import { useGetUserByEmailQuery } from '../../../service/auth';
import { useAppSelector } from '../../../app/hook';

const Suitable = () => {
    const [btnId, setBtnId] = useState(1);
    const [isJob, setIsJob] = useState(false)
    const { email, isLoggedIn } = useAppSelector((res: any) => res.auth)
    const { data: user } = useGetUserByEmailQuery(email)
    let suitableJobs = [];  
    console.log(user)
    const { data: myPostsData } = useGetMyPostsQuery(isJob ? { isDone: true } : { isSave: true });
   
    
    if (user && user.skills && myPostsData) {
        // Lặp qua từng công việc
        for (const myPost of myPostsData) {
            // Lặp qua từng kỹ năng trong user.skills
            for (const skill of user.skills) {
                if (skill.selectedCareer === myPost.career) {
                    console.log(myPost.level);
                    suitableJobs.push(myPost);
                    break; // Đã tìm thấy khớp, không cần kiểm tra các kỹ năng khác
                }
            }
        }
    } else {
        console.error("Đối tượng user không được định nghĩa hoặc không có thuộc tính skills");
    }
    
    const [removeMyPost] = useRemoveMyPostMutation()
    const onHandleRemove = async (myPost: any) => {
        await removeMyPost(myPost)
            .then(() => {
                message.success("Đã xoá khỏi Việc làm đã lưu.")
            }).catch((err: any) => {
                message.error(err.message)
            })
    }
    return (
        //SaveJob
        <>
          <div className='myJob border bg-white p-[16px] rounded'>
                <h3 className='text-[18px]'>Việc làm dành cho bạn</h3>
            </div>
            <div className='border bg-white p-[16px] mt-[8px]'>
        <div className=''>
          <div>
            {
              suitableJobs?.length >= 1 ?
              suitableJobs.map((item: any, index: any) => 
                (
                  <>
                    <div key={index} className='flex items-center justify-between border rounded my-[10px] p-[16px] hover:bg-[#f9fcff]'>
                      <div className='flex items-center w-[75%]'>
                        <div className=''>
                          <img 
                            src={item.logo} 
                            style={{ width: '100px', height: 'auto' }} 
                            className='rounded-[6px]' 
                          />
                        </div>
                        <div className='ml-[16px] flex-1'>
                          <NavLink to={`/posts/${item._id}`} target='_blank'> 
                              <h5 className='text-[#333] text-[18px] font-medium job-name'>
                                {item.job_name}
                              </h5>
                          </NavLink>
                          <p className='mb-0 mt-[4px] text-[13px]'>Hình thức: {item.working_form}</p>
                          <p className='mb-0 text-[13px]'>{item.work_location}</p>
                          <p className='text-danger mb-0 text-[13px]'>{formatCurrency(item.job_salary)}</p>
                        </div>
                      </div>

                      {
                        <div className='flex items-center justify-center'>
                          <button onClick={() => onHandleRemove({
                            _id: item._id,
                            isSave: true
                          })}>
                            <AiFillHeart className='fill-[#669cff] hover:cursor-pointer' style={{ width: '20px', height: '20px' }} />
                          </button>
                          <NavLink 
                            to={`/posts/${item._id}?apply=1`} 
                            target='_blank'
                            className='px-[16px] py-[6px] bg-[#FE7D55] hover:bg-[#FD6333] text-white rounded-[8px] ml-[16px]'
                          >
                            Ứng tuyển
                          </NavLink>
                        </div>
                      }

                    </div>
                  </>
                )
              ) :
              <MyJobComp isCheck={isJob} />
                
            }
          </div>
          
          {
            suitableJobs?.length >= 1 && 
            <div className='note pt-[8px]'>
              <p>
                Lưu ý: Bạn không xem được việc làm đã hết thời hạn đăng tuyển hoặc tạm ngưng nhận hồ sơ.
              </p>
            </div>
          }

        </div>
      </div>
        </>
    )
}

export default Suitable
