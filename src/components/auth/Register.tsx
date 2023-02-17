import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Input, Radio, Space } from 'antd';

const Register = () => {
    const [value, setValue] = useState(null);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <>
            <div className="card o-hidden border-0 text-dark">
                <div className="card-body p-0">
                    {/* Nested Row within Card Body */}
                    <div className="row p-0">
                        <div className="col-lg-5">
                            <div className="p-5">
                                <div>
                                    <h1 className="h4 text-gray-900 font-weight-bold">Tìm việc và tuyển dụng</h1>
                                    <p className="text-gray-900 mb-4">This is slogan of website.</p>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label className="text-dark fw-bold">Họ và tên</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-dark fw-bold">Email Hoặc Số điện thoại</label>
                                        <input type="email" className="form-control" id="exampleInputEmail" />
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label className="text-dark fw-bold">Mật khẩu</label>
                                            <input type="password" className="form-control" id="exampleInputPassword" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="text-dark fw-bold">Xác nhận mật khẩu</label>
                                            <input type="password" className="form-control" id="exampleRepeatPassword" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-3 mb-3 mb-sm-0">
                                            <label className="text-dark fw-bold">Vai trò: </label>
                                        </div>
                                        <div className="col-sm-9 mb-9">
                                            <Radio.Group onChange={onChange} value={value}>
                                                <Space direction='horizontal'>
                                                    <Radio value={1}>Người tuyển dụng</Radio>
                                                    <Radio value={2}>Người tìm việc</Radio>
                                                </Space>
                                            </Radio.Group>
                                        </div>
                                        {value === 1 ?
                                            <div className="panel-body">
                                                <div className="form-group">
                                                    <label className="text-dark fw-bold">Danh mục:</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option defaultValue={0}>Open this select menu</option>
                                                        <option value={1}>Doanh nghiệp</option>
                                                        <option value={2}>Cá nhân</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-dark fw-bold">Địa chỉ làm việc:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            : null}
                                        {value === 2 ?
                                            <div className="panel-body">
                                                <div className="form-group">
                                                    <label className="text-dark fw-bold">Địa chỉ thường trú:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-dark fw-bold">Khu vực:</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option defaultValue={0}>Choose an area</option>
                                                        <option value={1}>Hà Nội</option>
                                                        <option value={2}>TP Hồ Chí Minh</option>
                                                        <option value={3}>Đà Nẵng</option>
                                                    </select>
                                                </div>
                                            </div>
                                            : null}
                                    </div>
                                    <div className="pl-4">
                                        <input className="form-check-input" type="checkbox" />
                                        <p className="text-dark">Bạn đồng ý với <span className="fw-bold text-primary">Điều khoản dịch
                                            vụ</span> và <span className="fw-bold text-primary">Chính sách bảo mật </span> của chúng tôi.
                                        </p>
                                    </div>
                                    <a href="login.html" className="btn btn-primary btn-block">
                                        Đăng ký
                                    </a>
                                </form>
                                <div className="text-dark my-4">
                                    Bạn đã có tài khoản?
                                    <span>
                                        <a className="fw-bold" href=''> Đăng nhập! </a>
                                    </span>
                                </div>
                                <hr />
                                <div>
                                    <div className="fw-bold pb-0">Bạn gặp khó khăn khi tạo tài khoản?</div>
                                    <div>Vui lòng gọi tới số 0123456789 (giờ hành chính).</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 d-none d-lg-block bg-register-image" />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Register