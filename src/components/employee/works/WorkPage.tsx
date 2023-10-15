import { AiOutlineHeart } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"
import { useEffect, useState } from 'react'
import { apiGetProvinces } from '../../../service/api';
import axios from "axios"
import { formatCurrency } from '../../../utils/FormatCurrrency'
import UseAuth from "../../auth/UseAuth";
import { useGetEprProfileQuery } from "../../../service/profileEpe";
import { useAddJobsaveMutation, useGetJobsaveByUIdQuery } from "../../../service/savejob";
import { toast } from "react-toastify";
import { useSearchParams, useNavigate, createSearchParams, NavLink } from "react-router-dom";
import { useAppSelector } from "../../../app/hook";
import { useGetUserByEmailQuery } from "../../../service/auth";
import './work.css'
type Props = {}

const WorkPage = (props: Props) => {
    const salaryOptions = [
        {
            title: "Lương Theo Giờ",
            salary: []
        },
        {
            title: "Từ 10.000d đến 15.000d",
            salary: [10000, 15000]
        },
        {
            title: "Từ 16.000d đến 20.000d",
            salary: [16000, 20000]
        },
        {
            title: "Từ 21.000d đến 25.000d",
            salary: [21000, 25000]
        },
        {
            title: "Từ 26.000d đến 30.000d",
            salary: [26000, 30000],
        },
        {
            title: "Trên 30.000d",
            salary: [31000, null],
        }
    ]
    const [data, setData] = useState([])
    const [provinces, setProvinces] = useState<any>([])
    const [searchMessage, setSearchMessage] = useState("")
    const [career, setCareer] = useState([])
    const [params] = useSearchParams()
    const searchParams = params.get('keyword');
    const careerParams = params.get('career');
   
    
    const navigate = useNavigate()
    const [filterParams, setFilterParams] = useState({
        key: searchParams,
        work_location: "",
        job_salary: "",
        career: careerParams,
    })
    console.log(filterParams.career);
    useEffect(() => {
        const fetchProvinces = async () => {
            const { data: response }: any = await apiGetProvinces()
            setProvinces(response?.results);
        }
        fetchProvinces()
    }, [])
    useEffect(() => {
        if(!careerParams){
            loadData();
        }
        loadCareers()
    }, [])

    useEffect(() => {
        getSearch(filterParams)
    }, [filterParams.work_location, filterParams.job_salary, filterParams.career, searchParams,careerParams]
    )
    const loadData = async () => {
        return await axios
            .get("http://localhost:4000/api/posts")
            .then((responsive) => setData(responsive.data))
            .catch((error) => console.log(error))
    }
    const loadCareers = async () => {
        return await axios
            .get("http://localhost:4000/api/careers")
            .then((responsive) => setCareer(responsive.data))
            .catch((error) => console.log(error))
    }
    const resetSearch = (e: any) => {
        e.preventDefault()
        setSearchMessage("")
        setFilterParams({ ...filterParams, key: "" })
        navigate('/works')
            loadData()
    }
    const getSearch = async (params: any) => {
        setData([]);
        try {
            const { data } = await axios({
                url: `http://localhost:4000/api/search`,
                params
            })
            
            setData(data.data);
            setSearchMessage(data.message)
        }

        catch (error) {
            console.log(error)
        }
    }
    const handleSearch = async (e: any) => {
        e.preventDefault();
        getSearch(filterParams)
        navigate(`/works?keyword=${filterParams.key}`)
    }
    //savejob
    const { email, isLoggedIn } = useAppSelector((res: any) => res.auth)
    const { data: user } = useGetUserByEmailQuery(email)
    const [addJobsave] = useAddJobsaveMutation()
    const onHandleAdd: any = (item: any) => {
        try {
            addJobsave({
                working_form: item.working_form, job_name: item.job_name, job_description: item.job_description, work_location: item.work_location, job_salary: item.job_salary, user_id: user?._id
            });
            toast.success("Da them Vafo Yeu Thich");
        } catch (error) {
            console.log(error);
        }
    }
    console.log(data);
    const searchCareer = (e) => {
        setFilterParams({ ...filterParams, career: e.target.value })
        const search = searchParams ? searchParams : ""
        navigate(`/works?keyword=${search}&career=${e.target.value}`)
    }
    const getSearchKey = () => { }
    return (
        <>
            <div style={{ background: 'white' }} className='min-h-[100vh]'>
                {/* SEARCH BAR */}
                <div style={{ background: 'white' }}>
                    <div className="head-related-jobs" style={{ color: 'black' }}>
                        <form>
                            <div className='h-[80px] w-100 py-3'>
                                <div className='container flex items-center justify-center h-100 w-100'>
                                    <div className='flex items-center h-100 bg-[#F4F4F7] w-75 mr-2 rounded'>
                                        <div className='h-100 flex items-center bg-[#F4F4F7] w-[65%]'>
                                            <button className='w-[10%] flex justify-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search text-black" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </button>
                                            <input type="text" className='bg-[#F4F4F7] h-100 w-[90%] text-gray-600 focus:outline-none' placeholder='Tìm kiếm việc làm, công ty, kỹ năng'
                                                value={filterParams.key ?? ""} onChange={(e) => setFilterParams({ ...filterParams, key: e.target.value })} />
                                        </div>
                                        {filterParams.key ? <button onClick={resetSearch} className='w-[10%] flex justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </button> : ""}
                                    </div>
                                    <div className='h-100'>
                                        <div className='h-100'>
                                            <button onClick={handleSearch} className='bg-[#FE7D55] hover:bg-[#FD6333] text-white rounded h-100 px-10'>Tìm kiếm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
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
                {/* CONTENT */}
                <div className="" style={{ marginTop: '10px', backgroundColor: 'rgb(229, 238, 255)', width: '75%', height: '60px', margin: 'auto', borderRadius: '7px', display: 'flex' }}>
                    <select value={filterParams.career} name="cars" onChange={(e) => searchCareer(e)} id="cars" style={{ height: "40px", width: '170px', borderRadius: '4px', outline: 'none', marginTop: '8px', marginLeft: '10px', gap: '5px' }}>
                        <option value="">Tất Cả Nghề Nghiệp</option>
                        {career && career.map((item: any) => {
                            return (
                                <option value={item._id}>{item.name}</option>
                            )
                        })}
                    </select>
                    {/* luong */}
                    <select onChange={(e) => setFilterParams({ ...filterParams, job_salary: e.target.value })} name="cars" id="cars" style={{ height: "40px", width: '170px', borderRadius: '4px', outline: 'none', marginTop: '8px', marginLeft: '30px', gap: '5px' }}>
                        {salaryOptions && salaryOptions.map((item: any) => {
                            return <option value={item.salary}>{item.title}</option>
                        })}
                    </select>
                    <select onChange={(e) => setFilterParams({ ...filterParams, work_location: e.target.value })} name="cars" id="cars" style={{ height: "40px", width: '170px', borderRadius: '4px', outline: 'none', marginTop: '8px', marginLeft: '30px', gap: '5px' }}>
                        <option value="">Địa Chỉ</option>
                        {
                            provinces ? provinces?.map((province: any) =>
                                <option value={province.province_name}>{province.province_name}</option>
                            ) : ''
                        }
                    </select>
                </div>
                {/* works */}
                <div className="content-works" style={{ margin: 'auto', marginTop: '20px', display: 'flex', width: '75%', justifyContent: 'space-between' }}>
                    <div className="list-works" >
                        <p style={{ display: 'flex', gap: '10px' }}>Trang Chủ  <BsArrowRight style={{ marginTop: '4px' }} /> Việc Làm</p>
                        {searchMessage}
                        {data.length === 0 ? (
                            <h2>Data Not Found</h2>
                        ) : (
                            data?.map((item: any, index: any) => (

                                <div key={index} className="works-item" style={{ gap: '10px', backgroundColor: '#f0f7ff', display: 'flex', border: '1px solid rgb(179, 206, 255)', borderRadius: '3px', height: '220px', width: '800px', marginTop: '20px' }}>
                                    <div className='d-flex justify-content-center align-items-center logo-area-wrapper logo-border' id='logo-area-wrapper'>
                                        <a style={{ background: 'white', justifyContent: 'center', display: 'flex', padding: '5px', border: '1px solid #fff' }}>
                                            <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F6e%2F10922087.png&w=128&q=75" style={{ width: '100px', height: '60px', margin: '20px 0px' }} />
                                        </a>
                                    </div>
                                    <div className="works-text" style={{ marginTop: '35px', marginLeft: '10px' }}>
                                        <h6>{item?.job_name}</h6>
                                        <p>Hình Thức Làm Việc : {item.working_form}</p>
                                        <p> Số Lượng Cần Tuyển : {item.number_of_recruits}</p>
                                        <p>Địa Điểm Làm Việc: {item.work_location}</p>
                                    </div>
                                    <div className="negotiate" style={{ marginTop: '25px', marginLeft: '190px' }}>
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>{formatCurrency(item.job_salary)}/Giờ </p>
                                        <AiOutlineHeart onClick={() => onHandleAdd(item)} style={{ color: 'black', width: '20px', height: '20px', marginTop: '100px', marginLeft: '60px' }} />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className='' id="banner-list-job">
                        <p className='py-3 pl-3 fs-6 border border-bottom-0' style={{ background: '#white', color: 'black' }}>Công Ty Hàng Đầu</p>
                        <div className='border border-top-0' style={{ paddingBottom: '0.9em' }} >
                            <img src='https://tse3.mm.bing.net/th?id=OIP.cLyW0WdrOvk6Nq7ehtoRxwHaEK&pid=Api&P=0' />
                            <p style={{ padding: '10px 0 0 ', textAlign: 'center', fontSize: '1em', fontWeight: 'bold' }}>Công Ty cổ phần MISA</p>
                            <p style={{ textAlign: 'center', padding: '10px 0 0 ' }}>Trở thành Marketer chuyên nghiệp cùng MISA ngay hôm nay</p>
                            <div style={{ textAlign: 'center', padding: '10px 0 0 ', fontSize: '0.9em', color: "blue" }}><a href='#'>9 vị trí đang ứng</a></div>
                        </div>
                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F500x600_122855.png&w=1920&q=75" style={{ marginTop: '0.8em' }} />
                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F500x600_122998.png&w=1920&q=75" style={{ marginTop: '0.8em' }} />
                        <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F3.%20500x600_123080.jpg&w=1920&q=75" style={{ marginTop: '0.8em' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkPage