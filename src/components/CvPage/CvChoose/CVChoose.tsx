import classNames from 'classnames/bind';

import styles from './CVChoose.module.scss';
import CVChooseComponent from './CVChooseComponent';

const cx = classNames.bind(styles);

const items = [
    {
        icon: <i className="icon fa-solid fa-phone"></i>,
        text: '123 456 789',
        border: true,
    },
    {
        icon: <i className="icon fa-solid fa-envelope"></i>,
        text: 'dovuong020802@gmail.com',
        isValue: true,
    },
    {
        icon: <i className="icon fa-solid fa-link"></i>,
        text: 'facebook.com',
    },
    {
        icon: <i className="icon fa-solid fa-location-dot"></i>,
        text: 'Quận A, Thành phố Hà Nội',
        border: true,
    },
];
const CVChoose = ({container}: any) => {

  return (
    <>
        <div
            className={cx('children-wrapper', {
                container: container,
            })}
        >
            <div className={cx('header')}>
                <div className={cx('header__content')}>
                    <div className={cx('header__label')}>
                        {container && (
                            <img
                                className={cx('header__img')}
                                src="https://static.topcv.vn/cv-builder/assets/default-avatar.fc9c40ba.png"
                                alt="avatar"
                            />
                        )}
                        <div className={cx('header__label-info')}>
                            <h1 className={cx('name')}>Đỗ Quốc Vương</h1>
                            <div
                                className={cx(
                                    'nominee',
                                    'fz-13',
                                    'text-italic',
                                )}
                            >
                                <i>Vị trí ứng tuyển</i>
                            </div>
                        </div>
                    </div>
                    <div className={cx('header__info')}>
                        <div className={cx('header__info-wrapper')}>
                            {container && (
                                <div
                                    className={cx(
                                        'header__info-title',
                                        'text-italic',
                                    )}
                                >
                                    Thông tin cá nhân
                                </div>
                            )}
                            {items.map((item, index) => (
                                <div
                                    className={cx('header__info-content')}
                                    key={index}
                                >
                                    {item.icon}
                                    <span
                                        className={cx({
                                            isValue: item.isValue,
                                            border: item.border,
                                        })}
                                    >
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('content-wrapper')}>
                <CVChooseComponent
                    title={'MỤC TIỂU NGHỀ NGHIỆP'}
                    name={'Mục tiêu nghề nghiệp của bạn bao gồm ngắn hạn và dài hạn'}
                />
                <CVChooseComponent
                    title={'HỌC VẤN'}
                    name={'Tên trường học'}
                    time={'Thời gian'}
                    desc1={'Ngành học / Môn học'}
                    desc2={'Mô tả quá trình học tập hoặc thành tích của bạn'}
                />
                <CVChooseComponent
                    title={'KINH NGHIỆM LÀM VIỆC'}
                    name={'Tên công ty'}
                    time={'Thời gian'}
                    desc1={'Vị trí công việc'}
                    desc2={'Mô tả kinh nghiệm làm việc của bạn'}
                />
                <CVChooseComponent
                    title={'KỸ NĂNG'}
                    name={'Tên kỹ năng'}
                    desc1={'Mô tả kỹ năng'}
                />
                <CVChooseComponent
                    title={'THÔNG TIN THÊM'}
                    name={'Điền thông tin thêm nếu có'}
                />
                
            </div>
        </div>
    </>

  )
}

export default CVChoose