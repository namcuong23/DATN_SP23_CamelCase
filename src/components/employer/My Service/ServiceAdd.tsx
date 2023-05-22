import React, { useEffect, useState } from 'react'
import { BookOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, message } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import IService from '../../../interface/employer/service';
import { useCreateServiceMutation } from '../../../service/employer/service';
import UseAuth from '../../auth/UseAuth';
import { apiGetProvinces } from '../../../service/api';
import { useGetEprProfileQuery } from '../../../service/employer/profileEpr';
import IProfileEpr from '../../../interface/employer/profileEpr';

const ServiceAdd = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const [addService] = useCreateServiceMutation()
    const currentUser: any = UseAuth()
    const data: any = useGetEprProfileQuery(currentUser?.email)
    const profile: IProfileEpr = data.currentData
    const [provinces, setProvinces] = useState<any>([])

    useEffect(() => {
        const fetchProvinces = async () => {
            const { data: response }: any = await apiGetProvinces()
            setProvinces(response?.results);
        }
        fetchProvinces()
    }, [])

    const onHandleAdd: any = (service: IService) => {
        try {
            addService({ ...service})
            message.success('Tạo service thành công.')
            navigate('/home/services')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='mt-4 w-100'>
                <h1 className='mb-3 text-center text-3xl font-bold text-[#44454A]'>service</h1>
                <Form onFinish={onHandleAdd} form={form} name="add" layout="vertical">
                    <div className='max-w-[700px] mx-auto'>
                        <div className='d-flex align-items-top'>
                            <div className=''>
                                <BookOutlined style={{ fontSize: '300%' }}
                                    className='text-[#002B7D] border-4 border-[#002B7D] p-3 rounded-circle' />
                            </div>
                            <div className='w-100 ms-3'>
                                <div className='fs-4 fw-'>Tên dịch vụ</div>
                                <Form.Item name="name" label="Tên công tên dịch vụ"
                                    rules={[
                                        { required: true, message: "Please input your job name." },
                                    ]}>
                                    <Input placeholder='VD: Nạp lần đầu' />
                                </Form.Item>
                            </div>
                        </div>
                        <div className='d-flex align-items-top'>
                            <div>
                                <BookOutlined style={{ fontSize: '300%' }}
                                    className='text-[#002B7D] border-4 border-[#002B7D] p-3 rounded-circle' />
                            </div>
                            <div className='w-100 ms-3'>
                                <div className='fs-4'>Giá tiền</div>
                                <Form.Item name="price" label="Giá"
                                    rules={[
                                        { required: true, message: 'Please input your job description.' },
                                        { min: 10, message: 'This field is must be at least 10 characters.' }
                                    ]}>
                                    <Input.TextArea rows={1} placeholder='Nhập giá' />
                                </Form.Item>
                                <Form.Item name="day" label="Thời gian"
                                    rules={[
                                    
                                    ]}>
                                    <Input.TextArea rows={1} placeholder='Nhập thời gian' />
                                </Form.Item>
                            </div>
                        </div>

                    </div>
                    <div className='text-center sticky bottom-0 bg-gray-100 border-t-2 py-3'>
                        <button className='bg-[#FE7D55] hover:bg-[#FD6333] text-white text-[16px] py-2 px-8 rounded' type="submit">
                            Đăng
                        </button>
                        <NavLink to={'/home/services'}>
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

export default ServiceAdd