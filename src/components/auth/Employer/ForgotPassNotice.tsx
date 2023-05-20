import React from 'react'

type Props = {}

const ForgotPassNotice = (props: Props) => {
    return (
        <>
            <section>
                <div className='w-full flex'>
                    <aside className='bg-gradient-to-b from-[#001744] to-[#0053EB] w-[35%] min-h-screen'>
                        <span className='text-2xl text-white flex justify-center p-[50%]'>EMPLOYER</span>
                    </aside>
                    <main className='w-[65%] flex flex-col justify-between mt-[200px]'>
                        <div className='w-[60%] mx-auto text-[#474747]'>
                            <div className='py-12'>
                                <h3 className='text-3xl font-[600]'>Quên mật khẩu</h3>
                            </div>
                            <div>
                                <p>Chúng tôi đã gửi đường dẫn đặt lại mật khẩu qua email. Kiểm tra hộp thư để tiếp tục.</p>
                            </div>
                        </div>
                        <div className='w-100 flex items-center gap-2 bg-[#EDEDED] p-[27px]'>
                            <p><span className='font-[700] text-[#333333]'>Bạn cần hỗ trợ?</span> Điện thoại: (84 28) 3925 8456 hoặc Email: jobsupport@jobforyou.com</p>
                        </div>
                    </main>
                </div>
            </section>
        </>
    )
}

export default ForgotPassNotice