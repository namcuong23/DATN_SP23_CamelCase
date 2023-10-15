import { useState, useEffect } from 'react'
import { Modal } from 'antd'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { apiGetDistricts, apiGetProvinces } from '../../../service/api'
import { useAppSelector } from '../../../app/hook'
import {
    useActiveEmailMutation,
    useGetUserByEmailQuery,
    useSendEmailVerifiedMutation,
    useUpdateUserMutation
} from '../../../service/auth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import IUserNTV from '../../../interface/user'

const Profile: any = () => {
    const { email, isLoggedIn } = useAppSelector((res: any) => res.auth)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<any>()
    const navigate = useNavigate()
    const { data: user } = useGetUserByEmailQuery(email)
    const [hidden, setHidden] = useState(true)
    const [open, setOpen] = useState(false);
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

    const [verifiedEmail] = useSendEmailVerifiedMutation()
    const sendEmail = async () => {
        const send: any = await verifiedEmail({ email })
        const { data: rs } = send
        if (rs?.success) {
            toast.success(rs?.mes)
        }
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

    if (isLoggedIn == false) {
        return navigate('/login')
    }

    return (
        <>
            {isLoggedIn ? <div className='bg-gray-100 min-h-screen mb-[260px]'>
                {/* CONTENT */}
                <div className='flex items-start w-100 gap-3 p-3'>
                    {/* Navbar */}
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
                                    <h3 className='text-[20px] font-[600] text-white'>{user?.name}</h3>
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
                                    <Link to='/myjob'><span className='text-[14px] pl-[10px]'>Việc làm của tôi</span></Link>
                                </button>
                            </div>
                        </section>
                        <section className='border-1 bg-white'>
                            <div>
                                <NavLink to={'/account-manage'} className='flex items-center p-[17px] w-100 border rounded hover:bg-[#EBF2FF] text-[#333333]'>
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3011_6580)"><path d="M22.6368 10.186L19.8 9.72236C19.6339 9.15308 19.4069 8.60588 19.1227 8.08796L20.7787 5.7278C20.9126 5.53724 20.8896 5.27756 20.7249 5.11244L18.8582 3.24668C18.6917 3.0806 18.4296 3.059 18.2385 3.19676L15.9139 4.86764C15.3912 4.57868 14.8392 4.34924 14.2665 4.18268L13.7717 1.3574C13.7313 1.12796 13.5321 0.959961 13.2989 0.959961H10.6589C10.4237 0.959961 10.223 1.13036 10.1851 1.36268L9.72622 4.1726C9.15022 4.3382 8.59726 4.56524 8.07646 4.85036L5.75806 3.19436C5.56654 3.05756 5.3059 3.07964 5.13934 3.24524L3.27358 5.111C3.10894 5.27564 3.0859 5.53484 3.21982 5.7254L4.85134 8.05964C4.56094 8.58524 4.32958 9.14156 4.1611 9.72044L1.36222 10.1865C1.13086 10.2249 0.960938 10.4256 0.960938 10.6598V13.2998C0.960938 13.5326 1.12798 13.7318 1.35694 13.7726L4.15582 14.2689C4.32334 14.8464 4.5547 15.4027 4.84606 15.9297L3.19438 18.24C3.05806 18.4305 3.07966 18.6921 3.24526 18.8587L5.1115 20.7264C5.27614 20.891 5.53582 20.914 5.72638 20.7801L8.06398 19.1428C8.58862 19.4313 9.14302 19.6603 9.71758 19.8264L10.1861 22.6396C10.224 22.8705 10.4241 23.04 10.6589 23.04H13.2989C13.5317 23.04 13.7309 22.8729 13.7712 22.644L14.2728 19.8168C14.8483 19.6473 15.3998 19.4169 15.9192 19.128L18.2736 20.7796C18.4646 20.9145 18.7238 20.891 18.8889 20.7264L20.7552 18.8587C20.9213 18.6921 20.9429 18.4296 20.8051 18.2385L19.1261 15.9072C19.4107 15.3888 19.6368 14.8406 19.8014 14.2713L22.6421 13.7726C22.872 13.7323 23.039 13.5326 23.039 13.2998V10.6598C23.0395 10.4246 22.8691 10.224 22.6368 10.186ZM12 15.36C10.1443 15.36 8.63998 13.8556 8.63998 12C8.63998 10.1443 10.1443 8.63996 12 8.63996C13.8557 8.63996 15.36 10.1443 15.36 12C15.36 13.8556 13.8557 15.36 12 15.36Z" fill="#888888" /></g><defs><clipPath id="clip0_3011_6580"><rect width={24} height={24} fill="white" /></clipPath></defs></svg>
                                    <span className='text-[14px] pl-[10px]'>Quản lý tài khoản</span>
                                </NavLink>
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
                                                                        <button onClick={sendEmail} className='font-[100] hover:text-[#fd7e14]' >Xác thực</button>
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
                                                                <option value={0}>--Chọn Giới tính--</option>
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
                    </main>
                </div>
            </div > :
                <div className='my-10'>
                    <h1 className='text-center text-[30px] font-[700]'>Đăng nhập để tiếp tục.</h1>
                </div>}

        </>
    )
}

export default Profile