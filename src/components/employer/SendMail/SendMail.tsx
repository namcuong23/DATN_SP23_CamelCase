import React, { useState } from 'react'
import { useSendEmailMutation } from '../../../service/employer/sendmail'
import { useAppSelector } from '../../../app/hook'
import { useGetUserByEmailQuery } from '../../../service/auth'
import { SubmitHandler, useForm } from 'react-hook-form'
import ISendmail from '../../../interface/employer/sendmail'
import { Form, NavLink, useNavigate } from 'react-router-dom'
import { message } from 'antd'

type Props = {}

const SendMail = (props: Props) => {
    const navigate = useNavigate()
    const [sendMail, { isLoading }] = useSendEmailMutation()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ISendmail>()
    const onSubmit: SubmitHandler<ISendmail> = (data) => {
        sendMail(data)
        try {
            message.success('Đã gửi lời mời phỏng vấn đến ứng viên');
        } catch (err) {

        }
    }
    return (
        <div>
            {/* <h1>Lịch hẹn phỏng vấn</h1>
            <form id="emailForm" onSubmit={handleSubmit(onSubmit)}>
                <label >Địa chỉ email người nhận:</label>
                <input type="email" id="to" {...register("recipient_email", { required: true })}/>
                <label >Ngày phỏng vấn</label>
                <input type="date"  {...register("date", { required: true })}/>
                <label >Tiêu đề:</label>
                <input type="text" id="subject" {...register("title", { required: true })} />
                <label >Nội dung email:</label>
                <textarea id="text" {...register("content", { required: true })}/>

                <button >Gửi Email</button>
            </form> */}
            <div className='mt-4 w-100'>
                <h1 className='mb-3 text-center text-3xl font-bold text-[#44454A]'>Lịch hẹn phỏng vấn</h1>
                <form onSubmit={handleSubmit(onSubmit)} name="add">
                    <div className='max-w-[700px] mx-auto'>
                        <div className='fs-4 fw-'>Thông tin lịch hẹn</div>
                        <div className='d-flex align-items-top'>
                            <div className='w-100 ms-3 mt-4'>
                                <div><label className='text-danger pr-2'>* </label><label className='text-body'>Email ứng viên cần hẹn phỏng vấn</label></div>
                                <input type="email" id="to" {...register("recipient_email", { required: true })} className='border rounded-lg p-[3px] w-[650px]' />
                                {errors.recipient_email?.type === "required" && <p className='text-danger'>Please input your recipient email</p>}
                            </div>
                        </div>
                        <div className='d-flex align-items-top'>
                            <div className='w-100 ms-3 mt-4'>
                                <label className='text-danger pr-2'>* </label><label className='text-body '>Giờ phỏng vấn</label>
                                <input type="time" id="txtTime" {...register("time", { required: true })} className='border rounded-lg p-[3px] ml-[55px] w-[200px]' />
                                {errors.time?.type === "required" && <p className='text-danger'>Please input your interview hours</p>}
                            </div>
                        </div>
                        <div className='d-flex align-items-top'>
                            <div className='w-100 ms-3 mt-4'>
                                <label className='text-danger pr-2'>* </label><label className='text-body'>Ngày phỏng vấn</label>
                                <input type="date"  {...register("date", { required: true })} className='border rounded-lg p-[3px] mx-5 w-[200px]' />
                                {errors.date?.type === "required" && <p className='text-danger'>Please input your interview day</p>}
                            </div>
                        </div>
                        <div className='d-flex align-items-top'>
                            <div className='w-100 ms-3 mt-4'>
                                <label className='text-danger pr-2'>* </label><label className='text-body'>Số điện thoại liên hệ</label>
                                <input type="text" id="to" {...register("phone", { required: true })} className='border rounded-lg p-[3px] w-[650px]' />
                                {errors.phone?.type === "required" && <p className='text-danger'>Please input your phone number</p>}
                            </div>
                        </div>
                        <div className='d-flex align-items-top'>
                            <div className='w-100 ms-3 mt-4'>
                                <label className='text-danger pr-2'>* </label><label className='text-body'>Địa điểm phỏng vấn</label>
                                <input type="text" id="to" {...register("location", { required: true })} className='border rounded-lg p-[3px] w-[650px]' />
                                {errors.phone?.type === "required" && <p className='text-danger'>Please input your address</p>}
                            </div>
                        </div>
                    </div>
                    <div className='text-center sticky bottom-0 bg-white border-t-2 py-3 mt-[300px]'>
                        <button className='bg-[#FE7D55] hover:bg-[#FD6333] text-white text-[16px] py-1 px-6 rounded' type="submit">
                            Gửi
                        </button>

                        <a href="/home/posts">
                            <button
                                className='text-[#838383] hover:text-[#FE7D55] border-1 border-[#686868] hover:border-[#FE7D55] ms-4 py-1 px-6 rounded' type="button">
                                Trở về
                            </button>
                        </a>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SendMail