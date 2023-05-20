import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Space, Spin } from 'antd'
import IPackage from '../../../interface/package'
import { useAppDispatch, useAppSelector } from '../../../app/hook'
import { setCart } from '../../../app/actions/package'
import { useGetAdmPackagesQuery } from '../../../service/admin/package'
import IAdPackage from '../../../interface/admin/package'
import { toast } from 'react-toastify'

const PackageList = () => {
    const dispatch: any = useAppDispatch()
    const navigate = useNavigate()
    const { data: packages, error, isLoading } = useGetAdmPackagesQuery()
    const onHandleAddToCart = (pack: IAdPackage) => {
        toast.success('Thêm thành công!')
        const addToCart = dispatch(setCart(pack))
    }

    const onHandleBuy = (pack: IPackage) => {
        navigate('/home/cart')
        dispatch(setCart(pack))
    }

    if (isLoading) {
        return <Space className='mt-16' direction="vertical" style={{ width: '100%' }}>
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </Space>
    }
    if (error) {
        return <Space className='mt-16' direction="vertical" style={{ width: '100%' }}>
            <Alert message="Error!!!" type="error" />
        </Space>
    }
    return (
        <>
            <section className='min-h-screen'>
                <div className='bg-white'>
                    <h2 className='text-[15px] font-[700] p-3'>Mua dịch vụ</h2>
                </div>
                <div className='p-3'>
                    <div>
                        <div>
                            <h2 className='text-[20px] mb-0'><span className='text-[#004AD1]'>TOP JOBS</span> | QUẢNG CÁO TIN TUYỂN DỤNG</h2>
                            <p className='mt-0'>Cộng hưởng sức mạnh công nghệ tạo ra hiệu quả đột phá cho tin tuyển dụng của Bạn.</p>
                        </div>
                        <div className='grid grid-cols-3 gap-x-3 mt-3'>
                            {
                                packages ? packages?.map((pack: any) =>
                                    <div key={pack._id} className='bg-white p-4 border-none rounded mb-3'>
                                        <h3 className='text-[18px]'>{pack.package_name}</h3>
                                        <span className='text-[17px] text-[#FD6333] font-[700]'>{pack.package_price} VND</span>
                                        <p>Quảng cáo tin đăng hiệu quả với vị trí nổi bật trong <span className='font-[550]'>Việc làm tốt nhất</span> kết hợp cùng các dịch cao cấp và được bảo hành vị trí ưu tiên.</p>
                                        <div className='flex items-center justify-between'>
                                            <button onClick={() => onHandleAddToCart(pack)} className='flex items-center space-x-[5px] border-1 border-[#004AD1] rounded text-[#004AD1] font-[550] px-4 py-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                                </svg>
                                                <span>Thêm vào giỏ</span>
                                            </button>
                                            <button onClick={() => onHandleBuy(pack)} className='border-none rounded bg-[#004AD1] text-white font-[550] px-11 py-1'>
                                                Mua ngay
                                            </button>
                                        </div>
                                    </div>
                                ) : ''
                            }

                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className='text-xl mb-0'><span>TOP ADD - ON</span> | DỊCH VỤ CỘNG THÊM</h2>
                            <p className='mt-0'>Thêm tùy chọn giúp tin nổi bất hơn với ứng viến.</p>
                        </div>
                        <div className='grid grid-cols-3 gap-x-3 mt-3'>
                            <div className='bg-white p-4 border-none rounded mb-3'>
                                <h3 className='text-[18px]'>TOP MAX</h3>
                                <span className='text-[17px] text-[#FD6333] font-[700]'>7.500.000 VND</span>
                                <p>Quảng cáo tin đăng hiệu quả với vị trí nổi bật trong <span className='font-[550]'>Việc làm tốt nhất</span> kết hợp cùng các dịch cao cấp và được bảo hành vị trí ưu tiên.</p>
                                <div className='flex items-center justify-between'>
                                    <button className='flex items-center space-x-[5px] border-1 border-[#004AD1] rounded text-[#004AD1] font-[550] px-4 py-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                        </svg>
                                        <span>Thêm vào giỏ</span>
                                    </button>
                                    <button className='border-none rounded bg-[#004AD1] text-white font-[550] px-11 py-1'>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                            <div className='bg-white p-4 border-none rounded mb-3'>
                                <h3 className='text-[18px]'>TOP PRO</h3>
                                <span className='text-[17px] text-[#FD6333] font-[700]'>5.440.000 VND</span>
                                <p>Quảng cáo tin đăng tuyển dụng tối ưu với vị trí ưu tiên trong <span className='font-[550]'>Việc làm hấp dẫn</span> được hỗ trợ bỏi trinh sát viên Scout AI kết hợp các dịch vụ cao cấp.</p>
                                <div className='flex items-center justify-between'>
                                    <button className='flex items-center space-x-[5px] border-1 border-[#004AD1] rounded text-[#004AD1] font-[550] px-4 py-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                        </svg>
                                        <span>Thêm vào giỏ</span>
                                    </button>
                                    <button className='border-none rounded bg-[#004AD1] text-white font-[550] px-11 py-1'>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                            <div className='bg-white p-4 border-none rounded mb-3'>
                                <h3 className='text-[18px]'>TOP MAX</h3>
                                <span className='text-[17px] text-[#FD6333] font-[700]'>7.500.000 VND</span>
                                <p>Quảng cáo tin đăng hiệu quả với vị trí nổi bật trong <span className='font-[550]'>Việc làm tốt nhất</span> kết hợp cùng các dịch cao cấp và được bảo hành vị trí ưu tiên.</p>
                                <div className='flex items-center justify-between'>
                                    <button className='flex items-center space-x-[5px] border-1 border-[#004AD1] rounded text-[#004AD1] font-[550] px-4 py-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                        </svg>
                                        <span>Thêm vào giỏ</span>
                                    </button>
                                    <button className='border-none rounded bg-[#004AD1] text-white font-[550] px-11 py-1'>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                            <div className='bg-white p-4 border-none rounded mb-3'>
                                <h3 className='text-[18px]'>TOP PRO</h3>
                                <span className='text-[17px] text-[#FD6333] font-[700]'>5.440.000 VND</span>
                                <p>Quảng cáo tin đăng tuyển dụng tối ưu với vị trí ưu tiên trong <span className='font-[550]'>Việc làm hấp dẫn</span> được hỗ trợ bỏi trinh sát viên Scout AI kết hợp các dịch vụ cao cấp.</p>
                                <div className='flex items-center justify-between'>
                                    <button className='flex items-center space-x-[5px] border-1 border-[#004AD1] rounded text-[#004AD1] font-[550] px-4 py-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                        </svg>
                                        <span>Thêm vào giỏ</span>
                                    </button>
                                    <button className='border-none rounded bg-[#004AD1] text-white font-[550] px-11 py-1'>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default PackageList