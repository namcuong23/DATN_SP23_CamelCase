import React from 'react'
import { BookOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, message } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import IAdmin_voucher from '../../../interface/admin_voucher';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useAddVoucherMutation } from '../../../service/admin_voucher';

type Props = {}

const VoucherAdd = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const [addVoucher] = useAddVoucherMutation()
    const onHandleAdd: SubmitHandler<IAdmin_voucher> = (voucher: IAdmin_voucher) => {
        console.log(voucher);
        try {
            addVoucher({ ...voucher, status: false})
            message.info('Tạo voucher thành công.')
            navigate('/admin/vouchers')
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
                            <Form.Item name="name" label="Tên gói voucher dành cho khách hàng"
                                rules={[
                                    { required: true, message: "Please input your name." },
                                ]}>
                                <Input/>
                            </Form.Item>
                        </div>
                    </div>

                    <div className='d-flex align-items-top'>
                        <div>
                            <BookOutlined style={{ fontSize: '300%' }}
                                className='text-success border border-4 border-success p-3 rounded-circle' />
                        </div>
                        <div className='w-100 ms-3'>
                            <div className='fs-4'>Mô tả</div>
                            <Form.Item name="description" label="Thông tin chi tiết về gói voucher này"
                                rules={[
                                    { required: true, message: "Please input your description." },
                                ]}>
                                <Input/>
                            </Form.Item>
                        </div>
                    </div>

                    <div className='d-flex align-items-top'>
                        <div>
                            <BookOutlined style={{ fontSize: '300%' }}
                                className='text-success border border-4 border-success p-3 rounded-circle' />
                        </div>
                        <div className='w-100 ms-3'>
                            <div className='fs-4'>Giá</div>
                            <Form.Item name="price" label="Thông tin về giá tiền"
                                rules={[
                                    { required: true, message: "Please input your price." },
                                ]}>
                                <Input/>
                            </Form.Item>
                        </div>
                    </div>

                    <div className='d-flex align-items-top'>
                        <div>
                            <BookOutlined style={{ fontSize: '300%' }}
                                className='text-success border border-4 border-success p-3 rounded-circle' />
                        </div>
                        <div className='w-100 ms-3'>
                            <div className='fs-4'>Thời gian hiệu lực</div>
                            <Form.Item name="valid" label="Thời gian hiệu lực của voucher"
                                rules={[{ required: true, message: 'Please choose a gender.' }]}>
                                <Select>
                                    <Select.Option value="1 tháng">1 tháng</Select.Option>
                                    <Select.Option value="3 tháng">3 tháng</Select.Option>
                                    <Select.Option value="6 tháng">6 tháng</Select.Option>
                                    <Select.Option value="12 tháng">12 tháng</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </div>



                    <Form.Item className='text-center'>
                        <Button className='bg-success text-white' htmlType="submit">
                            Tạo
                        </Button>
                        <NavLink to={'admin/vouchers'}>
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

export default VoucherAdd