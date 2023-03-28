import { Button, Form, Input, message, Select } from 'antd'
import { BookOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import IPost from '../../../interface/post'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useGetPostQuery, useEditPostMutation } from '../../../service/post';

const PostEdit = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const { id } = useParams();
    const { data } = useGetPostQuery(id as string)
    const [editPost] = useEditPostMutation()
    const onHandleEdit = (post: IPost) => {
        console.log(post);
        try {
            editPost({ ...post, post_status: false, user_id: 0, _id: id })
            message.info('Sửa thành công.')
            navigate('/posts')
        } catch (error) {

        }
    }

    return (
        <>
            <div style={{ maxWidth: '700px' }} className='mx-auto'>
                <h1 className='text-center fw-normal'>Chỉnh sửa bài viết</h1>
                <Form layout="vertical" onFinish={onHandleEdit} form={form} initialValues={data}>
                    <div className='d-flex align-items-top'>
                        <div>
                            <BookOutlined style={{ fontSize: '300%' }}
                                className='text-success border border-4 border-success p-3 rounded-circle' />
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
                                className='text-success border border-4 border-success p-3 rounded-circle' />
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
                                className='text-success border border-4 border-success p-3 rounded-circle' />
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
                    <Form.Item className='text-center'>
                        <Button className='bg-success text-white' htmlType="submit">
                            Sửa
                        </Button>
                        <NavLink to={'/posts'}>
                            <Button className='bg-success text-white ms-2' htmlType="button">
                                Trở về
                            </Button>
                        </NavLink>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default PostEdit