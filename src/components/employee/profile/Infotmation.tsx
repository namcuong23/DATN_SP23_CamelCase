import { useState, useEffect } from 'react'
import { useAppSelector } from '../../../app/hook'
import { SubmitHandler, useForm } from 'react-hook-form'
import { 
    useActiveEmailMutation, 
    useGetUserByEmailQuery, 
    useSendEmailVerifiedMutation, 
    useUpdateUserMutation
} from '../../../service/auth'
import { apiGetDistricts, apiGetProvinces } from '../../../service/api'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import IUserNTV from '../../../interface/user'
import { Modal } from 'antd'

const Infotmation = () => {
    const { email } = useAppSelector((res: any) => res.auth)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<any>()
    const { data: user } = useGetUserByEmailQuery(email)
    const [hidden, setHidden] = useState(true)
    const [open, setOpen] = useState(false);
    const [provinces, setProvinces] = useState<any>([])
    const [districts, setDistricts] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)

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

    const [verifiedEmail] = useSendEmailVerifiedMutation()
    const sendEmail = async () => {
        setLoading(true);
        await verifiedEmail({ email })
            .then((result: any) => {
                setLoading(false);
                const { data: rs } = result;
                toast.success(rs?.mes);
            }).catch((err: any) => {
                setLoading(false);
                console.log(err.message);
                
            });
        setOpen(true)
    }
    const [activeEmail] = useActiveEmailMutation()
    const activeE: any = async ({ token }: any) => {
        const active: any = await activeEmail({ email, token })
        const { data: rs } = active
        if (rs?.success) {
            Swal.fire('Congratulation', 'Xác thực thành công', 'success')
        }
    }
    const [updateUser] = useUpdateUserMutation()
    const handleUpdate: SubmitHandler<IUserNTV> = async (userForm: IUserNTV) => {
        console.log('1');
        
        await updateUser({
            ...userForm,
            _id: user._id,
            isEmailVerified: user.isEmailVerified,
            isPhoneVerified: user.isPhoneVerified,
        }).then((res: any) => {
            const { data } = res
            if (data?.success) {
                toast.success('Cập nhật thành công')
            }
        })
        
    }

    return (
        <>
            <section className='border-1 rounded bg-white'>
                <h4 className='text-[#333333] text-[16px] py-3 px-4 font-[700]'>Hồ sơ của tôi</h4>

            </section>
            <section className='border-1 rounded bg-white py-4 mt-[8px]'>
                <div className='px-4 pb-4'>
                    <h4 className='text-[22px] font-[700] text-[#333333]'>Hoàn chỉnh hồ sơ</h4>
                </div>
            </section>
            <section className='border-1 rounded bg-white py-4 mt-[8px]'>
                <div className='px-4 pb-4 flex items-center justify-between'>
                    <h4 className='text-[22px] font-[700] text-[#333333]'>Thông tin cá nhân</h4>
                    {hidden ? <button onClick={() => setHidden(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                        </svg>
                    </button> : ''}
                </div>
                <div>
                    {
                        hidden ?
                            <div className={'px-4 text-[#333333]'}>
                                <div className='border-y py-3'>
                                    <div className='flex items-center mx-3'>
                                        <div className='w-50 flex items-center'>
                                            <div className='w-[38%]'>Họ và tên</div>
                                            <div className='w-[62%] font-[700]'>{user?.name}</div>
                                        </div>
                                        <div className='w-50 flex items-center'>
                                            <div className='w-[38%]'>Số điện thoại</div>
                                            <div className='w-[62%] font-[700]'>{user?.phone}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b py-3'>
                                    <div className='mx-3'>
                                        <div className='w-50 flex items-center'>
                                            <div className='w-[38%]'>Email</div>
                                            <div className='w-[62%] font-[700] flex items-center gap-1'>
                                                {user?.email}
                                                {
                                                    user?.isEmailVerified ?
                                                        <span><i className='fas fa-check-circle text-green-500'></i></span>
                                                        :
                                                        <div>
                                                            {
                                                                loading ? <i className="loading-icon fa-solid fa-circle-notch"></i>
                                                                :
                                                                <button onClick={sendEmail} className='font-[100] hover:text-[#fd7e14] flex items-center justify-content-center' >
                                                                        Xác thực
                                                                </button>
                                                            }
                                                            <Modal
                                                                style={{ top: 147 }}
                                                                open={open}
                                                                onCancel={() => setOpen(false)}
                                                                okButtonProps={{ hidden: true }}
                                                                cancelButtonProps={{ hidden: true }}
                                                                width={700}
                                                            >
                                                                <h3 className='text-xl text-[#333333] border-b-[1px] pb-2 mb-2'>Xác thực Email</h3>
                                                                <form onSubmit={handleSubmit(activeE)}>
                                                                    <div className="form-group">
                                                                        <label className="text-dark">Mã xác nhận</label>
                                                                        <input type="text"
                                                                            {...register('token', {
                                                                                required: true
                                                                            })}
                                                                            className="form-control border-1 border-[#c7c7c7] focus:shadow-none focus:border-[#005AFF]"
                                                                            name='token' />
                                                                        {errors.token && errors.token.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Mã xác nhận</span>}
                                                                    </div>
                                                                    <div className='flex justify-end gap-x-3'>
                                                                        <button className='bg-[#F4F4F7] hover:bg-[#E9E9F2] py-1 px-2 rounded'
                                                                            type='button'
                                                                            onClick={() => setOpen(false)} >
                                                                            Hủy
                                                                        </button>
                                                                        <button className='bg-[#FE7D55] hover:bg-[#FD6333] py-1 px-2 text-white rounded'
                                                                        >
                                                                            Xác nhận
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </Modal>
                                                        </div>

                                                }

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='border-b py-3'>
                                    <div className='flex items-center mx-3'>
                                        <div className='w-50 flex items-center'>
                                            <div className='w-[38%]'>Tuổi</div>
                                            <div className='w-[62%] font-[700]'>{user?.age}</div>
                                        </div>
                                        <div className='w-50 flex items-center'>
                                            <div className='w-[38%]'>Giới tính</div>
                                            <div className='w-[62%] font-[700]'>{user?.gender}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b py-3'>
                                    <div className='flex items-center mx-3'>
                                        <div className='w-50 flex items-center'>
                                            <div className='w-[38%]'>Tỉnh/Thành phố</div>
                                            <div className='w-[62%] font-[700]'>{user?.province}</div>
                                        </div>
                                        <div className='w-50 flex items-center'>
                                            <div className='w-[38%]'>Quận/Huyện</div>
                                            <div className='w-[62%] font-[700]'>{user?.district}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-0 py-3'>
                                    <div className='mx-3'>
                                        <div className='w-50 flex items-center'>
                                            <div className='w-[38%]'>Địa chỉ</div>
                                            <div className='w-[62%] font-[700]'>{user?.specific_address}</div>
                                        </div>
                                    </div>
                                </div>
                            </div> :
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
                                        <button type='button' onClick={() => setHidden(true)} className='border-1 border-[#333333] hover:border-[#005AFF] hover:text-[#005AFF] px-3 text-[#333333] rounded p-[8px]'>Hủy</button>
                                        <button className='bg-[#005AFF] text-white font-[700] rounded p-[8px]'>Lưu</button>
                                    </div>
                                </form>
                            </div>
                    }
                </div>
            </section>
        </>
    )
}
export default Infotmation