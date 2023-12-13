import { Modal, Popconfirm, Space, Table, message } from 'antd'
import { 
    useApproveCvMutation, 
    useGetCvsByPostIdQuery, 
    useRemoveCvMutation 
} from '../../../../service/manage_cv';
import { ColumnsType } from 'antd/es/table';
import { useAddNotificationMutation } from '../../../../service/notification';
import { CloseOutlined, CheckOutlined, } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';
import useDateFormat from '../../../../utils/hooks/FormatDate';

type Props = {
    postId?: string,
    isOpen?: boolean,
    handleCancel?: () => void,
}

const CandidateList = (props: Props) => {
    const columns: ColumnsType<any> = [
        {
            title: 'Tên ứng viên',
            dataIndex: 'name',
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
                    <NavLink to={`/cv-preview?id=${record._id}`}
                        className='leading-[22px]'
                        target='_blank'
                    >
                        <i className="fa-regular fa-eye text-[#333]"></i>
                    </NavLink>
                </Space>
            ),
        },
    ];

    const [addNotification] = useAddNotificationMutation()
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