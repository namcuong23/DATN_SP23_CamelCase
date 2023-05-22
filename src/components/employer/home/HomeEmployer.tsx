import React, { useEffect, useState } from 'react'
import FooterEmployer from '../../layouts/layoutComponentEmployer/FooterEmployer'
import { useAppSelector } from '../../../app/hook'
import { useGetUserEprByEmailQuery } from '../../../service/auth_employer';
import { useGetPostsByUIdQuery } from '../../../service/post';
import IPost from '../../../interface/post';
import { useNavigate } from 'react-router-dom';
type Props = {}

const Home = (props: Props): any => {
    const { email, isLoggedIn } = useAppSelector((res) => res.auth);
    const data: any = useGetUserEprByEmailQuery(email)
    const user: any = data.currentData;
    const { data: posts, error, isLoading } = useGetPostsByUIdQuery(user?._id)
    const [postData, setPostData] = useState<IPost[]>([]);
    const navigate = useNavigate()
    useEffect(() => {
        setPostData(posts);
    }, [posts]); // Sử dụng một dependency để cập nhật postData khi giá trị posts thay đổi


    const jobIsOK = postData?.filter((post) => {
        const lengthofOK = [];
        if (post.post_status == true) {
            lengthofOK.push(post);
        }
        return lengthofOK.length
    })
    const jobIsWating = postData?.filter((post) => {
        const lengthofOK = [];
        if (!post.post_status) {
            lengthofOK.push(post);
        }
        return lengthofOK.length
    })
    const jobIsDeny = postData?.filter((post) => {
        const lengthofOK = [];
        if (post.post_status == false) {
            lengthofOK.push(post);
        }
        return lengthofOK.length
    })

    if (!isLoggedIn) {
        return navigate('/login-epr')
    }

    return (
        <>
            <div className='mx-5'>
                <div className="row mt-4">
                    <div className=" rounded" id="tinhtrangcongviec">
                        <div className="row g-1">

                            <h3 className="m-3">Tình trạng công việc</h3>
                            <div className="container">

                                <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3" id="ttcv">
                                    <div className="col">
                                        <div className="p-3" style={{ backgroundColor: '#d1e0f9' }}>
                                            <p className='font-bold text-2xl'>
                                                {jobIsOK?.length ? jobIsOK?.length : 0}</p>
                                            Công việc đang đăng tuyển
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="p-3" style={{ backgroundColor: '#fef7e5' }}>
                                            <p>{jobIsWating?.length ? jobIsWating?.length : 0}</p>
                                            Công việc đang chờ duyệt
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="p-3" style={{ backgroundColor: '#e5f6ec' }}>
                                            <p>{jobIsDeny?.length ? jobIsDeny?.length : 0}</p>
                                            Công việc đã bị từ chối
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="p-3" style={{ backgroundColor: '#fcecec' }}>
                                            <p>0</p>
                                            Các gói dịch vụ đang dùng
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="p-3" style={{ backgroundColor: '#ead9fb' }}>
                                            <p>0</p>
                                            Ứng viên đang chờ duyệt
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="p-3" style={{ backgroundColor: '#dcd6e2' }}>
                                            <p>0</p>
                                            Ticket hỗ trợ
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{ backgroundColor: 'white', marginTop: '20px', height: '250px' }} className=" rounded">
                        <h3 className="m-3">Quản lý công việc</h3>
                        <div id="nkcv">
                            <a href="#"><img src="./src/assets/img/nhatkyhoatdong.jpg" style={{ textAlign: 'center' }} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <FooterEmployer />
        </>
    )
}

export default Home