import React from 'react'
import HeaderSearchhJob from '../layouts/layoutComponentClient/HeaderSearchhJob'
import { useGetPostsByUIdQuery } from '../../service/post'
import { useGetPostsQuery } from '../../service/post'
import IPost from '../../interface/post'
import { NavLink } from 'react-router-dom'
import FooterEmployer from '../layouts/layoutComponentEmployer/FooterEmployer'

const job = () => {

    const { data: posts, error, isLoading } = useGetPostsQuery()
    console.log(posts)
    if (isLoading) return <div>...isLoading</div>
    if (error) return <div>error</div>
    return (
        <>
            <HeaderSearchhJob />
            <div className="vieclam" style={{ background: '#f7f7f7', }} >
                <div className='content-job'>
                    <div className='content-job1' id='content-job1' >
                        <div className='info-list-job' >
                            <div className="filter-all-job" >
                                <div className="btn-group bg-white" id='filter-all'>
                                    <button
                                        className="btn btn-lg text-black-60  dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Tất cả Ngành Nghề
                                    </button>
                                    <ul className="dropdown-menu"><li>
                                        <a className="dropdown-item" href="#">
                                            An toàn lao động
                                        </a>
                                    </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                bác sĩ
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Bán hàng
                                            </a>
                                        </li></ul>
                                </div>
                                <div className="btn-group ml-3 bg-white" id='filter-all'>
                                    <button
                                        className="btn  btn-lg dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Tất cả cấp bậc
                                    </button>
                                    <ul className="dropdown-menu"><li>
                                        <a className="dropdown-item" href="#">
                                            Thực tập sinh/ sinh viên học sinh
                                        </a>
                                    </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                bác sĩ
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Bán hàng
                                            </a>
                                        </li></ul>
                                </div>
                                <div className="btn-group ml-3 bg-white" id='filter-all'>
                                    <button
                                        className="btn btn-lg text-black-60  dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Tất cả loại hình
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                partime
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                toàn thời gian
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Bán hàng
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                partime
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                toàn thời gian
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Bán hàng
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='pt-3' style={{ background: '#f7f7f7' }}>
                    <div className="block-job-list" >
                        <div className='content-job2'>
                            {posts.map((post: IPost) => (
                                <div className='job-info-wrapper' style={{ marginBottom: '16px' }}>
                                    <div className='d-flex justify-content-center align-items-center logo-area-wrapper logo-border' id='logo-area-wrapper'>
                                        <a style={{ background: 'white', justifyContent: 'center', display: 'flex', padding: '5px', border: '1px solid #fff' }}>
                                            <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F6e%2F10922087.png&w=128&q=75" style={{ width: '100px', height: '60px', margin: '20px 0px' }} />
                                        </a>
                                    </div>

                                    <div>
                                        <p>
                                            <NavLink to={`/home/posts/${post._id}`} className='job-title fs-5' style={{ color: '#ff4a53' }}>{post.job_name}</NavLink>
                                            <div style={{ fontSize: '14px' }}>Hình thức làm việc: {post.working_form}</div>
                                            <div style={{ color: '#999', fontSize: '13px' }}>Nơi làm việc: {post.work_location}</div>
                                            <span style={{ color: '#999', fontSize: '13px' }}>Ngày đăng tuyển: {(new Date(post?.createdAt)).toLocaleDateString()}</span>
                                            <div style={{ color: '#ff7d55', fontWeight: 500 }}>Mức lương: {post.job_salary}</div>
                                        </p>
                                    </div>


                                </div>
                            ))}
                        </div>
                        <div className='' id="banner-list-job">
                            <p className='py-3 pl-3 fs-6 border border-bottom-0 m-0' style={{ background: '#white', color: 'black' }}>Công Ty Hàng Đầu</p>
                            <div className='border border-top-0' style={{ paddingBottom: '0.9em' }} >
                                <img src='https://tse3.mm.bing.net/th?id=OIP.cLyW0WdrOvk6Nq7ehtoRxwHaEK&pid=Api&P=0' />
                                <p style={{ padding: '10px 0 0 ', textAlign: 'center', fontSize: '1em', fontWeight: 'bold' }}>Công Ty cổ phần MISA</p>
                                <p style={{ textAlign: 'center', padding: '10px 0 0 ' }}>Trở thành Marketer chuyên nghiệp cùng MISA ngay hôm nay</p>
                                <div style={{ textAlign: 'center', padding: '10px 0 0 ', fontSize: '0.9em', color: "blue" }}><a href='#'>9 vị trí đang ứng</a></div>
                            </div>
                            <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F500x600_122855.png&w=1920&q=75" style={{ marginTop: '0.8em' }} />
                            <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F500x600_122998.png&w=1920&q=75" style={{ marginTop: '0.8em' }} />
                            <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F3.%20500x600_123080.jpg&w=1920&q=75" style={{ marginTop: '0.8em' }} />
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default job