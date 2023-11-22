import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import { Table, DatePicker } from 'antd';
import { useGetHistoryOrderQuery } from '../../../service/admin/chartLine';
import { Order } from '../../../interface/admin/order';

const { MonthPicker } = DatePicker;

const OrderManagement = () => {
    const { data: HistoryPackage } = useGetHistoryOrderQuery([]);
    const [selectedMonth, setSelectedMonth] = useState<any>(null);

    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            render: (text: any, record: any, index: number) => index + 1
        },
        {
            title: 'Id người dùng',
            dataIndex: '_id',
        },
        {
            title: 'Tên gói',
            dataIndex: 'order_name',
        },
        {
            title: 'Ngày mua',
            dataIndex: 'order_date',
            render: (_: any, record: any) => (
                <>
                    <div>{(record.createdAt && record.createdAt !== 'Invalid date') ? (new Date(record.createdAt)).toLocaleDateString() : ''}</div>
                </>
            )
        },
        {
            title: 'Số tiền',
            dataIndex: 'order_price',
            render: (_: any, record: any) => (
                <div>{(typeof record.order_price === 'number') ? record.order_price.toLocaleString('vi', { style: 'currency', currency: 'VND' }) : ''}
                </div>
            )
        },
    ];

    // Lọc dữ liệu khi selectedMonth thay đổi
    const filteredData = HistoryPackage?.filter((user: any) => {
        if (selectedMonth) {
            const selectedMonthIndex = selectedMonth.get('month');
            const userDate = new Date(user.createdAt);
            return userDate.getMonth() === selectedMonthIndex;
        }
        return true;
    });

    const csvData = ((filteredData && filteredData.length > 0 ? filteredData : [])).map((user: any, index: number) => ({
        'Số đơn hàng': index + 1,
        'Id người dùng': user._id,
        'Tên gói': user.order_name,
        'Ngày mua': (user.createdAt && user.createdAt !== 'Invalid date') ? (new Date(user.createdAt)).toLocaleDateString() : '',
        'Số tiền': (typeof user.order_price === 'number') ? user.order_price.toLocaleString('vi', { style: 'currency', currency: 'VND' }) : ''
    }));

    return (
        <>
            <div className='d-flex align-items-center justify-content-between mb-2 pt-20 mx-3'>
                <div>
                    <h2 className='mt-0 text-xl'>Thống kê đơn hàng</h2>
                </div>
                <div style={{ marginLeft: 'auto', marginRight: '50px', marginTop: '12px' }} className='mb-2'>
                    <MonthPicker
                        placeholder="Chọn tháng"
                        value={selectedMonth}
                        onChange={(date) => setSelectedMonth(date)}
                    />
                </div>
                <div className='bg-success rounded px-3 py-2'>
                    <CSVLink className='text-white text-decoration-none' data={csvData} filename={'doanh-thu-don-hang.csv'}>
                        Xuất hàng loạt
                    </CSVLink>
                </div>
            </div>

            {filteredData && filteredData.length > 0 ? (
                <Table columns={columns} dataSource={filteredData} className='mx-3' />
            ) : (
                <div className='mx-3 text-center text-danger'>Không có dữ liệu</div>
            )}
        </>
    );
};

export default OrderManagement;
