import React from 'react'
import { BookOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, message } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import ICareer from '../../../interface/admin/career';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useAddCareerMutation } from '../../../service/admin';

type Props = {}

const CareerAdd = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const [addCareer] = useAddCareerMutation()
    const onHandleAdd: SubmitHandler<ICareer> = (career: ICareer) => {
        console.log(career);
        try {
            addCareer({ ...career })
            message.success('Tạo career thành công.')
            navigate('/admin/careers')
        } catch (error) { }
    }
    return (
        <>
            <div style={{ maxWidth: '700px' }} className='mx-auto'>
                <h1 className='mb-3 text-center fw-normal'>Tạo gói mới</h1>
                <Form onFinish={onHandleAdd} form={form} name="add" layout="vertical">

                    <div className='d-flex align-items-top'>
                        <div>
                            <BookOutlined style={{ fontSize: '300%' }}
                                className='text-success border border-4 border-success p-3 rounded-circle' />
                        </div>
                        <div className='w-100 ms-3'>
                            <div className='fs-4'>Tên gói</div>
                            <Form.Item name="name" label="Tên gói career dành cho khách hàng"
                                rules={[
                                    { required: true, message: "Please input your name." },
                                ]}>
                                <Input />
                            </Form.Item>
                        </div>
                    </div>

                    <Form.Item className='text-center'>
                        <Button className='bg-success text-white' htmlType="submit">
                            Tạo
                        </Button>
                        <NavLink to={'/admin/careers'}>
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

export default CareerAdd