import { AiOutlineHeart } from "react-icons/ai"
import { useEffect, useState } from 'react'
import { apiGetProvinces } from '../../../service/api';
import axios from "axios"
import { formatCurrency } from '../../../utils/FormatCurrrency'
import { useAddJobsaveMutation } from "../../../service/savejob";
import { toast } from "react-toastify";
import { useSearchParams, useNavigate } from "react-router-dom";
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
    const searchParams = params.get('keyword')
    const navigate = useNavigate()
    const [filterParams, setFilterParams] = useState({
        key: searchParams,
        work_location: "",
        job_salary: "",
        career: ""
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
    }, [filterParams.work_location, filterParams.job_salary, filterParams.career, searchParams]
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
        loadData()
    }
    const getSearch = async (params: any) => {
        setData([])
        try {
            const { data } = await axios({
                url: `http://localhost:4000/api/search`,
                params
            })
            console.log('abc', data);

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
            toast.success("Đã thêm vào mục yêu thích");
        } catch (error) {
            console.log(error);
        }
    }
    console.log(data);

    const getSearchKey = () => { }
    return (
        <>
            <div style={{ background: 'white' }} className='min-h-[100vh] pb-4'>
                
                {/* CONTENT */}
                <div className="" style={{ marginTop: '10px', backgroundColor: 'rgb(229, 238, 255)', width: '75%', height: '60px', margin: 'auto', borderRadius: '7px', display: 'flex' }}>
                    <select name="cars" onChange={(e) => setFilterParams({ ...filterParams, career: e.target.value })} id="cars" style={{ height: "40px", width: '170px', borderRadius: '4px', outline: 'none', marginTop: '8px', marginLeft: '10px', gap: '5px' }}>
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
                        {searchMessage}
                        {data.length === 0 ? (
                            <h2>Data Not Found</h2>
                        ) : (
                            data?.map((item: any, index: any) => (

                                <div key={index} className="works-item" style={{ gap: '10px', backgroundColor: '#f0f7ff', display: 'flex', border: '1px solid rgb(179, 206, 255)', borderRadius: '3px', height: '220px', width: '750px', marginTop: '20px' }}>
                                    <div className='d-flex justify-content-center align-items-center logo-area-wrapper logo-border' id='logo-area-wrapper'>
                                        <a style={{ background: 'white', justifyContent: 'center', display: 'flex', padding: '5px', border: '1px solid #fff' }}>
                                            <img src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Fpictureofcompany%2F6e%2F10922087.png&w=128&q=75" style={{ width: '100px', height: '60px', margin: '20px 0px' }} />
                                        </a>
                                    </div>
                                    <div className="works-text" style={{ marginTop: '35px', marginLeft: '10px' }}>
                                        <h6>{item?.job_name}</h6>
                                        <p style={{ marginTop: '5px' }}>Hình Thức Làm Việc : {item.working_form}</p>
                                        <p style={{ marginTop: '5px' }}> Số Lượng Cần Tuyển : {item.number_of_recruits}</p>
                                        <p style={{ marginTop: '5px' }}>Địa Điểm Làm Việc: {item.work_location}</p>
                                    </div>
                                    <div className="price" style={{ marginTop: '25px', marginLeft:"75px" }}>
                                        <p style={{ color: 'red', fontWeight: 'bold' }}>{formatCurrency(item.job_salary)}/Giờ </p>    
                                        <AiOutlineHeart onClick={() => onHandleAdd(item)} className="heart" style={{ width: '20px', height: '20px', marginTop: '100px', marginLeft: '150px' }} />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className='' id="banner-list-job">
                        <p className='py-3 pl-3 fs-6 border border-bottom-0' style={{ background: '#white', color: 'black' }}>Công Ty Hàng Đầu</p>
                        <div className='border border-top-0' style={{ paddingBottom: '0.9em' }} >
                            <img className="no-image" src='https://tse3.mm.bing.net/th?id=OIP.cLyW0WdrOvk6Nq7ehtoRxwHaEK&pid=Api&P=0' />
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