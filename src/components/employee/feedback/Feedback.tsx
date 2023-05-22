import React from 'react'
import { useAddFeedbackMutation } from '../../../services/feedback'
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFeedback } from '../../../interfaces/feedback';
import { useGetUserByEmailQuery } from '../../../service/auth'
import { MessageType } from 'antd/es/message/interface';
import { message } from 'antd';
import { useAppSelector } from '../../../app/hook';
type Props = {}

const Feedback = (props: Props) => {
  const [addFeedback, { isLoading }] = useAddFeedbackMutation();
  const { email } = useAppSelector((rs) => rs.auth)
  const { data: user } = useGetUserByEmailQuery(email)

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
  return (
    <div>
      <div className='min-h-screen'>
        {/* SEARCH BAR */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='h-[80px] w-100 py-3 bg-white'>
            <div className='container flex items-center justify-center h-100 w-100'>
              <div className='flex items-center h-100 bg-[#F4F4F7] w-75 mr-2'>
                <div className='h-100 flex items-center bg-[#F4F4F7] w-[100%] border rounded'>
                  <input type="text" className='bg-[#F4F4F7] h-100 w-[100%] text-gray-600 focus:outline-none' placeholder='Nhập câu hỏi cần giải đáp' {...register("feedback_question", { required: true })} />
                  {errors.feedback_question?.type === "required" && <p className='text-danger font-bold w-200'>Vui lòng nhập câu hỏi của bạn !</p>}
                </div>
                {/* <div className='hidden'>
                  {email}
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
        <div className='mx-[150px] my-5 bg-white h-[600px]'>
          <div className='mx-5 mb-3' >
            <h3 className='text-[#FE7D55] pt-5'>Liên Hệ</h3>
            <p>Cám ơn bạn đã vào thăm trang JOBS FOR YOU của chúng tôi, website tuyển dụng trên mạng lớn nhất tại Việt Nam hiện nay. Bạn có thể liên hệ với chúng tôi theo một trong những cách sau:</p>
          </div>
          <div className='mx-5 mb-3'>
            <h5>Bộ phận Tư Vấn Nghề Nghiệp</h5>
            <p>Nếu bạn có thắc mắc trong quá trình sử dụng trang web JOBS FOR YOU, mời bạn vào trang Hỏi Đáp để xem hướng dẫn sử dụng và giải quyết những vấn đề thường gặp.</p>
            <p>Đối với những vấn đề khác, mời bạn điền vào mẫu thư liên lạc và gửi đi cho chúng tôi theo địa chỉ. Các chuyên viên tư vấn của VietnamWorks.com sẽ trả lời bạn trong thời gian sớm nhất.</p>
          </div>
          <div className='mx-5 mb-3'>
            <h5 className='mb-3'>Văn phòng JOBS FOR YOU</h5>
            <div className=' mb-3'>
              <h6>Cở sở Hồ Chí Minh</h6>
              <p>Tầng 20, tòa nhà E.Town Central, 11 Đoàn Văn Bơ, Phường 13, Quận 4, TP.HCM, Vietnam</p>
              <p>Điện thoại: (84 28) 5404 1373</p>
            </div>
            <div className=' mb-3 '>
              <h6>Cở sở Hà Nội</h6>
              <p>Tầng 7, tòa nhà V-building 125-127 Bà Triệu, phường Nguyễn Du, quận Hai Bà Trưng,Hà Nội</p>
              <p>Điện thoại: (84 24) 3974 3033</p>
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default Feedback