import type { ColumnsType, TableProps, ColumnType } from 'antd/es/table';
import { NavLink } from 'react-router-dom';
import { Alert, message, Popconfirm, Spin, Tag } from 'antd';
import { Space, Table } from 'antd';
import { useRef, useState } from 'react';
import { CheckOutlined, DeleteOutlined, EditOutlined, CloseOutlined } from '@ant-design/icons';
import { useGetServicesQuery, useRemoveServiceMutation } from '../../../service/employer/service';
import { MessageType } from 'antd/es/message/interface';

type Props = {}
const ServiceList = () => {
    const { data: services, error, isLoading } = useGetServicesQuery()
    const remove = 'Bạn có muốn xoá gói service này?';
    const [removeService] = useRemoveServiceMutation()
    let index = 0
    const onHandleRemove = (id: string) => {
        console.log(id);
        const confirm: MessageType = message.success('Xoá thành công')
        if (confirm !== null) {
            removeService(id)
        }
    }

    const columns: ColumnsType<any> = [
        {
            title: 'STT',
            dataIndex: 'key',
            render: () => { return index += 1 }
        },
        {
            title: 'Tên gói',
            dataIndex: 'name',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
        },
        {
            title: 'Thời gian hiệu lực',
            dataIndex: 'day',
            render: (_, record) => (
                <>
                    <div>{record.day} tháng</div>
                </>
            )
        },
        {
            title: 'Hành động',
            dataIndex: '_id',
            key: '_id',
            render: (_, record) => (
                <Space size="middle">
                    <NavLink to={`/admin/services/${record._id}/edit`}>
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
            <div className='min-h-screen'>
                {/* <div className='flex items-center justify-between pr-4'>
                    <h2 className='px-3 text-2xl py-2'>Dịch vụ của tôi</h2>
                    <NavLink to={'/home/services/add'} className='bg-[#FE7D55] text-white text-decoration-none py-1 px-2 rounded'>
                        Tạo gói mới
                    </NavLink>
                </div> */}
                <h2 className='px-3 text-2xl py-2'>Dịch vụ của tôi</h2>

                <Table columns={columns} dataSource={services} onChange={onChange} className='mx-3' />
            </div>

        </>
    )
}
export default ServiceList