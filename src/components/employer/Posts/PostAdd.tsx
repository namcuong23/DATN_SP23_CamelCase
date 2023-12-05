import React, { useEffect, useState } from 'react'
import { BookOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { Form, Input, Select, message } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import IPost from '../../../interface/post';
import { useAddPostMutation } from '../../../service/post';
import { apiGetProvinces } from '../../../service/api';
import { useAppSelector } from '../../../app/hook';
import { useGetUserEprByEmailQuery } from '../../../service/auth_employer';
import { useGetCareersQuery } from '../../../service/admin';

const PostAdd = (): any => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const { data: career, error, isLoading } = useGetCareersQuery()
    const [addPost] = useAddPostMutation()
    const { email, isLoggedIn } = useAppSelector((res: any) => res.authEmpr)
    const data: any = useGetUserEprByEmailQuery(email)
    const user: any = data.currentData
    const [provinces, setProvinces] = useState<any>([])

    useEffect(() => {
        const fetchProvinces = async () => {
            const { data: response }: any = await apiGetProvinces()
            setProvinces(response?.results);
        }
        fetchProvinces()
    }, [])

    const onHandleAdd: any = async (post: IPost) => {
        try {
            const data:any = await addPost({ ...post, post_status: null, user_id: user?._id })
            console.log(data);
            if(data?.error?.status == 400){
                message.error(data.error.data.message)
            }
            else if(data.data){
                message.success('Đăng tin thành công.')
                 navigate('/home/posts')
            }
        } catch (error:any) {
           console.log(error);
        }
    }

    if (!isLoggedIn) {
        return navigate('/login-epr')
    }

    return (
        <>
            <div className='mt-4 w-100'>
                <h1 className='mb-3 text-center text-3xl font-bold text-[#44454A]'>Đăng tin</h1>
                <Form onFinish={onHandleAdd} form={form} name="add" layout="vertical">
                    <div className='max-w-[700px] mx-auto'>
                        <div className='d-flex align-items-top'>
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
                                        <Select.Option value="Không yêu cầu">Không yêu cầu</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name="number_of_recruits" label="Số lượng"
                                    rules={[
                                        { required: true, message: 'Please input number of recruits.' },
                                        // { type: 'number', message: 'This is not a number.' }
                                    ]}>
                                    <Input />
                                </Form.Item>
                                {/* <Form.Item name="career" label="Ngành Nghề"
                                    rules={[{ required: true, message: 'Please input career.' }]}> */}
                                    {/* <Input /> */}
                                    {/* <Select defaultValue={'0'}>
                                        <Select.Option value='0'>- Chọn Ngành Nghề -</Select.Option>
                                        {
                                            career ? career?.map((item: any) =>
                                                <Select.Option value={item._id}>{item.name}</Select.Option>
                                            ) : ''
                                        }
                                    </Select>
                                </Form.Item> */}
                                <Form.Item name="work_location" label="Khu vực"
                                    rules={[{ required: true, message: 'Please input work location.' }]}>
                                    {/* <Input /> */}
                                    <Select defaultValue={'0'}>
                                        <Select.Option value="0">- Chọn khu vực -</Select.Option>
                                        {
                                            provinces ? provinces?.map((province: any) =>
                                                <Select.Option value={province.province_name}>{province.province_name}</Select.Option>
                                            ) : ''
                                        }

                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                        <div className='d-flex align-items-top'>
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
                    <div className='text-center sticky bottom-0 bg-white border-t-2 py-3'>
                        <button className='bg-[#FE7D55] hover:bg-[#FD6333] text-white text-[16px] py-1 px-6 rounded' type="submit">
                            Đăng
                        </button>
                        <NavLink to={'/home/posts'}>
                            <button
                                className='text-[#838383] hover:text-[#FE7D55] border-1 border-[#686868] hover:border-[#FE7D55] ms-4 py-1 px-6 rounded' type="button">
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