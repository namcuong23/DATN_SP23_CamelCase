import { SubmitHandler, useForm } from 'react-hook-form'
import {
  useGetEprProfileQuery,
  useUpdateEprProfileMutation
} from '../../../service/employer/profileEpr'
import UseAuth from '../../auth/UseAuth'
import IProfileEpr from '../../../interface/employer/profileEpr'
import { useEffect } from 'react'

const ProfileEpr = () => {
  const currentUser: any = UseAuth()
  const { data: userEpr, loading, error } = useGetEprProfileQuery(currentUser?.email)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IProfileEpr>()
  console.log(errors);

  const [updateEprProfile] = useUpdateEprProfileMutation()

  useEffect(() => {
    reset(userEpr)
  }, [userEpr])

  const handleUpdate: SubmitHandler<IProfileEpr> = (profileEpr: IProfileEpr) => {
    updateEprProfile({
      ...profileEpr,
      _id: userEpr._id,
      phone_props: {
        phone: profileEpr.phone_props.phone,
        is_verified: false,
      },
      birth_day: profileEpr.birth_day,
      address: profileEpr.address,
      desc_epr: profileEpr.desc_epr,
    })
  }

  return (
    <>
      <div className='bg-white min-h-screen flex items-start px-12 py-8 gap-14 text-[#474747]'>
        <aside className='w-[22%]'>
          <div className='w-full border-1 rounded-[5px]'>
            <ul className='flex flex-col text-[15px]'>
              <li className='py-2 px-4 border-b-[1px] font-[550] bg-[#F7FAFF] hover:bg-white'>Quản lý tài khoản</li>
              {/*  hover:border-b-0 hover:border-l-[4px] hover:border-[#1C88E5] hover:rounded-t-[5px] */}
              <ul className='flex flex-col'>
                <li className='py-2 px-4 border-b-[1px] font-[550] bg-[#F7FAFF] hover:bg-white'>Thông tin cá nhân</li>
                <li className='py-1 px-4 bg-[#E5E5E5] font-[400]'>Thông tin chung</li>
                <li className='py-1 px-4 hover:bg-[#E5E5E5] font-[400]'>Địa điểm làm việc</li>
              </ul>
            </ul>
          </div>
        </aside>
        <main className='w-[78%]'>
          <h2 className='text-[22px] tracking-normal py-1 pb-3 mb-3 border-b-[1px]'>Thông tin NTD</h2>
          <div>
            <form onSubmit={handleSubmit(handleUpdate)}>
              <div className='flex flex-col gap-x-10 w-full mb-2'>
                <label className='text-[15px] font-[550]'>Tên NTD<span className='text-[#ca5b54]'>*</span> </label>
                <input type="text"
                  {...register("name", {
                    required: true,
                    pattern: /^(?!.*\d)(?!.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/
                  })}
                  name='name'
                  className='border-1 border-[#C9C9C9] rounded py-1 px-2 focus:outline-none focus:border-blue-500 focus:bg-[#F7FAFF] hover:border-blue-500 hover:bg-[#F7FAFF]' />
                {errors.name && errors.name.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Tên.</span>}
                {errors.name && errors.name.type == 'pattern' && <span className='text-red-500 fw-bold mt-1'>Tên không hợp lệ.</span>}
              </div>
              <div className='flex items-center gap-x-10 w-full mb-2'>
                <div className='flex flex-col w-[50%]'>
                  <label className='text-[15px] font-[550]'> Email<span className='text-[#ca5b54]'>*</span> </label>
                  <input type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}
                    name='email'
                    className='border-1 border-[#C9C9C9] rounded py-1 px-2 focus:outline-none focus:border-blue-500 focus:bg-[#F7FAFF] hover:border-blue-500 hover:bg-[#F7FAFF]' />
                  {errors.email && errors.email.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Email</span>}
                  {errors.email && errors.email.type == 'pattern' && <span className='text-red-500 fw-bold mt-1'>Email không hợp lệ</span>}
                </div>
                <div className='flex flex-col w-[50%]'>
                  <label className='text-[15px] font-[550]'> Điện thoại<span className='text-[#ca5b54]'>*</span> </label>
                  <input type="text"
                    {...register("phone_props.phone", {
                      required: true,
                      minLength: 10,
                      pattern: /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/
                    })}
                    name='phone_props.phone'
                    className='border-1 border-[#C9C9C9] rounded py-1 px-2 focus:outline-none focus:border-blue-500 focus:bg-[#F7FAFF] hover:border-blue-500 hover:bg-[#F7FAFF]' />
                  {errors.phone_props?.phone && errors.phone_props?.phone.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Số điện thoại.</span>}
                  {errors.phone_props?.phone && errors.phone_props?.phone.type == 'minLength' && <span className='text-red-500 fw-bold mt-1'> Số điện thoại phải có ít nhất 10 ký tự.</span>}
                  {errors.phone_props?.phone && errors.phone_props?.phone.type == 'pattern' && <span className='text-red-500 fw-bold mt-1'>Số điện thoại không hợp lệ.</span>}
                </div>
              </div>
              <div className='flex items-center gap-x-10 w-full mb-2'>
                <div className='flex flex-col w-[50%]'>
                  <label className='text-[15px] font-[550]'> Địa chỉ thường chú: </label>
                  <input type="text"
                    {...register("address")}
                    name='address'
                    className='border-1 border-[#C9C9C9] rounded py-1 px-2 focus:outline-none focus:border-blue-500 focus:bg-[#F7FAFF] hover:border-blue-500 hover:bg-[#F7FAFF]' />
                </div>
                <div className='flex flex-col w-[50%]'>
                  <label className='text-[15px] font-[550]'> Ngày sinh: </label>
                  <input type="text"
                    {...register("birth_day")}
                    name='birth_day'
                    className='border-1 border-[#C9C9C9] rounded py-1 px-2 focus:outline-none focus:border-blue-500 focus:bg-[#F7FAFF] hover:border-blue-500 hover:bg-[#F7FAFF]' />
                </div>
              </div>
              <div className='flex flex-col gap-x-10 w-full mb-2'>
                <label className='text-[15px] font-[550]'>Sơ lược về NTD: </label>
                <textarea
                  {...register("desc_epr")}
                  name='desc_epr'
                  rows={7}
                  className='border-1 border-[#C9C9C9] rounded py-1 px-2 focus:outline-none focus:border-blue-500 focus:bg-[#F7FAFF] hover:border-blue-500 hover:bg-[#F7FAFF]' />
              </div>
              <div className='flex justify-end pt-2'>
                <button className='bg-[#FE7D55] hover:bg-[#FD6333] text-white py-1 px-10 text-[16px] rounded'>Lưu</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}

export default ProfileEpr