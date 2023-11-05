import { useEffect, useState } from 'react'
import { useGetChartLineQuery, useGetHistoryOrderQuery } from '../../../service/admin/chartLine';
import { ChartData } from '../../../interface/admin/chartData';
import { Order } from '../../../interface/admin/order';
import ChartUsers from './ChartLine/ChartUsers';
import { EyeOutlined } from '@ant-design/icons';
import { calculatePercentageChange } from './ChartLine/helpers/calculatePercentageChange';
import ChartNTD from './ChartLine/ChartNTD';
import ChartNTV from './ChartLine/ChartNTV';
import StatisticalPackage from './ChartLine/StatisticalPackage';
import StatisticalPackagePie from './ChartLine/StatisticalPackagePie';
import { NavLink } from 'react-router-dom';
import React from 'react';

const HomeAdmin = () => {
  const { data: Chart, error, isLoading, isSuccess } = useGetChartLineQuery([]);
  const { data: HistoryPackage } = useGetHistoryOrderQuery([]);
  const [chartState, setChartState] = useState<ChartData>();
  const [PackageHistory, setPackageHistory] = useState<Order[]>([]);
  useEffect(() => {
    setChartState(Chart)
  }, [Chart])
  useEffect(() => {
    setPackageHistory(HistoryPackage)
  }, [HistoryPackage])
  return (
    <div className="nk-content text-sm">
      <div className="container-fluid">
        <div className="nk-content-inner">
          <div className="nk-content-body">
            <div className="nk-block-head nk-block-head-sm">
              <div className="nk-block-between">
                <div className="nk-block-head-content">
                  <h3 className="nk-block-title page-title">Dashboard</h3>
                </div>
                {/* .nk-block-head-content */}

                {/* .nk-block-head-content */}
              </div>
              {/* .nk-block-between */}
            </div>
            {/* .nk-block-head */}
            <div className="nk-block">
              <div className="row g-gs">
                {/* .col */}

                <div className="col-xxl-3 col-sm-6">
                  <div className="card">
                    <div className="nk-ecwg nk-ecwg6">
                      <div className="card-inner">
                        <div className="">
                          <div className="">
                            <h6 className="text-xl">Tổng số User</h6>
                          </div>
                        </div>
                        <div className="data">
                          <div className="data-group">
                            <div className="amount text-sm">{chartState?.totalUser.totalUser}</div>
                            <div className="nk-ecwg6-ck">
                              <ChartUsers
                                chartData={Chart}
                                error={error}
                                isLoading={isLoading}
                                isSuccess={isSuccess}
                              />
                            </div>

                          </div>
                          <div className="info">
                            <span className="change up text-danger">
                              {
                                chartState ? (chartState?.totalUser.userLastWeekTotal < chartState?.totalUser.userWeekBeforeLastTotal) ?
                                  <div className="flex py-2">
                                    <div className="pr-3 ">
                                      <img
                                        className="w-5"
                                        src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1684684027/juiewztaypyiczhygevl.png"
                                        alt=""
                                      />
                                    </div>

                                    <span className='text-red-600'>{calculatePercentageChange(Number(chartState?.totalUser?.userWeekBeforeLastTotal), Number(chartState?.totalUser?.userLastWeekTotal))}% vs. last week</span> </div>
                                  :
                                  <div className="flex py-2">
                                    <div className="pr-3 ">
                                      <img
                                        className="w-5"
                                        src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1684683813/hjlqm92wwhp0lj93epso.png"
                                        alt=""
                                      />
                                    </div>
                                    <span className='text-green-500'>{calculatePercentageChange(Number(chartState?.totalUser?.userWeekBeforeLastTotal), Number(chartState?.totalUser?.userLastWeekTotal))}% vs. last week</span> </div> : 'loading  '
                              }

                            </span>
                          </div>
                        </div>
                      </div>
                      {/* .card-inner */}
                    </div>
                    {/* .nk-ecwg */}
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-xxl-3 col-sm-6">
                  <div className="card">
                    <div className="nk-ecwg nk-ecwg6">
                      <div className="card-inner">
                        <div className="">
                          <div className="">
                            <h6 className="text-xl">Tổng nhà tuyển dụng</h6>
                          </div>
                        </div>
                        <div className="data">
                          <div className="data-group">
                            <div className="amount text-sm">{chartState?.totalNTD.totalNTD}</div>
                            <div className="nk-ecwg6-ck">
                              <ChartNTD
                                chartData={Chart}
                                error={error}
                                isLoading={isLoading}
                                isSuccess={isSuccess}
                              />
                            </div>

                          </div>
                          <div className="info">
                            <span className="change up text-danger">
                              {
                                chartState ? (chartState?.totalNTD.userLastWeekTotalNTD < chartState?.totalNTD.userWeekBeforeLastTotalNTD) ?
                                  <div className="flex py-2">
                                    <div className="pr-3 ">
                                      <img
                                        className="w-5"
                                        src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1684684027/juiewztaypyiczhygevl.png"
                                        alt=""
                                      />
                                    </div>

                                    <span className='text-red-600'>{calculatePercentageChange(Number(chartState?.totalNTD?.userWeekBeforeLastTotalNTD), Number(chartState?.totalNTD?.userWeekBeforeLastTotalNTD))}% vs. last week</span> </div>
                                  :
                                  <div className="flex py-2">
                                    <div className="pr-3 ">
                                      <img
                                        className="w-5"
                                        src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1684683813/hjlqm92wwhp0lj93epso.png"
                                        alt=""
                                      />
                                    </div>
                                    <span className='text-green-500'>{calculatePercentageChange(Number(chartState?.totalNTD?.userWeekBeforeLastTotalNTD), Number(chartState?.totalNTD?.userLastWeekTotalNTD))}% vs. last week</span> </div> : 'loading  '
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* .card-inner */}
                    </div>
                    {/* .nk-ecwg */}
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-xxl-3 col-sm-6">
                  <div className="card">
                    <div className="nk-ecwg nk-ecwg6">
                      <div className="card-inner">
                        <div className="">
                          <div className="">
                            <h6 className="text-xl">Tổng người tìm việc</h6>
                          </div>
                        </div>
                        <div className="data">
                          <div className="data-group">
                            <div className="amount text-sm">{chartState?.totalNTV.totalNTV}</div>
                            <div className="nk-ecwg6-ck">
                              <ChartNTV
                                chartData={Chart}
                                error={error}
                                isLoading={isLoading}
                                isSuccess={isSuccess}
                              />
                            </div>

                          </div>
                          <div className="info">
                            <span className="change up text-danger">
                              {
                                chartState ? (chartState?.totalNTV.userLastWeekTotalNTV < chartState?.totalNTV.userWeekBeforeLastTotalNTV) ?
                                  <div className="flex py-2">
                                    <div className="pr-3 ">
                                      <img
                                        className="w-5"
                                        src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1684684027/juiewztaypyiczhygevl.png"
                                        alt=""
                                      />
                                    </div>

                                    <span className='text-red-600'>{calculatePercentageChange(Number(chartState?.totalNTV?.userWeekBeforeLastTotalNTV), Number(chartState?.totalNTV?.userLastWeekTotalNTV)).toFixed()}% vs. last week</span> </div>
                                  :
                                  <div className="flex py-2">
                                    <div className="pr-3 ">
                                      <img
                                        className="w-5"
                                        src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1684683813/hjlqm92wwhp0lj93epso.png"
                                        alt=""
                                      />
                                    </div>
                                    <span className='text-green-500'>{calculatePercentageChange(Number(chartState?.totalNTV?.userWeekBeforeLastTotalNTV), Number(chartState?.totalNTV?.userLastWeekTotalNTV)).toFixed()}% vs. last week</span> </div> : 'loading  '
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* .card-inner */}
                    </div>
                    {/* .nk-ecwg */}
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-xxl-3 col-sm-6">
                  <div className="card">
                    <div className="nk-ecwg nk-ecwg6">
                      <div className="card-inner">
                        <div className="">
                          <div className="">
                            <h6 className="text-xl">Tổng bài đăng</h6>
                          </div>
                        </div>
                        <div className="data">
                          <div className="data-group">
                            <div className="amount text-sm">{chartState?.TotalPosts}</div>
                            <div className="nk-ecwg6-ck">
                            </div>

                          </div>
                          <div className="info">
                            <span className="change up text-danger">
                              <div className="flex py-2">
                                <div className="pr-3 ">
                                  <img
                                    className="w-5"
                                    src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1684683813/hjlqm92wwhp0lj93epso.png"
                                    alt=""
                                  />
                                </div>
                                {/* <span className=''> % vs. last week</span> */}
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* .card-inner */}
                    </div>
                    {/* .nk-ecwg */}
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}


                {/* .col */}
                <div className="col-xxl-6">
                  <div className="card">
                    <div className="">
                      <div className="card-inner">
                        <div className="card-title-group mb-3">
                          <div className="card-title">
                            <h6 className="text-xl font-bold">Thống kê gói đăng ký</h6>
                          </div>

                        </div>
                        <ul className="nk-ecwg8-legends">
                          <li>
                            <div className="">
                              <span className="dot dot-lg sq text-sm" data-bg="#6576ff" />
                              {/* <span className='text-[#6576ff] font-bold'>Tổng gói đăng ký</span> */}
                            </div>
                          </li>
                          <li>
                            <div className="">
                              <span className="dot dot-lg sq " data-bg="" />
                              {/* <span className='text-[#eb6459] font-bold'>Tổng gói đã hủy</span> */}
                            </div>
                          </li>
                        </ul>
                        <div className="nk-ecwg8-ck">
                          <StatisticalPackage PackageHistory={HistoryPackage} />
                        </div>
                        <div className="chart-label-group ps-5">
                          <div className="chart-label">Time 1</div>
                          <div className="chart-label">Time 2</div>
                        </div>
                      </div>
                      {/* .card-inner */}
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-xxl-3 col-md-6">
                  <div className="card">
                    <div className="align-center">
                      <div className="card-inner flex-grow-1">
                        <div className="">
                          <div className="">
                            <h6 className="text-xl text-center">Thống kê lượng người dùng</h6>
                          </div>
                        </div>
                        <div className="align-center h-72"><StatisticalPackagePie PackageHistory={HistoryPackage} /></div>
                      </div>
                      {/* .card-inner */}
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-xxl-3 col-md-6">
                  <div className="card h-100">
                    <div className="card-inner">
                      <div className="card-title-group mb-2">
                        <div className="card-title">
                          <h6 className="">Thống kê</h6>
                        </div>
                      </div>
                      <ul className="nk-store-statistics">
                        <li className="item w-full flex justify-evenly">
                          <div className="">
                            <div className="">Số gói</div>
                            <div className="count py-1">{chartState?.TotalPackage}</div>
                          </div>
                          <img className='w-10' src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1684687461/l6imf0nh0m55inixceed.png" alt="" />
                        </li>
                        <li className="item w-full flex justify-evenly">
                          <div className="info">
                            <div className="">Người dùng</div>
                            <div className="count py-1">{chartState?.totalUser.totalUser}</div>
                          </div>
                          <img className='w-10' src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1684687461/l6imf0nh0m55inixceed.png" alt="" />
                        </li>
                        <li className="item w-full flex justify-evenly">
                          <div className="info">
                            <div className="">Bài đăng</div>
                            <div className="count py-1">{chartState?.TotalPosts}</div>
                          </div>
                          <img className='w-10' src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1684687461/l6imf0nh0m55inixceed.png" alt="" />
                        </li>
                        <li className="item w-full flex justify-evenly">
                          <div className="info">
                            <div className="">Việc làm</div>
                            <div className="count py-1">68</div>
                          </div>
                          <img className='w-10' src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1684687461/l6imf0nh0m55inixceed.png" alt="" />
                        </li>
                      </ul>
                    </div>
                    {/* .card-inner */}
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
                <div className="col-xxl-12">
                  <div className="card card-full">
                    <div className="card-inner">
                      <div className="card-title-group">
                        <div className="card-title">
                          <h6 className="text-xl">Lịch sử gói đăng ký</h6>
                        </div>
                      </div>
                    </div>
                    <div className="nk-tb-list mt-n2">
                      <div className="nk-tb-item nk-tb-head">
                        <div className="nk-tb-col">
                          <span>STT</span>
                        </div>
                        <div className="nk-tb-col tb-col-sm">
                          <span>Id nguời dùng</span>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                          <span>Ngày mua</span>
                        </div>
                        <div className="nk-tb-col">
                          <span>Số tiền</span>
                        </div>
                        <div className="nk-tb-col">
                          <span className="d-none d-sm-inline">Trạng thái</span>
                        </div>
                        <div className="nk-tb-col">
                          <span className="d-none d-sm-inline">Chi tiết</span>
                        </div>
                      </div>
                      {PackageHistory?.map((data, index: number) =>
                        <div className="nk-tb-item">
                          <div className="nk-tb-col">
                            <span className="tb-lead">
                              <a href="#">{index + 1}</a>
                            </span>
                          </div>
                          <div className="nk-tb-col tb-col-sm">
                            <div className="user-card">
                              <div className="user-name">
                                <span className="tb-lead">{data?._id}</span>
                              </div>
                            </div>
                          </div>
                          <div className="nk-tb-col tb-col-md">
                            <span className="tb-sub">{(new Date(data?.createdAt)).toLocaleDateString()}</span>
                          </div>
                          <div className="nk-tb-col">
                            <span className="tb-sub tb-amount">
                              {(data?.order_price).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                            </span>
                          </div>
                          <div>
                            {
                              data ? data?.order_status === true ?
                                <div className="nk-tb-col">
                                  <span className="badge badge-dot badge-dot-xs bg-success">
                                    Đã thanh toán
                                  </span>
                                </div> :
                                <div className="nk-tb-col">
                                  <span className="badge badge-dot badge-dot-xs bg-warning">
                                    Đang chờ duyệt
                                  </span>
                                </div>
                                : 'loading'

                            }
                          </div>
                          <div className="nk-tb-col tb-col-md">
                            <span className="tb-sub">      
                            <NavLink to={`/home/posts/${data._id}`}>
                              <EyeOutlined className='text-dark' />
                            </NavLink>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* .card */}
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .nk-block */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomeAdmin