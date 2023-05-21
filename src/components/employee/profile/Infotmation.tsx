import React from 'react'
import { useState, useEffect } from 'react'
import ImanageProfile from '../../../interface/manageProfile'
import { useGetProfileQuery } from '../../../service/manage_profile'
import UseAuth from '../../auth/UseAuth'
import { sendEmailVerification } from 'firebase/auth'
import { message } from 'antd'
import { NavLink, Outlet } from 'react-router-dom'
import { useGetUserByEmailQuery } from '../../../service/auth'
import { apiGetDistricts, apiGetProvinces } from '../../../service/api'
type Props = {}

const Infotmation = (props: Props) => {
    const currentUser: any = UseAuth()
    const data: any = useGetProfileQuery(currentUser?.email)
    const profile: ImanageProfile = data.currentData
    const user = useGetUserByEmailQuery(currentUser?.email)
    const [hidden, setHidden] = useState(false)
    const [provinces, setProvinces] = useState<any>([])
    const [districts, setDistricts] = useState<any>([])

    console.log(currentUser);

    useEffect(() => {
        const fetchProvinces = async () => {
            const { data: response }: any = await apiGetProvinces()
            setProvinces(response?.results);
            console.log(response?.results);

        }
        fetchProvinces()
    }, [])

    const changeSelect = (event: any) => {
        const fetchDistricts = async () => {
            const { data: response }: any = await apiGetDistricts(event.target.value)
            setDistricts(response?.results);
        }
        fetchDistricts()
    }

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
    return (
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
                    {
                        !hidden ?
                            <div className={'px-4 text-[#333333]'}>
                                <div className='border-y py-3'>
                                    <div className='flex items-center mx-3'>
                                        <div className='w-50 flex items-center'>
                                            <div className='w-[38%]'>Họ và tên</div>
                                            <div className='w-[62%] font-[700]'>{currentUser?.displayName ? currentUser?.displayName : profile?.name}</div>
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

                                            {profile?.phone_props.phone ?
                                                <>
                                                    <div className='w-[62%] font-[700] flex items-center gap-1'>
                                                        {profile?.phone_props.phone}
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
                            </div> :
                            <div className={'px-4 text-[#333333]'}>
                                form
                                <form>
                                    <div className='border-y py-3'>
                                        <div className='flex items-center mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Họ và tên</div>
                                                <div className='w-[62%] font-[700]'></div>
                                            </div>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Ngày sinh</div>
                                                <div className='w-[62%] font-[700]'></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-b py-3'>
                                        <div className='mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Email</div>
                                                <div className='w-[62%] font-[700]'></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-b py-3'>
                                        <div className='mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Số điện thoại</div>
                                                <div className='w-[62%] font-[700]'></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-b py-3'>
                                        <div className='flex items-center mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Tỉnh/Thành phố</div>
                                                <select name="province" onChange={changeSelect}>
                                                    <option value="0">--Chọn Tỉnh/Thành phố--</option>
                                                    {
                                                        provinces ? provinces?.map((province: any) =>
                                                            <option key={province.province_id} value={province.province_id}>
                                                                {province.province_name}
                                                            </option>
                                                        ) : ''
                                                    }
                                                </select>
                                            </div>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Quận/Huyện</div>
                                                <select name="district">
                                                    <option value="0">--Chọn Quận/Huyện--</option>
                                                    {
                                                        districts ? districts?.map((district: any) =>
                                                            <option key={district.district_id} value={district.district_id}>
                                                                {district.district_name}
                                                            </option>
                                                        ) : ''
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-0 py-3'>
                                        <div className='mx-3'>
                                            <div className='w-50 flex items-center'>
                                                <div className='w-[38%]'>Địa chỉ</div>
                                                <div className='w-[62%] font-[700]'></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                    }
                </div>
                <button className='bg-[#005AFF] mx-3 text-white font-[700] rounded p-[8px]' onClick={showForm}>Chỉnh sửa</button>
            </section>
        </main>
    )
}
export default Infotmation