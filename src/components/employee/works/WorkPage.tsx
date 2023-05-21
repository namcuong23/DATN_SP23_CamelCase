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
import { useSearchParams,useNavigate, createSearchParams } from "react-router-dom";
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
    const [career,setCareer] = useState([])
    const [params] = useSearchParams()
    const searchParams = params.get('keyword')
    const navigate = useNavigate()
    const [filterParams, setFilterParams] = useState({
        key: searchParams,
        work_location: "",
        job_salary: "",
        career : ""
    })
    useEffect(() => {
        const fetchProvinces = async () => {
            const { data: response }: any = await apiGetProvinces()
            setProvinces(response?.results);
        }
        fetchProvinces()
    }, [])
    useEffect(() => {
        loadData();
        loadCareers()
    }, [])

    useEffect(() => {
        getSearch(filterParams)
    }, [filterParams.work_location, filterParams.job_salary,filterParams.career,searchParams]
    )
    const loadData = async () => {
        return await axios
            .get("http://localhost:4000/api/posts")
            .then((responsive) => setData(responsive.data))
            .catch((error) => console.log(error))
    }
    const loadCareers  = async () => {
        return await axios
            .get("http://localhost:4000/api/careers")
            .then((responsive) => setCareer(responsive.data))
            .catch((error) => console.log(error))
    }
    const resetSearch = (e: any) => {
        e.preventDefault()
        setSearchMessage("")
        setFilterParams({ ...filterParams, key: "" })
        loadData()
    }
    const getSearch = async (params: any) => {
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
    const currentUser: any = UseAuth();
    const dataUser: any = useGetEprProfileQuery(currentUser?.email);
    const profile: any = dataUser.currentData;
    const { data: jobsaves } = useGetJobsaveByUIdQuery(profile?._id);
    console.log(jobsaves);
    const [addJobsave] = useAddJobsaveMutation()
    const onHandleAdd: any = (item: any) => {
        try {
            addJobsave({ job_name: item.job_name, job_description: item.job_description, work_location: item.work_location, job_salary: item.job_salary, user_id: profile?._id });
            // console.log(item);
            toast.success("Da them Vafo Yeu Thich");
        } catch (error) {
            console.log(error);
        }
    }
    const getSearchKey = () => {}
    return (
        <>
            <div className='min-h-[100vh]'>
                {/* SEARCH BAR */}
                <form>
                    <div className='h-[80px] w-100 py-3'>
                        <div className='container flex items-center justify-center h-100 w-100'>
                            <div className='flex items-center h-100 bg-[#F4F4F7] w-75 mr-2 rounded'>
                                <div onClick={handleSearch} className='h-100 flex items-center bg-[#F4F4F7] w-[65%]'>
                                    <button className='w-[10%] flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search text-black" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                    <input onClick={handleSearch} type="text" className='bg-[#F4F4F7] h-100 w-[90%] text-gray-600 focus:outline-none' placeholder='Tìm kiếm việc làm, công ty, kỹ năng'
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
                {/* CONTENT */}
                <div className="works-" style={{ backgroundColor: ' rgb(179, 206, 255)', width: '75%', height: '60px', margin: 'auto', borderRadius: '7px', display: 'flex' }}>
                    <select name="cars" onChange={(e) => setFilterParams({ ...filterParams, career: e.target.value })} id="cars" style={{ height: "40px", width: '170px', borderRadius: '4px', outline: 'none', marginTop: '8px', marginLeft: '10px', gap: '5px' }}>
                        <option value="">Tất Cả Nghề Nghiệp</option>
                        {career && career.map((item:any) =>{
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
                    <div style={{ display: 'flex' }}>
                        <p style={{ marginTop: '15px', marginLeft: '15px', marginRight: '10px' }}>Việc Cần Tuyển Gấp</p>
                        <input style={{ width: '20px', height: '20px', marginTop: '18px' }} type="checkbox" name="" id="" />
                    </div>
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
                                    <div className="img-works" style={{ marginTop: '25px', marginLeft: '20px' }}>
                                        <img src='data:image/png;base64,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' alt="" style={{ width: '150px', height: '150px', borderRadius: '6px' }} />
                                    </div>
                                    <div className="works-text" style={{ marginTop: '20px', marginLeft: '10px' }}>
                                        <h6>{item?.job_name}</h6>
                                        <p>Công Ty Cổ Phần Tập Đoàn Masterise</p>
                                        <p>Địa Điểm Làm Việc: {item.work_location}</p>
                                        <p>Cập nhật: Hôm nay - Bạn còn 2 ngày để ứng tuyển</p>
                                        <p> Thưởng Khám sức khỏe Laptop</p>
                                    </div>
                                    <div className="negotiate" style={{ marginTop: '25px', marginLeft: '80px' }}>
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>{formatCurrency(item.job_salary)} </p>
                                        <AiOutlineHeart onClick={() => onHandleAdd(item)} style={{ color: 'black', width: '20px', height: '20px', marginTop: '100px', marginLeft: '70px' }} />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="top-company" style={{ width: '370px' }}>
                        <div className="company-first" style={{ borderRadius: '5px', backgroundColor: 'white' }}>
                            <p style={{ fontWeight: 'bold' }}>Công Ty Hàng Đầu</p>
                            <img style={{ width: '100%', height: '230px' }} src="data:image/png;base64,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" alt="" />
                            <div className="company-text" style={{ textAlign: 'center', marginTop: '10px' }} >
                                <h6>Tek Experts</h6>
                                <p>Extraordinary Tech Talent Solutions</p>
                                <p style={{ color: 'blue' }}>4 vị trí đang tuyển dụng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkPage