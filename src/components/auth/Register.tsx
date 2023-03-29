import React, { useState } from 'react';
import { message, RadioChangeEvent } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { Input, Radio, Space } from 'antd';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAppDispatch } from '../../app/hook';
import { useSignupMutation } from '../../service/auth';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'

const Register = () => {
    const [value, setValue] = useState(null);
    const onChange = (e: RadioChangeEvent) => {
        // console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [signup] = useSignupMutation()

    const signUp: SubmitHandler<any> = async (user: any) => {
        console.log(user);
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
                const register = await signup({
                    ...user,
                    role: value,
                    level_auth: 1
                })
                if (register) {
                    console.log(userInfo);
                    message.info("Created account successfully!")
                    navigate('/login')

                }
            })
            .catch((error) => {
                const errorCode = error.code;
                message.info(errorCode);
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
            <div className="card o-hidden border-0 text-dark">
                <div className="card-body p-0">
                    {/* Nested Row within Card Body */}
                    <div className="row p-0">
                        <div className="col-lg-5">
                            <div className="p-5">
                                <div>
                                    <h1 className="h4 text-gray-900 font-weight-bold">Tìm việc và tuyển dụng</h1>
                                    <p className="text-gray-900 mb-4">This is slogan of website.</p>
                                </div>
                                <form onSubmit={handleSubmit(signUp)}>
                                    <div className="form-group">
                                        <label className="text-dark fw-bold">Họ và tên</label>
                                        <input {...register('name', { required: true })}
                                            type="text"
                                            className={errors.name ? "form-control border-red-500" : "form-control"}
                                            name='name' />
                                        {errors.name && errors.name.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Họ và tên</span>}
                                    </div>
                                    <div className="form-group">
                                        <label className="text-dark fw-bold">Số điện thoại</label>
                                        {/* <PhoneInput country={"vn"} /> */}
                                        <input {...register('phone', { required: true })}
                                            type="text"
                                            className={errors.phone ? "form-control border-red-500" : "form-control"}
                                            name='phone' />
                                        {errors.phone && errors.phone.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Số điện thoại.</span>}
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
                                            className={errors.email ? "form-control border-red-500" : "form-control"}
                                            name='email' />
                                        {errors.email && errors.email.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Email</span>}
                                        {errors.email && errors.email.type != 'required' && <span className='text-red-500 fw-bold mt-1'>Email không hợp lệ</span>}
                                    </div>
                                    <div className="form-group">
                                        <label className="text-dark fw-bold">Mật khẩu</label>
                                        <input {...register('password',
                                            {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 50,
                                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                            })}
                                            type='password'
                                            placeholder='Từ 6 đến 50 ký tự, 1 chữ hoa, 1 chữ thường.'
                                            className={errors.password ? "form-control border-red-500" : "form-control"}
                                            name="password" />
                                        {errors.password && errors.password.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Mật khẩu</span>}
                                        {errors.password && errors.password.type != 'required' && <span className='text-red-500 fw-bold mt-1'>Mật khẩu không hợp lệ.</span>}

                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-3 mb-3 mb-sm-0">
                                            <label className="text-dark fw-bold">Vai trò: </label>
                                        </div>
                                        <div className="col-sm-9">
                                            <Radio.Group
                                                {...register('role', { required: true })}
                                                onChange={onChange}
                                                name='role'
                                                value={value}>
                                                <Space direction='horizontal'>
                                                    <Radio value={1}>Người tuyển dụng</Radio>
                                                    <Radio value={2}>Người tìm việc</Radio>
                                                </Space>
                                            </Radio.Group>
                                        </div>
                                        {errors.role && errors.role.type == 'required' && <span className='text-red-500 mb-5 fw-bold mt-2'>Vui lòng chọn một vai trò!</span>}
                                        {value === 1 ?
                                            <div className="panel-body">
                                                <div className="form-group">
                                                    <label className="text-dark fw-bold">Danh mục:</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option defaultValue={0}>Open this select menu</option>
                                                        <option value={1}>Doanh nghiệp</option>
                                                        <option value={2}>Cá nhân</option>
                                                    </select>
                                                </div>
                                                {/* <div className="form-group">
                                                    <label className="text-dark fw-bold">Tên công ty hoặc cá nhân:</label>
                                                    <input type="text" className="form-control" />
                                                </div> */}
                                                <div className="form-group">
                                                    <label className="text-dark fw-bold">Địa điểm làm việc:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            : null}
                                        {value === 2 ?
                                            <div className="panel-body">
                                                <div className="form-group">
                                                    <label className="text-dark fw-bold">Địa chỉ thường trú:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-dark fw-bold">Khu vực:</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option defaultValue={0}>Choose an area</option>
                                                        <option value={1}>Hà Nội</option>
                                                        <option value={2}>TP Hồ Chí Minh</option>
                                                        <option value={3}>Đà Nẵng</option>
                                                    </select>
                                                </div>
                                            </div>
                                            : null}
                                    </div>
                                    <div className=" mb-3">
                                        <p className="text-dark">Bằng cách nhấn vào nút "Đăng ký", tôi đồng ý với <span className="fw-bold text-primary">Điều khoản dịch
                                            vụ</span> và <span className="fw-bold text-primary">Chính sách bảo mật </span> của chúng tôi.
                                        </p>
                                    </div>
                                    <div>
                                        <button onClick={signUp} className="btn btn-primary btn-block">
                                            Đăng ký
                                        </button>
                                    </div>
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
                                    Bạn đã có tài khoản?
                                    <span>
                                        <a className="fw-bold" href=''> Đăng nhập! </a>
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
            </div >
        </>
    )
}

export default Register