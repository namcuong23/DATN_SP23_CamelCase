import React, { useState } from 'react'
import { useGetProfileQuery } from '../../../service/manage_profile'
import ImanageProfile from '../../../interface/manageProfile'
import { NavLink, useNavigate } from 'react-router-dom'
import { Modal } from 'antd'
import { useAppSelector } from '../../../app/hook'
import { useForm } from 'react-hook-form'
import { useChangePasswordMutation } from '../../../service/auth'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

const AccountMng = () => {
    const { email } = useAppSelector((rs) => rs.auth)
    const data: any = useGetProfileQuery(email)
    const profile: ImanageProfile = data.currentData
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [changePassword] = useChangePasswordMutation()
    const handleChangePass = async ({ oldpass, newpass, confirmpass }: any) => {
        if (newpass != confirmpass) {
            return toast.warning('Mật khẩu không khớp')
        }

        const change = await changePassword({ email, oldpass, newpass })
        const { data: rs } = change
        if (rs?.success) {
            return Swal.fire('Congratulation', 'Đổi mật khẩu thành công', 'success').then(() => {
                window.location.reload()
            })
        } else {
            return toast.error(rs?.mes)
        }
    }
    return (
        <>
            <section className='border-1 rounded bg-white'>
                <h4 className='text-[#333333] text-[16px] py-3 px-4 font-[700]'>Quản lý tài khoản</h4>
            </section>
            <section className='border-1 rounded bg-white py-4 mt-[8px]'>
                <div className='px-4 flex-col justify-around'>
                    <div className='mb-4'>
                        <div className='text-[#333333] text-[15px] font-[700]'>Email đăng nhập & mật khẩu</div>
                        <div>Email truy cập hiện tại: {email}</div>
                    </div>
                    <div className='flex justify-end'>
                        <button className='text-[#005AFF] hover:text-[#FD6333]'
                            onClick={() => setOpen(true)} >
                            Thay đổi mật khẩu
                        </button>
                        <Modal
                            style={{ top: 147 }}
                            open={open}
                            onCancel={() => setOpen(false)}
                            okButtonProps={{ hidden: true }}
                            cancelButtonProps={{ hidden: true }}
                            width={700}
                        >
                            <h3 className='text-xl text-[#333333] border-b-[1px] pb-2 mb-2'>Thay đổi mật khẩu</h3>
                            <form onSubmit={handleSubmit(handleChangePass)}>
                                <div className="form-group">
                                    <label className="text-dark">Mật khẩu hiện tại</label>
                                    <input type="password"
                                        {...register('oldpass', {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 50,
                                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,50}$/
                                        })}
                                        className="form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"
                                        name='oldpass' />
                                    {errors.oldpass && errors.oldpass.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Mật khẩu</span>}
                                    {errors.oldpass && errors.oldpass.type != 'required' && <span className='text-red-500 fw-bold mt-1'>Mật khẩu không hợp lệ.</span>}
                                </div>

                                <div className="form-group">
                                    <label className="text-dark">Mật khẩu mới</label>
                                    <input type="password"
                                        {...register('newpass', {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 50,
                                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,50}$/
                                        })}
                                        className="form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"
                                        name='newpass' />
                                    {errors.newpass && errors.newpass.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Mật khẩu mới</span>}
                                    {errors.newpass && errors.newpass.type != 'required' && <span className='text-red-500 fw-bold mt-1'>Mật khẩu mới không hợp lệ.</span>}
                                </div>

                                <div className="form-group">
                                    <label className="text-dark">Mật khẩu xác nhận</label>
                                    <input type="password"
                                        {...register('confirmpass', {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 50,
                                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,50}$/
                                        })}
                                        className="form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"
                                        name='confirmpass' />
                                    {errors.confirmpass && errors.confirmpass.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Mật khẩu xác nhận</span>}
                                    {errors.confirmpass && errors.confirmpass.type != 'required' && <span className='text-red-500 fw-bold mt-1'>Mật khẩu xác nhận không hợp lệ.</span>}
                                </div>
                                <div className='flex justify-end gap-x-3'>
                                    <button className='bg-[#F4F4F7] hover:bg-[#E9E9F2] py-1 px-2 rounded'
                                        type='button'
                                        onClick={() => setOpen(false)} >
                                        Hủy
                                    </button>
                                    <button className='bg-[#FE7D55] hover:bg-[#FD6333] py-1 px-2 text-white rounded'
                                    >
                                        Thay đổi
                                    </button>
                                </div>
                            </form>
                        </Modal>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AccountMng