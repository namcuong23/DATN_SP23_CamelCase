import React from 'react'
import { useState} from 'react'
import './CVChoose1.css'


const CVChoose1 = () => {
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
                <div className='anh' style={{  }}>
                    <div className='thongtincanhan' style={{ padding: 15}}>
                        <div className='img' >
                            <img src='https://static.topcv.vn/cv-builder/assets/default-avatar.fc9c40ba.png' alt='#' width={180} height={190} style={{padding: 10}}/>
                        </div>
                        <h3 >Nguyễn Bá Cường</h3>
                        <div style={{padding:10 , width:171}} className='vitri'>
                            <input  type='text' style={{width:171, backgroundColor: '#353a3d',}}   placeholder='Vị trí ứng tuyển'/>
                        </div>
                        <div className='thongtin' >
                            <div className='d-inline'>
                                <div>
                                    <p style={{color: "#ec8f00"}}>Thông tin cá nhân</p>
                                </div>
                                <div style={{
                                    backgroundColor: "rgb(236 143 0 / 50%)", height:0.5, }}></div>
                                </div>
                                <div style={{width:190, padding:4}} className='pt-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-telephone-fill d-inline" style={{color: "#ec8f00"}} viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                    <input type='text' style={{width:'145px'}}  placeholder='0123456789'/>
                                </div>
                                <div style={{width:190, padding:4}} className='d-inline'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-envelope-at-fill d-inline" style={{color: "#ec8f00"}} viewBox="0 0 16 16">
                                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                                    </svg>
                                    <input type='text' style={{width:'145px', wordWrap:'break-word'}}  placeholder='cuong23@gmail.com'/>
                                </div>
                                <div style={{width:190, padding:4}} className='d-inline'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-facebook d-inline" style={{color: "#ec8f00"}} viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                    </svg>
                                    <input type='text' style={{width:'145px'}}  placeholder='Facebook.com'/>
                                </div>
                                <div style={{width:190, padding:4}} className='d-inline'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-geo-alt-fill d-inline" style={{color: "#ec8f00"}} viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>
                                    <input type='text' style={{width:'145px'}}  placeholder='Quận A, thành phố '/>
                                </div>
                            </div>
                        <div className='kynang' >
                            <div>
                                <p style={{color: "#ec8f00"}}>Các kỹ năng</p>
                            </div>
                            <div style={{
                                backgroundColor: "rgb(236 143 0 / 50%)", height:0.5, }}>

                            </div>
                            <div className='pt-3'>
                                <input type='text' placeholder='Tên kỹ năng' style={{backgroundColor:'#353a3d',width:166}} />
                            </div>
                            <div >
                                <input type='text' placeholder='Mô tả kỹ năng' style={{backgroundColor:'#353a3d',width:166}} />
                            </div>

                        </div>
                        <div className='sothich' >
                            <div>
                                <p style={{color: "#ec8f00"}}>Sở thích</p>
                            </div>
                            <div style={{
                                backgroundColor: "rgb(236 143 0 / 50%)", height:0.5, }}>

                            </div>
                            <div className='pt-3'>
                                <input type='text' placeholder='Điền sở thích của bạn' style={{backgroundColor:'#353a3d',width:166}} />
                            </div>
                        </div>
                        <div className='thongtinthem' >
                            <div>
                                <p style={{color: "#ec8f00"}}>Thông tin thêm</p>
                            </div>
                            <div style={{
                                backgroundColor: "rgb(236 143 0 / 50%)", height:0.5, }}>

                            </div>
                            <div className='pt-3'>
                                <input type='text' placeholder='Điền thông tin thêm ' style={{backgroundColor:'#353a3d',width:166}} />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='kinhnghiem' style={{width: 440 }}>
                    <div className='kinhnghiem1'>
                        <div className='muctieu'>
                            <p><strong>Mục tiêu nghề nghiệp</strong></p>
                            <input type='text' placeholder='Mục tiêu nghề nghiệp của bạn, bao gồm mục tiêu ngắn hạn và dài hạn' width={300}/>
                        </div>
                        <div>
                            <p><strong>Kinh nghiệm làm việc</strong></p>
                        </div>
                        <div>
                            <p><strong>Học vấn</strong></p>
                        </div>
                        <div>
                            <p><strong>Chứng chỉ</strong></p>
                        </div>
                        <div>
                            <p><strong>Hoạt động</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CVChoose1