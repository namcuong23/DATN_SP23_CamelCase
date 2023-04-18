import { Table } from 'antd'
import type { ColumnsType, TableProps, ColumnType } from 'antd/es/table';
import { NavLink, useParams } from 'react-router-dom';
import { useGetOrderQuery, useGetOrdersByUIdQuery } from '../../../service/employer/order';
import { DownOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import IOrder from '../../../interface/employer/order';
import UseAuth from '../../auth/UseAuth';
import { useGetProfileQuery } from '../../../service/manage_profile';
import ImanageProfile from '../../../interface/manageProfile';

const OrderDetail = () => {
    const { id } = useParams()
    const { data: order } = useGetOrderQuery<any>(id)
    const currentUser: any = UseAuth()
    const data: any = useGetProfileQuery(currentUser?.email)
    const profile: ImanageProfile = data.currentData
    const { data: orders, error, isLoading } = useGetOrdersByUIdQuery<any>(profile?._id)

    interface dataType {
        _id: string;
        order_name: string;
        order_price: number;
        order_count: number;
        total: number
    }

    const columns: ColumnsType<dataType> = [
        {
            title: 'TÊN DỊCH VỤ',
            dataIndex: 'order_name',
            key: 'order_name',
        },
        {
            title: 'ĐƠN GIÁ',
            dataIndex: 'order_price',
            key: 'order_price',
        },
        {
            title: 'SỐ LƯỢNG',
            dataIndex: 'order_count',
            key: 'order_count',
        },
        {
            title: 'SỐ TIỀN',
            dataIndex: 'total',
            key: 'total',
            render: (_, record: any) => (
                <p>{(record.order_price * record.order_count)}</p>
            ),
        }
    ];

    return (
        <>
            <div className='min-h-screen'>
                <div className='bg-white p-2 flex items-center space-x-4'>
                    <NavLink to={'/home/orders'} className='flex items-center space-x-1 bg-[#F3F4F6] py-[2px] px-2 rounded text-black'>
                        <ArrowLeftOutlined />
                        <span>Quay lại</span>
                    </NavLink>
                    <h2 className='text-xl'>Chi tiết đơn hàng</h2>
                </div>
                <div className='mx-20 flex items-center space-x-60 bg-white mt-3 border-l-[5px] border-[#004AD1] px-8 py-2 rounded-md'>
                    <div>
                        <div className='flex items-center space-x-2'>
                            <label className='m-0'>Mã đơn hàng: </label>
                            <span className='font-[700] text-[#004AD1]'>F123</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <label className='m-0'>Người tạo đơn: </label>
                            <span className='font-[700]'>NTD</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center space-x-2'>
                            <label className='m-0'>Ngày tạo đơn: </label>
                            <span className='font-[700]'>17/04/2023</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <label className='m-0'>Trạng thái đơn hàng: </label>
                            <span className='font-[700] text-[#FD6333]'>Đang chờ duyệt</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center space-x-2'>
                            <label className='m-0'>Hạn thanh toán: </label>
                            <span className='font-[700]'>17/04/2023</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <label className='m-0'>Trạng thái thanh toán: </label>
                            <span className='font-[700]'>0/8.250.000</span>
                        </div>
                    </div>
                </div>
                <div className='mx-20 max-w-100 flex items-start space-x-3 mt-3'>
                    <main className='w-[70%] p-3 bg-white border-1 rounded-md'>
                        <h2 className='text-[19px] pb-4 pt-1'>Thông tin đơn hàng</h2>
                        <div className='mb-3'>
                            <Table
                                columns={columns}

                                dataSource={orders}
                                pagination={false} />

                        </div>
                        <div className='border-1 rounded py-3'>
                            <div className='px-4 border-b-[1px]'>
                                <div className='pb-[7px] flex items-center justify-between'>
                                    <label>Tổng giá trị đơn hàng: </label>
                                    <span className='font-[700]'>7.500.000 VND</span>
                                </div>
                                <div className='py-[7px] flex items-center justify-between'>
                                    <label>Tổng tiền chưa bào gồm VAT: </label>
                                    <span className='font-[700]'>7.500.000 VND</span>
                                </div>
                            </div>
                            <div className='px-4 pt-2'>
                                <div className='py-[7px] flex items-center justify-between'>
                                    <label>VAT (10%): </label>
                                    <span className='font-[700]'>750.000 VND</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <label className='font-[700]'>Tổng số tiền thành toán: </label>
                                    <span className='font-[700] text-[#004AD1] text-[18px]'>8.250.000 VND</span>
                                </div>
                            </div>
                        </div>
                        <button className='border-1 border-[#FD6333] text-[#FD6333] py-1 px-2 rounded mt-4'>Hủy đơn hàng</button>
                    </main>
                    <aside className='w-[30%] p-3 bg-white border-1 rounded-md'>
                        <div className='flex justify-center'>
                            <img width={80} height={80}
                                src='https://res.cloudinary.com/dmp0fiboh/image/upload/v1681754635/logo_hy0scv.png' />
                        </div>
                        <div className='space-y-1 px-1'>
                            <div className='flex items-center space-x-2'>
                                <label className="m-0">Tên chủ TK: </label>
                                <span className='font-[550]'>CÔNG TY ABC</span>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <label className="m-0">Số TK: </label>
                                <span className='font-[700]'>0123456789</span>
                            </div>
                            <div>
                                <p>Ngân hàng quân đội Việt Nam.</p>
                            </div>
                            <div className='text-[#E35E5A] text-center py-2'>
                                (Nhập chính xác giá trị đơn hàng)
                            </div>
                        </div>
                        <div className='flex items-center justify-center space-x-1 my-2 cursor-pointer'>
                            <span>Hiện mã QR</span>
                            <DownOutlined />
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default OrderDetail