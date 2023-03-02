import React from 'react'

type Props = {}

const HeaderClient = (props: Props) => {
    return (
        <div>
            <div className="sc-lkcIho hIprbQ menu-homepage "><a href="/">
                <div style={{ width: '200px', height: '48px' }}></div>
            </a>
                <div data-name="ListMenu" className="sc-jwBhTO cMKKZy listMenu-homepage">
                    <div data-name="MenuItem" className="sc-jtJlRs fqkDtm" data-text="Việc làm" tabIndex={0}><span>Việc
                        làm{/* */} <svg width={13} height={7} viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 1L6.5 6L1.5 1" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></span>
                        <div className="sc-fbHdRr fDvwxk">
                            <div className="sc-bjjCGC iJdSOK"><a className="sc-eYPhOV bZvuew" href="#">Việc làm mới nhất</a><a className="sc-eYPhOV bZvuew" href="#">Tìm việc
                                làm</a></div>
                        </div>
                    </div>
                    <a data-name="MenuItem" className="sc-gFCZzz hYPHhx" target="_self" href="#" data-text="Phỏng vấn" tabIndex={0}>Phỏng vấn</a>
                    <a data-name="MenuItem" className="sc-gFCZzz hYPHhx" target="_self" href="#" data-text="Mức lương" tabIndex={0}>Mức lương</a>
                    <a data-name="MenuItem" className="sc-gFCZzz hYPHhx" target="_self" href="#" data-text="Công ty" tabIndex={0}>Công ty</a>
                    <a data-name="MenuItem" className="sc-gFCZzz hYPHhx" target="_blank" href="#" data-text="WowCV" tabIndex={0}>WowCV</a>
                    <a data-name="MenuItem" className="sc-gFCZzz hYPHhx" target="_blank" href="#" data-text="HR Insider" tabIndex={0}>HR Insider</a>
                </div>
                <div className="sc-gCLdxd eAZlAg rightNavigation-homepage">
                    <a target="_blank" href="/employs" tabIndex={0} className="sc-fSTJYd bpcIQX">Nhà tuyển dụng</a>
                    <div className="sc-iJRSss bniaTV" />
                    <div className="sc-iMJOuO hHYTlq NotificationIcon" tabIndex={0}>
                        <div className="notification-icon"><svg fill="currentColor" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18}>
                            <path d="M 12 2 C 11.172 2 10.5 2.672 10.5 3.5 L 10.5 4.1953125 C 7.9131836 4.862095 6 7.2048001 6 10 L 6 16 L 4.4648438 17.15625 L 4.4628906 17.15625 A 1 1 0 0 0 4 18 A 1 1 0 0 0 5 19 L 12 19 L 19 19 A 1 1 0 0 0 20 18 A 1 1 0 0 0 19.537109 17.15625 L 18 16 L 18 10 C 18 7.2048001 16.086816 4.862095 13.5 4.1953125 L 13.5 3.5 C 13.5 2.672 12.828 2 12 2 z M 10 20 C 10 21.1 10.9 22 12 22 C 13.1 22 14 21.1 14 20 L 10 20 z">
                            </path>
                        </svg></div>
                        <div className="new-notification" id="desktopRedDotContainer" />
                    </div>
                    <div className="sc-fVLGaz etNnND FlagIcon flagIcon-homepage" tabIndex={0}><svg width={23} height={23} fill="currentColor" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <path fill="#ECEFF1" d="M1.998 10H45.998V37H1.998z" />
                        <path fill="#F44336" d="M2 10H46V13H2zM2 16H46V19H2zM2 22H46V25H2zM2 28H46V31H2zM2 34H46V37H2z">
                        </path>
                        <path fill="#3F51B5" d="M2 10H23V25H2z" />
                        <g>
                            <path fill="#FFF" d="M4.25 12L4.713 12.988 5.75 13.146 5 13.916 5.178 15 4.25 14.488 3.322 15 3.5 13.916 2.75 13.146 3.787 12.988zM8.25 12L8.713 12.988 9.75 13.146 9 13.916 9.178 15 8.25 14.488 7.322 15 7.5 13.916 6.75 13.146 7.787 12.988zM12.25 12L12.713 12.988 13.75 13.146 13 13.916 13.178 15 12.25 14.488 11.322 15 11.5 13.916 10.75 13.146 11.787 12.988zM16.25 12L16.713 12.988 17.75 13.146 17 13.916 17.178 15 16.25 14.488 15.322 15 15.5 13.916 14.75 13.146 15.787 12.988zM20 12L20.463 12.988 21.5 13.146 20.75 13.916 20.928 15 20 14.488 19.072 15 19.25 13.916 18.5 13.146 19.537 12.988zM4.25 20L4.713 20.988 5.75 21.146 5 21.916 5.178 23 4.25 22.488 3.322 23 3.5 21.916 2.75 21.146 3.787 20.988zM8.25 20L8.713 20.988 9.75 21.146 9 21.916 9.178 23 8.25 22.488 7.322 23 7.5 21.916 6.75 21.146 7.787 20.988zM12.25 20L12.713 20.988 13.75 21.146 13 21.916 13.178 23 12.25 22.488 11.322 23 11.5 21.916 10.75 21.146 11.787 20.988zM16.25 20L16.713 20.988 17.75 21.146 17 21.916 17.178 23 16.25 22.488 15.322 23 15.5 21.916 14.75 21.146 15.787 20.988zM20 20L20.463 20.988 21.5 21.146 20.75 21.916 20.928 23 20 22.488 19.072 23 19.25 21.916 18.5 21.146 19.537 20.988zM5.25 16L5.713 16.988 6.75 17.146 6 17.916 6.178 19 5.25 18.488 4.322 19 4.5 17.916 3.75 17.146 4.787 16.988zM9.25 16L9.713 16.988 10.75 17.146 10 17.916 10.178 19 9.25 18.488 8.322 19 8.5 17.916 7.75 17.146 8.787 16.988zM13.25 16L13.713 16.988 14.75 17.146 14 17.916 14.178 19 13.25 18.488 12.322 19 12.5 17.916 11.75 17.146 12.787 16.988zM17.25 16L17.713 16.988 18.75 17.146 18 17.916 18.178 19 17.25 18.488 16.322 19 16.5 17.916 15.75 17.146 16.787 16.988zM21 16L21.463 16.988 22.5 17.146 21.75 17.916 21.928 19 21 18.488 20.072 19 20.25 17.916 19.5 17.146 20.537 16.988z">
                            </path>
                        </g>
                    </svg></div>
                    <div className="sc-cqYYBx gpqYMH  hidden-mobile div-login-homepage div-no-login">
                        <div tabIndex={0} className="wrapper-user-btn ">
                            <div className="avatar-icon avatar-icon-no-avatar"><svg width={17} height={18} fill="currentColor" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 18">
                                <defs>
                                    <filter id="filter-1">
                                        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0">
                                        </feColorMatrix>
                                    </filter>
                                </defs>
                                <g id="2020-SEARCHRESULT-HOMEPAGE" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Homepage-Header-1-Copy" transform="translate(-1478.000000, -20.000000)">
                                        <g id="section/header/top-nav-blue" transform="translate(0.000000, -2.000000)">
                                            <g id="banner/banner-1" transform="translate(1466.000000, 10.000000)" filter="url(#filter-1)">
                                                <g transform="translate(12.000000, 12.000000)" id="icons/nav/icon-user-avatar" fill="#FFFFFF">
                                                    <path d="M8.08885706,0.14957265 C6.60287,0.176389729 5.51756296,0.619662241 4.85817562,1.48727668 C4.07732234,2.51579441 3.93534924,4.08223311 4.42910075,6.13138125 C4.24769031,6.353806 4.11044975,6.69138717 4.16408391,7.1409692 C4.26977525,8.02751383 4.62470841,8.39506684 4.90865502,8.54177249 C5.04589598,9.24217413 5.43237877,10.0261822 5.80466433,10.3968903 L5.80466433,10.5861881 C5.80624171,10.8527823 5.80150957,11.1051793 5.79204448,11.3686187 C6.00342716,11.8103135 6.67385655,12.5044052 8.13933646,12.5044052 C9.61585884,12.5044052 10.3036406,11.7961162 10.4992483,11.3055195 C10.491361,11.0625876 10.4976709,10.8322751 10.4992483,10.5861881 L10.4992483,10.3968903 C10.8604914,10.02776 11.2327769,9.24217413 11.3700179,8.54177249 C11.6618518,8.39664422 12.0073203,8.03066859 12.114589,7.1409692 C12.1682236,6.70085186 12.0388699,6.36642585 11.862192,6.1440011 C12.0972366,5.34421805 12.5767909,3.2619429 11.7486134,1.92897141 C11.4015675,1.37054328 10.8762664,1.01876488 10.1837521,0.881523913 C9.80200182,0.400392257 9.07005056,0.14957265 8.08885706,0.14957265 Z M10.8652239,12.2393884 C10.3556974,12.8277887 9.45495596,13.3120755 8.13933646,13.3120755 C6.80005505,13.3120755 5.9245529,12.8199014 5.42606885,12.2520082 C5.04116344,12.5753917 4.42594599,12.818324 3.74762888,13.0849183 C2.17014771,13.7048683 0.209338509,14.4715243 0.0626328611,16.9213525 L0.0373931624,17.3504274 L16.2412798,17.3504274 L16.2160401,16.9213525 C16.0693344,14.4715243 14.1164125,13.7048683 12.5436639,13.0849183 C11.862192,12.8151689 11.248552,12.5675044 10.8652239,12.2393884 Z" id="Shape" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg></div>
                            <div className="login-text">
                                <div className="user-text-noLogin">Đăng nhập</div>
                            </div>
                            <div className="dropdown-icon dropdown-icon-noLogin"><svg width={11} height={6} fill="#b4e3f7" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 6">
                                <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Avatar/AvatarBox-Btn-LogIn" transform="translate(-147.000000, -32.000000)" fill="#b4e3f7" fillRule="nonzero">
                                        <g id="icons8-sort_down" transform="translate(147.000000, 32.000000)">
                                            <path d="M5.5,6 C5.372,6 5.244,5.951 5.1465,5.8535 L0.1465,0.8535 C0.0035,0.7105 -0.0395,0.4955 0.038,0.3085 C0.115,0.1215 0.298,0 0.5,0 L10.5,0 C10.702,0 10.885,0.1215 10.962,0.3085 C11.0395,0.4955 10.9965,0.7105 10.8535,0.8535 L5.8535,5.8535 C5.756,5.951 5.628,6 5.5,6 Z" id="Path" />
                                        </g>
                                    </g>
                                </g>
                            </svg></div>
                        </div>
                        <div className="dropdown-not-login animated fadeIn  userProfileMenu-homepage ">
                            <div className="title"><span className="ask">Người tìm việc đăng nhập</span>
                                <div className="social-login-appShell"><a href="https://www.vietnamworks.com/dang-nhap?type=facebook" className="social-login-facebook" tabIndex={0}><svg fill="currentColor" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                    <path d="M44,38.44A5.56,5.56,0,0,1,38.44,44H9.56A5.56,5.56,0,0,1,4,38.44V9.56A5.56,5.56,0,0,1,9.56,4H38.44A5.56,5.56,0,0,1,44,9.56Z" style={{ fill: '#3f51b5' }} />
                                    <path d="M35.52,25.11H31.78V39.56H26.22V25.11H22.89V20.67h3.33V18c0-3.9,1.62-6.21,6.22-6.21h3.78v4.44H33.68c-1.79,0-1.91.67-1.91,1.91v2.53h4.44Z" style={{ fill: '#fff' }} />
                                </svg><span>Với Facebook</span></a><a href="https://www.vietnamworks.com/dang-nhap?type=google" className="social-login-google" tabIndex={0}><svg fill="currentColor" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                    <path style={{ fill: '#FFC107' }} d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 33.652344 32.65625 29.222656 36 24 36 C 17.371094 36 12 30.628906 12 24 C 12 17.371094 17.371094 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 12.953125 4 4 12.953125 4 24 C 4 35.046875 12.953125 44 24 44 C 35.046875 44 44 35.046875 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z ">
                                    </path>
                                    <path style={{ fill: '#FF3D00' }} d="M 6.304688 14.691406 L 12.878906 19.511719 C 14.65625 15.109375 18.960938 12 24 12 C 27.058594 12 29.84375 13.152344 31.960938 15.039063 L 37.617188 9.382813 C 34.046875 6.054688 29.269531 4 24 4 C 16.316406 4 9.65625 8.335938 6.304688 14.691406 Z ">
                                    </path>
                                    <path style={{ fill: '#4CAF50' }} d="M 24 44 C 29.164063 44 33.859375 42.023438 37.410156 38.808594 L 31.21875 33.570313 C 29.210938 35.089844 26.714844 36 24 36 C 18.796875 36 14.382813 32.683594 12.71875 28.054688 L 6.195313 33.078125 C 9.503906 39.554688 16.226563 44 24 44 Z ">
                                    </path>
                                    <path style={{ fill: '#1976D2' }} d="M 43.609375 20.082031 L 42 20.082031 L 42 20 L 24 20 L 24 28 L 35.304688 28 C 34.511719 30.238281 33.070313 32.164063 31.214844 33.570313 C 31.21875 33.570313 31.21875 33.570313 31.21875 33.570313 L 37.410156 38.808594 C 36.972656 39.203125 44 34 44 24 C 44 22.660156 43.863281 21.351563 43.609375 20.082031 Z ">
                                    </path>
                                </svg><span>với Google</span></a></div>
                            </div>
                            <div className="dropdownSection login"><a href="https://www.vietnamworks.com/dang-nhap?type=login" tabIndex={0}><svg width={25} height={25} fill="#555555" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                <path d="M 25 2 C 15.257933 2 6.9235076 8.0691703 3.5761719 16.636719 A 1.0001 1.0001 0 1 0 5.4375 17.363281 C 8.4921642 9.5448298 16.088067 4 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 16.088067 46 8.4921642 40.455171 5.4375 32.636719 A 1.0001 1.0001 0 1 0 3.5761719 33.363281 C 6.9235076 41.930829 15.257933 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25.990234 15.990234 A 1.0001 1.0001 0 0 0 25.292969 17.707031 L 31.585938 24 L 3 24 A 1.0001 1.0001 0 1 0 3 26 L 31.585938 26 L 25.292969 32.292969 A 1.0001 1.0001 0 1 0 26.707031 33.707031 L 34.707031 25.707031 A 1.0001 1.0001 0 0 0 34.707031 24.292969 L 26.707031 16.292969 A 1.0001 1.0001 0 0 0 25.990234 15.990234 z">
                                </path>
                            </svg><span>Đăng nhập</span></a></div>
                            <div className="dropdownSection registration"><a href="https://www.vietnamworks.com/dang-ky?redirectURL=%3Futm_source_navi%3D%26utm_medium_navi%3DHeader&t=1673105585828" tabIndex={0}><svg width={25} height={25} fill="#555555" stroke="unset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                <path d="M 19.875 0.40625 C 15.203125 0.492188 12.21875 2.378906 10.9375 5.3125 C 9.714844 8.105469 9.988281 11.632813 10.875 15.28125 C 10.398438 15.839844 10.019531 16.589844 10.15625 17.71875 C 10.304688 18.949219 10.644531 19.824219 11.125 20.4375 C 11.390625 20.773438 11.738281 20.804688 12.0625 20.96875 C 12.238281 22.015625 12.53125 23.0625 12.96875 23.9375 C 13.21875 24.441406 13.503906 24.90625 13.78125 25.28125 C 13.90625 25.449219 14.085938 25.546875 14.21875 25.6875 C 14.226563 26.921875 14.230469 27.949219 14.125 29.25 C 13.800781 30.035156 13.042969 30.667969 11.8125 31.28125 C 10.542969 31.914063 8.890625 32.5 7.21875 33.21875 C 5.546875 33.9375 3.828125 34.8125 2.46875 36.1875 C 1.109375 37.5625 0.148438 39.449219 0 41.9375 L -0.0625 43 L 25 43 L 24.34375 41 L 2.25 41 C 2.53125 39.585938 3.058594 38.449219 3.90625 37.59375 C 4.972656 36.515625 6.425781 35.707031 8 35.03125 C 9.574219 34.355469 11.230469 33.820313 12.6875 33.09375 C 14.144531 32.367188 15.492188 31.410156 16.0625 29.875 L 16.125 29.625 C 16.277344 27.949219 16.21875 26.761719 16.21875 25.3125 L 16.21875 24.71875 L 15.6875 24.4375 C 15.777344 24.484375 15.5625 24.347656 15.375 24.09375 C 15.1875 23.839844 14.957031 23.476563 14.75 23.0625 C 14.335938 22.234375 13.996094 21.167969 13.90625 20.3125 L 13.8125 19.5 L 12.96875 19.4375 C 12.960938 19.4375 12.867188 19.449219 12.6875 19.21875 C 12.507813 18.988281 12.273438 18.480469 12.15625 17.5 C 12.058594 16.667969 12.480469 16.378906 12.4375 16.40625 L 13.09375 16 L 12.90625 15.28125 C 11.964844 11.65625 11.800781 8.363281 12.78125 6.125 C 13.757813 3.894531 15.75 2.492188 19.90625 2.40625 C 19.917969 2.40625 19.925781 2.40625 19.9375 2.40625 C 21.949219 2.414063 23.253906 3.003906 23.625 3.65625 L 23.875 4.0625 L 24.34375 4.125 C 25.734375 4.320313 26.53125 4.878906 27.09375 5.65625 C 27.65625 6.433594 27.96875 7.519531 28.0625 8.71875 C 28.25 11.117188 27.558594 13.910156 27.125 15.21875 L 26.875 16 L 27.5625 16.40625 C 27.519531 16.378906 27.945313 16.667969 27.84375 17.5 C 27.726563 18.480469 27.492188 18.988281 27.3125 19.21875 C 27.132813 19.449219 27.039063 19.4375 27.03125 19.4375 L 26.1875 19.5 L 26.09375 20.3125 C 26 21.175781 25.652344 22.234375 25.25 23.0625 C 25.046875 23.476563 24.839844 23.839844 24.65625 24.09375 C 24.472656 24.347656 24.28125 24.488281 24.375 24.4375 L 23.84375 24.71875 L 23.84375 25.3125 C 23.84375 26.757813 23.785156 27.949219 23.9375 29.625 L 23.9375 29.75 L 24 29.875 C 24.320313 30.738281 24.882813 31.605469 25.8125 32.15625 L 26.84375 30.4375 C 26.421875 30.1875 26.144531 29.757813 25.9375 29.25 C 25.832031 27.949219 25.835938 26.921875 25.84375 25.6875 C 25.972656 25.546875 26.160156 25.449219 26.28125 25.28125 C 26.554688 24.902344 26.816406 24.4375 27.0625 23.9375 C 27.488281 23.0625 27.796875 22.011719 27.96875 20.96875 C 28.28125 20.804688 28.617188 20.765625 28.875 20.4375 C 29.355469 19.824219 29.695313 18.949219 29.84375 17.71875 C 29.976563 16.625 29.609375 15.902344 29.15625 15.34375 C 29.644531 13.757813 30.269531 11.195313 30.0625 8.5625 C 29.949219 7.125 29.582031 5.691406 28.71875 4.5 C 27.929688 3.40625 26.648438 2.609375 25.03125 2.28125 C 23.980469 0.917969 22.089844 0.40625 19.90625 0.40625 Z M 38 26 C 31.382813 26 26 31.382813 26 38 C 26 44.617188 31.382813 50 38 50 C 44.617188 50 50 44.617188 50 38 C 50 31.382813 44.617188 26 38 26 Z M 38 28 C 43.535156 28 48 32.464844 48 38 C 48 43.535156 43.535156 48 38 48 C 32.464844 48 28 43.535156 28 38 C 28 32.464844 32.464844 28 38 28 Z M 37 32 L 37 37 L 32 37 L 32 39 L 37 39 L 37 44 L 39 44 L 39 39 L 44 39 L 44 37 L 39 37 L 39 32 Z">
                                </path>
                            </svg><span>Tạo tài khoản mới</span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderClient