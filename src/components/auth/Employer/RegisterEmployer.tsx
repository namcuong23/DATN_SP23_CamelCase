import { useState } from 'react';
import { message } from 'antd';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import { AiFillTaobaoSquare } from 'react-icons/ai';
import { CgSpinner } from "react-icons/cg"
import { useAddProfileMutation } from '../../../service/manage_profile';
import { auth } from '../../../firebase';
import { useRegisterWithEmployerMutation } from '../../../service/auth_employer';

const RegisterEmployer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const navigate = useNavigate()
    const [signup] = useRegisterWithEmployerMutation()
    const [addProfile] = useAddProfileMutation()
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState(false)
    const showPassword = () => {
        setType(!type)
    }

    const signUp: SubmitHandler<any> = async (user: any) => {
        setLoading(true)
        const email = user.email
        const password = user.password

        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in 
                const userInfo: any = userCredential.user;
                const currentUser: any = auth.currentUser;
                sendEmailVerification(currentUser)
                    .then(() => {
                        message.info('Email verification link sent!')
                    })
                await addProfile({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    phone: user.phone
                })

                const register = await signup({
                    ...user,
                    level_auth: 1
                })
                if (register) {
                    setLoading(false)
                    navigate('/login-epr')
                    message.success("Created account successfully!")
                }
            })
            .catch((error) => {
                setLoading(false)
                const errorCode = error.code;
                console.log(errorCode);
            });

    }
    return (
        <>
            <section>
                <div className='w-full flex'>
                    <aside className='bg-gradient-to-b from-[#001744] to-[#0053EB] w-[35%] min-h-screen'>
                        <span className='text-2xl text-white flex justify-center p-[50%]'>EMPLOYER</span>
                    </aside>
                    <main className='w-[65%] flex flex-col justify-between mt-[50px]'>
                        <div className='w-[60%] mx-auto text-[#474747]'>
                            <h3 className='text-3xl font-[600] py-12'>Đăng ký</h3>
                            <form onSubmit={handleSubmit(signUp)} className="flex flex-col">
                                <div className='flex flex-col mb-2'>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <label className="text-dark fw-bold">Tên</label>
                                            <input {...register('first_name', { required: true })}
                                                type="text"
                                                className={errors.first_name ? "form-control border-red-500 border-1 focus:border-red-500 focus:shadow-none" : "form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"}
                                                name='first_name' />
                                            {errors.first_name && errors.first_name.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Tên.</span>}
                                        </div>
                                        <div>
                                            <label className="text-dark fw-bold">Họ</label>
                                            <input {...register('last_name', { required: true })}
                                                type="text"
                                                className={errors.last_name ? "form-control border-red-500 border-1 focus:border-red-500 focus:shadow-none" : "form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"}
                                                name='last_name' />
                                            {errors.last_name && errors.last_name.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Họ.</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col mb-2'>
                                    <label className='font-[600]'>Số điện thoại</label>
                                    <input {...register('phone', { required: true })}
                                        type="text"
                                        className={errors.phone ? "form-control border-1 border-red-500 focus:border-red-500 focus:shadow-none" : "form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"}
                                        name='phone' />
                                    {errors.phone && errors.phone.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Số điện thoại.</span>}
                                </div>
                                <div className='flex flex-col mb-2'>
                                    <label className='font-[600]'>Email</label>
                                    <input {...register('email', {
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })}
                                        type="email"
                                        className={errors.email ? "form-control border-1 border-red-500 focus:border-red-500 focus:shadow-none" : "form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"}
                                        name='email' />
                                    {errors.email && errors.email.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Email.</span>}
                                    {errors.email && errors.email.type != 'required' && <span className='text-red-500 fw-bold mt-1'>Email không hợp lệ.</span>}
                                </div>
                                <div className='flex flex-col'>
                                    <label className='font-[600]'>Mật khẩu</label>
                                    <div className='relative flex items-center'>
                                        <input {...register('password', {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 50,
                                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                        })}
                                            type={type ? 'text' : "password"}
                                            className={errors.password ? "form-control border-red-500 focus:border-red-500 focus:shadow-none" : "form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"}
                                            name='password'
                                            id='password' />
                                        <i className={type ? 'fa fa-eye absolute right-[10px] cursor-pointer' : 'fa fa-eye-slash absolute right-[10px] cursor-pointer'}
                                            onClick={showPassword}></i>
                                    </div>
                                    {errors.password && errors.password.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Mật khẩu.</span>}
                                    {errors.password && errors.password.type != 'required' && <span className='text-red-500 fw-bold mt-1'>Mật khẩu không hợp lệ.</span>}

                                </div>

                                <div className='flex items-center justify-end my-5'>
                                    <button className='bg-[#FE7D55] hover:bg-[#FD6333] py-2 px-3 rounded text-white font-[500]'>Đăng nhập</button>
                                </div>

                            </form>
                        </div>
                        <div className='w-100 flex items-center gap-2 bg-[#EDEDED] p-4'>
                            <p>Bạn đã có tài khoản?</p>
                            <NavLink to={'/login-epr'} className='font-[300] text-[#005AFF] hover:no-underline hover:text-[#FD6333]'>
                                Đăng nhập
                            </NavLink>
                        </div>
                    </main>
                </div>
            </section>

        </>
    )
}

export default RegisterEmployer