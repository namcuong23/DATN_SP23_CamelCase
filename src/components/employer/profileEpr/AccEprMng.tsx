import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

const AccEprMng = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const changePass = () => {

    }
    return (
        <>
            <div className='bg-white min-h-screen flex items-start px-12 py-8 gap-14 text-[#474747]'>
                <aside className='w-[22%]'>
                    <div className='w-full border-1 rounded-[5px]'>
                        <ul className='flex flex-col text-[15px]'>
                            <li className='py-2 px-[20px] border-b-[1px] border-l-[4px] border-l-[#1C88E5] rounded-tl-[5px] font-[550] bg-[#F7FAFF]'>Quản lý tài khoản</li>
                            {/*  hover:border-b-0 hover:border-l-[4px] hover:border-[#1C88E5] hover:rounded-t-[5px] */}
                            <ul className='flex flex-col'>
                                <li className='py-2 px-[24px] hover:px-[20px] border-b-[1px] font-[550] bg-[#F7FAFF] hover:bg-white hover:border-l-[4px] hover:border-l-[#1C88E5]'>
                                    Thông tin cá nhân
                                </li>
                                <NavLink to={'/home/profile-epr'}
                                    className='py-1 px-4 hover:bg-[#E5E5E5] font-[400] text-[#333333] hover:text-[#333333]'>
                                    Thông tin chung
                                </NavLink>
                                <li className='py-1 px-4 hover:bg-[#E5E5E5] font-[400]'>Địa điểm làm việc</li>
                            </ul>
                        </ul>
                    </div>
                </aside>
                <main className='w-[78%]'>
                    <h2 className='text-[22px] tracking-normal py-1 pb-3 mb-3 border-b-[1px] text-[#333333]'>Quản lý tài khoản</h2>
                    <div>
                        <div className='text-[18px] tracking-normal font-[500]'>Thông tin chung</div>
                        <div className='border-1 shadow-sm rounded py-3 px-4 mt-1 '>
                            <div className='flex flex-col gap-y-2 pb-4 border-b-2'>
                                <div>
                                    <label className='w-[200px] font-[550]'>Địa chỉ email</label>
                                    <span>vuongdqph18468@fpt.edu.vn</span>
                                </div>
                                <div>
                                    <label className='w-[200px] font-[550]'>Họ và tên</label>
                                    <span>Nguyễn Tuấn</span>
                                </div>
                                <div>
                                    <label className='w-[200px] font-[550]'>Số điện thoại</label>
                                    <span>0383180224</span>
                                </div>
                            </div>
                            <div className='pt-2'>
                                <button className='text-[#1C88E5]'>Thay đổi mật khẩu</button>
                                {/* <form onSubmit={handleSubmit(changePass)} className='w-[500px] mt-2'>
                                    <div className='flex flex-col gap-x-10 mb-2'>
                                        <label className='text-[15px] font-[550]'>Mật khẩu hiện tại</label>
                                        <input type="password"
                                            {...register('oldpass', {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 50,
                                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,50}$/
                                            })}
                                            placeholder='Nhập mật khẩu hiện tại'
                                            name='oldpass'
                                            className='border-1 border-[#C9C9C9] rounded py-1 px-2 focus:outline-none focus:border-blue-500 focus:bg-[#F7FAFF] hover:border-blue-500 hover:bg-[#F7FAFF]' />
                                        {errors.oldpass && errors.oldpass.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Mật khẩu</span>}
                                        {errors.oldpass && errors.oldpass.type != 'required' && <span className='text-red-500 fw-bold mt-1'>Mật khẩu không hợp lệ.</span>}
                                    </div>
                                    <div className='flex flex-col gap-x-10 mb-2'>
                                        <label className='text-[15px] font-[550]'>Mật khẩu mới</label>
                                        <input type="password"
                                            {...register('newpass', {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 50,
                                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,50}$/
                                            })}
                                            placeholder='Nhập mật khẩu mới'
                                            name='newpass'
                                            className='border-1 border-[#C9C9C9] rounded py-1 px-2 focus:outline-none focus:border-blue-500 focus:bg-[#F7FAFF] hover:border-blue-500 hover:bg-[#F7FAFF]' />
                                        {errors.newpass && errors.newpass.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Mật khẩu mới</span>}
                                        {errors.newpass && errors.newpass.type != 'required' && <span className='text-red-500 fw-bold mt-1'>Mật khẩu không hợp lệ.</span>}
                                    </div>
                                    <div className='flex flex-col gap-x-10 mb-2'>
                                        <label className='text-[15px] font-[550]'>Nhập lại mật khẩu mới</label>
                                        <input type="password"
                                            {...register('confirmpass', {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 50,
                                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,50}$/
                                            })}
                                            placeholder='Nhập lại mật khẩu mới'
                                            name='confirmpass'
                                            className='border-1 border-[#C9C9C9] rounded py-1 px-2 focus:outline-none focus:border-blue-500 focus:bg-[#F7FAFF] hover:border-blue-500 hover:bg-[#F7FAFF]' />
                                        {errors.confirmpass && errors.confirmpass.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng xác nhận Mật khẩu mới</span>}
                                        {errors.confirmpass && errors.confirmpass.type != 'required' && <span className='text-red-500 fw-bold mt-1'>Mật khẩu không hợp lệ.</span>}
                                    </div>
                                    <div className='flex justify-end gap-x-3'>
                                        <button className='hover:bg-[#FD6333] border-1 border-[#979797] text-[#979797] py-1 px-8 text-[16px] rounded'>Hủy</button>
                                        <button className='bg-[#FE7D55] hover:bg-[#FD6333] text-white py-1 px-8 text-[16px] rounded'>Lưu</button>
                                    </div>
                                </form> */}
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </>
    )
}

export default AccEprMng