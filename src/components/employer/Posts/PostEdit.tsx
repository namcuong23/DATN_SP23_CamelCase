import { Button, Form, Input, message, Select } from 'antd'
import { BookOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import IPost from '../../../interface/post'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useGetPostQuery, useEditPostMutation } from '../../../service/post';
import UseAuth from '../../auth/UseAuth';
import { useGetProfileQuery } from '../../../service/manage_profile';
import ImanageProfile from '../../../interface/manageProfile';

const PostEdit = () => {
    const navigate = useNavigate()
    const { id } = useParams();

    const [form] = Form.useForm();
    const { data: post } = useGetPostQuery(id as string)
    form.setFieldsValue(post)

    const [editPost] = useEditPostMutation()
    const currentUser: any = UseAuth()
    const data: any = useGetProfileQuery(currentUser?.email)
    const profile: ImanageProfile = data.currentData
    const onHandleEdit = (post: IPost) => {
        console.log(post);
        try {
            editPost({ ...post, post_status: false, user_id: profile?._id, _id: id })
            message.success('Sửa thành công.')
            navigate('/home/posts')
        } catch (error) {

        }
    }

    return (
        <>
            <div className='mt-4'>
                <h1 className='text-center text-3xl font-bold text-[#44454A]'>Chỉnh sửa bài viết</h1>
                <Form layout="vertical" onFinish={onHandleEdit} form={form}>
                    <div className='max-w-[700px] mx-auto'>
                        <div className='d-flex align-items-top'>
                            <div>
                                <BookOutlined style={{ fontSize: '300%' }}
                                    className='text-[#002B7D] border-4 border-[#002B7D] p-3 rounded-circle' />
                            </div>
                            <div className='w-100 ms-3'>
                                <div className='fs-4'>Việc cần tuyển</div>
                                <Form.Item name="job_name" label="Tên công việc cần tuyển"
                                    rules={[
                                        { required: true, message: "Please input your job name." },
                                    ]}>
                                    <Input placeholder='VD: Dịch vụ dọn dẹp' />
                                </Form.Item>
                            </div>
                        </div>
                        <div className='d-flex align-items-top'>
                            <div>
                                <BookOutlined style={{ fontSize: '300%' }}
                                    className='text-[#002B7D] border-4 border-[#002B7D] p-3 rounded-circle' />
                            </div>
                            <div className='w-100 ms-3'>
                                <div className='fs-4'>Thông tin về yêu cầu tuyển dụng</div>
                                <Form.Item name="job_description" label="Mô tả công việc"
                                    rules={[
                                        { required: true, message: 'Please input your job description.' },
                                        { min: 10, message: 'This field is must be at least 10 characters.' }
                                    ]}>
                                    <Input.TextArea rows={10} />
                                </Form.Item>
                                <Form.Item name="requirements" label="Yêu cầu tuyển dụng"
                                    rules={[
                                        { required: true, message: 'Please input your requirements.' },
                                        { min: 10, message: 'This field is must be at least 10 characters.' }
                                    ]}>
                                    <Input.TextArea rows={10} />
                                </Form.Item>
                                <Form.Item name="working_form" label="Hình thức làm việc"
                                    rules={[{ required: true, message: 'Please choose working form.' }]}>
                                    <Select>
                                        <Select.Option value="online">Online</Select.Option>
                                        <Select.Option value="offline">Offline</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name="gender" label="Giới tính"
                                    rules={[{ required: true, message: 'Please choose a gender.' }]}>
                                    <Select>
                                        <Select.Option value="nam">Nam</Select.Option>
                                        <Select.Option value="nữ">Nữ</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name="number_of_recruits" label="Số lượng"
                                    rules={[
                                        { required: true, message: 'Please input number of recruits.' },
                                        // { type: 'number', message: 'This is not a number.' }
                                    ]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name="work_location" label="Khu vực"
                                    rules={[{ required: true, message: 'Please input work location.' }]}>
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                        <div className='d-flex align-items-top'>
                            <div>
                                <MoneyCollectOutlined style={{ fontSize: '300%' }}
                                    className='text-[#002B7D] border-4 border-[#002B7D] p-3 rounded-circle' />
                            </div>
                            <div className='w-100 ms-3'>
                                <div className='fs-4'>Ngân sách dự kiến</div>
                                <Form.Item name="job_salary" label="Số tiền chi trả dự kiến"
                                    rules={[
                                        { required: true, message: 'Please input job salary.' },
                                        // { type: 'number', message: 'This is not a number.' }
                                    ]}>
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className='text-center sticky bottom-0 bg-gray-100 border-t-2 py-3'>
                        <div>
                            <button className='bg-[#FE7D55] hover:bg-[#FD6333] text-white text-[16px] py-2 px-8 rounded' type="submit">
                                Sửa
                            </button>
                            <NavLink to={'/home/posts'}>
                                <button
                                    className='text-[#838383] hover:text-[#FE7D55] border-1 border-[#686868] hover:border-[#FE7D55] ms-4 py-2 px-8 rounded' type="button">
                                    Trở về
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default PostEdit