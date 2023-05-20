import { Button, message, Modal, Popconfirm, Space, Table, Tag } from 'antd'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetPostQuery } from '../../../service/post'
import FooterEmployer from '../../layouts/layoutComponentEmployer/FooterEmployer'
import { EditOutlined, DeleteOutlined, EyeOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useGetCvsByPostIdQuery, useRemoveCvMutation } from '../../../service/manage_cv'
import { ColumnsType } from 'antd/es/table'
import { MessageType } from 'antd/es/message/interface'
import { useGetProfilesQuery, useRemoveProfileMutation } from '../../../service/manage_profile'

const PostDetail = () => {
    const { id } = useParams()
    const { data: post } = useGetPostQuery(id);
    console.log(post)
    const { data: profiles, error, isLoading } = useGetProfilesQuery()
    console.log(profiles)
    const [open, setOpen] = useState(false);
    const text: string = 'Are you sure to delete this CV?';
    // const { data } = useGetCvsByPostIdQuery(post?._id)
    // const cvs: any = data?.cvs
    // console.log(cvs);
    const remove = 'Bạn có muốn xoá hồ sơ này?';
    const approve = 'Bạn có phê duyệt hồ sơ này?';
    const reject = "Bạn có muốn từ chối hồ sơ này?"
    // const [removeCv] = useRemoveCvMutation()
    const [removeProfile] = useRemoveProfileMutation()

    const onHandleRemove = (id: string) => {
        console.log(id);
        const confirm: MessageType = message.info('Xoá thành công')
        if (confirm !== null) {
            removeProfile(id)
        }
    }
    const onHandleApprove = (id: string) => {
        console.log(id);
        const confirm: MessageType = message.info('Phê duyệt thành công')
        if (confirm !== null) {
            console.log(columns)
        }
    }
    const onHandleReject = (id: string) => {
        console.log(id);
        const confirm: MessageType = message.info('Từ chối thành công')
        if (confirm !== null) {

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
            title: 'Ngày sinh',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Ngày nộp',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (_, record) => (
                <>
                    <Tag
                        color={record.status ? "gold" : "green"}
                        key={record.status ? "Đang chờ duyệt" : "Đã duyệt"}>
                        {record.status ? "Đang chờ duyệt" : "Đã duyệt"}
                    </Tag>
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
            dataIndex: '_id',
            key: '_id',
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
                        onConfirm={() => onHandleRemove(record._id)}
                        okText="Đồng ý"
                        cancelText="Không">
                        <DeleteOutlined className='text-danger' />
                    </Popconfirm>

                </Space>
            ),
        },
    ];
    return (
        <>
            <div className="recruitment-details" style={{ background: '#f7f7f7', paddingBottom: '1em' }} >
                <div className='row'>
                    <div style={{ background: 'white', height: '13em', paddingTop: '1em' }}>
                        <div style={{ width: '73%', margin: '0 auto' }}>
                            <div className='recruitment-details1' style={{ padding: 'auto 0' }}>
                                <div className='d-flex justify-content-center align-items-center logo-area-wrapper logo-border' id='logo-area-wrapper'>
                                    <a style={{ background: 'white', justifyContent: 'center', display: 'flex', padding: '5px', border: '1px solid #fff' }}>
                                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F6e%2F10922087.png&w=128&q=75" style={{ width: '100px', height: '60px', margin: '20px 0px' }} />
                                    </a>
                                </div>
                                <div className='cuong1'>
                                    <p>
                                        <a href='#' className='job-title fs-5' style={{ color: '#ff4a53', width: '80%' }}>Giám Đốc Cao Cấp Quan Hệ Khách Hàng - Khách Hàng Doanh Nghiệp Lớn</a>
                                        <a href='#' style={{ opacity: '0.9', fontSize: '14px' }}>Công Ty Cổ Phần Tập Đoàn Masterise</a>
                                        <div style={{ color: '#999', fontSize: '13px' }}>Hồ Chí Minh</div>
                                        <span style={{ color: '#999', fontSize: '13px' }}>Ngày đăng tin: 23-05-2023</span>
                                        <div style={{ color: '#ff7d55', fontWeight: 500 }}>Thương lượng</div>
                                    </p>
                                </div>
                                <button type="button" className="btn" id="related-jobs-search">
                                    Ứng tuyển ngay
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="content-recruitment-details pt-3" style={{ width: '73%', margin: '0 auto' }}>
                        <div className='content-recruitment-details'>
                            <div className='pt-5 pl-5' style={{ background: 'white' }}>
                                <h1 className='text-3xl font-medium '>{post?.job_name}</h1>
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
                                        <p className='fs-3'>Mô tả công việc:</p>
                                        <div className='fs-6 py-3'>
                                            {post?.job_description}
                                        </div>
                                        {/* <a href="#" className="text-decoration pt-3 text-blue-500 fs-5" >
                                            Xem toàn bộ Mô Tả Công Việc
                                        </a> */}
                                        <div className='flex flex-col py-3'>
                                            <p className='fs-3'>Yêu cầu:</p>
                                            <div className='fs-6'>-Giới tính: {post?.gender}</div>
                                            <div className='fs-6'>- {post?.requirements}</div>
                                        </div>
                                        <div className='py-3 fs-6'>
                                            Công ty chúng tôi luôn sẵn sàng hỗ trợ tận tình các doanh nghiệp trong nhiều ngành khác nhau mở rộng quy mô và thuê ngoài dịch vụ giao hàng theo nhu cầu của bạn.
                                        </div>
                                        <div className='flex flex-col fs-5'>
                                            Một số dịch vụ nổi bật của chúng tôi là:

                                            <span className='py-2 fs-6'>- Giao hàng Siêu tốc 2h</span>

                                            <span className='pb-2 fs-6'>- Giao hàng trong 24h</span>

                                            <span className='pb-2 fs-6'>- Giao hàng Tiết kiệm Nội thành </span>

                                            <span className='pb-2 fs-6'>- Chuyển phát Bưu kiện TMĐT trong nước</span>
                                        </div>
                                        <div className='flex flex-col py-3'>
                                            <p className='fs-3'>Kinh nghiệm:</p>
                                            <div className='fs-6'>- 1 năm kinh nghiệm</div>
                                        </div>
                                        <div className='flex flex-col py-3'>
                                            <p className='fs-3'>Địa điểm làm việc:</p>
                                            <div className='fs-6'>- {post?.work_location}</div>
                                        </div>
                                        <p className='fs-4'>chia sẻ</p>
                                        <div className='d-flex py-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook mx-2" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter mx-2" viewBox="0 0 16 16">
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                            <img src='/src/image/logo-zalo.jpg' className='mx-2' width="16" height="16" />
                                            <img src='/src/image/linked.jpg' className='mx-2' width="16" height="16" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-0' id="banner-list-job">
                            <div>
                                <div className='border-1 shadow-sm p-4'>
                                    <div className='pb-2'>
                                        <h2 className='font-semibold text-xl mb-3'>Thông tin công việc</h2>
                                        <div className='flex mb-2'>
                                            <div className="w-[150px] text-gray-500">Id công việc: </div>
                                            <div>01</div>
                                        </div>
                                        <div className='flex mb-2'>
                                            <div className="w-[150px] text-gray-500">Ngày đăng: </div>
                                            <div>{post?.createdAt}</div>
                                        </div>
                                        <div className='flex mb-2'>
                                            <div className="w-[150px] text-gray-500">Chỉ còn: </div>
                                            <div>5 ngày 8 giờ</div>
                                        </div>
                                        <div className='flex mb-2'>
                                            <div className="w-[150px] text-gray-500">Địa điểm: </div>
                                            <div>{post?.work_location}</div>
                                        </div>
                                        <div className='flex mb-2'>
                                            <div className="w-[150px] text-gray-500">Ngân sách: </div>
                                            <div>
                                                {post?.job_salary}</div>
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
                                        <Table dataSource={profiles} columns={columns}
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