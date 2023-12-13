import React from 'react'
import { useState } from 'react'
import { ColumnsType } from 'antd/es/table'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../../app/hook'
import { useGetPostQuery } from '../../../service/post'
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

const PostDetail: React.FC = (): any => {
    const { id } = useParams()
    const { isLoggedIn } = useAppSelector((rs) => rs.authEmpr)
    const navigate = useNavigate()
    const { data: post } = useGetPostQuery(id);
    const [open, setOpen] = useState(false);
    
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
                    <Popconfirm placement="top"
                        title={"Chấp nhận"}
                        onConfirm={() => {
                            onHandleNotification(record);
                            onHandleApprove(record._id)
                        }}
                        okText="Đồng ý"
                        cancelText="Không"
                        className='leading-[22px] flex items-center'
                    >
                        <CheckOutlined className='text-success' />
                    </Popconfirm>

                    <Popconfirm 
                        title={remove}
                        onConfirm={() => onHandleDelete(record._id)}
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
                                <div className='w-[85%] flex items-center'>
                                    <div className='d-flex justify-content-center align-items-center logo-area-wrapper logo-border w-[20%]' id='logo-area-wrapper'>
                                        <a style={{ background: 'white', justifyContent: 'center', display: 'flex', padding: '5px', border: '1px solid #fff' }}>
                                            <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F6e%2F10922087.png&w=128&q=75" style={{ width: '100px', height: '60px', margin: '20px 0px' }} />
                                        </a>
                                    </div>
                                    <div className='cuong1 w-[80%]'>
                                        <p>
                                            <a href='#' className='job-title fs-4' style={{ color: 'black', width: '80%' }}>{post?.job_name}</a>
                                            <div style={{ color: 'black', fontSize: '13px' }}>Địa điểm làm việc: {post?.work_location}</div>
                                            <span style={{ color: 'black', fontSize: '13px' }}>Ngày đăng tin: {(new Date(post?.createdAt)).toLocaleDateString()}</span>
                                            <div style={{ color: '#ff4a53', fontWeight: 500 }}>{(post?.job_salary)?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
                                        </p>
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
                                            <div className='row'>
                                                <div className='col-1'><EnvironmentOutlined style={{ fontSize: '20px' }} /></div>
                                                <div className='fs-6 col'>{post?.work_location}</div>
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
                                    <div className='pb-2'>
                                        <div className='flex mb-2'>
                                            <div style={{ fontSize: '30px', color: 'black' }}><FileDoneOutlined /></div>
                                            <div>
                                                <div className="w-[250px] text-gray-400 ml-3 mt-2" >NGÀY ĐĂNG TUYỂN: </div>
                                                <div className="w-[250px] ml-3">{(new Date(post?.createdAt)).toLocaleDateString()}</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='flex mb-2'>
                                            <div style={{ fontSize: '30px', color: 'black' }}><EnvironmentOutlined /></div>
                                            <div>
                                                <div className="w-[250px] text-gray-400 ml-3 mt-2" >ĐỊA ĐIỂM: </div>
                                                <div className="w-[250px] ml-3">{post?.work_location}</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='flex mb-2'>
                                            <div style={{ fontSize: '30px', color: 'black' }}><DollarOutlined /></div>
                                            <div>
                                                <div className="w-[250px] text-gray-400 ml-3 mt-2" >NGÂN SÁCH: </div>
                                                <div className="w-[250px] ml-3">{(post?.job_salary)?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='flex mb-2'>
                                            <div style={{ fontSize: '30px', color: 'black' }}><MobileOutlined /></div>
                                            <div>
                                                <div className="w-[250px] text-gray-400 ml-3 mt-2" >HÌNH THỨC LÀM VIỆC: </div>
                                                <div className="w-[250px] ml-3">{post?.working_form}</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='flex mb-2'>
                                            <div style={{ fontSize: '30px', color: 'black' }}><EuroCircleOutlined /></div>
                                            <div>
                                                <div className="w-[250px] text-gray-400 ml-3 mt-2" >HÌNH THỨC TRẢ LƯƠNG: </div>
                                                <div className="w-[250px] ml-3">Trả theo dự án</div>
                                            </div>
                                        </div>
                                        <hr />

                                    </div>
                                    <button
                                        className='bg-[#FE7D55] hover:bg-[#FD6333] text-white font-semibold w-100 py-2 rounded mt-1'
                                        onClick={showModal} >
                                        Danh sách ứng viên
                                    </button>
                                    <Modal
                                        title="Danh sách ứng viên"
                                        open={open}
                                        onCancel={handleCancel}
                                        okButtonProps={{ hidden: true }}
                                        cancelButtonProps={{ hidden: true }}
                                        width={1000}
                                    >
                                        <Table dataSource={cvs} columns={columns}
                                            pagination={{ defaultPageSize: 6 }}
                                        />

                                    </Modal>
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