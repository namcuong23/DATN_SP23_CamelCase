import React from 'react'
import { BookOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, message } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import IPost from '../../../interface/post';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useAddPostMutation } from '../../../service/post';

const PostAdd = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const [addPost] = useAddPostMutation()
    const onHandleAdd: SubmitHandler<IPost> = (post: IPost) => {
        console.log(post);
        try {
            addPost({ ...post, post_status: null, user_id: 0 })
            message.info('Dang tin thanh cong.')
            navigate('/home/posts')
        } catch (error) { }
    }
    return (
        <>
            <div className='mt-4 w-100'>
                <h1 className='mb-3 text-center text-3xl font-bold text-[#44454A]'>Đăng tin</h1>
                <Form onFinish={onHandleAdd} form={form} name="add" layout="vertical">
                    <div className='max-w-[700px] mx-auto'>
                        <div className='d-flex align-items-top'>
                            <div className=''>
                                <BookOutlined style={{ fontSize: '300%' }}
                                    className='text-[#002B7D] border-4 border-[#002B7D] p-3 rounded-circle' />
                            </div>
                            <div className='w-100 ms-3'>
                                <div className='fs-4 fw-'>Việc cần tuyển</div>
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
                                    <Input.TextArea rows={10} placeholder='Nhập mô tả công việc' />
                                </Form.Item>
                                <Form.Item name="requirements" label="Yêu cầu tuyển dụng"
                                    rules={[
                                        { required: true, message: 'Please input your requirements.' },
                                        { min: 10, message: 'This field is must be at least 10 characters.' }
                                    ]}>
                                    <Input.TextArea rows={10} placeholder='Nhập yêu cầu tuyển dụng' />
                                </Form.Item>
                                <Form.Item name="working_form" label="Hình thức làm việc"
                                    rules={[{ required: true, message: 'Please choose working form.' }]}>
                                    <Select defaultValue={'0'}>
                                        <Select.Option value="0">- Chọn hình thức làm việc -</Select.Option>
                                        <Select.Option value="online">Online</Select.Option>
                                        <Select.Option value="offline">Offline</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name="gender" label="Giới tính"
                                    rules={[{ required: true, message: 'Please choose a gender.' }]}>
                                    <Select defaultValue={'0'}>
                                        <Select.Option value="0">- Chọn giới tính -</Select.Option>
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
                        <button className='bg-[#FE7D55] hover:bg-[#FD6333] text-white text-[16px] py-2 px-8 rounded' type="submit">
                            Đăng
                        </button>
                        <NavLink to={'/home/posts'}>
                            <button
                                className='text-[#838383] hover:text-[#FE7D55] border-1 border-[#686868] hover:border-[#FE7D55] ms-4 py-2 px-8 rounded' type="button">
                                Trở về
                            </button>
                        </NavLink>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default PostAdd