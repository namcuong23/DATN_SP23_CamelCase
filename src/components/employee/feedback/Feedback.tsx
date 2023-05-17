import React from 'react'
import { useAddFeedbackMutation } from '../../../services/feedback'
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFeedback } from '../../../interfaces/feedback';
import { useGetProfileQuery } from '../../../service/manage_profile'
import ImanageProfile from '../../../interface/manageProfile'
import { useGetUserByEmailQuery } from '../../../service/auth'
import UseAuth from '../../auth/UseAuth'
import { MessageType } from 'antd/es/message/interface';
import { message } from 'antd';
type Props = {}

const Feedback = (props: Props) => {
  const [addFeedback, { isLoading }] = useAddFeedbackMutation();
  const currentUser: any = UseAuth()
  const data: any = useGetProfileQuery(currentUser?.email)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFeedback>()
  const onSubmit: SubmitHandler<IFeedback> = (data) => {
    addFeedback({
      ...data,
      feedback_email: currentUser?.email
    })
    const confirm: MessageType = message.info('Gửi yêu cầu thành công')
    try {
    } catch (error) {

    }
  }
  return (
    <div>
      <div className='bg-gray-100 min-h-screen'>
        {/* SEARCH BAR */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='h-[80px] w-100 py-3 bg-white'>
            <div className='container flex items-center justify-center h-100 w-100'>
              <div className='flex items-center h-100 bg-[#F4F4F7] w-75 mr-2'>
                <div className='h-100 flex items-center bg-[#F4F4F7] w-[100%] border rounded'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search text-black  flex justify-center mx-3" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  <input type="text" className='bg-[#F4F4F7] h-100 w-[100%] text-gray-600 focus:outline-none' placeholder='Nhập câu hỏi cần giải đáp' {...register("feedback_question", { required: true })} />
                  {errors.feedback_question?.type === "required" && <p className='text-danger font-bold w-200'>Vui lòng nhập câu hỏi của bạn !</p>}
                </div>
                <div className='hidden'>
                  {currentUser?.email}
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
      </div>
      {/* CONTENT */}
      <div>

      </div>
    </div>
  )
}

export default Feedback