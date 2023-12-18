import { useEffect, useState } from 'react';
import { message } from 'antd';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { CgSpinner } from "react-icons/cg"
import { useSignupMutation } from '../../../service/auth';
import { auth } from '../../../firebase';
import { useSignupAMutation } from '../../../service/admin';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify'
import { NavLink, useNavigate } from 'react-router-dom';
import myImage from '../../../assets/img/logo.jpg';

import './AuthEpe.css'
import React from 'react';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const navigate = useNavigate()
    const [signup] = useSignupMutation()
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState(false)
    const showPassword = () => {
        setType(!type)
    }

    const signUp: SubmitHandler<any> = async (user: any) => {
        console.log(user);

        setLoading(true)
        const register: any = await signup({ ...user })
        const { data: res } = register
        if (res?.success) {
            setLoading(false)
            Swal.fire('Congratulations', 'Đăng ký thành công!', 'success').then(async () => {
                navigate('/login')
            })
        } else {
            setLoading(false)
            toast.warning(res?.mes)
        }
    }

    const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider()
        await signInWithPopup(auth, provider)
            .then((result: any) => {
                // The signed-in user info.
                const user = result.user;
                console.log(user);

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential: any = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                message.info("Sign in with Facebook!")
                navigate('/')
            })
            .catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                // console.log(errorCode)

            });

    }

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
            .then((result) => {
                const credential: any = GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                console.log(result.user);
                message.info("Login with Google!")
                navigate('/')

            }).catch((error) => {
                // console.log(error.code)
            })
    }
    return (
        <>
            <div className="border-0 text-dark relative">
                <div className='bg-gradient-to-r from-[#001744] to-[#0053EB] min-h-[30vh] z-[-1000] text-white font-[500] pl-10'>
                    <NavLink to='/'>
                        <img width={150} height={150} src={myImage} alt="" />
                    </NavLink>
                </div>
                <div className="absolute top-[40%] left-[50%] bg-white" style={{
                    transform: 'translateX(-50%)'
                }}>
                    {/* Nested Row within Card Body */}
                    <div className="">
                        <div className="w-[600px] mx-auto min-h-[70vh] shadow">
                            <div className="p-5">
                                <div className="text-center pb-4">
                                    <h1 className="h4 text-gray-900 text-[2.3rem]">
                                        Đăng ký thành viên!
                                    </h1>

                                </div>

                                <div className='flex items-center space-x-3'>
                                    <button onClick={signInWithFacebook}
                                        className="text-[#000] w-100 p-[6px] flex items-center justify-center border-1 border-[#cccccc] gap-1 bg-gray-50 hover:bg-gray-200 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 48 48">
                                            <path d="M44,38.44A5.56,5.56,0,0,1,38.44,44H9.56A5.56,5.56,0,0,1,4,38.44V9.56A5.56,5.56,0,0,1,9.56,4H38.44A5.56,5.56,0,0,1,44,9.56Z" style={{ fill: "#3f51b5" }}></path>
                                            <path d="M35.52,25.11H31.78V39.56H26.22V25.11H22.89V20.67h3.33V18c0-3.9,1.62-6.21,6.22-6.21h3.78v4.44H33.68c-1.79,0-1.91.67-1.91,1.91v2.53h4.44Z" style={{ fill: "#fff" }}></path>
                                        </svg>
                                        Facebook
                                    </button>
                                    <button onClick={signInWithGoogle} className="text-black w-100 p-[6px] flex items-center justify-center border-1 border-[#cccccc] gap-1 bg-gray-50 hover:bg-gray-200 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 48 48" version="1.1">
                                            <path style={{ fill: '#FFC107' }} d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 33.652344 32.65625 29.222656 36 24 36 C 17.371094 36 12 30.628906 12 24 C 12 17.371094 17.371094 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 12.953125 4 4 12.953125 4 24 C 4 35.046875 12.953125 44 24 44 C 35.046875 44 44 35.046875 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z " />
                                            <path style={{ fill: '#FF3D00' }} d="M 6.304688 14.691406 L 12.878906 19.511719 C 14.65625 15.109375 18.960938 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 16.316406 4 9.65625 8.335938 6.304688 14.691406 Z " />
                                            <path style={{ fill: '#4CAF50' }} d="M 24 44 C 29.164063 44 33.859375 42.023438 37.410156 38.808594 L 31.21875 33.570313 C 29.210938 35.089844 26.714844 36 24 36 C 18.796875 36 14.382813 32.683594 12.71875 28.054688 L 6.195313 33.078125 C 9.503906 39.554688 16.226563 44 24 44 Z " />
                                            <path style={{ fill: '#1976D2' }} d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 34.511719 30.238281 33.070313 32.164063 31.214844 33.570313 C 31.21875 33.570313 31.21875 33.570313 31.21875 33.570313 L 37.410156 38.808594 C 36.972656 39.203125 44 34 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z " />
                                        </svg>
                                        Google
                                    </button>
                                </div>
                                <div className='text-center pb-4 pt-[30px] text-xl'>Hoặc</div>
                                <form onSubmit={handleSubmit(signUp)}>
                                    <div className="form-group">
                                        <label className="text-dark fw-bold">Tên</label>
                                        <input {...register('name', {
                                            required: true,
                                            pattern: /^(?!.*\d)(?!.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/
                                        })}
                                            type="text"
                                            className={errors.name ? "form-control border-red-500 focus:ring-red-500 border-1 focus:shadow-none" : "form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"}
                                            name='name' />
                                        {errors.name && errors.name.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Tên.</span>}
                                        {errors.name && errors.name.type == 'pattern' && <span className='text-red-500 fw-bold mt-1'>Tên không hợp lệ.</span>}
                                    </div>
                                    <div className="form-group">
                                        <label className="text-dark fw-bold">Số điện thoại</label>
                                        {/* <PhoneInput country={"vn"} /> */}
                                        <input {...register('phone', {
                                            required: true,
                                            minLength: 10,
                                            pattern: /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/
                                        })}
                                            type="text"
                                            className={errors.phone ? "form-control border-red-500 border-1" : "form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"}
                                            name='phone' />
                                        {errors.phone && errors.phone.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Số điện thoại.</span>}
                                        {errors.phone && errors.phone.type == 'minLength' && <span className='text-red-500 fw-bold mt-1'> Số điện thoại phải có ít nhất 10 ký tự.</span>}
                                        {errors.phone && errors.phone.type == 'pattern' && <span className='text-red-500 fw-bold mt-1'>Số điện thoại không hợp lệ.</span>}
                                    </div>
                                    <div className="form-group">
                                        <label className="text-dark fw-bold">Email</label>
                                        <input {...register('email',
                                            {
                                                required: true,
                                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                            })}
                                            type="email"
                                            placeholder='Sử dụng email có thật để xác thực.'
                                            className={errors.email ? "form-control border-red-500 border-1" : "form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"}
                                            name='email' />
                                        {errors.email && errors.email.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Email</span>}
                                        {errors.email && errors.email.type == 'pattern' && <span className='text-red-500 fw-bold mt-1'>Email không hợp lệ</span>}
                                        {/* {error != null && !errors.email ? <span className='text-red-500 fw-bold mt-1'>{error}</span> : ''} */}
                                    </div>
                                    <div className="form-group">
                                        <label className="text-dark fw-bold">Mật khẩu</label>
                                        <div className='relative flex items-center'>
                                            <input {...register('password',
                                                {
                                                    required: true,
                                                    minLength: 6,
                                                    maxLength: 50,
                                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,50}$/
                                                })}
                                                type={type ? 'text' : "password"}
                                                placeholder='Từ 6 đến 50 ký tự, 1 chữ hoa, 1 chữ thường.'
                                                className={errors.password ? "form-control border-red-500 border-1" : "form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"}
                                                name="password" />
                                            <i className={type ? 'fa fa-eye absolute right-[10px] cursor-pointer' : 'fa fa-eye-slash absolute right-[10px] cursor-pointer'}
                                                onClick={showPassword}></i>
                                        </div>
                                        {errors.password && errors.password.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Mật khẩu</span>}
                                        {errors.password && errors.password.type != 'required' && <span className='text-red-500 fw-bold mt-1'>Mật khẩu không hợp lệ.</span>}

                                    </div>

                                    <div className="my-[30px]">
                                        <p className="text-dark">Bằng cách nhấn vào nút "Đăng ký", tôi đồng ý với <span className="text-primary">Điều khoản dịch
                                            vụ</span> và <span className="text-primary">Chính sách bảo mật </span> của chúng tôi.
                                        </p>
                                    </div>
                                    <div>
                                        <button onClick={signUp} className="bg-[#FE7D55] hover:bg-[#FD6333] btn-block flex items-center justify-center py-3 gap-2 rounded text-white">
                                            {
                                                loading ?
                                                    <i className="loading-icon fa-solid fa-circle-notch"></i>
                                                    : 'Đăng ký'
                                            }

                                        </button>
                                    </div>
                                </form>

                                <div className="text-dark my-4 flex items-center gap-2 justify-center">
                                    Bạn đã có tài khoản?
                                    <span>
                                        <NavLink to={'/login'} className='font-[700] text-[#005AFF] hover:no-underline hover:text-[#FD6333]'>
                                            Đăng nhập
                                        </NavLink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-7 d-none d-lg-block bg-gray-200" /> */}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Register