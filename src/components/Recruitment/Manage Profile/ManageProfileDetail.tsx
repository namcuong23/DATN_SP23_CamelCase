import React, { useState } from 'react'
import FooterEmployer from '../../layouts/layoutComponentEmployer/FooterEmployer'
import { Popconfirm, Space, Table, Modal } from 'antd';
import { useGetProfileQuery } from '../../../service/manage_profile';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';

const ManageProfileDetail = () => {
    const { id } = useParams();
    const { data: profile } = useGetProfileQuery(id)
    console.log(profile)
    const [open, setOpen] = useState(false);
    const text: string = 'Are you sure to delete this post?';

    // useEffect(() => {
    //   const { job_name } = useParams();
    //   console.log(job_name)
    //   const { post } = useGetPostQuery(id)
    //   console.log(post)
    // }, [])

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        setOpen(false);
    };

    const dataSource = [
        {
            key: '1',
            namejob: 'Công việc trông trẻ',
            birthday: "01/01/2023",
            email: 'example@gmail.com',
            phone: '01234565789',
            submitAt: '01/01/2023',
        },
        {
            key: '2',
            namejob: 'Công việc phục vụ quán',
            birthday: "01/01/2023",
            email: 'example@gmail.com',
            phone: '01234565789',
            submitAt: '01/01/2023',
        },
    ];

    const columns = [
        {
            title: 'Họ và tên',
            dataIndex: 'namejob',
            key: 'name',
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'birthday',
            key: 'birthday',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Ngày nộp',
            dataIndex: 'submitAt',
            key: 'submitAt',
        },
        {
            title: 'Hành động',
            dataIndex: 'key',
            key: 'key',
            render: (_: any, record: any) => (
                <Space size="middle">
                    {/* <NavLink to={`/home/posts/${record._id}`}> */}
                    <EyeOutlined className='text-dark' />
                    {/* </NavLink> */}
                    <Popconfirm placement="top"
                        title={text}
                        // onConfirm={() => onHandleRemove(record._id)}
                        okText="Yes"
                        cancelText="No">
                        <DeleteOutlined className='text-danger' />
                    </Popconfirm>

                </Space>
            ),
        },
    ]
  return (
        <>

<section style={{ fontSize: '16px' }}>
        <div className="container py-5 bg-white" style={{ width: '80%', margin: '0 auto' }}>
          <div className="row" style={{ padding: '0 2em' }}>
            <div className="" style={{ width: '70%', margin: '0 auto', float: 'left' }}>
              <div className="card mb-4" >
                <div className="card-body pt-0"  >
                  <div className="row">
                    <div className="text-center" style={{ borderRadius: '5px', backgroundImage: "url(/src/image/banner-cv.jpg)" }}>
                      <img className='rounded-circle'
                        src="https://www.ruaanhgiare.com/wp-content/uploads/2018/03/anh-the-3x4.jpg"
                        alt="" width={'235px'} height={'235px'} style={{ display: 'block', margin: '0 auto', padding: '1em 0' }}
                      />
                    </div>
                    {/* <div className="col-sm-9">
                      <p className=" mb-0">{profile?.name}</p>
                    </div> */}
                  </div>
                  {/* <hr /> */}
                  <div className="row pb-3 pt-4">
                    <div className="col-sm-3">
                      <p className="mb-0">Tên ứng viên</p>
                    </div>
                    <div className="col-sm-9">
                      <p className=" mb-0">{profile?.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-sm-3">
                      <p className="mb-0">Ngày sinh</p>
                    </div>
                    <div className="col-sm-9">
                      <p className=" mb-0">{profile?.time}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-sm-3">
                      <p className="mb-0">Số điện thoại</p>
                    </div>
                    <div className="col-sm-9">
                      <p className=" mb-0">{profile?.phone}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-sm-3 ">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className=" mb-0">{profile?.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-sm-3 ">
                      <p className="mb-0">Ngày nộp</p>
                    </div>
                    <div className="col-sm-9">
                      <p className=" mb-0">{profile?.date}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-sm-3 ">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className=" mb-0">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-sm-3 ">
                      <p className="mb-0">Công việc đã nộp</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="mb-0 text-decoration-underline"  style={{color:'blue'}} onClick={showModal}>
                        Xem
                      </p>
                      <Modal
                          title="Việc Làm Đã Nộp"
                          open={open}
                          onCancel={handleCancel}
                          okButtonProps={{ hidden: true }}
                          cancelButtonProps={{ hidden: true }}
                          width={1000}
                        >
                          <Table dataSource={dataSource} columns={columns}
                            pagination={{ defaultPageSize: 6 }}
                          />

                        </Modal>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-sm-3 ">
                      <p className="mb-0">Lời nhắn</p>
                    </div>
                    <div className="col-sm-9 mb-5 text-break">
                      <p className="h-[70px] mb-0" style={{ height: '9em', wordBreak: 'break-word' }}>
                        {profile?.note}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-sm-3 ">
                      <p className="mb-0">Mục tiêu nghề nghiệp</p>
                    </div>
                    <div className="col-sm-9 pb-3">
                      <p className=" mb-0">Mục tiêu nghề nghiệp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>    
            <div className='mt-16'>
                <FooterEmployer />
            </div>
        </>
    )
}

export default ManageProfileDetail