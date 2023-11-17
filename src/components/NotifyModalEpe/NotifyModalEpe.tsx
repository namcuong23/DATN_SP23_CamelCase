import classNames from 'classnames/bind';
import styles from './NotifyModalEpe.module.scss';
import { useGetNotificationByEmailQuery } from '../../service/notification';
import { useAppSelector } from '../../app/hook';
import moment from 'moment';
const cx = classNames.bind(styles);

const NotifyModalEpe = (
    closeModal: any,
) => {
    const { email, isLoggedIn } = useAppSelector((rs) => rs.auth)
    const { data: notification } = useGetNotificationByEmailQuery(email);
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
                        <div>
                            {notification ? (
                                notification.map((noti) => (
                                    <div key={noti._id} className={cx('modal-body__content-notify')}>
                                        <span className={cx('notify-img')}>
                                            <img src={noti.notificationImage} alt="" />
                                            <span>
                                                <i className="fa-solid fa-heart"></i>
                                            </span>
                                        </span>
                                        <div className={cx('notify-content')}>
                                            <span className={cx('notify-title')}>{noti.notification_title}</span>
                                        
                                            <div className={cx('notify-desc')}>
                                                <span className={cx('notify-expirate')}>
                                                    {moment(noti.created_at).format('DD/MM/YYYY HH:mm')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Loading notifications...</p>
                            )}F
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
            </div>  
          )
        }