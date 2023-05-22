import { message } from 'antd'
import { useParams } from 'react-router-dom'
import { useAddCvMutation } from '../../../service/manage_cv'
import { useGetPostQuery } from '../../../service/post'
import { useGetUserByEmailQuery } from '../../../service/auth'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../../app/hook'

const PostDetailEp = (): any => {
    const { id } = useParams()
    const { data: post } = useGetPostQuery(id)
    const { email, isLoggedIn } = useAppSelector((res: any) => res.auth)
    const { data: user } = useGetUserByEmailQuery(email)
    const [addCv] = useAddCvMutation()


    const applyJob = () => {
        const { name, email, phone, post_id } = user
        try {

            const apply = addCv({
                name,
                email,
                phone,
                date: user?.birth_day,
                post_id: post._id,
                user_id: user._id
            })


            if (apply) {
                message.success('Nộp đơn thành công.')
            }
        } catch (error) {
            console.log(error);
            const { email, isLoggedIn } = useAppSelector((rs) => rs.auth)
            const { data: user } = useGetUserByEmailQuery(email)
            const [addCv] = useAddCvMutation()
            const applyJob = async () => {
                const address = `${user?.specific_address} ${user?.district} ${user?.province}`
                const apply = await addCv({
                    name: user?.name,
                    email: user?.email,
                    phone: user?.phone,
                    image: user?.image,
                    address: address,
                    description: user?.description,
                    age: user?.age,
                    gender: user?.gender,
                    status: null,
                    post_id: post._id
                })
                const { data: rs } = apply
                if (rs?.success) {
                    message.success(rs?.mes)
                }
            }
        }
    }
    return (
        <>
            <div className="recruitment-details" style={{ background: '#f7f7f7', paddingBottom: '1em' }} >
                <div className='row'>
                    <div style={{ background: 'white', height: '13em', paddingTop: '1em' }}>
                        <div style={{ width: '73%', margin: '0 auto' }}>
                            <div className='recruitment-details1 flex items-center justify-between' style={{ padding: 'auto 0' }}>
                                <div className='w-[80%] flex items-center'>
                                    <div className='d-flex justify-content-center align-items-center logo-area-wrapper logo-border w-[20%]' id='logo-area-wrapper'>
                                        <a style={{ background: 'white', justifyContent: 'center', display: 'flex', padding: '5px', border: '1px solid #fff' }}>
                                            <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F6e%2F10922087.png&w=128&q=75" style={{ width: '100px', height: '60px', margin: '20px 0px' }} />
                                        </a>
                                    </div>
                                    <div className='cuong1 w-[80%]'>
                                        <p>
                                            <a href='#' className='job-title fs-5' style={{ color: '#ff4a53', width: '80%' }}>{post?.job_name}</a>
                                            <div style={{ color: '#999', fontSize: '13px' }}>{post?.work_location}</div>
                                            <span style={{ color: '#999', fontSize: '13px' }}>Ngày đăng tin: {(new Date(post?.createdAt)).toLocaleDateString()}</span>
                                            <div style={{ color: '#ff7d55', fontWeight: 500 }}>{(post?.job_salary)?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
                                        </p>
                                    </div>
                                </div>
                                <div className='w-[20%]'>
                                    {
                                        isLoggedIn ?
                                            <button
                                                className='bg-[#FE7D55] hover:bg-[#FD6333] text-white font-semibold w-100 py-2 rounded mt-5'
                                                onClick={applyJob}>
                                                Ứng tuyển
                                            </button> :
                                            <div className='bg-gray-100 text-[#333333] text-center font-semibold w-100 py-2 rounded mt-5'>
                                                Đăng nhập để ứng tuyển
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-recruitment-details pt-3" style={{ width: '73%', margin: '0 auto' }}>
                        <div className='content-recruitment-details'>
                            <div className='pt-2 pl-5' style={{ background: 'white' }}>
                                <div className='w-[600px]'>
                                    <div className='flex flex-col p-3'>
                                        <p className='fs-3 m-0'>Mô tả công việc:</p>
                                        <div className='fs-6 py-3'>
                                            {post?.job_description}
                                        </div>
                                        <div className='flex flex-col py-3'>
                                            <p className='fs-3'>Yêu cầu:</p>
                                            <div className='fs-6'>{post?.requirements}</div>
                                        </div>
                                        <div className='flex items-center gap-x-3 mb-2'>
                                            <p className='fs-3 m-0'>Địa điểm làm việc:</p>
                                            <div className='fs-6'>{post?.work_location}</div>
                                        </div>
                                        <div className='flex items-center gap-x-3'>
                                            <p className='fs-3 m-0'>Chia sẻ</p>
                                            <div className='d-flex py-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook mx-2" viewBox="0 0 16 16">
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter mx-2" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                                <img src='src/image/logo-zalo.jpg' className='mx-2' width="16" height="16" />
                                                <img src='src/image/linked.jpg' className='mx-2' width="16" height="16" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='' id="banner-list-job">
                            <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F3-500x600_123065.png&w=1920&q=75" />
                            <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F500x600_122893.png&w=1920&q=75" style={{ marginTop: '0.8em' }} />
                            <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F3.%20500x600_123080.jpg&w=1920&q=75" style={{ marginTop: '0.8em' }} />
                            <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F500x600_122998.png&w=1920&q=75" style={{ marginTop: '0.8em' }} />
                            <div />
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
                                    {
                                        isLoggedIn ?
                                            <button
                                                className='bg-[#FE7D55] hover:bg-[#FD6333] text-white font-semibold w-100 py-2 rounded mt-5'
                                                onClick={applyJob}>
                                                Ứng tuyển
                                            </button> :
                                            <div className='bg-gray-100 text-[#333333] text-center font-semibold w-100 py-2 rounded mt-5'>
                                                Đăng nhập để ứng tuyển
                                            </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetailEp