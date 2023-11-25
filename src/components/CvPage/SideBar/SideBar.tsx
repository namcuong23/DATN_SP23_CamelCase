import { useState } from "react"
import classNames from "classnames/bind"
import styles from "./SideBar.module.scss"

const cx = classNames.bind(styles)
const navs: any = [
    {
        id: 1,
        value: "Đổi mẫu CV",
    },
    {
        id: 2,
        value: "Hướng dẫn viết CV",
    }
]
const cvs: any = [
    {
        id: 1,
        img: "https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/prosper.png",
    },
    {
        id: 2,
        img: "https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/ambitious.png",
    }
]

const SideBar = ({onClick}: any) => {
    const [navId, setNavId] = useState<number>(1)
    const [cvId, setCvId] = useState<number>(1)

    return (
        <>
            <section className={cx('sidebar')}>
                <ul className={cx("sidebar-nav")}>
                    {
                        navs.map((nav: any, index: number) => (
                            <li key={index} onClick={() => setNavId(nav.id)} className={cx("sidebar-item", {
                                "sidebar-item--active": nav.id === navId
                            })}>
                                <p>{nav.value}</p>
                            </li>
                        ))
                    }
                </ul>

                <section className={cx("sidebar-content", "box-shadow")}>
                    {
                        navId === 1 ? 
                        <>
                            <h5 className={cx("sidebar-content__title")}>Đổi mẫu CV</h5>
                            <section className={cx("sidebar-content__list")}>
                                {
                                    cvs.map((cv: any, index: number) => (
                                        <section key={index} onClick={() => {
                                            onClick(cv)
                                            setCvId(cv.id)
                                        }} className={cx("sidebar-content__item", {
                                            "sidebar-content__item--active": cv.id === cvId
                                        })}>
                                            <img src={cv.img} alt={"Mẫu CV " + cv.id} />
                                        </section>
                                    ))
                                }
                            </section>
                        </> : 
                        <>
                            <h5 className={cx("sidebar-content__title")}>Hướng dẫn viết CV</h5>
                        </>
                    }
                </section>
            </section>  
        </>
    )
}

export default SideBar