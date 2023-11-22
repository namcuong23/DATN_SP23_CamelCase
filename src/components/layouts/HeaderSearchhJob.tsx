import React, { useEffect, useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { apiGetProvinces } from '../../service/api'

import './Layout.css'

const HeaderSearchhJob = ({ className }: { className: string }) => {
    const [provinces, setProvinces] = useState<any>([])
    const navigate = useNavigate()
    const [searchItem, setSearchItem] = useState('')
    let keyword = new URLSearchParams(location.search).get('q')
    const handelSearchInput = (event: any) => {
        setSearchItem(event.target.value)
    }
    const handelSubmitData = () => {
        navigate(`/works?q=${searchItem}`)
        if (keyword) {
            setSearchItem(keyword)
        } else {
            setSearchItem('')
        }
    }
    useEffect(() => {
        const fetchProvinces = async () => {
            const { data: response }: any = await apiGetProvinces()
            setProvinces(response?.results);
        }
        fetchProvinces()
    }, [])

    return (
        <>
            <div className={'h-[80px] w-100'}>
                <div className={'search-job flex items-center justify-center h-100 ' + className}>
                    <div className='flex items-center h-100 bg-[#F4F4F7] w-75 mr-2 rounded-[6px] overflow-hidden flex-1'>
                        <div className='h-100 flex items-center bg-[#F4F4F7] w-[65%]'>
                            <button className='w-[10%] flex justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search text-black" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                            <input type="text" className='bg-[#F4F4F7] h-100 w-[90%] text-gray-600 focus:outline-none' placeholder='Tìm kiếm việc làm, công ty, kỹ năng' onChange={handelSearchInput} />
                        </div>
                        <div className='flex items-center bg-[#F4F4F7] border-l-[1px] border-[#979797] h-[24px] mr-1'></div>
                        <div className='relative h-10 flex items-center bg-[#F4F4F7] w-[35%] px-3'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 384 512"
                                className="text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2"
                            >
                                <path
                                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                                />
                            </svg>
                            <select
                                name=""
                                id=""
                                className='bg-[#F4F4F7] focus:outline-none w-full pl-8 pr-4 py-2 rounded-full appearance-none'
                            >
                                <option disabled selected>Tất cả địa điểm</option>
                                {provinces?.map((item: any, index: any) => (
                                    <option value={index + 1} key={index + 1}>
                                        {item.province_name}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <div className='h-100'>
                        <div className='h-100'>
                            <button className='bg-[#FE7D55] hover:bg-[#FD6333] text-white rounded-[10px] h-100 px-10 ml-[6px]' onClick={handelSubmitData}>Tìm kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderSearchhJob