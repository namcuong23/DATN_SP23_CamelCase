import { useEffect, useState } from 'react'
import { Button, Form, Input, Popover, Select, Space, message } from 'antd';

import { NavLink, useNavigate } from 'react-router-dom';
import IPost from '../../../interface/post';
import { useAddPostMutation } from '../../../service/post';
import { apiGetProvinces } from '../../../service/api';
import { useAppSelector } from '../../../app/hook';
import { useGetUserEprByEmailQuery } from '../../../service/auth_employer';
import { useGetCareersQuery } from '../../../service/admin';

import './Post.css'

const PostAdd = (): any => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const { data: career } = useGetCareersQuery()
    const [addPost] = useAddPostMutation()
    const { email, isLoggedIn } = useAppSelector((res: any) => res.authEmpr)
    const { data: user }: any = useGetUserEprByEmailQuery(email)
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
            const data:any = await addPost({ 
                ...post, 
                logo: user?.image,
                post_status: null, 
                user_id: user?._id 
            })
            if(data?.error?.status == 400){
                message.warning(data.error.data.message)
            }
            if(data.data){
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
                <div
                    className='relative pb-[32px] mb-[24px]'
                >
                    <h1 className='post-add_title text-center text-3xl font-bold text-[#44454A]'>Đăng tin</h1>
                </div>
                <Form 
                    onFinish={onHandleAdd} 
                    form={form} 
                    name="add" 
                    layout="vertical"
                >
                    <div className='max-w-[70%] mx-auto'>
                        <div className='d-flex align-items-top'>
                            <div className='w-100 ms-3'>
                                <div className='fs-4 font-[600]'>Việc cần tuyển</div>
                                <Form.Item name="job_name" label="Tên công việc cần tuyển"
                                    rules={[
                                        { required: true, message: "Please input your job name." },
                                    ]}>
                                    <Input 
                                        placeholder='VD: Dịch vụ dọn dẹp' 
                                        size='large' 
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div className='d-flex align-items-top'>
                            <div className='w-100 ms-3'>
                                <div className='fs-4 font-[600]'>Thông tin về yêu cầu tuyển dụng</div>
                                <Form.Item name="job_description" label="Mô tả công việc"
                                    rules={[
                                        { required: true, message: 'Please input your job description.' },
                                        { min: 10, message: 'This field is must be at least 10 characters.' }
                                    ]}>
                                    <Input.TextArea rows={7} placeholder='Nhập mô tả công việc' />
                                </Form.Item>
                                <Form.Item name="requirements" label="Yêu cầu tuyển dụng"
                                    rules={[
                                        { required: true, message: 'Please input your requirements.' },
                                        { min: 10, message: 'This field is must be at least 10 characters.' }
                                    ]}>
                                    <Input.TextArea rows={7} placeholder='Nhập yêu cầu tuyển dụng' />
                                </Form.Item>
                                <Space.Compact 
                                    block
                                    size="large"
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <Form.Item 
                                        name="working_form" 
                                        label="Hình thức làm việc"
                                        rules={[{ required: true, message: 'Please choose working form.' }]}
                                        initialValue={'0'}
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        <Select 
                                            size='large'
                                        >
                                            <Select.Option value="0">- Chọn hình thức làm việc -</Select.Option>
                                            <Select.Option value="Toàn thời gian">Toàn thời gian</Select.Option>
                                            <Select.Option value="Bán thời gian">Bán thời gian</Select.Option>
                                            <Select.Option value="Việc làm online">Việc làm online</Select.Option>
                                            <Select.Option value="Thực tập">Thực tập</Select.Option>
                                            <Select.Option value="Nghề tự do">Nghề tự do</Select.Option>
                                            <Select.Option value="Khác">
                                                Khác
                                            </Select.Option>
                                            
                                        </Select>
                                    </Form.Item>
                                    <Form.Item 
                                        name="level" 
                                        label="Cấp bậc"
                                        rules={[{ required: true, message: 'Please choose level.' }]}
                                        initialValue={'0'}
                                        style={{
                                            width: '100%',
                                            marginLeft: '24px',
                                        }}
                                    >
                                        <Select 
                                            size='large'
                                        >
                                            <Select.Option value="0">- Chọn cấp bậc -</Select.Option>
                                            <Select.Option value="Thực tập sinh/Sinh viên">Thực tập sinh/Sinh viên</Select.Option>
                                            <Select.Option value="Mới tốt nghiệp">Mới tốt nghiệp</Select.Option>
                                            <Select.Option value="Nhân viên">Nhân viên</Select.Option>
                                            <Select.Option value="Trưởng phòng">Trưởng phòng</Select.Option>
                                            <Select.Option value="Giám Đốc và Cấp Cao Hơn">Giám Đốc và Cấp Cao Hơn</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Space.Compact>
                                <Form.Item 
                                    name="gender" 
                                    label="Giới tính"
                                    rules={[{ required: true, message: 'Please choose a gender.' }]}
                                    initialValue={'0'}
                                >
                                    <Select size='large'>
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
                                    <Input size='large' />
                                </Form.Item>
                                <Form.Item name="career" label="Ngành Nghề"
                                    rules={[{ required: true, message: 'Please input career.' }]}
                                >
                                    <Select 
                                        size='large' 
                                        allowClear
                                        placeholder='Chọn ngành nghề'
                                    >
                                        {
                                            career ? career?.map((item: any, index: any) =>
                                                <Select.Option key={index} value={item._id}>{item.name}</Select.Option>
                                            ) : ''
                                        }
                                    </Select>
                                </Form.Item>
                                <Form.Item 
                                    name="work_location" 
                                    label="Khu vực"
                                    rules={[{ required: true, message: 'Please input work location.' }]}
                                >
                                    {/* <Input /> */}
                                    <Select 
                                        size='large'
                                        mode='multiple'
                                        allowClear
                                        placeholder='Chọn khu vực'
                                    >
                                        {
                                            provinces ? provinces?.map((province: any, index: number) =>
                                                <Select.Option 
                                                    key={index} 
                                                    value={province.province_name}
                                                >
                                                    {province.province_name}
                                                </Select.Option>
                                            ) : ''
                                        }

                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                        <div className='d-flex align-items-top'>
                            <div className='w-100 ms-3'>
                                <div className='fs-4 font-[600]'>Ngân sách dự kiến</div>
                                <Space 
                                    style={{
                                        width: '100%',
                                        marginTop: '12px'
                                    }}
                                >
                                    <Form.Item 
                                        name="minimum" 
                                        style={{
                                            width: '300px',
                                        }}
                                    >
                                        <Select 
                                            size='large'
                                            placeholder="Tối thiểu"

                                        >
                                            <Select.Option value="100">100</Select.Option>
                                            <Select.Option value="500">500</Select.Option>
                                            <Select.Option value="1000">1000</Select.Option>
                                            <Select.Option value="1500">1500</Select.Option>
                                            <Select.Option value="2000">2000</Select.Option>
                                            <Select.Option value="3000">3000</Select.Option>
                                            <Select.Option value="5000">5000</Select.Option>
                                            
                                        </Select>
                                    </Form.Item>
                                    <Form.Item 
                                        name="maximum" 
                                        style={{
                                            width: '300px',
                                            marginLeft: '24px',
                                        }}
                                    >
                                        <Select 
                                            size='large'
                                            placeholder="Tối đa"

                                        >
                                            <Select.Option value="500">500</Select.Option>
                                            <Select.Option value="1000">1000</Select.Option>
                                            <Select.Option value="1500">1500</Select.Option>
                                            <Select.Option value="2000">2000</Select.Option>
                                            <Select.Option value="3000">3000</Select.Option>
                                            <Select.Option value="5000">5000</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Space>
                            </div>
                        </div>
                    </div>
                    <div className='text-center sticky bottom-0 bg-white border-t-2 py-3'>
                        <button className='bg-[#FE7D55] hover:bg-[#FD6333] text-white text-[16px] py-1 px-6 rounded' type="submit">
                            Đăng
                        </button>
                        <NavLink to={'/home/posts'}>
                            <button
                                className='text-[#838383] hover:text-[#FE7D55] border-1 border-[#686868] hover:border-[#FE7D55] ms-4 py-1 px-6 rounded' 
                                type="button"
                            >
                                Quay lại
                            </button>
                        </NavLink>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default PostAdd