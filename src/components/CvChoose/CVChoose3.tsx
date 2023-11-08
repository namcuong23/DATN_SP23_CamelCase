// import React from 'react'
// import { useState} from 'react'
// import './CVChoose3.css'



// const CVChoose3 = () => {
//     const [desc, setDesc] = useState('')
//     const descObj: any = {
//         id1: "1. Số năm kinh nghiệm bạn đã có, trong những lĩnh vực nào? (Nếu là sinh viên thì năm mấy, ngành nào?).<br/>2. Một thành tích nổi bật bạn có trong công việc quá khứ hoặc 1-2 kỹ năng nổi bật liên quan đến công việc bạn nộp.",
//         id2: "• Chỉ đưa thông tin học vấn từ sau THPT + các khoá học ngắn hạn, chứng chỉ." +
//         "• Ghi rõ tên ngành học, tên trường, thời gian bắt đầu và kết thúc.",
//         id3: "• Sắp xếp thứ tự thời gian từ gần nhất đến xa nhất." +
//         "• Mỗi công việc nên có 4-8 gạch đầu dòng mô tả nhiệm vụ đã làm.",
//         id4:"1. Hoạt động xã hội có thể bao gồm: hoạt động thiện nguyện, hoạt động cộng đồng bên trong trường học, doanh nghiệp hoặc cá nhân, hoạt động câu lạc bộ.",
//         id5:"1. Các khóa đào tạo kỹ năng mềm hay chuyên môn (đề cập thời gian, tổ chức, có thể chỉ ra một vài những vấn đề về chuyên môn khi bạn được học ở khóa học mà có liên quan đến công việc).",
//         id6:"1. Chỉ đưa vào các giải thưởng có liên quan cụ thể đến công việc." +

//         "2. Sắp xếp theo thứ tự thời gian từ gần nhất đến xa nhất." +
        
//         "3. Ghi rõ tên giải thưởng, đơn vị trao giải, thời gian.",
//     }
//   return (
//     <div  style={{backgroundColor: "#f4f4f4"}}>
//         <div className="CV">
//             <div className='cv-sidebar'>
//                     <div className="maucv">
//                         <button className=" border-0 rounded-2" style={{width:86, height:86, backgroundColor:'#f4f4f4'}}>Đổi mẫu CV</button>
//                         <button className="d-block mt-3 border-0 rounded-2" style={{width:86, height:86, backgroundColor:'#f4f4f4'}}>
//                             Hướng dẫn viết CV
//                         </button>
//                     </div>
//                     <div className="huongdan">
//                         <p className="px-3 pt-3">Hướng dẫn viết CV</p>
//                         <hr />
//                         <p className="px-3">
//                             {desc === "" ? 
//                                 <>
//                                     CV cơ bản cần có thông tin cá nhân, kỹ năng, học vấn và kinh nghiệm làm
//                                     việc.
//                                     <br />
//                                     Lưu ý ghi rõ tên bạn vào tiêu đề khi bấm Lưu hoặc Tải CV về máy.
//                                 </>
//                             : desc}
//                         </p>
//                     </div>
//             </div>
//             <section className="topcv">
//                 <div className="topcv__border">
//                     <div className="header">
//                         <div className="header__body">
//                             <div className="row">
//                             <div className="col-3 d-flex align-items-center">
//                                 <i
//                                 className="fa fa-phone"
//                                 data-v-5cee62ab=""
//                                 style={{
//                                     fontSize: 12,
//                                     marginRight: 12,
//                                     color: "rgb(255, 135, 95)"
//                                 }}
//                                 />
//                                 <input type="text" placeholder='033689124' />
//                             </div>
//                             <div className="col-3 d-flex align-items-center">
//                                 <i
//                                 className="fa fa-envelope"
//                                 data-v-5cee62ab=""
//                                 style={{
//                                     fontSize: 12,
//                                     marginRight: 12,
//                                     color: "rgb(255, 135, 95)"
//                                 }}
//                                 />
//                                 <input type="text" placeholder="cuong98@gmail.com" />
//                             </div>
//                             <div className="col-3 d-flex align-items-center">
//                                 <i
//                                 className="fa fa-globe"
//                                 data-v-5cee62ab=""
//                                 style={{
//                                     fontSize: 12,
//                                     marginRight: 12,
//                                     color: "rgb(255, 135, 95)"
//                                 }}
//                                 />
//                                 <input type="text" placeholder="facebook/cuong1ziu.com" />
//                             </div>
//                             <div className="col-3 d-flex align-items-center">
//                                 <i
//                                 className="fa fa-home"
//                                 data-v-5cee62ab=""
//                                 style={{
//                                     fontSize: 12,
//                                     marginRight: 12,
//                                     color: "rgb(255, 135, 95)"
//                                 }}
//                                 />
//                                 <input type="text" placeholder="Hà đông" />
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="header">
//                     <div className="content_img header__body px-3">
//                         <div className="row">
//                         <div className="col-8 d-flex flex-column justify-content-around">
//                             <input
//                             className="name fw-bold"
//                             type="text"
//                             name=""
//                             id=""
//                             placeholder="NGUYỄN VĂN CƯỜNG"
//                             />
//                             <input type="text" placeholder="Vị trí ứng tuyển" />
//                             <input
//                             type="text"
//                             placeholder="Mục tiêu nghề nghiệp của bạn, bao gồm mục tiêu ngắn hạn và dài hạn"
//                             />
//                         </div>
//                         <div className="col-4">
//                             <img src="https://static.topcv.vn/cv-builder/assets/default-avatar.fc9c40ba.png" alt="" />
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                     <div className="header">
//                     <div className="content_img header__body px-3">
//                         <div className="row">
//                         <div className="col-12 pb-2 bordertemplate">
//                             <input
//                             className="kinhnghiem fw-bold"
//                             type="text"
//                             name=""
//                             id=""
//                             placeholder="Kinh nghiệm làm việc"
//                             />
//                         </div>
//                         <div className="col-1">
//                             <div
//                             style={{
//                                 width: 16,
//                                 height: 16,
//                                 display: "block",
//                                 borderRadius: "50%",
//                                 border: "2px solid rgb(204, 204, 204)",
//                                 backgroundColor: "rgb(255, 135, 95)"
//                             }}
//                             ></div>
//                             <div
//                             style={{
//                                 height: 36,
//                                 width: 2,
//                                 marginLeft: 7,
//                                 display: "block",
//                                 border: "1px solid rgb(180, 180, 180)"
//                             }}
//                             ></div>
//                         </div>
//                         <div className="col-5">
//                             <input type="text" name="" id="" placeholder="Bắt đầu - kết thúc" />
//                             <input type="text" name="" id="" placeholder="Tên công ty" />
//                         </div>
//                         <div className="col-4">
//                             <input type="text" name="" id="" placeholder="Vị trí công việc" />
//                             <input
//                             type="text"
//                             name=""
//                             id=""
//                             placeholder="Mô tả kinh nghiệm làm việc của bạn"
//                             />
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                     <div className="header">
//                     <div className="header__body">
//                         <div className="row">
//                         <div className="col-4">
//                             <div className="bordertemplate">
//                             <input
//                                 className="kinhnghiem fw-bold"
//                                 type="text"
//                                 style={{ width: "60%" }}
//                                 name=""
//                                 id=""
//                                 placeholder="HỌC VẤN"
//                             />
//                             </div>
//                             <div>
//                             <input type="text" name="" id="" placeholder="Tên trường" />
//                             <input type="text" name="" id="" placeholder="Ngành" />
//                             <input
//                                 type="text"
//                                 name=""
//                                 id=""
//                                 placeholder="Bắt đầu - kết thúc"
//                             />
//                             <input type="text" name="" id="" placeholder="Mô tả" />
//                             </div>
//                         </div>
//                         <div className="col-4">
//                             <div>
//                             <div>
//                                 <div className="bordertemplate">
//                                 <input
//                                     className="kinhnghiem fw-bold"
//                                     style={{ width: "80%" }}
//                                     type="text"
//                                     name=""
//                                     id=""
//                                     placeholder="CÁC KỸ NĂNG"
//                                 />
//                                 </div>
//                                 <div>
//                                 <input type="text" name="" id="" placeholder="Tên trường" />
//                                 <input type="text" name="" id="" placeholder="Ngành" />
//                                 <input
//                                     type="text"
//                                     name=""
//                                     id=""
//                                     placeholder="Bắt đầu - kết thúc"
//                                 />
//                                 <input type="text" name="" id="" placeholder="Mô tả" />
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
//                         <div className="col-4">
//                             <div>
//                             <div className="bordertemplate">
//                                 <input
//                                 className="kinhnghiem fw-bold"
//                                 style={{ width: "80%" }}
//                                 type="text"
//                                 name=""
//                                 id=""
//                                 placeholder="CHỨNG CHỈ"
//                                 />
//                             </div>
//                             <div>
//                                 <input type="text" name="" id="" placeholder="Tên trường" />
//                                 <input type="text" name="" id="" placeholder="Ngành" />
//                             </div>
//                             </div>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                     <div className="header">
//                     <div className="content_img header__body px-3">
//                         <div className="row">
//                         <div className="col-12 pb-2 bordertemplate">
//                             <input
//                             className="kinhnghiem fw-bold"
//                             type="text"
//                             name=""
//                             id=""
//                             placeholder="DỰ ÁN"
//                             />
//                         </div>
//                         <div className="col-1">
//                             <div
//                             style={{
//                                 width: 16,
//                                 height: 16,
//                                 display: "block",
//                                 borderRadius: "50%",
//                                 border: "2px solid rgb(204, 204, 204)",
//                                 backgroundColor: "rgb(255, 135, 95)"
//                             }}
//                             ></div>
//                             <div
//                             style={{
//                                 height: 36,
//                                 width: 2,
//                                 marginLeft: 7,
//                                 display: "block",
//                                 border: "1px solid rgb(180, 180, 180)"
//                             }}
//                             ></div>
//                         </div>
//                         <div className="col-5">
//                             <input type="text" name="" id="" placeholder="Bắt đầu - kết thúc" />
//                             <input type="text" name="" id="" placeholder="Tên công ty" />
//                         </div>
//                         <div className="col-4">
//                             <input type="text" name="" id="" placeholder="Vị trí công việc" />
//                             <input
//                             type="text"
//                             name=""
//                             id=""
//                             placeholder="Mô tả kinh nghiệm làm việc của bạn"
//                             />
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                     <div className="header">
//                     <div className="content_img header__body px-3">
//                         <div className="row">
//                         <div className="col-12 pb-2 bordertemplate">
//                             <input
//                             className="kinhnghiem fw-bold"
//                             type="text"
//                             name=""
//                             id=""
//                             placeholder="HOẠT ĐỘNG"
//                             />
//                         </div>
//                         <div className="col-1">
//                             <div
//                             style={{
//                                 width: 16,
//                                 height: 16,
//                                 display: "block",
//                                 borderRadius: "50%",
//                                 border: "2px solid rgb(204, 204, 204)",
//                                 backgroundColor: "rgb(255, 135, 95)"
//                             }}
//                             ></div>
//                             <div
//                             style={{
//                                 height: 36,
//                                 width: 2,
//                                 marginLeft: 7,
//                                 display: "block",
//                                 border: "1px solid rgb(180, 180, 180)"
//                             }}
//                             ></div>
//                         </div>
//                         <div className="col-5">
//                             <input type="text" name="" id="" placeholder="Bắt đầu - kết thúc" />
//                             <input type="text" name="" id="" placeholder="Tên công ty" />
//                         </div>
//                         <div className="col-4">
//                             <input type="text" name="" id="" placeholder="Vị trí công việc" />
//                             <input
//                             type="text"
//                             name=""
//                             id=""
//                             placeholder="Mô tả kinh nghiệm làm việc của bạn"
//                             />
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                     <div className="header">
//                     <div className="header__body">
//                         <div className="row">
//                         <div className="col-4">
//                             <div className="bordertemplate">
//                             <input
//                                 className="kinhnghiem fw-bold"
//                                 type="text"
//                                 style={{ width: "60%" }}
//                                 name=""
//                                 id=""
//                                 placeholder="SỞ THÍCH"
//                             />
//                             </div>
//                             <div>
//                             <input type="text" name="" id="" placeholder="Tên trường" />
//                             <input type="text" name="" id="" placeholder="Ngành" />
//                             <input
//                                 type="text"
//                                 name=""
//                                 id=""
//                                 placeholder="Bắt đầu - kết thúc"
//                             />
//                             <input type="text" name="" id="" placeholder="Mô tả" />
//                             </div>
//                         </div>
//                         <div className="col-4">
//                             <div>
//                             <div>
//                                 <div className="bordertemplate">
//                                 <input
//                                     className="kinhnghiem fw-bold"
//                                     style={{ width: "90%" }}
//                                     type="text"
//                                     name=""
//                                     id=""
//                                     placeholder="NGƯỜI GIỚI THIỆU"
//                                 />
//                                 </div>
//                                 <div>
//                                 <input type="text" name="" id="" placeholder="Tên trường" />
//                                 <input type="text" name="" id="" placeholder="Ngành" />
//                                 <input
//                                     type="text"
//                                     name=""
//                                     id=""
//                                     placeholder="Bắt đầu - kết thúc"
//                                 />
//                                 <input type="text" name="" id="" placeholder="Mô tả" />
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
//                         <div className="col-4">
//                             <div>
//                             <div className="bordertemplate">
//                                 <input
//                                 className="kinhnghiem fw-bold"
//                                 style={{ width: "100%" }}
//                                 type="text"
//                                 name=""
//                                 id=""
//                                 placeholder="DANH HIỆU"
//                                 />
//                             </div>
//                             <div>
//                                 <input type="text" name="" id="" placeholder="Tên trường" />
//                                 <input type="text" name="" id="" placeholder="Ngành" />
//                             </div>
//                             </div>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
            
//     </div>
//   )
// }

// export default CVChoose3