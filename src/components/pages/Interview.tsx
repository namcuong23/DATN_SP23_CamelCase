import React from 'react'
import HeaderSearchhJob from '../layouts/layoutComponentClient/HeaderSearchhJob'

const Interview = () => {
    return (
        <>
            <div>
                {/* ****head */}
                <HeaderSearchhJob />
                {/* ****conntent */}
                <div style={{ background: '#f7f7f7', paddingBottom: '2em' }}>
                    <div className=" pt-3" >
                        <div className="content-interview" >
                            <div className='interview'>
                                <div className=" px-4 pt-5" style={{ background: 'white', color: 'black' }}>
                                    <p className="fw-bold fs-3" >
                                        Những câu hỏi phỏng vấn việc làm thường gặp &amp; cách trả lời hay nhất
                                        bằng tiếng Anh và tiếng Việt
                                    </p>
                                    <p className='fw-bold fs-5 pt-4 pb-2'>1. Giới thiệu sơ lược về bản thân bạn? <span style={{ fontWeight: 100, fontStyle: 'italic' }}>(Could you briefly Introduce yourself?)</span></p>
                                    Hầu hết nhà tuyển dụng đều dùng câu hỏi này để bắt đầu câu chuyện với ứng viên. Mục đích câu hỏi này là để đánh giá phong thái và cách trình bày của ứng viên. Lúc này, tùy thuộc vào câu trả lời của ứng viên mà nhà tuyển dụng sẽ đánh giá đây có phải là một ứng viên phù hợp hay không và đưa ra các câu hỏi tiếp theo để đánh giá kỹ năng, tính cách và kinh nghiệm làm việc.
                                    <br />
                                    <br />
                                    Tip: Để trả lời tốt câu hỏi này, bạn cần đưa ra khái quát những thông tin về cá nhân có liên quan, hữu ích cho vị trí mà mình ứng tuyển như: công việc hiện tại, trình độ học vấn, mục tiêu sự nghiệp,… Bạn nên cân nhắc giới thiệu bản thân theo trình tự thời gian quá khứ, hiện tại và tương lai cũng như gói gọn trong tối đa 2 phút. Chia sẻ ngắn về sở thích, tính cách cũng là một cách thu hút nhà tuyển dụng, tuy nhiên cũng không nên nói quá nhiều về những vấn đề này với nhà tuyển dụng.
                                    <br />
                                    <br />
                                    Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Việt:
                                    <br />
                                    "Trước khi giới thiệu về bản thân mình, em/tôi xin gửi lời cảm ơn chân thành tới anh/chị khi đã tạo cơ hội cho em/tôi để được trao đổi về vị trí ứng tuyển của quý công ty. Em chào anh/ chị, tên em là Mai, họ tên đầy đủ của em là Trịnh Thị Tuyết Mai. Em là sinh viên mới ra trường của Trường đại học X, trong thời gian làm sinh viên em đã từng tham gia một số công việc bán thời gian nhưng không thật sự ấn tượng, vì các công việc em làm khá đơn giản, tuy vậy thông qua chúng em học được tính kiên nhẫn và tỉ mỉ. Thông qua các hoạt động này, em có kinh nghiệm hơn trong việc nắm bắt tâm lý người khác, có thêm những kỹ năng như quan sát, có khả năng chịu áp lực cao. Và em tin những điều này sẽ có ích đối với vị trí này. Qua tìm hiểu kỹ về vị trí công việc và môi trường làm việc bên mình cũng như những kinh nghiệm và sở trường em đang có, em thực sự mong muốn được có cơ hội được làm việc cùng anh chị tại công ty Y với vị trí nhân viên tư vấn khách hàng."
                                    <br />
                                    <br />
                                    Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Anh:
                                    <br />

                                    "Before I introduce myself, I would like to thank you very much for giving me / me the opportunity to talk about the position of your company. / sister, my name is Mai, my full name is Trinh Thi Tuyet Mai. I am a fresh graduate of University X, when I was a student, I used to have some part-time jobs but none is not really significant, because the work I did was quite simple. Nonetheless I learned to be patient and meticulous. Through these jobs, I have more experience in interpersonal skills, observation, and high pressure tolerance. I believe these will be useful for this position through understanding carefully about the job position and working environment For me, I really want to have the opportunity to work with you at company Y as a client consultant.
                                    <p className='fw-bold fs-5 pt-4 pb-2'>2. Bạn có thể mô tả sơ lược về những công việc bạn đã làm? Nhiệm vụ chính ở công việc gần đây nhất của bạn là gì?<span style={{ fontWeight: 100, fontStyle: 'italic' }}>(Can you briefly describe the work you have done? What was the main tasks at your most recent job?)</span> </p>
                                    Mục đích của câu hỏi này để đánh giá về năng lực và những kinh nghiệm làm việc của bạn có phù hợp với vị trí đang ứng tuyển hay không.
                                    <br />
                                    <br />
                                    Tip: Được đánh giá là một trong các câu hỏi phỏng vấn thường gặp và quan trọng, cách trả lời phỏng vấn câu hỏi này là nên chân thật, nó giống như bạn đang chia sẻ những kinh nghiệm của bản thân, đừng cố nói những gì mình không biết, bạn sẽ không trả lời được nếu nhà tuyển dụng hỏi sâu hơn về chuyên môn.
                                    <br />
                                    Hãy nói những gì bạn được học hay những gì biết về công việc một cách ngắn gọn và đủ, cũng không nên kể chi tiết các công việc, quá dài dòng
                                    <br />
                                    Trong trường hợp bạn chưa có nhiểu kinh nghiệm, hãy nói bạn đang muốn theo đuổi công việc này và dành nhiều thời gian học hỏi, phát triển kỹ năng, bạn đang mong muốn tìm được một công ty tốt để gắn bó và cống hiến lâu dài.
                                    <br />
                                    <br />
                                    Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Việt:
                                    <br />
                                    "Trước kia, tôi đã làm trợ lý hành chính cho một giám đốc tại Nhà xuất bản Sách và tôi đã hỗ trợ sắp xếp lịch trình cho cho ông ấy cũng như cho toàn văn phòng. Công việc của tôi là chăm sóc tất cả các chi tiết hành chính để ông ấy có thể tập trung vào các dự án của mình. Tôi đã làm tất cả mọi thứ từ việc đặt vé chuyến bay để chuẩn bị và in ấn các bản tường trình để nộp làm báo cáo chi phí."
                                    <br />
                                    <br />
                                    Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Anh:
                                    <br />
                                    "In the past, I worked as an administrative assistant for a director at the Book Publishing House. I assisted with scheduling for him as well as for the entire office. My job was to take care of all administrative details so that he could focus on his projects. I did everything from booking a flight, preparing and printing reports and submitting an expense report. "
                                    <p className='fw-bold fs-5 pt-4 pb-2'>3. Những thành tựu nào đã đạt được trong công việc khiến bạn tự hào nhất?<span style={{ fontWeight: 100, fontStyle: 'italic' }}>(What achievements in your job are you most proud of?)</span> </p>





                                </div>
                            </div>
                            <div className='border border-top-0' id="related-jobs">
                                <p className='py-4 pl-3 fs-6' style={{ background: '#e5eeff', color: 'black' }}>Việc làm liên quan</p>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                                <div className='view-job'>
                                    <a className='job-logo' href='#' style={{ height: "3.5em", width: "3.5em" }}><img src='https://images.vietnamworks.com/pictureofcompany/6e/10922087.png' width={"56px"} height={'40px'} /></a>
                                    <div className='job-info'>
                                        <div className='text-break'><a className='job-title' href='#'>Giám đốc công ty doanh nhaanh 10 người làm trong cuộc thi</a></div>
                                        <p style={{ width: '100%' }}>
                                            <a href='#' style={{ width: '70%' }}>Công ty doanh nhanh 10 người làm trong cuộc thi</a>
                                            <div style={{ position: 'absolute' }}>Công ty doanh nhaanh 10 người làm trong cuộc thi</div>
                                        </p>
                                        <div style={{ color: 'blue' }}>Thương lượng</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Interview