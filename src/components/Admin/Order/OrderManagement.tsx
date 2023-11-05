import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import { Space, Table, Button, DatePicker } from 'antd';
import { useGetHistoryOrderQuery } from '../../../service/admin/chartLine';
import { Order } from '../../../interface/admin/order';

const { MonthPicker } = DatePicker;

const OrderManagement = () => {
    const { data: HistoryPackage } = useGetHistoryOrderQuery([]);
    const [PackageHistory, setPackageHistory] = useState<Order[]>([]);
    const [selectedMonth, setSelectedMonth] = useState<any>(null);

    useEffect(() => {
        setPackageHistory(HistoryPackage);
    }, [HistoryPackage]);

    const convertToCSVData = (user: Order, index: number) => {
        if (user) {
            return [
                index + 1, // Cột số thứ tự
                user._id,
                user.order_name,
                user.createdAt ? (new Date(user.createdAt)).toLocaleDateString() : '',
                typeof user.order_price === 'number' ? user.order_price.toLocaleString('vi', { style: 'currency', currency: 'VND' }) : ''
            ];
        }
        return [];
    };

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
        {
            title: 'Trạng thái',
            dataIndex: 'package_desc',
        },
        {
            title: 'Hành động',
            dataIndex: '_id',
            key: '_id',
            render: (text: any, record: any, index: number) => (
                <Space size="middle">
                    <CSVLink
                        data={[['STT', 'Id người dùng', 'Tên gói', 'Ngày mua', 'Số tiền'], convertToCSVData(record, index)]}
                        filename={'user-data.csv'}
                    >
                        Tải về CSV
                    </CSVLink>
                </Space>
            ),
        },
    ];

    const [filteredData, setFilteredData] = useState<Order[]>(PackageHistory); // Khởi tạo filteredData với toàn bộ dữ liệu ban đầu
    const handleFilter = () => {
        if (selectedMonth) {
            const filteredData = PackageHistory.filter(user => {
                if (user.createdAt) {
                    const userDate = new Date(user.createdAt);
                    if (!isNaN(userDate.getTime())) {
                        const userMonth = userDate.getMonth();
                        const selectedMonthIndex = selectedMonth.get('month');
                        return userMonth === selectedMonthIndex;
                    }
                }
                return false;
            });
            setFilteredData(filteredData);
        } else {
            setFilteredData(PackageHistory); // Khôi phục filteredData về toàn bộ dữ liệu ban đầu khi không có lọc
        }
    };

    const csvData = ((filteredData && filteredData.length > 0 ? filteredData : [])).map((user, index) => ({
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
                    <h2 className='mt-0 text-xl'>Quản lý đơn hàng</h2>
                </div>
                <div className=' px-3 py-2'>
                    <CSVLink data={csvData} filename={'doanh-thu-don-hang.csv'}>
                        Xuất hàng loạt
                    </CSVLink>
                </div>
                <div className='mb-2'>
                    <MonthPicker
                        placeholder="Chọn tháng"
                        value={selectedMonth}
                        onChange={(date) => setSelectedMonth(date)}
                    />
                    <Button type="primary" onClick={handleFilter}>
                        Lọc
                    </Button>
                </div>
            </div>

            <Table columns={columns} dataSource={filteredData.length > 0 ? filteredData : PackageHistory} className='mx-3' />

        </>
    );
};

export default OrderManagement;
