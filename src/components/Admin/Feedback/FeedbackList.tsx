import React from 'react'
import { useApproveFeedbackMutation, useGetFeedbackQuery, useGetFeedbacksQuery, useRefuseFeedbackMutation, useRemoveFeedbackMutation } from '../../../services/feedback'
import { Alert, Button, Popconfirm, Space, Table, TableProps, Tag, message } from 'antd'
import { CheckOutlined, CloseOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { MessageType } from 'antd/es/message/interface'
import { IFeedback } from '../../../interfaces/feedback';
import IProfileEpr from '../../../interface/employer/profileEpr';
import UseAuth from '../../auth/UseAuth';
import { useGetEprProfileQuery } from '../../../service/employer/profileEpr';
type Props = {}

const FeedbackList = (props: Props) => {
  const { data: feedbacks = [], isLoading, error } = useGetFeedbacksQuery()

  let index = 0
  const text_X = 'Bạn xác nhận từ chối xử lý nhận xét này?';
  const text_V = 'Bạn xác nhận xử lý nhận xét này?';

  const [approve] = useApproveFeedbackMutation()
  const onHandleApprove = (id: IFeedback) => {
    const confirm: MessageType = message.info('Duyệt thành công')
    if (confirm !== null) {
      approve(id)
    }
  }

  const [refuse] = useRefuseFeedbackMutation()
  const onHandleRefuse = (id: IFeedback) => {
    const confirm: MessageType = message.info('Từ chối thành công')
    if (confirm !== null) {
      refuse(id)
    }
  }

  // const currentUser: any = UseAuth()
  // const data: any = useGetEprProfileQuery(currentUser?.email)
  // const profile: IProfileEpr = data.currentData
  // const { data: feedback } = useGetFeedbackQuery<any>(profile?._id)
  // useEffect(() => {
  //   feedback?.forEach((feedback: any | {}) => {
  //     const paymentTerm = new Date(feedback?.createdAt)
  //     const today = new Date()
  //     paymentTerm.setDate(paymentTerm.getDate() + 1)

  //     if (paymentTerm.getTime() < today.getTime()) {
  //       useRemoveFeedbackMutation(feedback._id)
  //     }
  //   });
  // }, [feedback])
  const [removeFeedback, res] = useRemoveFeedbackMutation()
  const columns: ColumnsType<any> = [
    {
      title: 'STT',
      dataIndex: 'key',
      render: () => { return index += 1 }
    },
    {
      title: 'Email',
      dataIndex: 'feedback_email',
    },
    {
      title: 'Nhận xét',
      dataIndex: 'feedback_question',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'feedback_status',
      render: (_, record) => (
        <>
          {
            record.feedback_status == null ? <Tag
              color={'gold'}
              key={'Đang chờ xử lý'}>
              Đang chờ xử lý
            </Tag>
              :
              <Tag
                color={record.feedback_status ? "green" : "red"}
                key={record.feedback_status ? "Đã xử lý" : "Từ chối"}>
                {record.feedback_status ? "Đã xử lý" : "Từ chối"}
              </Tag>
          }
        </>
      )
    
    },
    {
      title: 'Hành động',
      dataIndex: '_id',
      key: '_id',
      render: (_, record) => (
        <Space size="middle">

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
          <Popconfirm placement="top"
            title={""}
            onConfirm={() => {
              removeFeedback(record._id)
              message.info("Xóa thành công");
            }}
            okText="Yes"
            cancelText="No">
            <DeleteOutlined className='text-danger' />
          </Popconfirm>
        </Space>
      ),
    },
  ]
  
  if (isLoading) return <div>...isLoading</div>
  if (error) return <div>error</div>

  return (
    <>
      <div className='d-flex align-items-center justify-content-between mb-2 pt-20 mx-3'>
        <div>
          <h2 className='mt-0 text-xl'>Quản lý feedback</h2>
        </div>

      </div>
      <Table columns={columns} dataSource={feedbacks}  className='mx-3' />
    </>
  )
}

export default FeedbackList