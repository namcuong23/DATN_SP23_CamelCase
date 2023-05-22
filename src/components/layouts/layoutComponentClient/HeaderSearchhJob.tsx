import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderSearchhJob = () => {
    return (
        <>
            <div style={{ background: 'white' }}>
                <div className="head-related-jobs" style={{ color: 'black' }}>
                    <div className="head-related-jobs-search" id='head-related-jobs-search'>
                        <form className="py-3">
                            <input
                                type="search"
                                className="form-control form-control-dark pl-4 py-4"
                                id='input-search'
                                placeholder="Tìm kiếm việc làm, công ty, kỹ năng"
                                aria-label="Search"
                            />
                            <button type="button" className="btn h-full" id="related-jobs-search">
                                Tìm kiếm
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderSearchhJob