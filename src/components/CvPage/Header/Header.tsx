import classNames from 'classnames/bind'
import styles from "./Header.module.scss"

const cx = classNames.bind(styles)

const Header = () => {
  return (
    <>
        <section className={cx("btn-wrapper")}>
            <section className={cx("btn-wrapper__container")}>
                <a href='' className={cx("btn-back")}>
                    <i className="fa-solid fa-arrow-left"></i>
                    <span>Trở lại</span>
                </a>
                <section className={cx("btn-group")}>
                    <button className={cx("btn-preview", "btn")}>
                        <i className="fa-regular fa-eye"></i>
                        <span>Xem trước</span>
                    </button>
                    <button className={cx("btn-download", "btn")}>
                        <i className="fa-solid fa-download"></i>
                        <span>Tải xuống CV</span>
                    </button>
                    <button className={cx("btn-save", "btn", "btn--active")}>
                        <i className="fa-regular fa-file"></i>
                        <span>Lưu CV</span>
                    </button>
                </section>
            </section>
        </section>
    </>
  )
}

export default Header