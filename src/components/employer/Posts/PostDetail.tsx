import { useState } from 'react'
import { ColumnsType } from 'antd/es/table'
import { MessageType } from 'antd/es/message/interface'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../../app/hook'
import { useGetPostQuery } from '../../../service/post'
import { useApproveCvMutation, useGetCvsByPostIdQuery, useRefuseCvMutation } from '../../../service/manage_cv'
import { Modal, Popconfirm, Space, Tag, message, Table } from 'antd'
import FooterEmployer from '../../layouts/layoutComponentEmployer/FooterEmployer'
import { CloseOutlined, CheckOutlined, DeleteOutlined, UserAddOutlined } from '@ant-design/icons'
import { useCreateCandidateMutation } from '../../../service/employer/candidate'

const PostDetail = (): any => {
    const { id } = useParams()
    const { isLoggedIn } = useAppSelector((rs) => rs.auth)
    const navigate = useNavigate()
    const { data: post } = useGetPostQuery(id);
    const [open, setOpen] = useState(false);
    const { data } = useGetCvsByPostIdQuery(post?._id)
    const cvs = data?.cvs
    const remove = 'Bạn có muốn xoá hồ sơ này?';
    const approve = 'Bạn có phê duyệt hồ sơ này?';
    const reject = "Bạn có muốn từ chối hồ sơ này?"
    const [addCandidate] = useCreateCandidateMutation()


    const onHandleAdd = async (id: string) => {
        try {
            const response = await addCandidate({ id: id });
            if ('data' in response && response.data) {
                message.success('Thêm ứng viên phù hợp thành công');
            } else if ('error' in response) {
                message.error('Có lỗi xảy ra khi thêm ứng viên.');
                console.log(data);
            }
        } catch (error) {
            console.error(error);
        }
    }


    const [approveCv] = useApproveCvMutation()
    const onHandleApprove = (id: string) => {
        console.log(id);
        const confirm: MessageType = message.info('Phê duyệt thành công')
        if (confirm !== null) {
            approveCv(id)
        }
    }
    const [refuseCv] = useRefuseCvMutation()
    const onHandleReject = (id: string) => {
        console.log(id);
        const confirm: MessageType = message.info('Từ chối thành công')
        if (confirm !== null) {
            refuseCv(id)
        }
    }

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        setOpen(false);
    };

    const columns: ColumnsType<any> = [
        {
            title: 'Tên ứng viên',
            dataIndex: 'name',
            render: (_, record) => (<Link to={`/home/manage-profile/${record._id}`} >{record.name}</Link>),
        },
        {
            title: 'Tuổi',
            dataIndex: 'age',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
        },
        {
            title: 'Ngày nộp',
            dataIndex: 'createdAt',
            render: (_, record) => <div>{new Date((record?.createdAt)).toLocaleDateString()}</div>,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (_, record) => (
                <>
                    {
                        record.status == null ? <Tag
                            color={'gold'}
                            key={'Đang chờ duyệt'}>
                            Đang chờ duyệt
                        </Tag>
                            :
                            <Tag
                                color={record.status ? "green" : "red"}
                                key={record.status ? "Đã duyệt" : "Từ chối"}>
                                {record.status ? "Đã duyệt" : "Từ chối"}
                            </Tag>
                    }
                </>
            ),
            filters: [
                {
                    text: 'Đã duyệt',
                    value: 'Đã duyệt',
                },
                {
                    text: 'Đang chờ duyệt',
                    value: 'Đang chờ duyệt',
                },
            ],
            onFilter: (value: any, record) => record.status.indexOf(value) === 0,
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            render: (_, record) => (
                <Space size="middle">

                    <Popconfirm placement="top"
                        title={reject}
                        onConfirm={() => onHandleReject(record._id)}
                        okText="Đồng ý"
                        cancelText="Không">
                        <CloseOutlined className='text-dark' />
                    </Popconfirm>

                    <Popconfirm placement="top"
                        title={approve}
                        onConfirm={() => onHandleApprove(record._id)}
                        okText="Đồng ý"
                        cancelText="Không">
                        <CheckOutlined className='text-success' />
                    </Popconfirm>

                    <Popconfirm placement="top"
                        title={remove}
                        onConfirm={() => onHandleAdd(record._id)}
                        okText="Đồng ý"
                        cancelText="Không">
                        <UserAddOutlined className='text-primary'/>
                    </Popconfirm>

                </Space>
            ),
        },
    ];

    if (!isLoggedIn) {
        return navigate('/login-epr')
    }

    return (
        <>
            <div className="recruitment-details" style={{ background: '#f7f7f7', paddingBottom: '1em' }} >
                <div className='row'>
                    <div style={{ background: 'white', height: '13em', paddingTop: '1em' }}>
                        <div style={{ width: '73%', margin: '0 auto' }}>
                            <div className='recruitment-details1' style={{ padding: 'auto 0' }}>
                                <div className='w-[85%] flex items-center'>
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
                            </div>
                        </div>
                    </div>
                    <div className="content-recruitment-details pt-3" style={{ width: '80%', margin: '0 auto' }}>
                        <div className='content-recruitment-details'>
                            <div className='pt-2 pl-5' style={{ background: 'white' }}>
                                <div className='w-[600px]'>
                                    <div className='flex flex-col p-3'>
                                        <p className='fs-3'>Mô tả công việc:</p>
                                        <div className='fs-6 py-3'>
                                            {post?.job_description}
                                        </div>
                                        <div className='flex flex-col py-3'>
                                            <p className='fs-3'>Yêu cầu:</p>
                                            <div className='fs-6'>{post?.requirements}</div>
                                        </div>
                                        <div className='flex flex-col py-3'>
                                            <p className='fs-3'>Địa điểm làm việc:</p>
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
                        <div className='bg-white border-0 w' id="banner-list-job">
                            <div>
                                <div className='border-1 shadow-sm p-4'>
                                    <div className='pb-2'>
                                        <h2 className='font-semibold text-xl mb-3'>Thông tin công việc</h2>
                                        <div className='flex mb-2'>
                                            <div className="w-[150px] text-gray-500">Ngày đăng: </div>
                                            <div>{(new Date(post?.createdAt)).toLocaleDateString()}</div>
                                        </div>
                                        {/* <div className='flex mb-2'>
                                            <div className="w-[150px] text-gray-500">Chỉ còn: </div>
                                            <div>5 ngày 8 giờ</div>
                                        </div> */}
                                        <div className='flex mb-2'>
                                            <div className="w-[150px] text-gray-500">Địa điểm: </div>
                                            <div>{post?.work_location}</div>
                                        </div>
                                        <div className='flex mb-2'>
                                            <div className="w-[150px] text-gray-500">Ngân sách: </div>
                                            <div>
                                                {(post?.job_salary)?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
                                        </div>
                                        <div className='flex mb-2'>
                                            <div className="w-[150px] text-gray-500">Hình thức làm việc: </div>
                                            <div className='text-orange-500 font-semibold'>{post?.working_form}</div>
                                        </div>
                                        <div className='flex mb-2'>
                                            <div className="w-[150px] text-gray-500">Hình thức trả lương: </div>
                                            <div>Trả theo dự án</div>
                                        </div>
                                    </div>
                                    <button
                                        className='bg-[#FE7D55] hover:bg-[#FD6333] text-white font-semibold w-100 py-2 rounded mt-5'
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
            <div className='mt-60'>
                <FooterEmployer />
            </div>
        </>
    )
}

export default PostDetail