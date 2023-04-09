import type { ColumnsType, TableProps, ColumnType } from 'antd/es/table';
import { useGetPostsByUIdQuery } from '../../../service/post';
import { NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Alert, InputRef, message, Popconfirm, Spin, Tag } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Highlighter from 'react-highlight-words';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { MessageType } from 'antd/es/message/interface';
import { useRemovePostMutation } from '../../../service/post'
import FooterEmployer from '../../layouts/layoutComponentEmployer/FooterEmployer';
import UseAuth from '../../auth/UseAuth';
import ImanageProfile from '../../../interface/manageProfile';
import { useGetProfileQuery } from '../../../service/manage_profile';
import { useGetUserEprByEmailQuery } from '../../../service/auth_employer';

const PostList = () => {
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const date = new Date()

    const currentUser: any = UseAuth()
    const data: any = useGetProfileQuery(currentUser?.email)
    const profile: ImanageProfile = data.currentData
    const user = useGetUserEprByEmailQuery(currentUser?.email)
    const { data: posts, error, isLoading } = useGetPostsByUIdQuery(profile?._id)

    const text = 'Are you sure to delete this post?';

    const [removePost] = useRemovePostMutation()
    const onHandleRemove = (id: string) => {
        const confirmMsg: MessageType = message.success('Xoa thanh cong.')
        if (confirmMsg !== null) {
            removePost(id)
        }
    }

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: any,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex: any): ColumnType<any> => ({
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
    const columns: ColumnsType<any> = [
        {
            title: 'Tiêu đề',
            dataIndex: 'job_name',
            ...getColumnSearchProps('job_name'),
        },
        {
            title: 'Hình thức làm việc',
            dataIndex: 'working_form',
            filters: [
                {
                    text: 'online',
                    value: 'online',
                },
                {
                    text: 'offline',
                    value: 'offline',
                },
            ],
            onFilter: (value: any, record) => record.working_form.indexOf(value) === 0,
        },
        {
            title: 'Khu vực',
            dataIndex: 'work_location',
            filters: [
                {
                    text: 'HN',
                    value: 'HN',
                },
                {
                    text: 'HCM',
                    value: 'HCM',
                },
            ],
            onFilter: (value: any, record) => record.work_location.indexOf(value) === 0,
        },
        {
            title: 'Ngày đăng',
            dataIndex: 'createdAt',
            render: (_, record) => (
                <p>{(new Date(record.createdAt)).toLocaleString()}</p>
            ),

        },
        {
            title: 'Trạng thái',
            dataIndex: 'post_status',
            render: (_, record) => (
                <>
                    {
                        record.post_status == null ? <Tag
                            color={'gold'}
                            key={'Đang chờ duyệt'}>
                            Đang chờ duyệt
                        </Tag>
                            :
                            <Tag
                                color={record.post_status ? "green" : "red"}
                                key={record.post_status ? "Đã duyệt" : "Từ chối"}>
                                {record.post_status ? "Đã duyệt" : "Từ chối"}
                            </Tag>
                    }
                </>
            ),
        },
        {
            title: 'Hành động',
            dataIndex: '_id',
            key: '_id',
            render: (_, record) => (
                <Space size="middle">
                    <NavLink to={`/home/posts/${record._id}`}>
                        <EyeOutlined className='text-dark' />
                    </NavLink>
                    <NavLink to={`/home/posts/${record._id}/edit`}>
                        <EditOutlined className='text-dark' />
                    </NavLink>
                    <Popconfirm placement="top"
                        title={text}
                        onConfirm={() => onHandleRemove(record._id)}
                        okText="Yes"
                        cancelText="No">
                        <DeleteOutlined className='text-danger' />
                    </Popconfirm>

                </Space>
            ),
        },
    ];

    const onChange: TableProps<any>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    if (!user.currentData) {
        return navigate('/login-epr')
    }

    if (isLoading)
        return <Space className='mt-16' direction="vertical" style={{ width: '100%' }}>
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </Space>
    if (error)
        return <Space className='mt-16' direction="vertical" style={{ width: '100%' }}>
            <Alert message="Error!!!" type="error" />
        </Space>
    return (
        <>
            <div className='mx-5'>
                <div className='mt-4 h-[100vh]'>
                    <div className='d-flex align-items-center justify-content-between mb-2'>
                        <div>
                            <h2 className='mt-0 text-3xl font-bold text-[#44454A]'>Quản lý bài viết</h2>
                        </div>
                        <div className='bg-[#FE7D55] hover:bg-[#FD6333] rounded px-3 py-2'>
                            <NavLink to={'/home/posts/add'} className='text-white text-decoration-none'>
                                Đăng tin
                            </NavLink>
                        </div>
                    </div>
                    <Table columns={columns} dataSource={posts} onChange={onChange} />
                </div>
            </div>
            <FooterEmployer />
        </>
    )
}


export default PostList