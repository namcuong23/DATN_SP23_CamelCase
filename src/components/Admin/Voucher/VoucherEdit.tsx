import { Button, Form, Input, message, Select } from 'antd'
import { BookOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import IAdmin_voucher from '../../../interface/admin_voucher'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useGetVoucherQuery, useEditVoucherMutation } from '../../../service/admin_voucher';
import React from 'react';

const VoucherEdit = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const { id } = useParams();
    const { data: voucher } = useGetVoucherQuery(id as string)
    form.setFieldsValue(voucher)
    console.log(voucher);

    const [editVoucher] = useEditVoucherMutation()
    const onHandleEdit = (voucher: IAdmin_voucher) => {
        console.log(voucher);
        try {
            editVoucher({ ...voucher, status: false, _id: id })
            message.success('Sửa thành công.')
            navigate('/admin/vouchers')
        } catch (error) {

        }
    }

    return (
        <>
            <div style={{ maxWidth: '700px' }} className='mx-auto'>
                <h1 className='text-center fw-normal text-[40px] mt-[67px]'>Chỉnh sửa thông tin</h1>
                <Form layout="vertical" onFinish={onHandleEdit} form={form} initialValues={voucher}>
                    <div className='d-flex align-items-top'>
                        <div>
                            <BookOutlined style={{ fontSize: '300%' }}
                                className='text-success border-4 border-success p-3 rounded-circle' />
                        </div>
                        <div className='w-100 ms-3'>
                            <div className='fs-4'>Tên gói</div>
                            <Form.Item name="package_name" label="Tên gói dịch vụ dành cho khách hàng"
                                rules={[
                                    { required: true, message: "Please input your name." },
                                ]}>
                                <Input />
                            </Form.Item>
                        </div>
                    </div>

                    <div className='d-flex align-items-top'>
                        <div>
                            <BookOutlined style={{ fontSize: '300%' }}
                                className='text-success border-4 border-success p-3 rounded-circle' />
                        </div>
                        <div className='w-100 ms-3'>
                            <div className='fs-4'>Mô tả</div>
                            <Form.Item name="package_desc" label="Thông tin chi tiết về gói dịch vụ này"
                                rules={[
                                    { required: true, message: "Please input your description." },
                                ]}>
                                <Input />
                            </Form.Item>
                        </div>
                    </div>

                    <div className='d-flex align-items-top'>
                        <div>
                            <BookOutlined style={{ fontSize: '300%' }}
                                className='text-success border-4 border-success p-3 rounded-circle' />
                        </div>
                        <div className='w-100 ms-3'>
                            <div className='fs-4'>Giá</div>
                            <Form.Item name="package_price" label="Thông tin về giá tiền"
                                rules={[
                                    { required: true, message: "Please input your price." },
                                ]}>
                                <Input />
                            </Form.Item>
                        </div>
                    </div>

                    <div className='d-flex align-items-top'>
                        <div>
                            <BookOutlined style={{ fontSize: '300%' }}
                                className='text-success border-4 border-success p-3 rounded-circle' />
                        </div>
                        <div className='w-100 ms-3'>
                            <div className='fs-4'>Thời gian hiệu lực</div>
                            <Form.Item name="package_day" label="Thời gian hiệu lực"
                                rules={[{ required: true, message: 'Please choose a gender.' }]}>
                                <Select>
                                    <Select.Option value={1}>1 tháng</Select.Option>
                                    <Select.Option value={3}>3 tháng</Select.Option>
                                    <Select.Option value={6}>6 tháng</Select.Option>
                                    <Select.Option value={12}>12 tháng</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </div>



                    <Form.Item className='text-center'>
                        <Button className='bg-success text-white' htmlType="submit">
                            Sửa
                        </Button>
                        <NavLink to={'/admin/vouchers'}>
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

export default VoucherEdit