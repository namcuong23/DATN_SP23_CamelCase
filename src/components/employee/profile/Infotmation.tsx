import { useState, useEffect } from 'react'
import { useAppSelector } from '../../../app/hook'
import { SubmitHandler, useForm } from 'react-hook-form'
import { 
    useGetUserByEmailQuery, 
    useUpdateUserMutation
} from '../../../service/auth'
import { apiGetDistricts, apiGetProvinces } from '../../../service/api'
import { toast } from 'react-toastify'
import IUserNTV from '../../../interface/user'
import React from 'react'

const Infotmation = () => {
    const { email } = useAppSelector((res: any) => res.auth)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<any>()
    const { data: user } = useGetUserByEmailQuery(email)
    const [provinces, setProvinces] = useState<any>([])
    const [districts, setDistricts] = useState<any>([])

    useEffect(() => {
        const fetchProvinces = async () => {
            const { data: response }: any = await apiGetProvinces()
            setProvinces(response?.results);
        }
        reset(user)
        fetchProvinces()
    }, [user])

    const changeSelect = (event: any) => {
        const rs = provinces.filter((res: any) => res.province_name == event.target.value)
        const fetchDistricts = async () => {
            const { data: response }: any = await apiGetDistricts(rs[0].province_id)
            setDistricts(response?.results);
        }
        fetchDistricts()
    }
    
    const [updateUser] = useUpdateUserMutation()
    const handleUpdate: SubmitHandler<IUserNTV> = async (userForm: IUserNTV) => {
        await updateUser({
            ...userForm
        }).then((res: any) => {
            const { data } = res
            if (data?.success) {
                toast.success('Cập nhật thành công')
            }
        })
        
    }

    return (
        <>
            <div>
                <section className='border-1 rounded bg-white'>
                    <h4 className='text-[#333333] text-[16px] py-3 px-4 font-[700]'>Hồ sơ của tôi</h4>

                </section>
                <section className='border-1 rounded bg-white py-4 mt-[8px]'>
                    <div className='px-4 pb-4 flex items-center justify-between'>
                        <h4 className='text-[22px] font-[700] text-[#333333]'>Thông tin cá nhân</h4>
                    </div>
                    <div>
                        <div className={'px-4 text-[#333333]'}>
                            <form onSubmit={handleSubmit(handleUpdate)}>
                                <div className='py-2'>
                                    <div className='flex items-center mx-3 gap-x-2'>
                                        <div className='w-50 flex flex-col'>
                                            <label>Họ và tên <span className='text-red-500'>*</span></label>
                                            <input className='w-full border-1 border-[#D9D9D9] rounded focus:outline-none focus:border-[#005AFF] px-1 h-9'
                                                {...register("name", {
                                                    required: true,
                                                    pattern: /^(?!.*\d)(?!.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/
                                                })} />
                                            {errors.name && errors.name.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Tên.</span>}
                                            {errors.name && errors.name.type == 'pattern' && <span className='text-red-500 fw-bold mt-1'>Tên không hợp lệ.</span>}
                                        </div>
                                        <div className='w-50 flex flex-col'>
                                            <div className='mb-[8px]'>Số điện thoại <span className='text-red-500'>*</span></div>
                                            <input className='w-full border-1 border-[#D9D9D9] rounded focus:outline-none focus:border-[#005AFF] px-1 h-9'
                                                {...register("phone", {
                                                    required: true,
                                                    minLength: 10,
                                                    pattern: /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/
                                                })} />
                                            {errors.phone && errors.phone.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Số điện thoại.</span>}
                                            {errors.phone && errors.phone.type == 'minLength' && <span className='text-red-500 fw-bold mt-1'> Số điện thoại phải có ít nhất 10 ký tự.</span>}
                                            {errors.phone && errors.phone.type == 'pattern' && <span className='text-red-500 fw-bold mt-1'>Số điện thoại không hợp lệ.</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className='py-2'>
                                    <div className='mx-3'>
                                        <div className='mb-[8px]'>Email <span className='text-red-500'>*</span></div>
                                        <input className='w-full border-1 border-[#D9D9D9] rounded focus:outline-none focus:border-[#005AFF] px-1 h-9'
                                            {...register("email", {
                                                required: true,
                                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                            })} />
                                        {errors.email && errors.email.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Email</span>}
                                        {errors.email && errors.email.type == 'pattern' && <span className='text-red-500 fw-bold mt-1'>Email không hợp lệ</span>}
                                    </div>
                                </div>
                                <div className='py-2'>
                                    <div className='flex items-center mx-3 gap-x-2'>
                                        <div className='w-50 flex flex-col'>
                                            <div className='mb-[8px]'>Giới tính</div>
                                            <select  {...register('gender')} defaultValue={0} className='w-full border-1 border-[#D9D9D9] rounded focus:outline-none focus:border-[#005AFF] px-1 h-9'>
                                                <option selected>--Chọn Giới tính--</option>
                                                <option value="Nam">Nam</option>
                                                <option value="Nữ">Nữ</option>
                                            </select>
                                        </div>
                                        <div className='w-50 flex flex-col'>
                                            <label>Tuổi</label>
                                            <input className='w-full border-1 border-[#D9D9D9] rounded focus:outline-none focus:border-[#005AFF] px-1 h-9'
                                                {...register('age')} />
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <div className='flex items-center gap-x-2 mx-3'>
                                        <div className='w-50 flex flex-col'>
                                            <div className='mb-[8px]'>Tỉnh/Thành phố</div>
                                            <select  {...register('province')} defaultValue={0} onChange={changeSelect} className='w-full border-1 border-[#D9D9D9] rounded focus:outline-none focus:border-[#005AFF] px-1 h-9'>
                                                <option value={0}>--Chọn Tỉnh/Thành phố--</option>
                                                {
                                                    provinces ? provinces?.map((province: any) =>
                                                        <option key={province.province_id} value={province.province_name}>
                                                            {province.province_name}
                                                        </option>
                                                    ) : ''
                                                }
                                            </select>
                                        </div>
                                        <div className='w-50 flex flex-col'>
                                            <div className='mb-[8px]'>Quận/Huyện</div>
                                            <select {...register('district')} defaultValue={0} className='w-full border-1 border-[#D9D9D9] rounded focus:outline-none focus:border-[#005AFF] px-1 h-9'>
                                                <option value={0}>--Chọn Quận/Huyện--</option>
                                                {
                                                    districts ? districts?.map((district: any) =>
                                                        <option key={district.district_id} value={district.district_name}>
                                                            {district.district_name}
                                                        </option>
                                                    ) : ''
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <div className='mx-3'>
                                        <div className='flex flex-col'>
                                            <div className='mb-[8px]'>Địa chỉ</div>
                                            <input className='w-full border-1 border-[#D9D9D9] rounded focus:outline-none focus:border-[#005AFF] px-1 h-9'
                                                {...register('specific_address')} />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-end gap-x-2 mt-2'>
                                    <button className='bg-[#005AFF] text-white font-[700] rounded min-w-[80px] py-[4px]'>Lưu</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Infotmation