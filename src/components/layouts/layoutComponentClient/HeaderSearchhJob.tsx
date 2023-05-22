import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderSearchhJob = () => {
    return (
        <>
            <div style={{ background: 'white' }}>
                <div className="head-related-jobs" style={{ color: 'black' }}>
                    <div className="head-logo-related-jobs">
                        <div className="pl-4 py-3 " ><img src='/src/image/logo1.png' width={'150px'} /></div>
                    </div>
                    <div className="head-related-jobs-search" id='head-related-jobs-search'>
                        <form className="pt-3">
                            <input
                                type="search"
                                className="form-control form-control-dark pl-4 py-4"
                                id='input-search'
                                placeholder="Tìm kiếm việc làm, công ty, kỹ năng"
                                aria-label="Search"
                            />
                            <button type="button" className="btn" id="related-jobs-search">
                                Tìm kiếm
                            </button>
                            
                        </form>

                    </div>
                </div>
                <div className="menu-nav-related">
                    <NavLink to={'/jobempolyee'}>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={'1.5em'}
                                height={'1.5em'}
                                fill="currentColor"
                                className="bi bi-briefcase d-inline"
                                viewBox="0 0 16 16"
                            >
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                            <span className='mr-3' style={{ color: 'black', padding: '1em' }}>Việc làm</span>
                        </span>
                    </NavLink>
                    <NavLink to={'/managejob'}>
                        <span className='mx-3'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={'1.5em'}
                                height={'1.5em'}
                                fill="currentColor"
                                className="bi bi-person-lines-fill d-inline"
                                viewBox="0 0 16 16"
                            >
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                            </svg>
                            <span style={{ color: 'black', padding: '1em' }}>Việc làm quản lí</span>
                        </span>
                    </NavLink>
                    <NavLink to={'/interview'}>
                        <span className='mx-3'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={'1.5em'}
                                height={'1.5em'}
                                fill="currentColor"
                                className="bi bi-question-circle d-inline"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                            </svg>
                            <span style={{ color: 'black', padding: '1em' }}>Câu hỏi phỏng vấn</span>
                        </span>
                    </NavLink>
                    <NavLink to={'/wage'}>
                        <span className='mx-3'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={'1.5em'}
                                height={'1.5em'}
                                fill="currentColor"
                                className="bi bi-coin d-inline"
                                viewBox="0 0 16 16"
                            >
                                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                            </svg>
                            <span style={{ color: 'black', padding: '1em' }}>Mức lương</span>
                        </span>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default HeaderSearchhJob