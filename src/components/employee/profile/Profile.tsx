import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAppSelector } from '../../../app/hook'
import { useGetUserByEmailQuery } from '../../../service/auth'

import './Profile.scss'
import Infotmation from './Infotmation'
import MyJob from './MyJob';
import AccountMng from './AccountMng';
import {
    AccountMngIcon,
    InformationIcon, 
    MyJobIcon
} from './icons'
import HeaderSearchhJob from '../../layouts/HeaderSearchhJob';

const Profile: any = () => {
    const [param, setParam] = useSearchParams()
    const key = param.get('tab')
    const profilePages = [
        {id: 1, icon: <InformationIcon />, title: 'Hồ sơ của tôi', page: Infotmation, tab: 'information'},
        {id: 2, icon: <MyJobIcon />, title: 'Việc làm của tôi', page: MyJob, tab: 'my-job'},
        {id: 3, icon: <AccountMngIcon />, title: 'Quản lý tài khoản', page: AccountMng, tab: 'account-manage'},
    ]

    let Component = profilePages[0].page;
    if (key) {
        profilePages.map((profilePage: any) => {
            if (key === profilePage.tab) {
                Component = profilePage.page;
            }
        })
    }

    const { email, isLoggedIn } = useAppSelector((res: any) => res.auth)
    const navigate = useNavigate()
    const { data: user } = useGetUserByEmailQuery(email)

    if (isLoggedIn == false) {
        return navigate('/login')
    }

    return (
        <>
            <div className='bg-white'>
                <HeaderSearchhJob className={'py-[16px]'} />
            </div>
            {isLoggedIn ? <div className='bg-gray-100 min-h-screen mb-[260px]'>
                {/* CONTENT */}
                <div className='flex items-start w-100 gap-3 p-3'>
                    {/* Navbar */}
                    <aside className='rounded w-25 space-y-2'>
                        <section className='border-1 rounded bg-[#4A80F8] p-3'>
                            <div className='flex items-center space-x-4'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="80" height="80"
                                        fill="currentColor"
                                        className="bi bi-person-fill text-[#CCDEFF] bg-[#E6EFFF] border-4 border-[#005AFF] rounded-full p-2"
                                        viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <h3 className='text-[20px] font-[600] text-white'>{user?.name}</h3>
                                </div>
                            </div>
                        </section>
                        <section className='border-1 bg-white'>
                            <button className='flex items-center p-[17px] w-100 border rounded hover:bg-[#EBF2FF] text-[#333333]'>
                                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 3.35986C5.91184 3.35986 0.959961 8.31174 0.959961 14.3999C0.959961 16.048 1.28809 17.5424 1.94621 18.9449C1.97621 19.0105 2.00809 19.0742 2.03809 19.1399C2.08309 19.228 2.12621 19.318 2.17309 19.4061C2.35121 19.753 2.54059 20.0942 2.75621 20.4224C2.84434 20.5574 2.99434 20.6399 3.15746 20.6399H20.8425C21.0056 20.6399 21.1556 20.5574 21.2437 20.4224C21.4593 20.0942 21.6487 19.753 21.8268 19.4061C21.8718 19.318 21.9168 19.228 21.9618 19.1399C21.9918 19.0742 22.0237 19.0105 22.0537 18.9449C22.7118 17.5424 23.04 16.048 23.04 14.3999C23.04 8.31174 18.0881 3.35986 12 3.35986ZM14.88 18.7199H9.11996C8.85371 18.7199 8.63996 18.5042 8.63996 18.2399C8.63996 17.9755 8.85371 17.7599 9.11996 17.7599H14.88C15.1462 17.7599 15.36 17.9755 15.36 18.2399C15.36 18.5042 15.1462 18.7199 14.88 18.7199ZM17.4412 11.7636L12.9581 14.3905C12.9581 14.3942 12.96 14.3961 12.96 14.3999C12.96 14.9305 12.5306 15.3599 12 15.3599C11.4693 15.3599 11.04 14.9305 11.04 14.3999C11.04 13.8692 11.4693 13.4399 12 13.4399C12.1706 13.4399 12.3281 13.4886 12.4668 13.5655L16.9518 10.9367C17.1787 10.8017 17.475 10.8767 17.61 11.1055C17.745 11.3342 17.67 11.6286 17.4412 11.7636ZM20.7206 19.4399C20.6306 19.5936 20.4693 19.6799 20.3043 19.6799C20.2818 19.6799 20.2575 19.6742 20.235 19.6705C20.2106 19.6742 20.1843 19.6799 20.16 19.6799C20.0681 19.6799 19.9762 19.6536 19.8937 19.5992L18.4537 18.6392C18.2325 18.493 18.1725 18.1949 18.3206 17.9736C18.4668 17.7524 18.765 17.6924 18.9862 17.8405L20.0943 18.5792C20.1 18.568 20.1056 18.5567 20.1112 18.5474C20.1131 18.5192 20.1131 18.4911 20.1337 18.4967C20.1356 18.4967 20.1375 18.4967 20.1375 18.4967C20.7075 17.368 21.0375 16.1342 21.105 14.8799H19.68C19.4137 14.8799 19.2 14.6661 19.2 14.3999C19.2 14.1355 19.4137 13.9199 19.68 13.9199H21.0956C21.0281 12.6299 20.6943 11.413 20.1431 10.318C20.1318 10.2974 20.115 10.2805 20.1037 10.258L18.9712 10.9536C18.8925 11.0024 18.8062 11.0249 18.72 11.0249C18.5587 11.0249 18.4012 10.9424 18.3112 10.7942C18.1725 10.5692 18.2437 10.273 18.4687 10.1342L19.6237 9.42736C19.5881 9.37299 19.56 9.31861 19.53 9.26424C18.8137 8.21799 17.8818 7.33299 16.8018 6.66174C16.7831 6.65049 16.7606 6.63924 16.7418 6.62799L16.05 7.88236C15.9618 8.03986 15.7987 8.12986 15.6281 8.12986C15.5512 8.12986 15.4706 8.11111 15.3975 8.06986C15.165 7.94236 15.0806 7.64986 15.21 7.41736L15.8981 6.17049C15.8868 6.16486 15.8756 6.15736 15.8643 6.15174C14.8256 5.66236 13.6837 5.36799 12.4781 5.30424V6.71986C12.4781 6.98424 12.2643 7.19986 11.9981 7.19986C11.7337 7.19986 11.5181 6.98424 11.5181 6.71986V5.30424C10.2112 5.37361 8.97559 5.71486 7.86934 6.27924C7.82996 6.30361 7.78871 6.32799 7.74934 6.34861L8.48809 7.54299C8.62684 7.76799 8.55746 8.06424 8.33059 8.20299C8.25184 8.25174 8.16559 8.27424 8.07934 8.27424C7.91809 8.27424 7.76246 8.19361 7.67059 8.04736L6.92621 6.83986C6.89246 6.86236 6.85871 6.87924 6.82496 6.89799C5.77871 7.62361 4.89746 8.56111 4.23184 9.64674L5.42809 10.2974C5.66246 10.4249 5.74871 10.7155 5.62121 10.948C5.53496 11.1092 5.36996 11.1992 5.19934 11.1992C5.12246 11.1992 5.04371 11.1805 4.97059 11.1411L3.77246 10.4905C3.27184 11.5405 2.96809 12.6974 2.90434 13.9199H4.31996C4.58621 13.9199 4.79996 14.1355 4.79996 14.3999C4.79996 14.6642 4.58621 14.8799 4.31996 14.8799H2.89496C2.96246 16.1249 3.28496 17.3474 3.84746 18.4686C3.85121 18.478 3.86059 18.4874 3.86621 18.4949C3.88121 18.5249 3.91121 18.5755 3.91121 18.5755L5.01371 17.8405C5.23496 17.6924 5.53309 17.7524 5.67934 17.9736C5.82746 18.193 5.76746 18.4911 5.54621 18.6392L4.10621 19.5992C4.02371 19.6536 3.93184 19.6799 3.83996 19.6799C3.83434 19.6799 3.82684 19.6649 3.81746 19.6555C3.61496 19.7099 3.38996 19.633 3.27934 19.4399C2.39059 17.9042 1.91996 16.1624 1.91996 14.3999C1.91996 8.84236 6.44246 4.31986 12 4.31986C17.5575 4.31986 22.08 8.84236 22.08 14.3999C22.08 16.1624 21.6093 17.9042 20.7206 19.4399Z" fill="#888888"></path>
                                </svg>
                                <span className='text-[14px] pl-[10px]'>Tổng quan</span>
                            </button>
                        </section>
                        {
                            profilePages.map((profilePage: any, index) => (
                                <section className='border-1 bg-white' key={index}>
                                    <button 
                                        onClick={() => setParam({tab: profilePage.tab})} 
                                        className={'flex items-center p-[17px] w-100 border rounded hover:bg-[#EBF2FF] text-[#333333]'}
                                        style={{
                                            backgroundColor: key === profilePage.tab ? '#EBF2FF' : ''
                                        }}
                                    >
                                        {profilePage.icon}
                                        <span className='text-[14px] pl-[10px]'>{profilePage.title}</span>
                                    </button>
                                </section>
                            ))
                        }
                    </aside>
                    <main className='w-75'>
                        <Component />
                    </main>
                </div>
            </div > :
                <div className='my-10'>
                    <h1 className='text-center text-[30px] font-[700]'>Đăng nhập để tiếp tục.</h1>
                </div>}

        </>
    )
}

export default Profile