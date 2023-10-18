import { SubmitHandler, useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useAppSelector } from '../../../app/hook'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  useGetUserEprByEmailQuery,
  useUpdateUserEprMutation
} from '../../../service/auth_employer'
import IUserNTD from '../../../interface/employer/user_epr'
import { toast } from 'react-toastify'

const ProfileEpr = (): any => {
  const { email, isLoggedIn } = useAppSelector((res) => res.auth)
  const { data: userEpr } = useGetUserEprByEmailQuery<any>(email)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IUserNTD>()
  const [updateUser] = useUpdateUserEprMutation()
  const navigate = useNavigate()

  useEffect(() => {
    reset(userEpr)
  }, [userEpr])

  const handleUpdate: SubmitHandler<IUserNTD> = async (userEprForm: IUserNTD) => {
    const update: any = await updateUser({
      ...userEprForm,
      _id: userEpr._id,
      isEmailVerified: userEpr.isEmailVerified,
      isPhoneVerified: userEpr.isPhoneVerified,
    })
    const { data: rs } = update
    if (rs?.success) {
      toast.success('Cập nhật thành công')
    }
  }

  if (!isLoggedIn) {
    return navigate('/login-epr')
  }

  return (
    <>
      {isLoggedIn ? <div className='bg-white min-h-screen flex items-start px-12 py-8 gap-14 text-[#474747]'>
        <aside className='w-[22%]'>
          <div className='w-full border-1 rounded-[5px]'>
            <ul className='flex flex-col text-[15px]'>
              <NavLink to={'/home/acc-epr-manage'}
                className='py-2 px-[24px] hover:px-[20px] border-b-[1px] font-[550] bg-[#F7FAFF] hover:bg-white text-[#333333] hover:text-[#333333] hover:border-l-[4px] hover:border-l-[#1C88E5] hover:rounded-tl-[5px]'>
                Quản lý tài khoản
              </NavLink>
              {/*  hover:border-b-0 hover:border-l-[4px] hover:border-[#1C88E5] hover:rounded-t-[5px] */}
              <ul className='flex flex-col'>
                <li className='py-2 px-[24px] hover:px-[20px] border-b-[1px] font-[550] bg-[#F7FAFF] hover:bg-white hover:border-l-[4px] hover:border-l-[#1C88E5]'>Thông tin cá nhân</li>
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
                    {...register("phone", {
                      required: true,
                      minLength: 10,
                      pattern: /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/
                    })}
                    name='phone'
                    className='border-1 border-[#C9C9C9] rounded py-1 px-2 focus:outline-none focus:border-blue-500 focus:bg-[#F7FAFF] hover:border-blue-500 hover:bg-[#F7FAFF]' />
                  {errors.phone && errors.phone.type == 'required' && <span className='text-red-500 fw-bold mt-1'>Vui lòng nhập Số điện thoại.</span>}
                  {errors.phone && errors.phone.type == 'minLength' && <span className='text-red-500 fw-bold mt-1'> Số điện thoại phải có ít nhất 10 ký tự.</span>}
                  {errors.phone && errors.phone.type == 'pattern' && <span className='text-red-500 fw-bold mt-1'>Số điện thoại không hợp lệ.</span>}
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
                  <label className='text-[15px] font-[550]'> Tuổi: </label>
                  <input type="text"
                    {...register("age")}
                    name='age'
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
      </div> :
        <div className='my-10'>
          <h1 className='text-center text-[30px] font-[700]'>Đăng nhập để tiếp tục.</h1>
        </div>}

    </>
  )
}

export default ProfileEpr