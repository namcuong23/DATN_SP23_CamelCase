import React from 'react'
import { useState } from 'react'
import { ColumnsType } from 'antd/es/table'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../../app/hook'
import { useGetPostQuery, useGetPostsByCareerQuery } from '../../../service/post'
import {
    useApproveCvMutation,
    useGetCvsByPostIdQuery,
    useRemoveCvMutation
} from '../../../service/manage_cv'
import { Modal, Popconfirm, Space, message, Table } from 'antd'
import FooterEmployer from '../../layouts/layoutComponentEmployer/FooterEmployer'
import { CloseOutlined, CheckOutlined, } from '@ant-design/icons'
import { useCreateCandidateMutation } from '../../../service/employer/candidate'
import { useAddNotificationMutation } from '../../../service/notification'
import {
    LinkedinOutlined,
    SkypeOutlined,
    TwitterOutlined,
    FacebookOutlined,
    FileDoneOutlined,
    EnvironmentOutlined,
    DollarOutlined,
    EuroCircleOutlined,
    MobileOutlined
} from '@ant-design/icons';
import useDateFormat from '../../../utils/hooks/FormatDate'
import { formatCurrency } from '../../../utils/hooks/FormatCurrrency'

const PostDetail: React.FC = (): any => {
    const { id } = useParams()
    const { isLoggedIn } = useAppSelector((rs) => rs.authEmpr)
    const navigate = useNavigate()
    const { data: post } = useGetPostQuery(id);
    const [open, setOpen] = useState(false);
    const { data: posts } = useGetPostsByCareerQuery({
        id,
        career: post?.career
    })
    const { data } = useGetCvsByPostIdQuery(post && post?._id)
    const cvs = data?.cvs

    const add = 'Bạn có muốn thêm vào ứng viên phù hợp?';
    const remove = 'Bạn có muốn xoá không?';
    const [addCandidate] = useCreateCandidateMutation()
    const [addNotification] = useAddNotificationMutation()


    const onHandleAdd = async (user: any) => {
        try {
            const response = await addCandidate(user);

            if ('data' in response && response.data) {
                message.success('Đã thêm vào ứng viên phù hợp');
            } else if ('error' in response) {
                message.error('Đây là ứng viên phù hợp');
                console.log(data);
            }

        } catch (error) {
            console.error(error);
        }
    }
    const notification_title = "Chúc mừng bạn đã ứng tuyển thành công"
    const notification_content = "Thư mời phỏng vấn đã được gửi tới email của bạn"
    const onHandleNotification = async (user: any) => {
        try {
            const response = await addNotification(user);
            console.log(user);
            if ('data' in response && response.data) {
                message.success('Đã gửi thông báo đến ứng viên');
            } else if ('error' in response) {
                message.error('Đã gửi thông báo trước đó');
                console.log(data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const [approveCv] = useApproveCvMutation()
    const onHandleApprove = (id: string) => {
        console.log(id);

        if (confirm !== null) {
            approveCv(id)
            message.success('Đã gửi thông báo đến ứng viên');
        }
    }
    const [deleteCv] = useRemoveCvMutation()
    const onHandleDelete = (id: string) => {

        if (confirm !== null) {
            deleteCv(id)
        }
    }


    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        setOpen(false);
    };

    const columns: ColumnsType<any> = [
        {
            title: 'Tên ứng viên',
            dataIndex: 'name',
        },
        {
            title: 'Vị trí',
            dataIndex: 'job_title',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Ngày nộp',
            dataIndex: 'createdAt',
            render: (_, record) => <div>{new Date(record?.createdAt).toLocaleDateString()}</div>,
        },
        {
            title: 'Hành động',
            dataIndex: 'action',

            render: (_, record) => (
                <Space size="middle" className='flex items-center'>
                    {/* <Popconfirm placement="top"
                        title={"Hãy gửi email phỏng vấn"}
                        onConfirm={() => {
                            onHandleNotification(record);
                            onHandleApprove(record._id)

                        }}
                        okText="Đồng ý"
                        cancelText="Không"
                        className='leading-[22px] flex items-center'
                    >
                        <CheckOutlined className='text-success' />
                    </Popconfirm> */}
                    <NavLink to={`/home/sendmail`}
                        className='leading-[22px] flex items-center'
                        target='_blank'
                    >
                        <CheckOutlined className='text-success' />
                    </NavLink>
                    <Popconfirm placement="top"
                        title={remove}
                        onConfirm={() => onHandleDelete(record._id)}
                        // onClick={() => }
                        okText="Đồng ý"
                        cancelText="Không"
                        className='leading-[22px] flex items-center'
                    >
                        <CloseOutlined className='text-danger' />
                    </Popconfirm >
                    <NavLink to={`/cv-preview?id=${record._id}`}
                        target='_blank'
                    >
                        <i className="fa-regular fa-eye text-[#333]"></i>
                    </NavLink>
                </Space>
            ),
        },
    ];

    if (!isLoggedIn) {
        return navigate('/login-epr')
    }

    return (
        <>
            <div className="recruitment-details" style={{ background: 'white', paddingBottom: '1em' }} >
                <div className='row bg-white'>
                    <div style={{ background: 'white', height: '13em', paddingTop: '1em' }} >
                        <div style={{ width: '75%', margin: '0 auto' }} className='border'>
                            <div className='recruitment-details1' style={{ padding: 'auto 0' }}>
                                <div className="cuong1 w-[80%]" style={{ marginLeft: '60px' }}>
                                    <p className="job-name" style={{ fontSize: "26px" }}>
                                        {post?.job_name}
                                    </p>
                                    <div className="">
                                        <span className="text-[#333333] block font-thin text-[15px]">
                                            {post?.offer_salary
                                                ? "Thương lượng"
                                                : <div>{post?.min_job_salary ? `${formatCurrency(post.min_job_salary)}` : "Lên đến"} {post?.min_job_salary && post?.max_job_salary ? '-' : ""} {post?.max_job_salary ? `${formatCurrency(post.max_job_salary)}` : "trở lên"}</div>}
                                        </span>
                                    </div>
                                    <span style={{ color: "#999", fontSize: "13px" }}>
                                        Ngày đăng tin: {useDateFormat(post?.createdAt)}
                                    </span>
                                    <div style={{ color: "#ff7d55", fontWeight: 500 }}>
                                        {post?.job_salary?.toLocaleString("vi", {
                                            style: "currency",
                                            currency: "VND",
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-recruitment-details pt-3 border" style={{ width: '74%', margin: '0 auto' }}>
                        <div className='content-recruitment-details '>
                            <div className='pt-2 pl-5' style={{ background: 'white' }}>
                                <div>
                                    <div className='flex flex-col p-3'>
                                        <p className='fs-3 text-black'>Mô tả công việc:</p>
                                        <div className='fs-6 py-3 w-[700px]'>
                                            {post?.job_description}
                                        </div>
                                        <div className='flex flex-col py-3'>
                                            <p className='fs-3 text-black w-[150px]'>Yêu cầu:</p>
                                            <div className='fs-6'>{post?.requirements}</div>
                                        </div>
                                        <div className='flex flex-col py-3'>
                                            <p className='fs-3 text-black'>Địa điểm làm việc:</p>
                                            <div>
                                                {post?.work_location.map((location: any, index: any) => (
                                                    <React.Fragment key={index}>
                                                        {index > 0 && <br />} {/* Thêm xuống dòng nếu không phải phần tử đầu tiên */}
                                                        {location}
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-x-3'>
                                            <p className='fs-6 text-black mt-3'>Chia sẻ:</p>
                                            <div className='d-flex py-3'>
                                                <FacebookOutlined style={{ fontSize: '15px' }} className='mx-2' />
                                                <TwitterOutlined style={{ fontSize: '15px' }} className='mx-2' />
                                                <LinkedinOutlined style={{ fontSize: '15px' }} className='mx-2' />
                                                <SkypeOutlined style={{ fontSize: '15px' }} className='mx-2' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#f0f7ff] border  rounded mb-3' id="banner-list-job">
                            <div >
                                <div className='shadow-sm p-4'>
                                    <div style={{ backgroundColor: "#f0f7ff", padding: "23px" }}>
                                        <div className="pb-[15px]">
                                            <span className="text-[#949697] block font-thin text-[13px]">
                                                NGÀY ĐĂNG TUYỂN
                                            </span>
                                            <span className="text-[#333333] block font-thin text-[15px]">
                                                {useDateFormat(post?.createdAt)}
                                            </span>
                                            <hr />
                                        </div>
                                        <div className="pb-[15px]">
                                            <span className="text-[#949697] block font-thin text-[13px]">
                                                Cấp bậc
                                            </span>
                                            <span className="text-[#333333] block font-thin text-[15px]">
                                                {post?.level}
                                            </span>
                                            <hr />
                                        </div>

                                        <div className="pb-[15px]">
                                            <span className="text-[#949697] block font-thin text-[13px]">
                                                HÌNH THỨC LÀM VIỆC
                                            </span>
                                            <span className="text-[#333333] block font-thin text-[15px] text-uppercase">
                                                {post?.working_form}
                                            </span>
                                            <hr />
                                        </div>
                                        <div className="pb-[15px]">
                                            <span className="text-[#949697] block font-thin text-[13px]">
                                                SỐ LƯỢNG YÊU CẦU
                                            </span>
                                            <span className="text-[#333333] block font-thin text-[15px]">
                                                {post?.number_of_recruits}
                                            </span>
                                            <hr />
                                        </div>
                                        <div className="pb-[15px]">
                                            <span className="text-[#949697] block font-thin text-[13px]">
                                                GIỚI TÍNH
                                            </span>
                                            <span className="text-[#333333] block font-thin text-[15px]">
                                                {post?.gender}
                                            </span>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <FooterEmployer />
            </div>
        </>
    )
}

export default PostDetail