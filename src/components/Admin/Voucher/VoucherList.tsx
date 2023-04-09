import type { ColumnsType, TableProps, ColumnType } from 'antd/es/table';
import { NavLink } from 'react-router-dom';
import { Alert, message, Popconfirm, Spin, Tag } from 'antd';
import { Space, Table } from 'antd';
import { useRef, useState } from 'react';
import { CheckOutlined, DeleteOutlined, EditOutlined, CloseOutlined } from '@ant-design/icons';
import { useRemoveVoucherMutation, useGetVouchersQuery } from '../../../service/admin_voucher';
import { MessageType } from 'antd/es/message/interface';

type Props = {}
const VoucherList = () => {
    const { data: vouchers, error, isLoading } = useGetVouchersQuery()
    const remove = 'Bạn có muốn xoá gói voucher này?';
    const [removeVoucher] = useRemoveVoucherMutation()

    const onHandleRemove = (id: string) => {
        console.log(id);
        const confirm: MessageType = message.success('Xoá thành công')
        if (confirm !== null) {
            removeVoucher(id)
        }
    }

    const columns: ColumnsType<any> = [
        {
            title: 'Tên gói',
            dataIndex: 'name',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
        },
        {
            title: 'Thời gian hiệu lực',
            dataIndex: 'valid',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (_, record) => (
                <>
                    <Tag
                        color={record.status ? "gold" : "green"}
                        key={record.status ? "Đang chờ duyệt" : "Khả dụng"}>
                        {record.status ? "Đang chờ duyệt" : "Khả dụng"}
                    </Tag>
                </>
            ),
            filters: [
                {
                    text: 'Khả dụng',
                    value: 'Khả dụng',
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
                    <NavLink to={`/admin/vouchers/${record._id}/edit`}>
                        <EditOutlined className='text-dark' />
                    </NavLink>
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

    const onChange: TableProps<any>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    if (isLoading)
        return <Space direction="vertical" style={{ width: '100%' }}>
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </Space>
    if (error)
        return <Space direction="vertical" style={{ width: '100%' }}>
            <Alert message="Error!!!" type="error" />
        </Space>
    return (
        <>
            <div className='d-flex align-items-center justify-content-between mb-2 pt-20 mx-3'>
                <div>
                    <h2 className='mt-0 text-xl'>Quản lý các gói</h2>
                </div>
                <div className='bg-success rounded px-3 py-2'>
                    <NavLink to={'/admin/vouchers/add'} className='text-white text-decoration-none'>
                        Tạo gói mới
                    </NavLink>
                </div>
            </div>
            <Table columns={columns} dataSource={vouchers} onChange={onChange} className='mx-3' />
        </>
    )
}
export default VoucherList