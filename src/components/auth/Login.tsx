import { useState } from 'react'
import { message } from 'antd'
import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    sendSignInLinkToEmail,
    signInWithEmailAndPassword,
    signInWithPopup
} from 'firebase/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { useSigninMutation } from '../../service/auth'
import UseAuth from './UseAuth'



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const navigate = useNavigate()
    const [signin] = useSigninMutation()
    const currentUser: any = UseAuth()
    // console.log(currentUser);


    const signIn = async (user: any) => {
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
                    message.info(`Signed in successfully!`)
                    const userInfo = userCredential.user;
                    console.log('login', user);
                    currentUser.displayName = userInfo.name
                    // console.log('auth', currentUser);
                    // navigate('/')
                    // await sendSignInLinkToEmail(auth, email, actionCodeSettings)
                    //     .then(() => {
                    //         message.info(`Link sent to ${email}`)
                    //     }).catch((error) => {
                    //         const errorCode = error.code;
                    //         console.log(errorCode)
                    //     })

                }

            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
            });
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
                const errorCode = error.code;
                console.log(errorCode)

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
            <div className="card o-hidden border-0 text-dark">
                <div className="card-body p-0">
                    {/* Nested Row within Card Body */}
                    <div className="row p-0">
                        <div className="col-lg-5 min-h-[100vh]">
                            <div className="p-5">
                                <div className="">
                                    <h1 className="h4 text-gray-900 fw-bold">
                                        Chào mừng bạn trở lại,
                                    </h1>
                                    {/* <div className="container">
                                        <div id="loading-area">
                                        </div>
                                    </div> */}
                                    <p className="text-gray-900 mb-4">This is slogan of website.</p>
                                </div>
                                <form onSubmit={handleSubmit(signIn)}>
                                    <div className="form-group">
                                        <label className="text-dark fw-bold">Email</label>
                                        <input {...register('email', { required: true })}
                                            type="email"
                                            className={errors.email ? "form-control border-red-500" : "form-control"}
                                            name='email' />
                                        {errors.email && errors.email.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Email</span>}
                                    </div>
                                    <div className="form-group">
                                        <label className="text-dark fw-bold">Mật khẩu</label>
                                        <div className='relative flex items-center'>
                                            <input {...register('password', { required: true, minLength: 6 })}
                                                type="password"
                                                className={errors.password ? "form-control border-red-500" : "form-control"}
                                                name='password'
                                                id='password' />
                                            <i className="eye fa fa-eye-slash cursor-pointer absolute right-[10px]" />
                                        </div>

                                        {errors.password && errors.password.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Mật khẩu</span>}
                                        {errors.password && errors.password.type == 'minLength' && <span className='text-red-500 fw-bold mt-1'>Mật khẩu chứa từ 6 ký tự trở lên.</span>}
                                    </div>
                                    <div className="form-group">
                                        <div className='flex items-center justify-between'>
                                            <div className="space-x-1">
                                                <input type="checkbox" className="" />
                                                <label className="small">Remember Me</label>
                                            </div>
                                            <div className="">
                                                <a className="small" href="">Quên mật khẩu?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={signIn} className="btn btn-primary btn-user btn-block">
                                        Đăng nhập
                                    </button>

                                </form>
                                <div className='text-center py-3'>Hoặc</div>
                                <div className='flex items-center space-x-3'>
                                    <button onClick={signInWithFacebook}
                                        className="bg-blue-600 hover:bg-blue-700 text-white w-100 p-[6px] rounded">
                                        <i className="fab fa-facebook-f fa-fw" /> Facebook
                                    </button>
                                    <button onClick={signInWithGoogle} className="bg-red-500 hover:bg-red-600 text-white w-100 p-[6px] rounded">
                                        <i className="fab fa-google fa-fw" /> Google
                                    </button>
                                </div>

                                <div className="text-dark my-4">
                                    Bạn chưa có tài khoản?
                                    <span>
                                        <a className="fw-bold" href=''> Đăng ký ngay </a>
                                    </span>
                                </div>
                                <hr />
                                <div>
                                    <div className="fw-bold pb-0 mt-4">Bạn gặp khó khăn khi tạo tài khoản?</div>
                                    <div>Vui lòng gọi tới số 0123456789 (giờ hành chính).</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 d-none d-lg-block bg-gray-200" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login