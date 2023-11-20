import classNames from 'classnames/bind';
import styles from './NotifyModalEpe.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

const NotifyModalEpe = (
        closeModal: any,
    ) => {
        return (
            <div className={cx('container')}>
                <div className={cx('modal')}>
                    <div className={cx('modal-header')}>
                        <div className={cx('modal-header__icon')}>
                            <i className="fa-regular fa-bell"></i>
                        </div>
                        <div className={cx('modal-header__title')}>
                            <h2>Thông báo & Tin tức</h2>
                            <p>Nhận thông báo tin tức hoặc công việc</p>
                        </div>
                        <button onClick={closeModal} className={cx('modal-header__btn')}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div className={cx('modal-body')}>
                        <div className={cx('modal-body__tabs')}>
                            <span className={cx('modal-body__tabs-notify', {
                                active: true
                            })}>Thông báo</span>
                            <span className={cx('modal-body__tabs-news')}>Tin tức</span>
                        </div>

                        <div className={cx('modal-body__content-msg')}>
                                Cập nhật hồ sơ để tìm thấy công việc phù hợp. 
                                <span>Cập nhật</span>
                            </div>

                        <div className={cx('modal-body__content')}>
                            <div className={cx('modal-body__content-notify')}>
                                <span className={cx('notify-img')}>
                                    <img src="https://images.vietnamworks.com/pictureofcompany/89/11125541.png" alt="" />
                                    <span>
                                        <i className="fa-solid fa-heart"></i>
                                    </span>
                                </span>
                                <div className={cx('notify-content')}>
                                    <span className={cx('notify-title')}>Giám Đốc Cao Cấp Quan Hệ Khách Hàng</span>
                                    <div className={cx('notify-desc')}>
                                        <span className={cx('notify-status')}>đã lưu</span>
                                        <span className={cx('notify-expirate')}>hết hạn trong 98 ngày trước</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('modal-body__content-notify')}>
                                <span className={cx('notify-img')}>
                                    <img src="https://images.vietnamworks.com/pictureofcompany/89/11125541.png" alt="" />
                                    <span>
                                        <i className="fa-solid fa-heart"></i>
                                    </span>
                                </span>
                                <div className={cx('notify-content')}>
                                    <span className={cx('notify-title')}>Giám Đốc Cao Cấp Quan Hệ Khách Hàng</span>
                                    <div className={cx('notify-desc')}>
                                        <span className={cx('notify-status')}>đã lưu</span>
                                        <span className={cx('notify-expirate')}>hết hạn trong 98 ngày trước</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('modal-footer')}>
                        <div className={cx('modal-footer__icon')}>
                            <i className="fa-regular fa-bell"></i>
                        </div>

                        <div className={cx('modal-footer__content')}>
                            <span className={cx('modal-footer__content-link')}>Công việc mới</span> hấp dẫn dành riêng cho bạn!
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default NotifyModalEpe