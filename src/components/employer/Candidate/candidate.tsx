import type { ColumnsType, ColumnType } from 'antd/es/table';
import { useGetCandidatesByUIdQuery } from '../../../service/employer/candidate';
import { NavLink, useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Alert, InputRef, message, Popconfirm, Spin, Tag } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { MessageType } from 'antd/es/message/interface';
import { useRemoveCandidateMutation } from '../../../service/employer/candidate';
import { apiGetProvinces } from '../../../service/api';
import ICandidate from '../../../interface/employer/candidate';
import { useAppSelector } from '../../../app/hook';
import { useGetUserEprByEmailQuery } from '../../../service/auth_employer';

const Candidate = (): any | null | JSX.Element => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const navigate = useNavigate()

    const { email, isLoggedIn } = useAppSelector((res) => res.auth);
    const data: any = useGetUserEprByEmailQuery(email)
    const user: any = data.currentData
    const { data: candidates, error, isLoading } = useGetCandidatesByUIdQuery(user?._id)
    const text: string = 'Are you sure to delete this candidate?';
    const [provinces, setProvinces] = useState<any>([])

    useEffect(() => {
        const fetchProvinces = async () => {
            const { data: response }: any = await apiGetProvinces()
            setProvinces(response?.results);
        }
        fetchProvinces()
    }, [])

    interface DataType {
        key: string;
        _id: string;
        name: string,
        email: string,
        phone: string,
        province: string,
    }
    type DataIndex = keyof DataType;
    const dataSource = candidates?.map((item: DataType, index: string) => ({
        key: String(index),
        _id: String(item._id),
        name: String(item.name),
        email: String(item.email),
        phone: String(item.phone),
        province: String(item.province),
    }))

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<any> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns: ColumnsType<DataType> = [
        {
            title: 'Ứng viên',
            dataIndex: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            ...getColumnSearchProps('email'),
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            ...getColumnSearchProps('phone'),
        },
        {
            title: 'Vị trí ứng tuyển',
            dataIndex: 'phone',
            ...getColumnSearchProps('phone'),
        },

        {
            title: 'Khu vực',
            dataIndex: 'province',
            filters: provinces.map((province: any) => (
                {
                    text: province.province_name,
                    value: province.province_name,
                }
            )),
            onFilter: (value: any, record) => record.province.indexOf(value) === 0,
        },
        {
            title: 'Hành động',
            dataIndex: '_id',
            key: '_id',
            render: (_, record) => (
                <Space size="middle">
                    <NavLink to={`tel:+84-${record.phone}`}>
                        <PhoneOutlined className='text-dark' />
                    </NavLink>
                    <NavLink to={`mailto:${record.email}`}>
                        <MailOutlined className='text-dark' />
                    </NavLink>
                </Space>
            ),
        },
        {
            title: 'CV',
            dataIndex: 'phone',
            ...getColumnSearchProps('phone'),
        },

    ];

    if (isLoggedIn == false) {
        return navigate('/login-epr')
    }

    if (isLoading) {
        return <Space className='mt-16' direction="vertical" style={{ width: '100%' }}>
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </Space>
    }
    if (error) {
        return <Space className='mt-16' direction="vertical" style={{ width: '100%' }}>
            <Alert message="Error!!!" type="error" />
        </Space>
    }

    return (
        <>
            <div className='mx-5'>
                <div className='mt-4 min-h-screen'>
                    <div className='d-flex align-items-center justify-content-between mb-2'>
                        <div>
                            <h2 className='mt-0 text-3xl font-bold text-[#44454A]'>Ứng viên phù hợp</h2>
                        </div>
                        <div className='bg-[#FE7D55] hover:bg-[#FD6333] rounded px-3 py-2'>
                            <NavLink to={'/home/candidates/add'} className='text-white text-decoration-none'>
                                Đăng tin
                            </NavLink>
                        </div>
                    </div>
                    <Table columns={columns} dataSource={dataSource} />
                </div>
            </div>
        </>
    )
}


export default Candidate