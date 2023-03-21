import { useParams } from 'react-router-dom'
import { useGetPostQuery } from '../../../service/post'
import FooterEmployer from '../../layouts/layoutComponentEmployer/FooterEmployer'

const PostDetail = () => {
    const { id } = useParams()
    const { data: post } = useGetPostQuery(id)
    return (
        <>
            <div className=''>
                <div className='h-[100vh] container text-black'>
                    <h1 className='my-3'>Post Detail</h1>
                    <div className='row bg-white p-5 h-[100vh]'>
                        <div className='col-8'>
                            <h1 className='text-3xl font-medium'>{post?.job_name}</h1>
                            <div className='my-3 bg-gray-100 p-3 w-[680px]'>
                                <div>
                                    Dịch vụ cần thuê:
                                    <span className='font-bold text-blue-500'> Thiết kế banner quảng cáo </span>
                                </div>
                                <div>
                                    Bạn có thể cung cấp dịch vụ này?
                                    <span className='text-blue-500'> Thêm vào hồ sơ làm việc.</span>
                                </div>
                            </div>
                            <div className='w-[600px]'>
                                <div className='flex flex-col p-3'>
                                    <div>
                                        Công ty TNNH Dịch vụ giao hàng 247 cung cấp các giải pháp về logistic phù hợp với mọi quy mô của Doanh nghiệp, chúng tôi xây dựng giải pháp xử lý các yêu cầu gọi xe tải và giao hàng TMĐT toàn quốc với hệ thống kho vận khắp toàn quốc. Thông qua ứng dụng giaohang247, Chúng tôi giúp bạn có nhiều lựa chọn trên một nền tảng ứng dụng. Bạn có thể đặt xe giao hàng với đủ cá loại phương tiện từ trọng tải 500 kg đến 5000 kg hoặc bạn có thể đặt lịch giao hàng theo mong muốn, Các tài xế sẽ đảm nhiệm và bạn có thể quản lý vận đơn, theo theo dõi lịch trình, tiến độ giao hàng một cách dễ dàng.
                                    </div>
                                    <div className='py-3'>
                                        Công ty chúng tôi luôn sẵn sàng hỗ trợ tận tình các doanh nghiệp trong nhiều ngành khác nhau mở rộng quy mô và thuê ngoài dịch vụ giao hàng theo nhu cầu của bạn.
                                    </div>
                                    <div className='flex flex-col'>
                                        Một số dịch vụ nổi bật của chúng tôi là:

                                        <span className='py-2'>- Giao hàng Siêu tốc 2h</span>

                                        <span className='pb-2'>- Giao hàng trong 24h</span>

                                        <span className='pb-2'>- Giao hàng Tiết kiệm Nội thành </span>

                                        <span className='pb-2'>- Chuyển phát Bưu kiện TMĐT trong nước</span>
                                    </div>
                                    <div className='flex flex-col py-3'>
                                        Yêu cầu:
                                        <div>- Năng động</div>
                                        <div>- Sáng tạo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='border-1 shadow-sm p-4'>
                                <div className='pb-2'>
                                    <h2 className='font-semibold text-xl mb-3'>Thông tin công việc</h2>
                                    <div className='flex mb-2'>
                                        <div className="w-[150px] text-gray-500">Id công việc: </div>
                                        <div>01</div>
                                    </div>
                                    <div className='flex mb-2'>
                                        <div className="w-[150px] text-gray-500">Ngày đăng: </div>
                                        <div>13/03/2023, 22:59</div>
                                    </div>
                                    <div className='flex mb-2'>
                                        <div className="w-[150px] text-gray-500">Chỉ còn: </div>
                                        <div>5 ngày 8 giờ</div>
                                    </div>
                                    <div className='flex mb-2'>
                                        <div className="w-[150px] text-gray-500">Địa điểm: </div>
                                        <div>Hà Nội</div>
                                    </div>
                                    <div className='flex mb-2'>
                                        <div className="w-[150px] text-gray-500">Ngân sách: </div>
                                        <div>
                                            1.000.000đ - 10.000.000đ</div>
                                    </div>
                                    <div className='flex mb-2'>
                                        <div className="w-[150px] text-gray-500">Hình thức làm việc: </div>
                                        <div className='text-orange-500 font-semibold'>Online</div>
                                    </div>
                                    <div className='flex mb-2'>
                                        <div className="w-[150px] text-gray-500">Hình thức trả lương: </div>
                                        <div>Trả theo dự án</div>
                                    </div>
                                </div>
                                <div className='my-2'>
                                    <h2 className='font-semibold text-xl py-2'>Thông tin khách hàng</h2>
                                    <div>

                                    </div>
                                    <div className='flex mb-2'>
                                        <div className="w-[150px] text-gray-500">Đến từ: </div>
                                        <div>Hà Nội</div>
                                    </div>
                                    <div className='flex mb-2'>
                                        <div className="w-[150px] text-gray-500">Tham gia: </div>
                                        <div>23/02/2023</div>
                                    </div>
                                    <div className='flex mb-2'>
                                        <div className="w-[150px] text-gray-500">Đã đăng: </div>
                                        <div>1 việc</div>
                                    </div>
                                </div>
                                <button
                                    className='bg-[#FE7D55] hover:bg-[#FD6333] text-white font-semibold w-100 py-2 rounded mt-5'>
                                    Liên hệ trực tiếp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <FooterEmployer />
            </div>
        </>
    )
}

export default PostDetail