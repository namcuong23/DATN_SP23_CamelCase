import { useState} from 'react'
import './CVChoose.css'
const CVChoose = () => {
    const [desc, setDesc] = useState('')
    const descObj: any = {
        id1: "1. Số năm kinh nghiệm bạn đã có, trong những lĩnh vực nào? (Nếu là sinh viên thì năm mấy, ngành nào?).<br/>2. Một thành tích nổi bật bạn có trong công việc quá khứ hoặc 1-2 kỹ năng nổi bật liên quan đến công việc bạn nộp.",
        id2: "• Chỉ đưa thông tin học vấn từ sau THPT + các khoá học ngắn hạn, chứng chỉ." +
        "• Ghi rõ tên ngành học, tên trường, thời gian bắt đầu và kết thúc.",
        id3: "• Sắp xếp thứ tự thời gian từ gần nhất đến xa nhất." +
        "• Mỗi công việc nên có 4-8 gạch đầu dòng mô tả nhiệm vụ đã làm.",
        id4:"1. Hoạt động xã hội có thể bao gồm: hoạt động thiện nguyện, hoạt động cộng đồng bên trong trường học, doanh nghiệp hoặc cá nhân, hoạt động câu lạc bộ.",
        id5:"1. Các khóa đào tạo kỹ năng mềm hay chuyên môn (đề cập thời gian, tổ chức, có thể chỉ ra một vài những vấn đề về chuyên môn khi bạn được học ở khóa học mà có liên quan đến công việc).",
        id6:"1. Chỉ đưa vào các giải thưởng có liên quan cụ thể đến công việc." +

        "2. Sắp xếp theo thứ tự thời gian từ gần nhất đến xa nhất." +
        
        "3. Ghi rõ tên giải thưởng, đơn vị trao giải, thời gian.",
    }

  return (
    <div  style={{backgroundColor: "#f4f4f4"}}>
        <div className="CV">
            <div className='cv-sidebar'>
                <div className="maucv">
                <button className=" border-0 rounded-2" style={{width:86, height:86, backgroundColor:'#f4f4f4'}}>Đổi mẫu CV</button>
                <button className="d-block mt-3 border-0 rounded-2" style={{width:86, height:86, backgroundColor:'#f4f4f4'}}>
                    Hướng dẫn viết CV
                </button>
                </div>
                <div className="huongdan">
                <p className="px-3 pt-3">Hướng dẫn viết CV</p>
                <hr />
                <p className="px-3">
                    {desc === "" ? 
                        <>
                            CV cơ bản cần có thông tin cá nhân, kỹ năng, học vấn và kinh nghiệm làm
                            việc.
                            <br />
                            Lưu ý ghi rõ tên bạn vào tiêu đề khi bấm Lưu hoặc Tải CV về máy.
                        </>
                    : desc}
                </p>
                </div>
            </div>    
            <div className="contentcv1">
                <div className="contentcv border border-dark-subtle mx-auto">
                    <div className="border border-dark-subtle">
                    <div className="border border-dark-subtle m-2">
                        <p
                        className="text-center fs-2 text"
                        style={{ fontFamily: '"Times New Roman", Times, serif' }}
                        >
                        <h3 className='pt-3'>Nguyễn Văn Cường</h3>
                        </p>
                        <div className="text-center">
                        <input
                            placeholder="Vị trí ứng tuyển"
                            className="border-0 text-center"
                        />
                        </div>
                        <div className="information p-2">
                            <div className='d-inline mx-auto'>
                                <div className="phone pr-3">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-telephone-fill d-inline "
                                    viewBox="0 0 16 16"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    />
                                    </svg>
                                    <input placeholder="0123 456 789" className="border-0" style={{width: '20%' , paddingLeft: 10}}/>
                                </div>  
                                <div className="email pr-3" >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-envelope-fill d-inline "
                                    viewBox="0 0 16 16"
                                    >
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                    </svg>
                                    <input placeholder="cuongnguyenba@gmail.com" className="border-0" style={{ width: "21%" , paddingLeft: 10}}/>
                                </div>
                                <div className="link pr-3">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-infinity d-inline "
                                    viewBox="0 0 16 16"
                                    >
                                    <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z" />
                                    </svg>
                                    <input placeholder="facebook.com/cuong.vn" className="border-0" style={{width: "21%" , paddingLeft: 10}}/>
                                </div>
                                <div className="Address pr-3">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-geo-alt-fill d-inline "
                                    viewBox="0 0 16 16"
                                    >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    <input
                                    placeholder="Quận A, Thành phố Hà Nội"
                                    className="border-0"
                                    style={{width: "21%"  ,paddingLeft: 10}}
                                    />
                                </div>
                            </div>    
                        </div>
                    </div>
                    </div>
                    <div className="p-2">
                    <div className="p-2">
                        <p>
                        <strong>MỤC TIÊU NGHỀ NGHIỆP</strong>
                        </p>
                        <div
                        style={{
                            width: "100%",
                            bottom: "-3px",
                            backgroundColor: "rgb(0, 0, 0)",
                            height: 1
                        }}
                        />
                        <div>
                        <input
                            className="js-input border-0"
                            style={{ width: "100%" }}
                            id='id1'
                            onClick={(e: any) => {
                                setDesc(descObj.id1)
                            }}
                            placeholder="Mục tiêu nghề nghiệp của bạn, bao gồm mục tiêu ngắn hạn và dài hạn"
                        />
                        </div>
                    </div>
                    <div className="p-2">
                        <p>
                        <strong>HỌC VẤN</strong>
                        </p>
                        <div
                        style={{
                            width: "100%",
                            bottom: "-3px",
                            backgroundColor: "rgb(0, 0, 0)",
                            height: 1
                        }}
                        />
                        <div className="border-0 border-bottom">
                        <div className="d-flex justify-content-between ">
                            <input
                            className="js-input border-0"
                            style={{ width: "50%" }}
                            id='id2'
                            onClick={(e: any) => setDesc(descObj.id2)}
                            placeholder="Tên trường học"
                            />
                            <input className="border-0" 
                            id='id2'
                            onClick={(e: any) => setDesc(descObj.id2)}
                            placeholder="Bắt đầu - Kết thúc" />
                        </div>
                        <div>
                            <input className="border-0" 
                            id='id2'
                            onClick={(e: any) => setDesc(descObj.id2)} 
                            placeholder="Ngành học / Môn học" />
                        </div>
                        <div className="mt-3">
                            <input
                            className="border-0"
                            style={{ width: "100%" }}
                            id='id2'
                            onClick={(e: any) => setDesc(descObj.id2)}
                            placeholder="Mô tả quá trình học tập hoặc thành tích của bạn"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <p>
                        <strong>KINH NGHIỆM LÀM VIỆC</strong>
                        </p>
                        <div
                        style={{
                            width: "100%",
                            bottom: "-3px",
                            backgroundColor: "rgb(0, 0, 0)",
                            height: 1
                        }}
                        />
                        <div className="border-0 border-bottom">
                        <div className="d-flex justify-content-between ">
                            <input
                            className="border-0"
                            style={{ width: "50%" }}
                            id='id3'
                            onClick={(e: any) => {
                                setDesc(descObj.id3)
                            }}
                            placeholder="Tên công ty"
                            />
                            <input className="border-0"
                            id='id3'
                            onClick={(e: any) => {
                                setDesc(descObj.id3)
                            }}
                            placeholder="Bắt đầu - Kết thúc" />
                        </div>
                        <div>
                            <input className="border-0"
                            id='id3'
                            onClick={(e: any) => {
                                setDesc(descObj.id3)
                            }}
                            placeholder="Vị trí công việc" />
                        </div>
                        <div className="mt-3">
                            <input
                            className="border-0"
                            style={{ width: "100%" }}
                            id='id3'
                            onClick={(e: any) => {
                                setDesc(descObj.id3)
                            }}
                            placeholder="Mô tả kinh nghiệm làm việc của bạn"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <p>
                        <strong>HOẠT ĐỘNG</strong>
                        </p>
                        <div
                        style={{
                            width: "100%",
                            bottom: "-3px",
                            backgroundColor: "rgb(0, 0, 0)",
                            height: 1
                        }}
                        />
                        <div className="border-0 border-bottom">
                        <div className="d-flex justify-content-between ">
                            <input
                            className="border-0"
                            style={{ width: "50%" }}
                            id='id4'
                            onClick={(e: any) => {
                                setDesc(descObj.id4)
                            }}
                            placeholder="Tên tổ chức"
                            />
                            <input className="border-0" placeholder="Bắt đầu - Kết thúc" />
                        </div>
                        <div>
                            <input className="border-0" placeholder="Vị trí của bạn" />
                        </div>
                        <div className="mt-3">
                            <input
                            className="border-0"
                            style={{ width: "100%" }}
                            placeholder="Mô tả hoạt động"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <p>
                        <strong>CHỨNG CHỈ</strong>
                        </p>
                        <div
                        style={{
                            width: "100%",
                            bottom: "-3px",
                            backgroundColor: "rgb(0, 0, 0)",
                            height: 1
                        }}
                        />
                        <div className="border-0 border-bottom">
                        <div className="d-flex justify-content-between ">
                            <input
                            className="border-0"
                            style={{ width: "50%" }}
                            id='id5'
                            onClick={(e: any) => {
                                setDesc(descObj.id5)
                            }}
                            placeholder="Tên chứng chỉ"
                            />
                            <input className="border-0" placeholder="Thời gian" />
                        </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <p>
                        <strong>DANH HIỆU VÀ GIẢI THƯỞNG</strong>
                        </p>
                        <div
                        style={{
                            width: "100%",
                            bottom: "-3px",
                            backgroundColor: "rgb(0, 0, 0)",
                            height: 1
                        }}
                        />
                        <div className="border-0 border-bottom">
                        <div className="d-flex justify-content-between ">
                            <input
                            className="border-0"
                            style={{ width: "50%" }}
                            id='id6'
                            onClick={(e: any) => {
                                setDesc(descObj.id6)
                            }}
                            placeholder="Tên giải thưởng"
                            />
                            <input className="border-0" placeholder="Thời gian" />
                        </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <p>
                        <strong>CÁC KỸ NĂNG</strong>
                        </p>
                        <div
                        style={{
                            width: "100%",
                            bottom: "-3px",
                            backgroundColor: "rgb(0, 0, 0)",
                            height: 1
                        }}
                        />
                        <div className="border-0 border-bottom">
                        <div className="d-flex justify-content-between ">
                            <input
                            className="border-0"
                            style={{ width: "30%" }}
                            placeholder="Tên kỹ năng"
                            />
                            <input
                            className="border-0"
                            style={{ width: "70%" }}
                            placeholder="Mô tả kỹ năng"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <p>
                        <strong>SỞ THÍCH</strong>
                        </p>
                        <div
                        style={{
                            width: "100%",
                            bottom: "-3px",
                            backgroundColor: "rgb(0, 0, 0)",
                            height: 1
                        }}
                        />
                        <div>
                        <input
                            className="border-0"
                            style={{ width: "100%" }}
                            placeholder="Điền các sở thích của bạn"
                        />
                        </div>
                    </div>
                    <div className="p-2">
                        <p>
                        <strong>THÔNG TIN THÊM</strong>
                        </p>
                        <div
                        style={{
                            width: "100%",
                            bottom: "-3px",
                            backgroundColor: "rgb(0, 0, 0)",
                            height: 1
                        }}
                        />
                        <div>
                        <input
                            className="border-0"
                            style={{ width: "100%" }}
                            placeholder="Điền thông tin thêm nếu "
                        />
                        </div>
                    </div>
                    </div>
                </div>
            </div>  
        </div>
  </div>

  )
}

export default CVChoose