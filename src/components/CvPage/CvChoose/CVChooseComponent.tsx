import classNames from 'classnames/bind';

import styles from './CVChoose.module.scss';

const cx = classNames.bind(styles);

function CVChooseComponent({ title, name, time, desc1, desc2 }: any) {
    return (
        <>
            <p className={cx('content__title')}>{title}</p>
            <div className={cx('content__education')}>
                <div className={cx('content-top')}>
                    <div
                        className={cx(
                            'content__education-text',
                            'fz-13',
                            'text-italic',
                        )}
                    >
                        <i>{name}</i>
                    </div>
                    <div
                        className={cx(
                            'content__education-text',
                            'fz-13',
                            'text-italic',
                        )}
                    >
                        <i>{time}</i>
                    </div>
                </div>
                <div className={cx('content-bottom')}>
                    <div
                        className={cx(
                            'content__education-text',
                            'fz-13',
                            'text-italic',
                        )}
                    >
                        <i>{desc1}</i>
                    </div>
                    <div
                        className={cx(
                            'content__education-text',
                            'fz-13',
                            'text-italic',
                        )}
                    >
                        <i>{desc2}</i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CVChooseComponent;
