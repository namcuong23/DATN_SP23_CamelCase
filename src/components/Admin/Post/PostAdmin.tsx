import React, { useRef, useState } from 'react'
import { useGetUsersQuery } from '../../../service/admin'
import { Button, Input, InputRef, Space, Table, TableProps } from 'antd';
import { User } from '../../../interface/admin/users';
import Highlighter from 'react-highlight-words';;
import { formatDate, useApprovePostMutation, useGetPostsQuery, useRefusePostMutation } from '../../../service/post';
import { NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Alert, message, Popconfirm, Spin, Tag } from 'antd';
import { CheckOutlined, CloseOutlined, EyeOutlined } from '@ant-design/icons';
import { MessageType } from 'antd/es/message/interface';
import type { ColumnType, ColumnsType, FilterConfirmProps, FilterValue, SorterResult } from 'antd/es/table/interface';
import IPost from '../../../interface/post';
const PostAdmin = () => {
    const { data: posts, error, isLoading } = useGetPostsQuery()
    const searchInput = useRef<InputRef>(null);
    const date = new Date()
    const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
    const [sortedInfo, setSortedInfo] = useState<SorterResult<IPost>>({});
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const handleChange: TableProps<IPost>['onChange'] = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter as SorterResult<IPost>);
    };
    const clearFilters = () => {
        setFilteredInfo({});
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };
    const text_X = 'Bạn xác nhận từ chối bài viết này?';
    const text_V = 'Bạn xác nhận duyệt bài viết này?';

    const [duyet] = useApprovePostMutation()
    const onHandleApprove = (id: string) => {
        console.log(id);
        const confirm: MessageType = message.info('Duyệt thành công')
        if (confirm !== null) {
            duyet(id)
        }
    }

    const [tuchoi] = useRefusePostMutation()
    const onHandleRefuse = (id: string) => {
        console.log(id);
        const confirm: MessageType = message.info('Từ chối thành công')
        if (confirm !== null) {
            tuchoi(id)
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
    const data = posts?.map((item: any, index: any) => ({
        key: String(index),
        _id: item._id,
        job_name: item.job_name,
        job_description: item.job_description,
        job_salary: item.job_salary,
        working_form: item.working_form,
        number_of_recruits: item.number_of_recruits,
        requirements: item.requirements,
        gender: item.gender,
        work_location: item.work_location,
        post_status: item.post_status,
        user_id: item.user_id,
        createdAt: item.createdAt,
    }))
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
            filters: [
                {
                    text: 'Đã duyệt',
                    value: true,
                },
                {
                    text: 'Từ Chối',
                    value: false,
                },
            ],
            onFilter: (value: any, record) => record.post_status.indexOf(value) === 0,
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


                    <Popconfirm placement="top"
                        title={text_V}
                        onConfirm={() => onHandleApprove(record._id)}
                        okText="Đồng ý"
                        cancelText="Không">
                        <CheckOutlined className='text-success' />
                    </Popconfirm>


                    <Popconfirm placement="top"
                        title={text_X}
                        onConfirm={() => onHandleRefuse(record._id)}
                        okText="Đồng ý"
                        cancelText="Không">
                        <CloseOutlined className='text-danger' />
                    </Popconfirm>

                </Space>
            ),
        },
    ];

    const onChange: TableProps<any>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
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
        <div className="nk-content ">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="nk-block-head nk-block-head-sm">
                            <div className="nk-block-between">
                                <div className="nk-block-head-content">
                                    <h4 className="nk-block-title page-title">Dashboard</h4>
                                </div>{/* .nk-block-head-content */}
                            </div>{/* .nk-block-between */}
                        </div>{/* .nk-block-head */}
                        <div className='nk-block'>
                            <>
                                <Space style={{ marginBottom: 16 }}>
                                    <Button onClick={clearFilters}>Clear filters</Button>
                                    <Button onClick={clearAll}>Clear filters and sorters</Button>
                                </Space>
                                <Table columns={columns} dataSource={data} onChange={handleChange} />
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostAdmin