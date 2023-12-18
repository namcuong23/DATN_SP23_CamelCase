import { Badge, Modal } from 'antd'
import { 
    useApproveCvMutation, 
    useGetCvsByPostIdQuery, 
    useRemoveCvMutation, 
    useSetIsNewMutation
} from '../../../../service/manage_cv';
import { useAddNotificationMutation } from '../../../../service/notification';
import { CloseOutlined, CheckOutlined, } from '@ant-design/icons'
import useDateFormat from '../../../../utils/hooks/FormatDate';

import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { InputRef, message, Popconfirm, Spin, Tag } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';

type Props = {
    postId?: string,
    isOpen?: boolean,
    handleCancel?: () => void,
}

const CandidateList = (props: Props) => {
    const searchInput = useRef<InputRef>(null);
    const [setIsNew] = useSetIsNewMutation()
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
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
            title: 'Tên ứng viên',
            dataIndex: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Vị trí',
            dataIndex: 'job_title',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Ngày nộp',
            dataIndex: 'createdAt',
            render: (_, record) => <div>{useDateFormat(record?.createdAt)}</div>,
        },
        {
            title: 'CV',
            dataIndex: 'CV',
            render: (_, record) => (
                <Badge dot={record.isNew} offset={[2, 2]}>
                    <NavLink to={`/cv-preview?id=${record._id}`}
                        onClick={() => setIsNew({
                            cv_id: record._id
                        })}
                        target='_blank'
                        className="text-[#005aff] hover:text-[#005aff] underline hover:underline"
                    >
                        Xem
                    </NavLink>
                </Badge>
                    
                ),
            },
        {
            title: 'Hành động',
            dataIndex: 'action',
            render: (_, record) => (
                <Space size="middle" className='flex items-center'>
                    <Popconfirm placement="top"
                        title={"Chấp nhận"}
                        onConfirm={() => {
                            onHandleNotification(record);
                            onHandleApprove(record._id)
                        }}
                        okText="Đồng ý"
                        cancelText="Không"
                        className='leading-[22px] flex items-center'
                    >
                        <CheckOutlined className='text-success' />
                    </Popconfirm>

                    <Popconfirm placement="top"
                        title="Bạn có muốn xoá không?"
                        onConfirm={() => onHandleDelete(record._id)}
                        okText="Đồng ý"
                        cancelText="Không"
                        className='leading-[22px] flex items-center'
                    >
                        <CloseOutlined className='text-danger' />
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const [addNotification]: any = useAddNotificationMutation()
    const { data } = useGetCvsByPostIdQuery(props.postId && props.postId)
    const cvs = data?.cvs?.map((post: any, index: number) => ({
        key: index,
        ...post
    }))

    const onHandleNotification = async (user: any) => {
        try {
            const response = await addNotification(user);
            console.log(user);
            if ('data' in response && response.data) {
                message.success('Đã gửi thông báo đến ứng viên');
            } else if ('error' in response) {
                message.error('Đã gửi thông báo trước đó');
            }
        } catch (error) {
            console.error(error);
        }
    }

    const [approveCv] = useApproveCvMutation()
    const onHandleApprove = (id: string) => {
        console.log(id);

        if (confirm !== null) {
            approveCv(id)
        }
    }
    const [deleteCv] = useRemoveCvMutation()
    const onHandleDelete = (id: string) => {

        if (confirm !== null) {
            deleteCv(id)
        }
    }
  return (
    <Modal
        title="Danh sách ứng viên"
        open={props.isOpen}
        onCancel={props.handleCancel}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        width={1000}
    >
        <Table dataSource={cvs} columns={columns}
            pagination={{ defaultPageSize: 6 }}
        />

    </Modal>
  )
}

export default CandidateList