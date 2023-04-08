import { useState } from 'react'
import ImanageProfile from '../../../interface/manageProfile'
import { useGetProfileQuery } from '../../../service/manage_profile'
import UseAuth from '../../auth/UseAuth'
import { sendEmailVerification } from 'firebase/auth'
import { message } from 'antd'
import { NavLink } from 'react-router-dom'
import { useGetUserByEmailQuery } from '../../../service/auth'

const Profile = () => {
    const currentUser: any = UseAuth()
    const data: any = useGetProfileQuery(currentUser?.email)
    const profile: ImanageProfile = data.currentData
    const user = useGetUserByEmailQuery(currentUser?.email)
    console.log(user);
    const [hidden, setHidden] = useState(false)
    const showForm = () => {
        setHidden(!hidden)
    }
    const verifyEmail: any = () => {
        sendEmailVerification(currentUser)
            .then(() => {
                message.info(`Email verification link sent to ${currentUser.email}`)
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
            })
    }

    if (!user.currentData) {
        return <div className='my-10'>
            <h1 className='text-center text-[30px] font-[700]'>Đăng nhập để tiếp tục.</h1>
        </div>
    }
    return (
        <>
            <div className='bg-gray-100 h-[100vh]'>
                {/* SEARCH BAR */}
                <div className='h-[80px] w-100 py-3 bg-white'>
                    <div className='container flex items-center justify-center h-100 w-100'>
                        <div className='flex items-center h-100 bg-[#F4F4F7] w-75 mr-2 rounded'>
                            <div className='h-100 flex items-center bg-[#F4F4F7] w-[65%]'>
                                <button className='w-[10%] flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search text-black" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                                <input type="text" className='bg-[#F4F4F7] h-100 w-[90%] text-gray-600 focus:outline-none' placeholder='Tìm kiếm việc làm, công ty, kỹ năng' />
                            </div>
                            <div className='flex items-center bg-[#F4F4F7] border-l-[1px] border-[#979797] h-[24px] mr-1'></div>
                            <div className='h-100 flex items-center bg-[#F4F4F7] w-[35%] px-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 384 512">
                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                                </svg>
                                <select name="" id="" className='bg-[#F4F4F7] focus:outline-none w-100 pl-2'>
                                    <option value="0" selected>Tất cả địa điểm</option>
                                    <option value="1">Vĩnh Phúc</option>
                                </select>
                            </div>
                        </div>
                        <div className='h-100'>
                            <div className='h-100'>
                                <button className='bg-[#FE7D55] hover:bg-[#FD6333] text-white rounded h-100 px-10'>Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CONTENT */}
                <div className='flex items-start w-100 gap-3 p-3'>
                    <aside className='rounded w-25 space-y-2'>
                        <section className='border-1 rounded bg-[#4A80F8] p-3'>
                            <div className='flex items-center space-x-4'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="80" height="80"
                                        fill="currentColor"
                                        className="bi bi-person-fill text-[#CCDEFF] bg-[#E6EFFF] border-4 border-[#005AFF] rounded-full p-2"
                                        viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <h3 className='text-[20px] font-[600] text-white'>{profile?.last_name + " " + profile?.first_name}</h3>
                                </div>
                            </div>
                        </section>
                        <section className='border-1 bg-white'>
                            <div>
                                <button className='flex items-center p-[17px] w-100 border rounded hover:bg-[#EBF2FF] text-[#333333]'>
                                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 3.35986C5.91184 3.35986 0.959961 8.31174 0.959961 14.3999C0.959961 16.048 1.28809 17.5424 1.94621 18.9449C1.97621 19.0105 2.00809 19.0742 2.03809 19.1399C2.08309 19.228 2.12621 19.318 2.17309 19.4061C2.35121 19.753 2.54059 20.0942 2.75621 20.4224C2.84434 20.5574 2.99434 20.6399 3.15746 20.6399H20.8425C21.0056 20.6399 21.1556 20.5574 21.2437 20.4224C21.4593 20.0942 21.6487 19.753 21.8268 19.4061C21.8718 19.318 21.9168 19.228 21.9618 19.1399C21.9918 19.0742 22.0237 19.0105 22.0537 18.9449C22.7118 17.5424 23.04 16.048 23.04 14.3999C23.04 8.31174 18.0881 3.35986 12 3.35986ZM14.88 18.7199H9.11996C8.85371 18.7199 8.63996 18.5042 8.63996 18.2399C8.63996 17.9755 8.85371 17.7599 9.11996 17.7599H14.88C15.1462 17.7599 15.36 17.9755 15.36 18.2399C15.36 18.5042 15.1462 18.7199 14.88 18.7199ZM17.4412 11.7636L12.9581 14.3905C12.9581 14.3942 12.96 14.3961 12.96 14.3999C12.96 14.9305 12.5306 15.3599 12 15.3599C11.4693 15.3599 11.04 14.9305 11.04 14.3999C11.04 13.8692 11.4693 13.4399 12 13.4399C12.1706 13.4399 12.3281 13.4886 12.4668 13.5655L16.9518 10.9367C17.1787 10.8017 17.475 10.8767 17.61 11.1055C17.745 11.3342 17.67 11.6286 17.4412 11.7636ZM20.7206 19.4399C20.6306 19.5936 20.4693 19.6799 20.3043 19.6799C20.2818 19.6799 20.2575 19.6742 20.235 19.6705C20.2106 19.6742 20.1843 19.6799 20.16 19.6799C20.0681 19.6799 19.9762 19.6536 19.8937 19.5992L18.4537 18.6392C18.2325 18.493 18.1725 18.1949 18.3206 17.9736C18.4668 17.7524 18.765 17.6924 18.9862 17.8405L20.0943 18.5792C20.1 18.568 20.1056 18.5567 20.1112 18.5474C20.1131 18.5192 20.1131 18.4911 20.1337 18.4967C20.1356 18.4967 20.1375 18.4967 20.1375 18.4967C20.7075 17.368 21.0375 16.1342 21.105 14.8799H19.68C19.4137 14.8799 19.2 14.6661 19.2 14.3999C19.2 14.1355 19.4137 13.9199 19.68 13.9199H21.0956C21.0281 12.6299 20.6943 11.413 20.1431 10.318C20.1318 10.2974 20.115 10.2805 20.1037 10.258L18.9712 10.9536C18.8925 11.0024 18.8062 11.0249 18.72 11.0249C18.5587 11.0249 18.4012 10.9424 18.3112 10.7942C18.1725 10.5692 18.2437 10.273 18.4687 10.1342L19.6237 9.42736C19.5881 9.37299 19.56 9.31861 19.53 9.26424C18.8137 8.21799 17.8818 7.33299 16.8018 6.66174C16.7831 6.65049 16.7606 6.63924 16.7418 6.62799L16.05 7.88236C15.9618 8.03986 15.7987 8.12986 15.6281 8.12986C15.5512 8.12986 15.4706 8.11111 15.3975 8.06986C15.165 7.94236 15.0806 7.64986 15.21 7.41736L15.8981 6.17049C15.8868 6.16486 15.8756 6.15736 15.8643 6.15174C14.8256 5.66236 13.6837 5.36799 12.4781 5.30424V6.71986C12.4781 6.98424 12.2643 7.19986 11.9981 7.19986C11.7337 7.19986 11.5181 6.98424 11.5181 6.71986V5.30424C10.2112 5.37361 8.97559 5.71486 7.86934 6.27924C7.82996 6.30361 7.78871 6.32799 7.74934 6.34861L8.48809 7.54299C8.62684 7.76799 8.55746 8.06424 8.33059 8.20299C8.25184 8.25174 8.16559 8.27424 8.07934 8.27424C7.91809 8.27424 7.76246 8.19361 7.67059 8.04736L6.92621 6.83986C6.89246 6.86236 6.85871 6.87924 6.82496 6.89799C5.77871 7.62361 4.89746 8.56111 4.23184 9.64674L5.42809 10.2974C5.66246 10.4249 5.74871 10.7155 5.62121 10.948C5.53496 11.1092 5.36996 11.1992 5.19934 11.1992C5.12246 11.1992 5.04371 11.1805 4.97059 11.1411L3.77246 10.4905C3.27184 11.5405 2.96809 12.6974 2.90434 13.9199H4.31996C4.58621 13.9199 4.79996 14.1355 4.79996 14.3999C4.79996 14.6642 4.58621 14.8799 4.31996 14.8799H2.89496C2.96246 16.1249 3.28496 17.3474 3.84746 18.4686C3.85121 18.478 3.86059 18.4874 3.86621 18.4949C3.88121 18.5249 3.91121 18.5755 3.91121 18.5755L5.01371 17.8405C5.23496 17.6924 5.53309 17.7524 5.67934 17.9736C5.82746 18.193 5.76746 18.4911 5.54621 18.6392L4.10621 19.5992C4.02371 19.6536 3.93184 19.6799 3.83996 19.6799C3.83434 19.6799 3.82684 19.6649 3.81746 19.6555C3.61496 19.7099 3.38996 19.633 3.27934 19.4399C2.39059 17.9042 1.91996 16.1624 1.91996 14.3999C1.91996 8.84236 6.44246 4.31986 12 4.31986C17.5575 4.31986 22.08 8.84236 22.08 14.3999C22.08 16.1624 21.6093 17.9042 20.7206 19.4399Z" fill="#888888"></path>
                                    </svg>
                                    <span className='text-[14px] pl-[10px]'>Tổng quan</span>
                                </button>
                            </div>
                        </section>
                        <section className='border-1 bg-white'>
                            <div>
                                <button className='flex items-center p-[17px] w-100 border rounded bg-[#EBF2FF] text-[#333333]'>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.6 1.6001C4.716 1.6001 4 2.3161 4 3.2001V20.8001C4 21.6841 4.716 22.4001 5.6 22.4001H13.05C13.6612 20.6225 15.2518 20.0363 16.1078 19.7235C16.1574 19.7051 16.2135 19.6842 16.2703 19.6626C16.0815 19.4146 15.9031 19.1368 15.7688 18.8392C15.3703 18.4136 15.0797 17.7903 15.0797 17.0079C15.0797 16.8727 15.0894 16.7443 15.1078 16.6235C14.9766 16.2699 14.8687 15.8289 14.8688 15.3329C14.8703 12.9385 16.6912 11.2001 19.2 11.2001C19.4856 11.2001 19.7496 11.2523 20 11.3251V7.6001C20 7.3881 19.916 7.18407 19.7656 7.03447L14.5656 1.83447C14.4152 1.68407 14.212 1.6001 14 1.6001H5.6ZM13.6 3.12354L18.4766 8.0001H14.4C13.9584 8.0001 13.6 7.6417 13.6 7.2001V3.12354ZM19.2 12.7985C17.6928 12.7985 16.4703 13.7073 16.4703 15.3329C16.4703 16.0201 16.8547 16.5548 16.8547 16.5548C16.8547 16.5548 16.6797 16.6407 16.6797 17.0079C16.6797 17.7207 17.1391 17.8923 17.1391 17.8923C17.2031 18.4571 18.0797 19.2845 18.0797 19.2845V20.2267C17.6085 21.6419 14.4 20.8313 14.4 24.0001H24C24 20.8313 20.7915 21.6419 20.3203 20.2267V19.2845C20.3203 19.2845 21.1977 18.4571 21.2609 17.8923C21.2609 17.8923 21.7203 17.5751 21.7203 17.0079C21.7203 16.6143 21.5453 16.5548 21.5453 16.5548C21.5453 16.5548 21.8594 15.9572 21.8594 15.386C21.8594 14.2412 21.2859 13.3595 20.3203 13.3595C20.3203 13.3595 19.9096 12.7985 19.2 12.7985Z" fill="#888888"></path>
                                    </svg>
                                    <span className='text-[14px] pl-[10px]'>Hồ sơ của tôi</span>
                                </button>
                            </div>
                        </section>
                        <section className='border-1 bg-white'>
                            <div>
                                <button className='flex items-center p-[17px] w-100 border rounded hover:bg-[#EBF2FF] text-[#333333]'>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2 2.3999C10.316 2.3999 9.59998 3.1159 9.59998 3.9999H3.19998C2.31598 3.9999 1.59998 4.7159 1.59998 5.5999V12.7999C1.59998 13.6839 2.31598 14.3999 3.19998 14.3999H20.8C21.684 14.3999 22.4 13.6839 22.4 12.7999V5.5999C22.4 4.7159 21.684 3.9999 20.8 3.9999H14.4C14.4 3.1159 13.684 2.3999 12.8 2.3999H11.2ZM12 11.1999C12.4416 11.1999 12.8 11.5583 12.8 11.9999C12.8 12.4415 12.4416 12.7999 12 12.7999C11.5584 12.7999 11.2 12.4415 11.2 11.9999C11.2 11.5583 11.5584 11.1999 12 11.1999ZM1.59998 15.5546V18.3999C1.59998 19.2839 2.31598 19.9999 3.19998 19.9999H20.8C21.684 19.9999 22.4 19.2839 22.4 18.3999V15.5546C21.9272 15.8298 21.3856 15.9999 20.8 15.9999H3.19998C2.61438 15.9999 2.07278 15.8298 1.59998 15.5546Z" fill="#888888"></path>
                                    </svg>
                                    <span className='text-[14px] pl-[10px]'>Việc làm của tôi</span>
                                </button>
                            </div>
                        </section>
                    </aside>
                    <main className='w-75 space-y-2'>
                        <section className='border-1 rounded bg-white'>
                            <h4 className='text-[#333333] text-[16px] py-3 px-4 font-[700]'>Hồ sơ của tôi</h4>
                        </section>
                        <section className='border-1 rounded bg-white py-4'>
                            <div className='px-4 pb-4'>
                                <h4 className='text-[22px] font-[700] text-[#333333]'>Hoàn chỉnh hồ sơ</h4>
                            </div>
                        </section>
                        <section className='border-1 rounded bg-white py-4'>
                            <div className='px-4 pb-4'>
                                <h4 className='text-[22px] font-[700] text-[#333333]'>Thông tin cá nhân</h4>
                            </div>
                            <div>
                                <div className={hidden ? 'px-4 text-[#333333]' : 'px-4 text-[#333333] hidden'}>
                                    form
                                    {/* <div className='border-y py-3'>
                                        <div className='flex items-center mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Họ và tên</div>
                                                <div className='w-[62%] font-[700]'>{profile?.last_name + " " + profile?.first_name}</div>
                                            </div>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Ngày sinh</div>
                                                <div className='w-[62%] font-[700]'>{profile?.birth_day}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-b py-3'>
                                        <div className='mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Email</div>
                                                <div className='w-[62%] font-[700]'>{profile?.email}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-b py-3'>
                                        <div className='mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Số điện thoại</div>
                                                <div className='w-[62%] font-[700]'>{profile?.phone}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-b py-3'>
                                        <div className='flex items-center mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Tỉnh/Thành phố</div>
                                                <div className='w-[62%] font-[700]'>{profile?.province}</div>
                                            </div>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Quận/Huyện</div>
                                                <div className='w-[62%] font-[700]'>{profile?.district}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-0 py-3'>
                                        <div className='mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Địa chỉ</div>
                                                <div className='w-[62%] font-[700]'>{profile?.specific_address}</div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className={hidden ? 'px-4 text-[#333333] hidden' : 'px-4 text-[#333333]'}>
                                    <div className='border-y py-3'>
                                        <div className='flex items-center mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Họ và tên</div>
                                                <div className='w-[62%] font-[700]'>{currentUser?.displayName ? currentUser?.displayName : profile?.last_name + " " + profile?.first_name}</div>
                                            </div>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Ngày sinh</div>
                                                <div className='w-[62%] font-[700]'>{profile?.birth_day}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-b py-3'>
                                        <div className='mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Email</div>
                                                {currentUser?.email ?
                                                    <div className='w-[62%] font-[700] flex items-center gap-1'>
                                                        {currentUser?.email}
                                                        {
                                                            currentUser?.emailVerified ?
                                                                <span><i className='fas fa-check-circle text-green-500'></i></span>
                                                                :
                                                                <button onClick={verifyEmail} className='font-[100] hover:text-[#fd7e14]' >Xác thực</button>
                                                        }

                                                    </div>
                                                    :
                                                    <div className='w-[62%] font-[700] flex items-center gap-1'>
                                                        {profile?.email}
                                                        {
                                                            currentUser?.emailVerified ?
                                                                <span><i className='fas fa-check-circle text-green-500'></i></span>
                                                                :
                                                                <button onClick={verifyEmail} className='font-[100] hover:text-[#fd7e14]' >Xác thực</button>
                                                        }

                                                    </div>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-b py-3'>
                                        <div className='mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Số điện thoại</div>

                                                {profile?.phone ?
                                                    <>
                                                        <div className='w-[62%] font-[700] flex items-center gap-1'>
                                                            {profile?.phone}
                                                            <button className='font-[100]'>
                                                                <NavLink className={'hover:text-[#fd7e14] hover:no-underline'} to={'/otp'}>Xác thực</NavLink>
                                                            </button>
                                                        </div>
                                                    </> : ""
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-b py-3'>
                                        <div className='flex items-center mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Tỉnh/Thành phố</div>
                                                <div className='w-[62%] font-[700]'>{profile?.province}</div>
                                            </div>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Quận/Huyện</div>
                                                <div className='w-[62%] font-[700]'>{profile?.district}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-0 py-3'>
                                        <div className='mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Địa chỉ</div>
                                                <div className='w-[62%] font-[700]'>{profile?.specific_address}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='bg-[#005AFF] mx-3 text-white font-[700] rounded p-[8px]' onClick={showForm}>Chỉnh sửa</button>
                        </section>
                    </main>
                </div>
            </div >
        </>
    )
}

export default Profile