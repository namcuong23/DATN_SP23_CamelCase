import { useState } from 'react'
import { message } from 'antd'
import {
    signInWithEmailAndPassword
} from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase'
import UseAuth from '../UseAuth'
import { CgSpinner } from "react-icons/cg"
import { NavLink } from 'react-router-dom'
import { useLoginWithEmployerMutation } from '../../../service/auth_employer'



const LoginEmployer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const navigate = useNavigate()
    const [signin] = useLoginWithEmployerMutation()
    const currentUser: any = UseAuth()
    const [type, setType] = useState(false)
    const [loading, setLoading] = useState(false)
    const showPassword = () => {
        setType(!type)
    }

    const signIn = async (user: any) => {
        setLoading(true)
        const email = user.email
        const password = user.password

        const actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be in the authorized domains list in the Firebase Console.
            url: 'http://127.0.0.1:5173/',
            // This must be true.
            handleCodeInApp: true
        };
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential: any) => {
                // Signed in 
                const login = await signin(user)
                if (login) {
                    const userInfo = userCredential.user;
                    console.log('login', user);
                    currentUser.displayName = userInfo.displayName
                    setLoading(false)
                    localStorage.setItem('userEpr', user.email)
                    message.success('Login')
                    navigate('/home')
                }

            })
            .catch((error) => {
                setLoading(false)
                const errorCode = error.code;
                console.log(errorCode)
            });
    }
    return (
        <>
            <section>
                <div className='w-full flex'>
                    <aside className='bg-gradient-to-b from-[#001744] to-[#0053EB] w-[35%] min-h-screen'>
                        <span className='text-2xl text-white flex justify-center p-[50%]'>EMPLOYER</span>
                    </aside>
                    <main className='w-[65%] flex flex-col justify-between mt-[100px]'>
                        <div className='w-[60%] mx-auto text-[#474747]'>
                            <h3 className='text-3xl font-[600] py-12'>Đăng nhập</h3>
                            <form onSubmit={handleSubmit(signIn)} className="flex flex-col">
                                <div className='flex flex-col mb-2'>
                                    <label className='font-[600]'>Tài khoản đăng nhập</label>
                                    <input {...register('email',
                                        {
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
                                        <input {...register('password', { required: true, minLength: 6 })}
                                            type={type ? 'text' : "password"}
                                            className={errors.password ? "form-control border-red-500 focus:border-red-500 focus:shadow-none" : "form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"}
                                            name='password'
                                            id='password' />
                                        <i className={type ? 'fa fa-eye absolute right-[10px] cursor-pointer' : 'fa fa-eye-slash absolute right-[10px] cursor-pointer'}
                                            onClick={showPassword}></i>
                                    </div>
                                    {errors.password && errors.password.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Mật khẩu</span>}
                                    {errors.password && errors.password.type == 'minLength' && <span className='text-red-500 fw-bold mt-1'>Mật khẩu chứa từ 6 ký tự trở lên.</span>}

                                </div>

                                <div className='flex items-center justify-between my-5'>
                                    <a href='' className='text-[#005AFF] hover:no-underline hover:text-[#FD6333]'>Quên mật khẩu</a>
                                    <button className='bg-[#FE7D55] hover:bg-[#FD6333] py-2 px-3 rounded text-white font-[500]'>Đăng nhập</button>
                                </div>

                            </form>
                        </div>
                        <div className='w-100 flex items-center gap-2 bg-[#EDEDED] p-4'>
                            <p>Bạn chưa có tài khoản?</p>
                            <NavLink to={'/signup-epr'} className='font-[300] text-[#005AFF] hover:no-underline hover:text-[#FD6333]'>
                                Đăng ký
                            </NavLink>
                        </div>
                    </main>
                </div>
            </section>
        </>
    )
}

export default LoginEmployer