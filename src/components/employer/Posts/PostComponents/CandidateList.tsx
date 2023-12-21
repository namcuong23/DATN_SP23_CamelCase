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
import { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';

type Props = {
    postId?: string,
    isOpen?: boolean,
    handleCancel?: () => void,
}

const CandidateList = (props: Props, post: any) => {

    useEffect(() => {
        // Khi component được tạo, kiểm tra xem có trạng thái đã lưu trong localStorage không
        const storedIsConfirmed: any = {};
        for (const key in localStorage) {
            if (key.startsWith('isConfirmed_')) {
                storedIsConfirmed[key] = JSON.parse(localStorage.getItem(key)!);
            }
        }
        setIsConfirmed(storedIsConfirmed);
    }, []);
    const handleConfirmation = (email: string, id: string,) => {
        const result = window.confirm('Bạn cần xác nhận hành động này khi từ chối ứng viên');
        const customSubject = 'Custom Subject';
        const customBody = 'Custom Body';
        if (result) {
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(customSubject)}&body=${encodeURIComponent(customBody)}`;
            window.location.href = mailtoLink;
            deleteCv(id)
        } else {
        }
    };


    const [isConfirmed, setIsConfirmed] = useState<{ [key: string]: boolean }>({});
    const handlePasstion = (email: string, id: string, jobId: string) => {
        const result = window.confirm('Bạn cần xác nhận hành động này khi phê duyệt ứng viên');
        const customSubject = 'Custom Subject';
        const customBody = 'Custom Body';
        if (result) {
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(customSubject)}&body=${encodeURIComponent(customBody)}`;
            window.location.href = mailtoLink;
            approveCv(id);
    
            // Lưu trạng thái vào localStorage sau khi đã xác nhận hành động
            const key = `isConfirmed_${id}_${jobId}`;
            localStorage.setItem(key, JSON.stringify(true));
    
            // Nếu bạn muốn cập nhật state ngay lập tức, hãy thêm dòng sau:
            setIsConfirmed((prev) => ({ ...prev, [`${id}_${jobId}`]: true }));
        }
    };
    

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
                    <button
                        onClick={() => handlePasstion(record.email, record._id, props.postId)}
                        disabled={isConfirmed[`${record._id}_${props.postId}`]}
                    >
                        {isConfirmed[`${record._id}_${props.postId}`] ? 'Đã duyệt!' : 'Phê duyệt'}
                    </button>
                    <button onClick={() => handleConfirmation(record.email, record._id)}>
                        {isConfirmed[`${record._id}_${props.postId}`] ? '' : 'Từ chối'}
                    </button>
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

    cvs?.sort((prevPost: any, nextPost: any) => {
        return (prevPost.isNew === nextPost.isNew) ? 0 : prevPost.isNew ? -1 : 1
    })
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
    const [deleteCv] = useRemoveCvMutation()
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