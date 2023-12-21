import { useState } from 'react'
import { message } from 'antd'
import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { useNavigate, NavLink } from 'react-router-dom'
import { auth } from '../../../firebase'
import { useSigninMutation } from '../../../service/auth'
import { useAppDispatch } from '../../../app/hook'
import { loginAuth } from '../../../app/actions/auth'
import { toast } from 'react-toastify'
import myImage from '../../../assets/img/logo.jpg';

import './AuthEpe.css'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [signin] = useSigninMutation()
    const [type, setType] = useState(false)
    const [loading, setLoading] = useState(false)
    const showPassword = () => {
        setType(!type)
    }

    const signIn = async (user: any) => {
        setLoading(true);
        const login = await signin(user);
        const { data: res }: any = login;

        if (res?.success) {
            if (res.user.isBlock) {
                setLoading(false);
                toast.warning("Tài khoản của bạn đã bị khóa. Vui lòng liên hệ quản trị viên.");
            } else {
                setLoading(false);
                dispatch(loginAuth(res));
                navigate('/');
            }
        } else {
            setLoading(false);
            toast.warning(res?.mes);
        }
    }


    const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider()
        await signInWithPopup(auth, provider)
            .then((result: any) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential: any = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                message.info("Sign in with Facebook!")
                navigate('/')
            })
            .catch((error) => {
                // Handle Errors here.
                console.log(error.message)
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
                message.info(error.data)
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
                    transform: 'translate(-50%)'
                }}>
                    {/* Nested Row within Card Body */}
                    {/* <div className="row p-0"> */}
                    <div className="w-[600px] min-h-[70vh] shadow">
                        <div className="p-5">
                            <div className="text-center pb-4">
                                <h1 className="h4 text-gray-900 text-[2.3rem]">
                                    Đăng nhập để tiếp tục
                                </h1>

                            </div>
                            <form onSubmit={handleSubmit(signIn)}>
                                <div className="form-group">
                                    <label className="text-dark fw-bold">Email</label>
                                    <input {...register('email', {
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })}
                                        type="email"
                                        className={errors.email ? "form-control border-1 border-red-500" : "form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"}
                                        name='email' />
                                    {errors.email && errors.email.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Email.</span>}
                                    {errors.email && errors.email.type != 'required' && <span className='text-red-500 fw-bold mt-1'>Email không hợp lệ.</span>}
                                </div>
                                <div className="form-group">
                                    <label className="text-dark fw-bold">Mật khẩu</label>
                                    <div className='relative flex items-center'>
                                        <input {...register('password', {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 50,
                                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,50}$/
                                        })}
                                            type={type ? 'text' : "password"}
                                            className={errors.password ? "form-control border-red-500" : "form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"}
                                            name='password'
                                            id='password' />
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                        </svg> */}
                                        <i className={type ? 'fa fa-eye absolute right-[10px] cursor-pointer' : 'fa fa-eye-slash absolute right-[10px] cursor-pointer'}
                                            onClick={showPassword}></i>
                                    </div>


                                    {errors.password && errors.password.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Mật khẩu</span>}
                                    {errors.password && errors.password.type != 'required' && <span className='text-red-500 fw-bold mt-1'>Mật khẩu không hợp lệ.</span>}
                                </div>
                                <div className="form-group">
                                    <div className='flex items-center justify-end'>
                                        <div className="">
                                            <NavLink to={'/forgot-pasword-epe'} className="">
                                                Quên mật khẩu?
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                                <button className="bg-[#FE7D55] hover:bg-[#FD6333] btn-block flex items-center justify-center py-3 gap-2 rounded text-white">
                                    {
                                        loading ?
                                            <i className="loading-icon fa-solid fa-circle-notch"></i>
                                            : 'Đăng nhập'
                                    }

                                </button>

                            </form>


                            <div className="text-dark my-4 flex gap-2 items-center justify-center">
                                Bạn chưa có tài khoản?
                                <span>
                                    <NavLink to={'/signup'} className='font-[700] text-[#005AFF] hover:no-underline hover:text-[#FD6333]'>
                                        Đăng ký ngay
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-7 d-none d-lg-block bg-gray-200" />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Login